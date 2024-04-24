---
title: Termsheets
taxonomy:
  category: docs
---

Generated on 2024-04-25 00:39:37

Download: [termsheets.csv](termsheets.csv) [termsheet_terms.csv](termsheet_terms.csv)

## Termsheets Overview (General)

| Name | Id | # Terms | # ProductModels |
|---|---|---|---|
| [Alimony (Incoming)](#alimonyIncome) | alimonyIncome | [3 terms](#alimonyIncome-terms) | [1 prod model(s)](#alimonyIncome-prod-models) |
| [Alimony (Outgoing)](#alimonyExpense) | alimonyExpense | [3 terms](#alimonyExpense-terms) | [1 prod model(s)](#alimonyExpense-prod-models) |
| [Bank Account](#bankAccount) | bankAccount | [0 terms](#bankAccount-terms) | [1 prod model(s)](#bankAccount-prod-models) |
| [Cashflow](#cashflow) | cashflow | [2 terms](#cashflow-terms) | [2 prod model(s)](#cashflow-prod-models) |
| [Investment](#investment) | investment | [11 terms](#investment-terms) | [1 prod model(s)](#investment-prod-models) |
| [Liability](#liability) | liability | [1 terms](#liability-terms) | [1 prod model(s)](#liability-prod-models) |
| [Profit Share](#profitShare) | profitShare | [5 terms](#profitShare-terms) | [1 prod model(s)](#profitShare-prod-models) |
| [Tangible Asset](#tangibleAsset) | tangibleAsset | [3 terms](#tangibleAsset-terms) | [1 prod model(s)](#tangibleAsset-prod-models) |
| [Transfer](#transfer) | transfer | [4 terms](#transfer-terms) | [1 prod model(s)](#transfer-prod-models) |

## Termsheets Overview (Country: CH)

| Name | Id | # Terms | # ProductModels |
|---|---|---|---|
| [AHV](#chPillarOne) | chPillarOne | [3 terms](#chPillarOne-terms) | [1 prod model(s)](#chPillarOne-prod-models) |
| [BVG (Pensionskasse)](#chPillarTwo) | chPillarTwo | [8 terms](#chPillarTwo-terms) | [1 prod model(s)](#chPillarTwo-prod-models) |
| [CH Real Estate](#chRealEstate) | chRealEstate | [5 terms](#chRealEstate-terms) | [1 prod model(s)](#chRealEstate-prod-models) |
| [CH Salary](#chSalary) | chSalary | [2 terms](#chSalary-terms) | [1 prod model(s)](#chSalary-prod-models) |
| [Steuern CH](#chTax) | chTax | [11 terms](#chTax-terms) | [1 prod model(s)](#chTax-prod-models) |

---
## Termsheets (Detailed)

### <a id="chPillarOne"></a> AHV (chPillarOne)
#### <a id="chPillarOne-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [chPillarOne](../product_models#chPillarOne) | AHV |
#### <a id="chPillarOne-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| annualPension44 | Jährliche Rente (gemäss Tabelle 44) | value |
| missingContributionYears | Fehlende Beitragsjahre | integer |
| retirementAge | Rentenalter (63 .. 70) | integer |

### <a id="alimonyIncome"></a> Alimony (Incoming) (alimonyIncome)
#### <a id="alimonyIncome-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [alimonyIncome](../product_models#alimonyIncome) | Alimony Income |
#### <a id="alimonyIncome-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| payer | Zahler | member |
| periodicity | Periodizität | periodicity |

### <a id="alimonyExpense"></a> Alimony (Outgoing) (alimonyExpense)
#### <a id="alimonyExpense-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [alimonyExpense](../product_models#alimonyExpense) | Alimony Expense |
#### <a id="alimonyExpense-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| periodicity | Periodizität | periodicity |
| recipient | Empfänger | member |

### <a id="chPillarTwo"></a> BVG (Pensionskasse) (chPillarTwo)
#### <a id="chPillarTwo-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [chPillarTwo](../product_models#chPillarTwo) | Pensionskasse |
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

### <a id="bankAccount"></a> Bank Account (bankAccount)
#### <a id="bankAccount-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [bankAccount](../product_models#bankAccount) | Bank Account |
#### <a id="bankAccount-terms"></a> Terms
No terms defined

### <a id="chRealEstate"></a> CH Real Estate (chRealEstate)
#### <a id="chRealEstate-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [chRealEstate](../product_models#chRealEstate) | Immobilie |
#### <a id="chRealEstate-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| fiscalValue | Fiscal Value | value |
| imputedRentalValue | Imputed Rental Value | value |
| isSelfOccupied | Is self occupied? | boolean |
| maintenanceRate | Maintenance Rate | percentage |
| rentalIncome | Rental Income (yearly) | amount |

### <a id="chSalary"></a> CH Salary (chSalary)
#### <a id="chSalary-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [chSalary](../product_models#chSalary) | Erwerbseinkommen |
#### <a id="chSalary-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| annualGrossIncome | Jährliches Bruttoeinkommen | value |
| annualNetIncome | Jährliches Nettoeinkommen | value |

### <a id="cashflow"></a> Cashflow (cashflow)
#### <a id="cashflow-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [expense](../product_models#expense) | Expense |
| [income](../product_models#income) | Income |
#### <a id="cashflow-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| periodicity | Periodizität | periodicity |

### <a id="investment"></a> Investment (investment)
#### <a id="investment-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [investment](../product_models#investment) | Investment |
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

### <a id="liability"></a> Liability (liability)
#### <a id="liability-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [liability](../product_models#liability) | Liability |
#### <a id="liability-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| interestRate | Zinssatz | percentage |

### <a id="profitShare"></a> Profit Share (profitShare)
#### <a id="profitShare-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [profitShare](../product_models#profitShare) | Profit Share |
#### <a id="profitShare-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| fromHolding | Quelle | holding |
| periodicity | Periodizität | periodicity |
| seqNr | Reihenfolge | integer |
| toHolding | Ziel | holding |

### <a id="chTax"></a> Steuern CH (chTax)
#### <a id="chTax-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [chTax](../product_models#chTax) | Steuern CH |
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

### <a id="tangibleAsset"></a> Tangible Asset (tangibleAsset)
#### <a id="tangibleAsset-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [tangibleAsset](../product_models#tangibleAsset) | Tangible Asset |
#### <a id="tangibleAsset-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| insuranceRate | Versicherungskosten | percentage |
| maintenanceRate | Instandhaltungskosten | percentage |
| yieldRate | Zinssatz | percentage |

### <a id="transfer"></a> Transfer (transfer)
#### <a id="transfer-prod-models"></a> Product Models
| Id | Name |
|---|---|
| [transfer](../product_models#transfer) | Transfer |
#### <a id="transfer-terms"></a> Terms
| Id | Name | Type |
|---|---|---|
| amount | Betrag | value |
| fromHolding | Quelle | holding |
| periodicity | Periodizität | periodicity |
| toHolding | Ziel | holding |

