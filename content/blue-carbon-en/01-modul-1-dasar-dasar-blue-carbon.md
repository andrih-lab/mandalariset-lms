# Module 1. Blue carbon basics

## Module overview

This module explains what blue carbon is, where that carbon is stored, where it comes from, and how the IPCC sets out the way to calculate it (activity data, emission factors, and three Tiers), then introduces the Sample Forest used throughout all later modules. After this module, participants can calculate a Tier 1 estimate for a mangrove site, convert it into CO2 equivalent, and judge how coarse that estimate is compared with field data.

| Aspect | Details |
| --- | --- |
| Week | 1 (together with Module 2) |
| Study time | Video 30 minutes (3 videos); exercises and assignment about 30 minutes (half of the week 1 budget); 60-minute live session for Modules 1 and 2 together |
| Prerequisites | Basic Excel or Google Sheets (multiplication and addition formulas, number formatting); basic statistics is not needed in this module |
| Tools | Excel or Google Sheets, a calculator, the blank course workbook |
| Book references | BC chapter 1 (Howard et al. 2014, Coastal Blue Carbon); KD chapter 1 (Kauffman and Donato 2012, CIFOR WP86); H chapter 12 (Hogarth, The Biology of Mangroves and Seagrasses, 3rd edition) |
| Output of the week | The "Pools" sheet in the workbook: a table of the four carbon pools for the Sample Forest |

## Learning objectives

After completing this module, participants are able to:

1. Name the three blue carbon ecosystems and list their four carbon pools (soil, living aboveground plants, roots and rhizomes, dead material).
2. Explain two reasons why coastal soil carbon is stored for a long time (waterlogged soil without oxygen, and a soil surface that keeps rising), and distinguish autochthonous from allochthonous carbon.
3. Distinguish activity data from emission factors and calculate emissions as the product of the two.
4. Distinguish Tier 1, 2, and 3 by their data sources and name the typical error of Tier 1.
5. Calculate a Tier 1 estimate of the soil carbon stock of a site and convert the result into Mg CO2e using the factor 3.67.
6. Fill in the "Pools" sheet for the Sample Forest and explain why a Tier 1 estimate differs from the stock obtained by field measurement.

## Video plan

Three videos, 30 minutes in total (half of the week 1 video budget; the other half is for Module 2).

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 1.1 | What blue carbon is and why its soil carbon lasts | 10 | Three ecosystems; four pools; waterlogged soil and accretion; autochthonous and allochthonous; why management matters (figures on area loss) |
| 1.2 | Carbon inventory: activity data, emission factors, and Tiers | 11 | Three things to know; activity data and emission factors with a worked example; Tier 1, 2, 3 and their typical errors |
| 1.3 | From carbon to CO2e, the Tier 1 estimate, and what is not yet known | 9 | The 3.67 factor; a Tier 1 example for 564 ha compared with the Sample Forest stock; knowledge gaps; introducing the "Pools" sheet |

## Content

### 1.1 What blue carbon is and why its soil carbon lasts

Blue carbon is the carbon stored in three vegetated coastal ecosystems: mangrove forests, tidal salt marshes, and seagrass meadows (BC chapter 1). In all three, carbon is stored in four pools:

| Pool | Content | Example in the Sample Forest |
| --- | --- | --- |
| Soil | Organic matter and dead roots within the sediment | Soil to 1 m |
| Living aboveground plants | Leaves, branches, stems | Live aboveground trees |
| Living belowground plants | Roots and rhizomes | Roots |
| Dead material | Litter, dead wood | Dead trees, downed dead wood, litter |

The unit used is megagrams of carbon per hectare (Mg C/ha). One megagram equals one tonne.

