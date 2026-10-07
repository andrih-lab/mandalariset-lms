# Module 6. Designing the inventory

## Module overview

Module 6 teaches how to make inventory design decisions before the team leaves for the field: site boundary, strata, the pools to measure, type and number of plots, and the re-measurement schedule. The part with the most calculation is the minimum number of plots per stratum, n = (t × s ÷ E)², then adding a 10% reserve. This week is light on video and heavy on calculation: participants calculate n for the three Sample Forest strata from illustrative pilot data and build the "Plot design" sheet in the workbook.

| Aspect | Details |
| --- | --- |
| Week | 3 |
| Study time | Video 50 minutes (4 videos), exercises and assignment 70 minutes, live session 60 minutes |
| Prerequisites | Modules 1 to 5 (especially the four carbon pools and the Sample Forest strata); basic statistics: mean, standard deviation, confidence interval |
| Tools | Excel or Google Sheets, a calculator |
| Book references | BC chapter 2; KD section 1.3 and chapter 2 |
| Output of the week | The "Plot design" sheet in the workbook: number of plots per stratum and a 10% reserve |

## Learning objectives

After this module, participants are able to:

- distinguish carbon stock from carbon pool, and add up pools into a stock per hectare;
- prepare a five-step measurement plan for one site, including the basis for dividing strata;
- judge whether a pool needs to be measured using the three criteria from the guidebook;
- calculate the minimum number of plots per stratum with n = (t × s ÷ E)² from pilot data, add a 10% reserve, and round up;
- describe a nested plot design for mangroves and convert per-plot calculations into per-hectare values;
- build the "Plot design" sheet in Excel with formulas, and prepare a fieldwork schedule according to the tides.

## Video plan

Four videos, 50 minutes in total. The calculation material (video 6.3) gets the longest duration.

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 6.1 | The five steps of a measurement plan | 12 | Stock and pools, five steps, site boundary, stratification |
| 6.2 | Choosing pools, plot type, and frequency | 11 | Three criteria for pools, permanent and temporary plots, re-measurement schedule |
| 6.3 | How many plots are needed | 15 | The formula n = (t × s ÷ E)², the example n = 36 becomes 40, the calculation for three Sample Forest strata, building the sheet in Excel |
| 6.4 | Plot location, shape, and size; fieldwork | 12 | KD nested plots, conversion to hectares, the rule of twelfths, data recorded per plot |
|  | Total | 50 |  |

## Content

### 6.1 The five steps of a measurement plan

Design decisions made at the desk determine whether the numbers from the field can be defended. Two terms are used throughout the course. A carbon pool is a place where carbon is stored, for example soil, live trees, or dead wood. Carbon stock is the amount of organic carbon in an ecosystem of a given area, obtained by adding up all pools and expressed in Mg C per hectare for a given soil depth (BC chapter 2). Pools are also distinguished by how long carbon is stored: living biomass is short-term (less than 50 years), soil organic carbon is long-term (hundreds to thousands of years). For climate mitigation, long-term pools are the most important.

**Worked example: from pools to stock.** Sample Forest stratum B (mature Rhizophora forest, 264 ha), illustrative numbers:

1. Add the four pools per hectare: live aboveground trees 120, roots 40, dead trees + downed dead wood + litter 15, soil to 1 m 495. Stock = 120 + 40 + 15 + 495 = 670 Mg C/ha.
2. Multiply by the stratum area: 670 × 264 = 176,880 Mg C for the whole of stratum B.

The measurement plan is prepared in five steps (BC chapter 2, KD 1.3).

| Step | Decision | Things to watch |
| --- | --- | --- |
| 1. Site boundary | The area measured | Only land that is now or was formerly covered by the target ecosystem; open sea, upland forest, and freshwater swamp next to it are not included. If the boundary is changed, record it and adjust all stock calculations. |
| 2. Strata | Dividing the site into uniform parts | The basis for division is related to carbon: species and density of vegetation, land use, soil properties, landform, distance from the sea. |
| 3. Pools | The pools measured | Three criteria in 6.2. |
| 4. Plots | Type, number, and location of plots | Permanent or temporary; n = (t × s ÷ E)²; location decided before going to the field. |
| 5. Frequency | How often to re-measure | Depends on the rate of change, carbon market requirements, and cost. |

