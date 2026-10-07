# Module 10. Total stock and uncertainty

## Module overview

This module adds up all carbon pools into a total stock per hectare and a stock for the whole site, then calculates the 95% confidence interval for both. The result is a single "Total" sheet in the workbook for the three Sample Forest strata. This module uses pure calculation (roots, squares, multiplication); there is no new material on field measurement.

| Aspect | Details |
| --- | --- |
| Week | 6 |
| Study time | Video 42 minutes (3 videos), exercises and assignment about 60 minutes, live session 60 minutes |
| Prerequisites | The "Soil" sheet (Module 7) and the "Vegetation" sheet (Module 8); basic statistics (mean, standard deviation, confidence interval) |
| Tools | Excel or Google Sheets, a calculator with a square root key |
| Output of the week | The "Total" sheet: total stock per hectare and site stock, with a 95% confidence interval |
| Main references | KD 3.2, 3.3 and chapter 4 (Table 8); BC chapters 3 and 4 |

## Learning objectives

After this module participants can:

1. Add the means of all pools into a total stock per hectare, then multiply by area to get the site stock.
2. Convert carbon stock into CO2 equivalent (CO2e) with the factor 3.67.
3. Distinguish standard deviation, standard error, and the half-width of the 95% confidence interval, and calculate all three from soil core data.
4. Combine the uncertainty of several pools with the square root of the sum of squares, and explain why uncertainties are not added directly.
5. Calculate the stock and uncertainty of a site from three strata with area weighting, and combine area and stock uncertainty with relative uncertainty.
6. Build a "Total" sheet that can be recalculated and write a one-line report with the soil depth stated.

## Video plan

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 10.1 | Adding up pools and CO2 equivalent | 12 | Two stages of addition, stock per hectare to site stock, the factor 3.67, the stratum B example |
| 10.2 | Uncertainty of one pool and total stock per hectare | 15 | Standard deviation, standard error, 95% interval half-width, square root of the sum of squares, the error of adding directly |
| 10.3 | Site uncertainty and the report | 15 | The three Sample Forest strata, area weighting, area uncertainty (book example), Monte Carlo mentioned only, KD Table 8 |
|  | Total | 42 |  |

## Content

### 10.1 Adding up pools and CO2 equivalent

Total stock per hectare is obtained in two stages: each pool is averaged over all plots or cores, then the means of all pools are summed. The stock of the whole site is total stock per hectare multiplied by area. KD 3.2 lists nine pools (live trees, roots, dead trees, saplings and seedlings, sapling roots, dead saplings, non-tree plants, downed dead wood, soil); the Sample Forest uses four groups, and only pools that were actually measured are summed.

```latex
S_{ha} = \sum_{i} S_i \qquad S_{site} = S_{ha} \times A
```

S_i = mean of pool i (Mg C/ha), A = area (ha). Greenhouse gas reporting uses CO2e: carbon stock multiplied by 3.67, that is 44 (molecular weight of CO2) divided by 12 (atomic weight of C) (KD 3.2.1).

```latex
CO_2e = C \times 3.67
```

**Example 10.1 (illustrative numbers, Sample Forest stratum B, 264 ha).**

| Pool | Mean (Mg C/ha) |
| --- | --- |
| Live aboveground trees | 120 |
| Roots | 40 |
| Dead trees + downed dead wood + litter | 15 |
| Soil to 1 m | 495 |

1. Total stock per hectare = 120 + 40 + 15 + 495 = 670 Mg C/ha.
2. Stratum stock = 670 × 264 = 176,880 Mg C.
3. CO2e per hectare = 670 × 3.67 = 2,458.9, rounded to 2,459 Mg CO2e/ha.
4. Soil contributes 495 ÷ 670 = 73.9% of the stock. This is important to remember in section 10.2.

The soil depth must be written as well (here 1 m); a number without a depth cannot be compared (BC chapter 3).

