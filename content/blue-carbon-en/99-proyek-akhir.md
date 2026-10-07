# Final project

The final project is a carbon stock report for one mangrove site together with its re-measurement monitoring plan. The project is worked on in stages from week 3 to week 8 using the same workbook as the weekly assignments, and is submitted in week 8. The overall assessment weighting: weekly assignments 40% and final project 60%. The course pass requirement remains as in the Curriculum tab (proposal): six of the seven weekly assignments pass and the final project meets the rubric below.

## 1. Project overview

The project has three outputs: (a) a carbon stock report for one site, with stock per pool per stratum and the site total with a 95% confidence interval; (b) a re-measurement monitoring plan; (c) an Excel workbook whose formulas can be traced. A 10-minute presentation is given in the week 8 live session.

**Choice of data.** There are two tracks, and both are assessed with the same rubric.

- **Track 1, Sample Forest data.** Uses the canonical data in the Guide tab (564 ha, three strata). Suitable for participants who do not yet have field data. Differences between participants lie in plot design, assumptions, presentation, and the monitoring plan, not in the stock numbers.
- **Track 2, own data.** Uses real site data owned by the participant or data the owner has permitted to be used.

Requirements for own data:

1. The site boundary and area are known, and the area of each stratum can be written in hectares.
2. At least two strata, with at least three vegetation plots and three soil cores per stratum, so that the standard error and CI can be calculated.
3. All four pools are available: live aboveground trees, roots, dead trees + downed dead wood + litter, and soil. If one pool was not measured, the participant uses Track 1 or fills that pool with Sample Forest values and writes it as an assumption.
4. Soil was measured at least to 1 m or to the base layer, and its depth is recorded (BC chapter 3).
5. Permission from the data owner is available, and confidential data are given pseudonyms.
6. The data and methods exist before week 4. Data that do not yet exist at that time are replaced with the Sample Forest.

If in doubt about whether your own data are suitable, bring it to the week 3 live session.

## 2. Weekly stages, weeks 3 to 8

Each week produces one part of the project and one workbook sheet. Evidence is submitted at the place set by the organizer at the end of that week, with file names following section 4.

| Week | Activity | Workbook sheet | Evidence submitted |
| --- | --- | --- | --- |
| 3 | Choose the data track. Write the proposal (section 3). Calculate the number of plots per stratum with a 10% reserve (Module 6). | Plot design | A 1 to 2 page proposal (PDF) and the Plot design sheet |
| 4 | Calculate soil carbon stock per core, per layer, per hectare, per stratum (Module 7). Write the Methods and soil Results section. | Soil | The Soil sheet and a draft of the soil section (half to one page) |
| 5 | Calculate biomass and carbon of trees, roots, dead wood, and litter per plot then per hectare (Module 8). Write the Methods and vegetation Results section. | Vegetation | The Vegetation sheet and a draft of the vegetation section |
| 6 | Combine all pools: stock per hectare per stratum, site total, standard error, CI95 (Module 10). Prepare the mandatory report tables. | Total | The Total sheet and mandatory tables 1 to 3 |
| 7 | Calculate the land-loss scenario and CO2e emissions (Module 11). Write the re-measurement monitoring plan and data checklist (Module 12). Prepare a full draft report. | Emissions | The Emissions sheet, monitoring plan, and draft report |
| 8 | Revise the draft according to feedback. Prepare the 10-minute presentation. Check the submission checklist (section 8). Submit. | All sheets | Final report (PDF), workbook, presentation, and checklist |

Weekly assignments are still done as usual. The project sheet and the weekly assignment sheet are the same sheet, so work is not duplicated.

## 3. Proposal template

The proposal is a one to two page work plan. Copy the following framework and fill in the parts marked with square brackets.

```markdown
# [Title: carbon stock + site name, e.g. "Mangrove Carbon Stock of the Sample Forest"]

Name: [participant name]   Date: [date]   Data track: [Sample Forest / own data]

## 1. Objectives
[One sentence general objective. Two to three specific objectives, e.g. estimate carbon stock per pool per stratum, calculate the site total with CI95, prepare a re-measurement monitoring plan.]

## 2. Site boundary
[Site name, total area (ha), source of the boundary, how the area was calculated. State that area is treated as having no uncertainty, or give its uncertainty.]

## 3. Strata
| Stratum | Description | Area (ha) | Basis of division |
| --- | --- | --- | --- |
| [A] | [] | [] | [] |

## 4. Plot design
[Plot shape and size, number of plots per stratum from calculation (n = (t x s / E)^2), 10% reserve, number of soil cores per plot, how plots are placed, pools measured.]

## 5. Schedule
[Weeks 3 to 8 in one table, or the field schedule if using own data.]

## 6. Team
| Name | Role | Tasks |
| --- | --- | --- |
| [] | [] | [] |

## 7. Rough budget
| Item | Quantity | Unit | Price (Rp) | Total (Rp) |
| --- | --- | --- | --- | --- |
| [Field transport] | [] | [] | [] | [] |
| [Equipment and supplies: coring tube, scale, sample bags] | [] | [] | [] | [] |
| [Laboratory analysis: dry weight, LOI or carbon] | [] | [] | [] | [] |
| [Field team fees] | [] | [] | [] | [] |
| [10% reserve] | [] | [] | [] | [] |

## 8. Initial assumptions and risks
[Factors to be used, book numbers chosen where books differ, things that could delay the work.]
```

