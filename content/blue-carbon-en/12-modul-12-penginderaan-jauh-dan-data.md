# Module 12. Remote sensing and data

This module covers two things: what satellite imagery can offer a carbon inventory (an optional part, BC chapter 6) and how to manage project data so that measurement results can be checked, compared, and reused (a required part, BC chapter 7). Participants do not write remote sensing code. The practice is entirely in Excel or Google Sheets: workbook structure, file naming, versions, metadata, backups, and field notes, culminating in a project data management checklist.

| Aspect | Details |
| --- | --- |
| Week | 7 (together with Module 11) |
| Video | 2 videos, 22 minutes in total: 12.1 (10 minutes, optional) and 12.2 (12 minutes, required) |
| Self-study exercises and assignment | about 25 minutes for the Module 12 part |
| Live session | 60 minutes (plan below) |
| Prerequisites | Module 10 (uncertainty and its combination); basic Excel or Google Sheets |
| Tools | Excel (Mac or Windows) or Google Sheets, a calculator |
| Output of the week | A project data management checklist (the "Data" sheet in the workbook) |
| Optional part | Video 12.1 and exercise 1. Participants who do not have an imagery-based project may skip it without affecting their pass |

## Learning objectives

After this module, participants are able to:

- name four uses of remote sensing in blue carbon work and distinguish passive from active sensors;
- match free data (Landsat, MODIS, SRTM, ALOS PALSAR, ICESat/GLAS) with their uses;
- calculate the uncertainty of site stock from area uncertainty and stock-per-hectare uncertainty, and say which component is more decisive;
- build the structure of a carbon project Excel workbook with separate raw data, reference, and results sheets;
- create file naming rules and version notes, and write metadata for a dataset;
- prepare a data management checklist for their own project, from the field data sheet to storage in an open database.

## Video plan

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 12.1 | Remote sensing for blue carbon (optional) | 10 | Four uses; passive and active sensors; spatial resolution; Landsat, MODIS, SRTM, PALSAR, ICESat; field checks; an example of area uncertainty from imagery and its effect on site stock |
| 12.2 | Managing project data (required) | 12 | BC chapter 7 recommendations; workbook structure; file naming and versions; metadata; field notes; backups; an Excel cross-check example; preparing the checklist |

## Content

### 12.1 Remote sensing for blue carbon (optional)

Remote sensing is used in four tasks: determining ecosystem area, helping divide strata and place plots, estimating biomass, and monitoring land-use change and carbon stock (BC chapter 6). The guidebook recommends involving a remote sensing expert in this work. The aim of this section is not to train participants to process imagery, but to make participants understand enough to convey their needs to that expert and judge the results.

**Passive and active sensors.** Passive sensors (optical and thermal) record reflected sunlight and heat emitted by the Earth's surface. The results look like photographs and are easy to interpret, but they need sunlight and are blocked by cloud, and in the tropics cloud is almost always present. Active sensors (radar and lidar) emit their own waves and then measure the reflection. These sensors do not depend on weather or daylight and can penetrate cloud and canopy, but are more expensive and their analysis is harder.

**Spatial resolution** is the side length of one pixel on the Earth's surface. The smaller the pixel, the more detailed the image. According to BC chapter 6, free 30 m imagery is generally adequate for mapping blue carbon ecosystems.

| Data | Features | Main use |
| --- | --- | --- |
| Landsat | Passive; available since 1972; 30 m optical imagery | Mapping and monitoring tidal wetlands; vegetation indices and biomass maps |
| MODIS | Passive; 250 m, 500 m, and 1 km; whole Earth every 1-2 days | Monitoring change, because the data are almost daily since 2000 |
| SRTM | Radar, flown February 2000; about 90 m, worldwide | Elevation map; mangrove canopy height can be estimated with an accuracy of 2-4 m, then biomass calculated |
| ALOS PALSAR | L-band radar; best resolution about 12 m | Vegetation structure and coastal deforestation; cloud-free, day and night |
| ICESat/GLAS | Satellite lidar, 2003-2009 | Canopy height with an accuracy of a few metres |

Three notes from BC chapter 6. First, vegetation density is estimated with a vegetation index. NDVI is the best known, but its value no longer rises at medium to dense vegetation so very dense forest is underestimated. EVI does not have that weakness but uses the blue band, which is easily disturbed by the atmosphere. EVI2 does not use the blue band and is considered better suited to coastal ecosystems. Second, seagrass is the hardest to map because turbid water, sun glint, and epiphytes on the leaves weaken its reflectance; mapping needs a combination of imagery, aerial photographs, local knowledge, and field observation. Third, image interpretation results are always checked in the field. Ideally one check plot as large as one image pixel; a remote sensing project realistically takes 10 to 32 weeks.

