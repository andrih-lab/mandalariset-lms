# Module 11. Emissions and stock change

## Module summary

This module turns two carbon stock inventories into emission figures: the difference in stock between two times is calculated per pool, converted to CO2e with the factor 3.67, then checked as to whether all the lost carbon really becomes emissions. Participants apply it to an illustrative scenario in the Sample Forest, 30 ha of stratum B converted into aquaculture ponds, and test how sensitive the result is to assumptions about soil carbon. This module also compares the stock-difference method with the gain-loss method and direct gas flux measurement (main reference: BC chapter 5).

| Aspect | Details |
| --- | --- |
| Week | 7 (together with Module 12) |
| Study time | Video 37 minutes (3 videos), exercises and assignment about 60 minutes, live session 60 minutes |
| Prerequisites | Modules 7, 8, and 10: carbon stock per pool, total per hectare and site, uncertainty. Basic Excel or Google Sheets |
| Tools | Excel or Google Sheets, a calculator, Sample Forest data (Module 10 tab and the table below) |
| Output of the week | The "Emissions" sheet in the workbook: land-loss scenario and CO2e emissions, complete with a sensitivity test |

Numbers labeled "illustration" were made up for practice and do not come from the books. Numbers from the books are given with the book's name: BC (Coastal Blue Carbon, Howard et al. 2014), KD (Kauffman and Donato 2012, CIFOR WP86), H (Hogarth 2015).

## Learning objectives

After completing this module, participants are able to:

- Distinguish the stock-difference, gain-loss, and flux methods by how they work, their tier, and the gases they can capture.
- Calculate stock change per pool, per year, and CO2e emissions (factor 3.67) from two inventories.
- Explain the function of a reference datum and the Surface Elevation Table (SET) in comparing soil carbon over time, and calculate added soil carbon from SET data.
- Calculate land-loss emissions in the Sample Forest and state the share of soil carbon assumed emitted as a parameter that is tested, at a minimum with three values.
- Calculate emissions with the gain-loss method and convert closed-chamber data into a CH4 flow rate.
- Write the upper bound of emissions with its assumptions openly on the "Emissions" sheet.

## Video plan

Three videos with a total duration of 37 minutes. The rest of the week 7 video budget is used by Module 12.

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 11.1 | Three ways to calculate emissions and the stock-difference method | 12 | Stock difference, gain-loss, and flux; permanent plots; reference datum and SET; the salt marsh example and the SET example from the book |
| 11.2 | Sample Forest scenario: 30 ha of stratum B becomes aquaculture ponds | 13 | Stock difference per pool; the factor 3.67; whether all lost carbon becomes emissions; sensitivity test 25%, 50%, and 100%; the "Emissions" sheet |
| 11.3 | Gain-loss and gas flows | 12 | The 1,000 ha salt marsh example; Tier 1 and 2; CH4, N2O, and GWP; closed chambers and flux towers |

## Content

### 11.1 Three ways to calculate emissions and the stock-difference method

Stock answers how much carbon is stored; emissions answer how much is released or taken up over time (BC chapter 5). The book names three methods.

| Method | How it works | Tier |
| --- | --- | --- |
| Stock difference | Carbon stock is measured at two times and then compared | 3 |
| Gain-loss | The area of land that undergoes an activity is multiplied by that activity's emission factor | 1 and 2 |
| Flux | Gas flows between soil, plants, and the air or water are measured directly or modeled | 2 and 3 |

The stock-difference and gain-loss methods do not measure gases. Both use the change in carbon stock as a proxy and assume the lost carbon is released as CO2. This assumption does not hold for CH4 and N2O, because those two gases are not stored within the ecosystem; only the flux method can capture them (BC chapter 5).

In the stock-difference method, all important pools are measured at T1 and T2. The best results come from permanent plots because the location, plot size, and procedure are the same. The method also shows the change per pool: if living biomass falls while dead biomass rises, the ecosystem was damaged between the two measurements. The cause of the damage cannot be read from these data. At undisturbed sites, a measurement interval of 5 to 10 years is usually adequate for biomass, and 10 to 20 years for soil, which grows by only a few millimetres per year. Where there is a land-use change, measurement is done more often (BC chapter 5).