**Why the soil stores the most.** Carbon in plant bodies lasts only a few years to a few decades, as in upland forests. The difference is in the soil. Upland forest soil contains a lot of oxygen, so microbes break down organic matter quickly and the carbon returns to the air as CO2. Coastal soil is always waterlogged and nearly without oxygen, so decomposition is very slow. In addition, the coastal soil surface keeps rising because of new deposits; older layers are buried and their carbon stays stored for hundreds to thousands of years (BC chapter 1). The guidebook gives examples of carbon-rich soil more than 10 m thick and more than 6,000 years old under Posidonia seagrass meadows in Spain and mangroves in Belize, and salt marsh sediment 3 to 5 m thick and 3,000 to 4,000 years old in New England with organic carbon content up to 40% (BC chapter 1). In mangroves, 50% to more than 90% of the carbon stock lies below the soil surface (BC chapter 3; KD 2.3).

**Autochthonous and allochthonous.** Autochthonous carbon is produced and deposited in the same place, mainly from the roots of local plants that die and decompose very slowly. Allochthonous carbon is produced elsewhere, carried by waves, tides, and currents together with sediment, and then trapped by roots and canopy (BC chapter 1). In seagrass meadows about 50% of soil carbon comes from outside. In mangroves and salt marshes most of the carbon is produced by local plants, although at some sites the contribution from outside is considerable. This distinction is needed in Module 11: allochthonous carbon already in the soil must not be counted as a product of local plants when what is being calculated is uptake by vegetation.

**Why it needs to be managed.** As long as the soil stays wet and covered by vegetation, its carbon is safe. If the vegetation is removed and the land is drained or dredged, the sediment is exposed to air and its carbon is released as CO2 and other greenhouse gases. The guidebook records the loss of 340,000 to 980,000 ha of vegetated coastal ecosystems per year, and the loss of up to 67% of the original area of mangroves, 35% of salt marshes, and 29% of seagrasses (BC chapter 1, citing Murray et al. 2011). Hogarth gives a global picture: mangroves store roughly 20 billion tonnes of carbon, and mangrove clearing releases about 240 million tonnes of CO2 per year (H 12.4).

**Worked example (Sample Forest, illustration).** What percentage of the Stratum B stock lies belowground? The belowground part is roots plus soil, that is 40 + 495 = 535 Mg C/ha out of a total of 670 Mg C/ha.

```latex
\frac{40 + 495}{670} \times 100 = 79.9\%
```

The belowground share of Stratum B is 79.9%. For the whole Sample Forest the value is 81.2% (roots 18,660 Mg C plus soil 250,680 Mg C, out of 331,620 Mg C). This number lies within the 50% to more than 90% range reported in the book, but slightly below the 82% to 89% in four mangrove forests in KD Table 8. This is reasonable: those four sites are only a part of the range of sites in the world.

### 1.2 Carbon inventory: activity data, emission factors, and Tiers

A carbon inventory is bookkeeping: how much carbon is stored in a site, how much enters, and how much leaves over a given period. To prepare one you need to know the distribution of ecosystems in the past and now together with their land use, the current carbon stock and its rate of increase, and the emissions that could occur if the landscape changes (BC chapter 1).

The IPCC asks for two types of data:

- **Activity data**: what land, how large, and changing into what. It consists of land cover and land use maps together with their rates of change, generally from satellite imagery supplemented by field checks. The unit is hectares.
- **Emission factor**: the amount of carbon released (positive value) or taken up (negative value) per hectare of land that changes. To be accurate, emission factors are measured in the field. The unit is Mg C/ha.

```latex
\text{Emissions (Mg C)} = \text{activity data (ha)} \times \text{emission factor (Mg C/ha)}
```

**Tiers.** The IPCC divides accuracy into three levels (KD 1.3.1.2; BC chapter 1):

| Tier | Data used | Notes |
| --- | --- | --- |
| 1 | IPCC default numbers | Coarsest; error can reach ±50% for aboveground carbon and ±90% for soil carbon |
| 2 | National or site-specific data for the important factors | For example the mean carbon stock of each ecosystem type already measured in that country |
| 3 | Detailed inventory, repeated measurement, or modeling | Most accurate and most expensive; the methods in KD and the guidebook are aimed at this level |

