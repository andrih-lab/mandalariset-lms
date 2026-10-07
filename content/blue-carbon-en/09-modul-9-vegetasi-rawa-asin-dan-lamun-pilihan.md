# Module 9. Salt marsh and seagrass vegetation (optional)

## Module overview

Module 9 teaches how to calculate the carbon of living vegetation in salt marshes and seagrass meadows: the plants are harvested from quadrats or small cores, dried, weighed, multiplied by a carbon factor, then converted to Mg C/ha. This module is an optional track. Participants whose final project concerns only mangroves may skip it without losing the prerequisites for the next modules.

| Aspect | Details |
| --- | --- |
| Status | OPTIONAL. There is no required assignment and it is not assessed for the certificate. |
| Recommended for | Participants who work or research on seagrass or salt marsh coasts (consultants, NGOs, local governments, students with a seagrass thesis), and participants who want to compare the three blue carbon ecosystems using their own data. |
| May be skipped by | Participants whose final project only calculates mangroves. Modules 10 to 13 can still be followed. |
| Week | 5 (together with Module 8) |
| Study time | Video 22 minutes (2 videos), exercises and optional sheet about 30 minutes, 60-minute live session if scheduled (see the last section) |
| Prerequisites | Module 7 (carbonate correction factor and soil units), Module 8 (the biomass-to-carbon flow), basic Excel or Google Sheets, mean and standard error |
| Tools | Excel or Google Sheets, a calculator |
| Output | Optional exercise: one complete seagrass calculation (aboveground and belowground biomass, carbon, per hectare) in the workbook |
| Main references | BC chapter 4 (salt marsh and seagrass sections), BC Table 4.8, BC chapter 2 (seagrass carbon pools) |

## Learning objectives

After this module, participants are able to:

1. Explain why salt marsh and seagrass are measured at peak biomass and repeated in the same season.
2. Choose the quadrat size and sampling method appropriate for salt marsh grasses, shrubs, root-rhizomes, and seagrass.
3. Calculate biomass per m² from dry weight and quadrat or tube cross-section area.
4. Convert dry biomass into carbon with the correct factor (0.45 for salt marsh grass; 0.34 for seagrass and root-rhizomes) and express it in Mg C/ha.
5. Calculate the mean, standard error, and 95% confidence interval of seagrass vegetation carbon from several tubes, and the number of tubes required.
6. Compare seagrass vegetation carbon with its soil carbon and with mangrove stocks, then conclude which pool is worth measuring.

## Video plan

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 9.1 | Salt marsh: strata, quadrats, harvest, and root cores | 10 | Measurement time, transects and plots, 30 x 30 cm quadrat, height-weight equation, 10 cm root core, factors 0.45 and 0.34, worked example for grass and root-rhizomes |
| 9.2 | Seagrass: tubes, separation, and per-hectare calculation | 12 | Depth strata, 10-25 cm tubes, separating leaves and root-rhizomes, epiphytes, a complete six-tube calculation, confidence interval, number of tubes |
|  | Total | 22 |  |

## Content

### 9.1 Salt marsh: strata, quadrats, harvest, and root cores

Salt marsh biomass changes with the season, so measurement is done at peak biomass, usually mid to late summer in temperate climates, and repeated in the same season (BC chapter 4). In cold regions, the aboveground parts can die back entirely in winter. Salinity, nutrients, grazing, and water table height also affect biomass. According to BC chapter 4, tidal salt marsh is found more in temperate climates than in the tropics. That is why this section is brief and is used mainly to compare methods.

**Strata and plots.** Salt marsh strata are generally bands parallel to the shoreline or tidal creeks, so observation transects are made to cut across those bands. BC chapter 4 recommends plots of about 20 x 50 m per stratum with at least five to six small quadrats placed randomly inside.

**Components measured.** Each component has its own method and carbon factor.

| Component | Measurement method | Carbon factor |
| --- | --- | --- |
| Grass, sedge, herbs | 30 x 30 cm quadrat; count stems and measure height per species; height-weight equation from at least 50 stems per species, dried at 60 C for about 72 hours | 0.45 |
| Shrubs | Like dwarf mangrove: diameter at 30 cm, crown size, height; equation from 15-25 shrubs per species | 0.46-0.50 |
| Roots and rhizomes | 10 cm core to 1 m, washed on a 1 mm sieve, living part separated by colour and texture, dried at 60 C | 0.34 |
| Litter | Quadrat (BC example 50 x 50 cm), dried to constant weight | 0.45 |
| Downed dead wood | Line intersect as in mangrove, if present | 0.50 |