In Track 1 (Sample Forest), the budget section is filled in as an estimate if the activity were carried out in the field, and labeled "illustration".

## 4. Folder structure and file naming

One folder per participant, with numbered subfolders so their order stays fixed. File names contain the name, part, and version; the date is written in year-month-day format.

```text
BlueCarbon_Project_[Surname]/
  01_proposal/
    Proposal_[Surname]_v1.pdf
  02_raw_data/
    soil_cores_[site]_[date].csv
    vegetation_plots_[site]_[date].csv
    README_data.txt          (source, date taken, who measured, units)
  03_workbook/
    Workbook_[Surname]_v3_2026-11-20.xlsx
  04_report/
    Report_[Surname]_draft2.docx
    Report_[Surname]_FINAL.pdf
  05_presentation/
    Presentation_[Surname]_FINAL.pdf
  06_references/
    (copies of papers or book tables referenced, named BC_ch3.pdf etc.)
  07_AI_notes/
    prompts_and_checks.txt
```

Naming rules: no spaces (use underscores), lower case for raw data, the version number rises with every major change, and there is only one "FINAL" file. Raw data are not edited; corrections are made in the workbook and noted on the Data/Notes sheet.

## 5. Report framework

The final report is about 8 to 12 pages excluding appendices. Chapters and their minimum content:

| Chapter | Minimum content |
| --- | --- |
| 1. Summary | Main result in one paragraph: site total stock with CI95, mean per hectare, largest pool, most important limitation. |
| 2. Objectives and site | Objectives, site boundary, area, strata with the basis of division. |
| 3. Methods | Plot design and number, how each pool is measured, equations and factors used, how standard error, CI95, and uncertainty combination are calculated. |
| 4. Results | Mandatory tables 1 to 3 and one paragraph reading each table. |
| 5. Assumptions and factors | Mandatory table 4, including the book numbers chosen where books differ. |
| 6. Limitations | Things that could make the numbers miss: number of plots, soil depth, equations outside the diameter range, area treated as certain, pilot data. |
| 7. Re-measurement monitoring plan | Pools re-measured, time interval, permanent plots, target precision, how two times are compared, estimated cost. |
| 8. References and appendices | References per section 2 of the Guide tab; appendices contain per-plot data and workbook excerpts. |

Mandatory tables:

1. **Table 1, stock per hectare per pool per stratum** (mean ± half-width of CI95, Mg C/ha), including the total per hectare row.
2. **Table 2, stock per pool per stratum in Mg C**, that is Table 1 times stratum area.
3. **Table 3, site total with CI95**: stratum stock, stratum uncertainty, site total, site uncertainty (square root of the sum of squares), percent uncertainty, mean per hectare, and CO2e equivalent.
4. **Table 4, list of assumptions and factors**: area, carbon factor per component, allometric equations and their diameter ranges, compaction and carbonate corrections, wood density, the assumption of independence between pools, and which book numbers were chosen.

Writing guidelines: each table is given a title and units, each number taken from a book is given a reference, illustration numbers are labeled, and uncertainty is always written together with its mean.

## 6. Short report example (Track 1, Sample Forest data)

The following example shows the minimum content of each chapter. All numbers are illustrations from the Sample Forest data. Participants' reports are more detailed in the Methods and Monitoring plan chapters.

**Mangrove Carbon Stock of the Sample Forest**

**1. Summary.** The Sample Forest (564 ha) stores 331,620 ± 23,359 Mg C (95% confidence interval, uncertainty 7.0%), or 588 ± 41.4 Mg C/ha. Equivalent to 1,217,045 Mg CO2e. Soil to 1 m stores 75.6% of the total. Stratum B (mature Rhizophora) contributes 53% of the site stock because it has the largest area and the highest stock (670 Mg C/ha). Precision per stratum has not yet reached ±10%.