### 10.2 Uncertainty of one pool and total stock per hectare

Uncertainty expresses how wide the spread of measured results is around their mean. Carbon reports use it as a 95% confidence interval, in percent of the mean (KD 3.3.1). Three quantities are often confused:

| Quantity | Formula | Meaning |
| --- | --- | --- |
| Standard deviation (SD) | square root of the sum of squared differences from the mean divided by (n - 1) | Spread between units (cores, plots) |
| Standard error (SE) | SD ÷ root n | Precision of the mean |
| 95% interval half-width (CI) | t × SE, roughly 2 × SE | Used in reports |

```latex
SE = \frac{SD}{\sqrt{n}} \qquad CI_{95} = t_{0.975;\,n-1} \times SE \qquad U(\%) = 100 \times \frac{CI_{95}}{\bar{x}}
```

The book states CI is roughly 2 × SE. For large n that is enough. For small n, use the two-tailed t value with n - 1 degrees of freedom (outside the book; t for 7 degrees of freedom = 2.365, not 2). At n = 8, using 2 produces an interval that is too narrow.

### Sample Forest data: eight soil cores of stratum B

Illustrative data, soil carbon to 1 m (Mg C/ha). Core B-07 is the sample point of Module 7. The mean is exactly 495, and the resulting CI is exactly 70 (after rounding), the same as the canonical stratum B soil figure.

```csv
core,soil_stock_MgC_ha
B-01,528
B-02,408
B-03,591
B-04,418
B-05,625
B-06,491
B-07,495
B-08,404
```

**Example 10.2a: one pool (illustrative numbers).**

1. n = 8; mean = 3,960 ÷ 8 = 495 Mg C/ha.
2. Sum of squared differences = 49,000; SD = √(49,000 ÷ 7) = √7,000 = 83.67 Mg C/ha.
3. SE = 83.67 ÷ √8 = 29.58 Mg C/ha.
4. t (95%, 7 degrees of freedom) = 2.365; CI = 2.365 × 29.58 = 69.95, rounded to 70 Mg C/ha.
5. U = 100 × 70 ÷ 495 = 14.1%. Result: stratum B soil = 495 ± 70 Mg C/ha.

**Example 10.2b: total stock per hectare, stratum B (illustrative numbers).** Total stock is the sum of several pools that each have their own CI. Their CIs are not added directly, because it is unlikely that all pools miss in the same direction at once. What is added are their squares, then the root is taken (KD 3.3.2). This method assumes the errors between pools are independent.

```latex
CI_{total} = \sqrt{CI_1^2 + CI_2^2 + \dots + CI_n^2}
```

| Pool | Mean (Mg C/ha) | 95% CI | CI squared |
| --- | --- | --- | --- |
| Live aboveground trees | 120 | 18 | 324 |
| Roots | 40 | 8 | 64 |
| Dead trees + downed dead wood + litter | 15 | 6 | 36 |
| Soil to 1 m | 495 | 70 | 4,900 |
| Total | 670 | 73 | 5,324 |

1. Sum of squares = 324 + 64 + 36 + 4,900 = 5,324.
2. CI total = √5,324 = 72.97, rounded to 73 Mg C/ha.
3. U = 100 × 72.97 ÷ 670 = 10.9%. Result: 670 ± 73 Mg C/ha (KD 3.3.2 gives an example with the same method).
4. If the CIs are added directly: 18 + 8 + 6 + 70 = 102, far larger than 73.
5. Soil contributes 4,900 ÷ 5,324 = 92.0% of the sum of squares. Adding soil cores is more useful than adding tree plots.

**Overview of strata A and C (results with the same method).** A: √(12² + 6² + 4² + 58²) = √3,560 = 59.67, rounded to 60, so 483 ± 60 (12.4%). C: √(14² + 7² + 5² + 62²) = √4,114 = 64.14, rounded to 64, so 565 ± 64 (11.4%).