Roots and rhizomes can make up 50 to 95% of salt marsh vegetation biomass (BC chapter 4). Counting only the aboveground part because it is easier will underestimate the vegetation stock. Coring to 1 m is recommended because it is consistent with the soil sampling in Module 7 and because salt marsh roots can reach fresh water at that depth.

**Formulas.** Biomass per m² is split into two steps: dry weight divided by sample area, then the result multiplied by the carbon factor.

```latex
C\ (\mathrm{kg\,C/m^2}) = \frac{B\ (\mathrm{kg})}{A\ (\mathrm{m^2})} \times f_C
```

```latex
C\ (\mathrm{Mg\,C/ha}) = C\ (\mathrm{kg\,C/m^2}) \times 10
```

The factor 10 comes from 1 Mg = 1,000 kg and 1 ha = 10,000 m². These formulas are used for all components in this module.

**Worked example 9.1 (illustrative numbers).** One 30 x 30 cm grass quadrat yields 45 g dry weight. One root-rhizome core of 10 cm diameter yields 18.5 g dry weight of living parts (depth 0-100 cm, combined).

1. Quadrat area = 0.30 x 0.30 = 0.09 m². Grass biomass = 45 / 0.09 = 500 g/m² = 0.500 kg/m².
2. Grass carbon = 0.500 x 0.45 = 0.225 kg C/m² = 2.25 Mg C/ha.
3. Core area = 3.1416 x 5^2 = 78.54 cm² = 0.007854 m². Root-rhizome biomass = 18.5 / 0.007854 = 2,355 g/m² = 2.355 kg/m².
4. Root-rhizome carbon = 2.355 x 0.34 = 0.801 kg C/m² = 8.01 Mg C/ha.
5. Living vegetation carbon = 2.25 + 8.01 = 10.26 Mg C/ha.

Root-rhizomes contribute about 78% of the 10.26 Mg C/ha, in line with the BC chapter 4 pattern that the belowground part dominates. One quadrat is not enough for one stratum: the numbers above must be calculated per quadrat, then averaged over five to six quadrats or more.

**Note on book differences.** The factor 0.34 in BC chapter 4 for the belowground part of salt marsh grass is written "conversion factor of 0.34 for belowground biomass of seagrasses" (Duarte 1990), that is a seagrass factor borrowed. If you have your own elemental analysis results, use those and write the source of the factor in the methods. The salt marsh root core formula in BC is also odd: "segment biomass (g) = sample dry weight (g) / sample wet weight (g)" is actually the dry matter content ratio (unitless), not biomass. Biomass is obtained by multiplying that ratio by the wet weight of the whole segment. Check the unit of the result before using it.

### 9.2 Seagrass: tubes, separation, and per-hectare calculation

Seagrass living biomass is taken with a large-diameter tube, separated into above-substrate (leaves) and below-substrate (roots and rhizomes), dried, weighed, and multiplied by 0.34 (BC chapter 4). Some seagrass meadows are continuously submerged and some are exposed at low tide. Those exposed at low tide are worked on foot at low water (BC mentions about 3 to 4 hours), whereas continuously submerged ones need snorkel or diving gear. Small plots, 0.25 to 1 m², are adequate because the plants are small.

**Strata.** The arrangement of seagrass meadows changes with depth, hydrodynamics, light, and salinity, so strata are usually made by depth interval, and in each interval samples are taken at random positions (BC chapter 4).

**Sampling.**

1. Press a tube 10-25 cm in diameter into the sediment past the leaves, without cutting the leaves, until it passes through the rooted layer (rhizosphere), usually about 40 cm.
2. Cap the tube, pull it out, transfer the contents to a sieve or mesh bag, and wash until free of sediment.
3. Separate green leaves (above substrate) from living roots and rhizomes (below substrate). Living rhizomes are generally pale and firm. Old dark rhizomes are hard to tell as living or dead, so the separator needs to be experienced and consistent from tube to tube.
4. Dry at 60 C for about 72 hours to constant weight, then weigh.
5. Epiphytes are scraped from the leaves and counted separately if that pool is to be reported. Scraping is preferred over acid washing if epiphytes are to be counted, because acid dissolves some organic matter. Calcareous epiphytes need an inorganic carbon correction like soil in Module 7. Record whether epiphytes were separated, so results are comparable between sites (BC chapter 4).

