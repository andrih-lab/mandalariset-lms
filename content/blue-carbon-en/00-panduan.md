# Guide

This page applies to all modules: how to use the materials and the Excel workbook, the rules for writing examples and citations, the canonical Sample Forest data, the list of Excel functions and shortcuts, how to work on the "find the error" problems, how to use AI, and an Indonesian–English glossary. Read it once in week 1, then come back to the sections you need when you work on assignments.

## 1. How to use the materials and the workbook

Every module follows a fixed order, so participants can guess where to find what they are looking for. The order is: aspect table, learning objectives, video plan, numbered content, self-study exercises, find-the-error problems, the role of AI, Excel notes, weekly assignment, and live session plan.

The study load is about three hours per week: about 60 minutes of video, about 60 minutes of exercises and assignment, and a 60-minute live session. The suggested working order:

1. Watch the week's videos and read the Content sections numbered the same as the videos.
2. Do the Self-study exercises without looking at the answer key. Compare your answers with the key, then mark the steps that differ.
3. Do the Find-the-error problems (see section 7).
4. Fill in the workbook sheet for that week. Write formulas in the cells; do not type in the results.
5. Check the weekly assignment against the checklist at the end of the module. The assignment passes when every item is ticked.
6. Attend the live session with your workbook already filled in, including any questions that are still unanswered.

Workbook rules:

- One Excel file (or Google Sheets file) is used throughout the course. A sheet is added each week (see section 4).
- Input numbers (area, mean, CI) go in their own cells and are referenced by formulas. Do not retype numbers inside formulas.
- Input cells get the same fill color on every sheet, for example light yellow, and result cells get a different color.
- Every number carries its unit in the column heading, for example "Mg C/ha".
- Save the file with a name that includes the date, for example `workbook_BlueCarbon_2026-10-06.xlsx`, and keep copies in two places.

## 2. Rules for writing examples and citations

Numbers in the materials are distinguished by origin, so participants know which ones may be quoted in a report and which are only for practice.

| Origin of the number | How to mark it | Example |
| --- | --- | --- |
| Made up for practice | The word "illustration" in parentheses or in the table title | "Stratum B stores 670 Mg C/ha (illustration)." |
| Taken from a book | Book name and location | "Tier 1 mangrove soil carbon 386 Mg C/ha (BC Table 1.2)." |
| Result of the participant's calculation | Described as a calculated result, with the steps | "Calculated result on the Total sheet: 331,620 Mg C." |
| From outside the three books | Write "outside the books" and give the source | "(outside the books: Ross et al. 2001)" |

How to cite the three source books:

| Abbreviation | Book | Example |
| --- | --- | --- |
| BC | Howard et al. (2014), Coastal Blue Carbon (guidebook) | BC chapter 1; BC Table 4.1 |
| KD | Kauffman and Donato (2012), CIFOR Working Paper 86 | KD Table 5; KD section on downed dead wood |
| H | Hogarth (2015), The Biology of Mangroves and Seagrasses, 3rd edition | H chapter 2 |

Rules that apply to all assignments:

- Put the citation right after the number or claim it supports, not at the end of the paragraph.
- When the three books differ in a number or unit, state which number you use and why. Known differences between books are listed in each module. Example: breast height 1.37 m (KD) versus 1.3 m (BC and H). Choose one, record it in the methods section, and use it consistently.
- Write results with units and round them to the coarsest number used. Rounding is done in the final step, not in the middle of a calculation.
- Write uncertainty as "mean ± half-width of the 95% confidence interval" and state the unit, for example "670 ± 73 Mg C/ha".
- In running text the decimal separator is a point (0.415) and the thousands separator is a comma (331,620). The original Indonesian materials use the reverse (0,415 and 331.620); inside Excel cells, follow your computer's settings.

## 3. Canonical Sample Forest data

The Sample Forest is a fictitious site of 564 ha used in all modules. All numbers in this section are illustrations. Do not change them in any module; if you change them in your workbook to experiment, save the result as a copy.

**Strata and area.** Area is taken from the official boundary and treated as having no uncertainty. The exception: Modules 10 and 12 discuss area uncertainty in a separate exercise using the book example 400,000 ± 30,000 ha.

| Stratum | Description | Area (ha) |
| --- | --- | --- |
| A | Pioneer seaward mangrove (Sonneratia, Avicennia) | 180 |
| B | Mature Rhizophora forest | 264 |
| C | Landward mangrove (Bruguiera, Ceriops) | 120 |
| Total |  | 564 |

**Stock per hectare per pool** (illustration). Each cell holds the mean ± half-width of the 95% confidence interval, in Mg C/ha.