The basic formula:

```latex
\Delta C = C_{T2} - C_{T1}, \qquad \text{per year} = \frac{\Delta C}{T2 - T1}, \qquad \text{CO}_2\text{ emission} = (-\Delta C) \times 3.67
```

A negative sign on the stock change means carbon was lost. The factor 3.67 comes from 44 divided by 12, the ratio of the molecular mass of CO2 to carbon (BC chapter 1; KD 3.2.1).

**Example from the book: salt marsh.** The carbon stock of a salt marsh is 34,667 Mg C in 2002 and 25,133 Mg C in 2012 (BC chapter 5).

1. Stock change = 25,133 - 34,667 = -9,534 Mg C.
1. Per year = -9,534 / 10 = -953 Mg C (precisely -953.4).
1. Emission if it all escapes = 953 × 3.67 = 3,498 Mg CO2 per year. With 953.4 the result is 3,499; this difference is only rounding.

The guidebook writes the T2 stock as 25,167 and then 25,133; the calculation uses 25,133. This is a typo, so write down which number you use.

**Reference datum and SET.** The coastal soil surface is not fixed: it rises with sediment and falls with erosion or compaction. A 0-100 cm core at T2 therefore does not cover the same layer as a 0-100 cm core at T1. The solution is a reference datum, a boundary in the soil whose position is fixed and which lies below the reach of roots, for example bedrock or a sharp boundary between organic soil and marine sand. All measurements are expressed relative to that boundary. Where no such boundary exists, a Surface Elevation Table (SET) on a permanent pillar is used, with a precision of 1.5 mm. SET is often installed together with a marker horizon that shows the thickness of new sediment (accretion) (BC chapter 5).

```latex
\text{shallow subsidence} = \text{accretion (marker horizon)} - \text{change in surface height (SET)}
```

**Example from the book: surface rises.** SET records a rise of 0.52 cm per year for 10 years; the carbon density of the top layer at T2 is 0.195 g/cm³ (BC chapter 5).

1. Thickness of new soil = 0.52 × 10 = 5.2 cm.
1. Added carbon = 5.2 × 0.195 = 1.014 g C/cm².
1. To hectares: 1.014 × 100 = 101.4 Mg C/ha.

**If the surface falls.** In the book example, SET records a fall of 0.86 cm per year for 10 years, so 8.6 cm. A 1 m core at T2 reaches 8.6 cm deeper than the T1 core, so only the top 91.4 cm of the T2 core is compared with T1 (100 - 8.6 = 91.4).

### 11.2 Sample Forest scenario: 30 ha of stratum B becomes aquaculture ponds

This scenario calculates the emissions from converting part of Sample Forest stratum B with the stock-difference method. All stock numbers use the canonical Sample Forest data; the conversion event and the assumption on the fraction of carbon lost are illustrations.

#### Sample Forest data: aquaculture pond conversion scenario (illustration)

| Scenario element | Value | Notes |
| --- | --- | --- |
| Initial inventory T1 | 2026 | Permanent plots; stock per ha the same as the canonical Sample Forest table |
| Conversion to ponds | 2030 | 30 ha of stratum B (264 ha); illustration |
| Re-measurement T2 | 2036 | 10-year interval; illustration |
| Live trees, roots, dead wood and litter on the 30 ha | 100% lost | Illustration: land fully cleared; vegetation carbon that is displaced below 5% may be neglected (BC chapter 5) |
| Soil carbon 0-100 cm on the 30 ha | 25%, 50%, or 100% lost | Range from BC chapter 5 (existing studies assume 25 to 100% of the organic carbon in the top 1 m becomes emissions); the midpoint 50% is an illustrative choice |
| Reference datum | Assumed present | Soil depth is compared against a fixed boundary, so 0-100 cm at T1 and T2 are comparable |