Seagrass litter is small because leaves decompose quickly or are carried by currents, and BC chapter 2 states that dead biomass above the substrate can usually be neglected. According to BC chapter 2, there are three seagrass carbon pools: living biomass above substrate, living biomass below substrate, and soil.

**Formulas.** The formula is the same as in 9.1, with the tube cross-section area as A.

```latex
A\ (\mathrm{m^2}) = \frac{\pi\,(D/2)^2}{10{,}000}\qquad D\ \text{in cm}
```

```latex
C\ (\mathrm{Mg\,C/ha}) = \frac{B\ (\mathrm{g})}{A\ (\mathrm{m^2})} \times \frac{0.34}{1{,}000} \times 10
```

The second step contains two conversions: grams to kilograms (divide by 1,000) and kg C/m² to Mg C/ha (multiply by 10). Together they are equivalent to multiplying g C/m² by 0.01. One gram per square metre equals 0.01 Mg per hectare.

**Worked example 9.2 (illustrative numbers, one tube).** One tube of 15 cm diameter yields 8.5 g of leaves and 14.3 g of root-rhizomes (dry weight).

1. Cross-section area = 3.1416 x 7.5^2 = 176.71 cm² = 0.017671 m².
2. Above biomass = 8.5 / 0.017671 = 481.0 g/m². Below biomass = 14.3 / 0.017671 = 809.2 g/m².
3. Above carbon = 0.4810 x 0.34 = 0.1635 kg C/m². Below carbon = 0.8092 x 0.34 = 0.2751 kg C/m².
4. Per hectare: above = 1.64 Mg C/ha; below = 2.75 Mg C/ha.
5. Total living vegetation of this tube = 0.4387 kg C/m² = 4.39 Mg C/ha.

(The book gives a leaf-only example with 3.14 rounding, whose result is 1.6 Mg C/ha. The result here is the same when rounded.)

### Illustrative data: a sample seagrass meadow (outside the Sample Forest)

The sample seagrass meadow is a fictitious site of 25 ha in front of the coast. All of it is treated as one stratum (depth 0.5 to 1.5 m at lowest tide). Six tubes were taken at random, diameter 15 cm, depth 40 cm. The meadow area is treated as having no uncertainty, like the area of the Sample Forest. These data are an illustration and not from the books. The workbook sheet for this module uses these data; other modules do not depend on them.

```csv
tube,diameter_cm,leaves_g,root_rhizome_g
1,15,8.5,14.3
2,15,7.2,11.8
3,15,9.8,16.9
4,15,6.4,10.2
5,15,8.9,15.1
6,15,7.7,12.6
```

**Complete calculation per tube** (A = 0.017671 m², factor 0.34, times 10 to Mg C/ha):

| Tube | Above biomass (g/m²) | Below biomass (g/m²) | Above carbon (Mg C/ha) | Below carbon (Mg C/ha) | Total carbon (Mg C/ha) |
| --- | --- | --- | --- | --- | --- |
| 1 | 481.0 | 809.2 | 1.64 | 2.75 | 4.39 |
| 2 | 407.4 | 667.7 | 1.39 | 2.27 | 3.66 |
| 3 | 554.6 | 956.3 | 1.89 | 3.25 | 5.14 |
| 4 | 362.2 | 577.2 | 1.23 | 1.96 | 3.19 |
| 5 | 503.6 | 854.5 | 1.71 | 2.91 | 4.62 |
| 6 | 435.7 | 713.0 | 1.48 | 2.42 | 3.91 |
| Mean | 457.4 | 763.0 | 1.56 | 2.59 | 4.15 |

**Statistics and results for the site** (n = 6, 5 degrees of freedom, two-tailed 95% table t = 2.571):

| Quantity | Above substrate | Below substrate | Total |
| --- | --- | --- | --- |
| Mean (Mg C/ha) | 1.56 | 2.59 | 4.15 |
| Standard deviation | 0.24 | 0.47 | 0.70 |
| Standard error (SD / root 6) | 0.097 | 0.190 | 0.287 |
| 95% interval half-width (t x standard error) | 0.25 | 0.49 | 0.74 |
| As percent of the mean | 16% | 19% | 18% |

The living vegetation carbon of the sample seagrass meadow is 4.15 +/- 0.74 Mg C/ha (95%). For 25 ha: 4.15 x 25 = 103.7 Mg C, with an uncertainty of 0.74 x 25 = +/- 18.4 Mg C (17.8%). CO2e equivalent = 103.7 x 3.67 = 380.7 Mg CO2e. The below-substrate part is about 62% of vegetation carbon (2.59 / 4.15), a below-to-above ratio of 1.67.