Tier 2 and 3 results are more trusted and so can support a higher carbon payment value. The IPCC recommends that every country move toward Tier 3 for the main stocks, emission sources, and sinks (KD 1.3.1.2).

**Worked example (illustration, not from the book).** Satellite imagery shows 100 ha of mangrove converted into aquaculture ponds; this is the activity data. Field measurement shows each hectare loses 500 Mg C; this is the emission factor.

```latex
100 \times 500 = 50{,}000 \ \text{Mg C}
```

The carbon emission is 50,000 Mg C. If the Tier 1 error for soil of ±90% is applied to the emission factor, the true value could lie between 5,000 and 95,000 Mg C. It is a range this wide that motivates field measurement.

### 1.3 From carbon to CO2e, the Tier 1 estimate, and what is not yet known

**The 3.67 factor.** Carbon is converted into CO2 equivalent (CO2e) by multiplying by 3.67, which is the ratio of the molecular weight of CO2 (44) to the atomic weight of carbon (12) (BC chapter 1; KD 3.3).

```latex
\text{CO}_2\text{e (Mg)} = \text{carbon (Mg C)} \times 3.67
```

The exact value is 44 ÷ 12 = 3.6667. The books use 3.67. For 217,704 Mg C the difference is about 726 Mg CO2e (0.09%), so it is not meaningful, but state the factor used in the report.

**The Tier 1 estimate.** When field data do not yet exist, ecosystem area is multiplied by the global mean soil carbon stock to 1 m: mangrove 386 Mg C/ha (range 55 to 1,376), salt marsh 255 (16 to 623), seagrass 108 (10 to 829) (BC Table 1.2, citing IPCC 2013). Note that these numbers cover only soil, not trees and roots.

**Worked example from the book (BC chapter 1).** A project of 564 ha of mangrove without field data:

```latex
386 \times 564 = 217{,}704 \ \text{Mg C}
```

In CO2e: 217,704 × 3.67 = 798,974 Mg CO2e. The area of 564 ha equals the area of the Sample Forest, so this estimate can be compared with the stock obtained by measurement (canonical data below):

| Comparison | Mg C/ha | Site total (Mg C) | Tier 1 relative to the comparison |
| --- | --- | --- | --- |
| Tier 1, soil only (386 × 564) | 386 | 217,704 | - |
| Sample Forest, soil only | 444 | 250,680 | 32,976 Mg C lower (13.2%) |
| Sample Forest, all pools | 588 | 331,620 | 113,916 Mg C lower (34.4%) |

Tier 1 misses on both comparisons. The like-for-like comparison is the soil-only row, because the figure of 386 covers only soil; there Tier 1 is 13.2% short, and 22.0% short in Stratum B (101,904 versus 130,680 Mg C). If the figure of 386 is used as though it represented the entire site stock, the result is 34.4% short. Both differences are still within the ±90% error the IPCC sets for soil, but the direction is the same, namely too low, because the Sample Forest is a mature Rhizophora forest with soil above the world average. The lesson: Tier 1 suits an initial estimate, not a project stock report.

**What is not yet known.** The guidebook admits several gaps (BC chapter 1):

- Ecosystem area: mangroves are reasonably mapped, but many seagrass meadows have not been surveyed, including in Southeast Asia.
- Rates of carbon sequestration and storage: data from Africa, South America, and Southeast Asia are still scarce.
- Emissions and removals: emissions from exposed organic soil and damaged seagrass, and removals at restoration sites, have not been widely measured.
- The effect of each human activity: emission rates per type of activity are little known, especially for seagrass.
- The fate of eroded carbon: some dissolves into seawater, some is deposited again offshore; the proportions are still being researched.

The social, political, and economic sides of carbon accounting are not covered in the guidebook and KD, for example permanence, leakage, and governance.

### Sample Forest data: canonical summary

The Sample Forest is a fictitious site of 564 ha used in all modules. All of its numbers are illustrations (not field data) and are not changed between modules. The complete tables and the origin of the numbers are in the Guide tab; this section is only a summary so participants know it from the first week.