Stratum B stock per hectare at T1 (Mg C/ha, canonical data): live aboveground trees 120, roots 40, dead trees + downed dead wood + litter 15, soil 495; total 670 (± 73).

```csv
pool,stock_T1_Mg_C_per_ha,base_fraction_lost
live_trees,120,1
roots,40,1
dead_litter,15,1
soil_1m,495,0.5
```

**Step 1: carbon lost per hectare and for 30 ha.** Vegetation and dead wood: 120 + 40 + 15 = 175 Mg C/ha, so 175 × 30 = 5,250 Mg C. Soil at a 50% fraction: 495 × 0.5 = 247.5 Mg C/ha, so 247.5 × 30 = 7,425 Mg C. Total = 5,250 + 7,425 = 12,675 Mg C, or 422.5 Mg C/ha.

**Step 2: site stock before and after.** T1 = 331,620 Mg C (site 564 ha). T2 = 331,620 - 12,675 = 318,945 Mg C, a mean of 565.5 Mg C/ha (T1: 588). A loss of 3.8% of site stock.

**Step 3: per year and CO2e.** A 10-year interval gives -12,675 / 10 = -1,267.5 Mg C per year as the interval mean. The conversion occurred in 2030, not evenly; the stock-difference method does not show when the event occurred within the interval. CO2e emission = 12,675 × 3.67 = 46,517 Mg CO2e, or 4,652 Mg CO2e per year as the interval mean.

**Does all the lost carbon become emissions?** Not always. Eroded carbon can move and settle again in neighbouring ecosystems or the deep sea, so the calculation result is an upper bound of emissions (BC chapter 5). The book's guidelines:

- Autochthonous carbon may be counted; allochthonous carbon is harder because it was previously lost from elsewhere without becoming emissions.
- If soil carbon increases because of sediment, the part from outside is reduced with a correction factor (from the literature, isotopes, a cautious number such as 50%, or a model).
- For loss through erosion there is no standard number yet; existing studies use 25 to 100% of the organic carbon in the top 1 m.
- Vegetation carbon that is displaced may be neglected if it is below 5%.

The book does not state a specific fraction for building aquaculture ponds. So the soil fraction in this scenario is a parameter that must be tested, not a value assumed to be correct.

**Sensitivity test of the soil carbon fraction emitted** (illustration; vegetation and dead wood stay 5,250 Mg C):

| Soil fraction emitted | Soil (Mg C) | Total lost (Mg C) | Emission (Mg CO2e) | Site stock T2 (Mg C/ha) |
| --- | --- | --- | --- | --- |
| 25% | 3,712.5 | 8,962.5 | 32,892 | 572.1 |
| 50% | 7,425 | 12,675 | 46,517 | 565.5 |
| 100% | 14,850 | 20,100 | 73,767 | 552.3 |

The value of 100% equals the entire stock of the 30 ha (30 × 670 = 20,100 Mg C) and is the upper bound. From 25% to 100%, emissions change by about 2.2 times, entirely because of one assumption. In a report, write all three values or the range, not a single number.

**Uncertainty.** The T1 stock for 30 ha of stratum B is 20,100 ± 2,190 Mg C (73 × 30; Module 10). This uncertainty represents only the stock measurement. The uncertainty from the soil fraction emitted is far larger (8,962.5 to 20,100 Mg C) and must not be merged into the stock confidence interval.

**The "Emissions" sheet in the workbook.** The design (parameters in column B, table starting at row 11):