**Stratification.** A large site is rarely uniform: one mangrove site can contain tall forest, dwarf mangrove, and nipa. If everything is measured as one unit, the variability in stock is large and many plots are needed. Within a uniform stratum variability is small so fewer plots are needed. Too many small strata add fieldwork; too few large strata do not capture variability. In mangroves, KD recommends placing plots at several distances from the sea edge, because soil depth and species composition change from sea to land (KD 1.3).

The Sample Forest uses three strata by species and position: A pioneer seaward (180 ha), B mature Rhizophora (264 ha), C landward mangrove (120 ha); total 564 ha. Area is assumed to come from the official boundary and is treated as having no uncertainty.

### 6.2 Choosing pools, plot type, and re-measurement frequency

A pool needs to be measured if it meets any of the following three criteria (BC chapter 2): its share is large, that is more than 5% of the carbon in that stratum; it may change or has changed because of nature or people; or its size is not yet known. For national carbon accounting and carbon market projects, four basic pools are required: aboveground living biomass, aboveground dead biomass, belowground living biomass, and soil carbon. For mangroves, KD lists five pools that together account for more than 95% of the stock: live aboveground trees, dead trees, downed dead wood, roots, and soil (KD 1.3).

**Worked example: the share of each pool in stratum B** (illustration).

1. Share = pool ÷ stock × 100%, with a stock of 670 Mg C/ha.
2. Live trees 120 ÷ 670 = 17.9%; roots 40 ÷ 670 = 6.0%; dead trees, downed dead wood, and litter 15 ÷ 670 = 2.2%; soil 495 ÷ 670 = 73.9%.
3. Dead wood and litter (2.2%) are below 5%, but are still measured: that pool is one of the four basic pools, and dead wood can grow after a storm or logging (the second criterion). In strata A and C the shares are 1.7% and 1.8%.

Plot type is chosen according to the purpose (BC chapter 2).

| Plot type | Advantages | Disadvantages |
| --- | --- | --- |
| Permanent | The design is made once. Change in stock is more precise because the same plots and trees are compared. Easy for third parties to check. | Plots can be cared for better than their surroundings so results look better than the real stratum. Plots can be lost to disasters or human disturbance. |
| Temporary | Cheap and quick to set up. Easy to move if a site is lost. | Two measurement times cannot be compared directly so more plots are needed. |

For monitoring change in stock, permanent plots are more valuable and more trusted.

Re-measurement frequency (BC chapter 2): aboveground biomass roughly every 5 years; soil every 10 to 20 years is enough, with the risk that disturbances between two measurements are missed; after a major event such as a strong storm or land clearing, measure sooner than scheduled. In salt marsh and seagrass, biomass changes with the season, so measure at peak biomass and repeat in the same season.

### 6.3 How many plots are needed

The minimum number of plots per stratum is calculated from the variability of carbon stock and the target precision. A common target: the measured mean does not miss the true mean by more than 10% at the 95% confidence level (KD 1.3.2). Variability is known from earlier inventories; if there is none, carry out a pilot survey on 6 to 10 plots. The formula:

```latex
n = \left(\frac{t \cdot s}{E}\right)^{2}, \qquad E = p \cdot \bar{x}
```

- n: the minimum number of plots per stratum (rounded up).
- t: the two-tailed t value for 95% confidence. KD uses t = 2 because n is not yet known at this stage.
- s: the standard deviation of carbon stock between plots from pilot data (Mg C/ha). This is the standard deviation, not the standard error.
- E: the acceptable error, that is the half-width of the desired confidence interval, equal to p × mean. For 10% precision, p = 0.1.