The book also mentions Monte Carlo simulation as a second method. It is used when the data between pools are closely related, the uncertainty is very large (more than 100%), or the distribution is far from normal. This module does not calculate it; for ordinary cases the result is almost the same as the square root of the sum of squares (KD 3.3.2).

### 10.3 Site uncertainty and the report

Site stock combines several strata. Each stratum is multiplied by its own area, so its uncertainty is also multiplied by area. After that the uncertainty between strata is combined with the square root of the sum of squares, just as between pools. Taking the mean of CI per hectare without area weights is an error, because stratum B (264 ha) has far more influence than stratum C (120 ha).

```latex
CI_{site} = \sqrt{\sum_{h} (A_h \times CI_h)^2} \qquad CI_{ha} = \frac{CI_{site}}{\sum_h A_h}
```

A_h = area of stratum h; CI_h = total CI per hectare of stratum h (result of 10.2). Area is treated as having no uncertainty, as in all other modules.

**Example 10.3a: Sample Forest, 564 ha (illustrative numbers).** CI uses the unrounded values from 10.2 (59.67; 72.97; 64.14).

| Stratum | Area (ha) | Stock (Mg C/ha) | CI (Mg C/ha) | Stratum stock (Mg C) | Stratum CI (Mg C) |
| --- | --- | --- | --- | --- | --- |
| A | 180 | 483 | 60 | 86,940 | 10,740 |
| B | 264 | 670 | 73 | 176,880 | 19,263 |
| C | 120 | 565 | 64 | 67,800 | 7,697 |
| Site | 564 | 588 | 41.4 | 331,620 | 23,359 |

1. Site stock = 86,940 + 176,880 + 67,800 = 331,620 Mg C.
2. Weighted mean = 331,620 ÷ 564 = 587.98, rounded to 588 Mg C/ha. The plain mean (483 + 670 + 565) ÷ 3 = 572.7 is not used.
3. Site CI = √(10,740² + 19,263² + 7,697²) = 23,359 Mg C.
4. U = 100 × 23,359 ÷ 331,620 = 7.0%. Per hectare: 23,359 ÷ 564 = 41.4 Mg C/ha.
5. CO2e = 331,620 × 3.67 = 1,217,045 Mg CO2e, with a CI of 23,359 × 3.67 = 85,728 Mg CO2e.
6. If the stratum CIs are added directly: 10,740 + 19,263 + 7,697 = 37,700 (11.4%), too large. The site uncertainty (7.0%) is smaller than the uncertainty of each stratum (11 to 12%) because errors between strata partly cancel.

If the already-rounded CI per hectare (60, 73, 64) is used, the result is 23,389. That difference of 30 Mg C is only due to rounding; write on the sheet which number is used. The report uses unrounded values in the cells and rounds only for display.

**Example 10.3b: area uncertainty (book example).** The book gives a case where the area from satellite imagery also contains uncertainty: mangrove area 400,000 ± 30,000 ha, stock 300 ± 30 Mg C/ha (KD 3.3.2). For multiplication, what is combined is relative uncertainty.

```latex
CI = A \times S \times \sqrt{\left(\frac{CI_A}{A}\right)^2 + \left(\frac{CI_S}{S}\right)^2}
```

1. Site stock = 400,000 × 300 = 120,000,000 Mg C.
2. Relative area = 30,000 ÷ 400,000 = 0.075; relative stock = 30 ÷ 300 = 0.10.
3. Combined = √(0.075² + 0.10²) = 0.125 (12.5%).
4. CI = 120,000,000 × 0.125 = 15,000,000 Mg C. Result: 120 million ± 15 million Mg C.

For the Sample Forest, area is treated as having no uncertainty; this form is used in Exercise 4 as a separate exercise.