**Worked example: area uncertainty and its effect on site stock.** Area from imagery carries its own uncertainty. Site stock is the product of area and stock per hectare, so what is combined is their relative uncertainty (Module 10; KD):

```latex
CI_{site} = A \times S \times \sqrt{\left(\frac{CI_A}{A}\right)^2 + \left(\frac{CI_S}{S}\right)^2}
```

A is area (ha), S is stock per hectare (Mg C/ha), CI is the half-width of the 95% confidence interval.

Example from the book (BC chapters 6 and 7, also used in Module 10): mangrove area 400,000 ± 30,000 ha, stock 300 ± 30 Mg C/ha.

1. Site stock = 400,000 × 300 = 120,000,000 Mg C.
2. Relative area uncertainty = 30,000 ÷ 400,000 = 0.075; stock = 30 ÷ 300 = 0.10.
3. Combined = root(0.075² + 0.10²) = 0.125 (12.5%).
4. Interval half-width = 120,000,000 × 0.125 = 15,000,000 Mg C.
5. Result: 120 million ± 15 million Mg C. If the uncertainties are added directly (9 million + 12 million = 21 million), the result is exaggerated.
6. The area part contributes 0.075² ÷ 0.125² = 36% of the combined variance; the stock-per-hectare part 64%.

Application to the Sample Forest (illustration). So far the area of 564 ha has been treated as certain because it was taken from the official boundary. If that area came from imagery with a relative uncertainty of 7.5% (illustration, the same as the book example), the half-width of the area interval is 564 × 0.075 = 42.3 ha. The site stock of 331,620 ± 23,359 Mg C means a relative uncertainty of 23,359 ÷ 331,620 = 0.0704.

| Situation | Combined relative uncertainty | Interval half-width (Mg C) | Equivalent (Mg CO2e) |
| --- | --- | --- | --- |
| Area treated as certain | 7.04% | ± 23,359 | ± 85,728 |
| Area ± 7.5% (imagery) | root(0.075² + 0.0704²) = 10.29% | ± 34,121 | ± 125,224 |
| Area ± 3.75% (better imagery) | 7.98% | ± 26,463 | ± 97,119 |

Conversion to CO2e uses the factor 3.67 (Modules 1 and 11). With area ± 7.5%, site uncertainty rises from 7.0% to 10.3%, and 53% of the variance comes from area. Halving the area uncertainty (to 3.75%) brings the uncertainty back to 8.0%. That is why field checking of the area map is worth budgeting for, equivalent to adding soil cores.

### 12.2 Managing project data (required)

BC chapter 7 states that existing coastal carbon data are often hard to compare because each researcher uses different parameters, units, and recording methods. Its recommendations: every dataset comes with metadata (place, time, tools, methods, and who measured); data sheets are prepared before going to the field and one person per team is assigned as recorder; data are recorded immediately after measurement, for example soil core length when the core is lifted; photographs are taken from fixed points (in mangroves in four compass directions from the plot centre; in seagrass and salt marsh from the top down); data are checked each evening, matched again after being entered on the computer, and backed up; finally the data are published or stored in an open database.

The book does not regulate how to organize Excel files. The workbook structure, file naming, and three-copy backup rule below are outside the book; all are working suggestions, not requirements.

**Workbook structure (outside the book).** Separate raw data, reference tables, and calculation results:

| Sheet | Content | Rule |
| --- | --- | --- |
| Read_me | Project title, person responsible, version, date, list of sheets, reference numbers used | Filled in first and updated with each version |
| Raw_data | One row per measurement (plot, date, recorder, value, unit) | Not edited after being matched; corrections are noted on the Log sheet |
| Reference | Stratum areas, conversion factors, allometric equations, canonical numbers with their book references | One source of numbers; calculation sheets refer here |
| Calc | Formulas only, with no retyped numbers | Every result cell contains a formula |
| Results | Tables and charts for the report | Only copies from Calc |
| Log | Date, who, what was changed, why | Added to, never deleted |

**File naming and versions (outside the book).** Use the same pattern for all files, readable in order, with no spaces and no word "final":

```
project_type_content_date_version.extension
SampleForest_soil_core-B07_2026-10-06_v02.xlsx
```

The date is written year-month-day so alphabetical order equals chronological order. The version rises by one with each meaningful change, and the reason is written on the Log sheet.