The calculation is done for each stratum. The result is increased by about 10% as a reserve for plots that cannot be found again or are damaged, and rounded up (KD 1.3.2). If there is no prior information at all, BC chapter 2 recommends measuring as many plots as budget and labour allow on the first visit, then using those data to calculate the requirement for the next measurement.

**Worked example (invented numbers for practice): n = 36 becomes 40 plots.** A pilot survey on 8 plots in one stratum gives a mean of 400 Mg C/ha and a standard deviation of 120 Mg C/ha.

1. E = 400 × 0.1 = 40 Mg C/ha.
2. n = (2 × 120 ÷ 40)² = 6² = 36 plots.
3. 10% reserve: 36 × 1.1 = 39.6, rounded up to 40 plots.

Another stratum with the same mean but a standard deviation of 60 Mg C/ha gives n = (2 × 60 ÷ 40)² = 3² = 9 plots. Halving the standard deviation cuts the plot requirement to a quarter. That is the reason stratification is done: uniform strata lower s.

#### Why t is recalculated

The value t = 2 is an approximation. The true t value depends on degrees of freedom (df = n − 1), and n is only known after the formula is used. A more exact approach, outside the book (standard statistics), is worked iteratively:

1. Start with t = 1.96, calculate n, round up.
2. Take the 95% two-tailed t with df = n − 1 (Excel: `T.INV.2T(0.05, df)`), calculate n again, round up.
3. Repeat until n no longer changes. Usually two to three rounds are enough. If n alternates between two values, take the larger.

If you use t = 2 as in KD, the result is almost the same; the example below shows the difference.

### Sample Forest data: 12 pilot plots per stratum

The following data are illustrations for practice, not measurement results. Each number is the total carbon stock of one plot (Mg C/ha, four pools added up). The mean of each stratum exactly equals the Sample Forest total stock: A 483, B 670, C 565 Mg C/ha. The standard deviations are set so that the resulting n is reasonable. Other modules can use these data.

```csv
Plot,A,B,C
1,532,682,694
2,575,432,583
3,456,592,599
4,446,492,521
5,583,597,480
6,398,905,616
7,575,812,435
8,298,740,390
9,593,642,553
10,432,644,666
11,611,853,515
12,297,649,728
```

Note: the confidence intervals in the Sample Forest stock table (±60, ±73, ±64 Mg C/ha) come from a full inventory with more plots. The intervals from these 12 pilot plots are wider (see below), and that is exactly why a pilot is used only to design, not to report.

**Calculation results** (verified with Python; E = 10% × mean; numbers rounded for display).

| Quantity | A | B | C |
| --- | --- | --- | --- |
| Mean (Mg C/ha) | 483.0 | 670.0 | 565.0 |
| Standard deviation s | 112.23 | 139.99 | 103.05 |
| Coefficient of variation (s ÷ mean) | 23.2% | 20.9% | 18.2% |
| E = 0.1 × mean | 48.3 | 67.0 | 56.5 |
| Round 1: t = 1.96; raw n | 20.74 | 16.77 | 12.78 |
| n rounded up | 21 | 17 | 13 |
| Round 2: t with df = n − 1 (df 20 / 16 / 12) | 2.086 | 2.120 | 2.179 |
| Raw n | 23.49 | 19.62 | 15.79 |
| n rounded up | 24 | 20 | 16 |
| Round 3: t with df 23 / 19 / 15 | 2.069 | 2.093 | 2.131 |
| Raw n | 23.11 | 19.12 | 15.11 |
| n rounded up (same as round 2, stop) | 24 | 20 | 16 |
| 10% reserve: n × 1.1 | 26.4 | 22.0 | 17.6 |
| Number of plots prepared (rounded up) | 27 | 22 | 18 |

The total number of plots is 27 + 22 + 18 = 67 plots. Some notes:

