---
title: Products
taxonomy:
    category: docs
---

## Product Model

Report generated on [2024-04-12 13:59:34] with [/Digital Financial Planners/DFP - Documents/04 Architecture/Data Model/Lists/_fincast_gen_product_overview.py]

| extendingClassName | productType | className | variables | filename |
|---|---|---|---|---|
| Contract | CONTRACT | ChPillarOne | annualPension44(Double?)<br>missingContributionYears(Int?)<br>owner(Person)<br>tag(String)<br>taxCode(String?) | ChPillarOne.kt |
|  |  | ChPillarTwoPension | capitalWithdrawal(Double)<br>conversionRate(Double)<br>endDate(SimDate?)<br>owner(Person)<br>projectedVestedBenefits(Double)<br>startDate(SimDate?)<br>tag(String)<br>taxCode(String?)<br>vestedBenefits(Double) | ChPillarTwoPension.kt |
|  |  | Transfer | amount(ValueProvider<Double>)<br>endDate(SimDate?)<br>fromHolding(Holding?)<br>owner(Person?)<br>periodicity(Periodicity)<br>projectionPhase(ProjectionPhase)<br>startDate(SimDate?)<br>tag(String)<br>taxCode(String?)<br>toHolding(Holding?) | Transfer.kt |
|  | EXPENSE | ChTax | endDate(SimDate?)<br>householdExpenses(HouseholdExpenses)<br>isActive(Boolean)<br>partner1Expenses(PersonalExpenses)<br>partner2Expenses(PersonalExpenses?)<br>startDate(SimDate?)<br>tag(String)<br>taxAggregation(IncomeTaxAggregation) | ChTax.kt |
|  |  | Expense | amount(ValueProvider<Double>)<br>endDate(SimDate?)<br>owner(Person?)<br>periodicity(Periodicity)<br>startDate(SimDate?)<br>tag(String)<br>taxCode(String?) | Expense.kt |
|  | INCOME | Income | amount(ValueProvider<Double>)<br>endDate(SimDate?)<br>owner(Person?)<br>periodicity(Periodicity)<br>startDate(SimDate?)<br>tag(String)<br>taxCode(String?) | Income.kt |
| Valuable | ASSET | ChPillarTwoCapital | capitalWithdrawal(Double)<br>owner(Person)<br>projectedVestedBenefits(Double)<br>tag(String)<br>taxCode(String?)<br>vestedBenefits(Double) | ChPillarTwoCapital.kt |
|  |  | Investment | assetAllocation(AssetAllocation)<br>contributionAmount(ValueProvider<Double>?)<br>contributionEndDate(SimDate?)<br>contributionPeriodicity(Periodicity)<br>contributionStartDate(SimDate?)<br>dividendUtilisation(FundsUtilisation)<br>interestUtilisation(FundsUtilisation)<br>managementFee(Double?)<br>owner(Person?)<br>performanceFee(Double?)<br>reconBalance(Double)<br>tag(String)<br>taxCode(String?)<br>withdrawalAmount(ValueProvider<Double>?)<br>withdrawalEndDate(SimDate?)<br>withdrawalPeriodicity(Periodicity)<br>withdrawalStartDate(SimDate?) | Investment.kt |
|  |  | RealEstate | fiscalValue(Double?)<br>imputedRentalValue(Double?)<br>isSelfOccupied(Boolean?)<br>maintenancePeriodicity(Periodicity)<br>maintenanceRate(Double?)<br>owner(Person?)<br>reconBalance(Double)<br>rentalIncome(Double?)<br>tag(String)<br>taxCode(String?) | RealEstate.kt |
|  |  | TangibleAsset | insurancePeriodicity(Periodicity)<br>insuranceRate(Double?)<br>maintenancePeriodicity(Periodicity)<br>maintenanceRate(Double?)<br>owner(Person?)<br>reconBalance(Double)<br>tag(String)<br>taxCode(String?)<br>yieldPeriodicity(Periodicity)<br>yieldRate(Double?)<br>yieldUtilisation(FundsUtilisation) | TangibleAsset.kt |
|  | LIABILITY | Liability | interestPeriodicity(Periodicity)<br>interestRate(Double)<br>interestUtilisation(FundsUtilisation)<br>owner(Person?)<br>reconBalance(Double)<br>tag(String)<br>taxCode(String?) | Liability.kt |
|  | VALUABLE | BankAccount | creditInterestRate(Double?)<br>debitInterestRate(Double?)<br>interestPeriodicity(Periodicity)<br>owner(Person?)<br>reconBalance(Double)<br>tag(String)<br>taxCode(String?) | BankAccount.kt |
