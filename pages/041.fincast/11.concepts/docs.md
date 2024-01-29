---
title: Concepts
taxonomy:
    category: docs
---

## Some principles
* core engine must be "context free" (dont pollute it with taxes, reports specifics, etc)
* on the client, we want to be flexible in terms of what we want to model, and how we want to model it (which implies that the core engine should support simple building blocks to accomodate)
* handle jurisdiction and application specifics as much as possible outside of core engine
* we only want to model the minimal set of __structurally__ different products.
  we want to avoid to model an investment account separatly from an pillar 3a account, because they are structurally the same.
* instead of building a complex metadata model we accept explicit coding as a tradeoff


## Layering (domain model, fincast household, financial components)
* domain model: model of all potential futures (holdings, goals, concerns, scenarios, measures, ...)
* fincast household: model of exactly one future (household, person, holdings)
* financial components: financial calculations, w/o financial planning context


## Mapping: domain model -> fincast household -> financial components

![timeline](timeline.jpg)


## Basics: Time and Money resolution

* SimDate has a monthly time resolution
* Double for amounts, we are not doing bookkeeping to the cent


## Household Structure
* Household (with partner1 and optional partner2, children)
* Person
* Dependent (child) (nyi)
* Holding (no product entity)
* internal Cash (sum of all bank accounts)
* external Cash (created by fincast)


## Holding Structure

Before we dive into rebalancing, we need to introduce the general structure of holdings and the concept of __buffer assets__.
Buffer assets are typically investment accounts, but can be any other asset that is a. liquid and b. not earmarked for a specific purpose.
These are the assets we would use to cover a negative cashflow in the year, but which can also be filled through positive cashflow.

Holding granularity for Projection, this is a mixture of what is mandated by fincast and what is domain model convention:
* __external Cash__ (mandated by __fincast__): placeholder for all external cash holdings
* __internal Cash__ (mandated by __fincast__): all non-dedicated (see below) cash holdings are aggregated into one internal cash holding
* dedicated holdings (account or investments, anything possible acctually)
  * regulated retirement provision products (AHV, BVG, 3a)
  * large and/or illiquid assets (real estate) and liabilites (mortgage)
  * client mandated buckets (f.ex. "my whisky collection"), these buckets are supposed to be linked to a specific goal or concern, i.e. not to be used for general rebalancing
* __buffer asset(s)__: one (or more, linked by weights) investment account(s) that are used to buffer excess cash


## Result
The result of a projection run () is a list of half-bookings.
A half-booking is a one-sided booking on a holding, but complete with information about the counter holding and the triggering holding.

```kotlin
	val holding: Holding,
	val date: SimDate,
	val bookingKind: BookingKind,
	val amount: Double,
	val counterHolding: Holding,
	val trigHolding: Holding,
```

For example, a salary (income) holding will trigger monthly bookings from externalCash to internalCash with trigger holding salary.


## Projection Lifecycle
1. Holding Lifecycle (cashflow, interest, dividends, ...)
2. EOP Transfers of Holdings and Bookings (f.ex. "Transfer 100% of 3a Account to internal cash")
3. EOY Taxes
4. EOY Rebalancing


## Holdings / Products

Currently fincast supports the following __Product (Holding) Hierarchy__

* _Valuable_ (holdings that have a - positive or negative - value)
	* __Bank Account__ (checking, savings, CH vested benefits account)
	* _Asset_ (positive value)
		* _Financial Asset_
			* __Investment__ (with contribution plan, cash/bond/stock part, withdrawal plan)
			* __ChPillarTwoCapital__ (*)
		* _Real Asset_
			* __Real Estate__
			* __Tangible Asset__ (depreciating, appreciating)
	* _Liability_ (negative value)
		* __Liability__
* _Contract_ (holdings that only generate value flows)
	* __Income__
	* __Expense__
	* _Swiss Retirement Product_
		* __ChPillarOne__
		* __ChPillarTwoPension__ (*)
	* _Swiss Taxes_
		* __ChTax__

(*) need to be reconsidered, might be Investment as well.


## Booking and Projection Listeners

When the booking engine creates a booking, it will notify all registered booking listeners.
The booking listeners can then do internal calculations, f.ex. do an accumulation over the running year of what salary or pillar 3a payments have occured.


## Taxes

How do we now differentiate between an investment account and a pillar 3a account for tax purposes?

Enter `taxCode: String` on `Holding`.

Currently supported tax codes from `ChTax` are:
* SalaryPrimary (ESTV detail, triggers primary deductions)
* SalarySecondary (ESTV detail, triggers secondary deductions)
* ExpenseRent (deduction)
* ExpenseAlimonyMinor (deduction)
* ExpenseAlimonyAdult (deduction)
* Investment3a (deduction)


## Reports (Cashflow Statement, Balance Sheet, P&L Statement, ...)

Reports are generated from the list of bookings.

Roughly speaking, a report is a function that
* takes the list of all bookings
* filters them (f.ex. exclude pension products)
* groups them (f.ex. group by liquidityClass)
* aggregates them (f.ex. typically sum)

These reports are not part of the core engine, they can be specified from the consumer by providing the above criteria.

Of course, we cannot report on more detail than we have in the bookings, so we need to make sure that the bookings are detailed enough to support the reports we want to generate.


## Rebalancing

Lets revisit the projection lifecycle:
1. Holding Lifecycle (cashflow, interest, dividends, ...)
2. EOP Transfers of Holdings and Bookings (f.ex. "Transfer 100% of 3a Account to internal cash")
3. EOY Taxes
4. EOY Rebalancing

Bookings in phase 1 to 3 are either
* __contractually fixed__ flows, f.ex. contribution to an insurance-linked pillar 3a product (where payment is mandatory), or payout of a pillar 3a account at the end of the savings period
* or __individual discretionary and "manual"__ bookings, f.ex. "buying a house" or "payment into my pillar 2 account" (through goals or measures)

In contrast, in phase 4 __EOY Rebalancing__, we do __automatic but voluntary__ rebalancing of holdings.
This is done in 4 steps, but depends on whether we have a positive or negative free cashflow in the year (see below):
1. unconditional transfers (f.ex. "transfer the yearly max amout to my 3a account")
2. ensure minimum liquidity on internalCash (f.ex. 3 months of expenses)
3. handle liquidity overflow or shortfall:
   * distribute positive free cashflow to "buffer assets"
   * cover negative cashflow from "buffer assets"
4. rebalance the "buffer assets"

If there is a __positive free cashflow__ in the year (i.e. when we exceed the minimum cash balance on internalCash), we can distribute this free cashflow to certain other holdings, sequentially, in an absolute or relative way:
* "up to CHF 5000 to my Whisky collection", ...
* "then 10%, capped by yearly max, to my 3a account"
* the rest to my investment account / "buffer assets"

If there is a __negative cashflow__ in the year (i.e. when we fall below the minimum cash balance on internalCash), we need to cover from the buffer assets.

After the cashflow based distribution or collection, we can do a __rebalancing__ of the buffer assets in a relative way:
* rebalance my defensive and my aggressive investment account to 75/25