| Cell | Content | Formula or value |
| --- | --- | --- |
| B4 | Area of stratum B converted (ha) | `30` |
| B5 | Carbon to CO2 factor | `3.67` |
| B6 | Fraction of soil carbon emitted | `0.5` |
| B7 | Fraction of vegetation and dead wood emitted | `1` |
| A12:A15 | Live trees, roots, dead + litter, soil | T1 stock per ha in B12:B15: 120, 40, 15, 495 |
| C12:C15 | Fraction lost | C12 to C14 contain `=$B$7`; C15 contains `=$B$6` |
| D12:D15 | Lost per ha (Mg C/ha) | `=B12*C12`, fill down |
| E12:E15 | Lost for the converted area (Mg C) | `=D12*$B$4`, fill down |
| F12:F15 | Emission (Mg CO2e) | `=E12*$B$5`, fill down |
| D16, E16, F16 | Total | `=SUM(D12:D15)`, `=SUM(E12:E15)`, `=SUM(F12:F15)` |
| A20:A22 | Soil fractions tested | `0.25`; `0.5`; `1` |
| B20:B22 | Emission by tested fraction (Mg CO2e) | `=$B$4*(SUM($B$12:$B$14)*$B$7+$B$15*A20)*$B$5`, fill down |
| B25 | Site stock T1 (Mg C) | `331620` |
| B26 | Site stock T2 (Mg C) | `=B25-E16` |

The results that must appear at B6 = 0.5: E16 = 12,675, F16 = 46,517, B20 = 32,892, B21 = 46,517, B22 = 73,767, B26 = 318,945. In Indonesian-language Excel, write decimals with a comma and use semicolons as argument separators.

### 11.3 Gain-loss and gas flows

The gain-loss method is used after the initial inventory when re-measurement in the field cannot be done. The area of each activity that occurs is recorded, then multiplied by that activity's emission factor. Emission factors from a world database, for example the IPCC 2013 Wetlands Supplement, give Tier 1; factors from the country itself give Tier 2. Activity area data must always come from the country or project itself (BC chapter 5).

```latex
\text{carbon lost} = \sum \text{activity area (ha)} \times \text{emission factor (Mg C/ha/year)} \times \text{duration (years)}
```

**Example from the book.** A 1,000 ha salt marsh was inventoried in 2002. In 2007, 200 ha were drained (emission factor 7.9 Mg C/ha/year). In 2010, 50 ha of that land were rewetted (factor -0.91 Mg C/ha/year; negative means uptake). How much carbon was lost up to 2012 (BC chapter 5)?

1. 2007-2010 (3 years), 200 ha drained: 200 × 7.9 × 3 = 4,740 Mg C.
1. 2010-2012 (2 years), 150 ha remaining drained: 150 × 7.9 × 2 = 2,370 Mg C.
1. 2010-2012 (2 years), 50 ha rewetted: 50 × (-0.91) × 2 = -91 Mg C.
1. Total = 4,740 + 2,370 - 91 = 7,019 Mg C; emission = 7,019 × 3.67 = 25,760 Mg CO2.

The guidebook prints 25,739 Mg CO2 for this example. The correct product is 25,760 (25,759.7), so 25,739 appears to be a typo. Write down the number you use.

**Methane and nitrous oxide.** The amounts of CH4 and N2O from wetlands are far smaller than CO2, but their 100-year warming potential is 25 times (CH4) and 298 times (N2O) that of CO2 (BC chapter 5). So small emissions of these two gases can change the calculation of a project's climate benefit. The book gives three guidelines:

- Building aquaculture ponds disturbs the soil and causes large CO2 emissions.
- N2O emissions can generally be neglected, unless there is nitrate input from fertilizer runoff or aquaculture.
- CH4 formation depends on salinity; above 18 ppt emissions are treated as zero. Rewetting freshwater tidal land that was previously drained raises CH4 emissions.

**Static chamber.** An airtight chamber is placed over a patch of soil and its plants; air samples are taken several times (for example at minutes 2, 15, 35, 45, 60, 80), and the rate of increase in gas concentration shows the size of the flow. Example from the book: CH4 concentration rises 0.0737 ppm per minute, the chamber holds 21.8072 mol of air and covers 0.5 m² of soil (BC chapter 5).