**Writing the report.** The simplest report contains the species composition, biomass, and carbon stock above and below ground. For long-term baseline data, a breakdown per component (trees per diameter class, dead wood per size class, soil per layer) makes shifts in stock easy to read (KD chapter 4). A participant's report at minimum contains: stock per hectare and for the site, 95% CI, number of plots and cores, soil depth, conversion factors, and units.

**KD Table 8 as a report example (Mg C/ha).**

| Component | Yap | Palau | Sundarbans | Kalimantan |
| --- | --- | --- | --- | --- |
| Trees (live and dead) | 169.3 | 105.3 | 79.7 | 121.0 |
| Downed dead wood | 20.0 | 17.4 | 3.2 | 18.6 |
| Total aboveground | 189.3 | 122.7 | 83.7 | 139.6 |
| Roots | 145.2 | 80.0 | 43.0 | 60.2 |
| Total belowground (roots + soil) | 877.0 | 600.1 | 481.8 | 1,119.4 |
| Ecosystem stock | 1,066.3 | 723.3 | 565.5 | 1,259.0 |
| CO2 equivalent (as written in the book) | 3,912 | 2,653 | 2,074 | 4,621 |

Note two things in Table 8 (KD Table 8). First, the sum of components does not always exactly equal the written total: at Sundarbans, 79.7 + 3.2 = 82.9, whereas the aboveground total is written as 83.7 (a difference of 0.8; litter and seedlings are written "trace"). Second, ecosystem stock × 3.67 gives 3,913; 2,655; 2,075; 4,621, differing by 1 to 2 Mg from the CO2e figures in the book at three sites (rounding; Kalimantan is the same). Participants write on the sheet which number is used: the written total, or the recalculated sum of components.

### The "Total" sheet in the workbook

The "Total" sheet is built from the canonical Sample Forest data. Copy the following csv block into cells A1 to G5 (columns B, D, F = means; C, E, G = 95% CI, Mg C/ha; illustrative numbers).

```csv
Pool,A mean,A CI,B mean,B CI,C mean,C CI
Live aboveground trees,70,12,120,18,95,14
Roots,25,6,40,8,30,7
Dead trees + downed dead wood + litter,8,4,15,6,10,5
Soil to 1 m,380,58,495,70,430,62
```

| Cell | Content (Mac/Windows; use semicolons if Excel is in Indonesian) | Result |
| --- | --- | --- |
| B6 | =SUM(B2:B5) | 483 |
| C6 | =SQRT(SUMSQ(C2:C5)) | 59.67 |
| D6, F6 | copied from B6 to D6 and F6 | 670; 565 |
| E6, G6 | copied from C6 to E6 and G6 | 72.97; 64.14 |
| B7 | =C6/B6 (percent format), copied to D7 and F7 | 12.4%; 10.9%; 11.4% |
| A10:A12 | A, B, C (stratum names) |  |
| B10:B12 | 180; 264; 120 (area, ha) |  |
| C10 | =B6 ; C11 =D6 ; C12 =F6 | 483; 670; 565 |
| D10 | =C6 ; D11 =E6 ; D12 =G6 | 59.67; 72.97; 64.14 |
| E10 | =B10*C10, copied to E11:E12 | 86,940; 176,880; 67,800 |
| F10 | =B10*D10, copied to F11:F12 | 10,740; 19,263; 7,697 |
| B13 | =SUM(B10:B12) | 564 |
| E13 | =SUM(E10:E12) | 331,620 |
| C13 | =E13/B13 | 588 |
| F13 | =SQRT(SUMSQ(F10:F12)) | 23,359 |
| D13 | =F13/B13 | 41.4 |
| F14 | =F13/E13 (percent format) | 7.0% |
| E15, F15 | =E13*3.67 ; =F13*3.67 (type 3,67 if your decimal separator is a comma) | 1,217,045; 85,728 |

Check the sheet with three tests: C13 must be 588 (not 572.7), F14 must be less than each stratum U, and E13 equals SUMPRODUCT(B10:B12,C10:C12).