**How many tubes are needed.** The total coefficient of variation = 0.70 / 4.15 = 0.169. For a precision of +/- 10% at 95%, n = (t x CV / 0.10)^2, with t according to n - 1 degrees of freedom and calculated iteratively. The result is 14 tubes (t with 13 degrees of freedom = 2.160; 2.160 x 0.169 / 0.10 = 3.65; 3.65^2 = 13.3; rounded up to 14). With a 10% reserve, 14 x 1.1 = 15.4, so 16 tubes. A six-tube pilot is not enough for a 10% target.

**Comparison with soil.** The Tier 1 for seagrass soil to 1 m is 108 Mg C/ha (BC Table 1.2). Vegetation carbon of 4.15 Mg C/ha is 3.8% of that figure, or 3.7% of the sum of vegetation and soil (4.15 / 112.15). This is below the 5% threshold used by BC chapter 2 as the limit for a pool considered significant, so in a seagrass project soil is usually the priority. BC chapter 2 also states that below-substrate biomass is only about 0.3% of organic carbon below the surface globally, so it is often merged into soil carbon.

**Differences between books and illustrative numbers.** BC Table 4.8 gives the Indo-Pacific mean seagrass living biomass of 0.61 +/- 0.26 Mg C/ha (n = 47) and soil carbon of 23.6 +/- 8.3 Mg C/ha (n = 8). That soil carbon is much smaller than the Tier 1 figure of 108 Mg C/ha in BC Table 1.2, and the illustrative biomass above (4.15) is about seven times the Indo-Pacific mean. The illustrative data were deliberately made dense so the numbers are easy to follow; real meadows in the Indo-Pacific are generally lower. On the workbook sheet, write which comparison number you use (Tier 1 or Table 4.8 Indo-Pacific) and why.

## Self-study exercises

All numbers in exercises 1 to 3 are illustrations. Problem 4 uses Sample Forest data and the results of 9.2. Write down the carbon factor and the source of the comparison number you use.

1. **One seagrass tube.** A tube of 20 cm diameter yields 14.2 g of leaves and 25.6 g of root-rhizomes (dry weight). Calculate above and below biomass (g/m²), above, below, and total carbon (Mg C/ha), and the below-to-above ratio.
2. **Salt marsh.** A 30 x 30 cm grass quadrat yields 52 g dry weight. A root-rhizome core of 10 cm diameter yields 21.3 g of living parts. Calculate living vegetation carbon (Mg C/ha) and the root-rhizome share.
3. **Confidence interval.** Five tubes from one seagrass meadow give total carbon (Mg C/ha): 3.1; 3.6; 2.8; 4.0; 3.5. Calculate the mean, standard deviation, standard error, and 95% interval half-width. What percent of the mean is it?
4. **Comparison.** Compare the vegetation carbon of the sample seagrass meadow (4.15 Mg C/ha) with the live aboveground tree plus root carbon in Sample Forest stratum B (120 + 40 Mg C/ha), and with the Tier 1 seagrass soil carbon (108 Mg C/ha). Which pool is worth measuring first in a seagrass meadow, and why?

**Answer key**

1. Area = 3.1416 x 10^2 = 314.16 cm² = 0.031416 m². Above = 14.2 / 0.031416 = 452.0 g/m²; below = 25.6 / 0.031416 = 814.9 g/m². Above carbon = 0.4520 x 0.34 = 0.1537 kg C/m² = 1.54 Mg C/ha. Below carbon = 0.8149 x 0.34 = 0.2771 kg C/m² = 2.77 Mg C/ha. Total 4.31 Mg C/ha. Below-to-above ratio = 814.9 / 452.0 = 1.80.
2. Grass: 52 / 0.09 = 577.8 g/m²; x 0.45 = 260.0 g C/m² = 0.260 kg C/m² = 2.60 Mg C/ha. Root-rhizomes: core area 0.007854 m²; 21.3 / 0.007854 = 2,712 g/m²; x 0.34 = 922.1 g C/m² = 0.922 kg C/m² = 9.22 Mg C/ha. Total 11.82 Mg C/ha; root-rhizomes = 9.22 / 11.82 = 78%.
3. Mean = 3.40. Standard deviation = 0.46. Standard error = 0.46 / root 5 = 0.21. t (4 degrees of freedom, two-tailed 95%) = 2.776; half-width = 2.776 x 0.207 = 0.58 Mg C/ha, or 16.9% of the mean. Written 3.40 +/- 0.58 Mg C/ha.
4. Stratum B trees + roots = 160 Mg C/ha; seagrass 4.15 / 160 = 2.6% (or 160 / 4.15 = 38.6 times larger). Relative to seagrass soil of 108: 4.15 / 108 = 3.8%. In a seagrass meadow, soil is the largest pool and is worth measuring first; living biomass is below the 5% significant-pool threshold (BC chapter 2), but vegetation carbon is still reported if the samples already exist. Record the comparison number used (see the note on differences in 9.2).