1. CH4 out = 0.0737 × 21.8072 = 1.607 micromoles per minute.
1. Per m² = 1.607 / 0.5 = 3.214 micromoles per m² per minute (the book rounds to 3.2).
1. Units: × 16.042 g/mol × 1,440 minutes/day × 10,000 m²/ha, then to Mg: 0.00074 Mg CH4/ha/day (book: 0.00074).
1. CO2 equivalent: 0.000743 × 25 = 0.0186 Mg CO2e/ha/day, about 6.8 Mg CO2e/ha/year if the rate is assumed constant through the year (illustration; the book warns that an annual figure needs extra assumptions).

Notes on using chambers (BC chapter 5): the soil area covered is at least 0.25 m² because tidal wetland CH4 emissions are often low; soil 1-2 m around the chamber must not be stepped on because it presses out CH4 bubbles and makes the result too high, so a boardwalk 5-10 cm high is used and the chamber base is installed a few days earlier. The weaknesses: the chamber changes the temperature and light inside, does not capture gas leaving as bubbles, and needs extra assumptions for an annual figure.

**Flux tower.** Eddy covariance uses instruments on a tower above the canopy and measures whole-ecosystem CO2 exchange without disturbing the site, but is expensive and the data processing is complex. For seagrass, the underwater instruments that exist only measure oxygen. Carbon also leaves laterally with water (dissolved inorganic carbon, dissolved organic carbon, and particles of organic matter); this path is not captured by measurements in the air, so the surface–air gas exchange is not necessarily the same as the change in carbon storage (BC chapter 5).

## Self-study exercises

Work on the "Emissions" sheet or a blank sheet. Factor 3.67; write the number used if the books differ.

1. (Basic) The carbon stock of a salt marsh (illustration) is 12,480 Mg C at T1 and 11,360 Mg C at T2, an interval of 8 years. Calculate the stock change, the change per year, and the CO2 emissions per year if all the lost carbon is assumed to escape.
1. (Basic) SET records a surface rise of 0.35 cm per year for 12 years (illustration); the carbon density of the top layer at T2 is 0.18 g/cm³. How much soil carbon was added, in Mg C/ha?
1. (Intermediate) In the Sample Forest, 20 ha of stratum A is converted into aquaculture ponds. Assume vegetation, roots, and dead wood are 100% lost and soil carbon 25% lost (illustration). Calculate the carbon lost and the CO2e emissions with the stratum A data (70, 25, 8, and soil 380 Mg C/ha).
1. (Intermediate) In the 30 ha stratum B scenario, change the soil fraction emitted to 75%. Calculate the carbon lost and the CO2e emissions, then state the percentage of the loss that comes from soil.
1. (Advanced) A 100 ha area is drained for 4 years with an emission factor of 7.9 Mg C/ha/year (book number, BC chapter 5). At the start of year 3, 20 ha are rewetted (factor -0.91). Calculate the carbon lost and the CO2 emissions with the gain-loss method. Then calculate the CH4 rate in Mg/ha/day if the chamber concentration rises 0.05 ppm per minute in a 21.8072 mol chamber covering 0.5 m² (illustration).

**Answer key**

1. Stock change = 11,360 - 12,480 = -1,120 Mg C. Per year = -1,120 / 8 = -140 Mg C. Emission = 140 × 3.67 = 513.8 Mg CO2 per year (total 4,110.4 Mg CO2).
1. New thickness = 0.35 × 12 = 4.2 cm. Carbon = 4.2 × 0.18 = 0.756 g C/cm²; × 100 = 75.6 Mg C/ha.
1. Vegetation and dead wood = 70 + 25 + 8 = 103 Mg C/ha × 20 = 2,060 Mg C. Soil = 380 × 20 × 0.25 = 1,900 Mg C. Total = 3,960 Mg C; emission = 3,960 × 3.67 = 14,533 Mg CO2e.
1. Soil = 495 × 30 × 0.75 = 11,137.5 Mg C; vegetation and dead wood 5,250. Total = 16,387.5 Mg C; emission = 16,387.5 × 3.67 = 60,142 Mg CO2e. Share from soil = 11,137.5 / 16,387.5 = 68%.
1. Years 1-2: 100 × 7.9 × 2 = 1,580. Years 3-4: 80 × 7.9 × 2 = 1,264, and 20 × (-0.91) × 2 = -36.4. Total = 2,807.6 Mg C; emission = 2,807.6 × 3.67 = 10,304 Mg CO2. CH4: 0.05 × 21.8072 = 1.0904 micromoles/minute; / 0.5 = 2.181 micromoles/m²/minute; after unit conversion about 0.00050 Mg CH4/ha/day.