- With t = 2 as in KD, the minimum n becomes 22, 18, and 14 plots (a difference of 2 plots per stratum from the iterated result). This difference is reasonable because the pilot df is small.
- The half-width of the 95% confidence interval from the 12 pilot plots is t(df 11) × s ÷ √12 = 2.201 × s ÷ √12: 71.3 (14.8% of the mean) for A, 88.9 (13.3%) for B, 65.5 (11.6%) for C. All are above 10%, so 12 plots are not enough.
- At the minimum n (24, 20, 16 plots) and with the same s, the interval half-width becomes 47.4 (9.8%), 65.5 (9.8%), and 54.9 (9.7%). All are below 10%.
- The prepared plots are placed on the map first before going to the field (6.4). If any are lost, the 10% reserve keeps the minimum n achievable.

#### Building the "Plot design" sheet in Excel

This sheet is the week 3 output. The cell layout below uses three stratum columns (B = A, C = B, D = C) so that formulas are written once in column B then copied to C and D. Formulas are written with commas as argument separators; in Indonesian-language Excel replace them with semicolons.

Parameters, in column A (label) and B (value):

| Cell | Content | Value or formula |
| --- | --- | --- |
| B3 | Precision p | `0.1` (displays as 10%) |
| B4 | Plot reserve | `0.1` |
| B5 | Alpha | `0.05` |
| B6 | Area of one plot (ha) | `=6*PI()*7^2/10000` (result 0.0924; from 6 subplots with a radius of 7 m, see 6.4) |

Pilot data: row 8 holds headings (A8 "Pilot plot", B8 "A", C8 "B", D8 "C"). Paste the csv data above into A9:D20 (plot numbers 1 to 12 in column A; stock per stratum in B to D). If it pastes into a single column, split it with Data > Text to Columns (see the Excel notes).

Calculations, row 22 holds column headings (B22 "A", C22 "B", D22 "C"). Fill column B then copy to C and D:

| Row | Label in column A | Formula in column B |
| --- | --- | --- |
| 23 | Number of pilot plots | `=COUNT(B9:B20)` |
| 24 | Mean | `=AVERAGE(B9:B20)` |
| 25 | Standard deviation s | `=STDEV.S(B9:B20)` |
| 26 | Coefficient of variation | `=B25/B24` |
| 27 | E | `=$B$3*B24` |
| 28 | Initial t | `1.96` (type the number) |
| 29 | Raw n round 1 | `=(B28*B25/B27)^2` |
| 30 | n round 1 | `=ROUNDUP(B29,0)` |
| 31 | t, df = n − 1 | `=T.INV.2T($B$5,B30-1)` |
| 32 | Raw n round 2 | `=(B31*B25/B27)^2` |
| 33 | n round 2 | `=ROUNDUP(B32,0)` |
| 34 | t, df = n − 1 | `=T.INV.2T($B$5,B33-1)` |
| 35 | Raw n round 3 | `=(B34*B25/B27)^2` |
| 36 | n round 3 | `=ROUNDUP(B35,0)` |
| 37 | Stable? | `=IF(B36=B33,"yes","repeat")` |
| 38 | Minimum n | `=B36` |
| 39 | n with reserve | `=ROUNDUP(B38*(1+$B$4),0)` |
| 40 | Stratum area (ha) | type 180, 264, 120 in B40, C40, D40 |
| 41 | Area measured (ha) | `=B39*$B$6` |
| 42 | Percent of area measured | `=B41/B40` |
| 43 | Pilot interval half-width | `=T.INV.2T($B$5,B23-1)*B25/SQRT(B23)` |
| 44 | Half-width, % of mean | `=B43/B24` |

Totals in column E: `E39 =SUM(B39:D39)`, `E40 =SUM(B40:D40)`, `E41 =SUM(B41:D41)`, `E42 =E41/E40`. The results that should appear: B30 to D30 = 21, 17, 13; B38 to D38 = 24, 20, 16; B39 to D39 = 27, 22, 18; E39 = 67; E41 = 6.19 ha; E42 = 1.1%. If row 37 shows "repeat", add one more round (three more rows: t, raw n, n) and point row 38 to the last round. If ROUNDUP raises a number although the hand calculation gives an exact integer (for example 22.0 in stratum B), wrap it with ROUND: `=ROUNDUP(ROUND(B38*(1+$B$4),6),0)`.