## Find the error

**Report A.** "One seagrass tube of 15 cm diameter yields 8.5 g of leaves (dry). Tube area = 3.14 x 15^2 = 706.5 cm² = 0.07065 m². Biomass = 8.5 / 0.07065 = 120.3 g/m² = 0.1203 kg/m². Carbon = 0.1203 x 0.45 = 0.0541 kg C/m². Per hectare = 0.0541 x 100 = 5.4 Mg C/ha."

**Report B.** "Six tubes give a total carbon of 4.15 Mg C/ha with a standard error of 0.287. 95% confidence interval = 1.96 x 0.287 = +/- 0.56 Mg C/ha."

**Key**

- Report A contains three errors. (1) The 15 cm diameter was used as the radius, so the area is four times too large (706.5 cm², should be 176.7 cm²). (2) The factor 0.45 is the factor for salt marsh grass and litter; seagrass leaves use 0.34. (3) The unit factor from kg C/m² to Mg C/ha is 10, not 100. Correct numbers: 8.5 / 0.017671 = 481.0 g/m²; x 0.34 = 0.1635 kg C/m²; x 10 = 1.64 Mg C/ha (above substrate only). The figure of 5.4 is more than three times too large. How to detect it: compare with the book example (1.6 Mg C/ha for leaves only) and check the tube area: a tube of 15 cm diameter has an area of about 177 cm², not 706 cm².
- Report B uses z (1.96) for n = 6. With 5 degrees of freedom, the table t is 2.571, so the half-width = 2.571 x 0.287 = +/- 0.74 Mg C/ha, not 0.56. The reported interval is about 24% too narrow and gives the impression of better precision than the reality. How to detect it: for small samples use T.INV.2T with n - 1 degrees of freedom, not 1.96.

## The role of AI and example prompts

AI is useful for drafting Excel formulas and explaining terms, but you must check the unit calculation yourself with one tube calculated by hand.

**Prompt 1: drafting formulas.** "In Excel, cell B1 holds the tube diameter (cm) and B2 holds the dry weight of seagrass leaves (grams). Write a formula for carbon in Mg C/ha with a carbon factor of 0.34. Explain each unit conversion."

**Prompt 2: explaining terms.** "Explain in three sentences the difference between above-substrate and below-substrate biomass in seagrass, and which components go into each."

**Prompt 3: checking a calculation.** "Here is my calculation [paste steps and numbers]. Check the units and conversions one by one. Do not fix numbers if you are not sure; mark the doubtful parts."

**Participant's checking steps.**

1. Calculate one tube with a calculator (example 9.2: 8.5 g, 15 cm gives 1.64 Mg C/ha).
2. Enter the AI's formula in Excel with the same data and compare the results.
3. If the difference is more than rounding, break down the AI's formula conversion by conversion until you find the step that differs.
4. Compare the order of magnitude with BC Table 4.8 (Indo-Pacific 0.61 Mg C/ha); a result of hundreds of Mg C/ha is certainly wrong.

**Example of an AI answer that can be wrong.** To Prompt 1, the AI answers:

```text
=B2/(PI()*B1^2/10000)*0.34*10
Explanation: tube area in m2 is PI x D^2 / 10000;
biomass in g/m2, times 0.34 for carbon, times 10 for Mg C/ha.
```

This formula gives 408.9 Mg C/ha for 8.5 g and 15 cm, whereas the correct answer is 1.64. There are two errors: B1^2 should be (B1/2)^2 because B1 is the diameter, and g/m² must first be divided by 1,000 to become kg/m² before multiplying by 10 (combined, multiply by 0.01). How to catch it: calculate one tube by hand (1.64), then compare with the formula result, which is 250 times larger and far above the 0.61 Mg C/ha Indo-Pacific mean. The correct formula:

```text
=B2/(PI()*(B1/2)^2/10000)*0.34/1000*10
```

## Excel notes: Mac and Windows