| Pool | Stratum A | Stratum B | Stratum C |
| --- | --- | --- | --- |
| Live aboveground trees | 70 ± 12 | 120 ± 18 | 95 ± 14 |
| Roots | 25 ± 6 | 40 ± 8 | 30 ± 7 |
| Dead trees + downed dead wood + litter | 8 ± 4 | 15 ± 6 | 10 ± 5 |
| Soil to 1 m | 380 ± 58 | 495 ± 70 | 430 ± 62 |
| Total per ha | 483 ± 60 | 670 ± 73 | 565 ± 64 |

The total per hectare is the sum of the means of the four pools. Its uncertainty is the square root of the sum of squares of each pool's CI half-width, not a direct sum. Example for stratum B: the square root of 18² + 8² + 6² + 70² = 72.97, rounded to 73.

**Site total** (illustration). Stratum stock is stock per hectare times area. Stratum uncertainty is the CI per hectare (from the root-sum-of-squares of the pools, not yet rounded) times area.

| Stratum | Area (ha) | Stock (Mg C/ha) | Stratum stock (Mg C) | Stratum ± CI95 (Mg C) |
| --- | --- | --- | --- | --- |
| A | 180 | 483 | 86,940 | 10,740 |
| B | 264 | 670 | 176,880 | 19,263 |
| C | 120 | 565 | 67,800 | 7,697 |
| Site | 564 | 588 | 331,620 | 23,359 |

Site results:

- Total stock: 331,620 Mg C, with an uncertainty of ±23,359 Mg C (7.0%). The 95% confidence interval is roughly 308,261 to 354,979 Mg C.
- Weighted mean: 331,620 ÷ 564 = 588 Mg C/ha, with an uncertainty of ±41.4 Mg C/ha (23,359 ÷ 564).
- CO2e equivalent: 331,620 × 3.67 = 1,217,045 Mg CO2e.
- Breakdown by pool at the site level: soil 250,680 Mg C (75.6%), live aboveground trees 55,680 (16.8%), roots 18,660 (5.6%), dead trees + downed dead wood + litter 6,600 (2.0%).

A note on rounding. If stratum uncertainty is calculated from already-rounded numbers (±60, ±73, ±64 per ha), the result is 23,389 Mg C. The 30 Mg C difference (0.1%) is purely due to rounding. The number used in the course is 23,359. If your workbook gives 23,389, check whether you used the rounded CI, and write down which one you used.

The same data in a form that can be copied into Excel (illustration). One row per stratum and pool:

```csv
stratum,area_ha,pool,mean_MgC_ha,CI95_MgC_ha
A,180,live_tree,70,12
A,180,root,25,6
A,180,dead_litter,8,4
A,180,soil_1m,380,58
B,264,live_tree,120,18
B,264,root,40,8
B,264,dead_litter,15,6
B,264,soil_1m,495,70
C,120,live_tree,95,14
C,120,root,30,7
C,120,dead_litter,10,5
C,120,soil_1m,430,62
```

Three example data points used repeatedly across modules (illustrations unless stated otherwise): soil core B-07 = 495 Mg C/ha to 1 m; a sample tree of 20 cm diameter = biomass 346.5 kg and carbon 162.9 kg (general Asian equation, Komiyama et al. 2005, with wood density 0.87 g/cm³ and carbon fraction 0.47; Module 8); number of plots n = 36 becomes 40 plots with a 10% reserve (Module 6). Additional data (soil cores, trees in plots, pilot plots) appear in the tab of the module that uses them, titled "Sample Forest data: ...".

## 4. Structure of the Excel workbook

The workbook has seven sheets with fixed names, so that assignments and the final project can refer to each other. Sheets are added week by week.

| Sheet | Week | One-sentence content |
| --- | --- | --- |
| Pools | 1 | A table of the four carbon pools for the Sample Forest with their units and conversion factors. |
| Plot design | 3 | The calculation of the number of plots per stratum from the pilot standard deviation, plus a 10% reserve and a plot allocation table. |
| Soil | 4 | Soil carbon stock per core, per layer and per hectare, with compaction and carbonate corrections. |
| Vegetation | 5 | Tree biomass and carbon per plot and then per hectare, including roots and dead wood. |
| Total | 6 | Stock per hectare and per site with standard error, 95% confidence interval, and uncertainty propagation. |
| Emissions | 7 | Land-loss and stock-change scenarios converted into CO2e emissions. |
| Data/Notes | 1 to 8 | Raw data, assumptions, the factors used, which number was chosen when the books differ, and a change log. |

Layout rules: the first column holds labels, the first row holds column headings with units, one table per block with no merged cells, and every sheet draws its data from the Data/Notes sheet or an earlier sheet through cell references.