## Self-study exercises

All problems use the Sample Forest data (illustration) above. Work on the "Total" sheet, then compare with the key.

1. Stratum A (180 ha): calculate total stock per hectare, 95% CI with the square root of the sum of squares, uncertainty in percent, and CO2e per hectare.
2. Stratum C (120 ha): calculate total stock per hectare, CI, stratum stock (Mg C), and stratum CI (Mg C).
3. From the eight soil cores of stratum B, calculate SD, SE, and 95% CI with t. Compare with the CI if 2 × SE is used; which is narrower and by how much?
4. Calculate the site stock, site CI, and relative uncertainty for the three strata. Then assume the site area is 564 ± 28 ha (a separate problem, illustration) and calculate the combined CI of area and stock per hectare.
5. Calculate the percent contribution of soil to the sum of squares of CI for strata A, B, and C. What strategy makes sense for reducing uncertainty, and why?

### Answer key

1. Stock = 70 + 25 + 8 + 380 = 483 Mg C/ha. Sum of squares = 12² + 6² + 4² + 58² = 144 + 36 + 16 + 3,364 = 3,560; CI = √3,560 = 59.67, rounded to 60. U = 100 × 59.67 ÷ 483 = 12.4%. CO2e = 483 × 3.67 = 1,772.6 Mg CO2e/ha.
2. Stock = 95 + 30 + 10 + 430 = 565 Mg C/ha. Sum of squares = 196 + 49 + 25 + 3,844 = 4,114; CI = 64.14, U = 11.4%. Stratum stock = 565 × 120 = 67,800 Mg C; stratum CI = 120 × 64.14 = 7,697 Mg C.
3. SD = 83.67; SE = 29.58; CI with t (2.365) = 69.95 (U = 14.1%). With 2 × SE: 59.16 (U = 12.0%). The 2 × SE method is narrower by about 10.8 Mg C/ha (15%), so it is too optimistic at n = 8.
4. Site stock = 331,620 Mg C; CI = √(10,740² + 19,263² + 7,697²) = 23,359 (7.0%). With area 564 ± 28 ha: relative area = 28 ÷ 564 = 0.0496; relative stock = 41.4 ÷ 588 = 0.0704; combined = √(0.0496² + 0.0704²) = 0.0862 (8.6%); CI = 331,620 × 0.0862 = 28,578 Mg C.
5. Soil contribution: A = 3,364 ÷ 3,560 = 94.5%; B = 4,900 ÷ 5,324 = 92.0%; C = 3,844 ÷ 4,114 = 93.4%. In all three strata, adding soil cores reduces the CI the most because soil dominates the sum of squares; adding tree plots hardly changes the total CI.

## Find the error

The four report excerpts below look reasonable but are wrong. Find the errors before opening the key.

**Report 1 (stratum B).** "Soil B: 495 ± 84 Mg C/ha (n = 8 cores). Total stock B: 670 ± 86.5 Mg C/ha (√(18² + 8² + 6² + 84²))."

**Report 2 (stratum B).** "Total stock B: 670 Mg C/ha. Uncertainty: 18 + 8 + 6 + 70 = ±102 Mg C/ha (15.2%)."

**Report 3 (site).** "Site mean: (483 + 670 + 565) ÷ 3 = 572.7 Mg C/ha. CI: √(60² + 73² + 64²) = ±114.1 Mg C/ha. Site stock: 572.7 × 564 = 322,984 ± 64,368 Mg C."

**Report 4 (site, 564 ha).** "Total stock of A, B, C is 86,940, 176,880, 67,800 Mg C respectively, so site stock is 331,620 Mg C. CI = 10,740 + 19,263 + 7,697 = ±37,700 Mg C (11.4%)."

### Key