All formulas below are written with commas as argument separators and points as the decimal. In Indonesian-language Excel or Indonesian regional settings, the argument separator becomes a semicolon, the decimal becomes a comma (type 0,34), and function names may differ (for example SUM becomes JUMLAH and AVERAGE becomes RATA.RATA, or RATA2 in older versions). For other functions, find the local name through the Insert Function box (fx) before typing. The examples below assume the diameter is in column B, leaves in C, root-rhizomes in D, and area in E.

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Entering CSV data from the block above | Paste into column A, then Data > Text to Columns, choose Delimited, comma | Same: Data > Text to Columns, Delimited, comma | Paste, then Data > Split text to columns |
| Tube area (m²) in E2 | `=PI()*(B2/2)^2/10000` | Same | Same |
| Above biomass (g/m²) in F2 | `=C2/E2` | Same | Same |
| Above carbon (Mg C/ha) in G2 | `=F2*0.34/1000*10` | Same | Same |
| Locking a cell that contains a factor | Select the cell in the formula, press Cmd+T; or type a dollar sign before the column letter and row number | Select the cell in the formula, press F4; or type a dollar sign before the column letter and row number | Type the dollar sign directly |
| Copying formulas down | Select the cell and the rows below, Cmd+D | Ctrl+D | Ctrl+D (Windows) or Cmd+D (Mac) |
| Mean of the total carbon column (H2 to H7) | `=AVERAGE(H2:H7)` | Same | Same |
| Sample standard deviation | `=STDEV.S(H2:H7)` | Same | Same |
| Standard error | `=STDEV.S(H2:H7)/SQRT(COUNT(H2:H7))` | Same | Same |
| Two-tailed 95% table t (n = 6) | `=T.INV.2T(0.05,5)` | Same | Same |
| 95% interval half-width | t times standard error, each from its result cell | Same | Same |
| Number of tubes (rounded up) | `=ROUNDUP((t_cell*CV_cell/0.1)^2,0)` | Same | Same |

The T.INV.2T function returns the two-tailed t value and uses n - 1 degrees of freedom, not n. For the number of tubes, repeat with the new t until n no longer changes, as in 9.2.

## Weekly assignment

This assignment is optional. Participants who do it submit the "Seagrass" (optional) sheet in the Week 5 workbook. Pass criteria:

- [ ] The data of the six tubes (or your own data) are shown on the sheet, with tube diameter and units in each column.
- [ ] Tube cross-section area is calculated with the radius (D/2), and the unit is clear (cm² then m²).
- [ ] Above and below substrate biomass are calculated per tube in g/m².
- [ ] The carbon factor 0.34 is used and its source (BC chapter 4) is written.
- [ ] Carbon per tube is converted to Mg C/ha with the factor 0.01 (or 0.34 / 1,000 x 10) and the result for tube 1 matches 4.39 Mg C/ha in the sample data.
- [ ] The mean, standard deviation, standard error, and 95% interval half-width are calculated with t (not 1.96), and the total result matches 4.15 +/- 0.74 Mg C/ha in the sample data.
- [ ] The result for the meadow area (25 ha in the sample data) and the CO2e equivalent are included.
- [ ] One short paragraph compares vegetation carbon with soil carbon and states the comparison number used (Tier 1 or BC Table 4.8).

## 60-minute live session plan

This session is provided for participants who take the optional module. If the Week 5 schedule gives only a small segment to Module 9, use only the rows marked (core), about 20 minutes.

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0-5 | Opening: why measure seagrass and salt marsh vegetation, and how it differs from mangrove | Carbon factor table, Formula sheet |
| 5-15 | (core) Demonstration of one tube: area, biomass, carbon, Mg C/ha | Tube 1 data, calculator |
| 15-30 | (core) Participants calculate tubes 2 to 6 in Excel and match them with the table | Workbook, CSV block |
| 30-40 | Statistics: standard error, t, interval half-width, number of tubes | Formulas in 9.2 |
| 40-50 | Find the error (Reports A and B) and the wrong AI answer | The Find the error section |
| 50-55 | Comparison with soil and the Sample Forest; which comparison number to use | Exercise 4 |
| 55-60 | Q&A and introduction to Module 10 | List of participants' questions |

Sources: Howard et al. (2014) Coastal Blue Carbon (BC) chapter 2, chapter 4 (salt marsh and seagrass sections), Table 1.2 and Table 4.8; the course Formula sheet and carbon factor table (0.45; 0.34; 60 C about 72 hours). Numbers labeled illustration were created for this course and verified by recalculation.

---