## 5. Excel functions used

The course uses only eight functions, all available in Excel for Mac, Excel for Windows, and Google Sheets. The Indonesian-name column applies to Excel with an Indonesian display language.

| Purpose | Excel (English) | Excel (Indonesian) | Google Sheets | Example |
| --- | --- | --- | --- | --- |
| Sum | SUM | JUMLAH | SUM | `=SUM(B2:B5)` |
| Mean | AVERAGE | RATA.RATA (older version: RATA2); check in the Insert Function box | AVERAGE | `=AVERAGE(B2:B9)` |
| Sample standard deviation | STDEV.S | STDEV.S; check in the Insert Function box | STDEV.S | `=STDEV.S(B2:B9)` |
| Square root | SQRT | AKAR | SQRT | `=SQRT(B2)` |
| Two-tailed t value (for CI95) | T.INV.2T | T.INV.2T; check in the Insert Function box | T.INV.2T | `=T.INV.2T(0.05,7)` gives 2.3646 |
| Round up | ROUNDUP | not listed; find it through Insert Function | ROUNDUP | `=ROUNDUP(B2,0)` |
| Sum of products of two columns | SUMPRODUCT | SUMPRODUCT; check in the Insert Function box | SUMPRODUCT | `=SUMPRODUCT(B2:B4,C2:C4)` |
| Conditional choice | IF | JIKA | IF | `=IF(B2>=0.1,"add plots","enough")` |

For names marked "check" or "not listed", do not guess. Click the fx button next to the formula bar (Insert Function), type the English name or what the function does in the search box, and Excel will show the name that applies on your computer. Another way: type `=` followed by the first letters of the function, and Excel offers a list of names.

**Comma or semicolon.** The argument separator follows your computer's regional settings, not just Excel's language. With Indonesian settings the argument separator is a semicolon and the decimal separator is a comma, so `=T.INV.2T(0.05,7)` is written `=T.INV.2T(0,05;7)`. With US English settings the argument separator is a comma and the decimal is a point. All formulas in the materials are written with commas and decimal points. If your Excel rejects a formula you copied, replace the commas with semicolons and the decimal points with commas. Google Sheets follows the locale setting of the file (File > Settings).

Example with Sample Forest data (illustration). If the areas of strata A, B, and C are in B2:B4 and their stock per hectare is in C2:C4, the formula `=SUMPRODUCT(B2:B4,C2:C4)` gives 331,620 Mg C, that is 180 × 483 + 264 × 670 + 120 × 565. For eight cores, the 95% two-tailed t value uses 7 degrees of freedom, so `=T.INV.2T(0.05,7)` gives 2.3646.

## 6. Keyboard shortcuts

This table lists only the basic shortcuts. Mac is written first. On laptop keyboards, the function keys (F1 to F12) may need the Fn key, and Ctrl+Space on Mac can clash with the keyboard language-switch setting in macOS. If it clashes, click the column letter.

| Step | Mac | Windows |
| --- | --- | --- |
| Fill down (copy the top cell into the selected cells) | Ctrl+D | Ctrl+D |
| Fill right | Ctrl+R | Ctrl+R |
| Make a cell reference absolute ($) | Cmd+T (on some versions F4 also works) | F4 |
| Enter cell edit mode | Ctrl+U | F2 |
| Select a column | Ctrl+Space | Ctrl+Space |
| Select a row | Shift+Space | Shift+Space |
| Select to the end of the data | Cmd+Shift+Arrow | Ctrl+Shift+Arrow |
| Copy, paste, undo | Cmd+C, Cmd+V, Cmd+Z | Ctrl+C, Ctrl+V, Ctrl+Z |
| Paste special (values only) | Ctrl+Cmd+V | Ctrl+Alt+V |
| New line within a cell | Ctrl+Option+Return | Alt+Enter |
| Show all formulas on the sheet | Ctrl+` | Ctrl+` |
| Save | Cmd+S | Ctrl+S |

The $ sign can also be typed directly: `$B$2` locks both column and row, `B$2` locks the row only, `$B2` locks the column only. This works on all devices and in Google Sheets.

## 7. How to work on "find the error" problems

These problems contain a calculation result or a short report that looks plausible but contains one or two errors typical of this field. The goal is to practice checking before numbers go into a report.

Steps:

1. Read the result and write your own rough estimate without a calculator. Example: roughly how many Mg C/ha of soil stock should one stratum have according to the Sample Forest (380 to 495)?
2. Check the unit of every number: g/cm³ or Mg/m³, kg/m² or Mg/ha, per plot or per hectare.
3. Check the origin of the factors: carbon content (0.39 to 0.50 depending on component), carbonate correction, compaction correction, dry or wet.
4. Check how things are combined: whether means and CIs are added directly or through the square root of the sum of squares; standard error or standard deviation.
5. Check ranges: trees outside the diameter range of the equation, too few plots, soil depth less than 1 m.
6. Recalculate one row by hand and compare it with the written number.
7. Write your answer in three parts: where the error is, the correct number (with the steps), and how to detect it earlier.

Compare your answer with the key when you are done. An answer that only says "something is wrong" without the correct number is considered incomplete.

## 8. Using AI for Excel and checking the results

AI may be used to draft Excel formulas, explain terms, and explain error messages. Participants remain responsible for the numbers in the report. The rules:

- AI drafts formulas or explains. AI does not decide which numbers go into the report.
- Every formula from AI is checked by recalculating **one row by hand** (calculator), then comparing it with the cell result and with the number in the book or in the Sample Forest.
- Before asking for a formula, state in the prompt: the cell locations, the units, and the argument separator of your Excel (comma or semicolon).
- Paste only illustration data or data you are allowed to share. Do not paste confidential site data.
- Record the prompts you used and the results of your checks on the Data/Notes sheet.
- If the AI result differs from the book, the book is used. Write down the difference.

Example prompt: "In cell D2 I have area (ha) and in E2 stock (Mg C/ha). Write an Excel formula for stratum stock in Mg C and the total of all strata in D5. The argument separator on my computer is a semicolon." Check: calculate 180 × 483 = 86,940 with a calculator, then match it with the cell.

## 9. Indonesian–English glossary

| Indonesian | English | Short meaning |
| --- | --- | --- |
| Stok karbon | Carbon stock | Mass of carbon stored at one time, Mg C or Mg C/ha |
| Tampungan karbon | Carbon pool | A part of the ecosystem that stores carbon: trees, roots, dead wood and litter, soil |
| Biomassa di atas tanah | Aboveground biomass | Dry mass of living plants above the ground |
| Biomassa di bawah tanah | Belowground biomass | Dry mass of roots |
| Serasah | Litter | Leaves, twigs, and dead plant material on the soil surface |
| Kayu mati rebah | Downed dead wood | Dead wood lying on the ground |
| Pohon mati berdiri | Standing dead tree | A dead tree that is still upright |
| Persamaan alometrik | Allometric equation | An equation that estimates biomass from tree size, for example diameter |
| Kerapatan kayu | Wood density | Dry weight of wood divided by fresh volume, g/cm³ |
| Bobot isi | Bulk density | Dry weight of soil divided by sample volume, g/cm³ |
| Pemampatan inti | Core compaction | The soil core is shorter inside the tube than in the original soil |
| Hilang pijar | Loss on ignition (LOI) | Weight lost when a sample is heated, used to estimate organic matter |
| Karbon organik | Organic carbon | Carbon from organic matter; carbonate carbon is corrected separately |
| Karbon anorganik (karbonat) | Inorganic carbon (carbonate) | Carbon from lime or shells, not from soil organic matter |
| Strata, stratifikasi | Strata, stratification | Dividing the site into more uniform parts |
| Plot contoh | Sample plot | The plot where measurements are made |
| Rata-rata | Mean | Sum of values divided by the number of data points |
| Simpangan baku | Standard deviation | Spread of the data around the mean |
| Galat baku | Standard error | Standard deviation divided by the square root of the number of data points; spread of the mean |
| Selang kepercayaan 95% | 95% confidence interval | Range of mean ± t × standard error |
| Ketidakpastian | Uncertainty | Half-width of the CI, often expressed as a percentage of the mean |
| Data aktivitas | Activity data | The magnitude of an activity, for example forest area lost (ha) |
| Faktor emisi | Emission factor | Emissions per unit of activity data, for example Mg CO2e/ha |
| Setara CO2 | CO2 equivalent (CO2e) | Carbon multiplied by 3.67 to give the mass of CO2 |
| Tier 1 | Tier 1 | Calculation level using default global values rather than field data |
| Pengukuran, pelaporan, verifikasi | Measurement, reporting, verification (MRV) | A chain of monitoring emissions and stocks that others can check |
| Penurunan tanah dangkal | Shallow subsidence | Lowering of the soil surface due to compaction of the upper layers |
| Penginderaan jauh | Remote sensing | Measurement from satellites or aircraft without direct contact |

Sources: BC (Howard et al. 2014), KD (Kauffman and Donato 2012), H (Hogarth 2015); Excel terms and functions follow the Excel and Google Sheets documentation.

---