### 6.4 Plot location, shape, and size; fieldwork

Plot locations are decided before the team leaves, without looking at the state of the vegetation, so the team does not choose places that are easy to reach or where the forest looks good (KD 1.3.2). There are three ways: lined up along one line cutting across the sea-to-land gradient, random, or a grid with one random point in each cell. According to KD, random and systematic placement are both valid; if part of the site is much richer in carbon, systematic placement is usually more precise.

Plot shape and size are not unique. What is recommended is the nested plot: large trees are measured in the large plot, small trees, seedlings, and litter in smaller subplots inside it. A clustered plot splits one large plot into small scattered subplots; the area measured is the same, but the area represented is larger so variability between plots is reduced.

**KD design for mangroves (KD 1.3.2).** One plot consists of six circular subplots, lined up along a line perpendicular to the sea–mangrove boundary, 25 m between subplots, the first subplot 15 m from that boundary.

| Part | Size | Area |
| --- | --- | --- |
| Trees with diameter more than 5 cm | Circle with a radius of 7 m | 153.9 m² |
| Trees with diameter less than 5 cm | Circle with a radius of 2 m | 12.6 m² |
| Downed dead wood | Four transects from the centre of each subplot |  |
| Soil | Depth measured and one core taken near the centre of each subplot |  |
| Very large trees (more than 50 cm), if many | Extra plot of 40 × 125 m | 0.5 ha |

For very dense dwarf mangrove (more than 40,000 stems per hectare), the subplots are smaller: six half-circles with a radius of 2 m (6.3 m²) spaced 10 m apart. The lined-up arrangement is chosen because moving in mangroves is hard, the team's trampling damages the forest floor so a single track is better, and a line from sea to land captures the change in forest conditions.

**Worked example: from plot to hectare.** All final calculations are expressed per hectare, so plot area must be converted.

1. Area of one tree subplot: π × 7² = 153.94 m².
2. Six subplots: 6 × 153.94 = 923.63 m² = 0.09236 ha.
3. Factor to hectares: 1 ÷ 0.09236 = 10.83. If one plot contains 18 trees with a diameter of more than 5 cm, the density is 18 × 10.83 = 195 trees/ha.
4. Area measured by the 67 designed plots of the Sample Forest: 67 × 0.09236 = 6.19 ha, or 1.1% of 564 ha.

| Stratum | Plots | Area measured (ha) | Stratum area (ha) | Percent measured |
| --- | --- | --- | --- | --- |
| A | 27 | 2.49 | 180 | 1.4% |
| B | 22 | 2.03 | 264 | 0.8% |
| C | 18 | 1.66 | 120 | 1.4% |
| Total | 67 | 6.19 | 564 | 1.1% |

The percent of area measured is small and is not a requirement. Precision is determined by the number of plots and the variability between plots, not by the percent of area.

**Working with the tides.** Most mangroves can only be worked at low tide; in the lowest parts the working time may be only 3 to 4 hours. Estimates use the rule of twelfths: in the six hours after the highest tide, the water falls successively by 1/12, 2/12, 3/12, 3/12, 2/12, and 1/12 of the difference between high and low tide height (KD 2.1).

**Worked example (invented numbers for practice).** The highest tide is at 06:00, the difference between high and low tide is 2.4 m.

1. One twelfth = 2.4 ÷ 12 = 0.2 m.
2. Fall per hour: 0.2; 0.4; 0.6; 0.6; 0.4; 0.2 m (06:00 to 12:00). The total is 2.4 m.
3. The water moves fastest from 08:00 to 10:00 (0.6 m per hour). The lowest ebb is around 12:00.
4. For two hours before and after the lowest ebb the water height changes little, so the best working time is roughly 10:00 to 14:00.

**Data recorded at each plot (KD 2.2).**