The Sample Forest has three strata (illustration): Stratum A, pioneer seaward mangrove (Sonneratia, Avicennia), 180 ha; Stratum B, mature Rhizophora forest, 264 ha; Stratum C, landward mangrove (Bruguiera, Ceriops), 120 ha. Area is assumed to come from the official boundary and is treated as having no uncertainty.

Carbon stock per hectare by pool, mean ± half-width of the 95% confidence interval (Mg C/ha, illustration):

| Pool | Stratum A (180 ha) | Stratum B (264 ha) | Stratum C (120 ha) |
| --- | --- | --- | --- |
| Live aboveground trees | 70 ± 12 | 120 ± 18 | 95 ± 14 |
| Roots | 25 ± 6 | 40 ± 8 | 30 ± 7 |
| Dead trees + downed dead wood + litter | 8 ± 4 | 15 ± 6 | 10 ± 5 |
| Soil to 1 m | 380 ± 58 | 495 ± 70 | 430 ± 62 |
| Total per ha | 483 ± 60 | 670 ± 73 | 565 ± 64 |

The uncertainty of the total per hectare is the square root of the sum of squares of the uncertainty of each pool. Example for Stratum B: the square root of 18² + 8² + 6² + 70² = 73. The method and the reason are discussed in Module 10; in this module it is enough to read the numbers.

For the site, each total per hectare is multiplied by the area of its stratum:

| Stratum | Area (ha) | Total per ha (Mg C/ha) | Stratum stock (Mg C) |
| --- | --- | --- | --- |
| A | 180 | 483 | 86,940 |
| B | 264 | 670 | 176,880 |
| C | 120 | 565 | 67,800 |
| Total | 564 | weighted mean 588 | 331,620 |

The site stock of 331,620 Mg C is equivalent to 331,620 × 3.67 = 1,217,045 Mg CO2e. The weighted mean of 588 Mg C/ha is 331,620 ÷ 564 = 587.98, rounded to 588. The site uncertainty (square root of the sum of squares of area × confidence interval of each stratum) is about ±23,359 Mg C (7.0%), or ±41.4 Mg C/ha (calculated from the unrounded interval of each stratum; with the rounded intervals 60, 73, and 64 the result is 23,389, a rounding difference); this number is reused in Module 10.

The same data in a form that can be copied into Excel or Google Sheets (illustration):

```csv
Stratum,Area_ha,Live_trees,Roots,Dead_and_litter,Soil_1m
A,180,70,25,8,380
B,264,120,40,15,495
C,120,95,30,10,430
```

A note on numbers that differ between books for this module. Hogarth writes a carbon accumulation rate of 22.6 tonnes per hectare per year in mangroves and 13.8 in seagrass, citing McLeod et al. (2011) (H 12.4). The numbers commonly quoted from that source are 226 and 138 g C per m² per year, equivalent to 2.26 and 1.38 tonnes C per hectare per year, so the numbers in the book look ten times too large. This comparison is outside the three books and should be checked against the original source before quoting. Participants are asked to write down the number they use in their report together with its source.

## Self-study exercises

Work with a calculator or Excel, then compare with the key. Problems 1 to 5 increase in difficulty; problems 1, 3, and 5 use Sample Forest data (illustration).

1. Stratum C of the Sample Forest has a total of 565 Mg C/ha. How many Mg CO2e per hectare, and how many Mg CO2e for the whole of Stratum C (120 ha)?
2. Satellite imagery shows 20 ha of Stratum C mangrove converted into aquaculture ponds. Assume an emission factor of 250 Mg C/ha (an invented number for practice). What is the emission in Mg C and Mg CO2e? State which is the activity data and which is the emission factor.
3. Calculate the Tier 1 estimate of soil carbon for each stratum of the Sample Forest using 386 Mg C/ha, then compare it with the measured soil stock (A 380, B 495, C 430 Mg C/ha). Which stratum misses the most, and in which direction?
4. A site (invented) has 80 ha of salt marsh and 50 ha of seagrass meadow, without field data. Calculate the Tier 1 estimate of soil carbon to 1 m in Mg C and Mg CO2e, then write the range if the Tier 1 error for soil of ±90% is applied to the total carbon.
5. Using the Sample Forest data, calculate the contribution of each pool (live trees, roots, dead trees and litter, soil) to the site stock of 331,620 Mg C, in percent. Which pool is under 5% and what does it mean for the measurement plan?

