---
title: Termsheet Models
taxonomy:
  category: docs
---

Generated on 2024-05-06 18:17:59

### Download
- [Product Models](./../dfp_product_model.xlsx)
- [Demo Data](./../dfp_demo_data.xlsx)

## <a id="main"></a> Termsheet Models Overview

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [AHV](#chPillarOne) | chPillarOne | chPillarOne | [3](#chPillarOne-terms) | [1](#chPillarOne-prod-models) | [1](#chPillarOne-products) | [4](#chPillarOne-holdings) | [0](#chPillarOne-goals) |
| [Alimony (Incoming)](#alimonyIncome) | alimonyIncome | alimonyIncome | [3](#alimonyIncome-terms) | [1](#alimonyIncome-prod-models) | [1](#alimonyIncome-products) | [0](#alimonyIncome-holdings) | [0](#alimonyIncome-goals) |
| [Alimony (Outgoing)](#alimonyExpense) | alimonyExpense | alimonyExpense | [3](#alimonyExpense-terms) | [1](#alimonyExpense-prod-models) | [1](#alimonyExpense-products) | [5](#alimonyExpense-holdings) | [0](#alimonyExpense-goals) |
| [BVG (Pensionskasse)](#chPillarTwo) | chPillarTwo | chPillarTwo | [8](#chPillarTwo-terms) | [1](#chPillarTwo-prod-models) | [1](#chPillarTwo-products) | [4](#chPillarTwo-holdings) | [0](#chPillarTwo-goals) |
| [Bank Account](#bankAccount) | bankAccount | bankAccount | [0](#bankAccount-terms) | [1](#bankAccount-prod-models) | [2](#bankAccount-products) | [11](#bankAccount-holdings) | [0](#bankAccount-goals) |
| [CH Real Estate](#chRealEstate) | chRealEstate | chRealEstate | [5](#chRealEstate-terms) | [1](#chRealEstate-prod-models) | [1](#chRealEstate-products) | [1](#chRealEstate-holdings) | [0](#chRealEstate-goals) |
| [CH Salary](#chSalary) | chSalary | chSalary | [2](#chSalary-terms) | [1](#chSalary-prod-models) | [2](#chSalary-products) | [5](#chSalary-holdings) | [0](#chSalary-goals) |
| [Cashflow](#cashflow) | cashflow | expense, income | [2](#cashflow-terms) | [2](#cashflow-prod-models) | [4](#cashflow-products) | [9](#cashflow-holdings) | [0](#cashflow-goals) |
| [Investment](#investment) | investment | investment | [11](#investment-terms) | [1](#investment-prod-models) | [6](#investment-products) | [7](#investment-holdings) | [0](#investment-goals) |
| [Liability](#liability) | liability | liability | [1](#liability-terms) | [1](#liability-prod-models) | [4](#liability-products) | [4](#liability-holdings) | [0](#liability-goals) |
| [Profit Share](#profitShare) | profitShare | profitShare | [5](#profitShare-terms) | [1](#profitShare-prod-models) | [1](#profitShare-products) | [0](#profitShare-holdings) | [2](#profitShare-goals) |
| [Steuern CH](#chTax) | chTax | chTax | [11](#chTax-terms) | [1](#chTax-prod-models) | [1](#chTax-products) | [3](#chTax-holdings) | [0](#chTax-goals) |
| [Tangible Asset](#tangibleAsset) | tangibleAsset | tangibleAsset | [3](#tangibleAsset-terms) | [1](#tangibleAsset-prod-models) | [2](#tangibleAsset-products) | [4](#tangibleAsset-holdings) | [4](#tangibleAsset-goals) |
| [Transfer](#transfer) | transfer | transfer | [4](#transfer-terms) | [1](#transfer-prod-models) | [2](#transfer-products) | [1](#transfer-holdings) | [6](#transfer-goals) |

### <a id="chPillarOne"></a> AHV (chPillarOne) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [AHV](#chPillarOne) | chPillarOne | chPillarOne | [3](#chPillarOne-terms) | [1](#chPillarOne-prod-models) | [1](#chPillarOne-products) | [4](#chPillarOne-holdings) | [0](#chPillarOne-goals) |

#### <a id="chPillarOne-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| annualPension44 | Jährliche Rente (gemäss Tabelle 44) | value |
| missingContributionYears | Fehlende Beitragsjahre | integer |
| retirementAge | Rentenalter (63 .. 70) | integer |


#### <a id="chPillarOne-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [chPillarOne](../product_models#chPillarOne) | AHV |

#### <a id="chPillarOne-products"></a> Implementing Products

| Key | Name |
|---|---|
| [chPillarOne](../products#chPillarOne) | AHV |

#### <a id="chPillarOne-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [11](../holdings#11) | null (LGGK) |
| [20](../holdings#20) | null (LGGP) |
| [18](../holdings#18) | AHV (HH01) |
| [33](../holdings#33) | AHV (HH01) |

#### <a id="chPillarOne-goals"></a> Implementing Goals


### <a id="alimonyIncome"></a> Alimony (Incoming) (alimonyIncome) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Alimony (Incoming)](#alimonyIncome) | alimonyIncome | alimonyIncome | [3](#alimonyIncome-terms) | [1](#alimonyIncome-prod-models) | [1](#alimonyIncome-products) | [0](#alimonyIncome-holdings) | [0](#alimonyIncome-goals) |

#### <a id="alimonyIncome-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| payer | Zahler | member |
| periodicity | Periodizität | periodicity |


#### <a id="alimonyIncome-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [alimonyIncome](../product_models#alimonyIncome) | Alimony Income |

#### <a id="alimonyIncome-products"></a> Implementing Products

| Key | Name |
|---|---|
| [alimonyIncome](../products#alimonyIncome) | Alimony Income |

#### <a id="alimonyIncome-holdings"></a> Implementing Holdings

#### <a id="alimonyIncome-goals"></a> Implementing Goals


### <a id="alimonyExpense"></a> Alimony (Outgoing) (alimonyExpense) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Alimony (Outgoing)](#alimonyExpense) | alimonyExpense | alimonyExpense | [3](#alimonyExpense-terms) | [1](#alimonyExpense-prod-models) | [1](#alimonyExpense-products) | [5](#alimonyExpense-holdings) | [0](#alimonyExpense-goals) |

#### <a id="alimonyExpense-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| periodicity | Periodizität | periodicity |
| recipient | Empfänger | member |


#### <a id="alimonyExpense-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [alimonyExpense](../product_models#alimonyExpense) | Alimony Expense |

#### <a id="alimonyExpense-products"></a> Implementing Products

| Key | Name |
|---|---|
| [alimonyExpense](../products#alimonyExpense) | Alimony Expense |

#### <a id="alimonyExpense-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [6](../holdings#6) | Unterhaltsbeitrag Ex-Frau (LGGP) |
| [7](../holdings#7) | Unterhaltsbeitrag Kind I (LGGP) |
| [8](../holdings#8) | Unterhaltsbeitrag Kind K (LGGP) |
| [9](../holdings#9) | Unterhaltsbeitrag Kind L (LGGP) |
| [10](../holdings#10) | Unterhaltsbeitrag Kind M (LGGP) |

#### <a id="alimonyExpense-goals"></a> Implementing Goals


### <a id="chPillarTwo"></a> BVG (Pensionskasse) (chPillarTwo) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [BVG (Pensionskasse)](#chPillarTwo) | chPillarTwo | chPillarTwo | [8](#chPillarTwo-terms) | [1](#chPillarTwo-prod-models) | [1](#chPillarTwo-products) | [4](#chPillarTwo-holdings) | [0](#chPillarTwo-goals) |

#### <a id="chPillarTwo-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| annualPension | Rente | value |
| availablePurchase | Möglicher Einkauf (auf Rentenalter) | value |
| capitalWithdrawal | Kapitalbezug (in %) | percentage |
| conversionRate | Umwandlungssatz | percentage |
| homeOwnership | Bezug Wohneigentum | value |
| projectedVestedBenefits | Prognostiziertes Freizügigkeitsguthaben | value |
| retirementAge | Rentenalter (58 .. 65) | integer |
| statementDate | Datum des PK Auszugs | date |


#### <a id="chPillarTwo-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [chPillarTwo](../product_models#chPillarTwo) | Pensionskasse |

#### <a id="chPillarTwo-products"></a> Implementing Products

| Key | Name |
|---|---|
| [chPillarTwo](../products#chPillarTwo) | Pensionskasse |

#### <a id="chPillarTwo-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [12](../holdings#12) | null (LGGK) |
| [21](../holdings#21) | null (LGGP) |
| [19](../holdings#19) | BVG (HH01) |
| [34](../holdings#34) | BVG (HH01) |

#### <a id="chPillarTwo-goals"></a> Implementing Goals


### <a id="bankAccount"></a> Bank Account (bankAccount) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Bank Account](#bankAccount) | bankAccount | bankAccount | [0](#bankAccount-terms) | [1](#bankAccount-prod-models) | [2](#bankAccount-products) | [11](#bankAccount-holdings) | [0](#bankAccount-goals) |

#### <a id="bankAccount-terms"></a> Terms

| Id | Name | Type |
|---|---|---|


#### <a id="bankAccount-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [bankAccount](../product_models#bankAccount) | Bank Account |

#### <a id="bankAccount-products"></a> Implementing Products

| Key | Name |
|---|---|
| [bankAccount](../products#bankAccount) | Bank Account |
| [savingsAccount](../products#savingsAccount) | Savings Account |

#### <a id="bankAccount-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [4](../holdings#4) | null (LGGK) |
| [8](../holdings#8) | null (LGGK) |
| [4](../holdings#4) | null (LGGP) |
| [16](../holdings#16) | null (LGGP) |
| [17](../holdings#17) | null (LGGP) |
| [4](../holdings#4) | UBS Gemeinschaftskonto (HH01) |
| [11](../holdings#11) | UBS Privatkonto (HH01) |
| [13](../holdings#13) | UBS Savings Bucket (HH01) |
| [12](../holdings#12) | UBS Sparkonto (HH01) |
| [29](../holdings#29) | ZKB Privatkonto (HH01) |
| [30](../holdings#30) | ZKB Sparkonto (HH01) |

#### <a id="bankAccount-goals"></a> Implementing Goals


### <a id="chRealEstate"></a> CH Real Estate (chRealEstate) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [CH Real Estate](#chRealEstate) | chRealEstate | chRealEstate | [5](#chRealEstate-terms) | [1](#chRealEstate-prod-models) | [1](#chRealEstate-products) | [1](#chRealEstate-holdings) | [0](#chRealEstate-goals) |

#### <a id="chRealEstate-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| fiscalValue | Fiscal Value | value |
| imputedRentalValue | Imputed Rental Value | value |
| isSelfOccupied | Is self occupied? | boolean |
| maintenanceRate | Maintenance Rate | percentage |
| rentalIncome | Rental Income (yearly) | amount |


#### <a id="chRealEstate-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [chRealEstate](../product_models#chRealEstate) | Immobilie |

#### <a id="chRealEstate-products"></a> Implementing Products

| Key | Name |
|---|---|
| [chRealEstate](../products#chRealEstate) | Immobilie |

#### <a id="chRealEstate-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [5](../holdings#5) | Eigenheim 8104 Weiningen (HH01) |

#### <a id="chRealEstate-goals"></a> Implementing Goals


### <a id="chSalary"></a> CH Salary (chSalary) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [CH Salary](#chSalary) | chSalary | chSalary | [2](#chSalary-terms) | [1](#chSalary-prod-models) | [2](#chSalary-products) | [5](#chSalary-holdings) | [0](#chSalary-goals) |

#### <a id="chSalary-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| annualGrossIncome | Jährliches Bruttoeinkommen | value |
| annualNetIncome | Jährliches Nettoeinkommen | value |


#### <a id="chSalary-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [chSalary](../product_models#chSalary) | Erwerbseinkommen |

#### <a id="chSalary-products"></a> Implementing Products

| Key | Name |
|---|---|
| [chPrimarySalary](../products#chPrimarySalary) | Haupterwerbseinkommen |
| [chSecondarySalary](../products#chSecondarySalary) | Nebenerwerbseinkommen |

#### <a id="chSalary-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [7](../holdings#7) | null (LGGK) |
| [14](../holdings#14) | null (LGGP) |
| [15](../holdings#15) | null (LGGP) |
| [23](../holdings#23) | Haupterwerb (HH01) |
| [36](../holdings#36) | Haupterwerb (HH01) |

#### <a id="chSalary-goals"></a> Implementing Goals


### <a id="cashflow"></a> Cashflow (cashflow) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Cashflow](#cashflow) | cashflow | expense, income | [2](#cashflow-terms) | [2](#cashflow-prod-models) | [4](#cashflow-products) | [9](#cashflow-holdings) | [0](#cashflow-goals) |

#### <a id="cashflow-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| periodicity | Periodizität | periodicity |


#### <a id="cashflow-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [expense](../product_models#expense) | Expense |
| [income](../product_models#income) | Income |

#### <a id="cashflow-products"></a> Implementing Products

| Key | Name |
|---|---|
| [expense](../products#expense) | Expense |
| [income](../products#income) | Income |
| [payment](../products#payment) | Payment |
| [rent](../products#rent) | Rent |

#### <a id="cashflow-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [9](../holdings#9) | null (LGGK) |
| [18](../holdings#18) | null (LGGP) |
| [9](../holdings#9) | Lebenshaltungskosten (HH01) |
| [24](../holdings#24) | Lebenshaltungskosten (HH01) |
| [37](../holdings#37) | Lebenshaltungskosten (HH01) |
| [5](../holdings#5) | Lebenshaltungskosten (LGGK) |
| [5](../holdings#5) | Lebenshaltungskosten (LGGP) |
| [11](../holdings#11) | Lebenshaltungskosten Kind A (LGGP) |
| [8](../holdings#8) | Nachzahlung Steuern (HH01) |

#### <a id="cashflow-goals"></a> Implementing Goals


### <a id="investment"></a> Investment (investment) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Investment](#investment) | investment | investment | [11](#investment-terms) | [1](#investment-prod-models) | [6](#investment-products) | [7](#investment-holdings) | [0](#investment-goals) |

#### <a id="investment-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| assetAllocation | Asset Allocation | asset_allocation |
| contribution | Einzahlung | value |
| contributionEndDate | Ende Einzahlung | date |
| contributionPeriodicity | Periodiziät der Einzahlung | periodicity |
| contributionStartDate | Start Einzahlung | date |
| managementFee | Management Fee | percentage |
| performanceFee | Performance Fee | percentage |
| withdrawal | Auszahlung | amount |
| withdrawalEndDate | Ende Auszahlung | date |
| withdrawalPeriodicity | Periodizität der Auszahlung | periodicity |
| withdrawalStartDate | Start Auszahlung | date |


#### <a id="investment-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [investment](../product_models#investment) | Investment |

#### <a id="investment-products"></a> Implementing Products

| Key | Name |
|---|---|
| [chPillar1ePortfolio](../products#chPillar1ePortfolio) | BVG 1e |
| [investmentPlan](../products#investmentPlan) | Investment Plan |
| [portfolio](../products#portfolio) | Investment Portfolio |
| [savingsPlan](../products#savingsPlan) | Savings Plan |
| [chPillar3aPortfolio](../products#chPillar3aPortfolio) | Säule 3a Depot |
| [chPillar3aAccount](../products#chPillar3aAccount) | Säule 3a Konto |

#### <a id="investment-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [13](../holdings#13) | null (LGGK) |
| [19](../holdings#19) | null (LGGP) |
| [15](../holdings#15) | CS Portfolio Bucket (HH01) |
| [14](../holdings#14) | UBS Portfolio (HH01) |
| [20](../holdings#20) | UBS Säule 3a Depot (HH01) |
| [31](../holdings#31) | ZKB Depot (HH01) |
| [35](../holdings#35) | ZKB Säule 3a Konto (HH01) |

#### <a id="investment-goals"></a> Implementing Goals


### <a id="liability"></a> Liability (liability) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Liability](#liability) | liability | liability | [1](#liability-terms) | [1](#liability-prod-models) | [4](#liability-products) | [4](#liability-holdings) | [0](#liability-goals) |

#### <a id="liability-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| interestRate | Zinssatz | percentage |


#### <a id="liability-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [liability](../product_models#liability) | Liability |

#### <a id="liability-products"></a> Implementing Products

| Key | Name |
|---|---|
| [chFirstMortgage](../products#chFirstMortgage) | Erste Hypothek |
| [liability](../products#liability) | Liability |
| [loan](../products#loan) | Loan |
| [chSecondMortgage](../products#chSecondMortgage) | Zweite Hypothek |

#### <a id="liability-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [12](../holdings#12) | null (LGGP) |
| [21](../holdings#21) | Privatschuld bei Martin (HH01) |
| [6](../holdings#6) | UBS Fixhypothek (HH01) |
| [7](../holdings#7) | UBS SARON Hypothek (HH01) |

#### <a id="liability-goals"></a> Implementing Goals


### <a id="profitShare"></a> Profit Share (profitShare) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Profit Share](#profitShare) | profitShare | profitShare | [5](#profitShare-terms) | [1](#profitShare-prod-models) | [1](#profitShare-products) | [0](#profitShare-holdings) | [2](#profitShare-goals) |

#### <a id="profitShare-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| fromHolding | Quelle | holding |
| periodicity | Periodizität | periodicity |
| seqNr | Reihenfolge | integer |
| toHolding | Ziel | holding |


#### <a id="profitShare-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [profitShare](../product_models#profitShare) | Profit Share |

#### <a id="profitShare-products"></a> Implementing Products

| Key | Name |
|---|---|
| [profitShare](../products#profitShare) | Profit Share |

#### <a id="profitShare-holdings"></a> Implementing Holdings

#### <a id="profitShare-goals"></a> Implementing Goals

| Key | Name |
|---|---|
| [46](../holdings#46) | Einzahlung Säule 3a (HH01) |
| [47](../holdings#47) | Weinkeller (HH01) |


### <a id="chTax"></a> Steuern CH (chTax) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Steuern CH](#chTax) | chTax | chTax | [11](#chTax-terms) | [1](#chTax-prod-models) | [1](#chTax-products) | [3](#chTax-holdings) | [0](#chTax-goals) |

#### <a id="chTax-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| hhChildCareCosts | HH Kosten Kinderbetreuung | value |
| hhDeductionInsurance | HH Versicherungsprämien | value |
| hhDeductionOther | HH Übrige Abzüge | value |
| p1MainMealCosts | P1 Verpflegungskosten Haupterwerb | value |
| p1MainOtherExpenses | P1 Übrige Berufsauslagen Haupterwerb | value |
| p1MainTravelCosts | P1 Fahrkosten Haupterwerb | value |
| p1SecondaryExpenses | P1 Berufsauslagen Nebenerwerb | value |
| p2MainMealCosts | P2 Verpflegungskosten Haupterwerb | value |
| p2MainOtherExpenses | P2 Übrige Berufsauslagen Haupterwerb | value |
| p2MainTravelCosts | P2 Fahrkosten Haupterwerb | value |
| p2SecondaryExpenses | P2 Berufsauslagen Nebenerwerb | value |


#### <a id="chTax-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [chTax](../product_models#chTax) | Steuern CH |

#### <a id="chTax-products"></a> Implementing Products

| Key | Name |
|---|---|
| [chTax](../products#chTax) | Steuern CH |

#### <a id="chTax-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [10](../holdings#10) | null (HH01) |
| [6](../holdings#6) | null (LGGK) |
| [13](../holdings#13) | null (LGGP) |

#### <a id="chTax-goals"></a> Implementing Goals


### <a id="tangibleAsset"></a> Tangible Asset (tangibleAsset) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Tangible Asset](#tangibleAsset) | tangibleAsset | tangibleAsset | [3](#tangibleAsset-terms) | [1](#tangibleAsset-prod-models) | [2](#tangibleAsset-products) | [4](#tangibleAsset-holdings) | [4](#tangibleAsset-goals) |

#### <a id="tangibleAsset-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| insuranceRate | Versicherungskosten | percentage |
| maintenanceRate | Instandhaltungskosten | percentage |
| yieldRate | Zinssatz | percentage |


#### <a id="tangibleAsset-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [tangibleAsset](../product_models#tangibleAsset) | Tangible Asset |

#### <a id="tangibleAsset-products"></a> Implementing Products

| Key | Name |
|---|---|
| [depreciatingAsset](../products#depreciatingAsset) | Verbrauchsvermögenswert |
| [appreciatingAsset](../products#appreciatingAsset) | Wachstumsvermögenswert |

#### <a id="tangibleAsset-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [10](../holdings#10) | null (LGGK) |
| [16](../holdings#16) | Goldbarren (HH01) |
| [32](../holdings#32) | Lebensversicherung Axa (HH01) |
| [17](../holdings#17) | Opel Corsa (HH01) |

#### <a id="tangibleAsset-goals"></a> Implementing Goals

| Key | Name |
|---|---|
| [41](../holdings#41) | Heimkino (HH01) |
| [43](../holdings#43) | Kunstsammlung (HH01) |
| [39](../holdings#39) | Porsche Cayenne E-Hybrid (HH01) |
| [26](../holdings#26) | Weinkeller (HH01) |


### <a id="transfer"></a> Transfer (transfer) ([up](#main))

| Name | Id | Product Models | Terms# | Prod Models# | Products# | Holdings# | Goals# |
|---|---|---|---|---|---|---|---|
| [Transfer](#transfer) | transfer | transfer | [4](#transfer-terms) | [1](#transfer-prod-models) | [2](#transfer-products) | [1](#transfer-holdings) | [6](#transfer-goals) |

#### <a id="transfer-terms"></a> Terms

| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| fromHolding | Quelle | holding |
| periodicity | Periodizität | periodicity |
| toHolding | Ziel | holding |


#### <a id="transfer-prod-models"></a> Implementing Product Models

| Key | Name |
|---|---|
| [transfer](../product_models#transfer) | Transfer |

#### <a id="transfer-products"></a> Implementing Products

| Key | Name |
|---|---|
| [expenditure](../products#expenditure) | Expenditure |
| [transfer](../products#transfer) | Transfer |

#### <a id="transfer-holdings"></a> Implementing Holdings

| Key | Name |
|---|---|
| [22](../holdings#22) | Rückzahlung Schulden (HH01) |

#### <a id="transfer-goals"></a> Implementing Goals

| Key | Name |
|---|---|
| [25](../holdings#25) | Einzahlung Säule 3a (HH01) |
| [27](../holdings#27) | Eröffnung Weinkeller (HH01) |
| [44](../holdings#44) | Investition Kunstsammlung (HH01) |
| [45](../holdings#45) | Investition Kunstsammlung (2) (HH01) |
| [42](../holdings#42) | Kauf Heimkino (HH01) |
| [40](../holdings#40) | Kauf Porsche Cayenne (HH01) |