- Plot number or name, location, date, names of team members, GPS coordinates with their accuracy, and directions to the plot.
- Vegetation type (forest, dwarf mangrove under 5 m, or other), its condition (intact, damaged, bare), soil surface form, position in the landscape, and soil type.
- Signs of disturbance: damage from storms, logging, disease. Logging level: low if less than 30% of the stand basal area, medium 30 to 70%, high if more than 70%.
- Photos from a fixed point; in mangroves usually four photos from the plot centre facing north, south, east, and west.

Data quality is maintained in layers: each evening the data sheets are checked for completeness and legibility and the checker writes their name and the date; when entered on the computer each sheet is matched again; and at least 10% of sheets are re-checked by a person who did not take part in the data entry (KD 2.2, BC chapter 7).

## Self-study exercises

Work with a calculator or Excel, then compare with the key. Problems 3 to 5 use the Sample Forest data (12 pilot plots) in 6.3. Use s to two decimals and round n up.

1. A pilot survey gives a mean of 500 Mg C/ha and a standard deviation of 100 Mg C/ha. Calculate n for 10% precision with t = 2 as in KD, then add a 10% reserve.
2. The highest tide is at 05:30 and the difference between high and low tide height is 1.8 m. What is the fall of the water each hour until the lowest ebb, how much has the water fallen by 08:30, and when is the best working window (two hours before to two hours after the lowest ebb)?
3. Calculate n and the number of plots prepared for stratum C from the pilot data, with t iteration (start at t = 1.96).
4. For stratum A, calculate n if the target precision is 15%, not 10%, with t iteration. Compare with the 10% result and with the interval half-width precision from the 12 pilot plots.
5. Stratum A is planned for 27 plots. If 4 plots are lost, what is the half-width of the 95% confidence interval (in % of the mean) from the 23 remaining plots, with the same s? What is the maximum number of plots that can be lost for the 10% target still to be met?

### Answer key

1. E = 500 × 0.1 = 50. n = (2 × 100 ÷ 50)² = 4² = 16 plots. Reserve: 16 × 1.1 = 17.6, rounded up to 18 plots.
2. One twelfth = 1.8 ÷ 12 = 0.15 m. Fall per hour starting 05:30: 0.15; 0.30; 0.45; 0.45; 0.30; 0.15 m (total 1.8 m). By 08:30 (three hours) it has fallen 0.15 + 0.30 + 0.45 = 0.90 m, half the difference. The lowest ebb is around 11:30, the best working window roughly 09:30 to 13:30.
3. Mean 565, s = 103.05, E = 56.5. Round 1: t = 1.96; n = (1.96 × 103.05 ÷ 56.5)² = 12.78, so 13. Round 2: t(df 12) = 2.179; n = 15.79, so 16. Round 3: t(df 15) = 2.131; n = 15.11, so 16, stable. Minimum n 16. Reserve: 16 × 1.1 = 17.6, so 18 plots.
4. Mean 483, s = 112.23, E = 0.15 × 483 = 72.45. Round 1: t = 1.96; n = 9.22, so 10. Round 2: t(df 9) = 2.262; n = 12.28, so 13. Round 3: t(df 12) = 2.179; n = 11.39, so 12. Round 4: t(df 11) = 2.201; n = 11.63, so 12, stable. Minimum n 12; with reserve 12 × 1.1 = 13.2, so 14 plots. At 10%, 24 plots are needed (27 with reserve): relaxing the precision from 10% to 15% halves the plot requirement. The interval half-width of the 12 pilot plots is 14.8% (< 15%), consistent with n = 12.
5. For 23 plots: t(df 22) = 2.074; half-width = 2.074 × 112.23 ÷ √23 = 48.53 Mg C/ha, or 10.05% of 483: slightly above 10%. For 24 plots: 47.39 Mg C/ha, 9.8%: meets the target. So at most 3 plots can be lost out of 27 (the 10% reserve in practice protects up to about 3 plots).

## Find the error

The two short reports below look tidy but are wrong. Find the errors before reading the key.