1. **SD used as CI.** 84 is the core standard deviation (83.67), not the interval half-width. Correct: SE = 83.67 ÷ √8 = 29.58; CI = 2.365 × 29.58 = 70. The correct total for B = 670 ± 73 (not 86.5), so the uncertainty appears 18% too large. How to detect it: compare with the formula; if the ± number equals the SD, ask whether it was divided by root n and multiplied by t.
2. **CIs added directly.** Correct √5,324 = 73 (10.9%), not 102 (15.2%). A difference of 29 Mg C/ha. How to detect it: a direct sum is always ≥ the square root of the sum of squares; if the total uncertainty is almost the same as the sum of components, suspect an error.
3. **CI not weighted by area.** The plain mean gives 572.7, whereas the area-weighted mean = 588 Mg C/ha; the correct site stock is 331,620 Mg C, not 322,984 (a difference of 8,636 Mg C). The combined CI per hectare of 114.1 is meaningless: the correct one is √(Σ (A × CI)²) = 23,359 Mg C, or 41.4 Mg C/ha, uncertainty 7.0% (not 19.9%). How to detect it: the site CI must be smaller than the CI per hectare of the largest stratum (73); the figure of 114 violates this.
4. **CIs between strata added directly.** Correct is 23,359 Mg C (7.0%), not 37,700 (11.4%). Check: the site CI per hectare (41.4) must be smaller than the CI of any stratum (60, 73, 64), because errors between strata partly cancel.

## The role of AI and example prompts

AI helps draft sheet formulas and explain terms. AI does not replace calculation: every number it produces is checked with a hand calculation and compared with the numbers in this module.

**Prompt 1: drafting formulas.** "I have a table in Excel: column B holds the means of four carbon pools (B2:B5) and column C holds the 95% confidence interval half-width of each. Write formulas for the total stock in B6 and its combined uncertainty in C6 with the square root of the sum of squares. Also give the function names in Indonesian-language Excel." Check: fill in with the stratum B numbers (120, 40, 15, 495 and 18, 8, 6, 70); B6 must be 670 and C6 must be 72.97. If C6 gives 102, the formula adds directly.

**Prompt 2: explaining terms.** "Explain the difference between standard deviation, standard error, and the 95% confidence interval half-width with an example of eight values: 528, 408, 591, 418, 625, 491, 495, 404." Check: recalculate the SD (83.67), SE (29.58), and CI (69.95); if the numbers differ, ask the AI to show its steps and check each step.

**Prompt 3: checking a calculation.** "I calculated the site stock from three strata: 180 ha × 483, 264 ha × 670, 120 ha × 565 Mg C/ha, and CI per stratum 60, 73, 64 Mg C/ha. Check my steps and tell me if anything is wrong." Check: site stock must be 331,620; site CI about 23,389 (with rounded values) or 23,359 (unrounded).

**Example of an AI answer that can be wrong.** For Prompt 2, the AI may answer: "95% CI = SE × T.INV.2T(0.95, 7) = 29.58 × 0.065 = 1.92 Mg C/ha." The number is wrong because the first argument of T.INV.2T is the significance level (0.05), not the confidence level. How to catch it: CI cannot be far smaller than SE (the t value for 95% is always more than 1.96). The correct result is 29.58 × 2.365 = 69.95. In another AI answer, "SD is enough as the uncertainty" is also wrong (see Find the error, Report 1).