### Answer key

1. CO2e per hectare = 565 × 3.67 = 2,073.55 Mg CO2e/ha. For 120 ha: 2,073.55 × 120 = 248,826 Mg CO2e.
2. Activity data 20 ha; emission factor 250 Mg C/ha. Emission = 20 × 250 = 5,000 Mg C. CO2e = 5,000 × 3.67 = 18,350 Mg CO2e.
3. Tier 1: A 386 × 180 = 69,480; B 386 × 264 = 101,904; C 386 × 120 = 46,320 Mg C (total 217,704). Measured: A 380 × 180 = 68,400; B 495 × 264 = 130,680; C 430 × 120 = 51,600 Mg C (total 250,680). Tier 1 minus measurement: A +1,080 (1.6% higher), B −28,776 (22.0% lower), C −5,280 (10.2% lower). Stratum B misses the most and is too low; it is the largest and oldest stratum that makes the site total 32,976 Mg C short.
4. Salt marsh 255 × 80 = 20,400 Mg C; seagrass 108 × 50 = 5,400 Mg C; total 25,800 Mg C. CO2e = 25,800 × 3.67 = 94,686 Mg CO2e. Range of ±90% on total carbon: 25,800 × 0.1 = 2,580 to 25,800 × 1.9 = 49,020 Mg C. The width is almost 20-fold, so this number is only suitable as an initial estimate.
5. Per pool (sum of three strata): live trees 12,600 + 31,680 + 11,400 = 55,680 Mg C (16.8%); roots 4,500 + 10,560 + 3,600 = 18,660 (5.6%); dead trees and litter 1,440 + 3,960 + 1,200 = 6,600 (2.0%); soil 68,400 + 130,680 + 51,600 = 250,680 (75.6%). Total 331,620 Mg C. Dead trees and litter are below 5%, so by the significant-pool threshold (more than 5%) in Module 6 that pool counts as small; the decision on whether to still measure it is discussed in that module. Soil is the largest pool, so the accuracy of soil measurement matters most.

## Find the error

The two short reports below look reasonable but contain errors. Find the mistakes before opening the key.

**Report A.** "The carbon stock of the Sample Forest is 331,620 Mg C. In CO2 equivalent the figure is 331,620 ÷ 3.67 = 90,360 Mg CO2e."

**Report B.** "The Tier 1 estimate for the Sample Forest is 386 × 564 = 217,704 Mg C, while field measurement gives 331,620 Mg C. So field measurement overestimates the stock by 52%."

### Key

**Report A.** The factor 3.67 was divided when it should have been multiplied. The correct number: 331,620 × 3.67 = 1,217,045 Mg CO2e. How to detect it: CO2 (molecular weight 44) is heavier than carbon (12), so CO2 equivalent is always larger than the carbon itself. A result smaller than the carbon figure is certainly wrong.

**Report B.** There are two errors. First, the Tier 1 figure of 386 Mg C/ha covers only soil, while 331,620 Mg C covers all pools; the two are not comparable. The correct comparison is the Sample Forest soil stock, 250,680 Mg C, so the measurement is higher by 32,976 Mg C or 15.1% of the Tier 1 figure (and Tier 1 is 13.2% short of the measurement). Second, Tier 1 is the coarsest estimate with an error of up to ±90% for soil; the difference shows the limitation of Tier 1, not an overestimate by measurement. The 52% figure is itself correct arithmetically (331,620 ÷ 217,704 − 1) but not meaningful. How to detect it: first check whether both numbers cover the same pools and depth, and ask which Tier each number is.