**2. Objectives and site.** Objectives: estimate the carbon stock of four pools per stratum, calculate the site total with CI95, and prepare a re-measurement monitoring plan. The site of 564 ha is divided into three strata by zonation and dominant species.

| Stratum | Description | Area (ha) |
| --- | --- | --- |
| A | Pioneer seaward mangrove | 180 |
| B | Mature Rhizophora forest | 264 |
| C | Landward mangrove | 120 |

**3. Methods.** The number of plots is calculated with n = (t × s ÷ E)² for a precision of ±10% at 95% (Module 6), plus a 10% reserve. Soil is sampled to 1 m, bulk density is corrected for compaction, and carbonate is subtracted (Module 7). Tree biomass is calculated with allometric equations within their diameter range (Module 8). The uncertainty of one pool uses the standard error and the two-tailed t value with n − 1 degrees of freedom; between pools it is combined with the square root of the sum of squares (Module 10).

**4. Results.** Table 1 (Mg C/ha, mean ± half-width of CI95):

| Pool | Stratum A | Stratum B | Stratum C |
| --- | --- | --- | --- |
| Live aboveground trees | 70 ± 12 | 120 ± 18 | 95 ± 14 |
| Roots | 25 ± 6 | 40 ± 8 | 30 ± 7 |
| Dead trees + downed dead wood + litter | 8 ± 4 | 15 ± 6 | 10 ± 5 |
| Soil to 1 m | 380 ± 58 | 495 ± 70 | 430 ± 62 |
| Total per ha | 483 ± 60 | 670 ± 73 | 565 ± 64 |

Table 2 (Mg C, Table 1 × stratum area):

| Pool | Stratum A | Stratum B | Stratum C | Site |
| --- | --- | --- | --- | --- |
| Live aboveground trees | 12,600 | 31,680 | 11,400 | 55,680 |
| Roots | 4,500 | 10,560 | 3,600 | 18,660 |
| Dead trees + downed dead wood + litter | 1,440 | 3,960 | 1,200 | 6,600 |
| Soil to 1 m | 68,400 | 130,680 | 51,600 | 250,680 |
| Total | 86,940 | 176,880 | 67,800 | 331,620 |

Table 3 (site total):

| Stratum | Stock (Mg C) | ± CI95 (Mg C) | Uncertainty (%) |
| --- | --- | --- | --- |
| A | 86,940 | 10,740 | 12.4 |
| B | 176,880 | 19,263 | 10.9 |
| C | 67,800 | 7,697 | 11.4 |
| Site | 331,620 | 23,359 | 7.0 |

The site uncertainty is the root of 10,740² + 19,263² + 7,697² = 23,359 Mg C, not the direct sum (37,700). Divided by area, ±41.4 Mg C/ha. The site percent uncertainty (7.0%) is smaller than each stratum (10.9 to 12.4%) because errors between strata partly cancel.

**5. Assumptions and factors.** Stratum area is treated as having no uncertainty. Pools and strata are assumed independent. Carbon factors: live trees 0.46 to 0.50, roots 0.39, downed dead wood 0.50, litter 0.45 (Module 8). The CO2e result uses the factor 3.67. Breast height of 1.3 m was chosen (BC and H; KD writes 1.37 m). The exact carbon factor of each component is recorded on the Data/Notes sheet.

**6. Limitations.** (a) The uncertainty per stratum, 10.9 to 12.4%, is above the ±10% target; soil contributes almost all of it, so adding soil cores is the most effective. (b) The independence assumption can lower the site uncertainty if pools are correlated. (c) Stratum boundaries come from zonation, not from a statistical test.

**7. Re-measurement monitoring plan.** Permanent plots in each stratum are re-measured: vegetation about every 5 years, soil every 10 to 20 years (BC chapter 2; KD 1.3.2). Precision target ±10% at 95%. Additional soil cores in strata A, B, and C are taken before the first re-measurement. Stock change is calculated with (stock T2 − stock T1) ÷ (T2 − T1) (Module 11).

## 7. Final project assessment rubric

The project is assessed on four elements with a total weight of 100%. Each element is given one of three levels: Pass (100% of the element's weight), Pass with notes (60% of the element's weight), or Not yet (0%).