## Excel notes: Mac and Windows

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Sum the pool means | =SUM(B2:B5) | =SUM(B2:B5) | =SUM(B2:B5) |
| Core mean | =AVERAGE(B2:B9) | =AVERAGE(B2:B9) | =AVERAGE(B2:B9) |
| Sample standard deviation | =STDEV.S(B2:B9) | =STDEV.S(B2:B9) | =STDEV.S(B2:B9) |
| Standard error | =STDEV.S(B2:B9)/SQRT(COUNT(B2:B9)) | same | same |
| Two-tailed t value | =T.INV.2T(0.05, n-1) | =T.INV.2T(0.05, n-1) | =T.INV.2T(0.05, n-1) |
| Square root of the sum of squares of CI | =SQRT(SUMSQ(C2:C5)) | =SQRT(SUMSQ(C2:C5)) | =SQRT(SUMSQ(C2:C5)) |
| Area × stock for all strata at once | =SUMPRODUCT(B10:B12, C10:C12) | =SUMPRODUCT(B10:B12, C10:C12) | =SUMPRODUCT(B10:B12, C10:C12) |
| Lock a cell (turn B6 into `$B$6`) | Cmd+T or Fn+F4 | F4 | F4 (Windows) or Cmd+T (Mac) |
| Percent format | Cmd+Shift+5 | Ctrl+Shift+5 | Format > Number > Percent |
| Copy formulas down | Drag the fill handle at the cell corner, or Cmd+D | Drag the fill handle, or Ctrl+D | Drag the fill handle, or Cmd/Ctrl+D |

In Indonesian-language Excel, function names and argument separators differ: SUM becomes JUMLAH, AVERAGE becomes RATA.RATA (RATA2 in older versions), SQRT becomes AKAR, SUMSQ becomes JUMLAH.KUADRAT, SUMPRODUCT becomes SUMPRODUK, and the semicolon (;) argument separator replaces the comma. Do not memorize other function names (STDEV.S, T.INV.2T): find them through Formulas > Insert Function and copy the result. The decimal separator follows the regional settings; the number 0.05 becomes 0,05 if the decimal separator is a comma. The arguments in the table are written with commas as in English settings; with Indonesian Excel, replace them with semicolons.

## Weekly assignment

Submit the "Total" sheet in the workbook, complete with the "Soil" and "Vegetation" sheets as the source of numbers, plus a one-paragraph note giving the numbers used where books differ. Pass criteria:

- [ ] The table of CI per pool (Mg C/ha) for the three strata is filled in, with means and CIs that come from the "Soil" and "Vegetation" sheets (or the canonical data if the sheets are not yet complete).
- [ ] Total stock per hectare of each stratum = 483, 670, 565 Mg C/ha (rounding tolerance).
- [ ] The total CI per hectare of each stratum uses SQRT(SUMSQ(...)) = 59.67; 72.97; 64.14 (not a direct sum).
- [ ] Stock of each stratum = area × stock per hectare, and site stock = 331,620 Mg C.
- [ ] Area-weighted mean = 588 Mg C/ha.
- [ ] Site CI is calculated from A × CI per stratum = 23,359 Mg C (7.0%), with 41.4 Mg C/ha.
- [ ] CO2e is calculated with 3.67: 1,217,045 Mg CO2e.
- [ ] SD, SE, and CI (with t) for the eight B cores are calculated and compared with 2 × SE.
- [ ] Soil depth (1 m) and units are written in the one-line report.
- [ ] A one-paragraph note states which number is used where books differ (e.g. KD Table 8).

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0-5 | Opening: questions from videos 10.1 to 10.3 | List of participants' questions |
| 5-15 | Demonstration: stratum B in Excel, from the pool table to 670 ± 73 | Blank "Total" sheet |
| 15-30 | Pair work: strata A and C on their own sheets (Exercises 1 and 2) | Canonical data, calculator |
| 30-40 | Eight soil cores of B: SD, SE, CI with t and 2 × SE | Csv block in 10.2 |
| 40-50 | Site: area weighting and site CI; discussion of Reports 3 and 4 | Example 10.3, Find the error |
| 50-55 | Area uncertainty (book example 400,000 ± 30,000 ha) | Example 10.3b |
| 55-60 | Closing: check results against 588; 23,359; 1,217,045 and the assignment | Assignment checklist |

Sources: KD 3.2 (pools and CO2e), 3.3 (uncertainty, square root of the sum of squares, area uncertainty) and chapter 4 (reporting, Table 8); BC chapters 3 and 4. Sample Forest data are illustrations.

---