## The role of AI and example prompts

AI is useful for drafting spreadsheet formulas, explaining terms, and checking calculation steps. AI must not be the source of numbers: every number and scientific claim must be matched against the books or against a hand calculation.

**Prompt 1: drafting Excel formulas.**

> I have an Excel sheet. Column A holds the stratum name (A, B, C), column B the area in hectares, column C the total carbon stock in Mg C per hectare, rows 2 to 4. Write formulas for: the stock of each stratum in Mg C (column D), the site stock total, the weighted mean Mg C per hectare, and CO2 equivalent with a factor of 3.67. Write the formulas with comma separators and say which cell each goes in.

Check: enter the Sample Forest data (180, 264, 120 ha; 483, 670, 565 Mg C/ha) and match the results with 86,940; 176,880; 67,800; total 331,620; mean 588 (587.98); and 1,217,045 Mg CO2e. Calculate one stratum with a calculator. If any number differs, check whether the weighted mean formula divides the stock total by the area total, rather than averaging the three per-hectare numbers (the wrong result is 572.7).

**Prompt 2: explaining terms.**

> Explain the difference between autochthonous and allochthonous carbon in mangrove soil in five simple sentences, with one example for each type.

Check: compare with section 1.1 and BC chapter 1. Make sure the explanation states the origin of the carbon (local or carried from elsewhere), and that in seagrass meadows about 50% of soil carbon comes from outside while in mangroves and salt marshes most comes from local plants. Percentages not found in the book are marked "unverified".

**Prompt 3: checking a calculation.**

> Check my calculation step by step and show any errors: 564 ha × 386 Mg C/ha = 217,704 Mg C. CO2 equivalent: 217,704 × 3.67.

Check: work it out yourself with a calculator (798,974 Mg CO2e) before reading the AI's answer, then compare. If the AI says there is an error while your calculation matches, ask the AI to write out each multiplication and check them one by one.

**Example of an AI answer that can be wrong.** Suppose the AI answers the question "explain the IPCC Tiers" as follows:

> Tier 1 uses detailed field inventory and is the most accurate. Tier 3 uses IPCC default numbers so it is the coarsest. Tier 2 is in the middle.

The error: the order of Tier 1 and Tier 3 is reversed. Tier 1 uses IPCC default numbers and is the coarsest; Tier 3 uses detailed inventory, repeated measurement, or modeling (BC chapter 1; KD 1.3.1.2). How to catch it: match it against the Tier table in section 1.2, and remember that default numbers cannot be more accurate than measurement at your own site. A fluent and confident answer does not guarantee correctness; pay attention to the terms and numbers that can be checked directly against the book.

## Excel notes: Mac and Windows

The following steps are used for the "Pools" sheet. Only basic functions are needed (SUM and arithmetic operators). In Indonesian-language Excel, function names and argument separators differ: SUM becomes JUMLAH, AVERAGE becomes RATA.RATA (RATA2 in older versions), and the argument separator is a semicolon rather than a comma. If a copied formula is rejected, check the separator and the function name first. In Google Sheets, the argument separator follows the sheet's language and region settings.

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Paste CSV data and split columns | Copy the csv block, paste in A1, select column A, Data > Text to Columns, choose Delimited, tick Comma | Same: Data > Text to Columns > Delimited > Comma | Paste in A1, then Data > Split text to columns |
| Multiply area and stock per ha | In a new cell type `=B2*C2` then Return, drag the fill handle down | Same, press Enter | Same, press Enter |
| Sum the stock | `=SUM(D2:D4)` (Indonesian: `=JUMLAH(D2:D4)`) | Same | `=SUM(D2:D4)` |
| Weighted mean | Divide the stock total by the area total, e.g. `=D5/B5` | Same | Same |
| Multiply by 3.67 | Put 3.67 in one cell (e.g. B8), formula `=D5*B8`; if the formula is copied down, type a dollar sign before the letter and number of that cell so it stays fixed | Same; or press F4 after selecting B8 inside the formula | Same; type the dollar sign directly |
| Thousands format | Select the cell, Home > Comma Style icon, or Format > Cells > Number and tick the thousands separator | Select the cell, Home > Comma Style, or Ctrl+1 > Number | Format > Number > Number |
| Percentage | Select the cell, Home > Percent Style icon | Home > Percent Style | Format > Number > Percent |
| Rename a sheet | Right-click (or Control+click) the sheet tab > Rename | Right-click the tab > Rename | Right-click the tab > Rename |