**Metadata.** Write metadata on the Read_me sheet or in a separate text file with the five elements from the book: place (site name, plot coordinates, coordinate system), time (date and hour of measurement), tools (type and serial number, calibration date if any), method (protocol reference, for example KD or BC chapter 3), and who measured. Add the definition of each column and its unit (for example soil carbon in Mg C/ha to 1 m) and the numbers chosen where the books differ, per the differences between books in Module 10.

**Field notes.** Prepare the data sheet before departure with the same columns as the Raw_data sheet, so that moving it to the computer is just copying. Print it or keep it on a tablet, but still bring a paper copy. Record values at the time of measurement, not from memory. Photos of the plot centre are named by plot code and direction (for example B07_north.jpg).

**Backups (outside the book).** Keep three copies: one on the working computer, one on other storage (an external drive), one on an online service. Backups are made every evening in the field, and before each structural change to the workbook.

Worked example: cross-check. The evening check and the matching after entry can be done with simple calculations. The Sample Forest Reference sheet (illustration) contains the area and stock of each stratum:

```csv
stratum,area_ha,stock_MgC_per_ha
A,180,483
B,264,670
C,120,565
```

1. Sum of areas = 180 + 264 + 120 = 564 ha, equal to the official area of 564 ha. Pass.
2. Site stock recalculated = 180 × 483 + 264 × 670 + 120 × 565 = 86,940 + 176,880 + 67,800 = 331,620 Mg C, equal to the report figure. Pass.
3. Suppose at entry the area of stratum B was written as 246 (digits swapped). The sum of areas becomes 546 ha, not equal to 564, so the error is detected before use. Without this check, the stock becomes 319,560 Mg C, a difference of 12,060 Mg C (3.6%) from the correct value.

That check is made a fixed cell on the Calc sheet: the difference between the sum of areas and the official area, which must be zero.

## Self-study exercises

Problems 1 and 2 are optional (following video 12.1). Problems 3 to 5 are required. All Sample Forest numbers are illustrations.

1. (Optional) Mangrove area 400,000 ± 20,000 ha and stock 300 ± 30 Mg C/ha. Calculate the site stock and the 95% interval half-width.
2. (Optional) In the Sample Forest, the 564 ha area is mapped from imagery with a relative uncertainty of 5%. Site stock 331,620 ± 23,359 Mg C. Calculate the combined interval half-width (Mg C and Mg CO2e) and the part of the variance that comes from area.
3. Your Sample Forest Reference sheet contains areas A = 180, B = 264, C = 12 ha (the C number is incomplete) with stock per hectare of 483, 670, 565 Mg C/ha. Calculate the sum of areas, the site stock, and their difference from the correct figure. What should have given a warning?
4. The file name "data_final_FINAL2 (copy).xlsx" was created on 6 October 2026 for soil core B-07 of the Sample Forest, third version. Rewrite it following the pattern in section 12.2 and name two problems with the old name.
5. Write metadata for one row of data: soil core B-07, stratum B, soil carbon 495 Mg C/ha to 1 m. Use the five elements from BC chapter 7 and write the reference numbers you choose where the books differ. Coordinates and tool name may be filled in with the note "illustration".

### Answer key

1. Stock = 400,000 × 300 = 120,000,000 Mg C. Relative area = 20,000 ÷ 400,000 = 0.05; stock = 0.10. Combined = root(0.05² + 0.10²) = 0.1118. Interval half-width = 120,000,000 × 0.1118 = 13,416,408, rounded 13.4 million Mg C. Result: 120 million ± 13.4 million Mg C. Added directly the result is 18 million, too large.
2. Relative stock = 23,359 ÷ 331,620 = 0.0704. Combined = root(0.05² + 0.0704²) = 0.0864. Interval half-width = 331,620 × 0.0864 = 28,646 Mg C (± 8.6%), or 28,646 × 3.67 = 105,129 Mg CO2e. The area part = 0.05² ÷ 0.0864² = 33.5% of the variance.
3. Sum of areas = 180 + 264 + 12 = 456 ha, not 564 (short by 108 ha). Stock = 86,940 + 176,880 + 6,780 = 270,600 Mg C, short by 61,020 Mg C (18.4%) of 331,620. The warning: the sum of areas does not equal the official area of 564 ha. Probably the C number should have been 120.
4. SampleForest_soil_core-B07_2026-10-06_v03.xlsx. Problems with the old name: the words "final" and "FINAL2" do not show version or order, and there is no date, site, or content; "(copy)" and the space do not explain what differs from the original file.
5. Example entry: place = Sample Forest, stratum B, core B-07, coordinates and coordinate system (illustration); time = date and hour the core was taken (illustration); tool = corer and serial number (illustration); method = soil core sampling protocol (KD or BC chapter 3); who measured = recorder's name. Unit and depth: Mg C/ha to 1 m. Reference number: CO2e factor = 3.67 (KD and BC), state it if a number from another book differs.