## Find the error

**Case A.** A report writes: "Converting 30 ha of stratum B into ponds removes 588 Mg C/ha × 30 ha = 17,640 Mg C, equivalent to 64,739 Mg CO2e. All carbon is assumed emitted."

**Case B.** A field note writes: "SET shows a rise of 0.52 cm/year for 10 years; carbon density 0.195 g/cm³. Added soil carbon = 5.2 × 0.195 = 1.014 Mg C/ha."

**Key**

- Case A is wrong twice. First, 588 is the weighted mean of the whole site; the converted land is entirely stratum B so 670 Mg C/ha is used (30 × 670 = 20,100 Mg C). Second, the assumption that all soil carbon becomes emissions is an upper bound, not a result; the report must state the fraction and test it (25%, 50%, 100% give 32,892, 46,517, 73,767 Mg CO2e). The figure of 64,739 with 588 happens to look reasonable, but it does not rest on the correct stratum stock. How to detect it: match the stratum of the lost land with the stock row used, and look for the sentence stating the fraction assumption in the report.
- Case B: 1.014 is g C/cm², not Mg C/ha. The × 100 conversion was skipped; the correct figure is 101.4 Mg C/ha (100 times larger). How to detect it: check the unit at each step (thickness cm × g/cm³ = g/cm²) and compare with the range of soil carbon stocks in the Module 7 tab.

## The role of AI and example prompts

AI helps draft sheet formulas and explain terms, but its calculation results must always be matched against hand calculation and the numbers in the books.

**Prompt 1: drafting Excel formulas.**

```markdown
I have an Excel sheet with stratum B carbon stock (Mg C/ha) in B12:B15: live trees 120, roots 40, dead wood and litter 15, soil 495. The lost fraction for vegetation is in B7 and for soil in B6. The converted area is in B4 and the factor 3.67 in B5. Write Excel formulas for carbon lost (Mg C) and CO2e emissions per pool, with the correct absolute cell references. Explain each formula in one sentence.
```

Check: enter the formulas, then match the total with the hand calculation in section 11.2 (E16 = 12,675 Mg C, F16 = 46,517 Mg CO2e at a soil fraction of 0.5). Change B6 to 1; E16 must become 20,100.

**Prompt 2: explaining terms.**

```markdown
Explain in five sentences how a reference datum and a Surface Elevation Table are used to compare soil carbon at two times in mangroves. Use plain language and say what neither of them can answer.
```

Check: compare with section 11.1 and BC chapter 5. Mark sentences containing numbers (precision, depth) and check the numbers against the book.

**Prompt 3: checking a calculation.**

```markdown
Check this calculation and show where it is wrong if it is: 30 ha of stratum B, vegetation and dead wood lost 100% (175 Mg C/ha), soil carbon lost 50% of 495 Mg C/ha. CO2e emissions = ... Write each step with numbers.
```

Check: recalculate with a calculator; do not accept "it is correct" without matching intermediate numbers.

**Example of an AI answer that can be wrong.** Suppose the AI answers: "Emissions from 30 ha of stratum B = 30 × 588 Mg C/ha = 17,640 Mg C. Because all the lost carbon becomes CO2, the emission is 17,640 × 3.67 = 64,739 Mg CO2e, and this figure is certain."