**Report 1 (stratum C, 12 pilot plots).** "Mean 565 Mg C/ha, standard deviation 103.05, E = 10% × 565 = 56.5. Number of plots n = t × s ÷ E = 2 × 103.05 ÷ 56.5 = 3.65, rounded up to 4 plots. With a 10% reserve it becomes 5 plots. Stratum C (120 ha) is enough to measure with 5 plots."

**Report 2 (stratum A, 12 pilot plots).** "Mean 483 Mg C/ha, standard deviation 112.23. Pilot standard error = 112.23 ÷ √12 = 32.40. E = 48.3. n = (2 × 32.40 ÷ 48.3)² = 1.80, rounded to 2 plots. Stratum A is enough with 2 plots."

### Key

**Report 1.** The error: the result of t × s ÷ E was not squared. The formula is n = (t × s ÷ E)². The correct number: (2 × 103.05 ÷ 56.5)² = 13.31, so 14 plots with t = 2 and 16 plots with t iteration (15.11 in the last round); with a 10% reserve it becomes 18 plots. How to detect it: the pilot already used 12 plots and its interval is still 11.6%; it is impossible for 4 plots to give an interval below 10%. With 4 plots, the interval half-width = t(df 3) × s ÷ √4 = 3.182 × 103.05 ÷ 2 = 163.98 Mg C/ha, or 29% of the mean. Sanity test: n should be much larger than the pilot if the pilot interval is still above the target.

**Report 2.** The error: what was put into the formula is the standard error (s ÷ √n), not the standard deviation s. The standard error already includes n from the pilot so the result shrinks and misleads. The correct number: (2 × 112.23 ÷ 48.3)² = 21.6 with t = 2, and 24 with t iteration (23.11 in the last round); with a 10% reserve it becomes 27 plots. How to detect it: with only 2 plots, the interval half-width = t(df 1) × s ÷ √2 = 12.706 × 112.23 ÷ 1.414 = 1,008 Mg C/ha or 209% of the mean; two plots cannot reach 10%. Also check that s is calculated with STDEV.S from the plot data, not from the standard error formula.

## The role of AI and example prompts

AI is useful for drafting Excel formulas and explaining terms, but the plot number calculation must be checked by you because a small error in a function argument yields an n that looks reasonable or very odd. Here are three prompts and the checking steps.

**Prompt 1: drafting formulas.** "Carbon stock data for 12 plots is in B9:B20 of Excel. Write per-cell formulas for the number of plots, mean, sample standard deviation, E = 10% of the mean, n = (t × s ÷ E)² with t = 1.96, then t from T.INV.2T(0.05; df) and n rounded up. Label each row."

- Check: paste the formulas into the sheet, then match them with the table in 6.3 (stratum A: s = 112.23, E = 48.3, round 1 n = 21). Calculate one round with a calculator.

**Prompt 2: explaining terms.** "Explain in three sentences the difference between standard deviation and standard error, and which one goes into the minimum plot number formula."

- Check: the answer must say that the formula uses the standard deviation s. Compare with Report 2 in the Find the error section (112.23 for s, 32.40 for the standard error). Match with KD 1.3.2.

**Prompt 3: checking a calculation.** "Check my calculation: stratum B mean 670, s = 139.99, E = 67, t = 2. What is n, and how many plots with a 10% reserve? Show the steps."

- Check: calculate it yourself (2 × 139.99 ÷ 67)² = 17.46, so 18; 18 × 1.1 = 19.8, so 20. If the AI answers another number, ask for the steps and find the step that differs from your calculation.

**Example of an AI answer that can be wrong.** The AI answers: "For a 95% confidence level use `=T.INV.2T(0.95, B30-1)`, then n = `=ROUNDUP((B31*B25/B27)^2,0)`." This answer is wrong: the first argument of T.INV.2T is the two-tailed probability (alpha = 0.05), not the confidence level. With 0.95 and df 20, t = 0.0635 so raw n = 0.02 and n = 1 plot.