## Find the error

**Report A (area uncertainty).** "Mangrove area from Landsat imagery 400,000 ± 30,000 ha and stock 300 ± 30 Mg C/ha. Area uncertainty = 30,000 × 300 = 9,000,000 Mg C. Stock uncertainty = 400,000 × 30 = 12,000,000 Mg C. Total uncertainty = 9,000,000 + 12,000,000 = 21,000,000 Mg C. Result: 120 million ± 21 million Mg C."

**Report B (Sample Forest mapping).** "The Sample Forest area was mapped from 250 m MODIS. Free imagery of any resolution, however coarse, is adequate, and because the imagery results are already uniform, field checking is not needed. Area 564 ha, uncertainty 0."

### Key

**Report A.** The error: uncertainties from two sources were added directly. For multiplication, relative uncertainties are combined with the square root of the sum of squares: root(0.075² + 0.10²) = 0.125, so the interval half-width is 120,000,000 × 0.125 = 15,000,000 Mg C, not 21 million. Detection: the combination of two independent sources is never larger than their direct sum, and a result 40% larger (21 ÷ 15) deserves suspicion; check whether the formula uses the square root of the sum of squares.

**Report B.** There are three problems. First, MODIS 250 m is used for monitoring change, not for mapping small stands; one 250 m × 250 m pixel = 6.25 ha, so 564 ha is only about 90 pixels, with many mixed pixels at the edges. BC chapter 6 states that 30 m imagery (Landsat) is generally adequate; one Landsat pixel is 0.09 ha. Second, the claim that any resolution is adequate contradicts the book. Third, imagery results must be checked in the field, and area from imagery has uncertainty, not 0. Detection: ask about spatial resolution, the number of pixels inside the site, and the date of field checking.

## The role of AI and example prompts

AI is useful for drafting Excel formulas, designing sheet structure, and explaining terms, but participants still check the results with hand calculation and the numbers in the book.

**Prompt 1 (workbook structure).** "I manage mangrove carbon inventory data with three strata (A, B, C). Propose an Excel sheet structure that separates raw data, reference tables, calculation, and results, with columns for a raw data table of one row per measurement." Check: match with the structure table in 12.2; make sure there are unit, date, and recorder columns; make sure no numbers are retyped on the Calc sheet.

**Prompt 2 (uncertainty formula).** "In Excel, A2 is area (ha), B2 the half-width of the area interval, C2 stock per hectare, D2 the half-width of the stock interval. Write a formula for the half-width of site stock combining the relative uncertainty of area and stock." Check: fill in 400,000; 30,000; 300; 30 and compare the result with the book's 15,000,000. If different, the formula is wrong.

**Prompt 3 (terms).** "Explain the difference between passive and active sensors and name one advantage of each for mapping mangroves in the tropics." Check: match with the table in 12.1 (passive blocked by cloud; active penetrates cloud but is more expensive).

**Example of an AI answer that can be wrong.** For prompt 2, the AI may answer: `=A2*C2*(B2/A2+D2/C2)` and explain that the relative uncertainties of area and stock are added. Calculating by hand: A2*C2 = 120,000,000; B2/A2 + D2/C2 = 0.075 + 0.10 = 0.175; the result is 21,000,000. The book figure is 15,000,000, so that formula is wrong. The correct formula combines with the square root of the sum of squares: `=A2*C2*SQRT((B2/A2)^2+(D2/C2)^2)`. The error pattern is the same as Report A: two uncertainties added directly.

