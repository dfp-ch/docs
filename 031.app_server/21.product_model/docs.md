---
title: Product Model
taxonomy:
  category: docs
---

## Termsheet Model

Report generated on [2024-04-09 15:49:18] with [/Digital Financial Planners/DFP - Documents/04 Architecture/Data Model/Lists/gen_termsheet_config_overview.py]

| termsheetId | termsheetName | id | type | name | filename |
|---|---|---|---|---|---|
| alimonyExpense | Alimony (Outgoing) | amount | VALUE | Betrag | TermsheetConfig.kt |
|  |  | periodicity | PERIODICITY | Periodizität | TermsheetConfig.kt |
|  |  | recipient | MEMBER | Empfänger | TermsheetConfig.kt |
| alimonyIncome | Alimony (Incoming) | amount | VALUE | Betrag | TermsheetConfig.kt |
|  |  | payer | MEMBER | Zahler | TermsheetConfig.kt |
|  |  | periodicity | PERIODICITY | Periodizität | TermsheetConfig.kt |
| bankAccount | Bank Account | creditInterestRate | PERCENTAGE | Kreditzinssatz | TermsheetConfig.kt |
|  |  | debitInterestRate | PERCENTAGE | Debitzinssatz | TermsheetConfig.kt |
| cashflow | Cashflow | amount | VALUE | Betrag | TermsheetConfig.kt |
|  |  | periodicity | PERIODICITY | Periodizität | TermsheetConfig.kt |
| chPillarOne | AHV | annualPension44 | VALUE | Jährliche Rente (gemäss Tabelle 44) | SwissTermsheetConfig.kt |
|  |  | missingContributionYears | INTEGER | Fehlende Beitragsjahre | SwissTermsheetConfig.kt |
|  |  | retirementAge | INTEGER | Rentenalter (63 .. 70) | SwissTermsheetConfig.kt |
| chPillarTwo | BVG (Pensionskasse) | annualPension | VALUE | Rente | SwissTermsheetConfig.kt |
|  |  | availablePurchase | VALUE | Möglicher Einkauf (auf Rentenalter) | SwissTermsheetConfig.kt |
|  |  | capitalWithdrawal | PERCENTAGE | Kapitalbezug (in %) | SwissTermsheetConfig.kt |
|  |  | conversionRate | PERCENTAGE | Umwandlungssatz | SwissTermsheetConfig.kt |
|  |  | homeOwnership | VALUE | Bezug Wohneigentum | SwissTermsheetConfig.kt |
|  |  | projectedVestedBenefits | VALUE | Prognostiziertes Freizügigkeitsguthaben | SwissTermsheetConfig.kt |
|  |  | retirementAge | INTEGER | Rentenalter (58 .. 65) | SwissTermsheetConfig.kt |
|  |  | statementDate | DATE | Datum des PK Auszugs | SwissTermsheetConfig.kt |
| chRealEstate | CH Real Estate | fiscalValue | VALUE | Fiscal Value | SwissTermsheetConfig.kt |
|  |  | imputedRentalValue | VALUE | Imputed Rental Value | SwissTermsheetConfig.kt |
|  |  | isSelfOccupied | BOOLEAN | Is self occupied? | SwissTermsheetConfig.kt |
|  |  | maintenanceRate | PERCENTAGE | Maintenance Rate | SwissTermsheetConfig.kt |
|  |  | rentalIncome | VALUE | Rental Income (yearly) | SwissTermsheetConfig.kt |
| chSalary | CH Salary | annualGrossIncome | VALUE | Jährliches Bruttoeinkommen | SwissTermsheetConfig.kt |
|  |  | annualNetIncome | VALUE | Jährliches Nettoeinkommen | SwissTermsheetConfig.kt |
| chTax | Steuern CH | hhChildCareCosts | VALUE | HH Kosten Kinderbetreuung | SwissTermsheetConfig.kt |
|  |  | hhDeductionInsurance | VALUE | HH Versicherungsprämien | SwissTermsheetConfig.kt |
|  |  | hhDeductionOther | VALUE | HH Übrige Abzüge | SwissTermsheetConfig.kt |
|  |  | p1MainMealCosts | VALUE | P1 Verpflegungskosten Haupterwerb | SwissTermsheetConfig.kt |
|  |  | p1MainOtherExpenses | VALUE | P1 Übrige Berufsauslagen Haupterwerb | SwissTermsheetConfig.kt |
|  |  | p1MainTravelCosts | VALUE | P1 Fahrkosten Haupterwerb | SwissTermsheetConfig.kt |
|  |  | p1SecondaryExpenses | VALUE | P1 Berufsauslagen Nebenerwerb | SwissTermsheetConfig.kt |
|  |  | p2MainMealCosts | VALUE | P2 Verpflegungskosten Haupterwerb | SwissTermsheetConfig.kt |
|  |  | p2MainOtherExpenses | VALUE | P2 Übrige Berufsauslagen Haupterwerb | SwissTermsheetConfig.kt |
|  |  | p2MainTravelCosts | VALUE | P2 Fahrkosten Haupterwerb | SwissTermsheetConfig.kt |
|  |  | p2SecondaryExpenses | VALUE | P2 Berufsauslagen Nebenerwerb | SwissTermsheetConfig.kt |
| investment | Investment | assetAllocation | ASSET_ALLOCATION | Asset Allocation | TermsheetConfig.kt |
|  |  | contribution | VALUE | Einzahlung | TermsheetConfig.kt |
|  |  | contributionEndDate | DATE | Ende Einzahlung | TermsheetConfig.kt |
|  |  | contributionPeriodicity | PERIODICITY | Periodiziät der Einzahlung | TermsheetConfig.kt |
|  |  | contributionStartDate | DATE | Start Einzahlung | TermsheetConfig.kt |
|  |  | managementFee | PERCENTAGE | Management Fee | TermsheetConfig.kt |
|  |  | performanceFee | PERCENTAGE | Performance Fee | TermsheetConfig.kt |
|  |  | withdrawal | AMOUNT | Auszahlung | TermsheetConfig.kt |
|  |  | withdrawalEndDate | DATE | Ende Auszahlung | TermsheetConfig.kt |
|  |  | withdrawalPeriodicity | PERIODICITY | Periodizität der Auszahlung | TermsheetConfig.kt |
|  |  | withdrawalStartDate | DATE | Start Auszahlung | TermsheetConfig.kt |
| liability | Liability | interestRate | PERCENTAGE | Zinssatz | TermsheetConfig.kt |
| profitShare | Profit Share | amount | VALUE | Betrag | TermsheetConfig.kt |
|  |  | fromHolding | HOLDING | Quelle | TermsheetConfig.kt |
|  |  | periodicity | PERIODICITY | Periodizität | TermsheetConfig.kt |
|  |  | seqNr | INTEGER | Reihenfolge | TermsheetConfig.kt |
|  |  | toHolding | HOLDING | Ziel | TermsheetConfig.kt |
| tangibleAsset | Tangible Asset | insuranceRate | PERCENTAGE | Versicherungskosten | TermsheetConfig.kt |
|  |  | maintenanceRate | PERCENTAGE | Instandhaltungskosten | TermsheetConfig.kt |
|  |  | yieldRate | PERCENTAGE | Zinssatz | TermsheetConfig.kt |
| transfer | Transfer | amount | VALUE | Betrag | TermsheetConfig.kt |
|  |  | fromHolding | HOLDING | Quelle | TermsheetConfig.kt |
|  |  | periodicity | PERIODICITY | Periodizität | TermsheetConfig.kt |
|  |  | toHolding | HOLDING | Ziel | TermsheetConfig.kt |