| Element | Weight | Pass | Pass with notes | Not yet |
| --- | --- | --- | --- | --- |
| Correctness of calculations | 35% | All mandatory tables can be traced to formulas in the workbook. The site total matches the assessor's recalculation (difference less than 1%). Units correct, per-hectare conversion correct. | One or two small errors (rounding, one cell with a wrong reference) that do not change the conclusion. | Method errors (e.g. carbonate or compaction not corrected, CIs added directly, plots not converted to hectares), or table numbers cannot be traced. |
| Completeness of assumptions | 25% | The assumptions and factors table contains all factors, equations with their diameter ranges, choices where books differ, and the independence assumption. Every book number has a reference. | The table exists but one to two factors or references are missing. | No assumptions table, or factors and their sources cannot be determined. |
| Presentation of uncertainty | 25% | Every main number is written with CI95; standard error and standard deviation are not confused; uncertainty is combined with the square root of the sum of squares; percent uncertainty is discussed against the ±10% target. | CI95 is present but discussion of the precision target or explanation of sources of uncertainty is lacking. | Results written without uncertainty, or uncertainty added directly. |
| Clarity of the report | 15% | Chapters follow the framework, tables numbered and with units, plain language, a concrete re-measurement plan (what, when, who, target precision), files organized per section 4. | Complete framework but some tables lack units or parts are hard to follow. | Important chapters missing, or the report cannot be understood without verbal explanation. |

Meeting the rubric means a total score of at least 70 and the elements Correctness of calculations and Presentation of uncertainty are not at Not yet. Example score: Correctness of calculations Pass (35), Completeness of assumptions Pass with notes (15), Presentation of uncertainty Pass (25), Clarity of the report Pass (15): total 90.

Relationship to the course grade:

- Weekly assignment score = number of assignments passed ÷ 7 × 100.
- Final grade = 40% × weekly assignment score + 60% × final project score.
- Course pass requirement: at least six of the seven weekly assignments pass, and the final project meets the rubric above. Example: six assignments passed (85.7) and a project score of 80 give a final grade of 0.4 × 85.7 + 0.6 × 80 = 82.3.

A project that does not yet meet the rubric can be revised and resubmitted; the number of revision opportunities is set by the organizer (proposal: one).

## 8. Submission checklist

Check all items before submitting. An item that is not ticked means the project is not ready.

- [ ] The final report in PDF follows the chapter 1 to 8 framework (section 5).
- [ ] Mandatory tables 1 to 4 are present, numbered, and with units.
- [ ] The site total is written with CI95 and percent uncertainty.
- [ ] Uncertainty is combined with the square root of the sum of squares, not added directly.
- [ ] Stratum area, number of plots, and number of soil cores per stratum are written.
- [ ] The assumptions table contains the carbon factor for each component, the allometric equations with their diameter ranges, and the book numbers chosen.
- [ ] Every book number is given a reference (BC, KD, H); illustration numbers are labeled.
- [ ] The re-measurement monitoring plan contains pools, time interval, permanent plots, and target precision.
- [ ] The Excel workbook is attached; input cells and result cells are distinguished; formulas are not replaced by numbers.
- [ ] One row of each sheet has been recalculated by hand and matches the cell.
- [ ] AI prompts and their checking results are recorded on the Data/Notes sheet or in the 07_AI_notes folder.
- [ ] Own data: permission from the data owner exists and confidential data are given pseudonyms.
- [ ] Folder structure and file names follow section 4.
- [ ] The 10-minute presentation is ready and has been rehearsed with a timer.

## 9. 10-minute presentation outline

The presentation consists of nine slides with one message per slide. The time of each slide adds up to 10 minutes; Q&A uses the week 8 live session time.

| Slide | Minutes | Content |
| --- | --- | --- |
| 1. Title | 0.5 | Title, name, data track, one sentence of the project question. |
| 2. Site and strata | 1 | Map or sketch of the site, area, strata, basis of division. |
| 3. Design and data | 1.5 | Number of plots per stratum, soil cores, pools measured, data sources. |
| 4. Stock per pool per stratum | 2 | Table 1 or a bar chart with CI95; the largest pool. |
| 5. Site total | 1.5 | Table 3: total, CI95, percent uncertainty, mean per hectare, CO2e. |
| 6. Assumptions and factors | 1 | The five most important assumptions, the book numbers chosen, and the reasons. |
| 7. Limitations | 1 | Two or three biggest limitations and their effect on the numbers. |
| 8. Re-measurement monitoring plan | 1 | What is re-measured, when, where, target precision, rough cost. |
| 9. Conclusion | 0.5 | One sentence of main result and one sentence of next step. |

Total minutes: 0.5 + 1 + 1.5 + 2 + 1.5 + 1 + 1 + 1 + 0.5 = 10.

Sources: Howard et al. (2014) Coastal Blue Carbon (BC); Kauffman and Donato (2012) CIFOR Working Paper 86 (KD); Hogarth (2015) The Biology of Mangroves and Seagrasses, 3rd edition (H). Sample Forest numbers are illustrations.