## Excel notes: Mac and Windows

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Sum stratum areas | `=SUM(B2:B4)` | `=SUM(B2:B4)` | `=SUM(B2:B4)` |
| Difference of area from the official area (must be 0) | `=SUM(B2:B4)-B6` | `=SUM(B2:B4)-B6` | `=SUM(B2:B4)-B6` |
| Automatic warning if they do not match | `=IF(ABS(SUM(B2:B4)-B6)>0,"CHECK","OK")` (comma or semicolon separator depending on settings) | same | `=IF(ABS(SUM(B2:B4)-B6)>0,"CHECK","OK")` |
| Combined area and stock uncertainty | `=A2*C2*SQRT((B2/A2)^2+(D2/C2)^2)` | same | same |
| Round the result | `=ROUND(E2,0)` | `=ROUND(E2,0)` | `=ROUND(E2,0)` |
| Turn data into a table | Insert > Table | Insert > Table | Format > Convert to table |
| Freeze the header row | View > Freeze Panes > Freeze Top Row | View > Freeze Panes > Freeze Top Row | View > Freeze > 1 row |
| Restrict entries (list of strata A, B, C) | Data > Data Validation | Data > Data Validation | Data > Data validation |
| Protect the raw data sheet | Review > Protect Sheet | Review > Protect Sheet | Data > Protect sheets and ranges |
| Save a versioned copy | File > Save a Copy (or Save As), then change v02 to v03 | File > Save As, then change v02 to v03 | File > Make a copy |
| View version history | File > Browse Version History (file on OneDrive or SharePoint) | File > Info > Version History (file on OneDrive or SharePoint) | File > Version history > See version history |
| Save data to share as CSV | File > Save As > CSV UTF-8 (Comma delimited) | File > Save As > CSV UTF-8 (Comma delimited) | File > Download > Comma-separated values (.csv) |

A note on language and regional settings. In Indonesian-language Excel, function names differ (SUM becomes JUMLAH, SQRT becomes AKAR, IF becomes JIKA, ROUND becomes BULATKAN; ABS stays) and the argument separator is usually a semicolon. Indonesian regional settings also use a comma as the decimal separator, so 0.075 is typed with a comma, and CSV files may use a semicolon as the column separator. Check by opening the CSV file in a text editor before sharing it. The menus and version history feature depend on the Excel version and where the file is stored.

## Weekly assignment

The task: build a data management checklist for your project (a real project or the Sample Forest) on the "Data" sheet in the workbook, then apply it to one sample file. Fill in the list with columns: item, stage (before field, in the field, after field, storage), person responsible, evidence (file name or cell), status (yes, not yet).

Required and optional parts:

- Required: items 1 to 8 below.
- Optional (for those using imagery): items 9 and 10.

Pass criteria:

- [ ] The workbook has the sheets Read_me, Raw_data, Reference, Calc, Results, and Log, and each sheet is annotated with its contents.
- [ ] The Raw_data sheet is in one-row-per-measurement format, with columns for date, plot or core code, recorder, value, and unit; no merged cells.
- [ ] The file naming pattern is written on the Read_me sheet, and three sample files follow it (including the year-month-day date and version number).
- [ ] The metadata for one dataset contains the five elements from BC chapter 7: place, time, tools, method, and who measured, plus column definitions and units.
- [ ] The Calc sheet contains at least one cross-check in the form of a cell showing OK or CHECK (for example the sum of stratum areas against the official area of 564 ha).
- [ ] The checklist covers data sheets prepared before the field, a dedicated recorder, recording at the time of measurement, photos from fixed points, the evening check, and matching after entry.
- [ ] The backup plan names three copies, where they are stored, and when they are made.
- [ ] A plan for storing or publishing data in an open database is written, or the reason the data cannot be opened is noted.
- [ ] (Optional) The checklist records the imagery source, spatial resolution, image date, and field check plan.
- [ ] (Optional) Area uncertainty from imagery is included in the site stock calculation with the combined formula, and the result is reported with the interval half-width.

Description of the recommended checklist items:

| Stage | Items |
| --- | --- |
| Before the field | Data sheet ready and its columns the same as Raw_data; recorder of each team assigned; file naming pattern and plot codes agreed; workbook and initial metadata created |
| In the field | Values recorded at the time of measurement (for example core length when the core is lifted); photos from fixed points, four compass directions in mangroves; data checked every evening and backed up |
| After the field | Entry into Excel, matching against the data sheet, cross-check on the Calc sheet, version note on the Log sheet |
| Storage | Three copies; complete metadata; chosen reference numbers recorded; data submitted to an open database where possible |

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0-5 | Opening and questions from the videos | This module's tab |
| 5-20 | Q&A on the Emissions sheet (Module 11) | Participants' Emissions sheets |
| 20-30 | Brief discussion of remote sensing and area uncertainty; optional participants show the results of problem 1 or 2 | Free data table, problems 1-2 |
| 30-40 | Pair work: swap workbooks, find errors in a deliberately altered cross-check cell (for example stratum B area changed to 246) | Sample file from problem 3 |
| 40-55 | Participants build the data management checklist on the Data sheet and review each other with the pass criteria | Checklist, pass criteria |
| 55-60 | Summary and assignment | Assignment checklist |

Sources: BC (Coastal Blue Carbon) chapters 6 and 7; KD (Kauffman and Donato, CIFOR WP86) for uncertainty combination; the Sample Forest calculations are illustrations. The workbook structure, file naming, and three-copy backup are outside the book.

---