## Product Model

Report generated on [2024-04-09 15:52:04] with [/Digital Financial Planners/DFP - Documents/04 Architecture/Data Model/Lists/gen_product_config_overview.py]

| productCategory | productModel | id | name | description | taxCode | terms | filename |
|---|---|---|---|---|---|---|---|
| asset | tangibleAsset | appreciatingAsset | Wachstumsvermögenswert | Appreciating Tangible Asset | None |  | AssetConfig.kt |
|  |  | depreciatingAsset | Verbrauchsvermögenswert | Depreciating Tangible Asset | None |  | AssetConfig.kt |
| cash | bankAccount | bankAccount | Bank Account | Bank Account | None | creditInterestRate<br>debitInterestRate | AssetConfig.kt |
|  |  | savingsAccount | Savings Account | Savings Account | None | creditInterestRate<br>debitInterestRate | AssetConfig.kt |
| expense | alimonyExpense | alimonyExpense | Alimony Expense | Financial support for children/ex-spouse (outgoing) | ChTax.AlimonyExpense | periodicity<br> | ContractConfig.kt |
|  | expense | expense | Expense | Recurring expense (typically living costs) | None | periodicity<br> | ContractConfig.kt |
|  |  | payment | Payment | One-time payment (typically larger, f.ex. legal settlement) | None | periodicity<br>frozen<br>hidden<br> | ContractConfig.kt |
|  |  | rent | Rent | Rent | ChTax.ExpenseRent | periodicity<br> | ContractConfig.kt |
| goal | bankAccount | earlyRetirement | Early Retirement |  |  | retirementAge<br>startDate<br>retirementDate<br>impact<br>on<br>expenses? | GoalConfig.kt |
| income | alimonyIncome | alimonyIncome | Alimony Income | Financial support for children/ex-spouse (incoming) | ChTax.AlimonyIncome | periodicity<br> | ContractConfig.kt |
|  | income | income | Income | Income | None | periodicity<br> | ContractConfig.kt |
| investment | investment | investmentPlan | Investment Plan | Investment Plan | None | bond<br>bondInterestRate<br>cash<br>cash<br>cashInterestRate<br>contributionPeriodicity<br>managementFee<br>performanceFee<br>stock<br>stockCapitalGain<br>stockDividendYield | AssetConfig.kt |
|  |  | portfolio | Investment Portfolio | Investment Portfolio | None | bond<br>bondInterestRate<br>cash<br>cash<br>cashInterestRate<br>contribution<br>contributionEndDate<br>contributionPeriodicity<br>contributionStartDate<br>managementFee<br>performanceFee<br>stock<br>stockCapitalGain<br>stockDividendYield<br>withdrawal<br>withdrawalEndDate<br>withdrawalPeriodicity<br>withdrawalStartDate | AssetConfig.kt |
|  |  | savingsPlan | Savings Plan | Savings Plan | None | bond<br>bondInterestRate<br>cash<br>cashInterestRate<br>cashInterestRate<br>contributionPeriodicity<br>managementFee<br>performanceFee<br>stock<br>stockCapitalGain<br>stockDividendYield | AssetConfig.kt |
| liability | liability | None | Liability | Liability | None | interestRate<br> | LiabilityConfig.kt |
|  |  | None | Loan | Loan | None | interestRate<br> | LiabilityConfig.kt |
| mortgage |  | chFirstMortgage | Erste Hypothek | CH First Mortgage | None | interestRate<br> | SwissRealEstateConfig.kt |
|  |  | chSecondMortgage | Zweite Hypothek | CH Second Mortgage | None | interestRate<br> | SwissRealEstateConfig.kt |
| realEstate | chRealEstate | chRealEstate | Immobilie | CH Real Estate | None | maintenanceRate<br> | SwissRealEstateConfig.kt |
| retirement | chPillarOne | chPillarOne | AHV | AHV | None | missingContributionYears<br>retirementAge | SwissPensionConfig.kt |
|  | chPillarTwo | chPillarTwo | Pensionskasse | Pensionskasse | None |  | SwissPensionConfig.kt |
|  | investment | chPillar1ePortfolio | BVG 1e | BVG 1e | ChTax.Investment3a | bond<br>bondInterestRate<br>cash<br>cashInterestRate<br>contribution<br>contributionEndDate<br>contributionPeriodicity<br>contributionStartDate<br>managementFee<br>performanceFee<br>stock<br>stockCapitalGain<br>stockDividendYield<br>withdrawalEndDate<br>withdrawalPeriodicity<br>withdrawalStartDate | SwissPensionConfig.kt |
|  |  | chPillar3aAccount | Säule 3a Konto | Säule 3a Konto | ChTax.Investment3a | bond<br>cashInterestRate<br>cash<br>contribution<br>contributionEndDate<br>contributionPeriodicity<br>contributionStartDate<br>managementFee<br>performanceFee<br>stock<br>withdrawalEndDate<br>withdrawalPeriodicity<br>withdrawalStartDate | SwissPensionConfig.kt |
|  |  | chPillar3aPortfolio | Säule 3a Depot | Säule 3a Depot | ChTax.Investment3a | bond<br>bondInterestRate<br>cash<br>cashInterestRate<br>contributionPeriodicity<br>managementFee<br>performanceFee<br>stock<br>stockCapitalGain<br>stockDividendYield<br>withdrawalPeriodicity | SwissPensionConfig.kt |
| salary | chSalary | chPrimarySalary | Haupterwerbseinkommen | CH Primary Salary | ChTax.SalaryPrimary |  | SwissIncomeConfig.kt |
|  |  | chSecondarySalary | Nebenerwerbseinkommen | CH Secondary Salary | ChTax.SalarySecondary |  | SwissIncomeConfig.kt |
| tax | chTax | None | Steuern CH | Steuern CH | None |  | SwissTaxConfig.kt |
| transfer | profitShare | profitShare | Profit Share | Profit Share (EOY) | None | periodicity<br>frozen<br>hidden<br> | ContractConfig.kt |
|  | transfer | expenditure | Expenditure | One-time, typically larger, expenditure (e.g. car purchase) | None | periodicity<br>frozen<br>hidden<br> | ContractConfig.kt |
|  |  | transfer | Transfer | Recurring, non-contractual, transfer (f.ex. 3a payments) | None | periodicity<br> | ContractConfig.kt |