- How to catch it: look at the t value on its own. For 95% confidence t is always above 1.96 (2.086 at df 20). A result of n = 1 for a stratum with a coefficient of variation of 23% is also implausible.

## Excel notes: Mac and Windows

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Split csv data pasted into one column | Paste in A9, select that column, Data tab > Text to Columns, choose Delimited, tick Comma | Same: Data tab > Text to Columns, Delimited, Comma | Data > Split text to columns |
| Mean, standard deviation, count | `AVERAGE`, `STDEV.S`, `COUNT` | Same | Same |
| Two-tailed t value | `T.INV.2T(0.05, df)`; older version `TINV(0.05, df)` | Same | `T.INV.2T` or `TINV` |
| Round up | `ROUNDUP(x, 0)` | Same | Same |
| Square root and power | `SQRT(x)`, `^2` | Same | Same |
| Logical condition | `IF(condition, value_if_yes, value_if_no)` | Same | Same |
| Lock a cell with $ | Type $ or press Cmd+T on the cell reference | Type $ or press F4 | Type $ or press F4 |
| Copy formulas from column B to C and D | Select B23:B44, Cmd+C, select C23:D44, Cmd+V | Ctrl+C, Ctrl+V | Ctrl+C, Ctrl+V (Cmd on Mac) |
| Percent format | Home > Number Format > Percentage | Home > Number Format > Percentage | Format > Number > Percent |
| Check formulas | Formulas > Show Formulas | Formulas > Show Formulas | View > Show > Formulas |

In Excel with Indonesian language settings, the argument separator is usually a semicolon (for example `T.INV.2T(0,05; df)`) and the decimal uses a comma; function names can differ. To find the local name of a function, open the fx button and search by description in English or Indonesian. If the sheet is opened in Sheets, check File > Settings > Locale so decimals read correctly. The Analysis ToolPak is not needed.

## Weekly assignment

Submit the "Plot design" sheet in the workbook. Pass criteria:

- [ ] The 12-plot pilot data per stratum are pasted in A9:D20; the means are exactly 483, 670, and 565 Mg C/ha.
- [ ] Standard deviations are calculated with STDEV.S: 112.23; 139.99; and 103.05.
- [ ] E = 10% × mean: 48.3; 67.0; and 56.5.
- [ ] The t iteration uses T.INV.2T with df = n − 1 and the "Stable?" row shows "yes" for all three strata.
- [ ] Minimum n 24, 20, 16 plots; with a 10% reserve and rounded up 27, 22, 18 plots; total 67 plots.
- [ ] The area measured and its percent (6.19 ha, 1.1% of 564 ha) are calculated with formulas, not typed in.
- [ ] One note cell states the t method used (iteration, or t = 2 per KD with the result 22, 18, 14) and the reason.
- [ ] One paragraph (3 to 5 sentences) states the Sample Forest design: basis of strata, pools measured, permanent or temporary plots, and the re-measurement schedule.
- [ ] Answers to exercises 1 to 5 match the key.

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0–5 | Opening and questions from videos 6.1 to 6.4 | Module overview |
| 5–15 | Strata discussion: participants propose the basis for strata for their own sites and check strata A, B, C of the Sample Forest | Five-step table, 6.1 |
| 15–35 | Working together on the "Plot design" sheet: participants share screens and match 24, 20, 16 and 27, 22, 18 | Pilot data, Excel formula table |
| 35–45 | Find the error: discuss Reports 1 and 2, then test a wrong AI prompt | Find the error section, AI prompts |
| 45–55 | Budget scenario: only 50 plots are available. Change p in B3 and find the smallest precision that still fits (at p = 12% the total is 49 plots; p = 10% needs 67 plots) | The "Plot design" sheet |
| 55–60 | Summary and explanation of the assignment | Assignment checklist |

Sources: BC chapters 2 and 7; KD section 1.3 (1.3.2), 2.1, and 2.2. The Sample Forest data and pilot data are illustrations; t iteration with df = n − 1 is outside the books (standard statistics).

---