The decimal and thousands separators follow your computer's regional settings. In this English version of the materials, a point is the decimal and a comma is the thousands separator; with Indonesian settings your Excel will show the reverse.

## Weekly assignment

The assignment for this module is to fill in the "Pools" sheet in the workbook for the Sample Forest. This sheet is used again in Module 10 as the basis for the "Total" sheet. Working time is about 30 minutes.

Sheet contents: a table with rows for the four pools (live aboveground trees; roots; dead trees, downed dead wood, and litter; soil to 1 m) and columns for Stratum A, B, C in Mg C/ha, followed by columns for the site stock (Mg C) and percent of total. Add a total row, a CO2e equivalent row, and a small block containing the Tier 1 estimate (386 × 564) together with its difference from the measured soil stock.

Pass criteria:

- [ ] The table contains four pools for three strata with mean numbers exactly as in the canonical data (A: 70, 25, 8, 380; B: 120, 40, 15, 495; C: 95, 30, 10, 430), and the numbers are marked "illustration".
- [ ] The total per hectare of each stratum is calculated with a formula (483, 670, 565), not typed in.
- [ ] The stock of each stratum in Mg C is calculated as area × total per hectare (86,940; 176,880; 67,800), and the site total is 331,620 Mg C.
- [ ] The weighted mean of 588 Mg C/ha is calculated as the stock total divided by the area total (564 ha), not the simple mean of the three strata.
- [ ] CO2e equivalent is calculated with the factor 3.67 (1,217,045 Mg CO2e), and the factor used is written on the sheet.
- [ ] The percent column of each pool relative to the site total adds up to 100% (16.8; 5.6; 2.0; 75.6).
- [ ] The Tier 1 block contains 217,704 Mg C, 798,974 Mg CO2e, and the comparison with the soil stock of 250,680 Mg C (difference 32,976 Mg C), with one sentence explaining why the figure of 386 is not compared directly with 331,620.
- [ ] There is a source note: the world figures from BC Table 1.2 and the Sample Forest figures from the course's illustrative data; participants write down which carbon accumulation rate figure they use if they quote it (the Hogarth difference).

## 60-minute live session plan

The week 1 session covers Modules 1 and 2. Minutes 0 to 35 are for Module 1; minutes 35 to 60 are for Module 2.

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0–5 | Opening: participants name one blue carbon ecosystem and one carbon pool from memory | Whiteboard or chat |
| 5–15 | Q&A on exercises 1 to 3: discuss the answers that differ most, especially problem 3 (Tier 1 per stratum) | Exercise key, screen sharing |
| 15–25 | Find the error: participants in pairs look for the mistakes in Reports A and B before the key is opened | The two reports in this tab |
| 25–35 | Checking the "Pools" sheet: two participants show their sheets; all participants match the totals 331,620 and 588 | Participants' workbooks, assignment checklist |
| 35–60 | Module 2 (mangrove biology) and introduction to week 2 | See the Module 2 tab |

Sources: BC chapter 1 (Howard et al. 2014, Coastal Blue Carbon); KD chapter 1, sections 1.3 and 2.3, Table 8 (Kauffman and Donato 2012, CIFOR WP86); H chapter 12, section 12.4 (Hogarth 2015, 3rd edition). The Sample Forest data and examples labeled "illustration" or "invented number for practice" were created for this course and do not come from the books.

---