How to catch it: (1) 588 is the site mean, whereas the lost land is entirely stratum B (670 Mg C/ha); (2) the word "certain" contradicts the book, which calls a result like this an upper bound because some carbon can move elsewhere (BC chapter 5); (3) the AI did not ask about the assumption of the soil fraction. Instruct the AI to repeat the calculation with the stratum B stock and three soil fractions, then match it with the sensitivity table.

## Excel notes: Mac and Windows

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Sum a column | `=SUM(E12:E15)` | `=SUM(E12:E15)` | `=SUM(E12:E15)` |
| Lock a parameter cell | Type `$` directly in the formula, for example `$B$4`; Cmd+T also switches the reference type | Type `$` directly or press F4 | Type `$` directly |
| Copy formulas down | Select the cells, Cmd+D | Select the cells, Ctrl+D | Select the cells, Ctrl+D (Mac: Cmd+D) |
| Round the result | `=ROUND(F16,0)` | `=ROUND(F16,0)` | `=ROUND(F16,0)` |
| Conditional choice | `=IF(A20<=0.5,"low","high")` | same | same |
| Number formatting (thousands separator) | Cmd+1, Number tab | Ctrl+1, Number tab | Format > Number |
| Make a sensitivity bar chart | Select A20:B22, Insert > Chart | Select A20:B22, Insert > Chart | Select A20:B22, Insert > Chart |

In Indonesian-language Excel, function names differ (SUM becomes JUMLAH, IF becomes JIKA, ROUND becomes BULATKAN), the argument separator is a semicolon, and decimals are written with a comma. Examples: `=JUMLAH(E12:E15)` and `=BULATKAN(F16;0)`. In the table above, formulas are written with commas and decimal points in English style. If a formula produces an error, check the argument separator first. The Excel menus on Mac (Insert, Chart) and Windows can have buttons in different places between versions; search through the menu search box if needed.

## Weekly assignment

Submit the workbook with an "Emissions" sheet that meets the following list.

- [ ] Parameters (converted area, factor 3.67, soil fraction, vegetation fraction) are filled in separate cells and labeled, with "illustration" noted for those not from the books.
- [ ] The T1 stock per pool of stratum B equals the canonical data (120, 40, 15, 495; total 670).
- [ ] Carbon lost and emissions of each pool are calculated with formulas (not typed numbers); E16 = 12,675 Mg C and F16 = 46,517 Mg CO2e at a soil fraction of 0.5.
- [ ] The sensitivity table contains at least three soil fractions (25%, 50%, 100%) with emissions of 32,892; 46,517; 73,767 Mg CO2e.
- [ ] Site stock T2 = 318,945 Mg C and the percentage loss relative to T1 are displayed.
- [ ] One short paragraph states that the result is an upper bound (or a range), names the soil fraction assumption, and notes that the fraction uncertainty is larger than the stock uncertainty.
- [ ] One short paragraph states which number is used for the relevant differences between books (25,739 or 25,760; 25,167 or 25,133).
- [ ] Zero formula errors; units written in every column.

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0-5 | Opening; review questions from the videos | Table of the three methods |
| 5-15 | Q&A: reference datum, SET, sign of stock change | Salt marsh and SET examples (11.1) |
| 15-35 | Participants build the "Emissions" sheet for the 30 ha scenario, matching the results 12,675 and 46,517 | Workbook, Sample Forest data |
| 35-45 | Each participant chooses a soil fraction and defends the choice; compare with 25%, 50%, 100% | Sensitivity table |
| 45-55 | Case discussion: when to use gain-loss and when flux; why N2O and CH4 are not captured by stock difference | 1,000 ha example and chamber (11.3) |
| 55-60 | Summary and explanation of the assignment | Assignment checklist |

Sources: BC (Howard et al. 2014, Coastal Blue Carbon) chapters 1 and 5; KD (Kauffman and Donato 2012, CIFOR WP86) section 3.2.1; Sample Forest data (illustration) from the Module 10 tab; differences between books from the module's formula sheet.

---
