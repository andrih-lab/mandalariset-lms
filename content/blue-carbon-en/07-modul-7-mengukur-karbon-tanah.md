# Module 7. Measuring soil carbon

## Module overview

Module 7 teaches how to calculate the soil carbon stock at one point, one stratum, and one site: taking cores, correcting for compaction, measuring bulk density and organic carbon content, subtracting carbon from carbonates, then summing the layers to a depth of 1 metre. Soil is the largest pool in the Sample Forest (495 Mg C/ha in stratum B, about 74% of the total of 670 Mg C/ha), so an error in this module carries straight into the total stock in Module 10.

| Aspect | Details |
| --- | --- |
| Week | 4 |
| Study time | Video 60 minutes (4 videos), exercises and assignment about 60 minutes, live session 60 minutes |
| Prerequisites | Modules 1 to 6 (especially the carbon pools in Module 1 and plot design in Module 6); basic Excel or Google Sheets; basic mean, standard deviation, and confidence interval |
| Tools | Excel or Google Sheets, a calculator, the data "Sample Forest data: eight soil cores of stratum B" in Content section 7.4 |
| Output of the week | The "Soil" sheet in the workbook: soil carbon stock per core, per layer, and per hectare |
| Main sources | BC chapter 3; KD 2.3.4.5 and 3.1.7 to 3.1.10 |

## Learning objectives

After completing this module, participants are able to:

- Distinguish organic soil from mineral soil with the 20% organic matter threshold, and determine the appropriate sampling depth (at least 1 metre) for coastal soil.
- Choose a coring tool from the tool selection table, and calculate the compaction correction factor and the length of core section that must be taken.
- Calculate dry bulk density from dry weight and sample volume, and explain why samples are dried at 60 °C.
- Calculate organic carbon content from total carbon minus inorganic carbon (factor 0.12), and from loss on ignition (LOI) with the proper equation.
- Calculate soil carbon stock per layer, per core to 1 metre, and per stratum (mean, standard deviation, 95% confidence interval) in Mg C/ha.
- Find three typical errors in a soil carbon report: bulk density from a compacted core without correction, carbonate not corrected, and a sum that stops at 30 cm.

## Video plan

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 7.1 | Organic soil, depth, and coring tools | 14 | Organic and mineral soil; the three measured numbers; why 1 metre; probing with a rod for soil thickness; comparing coring tools |
| 7.2 | Taking cores, compaction correction, and dividing layers | 15 | How to take cores in mangroves and seagrass; the compaction correction factor; standard mangrove layers; labels, storage, and sectioning samples |
| 7.3 | Bulk density and organic carbon content | 15 | Drying at 60 °C; the bulk density formula; elemental analysis, LOI, and Walkley-Black; the LOI to %C equation |
| 7.4 | Carbonate correction and carbon stock per layer | 16 | HCl test, acidification, and ashing (factor 0.12); stock per layer = bulk density x thickness x %C; from core to stratum and site |
|  | Total | 60 |  |

## Content

### 7.1 Organic soil, depth, and coring tools

Soil is called organic soil if its organic matter is more than 20% and mineral soil if less than 20% (BC chapter 3). Organic soil forms where a lot of plant residue accumulates and little mineral sediment arrives; its colour is dark and it is full of fibre. Mineral soil forms where a lot of sediment or many shell fragments arrive, and its texture is sandier. The soil type determines the suitable tool and the laboratory analysis method.

**The three measured numbers.** Soil carbon at one point is calculated from three things: soil thickness or depth, dry bulk density (g/cm³), and organic carbon content (%C). Bulk density and %C change with depth and differ between points. BC recommends one core per plot and at least three plots per stratum; KD states that six points per site are enough in mangroves if each point is sampled at several depths (KD 2.3.4.5).

**Depth.** In upland forest, soil samples are usually taken to 30 cm. On the coast, carbon-rich soil can be 10 cm to more than 3 m thick, and drainage, oxidation, and subsidence affect layers far deeper than 30 cm. So samples are taken at least to 1 m, and ideally to the base of the organic soil (bedrock or coral sand) (BC chapter 3). Soil thickness is measured by pushing a bamboo or metal rod until it cannot go in any further, at several points, then checked with a core because the rod can stop at a large root.

**Coring tools.** A good tool produces an intact core that is not compacted.

| Tool | Advantages | Disadvantages |
| --- | --- | --- |
| Russian peat corer | Can reach 5 m with extensions; the soil is not damaged or compacted; the fin closes before the tool is pulled out | Depth depends on human strength; the fin sometimes jams |
| Gouge auger | Can reach several metres; simple and easy to carry | Open at the bottom, wet or loose soil can fall out |
| Piston corer | Suitable for waterlogged soil | Small diameter; the piston must be rinsed so it does not wear quickly |
| Bucket auger | Can be used in various soil types | The sample is not entirely intact |
| Vibracorer | Long cores at once, including in sandy soil | Soil can be compacted; needs a tripod or lifting gear; hard to carry |

*Reference: BC chapter 3, Table 3.2.*

**Worked example: what share of the stock is lost if you stop at 30 cm.** Core B-07 (data in Content 7.4) has a stock of 156 Mg C/ha at 0 to 30 cm and 495 Mg C/ha at 0 to 100 cm.

1. Share at 0 to 30 cm = 156 ÷ 495 = 0.315, that is 31.5%.
2. The share not measured if samples are taken only to 30 cm = 100% − 31.5% = 68.5%.
3. Difference = 495 − 156 = 339 Mg C/ha.

For comparison, the Tier 1 value for mangrove to 1 m is 386 Mg C/ha (BC chapter 3). That number is used only when there are no local data, and the book states its error as about ±90%.

### 7.2 Taking cores, compaction correction, and dividing layers

Remove the surface litter, press the tool in vertically and slowly until the top of the tool is level with the soil surface, rotate it to cut fine roots, then pull it out slowly while continuing to rotate. If the tool is held by a large root or coral, move to another point nearby and do not force it (KD 2.3.4.5). Seagrass soil is waterlogged and easily compacted; what is used is a piston PVC tube that is hammered in, capped, then pulled with a pulley, and the core is carried upright (BC chapter 3).

**Compaction correction.** Tube pressure often compacts the soil, so the core length obtained is shorter than the depth the tube penetrated. If the tube tip is blocked by roots or shells, the tube penetrates the soil like a nail without filling (nail effect). A core can shorten by up to 30% even with the best technique. If compaction is large, take a new core nearby; if impossible, use a correction factor (BC chapter 3, Figure 3.9):

```latex
k = \frac{\text{core length obtained}}{\text{depth penetrated by the tube}}, \qquad \text{section length} = \text{layer thickness} \times k
```

**Worked example (example from BC chapter 3).** The tube penetrates 175 cm, the core obtained is 150 cm.

1. k = 150 ÷ 175 = 0.857 (BC rounds to 0.86).
2. For the 0 to 10 cm layer, section = 10 × 0.857 = 8.57 cm, not 10 cm.

This method assumes the whole core is compacted evenly. That assumption is not necessarily true, because the upper layers are usually more easily compacted. BC describes a more accurate method: measuring the degree of compaction several times at different depth intervals during sampling.

**Dividing the core into layers.** For mangroves, the common layers are 0 to 15, 15 to 30, 30 to 50, 50 to 100, and more than 100 cm; below 100 cm samples are taken at least every 2 m. For salt marsh and seagrass, the top is sectioned more finely (for example every 5 cm to 50 cm) because %C changes most in the top 20 to 50 cm (KD 2.3.4.5). If the whole layer cannot be carried, take a section of about 5 cm from the middle of the layer: for 0 to 15 cm at a depth of 5 to 10 cm, and for 50 to 100 cm at 72.5 to 77.5 cm. One section can be used for both bulk density and %C if its volume is known.

Each sample is labelled with the core code, depth, and layer thickness. The core is photographed with a measuring tape. Samples are stored at 4 °C, then frozen or dried within 24 hours so organic matter does not decompose.

**Worked example: the section for each standard layer.** Illustration: the tube penetrates 120 cm and the core obtained is 96 cm.

| Layer (cm) | Thickness (cm) | Section = thickness × k (cm) |
| --- | --- | --- |
| 0–15 | 15 | 12.0 |
| 15–30 | 15 | 12.0 |
| 30–50 | 20 | 16.0 |
| 50–100 | 50 | 40.0 |

k = 96 ÷ 120 = 0.80, and each section = thickness × 0.80 (15 × 0.80 = 12; 20 × 0.80 = 16; 50 × 0.80 = 40). The four sections total 80 cm, and they occupy the top 80 cm of the 96 cm core. The section for the 50 to 100 cm layer starts at 40 cm on the core's measuring tape (12 + 12 + 16), not at 50 cm.

### 7.3 Bulk density and organic carbon content

**Dry bulk density.** Bulk density is the dry weight of soil per unit of soil volume before drying (KD 3.1.7; BC chapter 3):

```latex
\text{bulk density (g/cm}^3) = \frac{\text{dry soil weight (g)}}{\text{sample volume before drying (cm}^3)}, \qquad V = \pi r^2 \times \text{section thickness}
```

If the core is split in half, the volume is half. If the sample is taken with a syringe, the volume is read directly: 1 cc = 1 cm³. Samples are dried in an oven at 60 °C to constant weight: at least 24 hours, cool in a desiccator, weigh, dry another 24 hours, weigh again, and repeat until the difference between two weighings is less than 4%. Usually 48 to 72 hours are needed. 60 °C is chosen because above that temperature some organic matter is lost; KD found that bulk density from 60 °C differs by only about 1% from 105 °C, so one sample can be used for both bulk density and %C. Shell fragments are not removed before bulk density is measured.

**Differences between books.** The bulk density formula in KD writes the denominator in m³; the correct one is cm³ (weight in grams divided by volume in cm³; Mg/m³ has the same value as g/cm³, but g/m³ differs by a factor of a million). Write down the unit you use on the "Soil" sheet.

**Worked example (illustrative numbers).** A core is taken with a tube 5 cm in diameter (radius 2.5 cm), sectioned 5 cm thick, and weighs 49.1 g after drying.

1. V = 3.14 × 2.5² × 5 = 98.1 cm³ (with full π: 98.17 cm³).
2. Bulk density = 49.1 ÷ 98.17 = 0.50 g/cm³.

A volume rounded to 98.2 gives the same result, 0.50.

**Bulk density from a compacted core (derivation outside the book).** The book corrects the section length so the section represents the true layer thickness. As a result, the divisor volume must be the volume of the layer in the field (full layer thickness), not the volume of the section. If bulk density is calculated from mass divided by the section volume, the result is too large by a factor of 1 ÷ k. The equivalent calculation: corrected bulk density = bulk density from the section × k.

Example (illustration): k = 0.80, layer 50 to 100 cm; bulk density calculated from the compacted tube = 0.75 g/cm³. Corrected bulk density = 0.75 × 0.80 = 0.60 g/cm³. If 0.75 is used directly, the stock of that layer is 0.75 × 50 × 8 = 300 Mg C/ha, not 0.60 × 50 × 8 = 240 Mg C/ha (25% larger).

**Organic carbon content.** The dry sample is cleaned of stones and twigs, then ground finely and evenly. There are three methods (BC chapter 3; KD 3.1.8 and 3.1.9):

| Method | Principle | Assessment |
| --- | --- | --- |
| Elemental analyzer (CHN analyzer) | The sample is burned at about 1,000 °C and the CO2 formed is measured | Most accurate and most recommended; expensive; the result is total carbon, so carbonate carbon must be subtracted |
| Loss on ignition (LOI) | The sample is burned in a furnace at 450 °C for 4–8 hours; the weight lost is taken as organic matter | Cheap and simple, less accurate; %C is calculated from %LOI with an equation |
| Wet oxidation (Walkley-Black) | Organic matter is oxidized with chemicals | Simplest equipment; not accurate; toxic waste |

Order of choice according to BC: elemental analyzer if available and affordable; if not, LOI if a furnace is available; if there is no furnace either, wet oxidation.

**LOI to %C.**

```latex
\%\text{LOI} = \frac{\text{dry weight before burning} - \text{weight after burning}}{\text{weight before burning}} \times 100
```

What is lost is all the organic matter (also H, N, O, S), not just carbon, so %LOI must be converted to %C with an equation. The best way: send part of the samples to a laboratory with an elemental analyzer and build your own equation. If impossible, use an equation from the most similar site:

| Ecosystem | Equation | r² | Data origin |
| --- | --- | --- | --- |
| Mangrove | %C = 0.415 × %LOI + 2.89 | 0.59 | Palau (Kauffman et al. 2011) |
| Salt marsh | %C = 0.47 × %LOI + 0.0008 × %LOI² | 0.98 | Maine, USA |
| Salt marsh | %C = 0.40 × %LOI + 0.0025 × %LOI² | 0.99 | North Carolina, USA (Craft et al. 1991) |
| Seagrass | %C = 0.40 × %LOI − 0.21 and %C = 0.43 × %LOI − 0.33 | 0.87 and 0.96 | World data (Fourqurean et al. 2012) |

**Worked example (numbers from the book, the continuation is illustrative).** A mangrove soil sample of 50 mg is 40 mg after burning at 450 °C.

1. %LOI = (50 − 40) ÷ 50 × 100 = 20%.
2. %C = 0.415 × 20 + 2.89 = 11.19%.

Two warnings. The Palau mangrove equation is weak (r² 0.59), and in Palau itself the ratio of organic matter to carbon ranges from 1.33 to 2.80. LOI can also be too high if carbonate samples are heated above 500 °C (carbonate also decomposes) or if clay is more than 11% (bound water is also released).

### 7.4 Carbonate correction and carbon stock per layer

Coastal soil often contains shell and coral fragments in the form of calcium carbonate (CaCO3). That inorganic carbon is not blue carbon, but is measured by the elemental analyzer, so it must be measured separately and subtracted from total carbon (BC chapter 3; KD 3.1.9). The test: drip dilute 1 N HCl onto a pinch of sample; if it fizzes, carbonate is present. Carbon is only 12% of the weight of CaCO3, so:

```latex
C_{org} = C_{total} - C_{inorganic}, \qquad C_{inorganic} = 0.12 \times \text{carbonate weight}
```

**Acidification method.** Weigh about 1 g of sample, soak in 1 N HCl, stir, leave for 18 to 24 hours, repeat until it no longer fizzes, wash three times with distilled water, dry at 60 °C, weigh. The weight lost is the weight of carbonate.

Example from the book: total carbon 25%; a 100 mg sample is 90 mg after acidification.

1. Carbonate = 100 − 90 = 10 mg (10% of the sample).
2. Inorganic carbon = 0.12 × 10 = 1.2 mg, that is 1.2% of the sample.
3. Organic carbon = 25 − 1.2 = 23.8%.

**Ashing method.** Part of the sample is heated at 500 °C for at least 3 hours; organic carbon burns off completely and the carbon in the ash is inorganic carbon, measured with an elemental analyzer.

Example from the book: total carbon 25%; a 500 mg sample becomes 250 mg of ash with a carbon content of 10%.

1. Inorganic carbon = 10% × (250 ÷ 500) = 5%.
2. Organic carbon = 25 − 5 = 20%.

**Stock per layer.** Carbon density per layer = bulk density × (%C ÷ 100) in g C/cm³; multiplied by thickness (cm) it becomes g C/cm²; multiplied by 100 it becomes Mg C/ha. The factor of 100 and the division by 100 on %C cancel each other, so (KD 3.1.10):

```latex
\text{layer stock (Mg C/ha)} = \text{bulk density (g/cm}^3) \times \text{thickness (cm)} \times \%C
```

%C is written as a percent number (12 for 12%). The stock of one core is the sum of all layers to 100 cm.

**Worked example: core B-07 (illustrative numbers).**

| Layer (cm) | Thickness (cm) | Bulk density (g/cm³) | %C | Stock (Mg C/ha) |
| --- | --- | --- | --- | --- |
| 0–15 | 15 | 0.45 | 12 | 0.45 × 15 × 12 = 81 |
| 15–30 | 15 | 0.50 | 10 | 0.50 × 15 × 10 = 75 |
| 30–50 | 20 | 0.55 | 9 | 0.55 × 20 × 9 = 99 |
| 50–100 | 50 | 0.60 | 8 | 0.60 × 50 × 8 = 240 |
| Total | 100 |  |  | 495 |

Soil stock of B-07 = 495 Mg C/ha to 1 m; the 50 to 100 cm layer contributes 240 of the 495 (48.5%). To 30 cm there is only 156 Mg C/ha.

### Sample Forest data: eight soil cores of stratum B

The following data are illustrations (not measurement results) and are used in Module 10 for the soil stock of stratum B (495 ± 70 Mg C/ha). Each core has four standard layers; B-07 is the same as the example above. Bulk density and %C are already corrected for compaction and carbonate. Copy into Excel or Google Sheets (Excel: Data > Text to Columns; Google Sheets: Data > Split text to columns; comma separator).

```csv
core,layer_cm,thickness_cm,bulk_density_g_cm3,C_org_percent
B-01,0-15,15,0.46,13.7
B-01,15-30,15,0.49,12.8
B-01,30-50,20,0.51,10.2
B-01,50-100,50,0.61,7.9
B-02,0-15,15,0.41,9.4
B-02,15-30,15,0.46,7.4
B-02,30-50,20,0.52,7.5
B-02,50-100,50,0.55,7.0
B-03,0-15,15,0.38,14.5
B-03,15-30,15,0.41,12.6
B-03,30-50,20,0.48,10.4
B-03,50-100,50,0.51,12.2
B-04,0-15,15,0.37,12.2
B-04,15-30,15,0.42,11.6
B-04,30-50,20,0.48,10.6
B-04,50-100,50,0.52,6.1
B-05,0-15,15,0.36,14.6
B-05,15-30,15,0.40,12.8
B-05,30-50,20,0.47,10.2
B-05,50-100,50,0.43,8.0
B-06,0-15,15,0.48,12.3
B-06,15-30,15,0.51,11.1
B-06,30-50,20,0.58,9.5
B-06,50-100,50,0.56,9.9
B-07,0-15,15,0.45,12.0
B-07,15-30,15,0.50,10.0
B-07,30-50,20,0.55,9.0
B-07,50-100,50,0.60,8.0
B-08,0-15,15,0.40,14.0
B-08,15-30,15,0.46,13.4
B-08,30-50,20,0.52,11.2
B-08,50-100,50,0.54,11.2
```

Stock per core (bulk density × thickness × %C summed per core, rounded to integers):

| Core | B-01 | B-02 | B-03 | B-04 | B-05 | B-06 | B-07 | B-08 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stock 0–100 cm (Mg C/ha) | 534 | 379 | 571 | 401 | 424 | 561 | 495 | 595 |
| Stock 0–30 cm (Mg C/ha) | 189 | 109 | 160 | 141 | 156 | 173 | 156 | 176 |

**From core to stratum and site.** The mean of the eight cores = 3,960 ÷ 8 = 495 Mg C/ha. Standard deviation (STDEV.S) = 83.7. Standard error = 83.7 ÷ √8 = 29.6. With the 95% two-tailed t at 7 degrees of freedom (2.365), the interval half-width = 2.365 × 29.6 = 69.9, rounded to 70. Result: 495 ± 70 Mg C/ha. The soil stock of stratum B (264 ha) = 495 × 264 = 130,680 Mg C, with an uncertainty of 70 × 264 = 18,480 Mg C. Summing across strata uses the square root of the sum of squares as in Module 10.

The book gives a two-stratum example (A 300 ha, 500 Mg C/ha, standard deviation 60; B 200 ha, 300 Mg C/ha, standard deviation 45): stock 150,000 + 60,000 = 210,000 Mg C, uncertainty sqrt(18,000² + 9,000²) = 20,125 Mg C. Note: that book example uses standard deviation × area, not the confidence interval; for the Sample Forest we use the 95% interval half-width. Write on the "Soil" sheet which one you use.

Soil takes a long time to accumulate carbon, so a newly formed or newly restored ecosystem may not have a significant soil store for the first few years.

## Self-study exercises

Work with a calculator or Excel. Problems 4 and 5 use the Sample Forest data in Content 7.4.

1. **Bulk density and LOI.** (a) A sample is taken with a tube 6 cm in diameter (radius 3 cm), sectioned 6 cm thick, and weighs 84.8 g when dry. Calculate the bulk density. (b) Another sample weighing 80 mg is 68 mg after burning at 450 °C. Calculate %LOI and %C with the Palau mangrove equation.
2. **Compaction correction.** The tube penetrates 140 cm and the core obtained is 112 cm. Calculate k, then the section length for the 15–30 cm and 50–100 cm layers. The bulk density calculated from the tube for the 50–100 cm layer is 0.65 g/cm³; what is the corrected bulk density?
3. **Carbonate.** Total carbon 18%. A 200 mg sample is ashed at 500 °C to 120 mg of ash, and the ash carbon content is 7.5%. Calculate the inorganic carbon and organic carbon.
4. **One Sample Forest core.** Calculate the stock of each layer and the 0–100 cm stock of core B-03, then the part that lies in 0–30 cm. Then calculate the mean, standard deviation, standard error, and 95% interval half-width of the eight cores (t df = 7: 2.365).
5. **From strata to site.** With soil stocks A 380, B 495, C 430 Mg C/ha and areas 180, 264, 120 ha, calculate the soil stock of each stratum, their total, and that total as a percentage of the site total of 331,620 Mg C. Also calculate the combined soil uncertainty from interval half-widths of 58, 70, 62 Mg C/ha.

**Answer key**

1. (a) V = π × 3² × 6 = 169.6 cm³; bulk density = 84.8 ÷ 169.6 = 0.50 g/cm³. (b) %LOI = (80 − 68) ÷ 80 × 100 = 15%; %C = 0.415 × 15 + 2.89 = 9.1%.
2. k = 112 ÷ 140 = 0.80. Section 15–30 cm: 15 × 0.80 = 12 cm. Section 50–100 cm: 50 × 0.80 = 40 cm. Corrected bulk density = 0.65 × 0.80 = 0.52 g/cm³.
3. Inorganic carbon = 7.5% × (120 ÷ 200) = 4.5%; organic carbon = 18 − 4.5 = 13.5%.
4. B-03: 0.38 × 15 × 14.5 = 82.65; 0.41 × 15 × 12.6 = 77.49; 0.48 × 20 × 10.4 = 99.84; 0.51 × 50 × 12.2 = 311.1. Total = 571.08, rounded 571 Mg C/ha. The 0–30 cm share = (82.65 + 77.49) ÷ 571.08 = 160.14 ÷ 571.08 = 28.0%. Eight cores: mean 495, standard deviation 83.7, standard error 29.6, interval half-width 2.365 × 29.6 = 69.9 (70).
5. A = 380 × 180 = 68,400; B = 495 × 264 = 130,680; C = 430 × 120 = 51,600 Mg C. Total = 250,680 Mg C = 75.6% of 331,620. Uncertainty = sqrt((58 × 180)² + (70 × 264)² + (62 × 120)²) = sqrt(10,440² + 18,480² + 7,440²) = 22,491 Mg C (8.97% of 250,680).

## Find the error

**Report A (illustration).** "Core B-07 was taken with a tube that penetrated 120 cm and produced a 96 cm core. Soil carbon stock was calculated per layer using bulk density from the tube and total carbon from the elemental analyzer."

| Layer (cm) | Thickness (cm) | Bulk density (g/cm³) | %C used | Stock (Mg C/ha) |
| --- | --- | --- | --- | --- |
| 0–15 | 15 | 0.45 | 12.0 | 81.0 |
| 15–30 | 15 | 0.50 | 10.0 | 75.0 |
| 30–50 | 20 | 0.55 | 9.84 | 108.2 |
| 50–100 | 50 | 0.75 | 8.0 | 300.0 |
| Total |  |  |  | 564.2 |

Field note in that report: the 30–50 cm layer sample fizzed with HCl and lost 7 mg out of 100 mg after acidification.

**Report B (illustration).** "Soil carbon stock of B-07 = 0.45 × 15 × 12 + 0.50 × 15 × 10 = 156 Mg C/ha. Standard soil samples in upland forest are taken to 30 cm, so this coverage is adequate."

**Key**

Report A has two errors, and the correct number for B-07 is 495 Mg C/ha.

1. *Bulk density not corrected for compaction (50–100 cm layer).* k = 96 ÷ 120 = 0.80. The bulk density of 0.75 comes from a compacted tube; corrected = 0.75 × 0.80 = 0.60. The stock of that layer is 0.60 × 50 × 8 = 240, not 300 (an excess of 60 Mg C/ha). How to detect it: the report mentions a 96 of 120 cm core but does not mention k; bulk density jumps 0.20 g/cm³ from the 30–50 layer to 50–100 cm, whereas the largest rise between layers across the eight cores in the Sample Forest data is only 0.10.
2. *Carbonate not corrected (30–50 cm layer).* Carbonate = 7 mg of 100 mg = 7%; inorganic carbon = 7 × 0.12 = 0.84%; organic %C = 9.84 − 0.84 = 9.0%. The correct stock is 0.55 × 20 × 9.0 = 99, not 108.2 (an excess of 9.2). How to detect it: the field note says the HCl test fizzed, so the %C used must be organic %C, not total carbon.
3. The correct total = 81 + 75 + 99 + 240 = 495. Report A overstates by 69.2 Mg C/ha (14%): 564.2 − 495 = 69.2. That difference is smaller than the stratum interval half-width (70), so it looks plausible and easily slips through.

Report B stops at 30 cm. The stock to 30 cm = 81 + 75 = 156 Mg C/ha, only 31.5% of the 495 Mg C/ha to 1 m; 339 Mg C/ha (68.5%) is not counted. The 30 cm coverage applies to upland forest soil; on the coast carbon-rich soil can be more than 3 m (BC chapter 3), so at least 1 m. How to detect it: check the deepest depth in the layer table and compare it with the 1 m requirement.

## The role of AI and example prompts

AI is useful for drafting worksheet formulas and explaining terms, but the numbers and factors it gives must be matched against the books and against hand calculation.

| No. | Prompt | Participant's check |
| --- | --- | --- |
| 1 | "I have a table with column A core code, B layer, C thickness (cm), D bulk density (g/cm3), E organic %C. Write Excel formulas for carbon stock per layer in Mg C/ha and a formula for the total per core." | Calculate one row with a calculator (0.45 × 15 × 12 = 81) and match it with the cell result. The total for B-07 must be 495. |
| 2 | "Explain why inorganic carbon from carbonate is multiplied by 0.12, and give one example number." | Match with the book example: 10 mg of carbonate becomes 1.2 mg of carbon (BC chapter 3). |
| 3 | "Check my calculation: the tube penetrated 150 cm, core 120 cm; layer 0–15 cm; tube bulk density 0.70." | Calculate yourself k = 0.80, section 12 cm, corrected bulk density 0.56; compare with the AI's answer. |

**Example of an AI answer that can be wrong.** For prompt 1, the AI gives `=D2*C2*E2*100` with the explanation "multiplied by 100 to convert g/cm2 to Mg/ha". That factor of 100 is excessive: the conversion of g C/cm² to Mg C/ha uses 100, but %C is written as a percent number (12, not 0.12), which is 100 times its fractional value, so the two factors of 100 cancel (KD 3.1.10). How to catch it: the first row produces 8,100, whereas hand calculation gives 81, and the stock of one core becomes 49,500 Mg C/ha, far above the mangrove Tier 1 value of 386 Mg C/ha (BC chapter 3). The correct formula is `=D2*C2*E2`.

General rule: ask the AI to show steps and units, then calculate one case by hand, and do not enter factor numbers (0.12; 0.415; 2.89) from the AI without matching them against the book.

## Excel notes: Mac and Windows

Assume the Sample Forest data is pasted in the "Soil" sheet with column A core, B layer, C thickness, D bulk density, E organic %C (rows 2 to 33), and column F for stock per layer.

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Split CSV data pasted into one column | Select column A; Data > Text to Columns; choose Delimited, tick Comma | Data > Text to Columns; Delimited; Comma | Data > Split text to columns |
| Stock per layer (cell F2, copy down) | `=D2*C2*E2` | same | same |
| Stock of one core at once (4 rows, B-07 in rows 26 to 29) | `=SUMPRODUCT(C26:C29,D26:D29,E26:E29)` | same | same |
| Total stock per core from column F | `=SUMIF($A$2:$A$33,"B-07",$F$2:$F$33)` | same | same |
| Mean and standard deviation of eight cores (cells J2:J9 hold each core's stock) | `=AVERAGE(J2:J9)` and `=STDEV.S(J2:J9)` | same | same |
| Standard error | `=STDEV.S(J2:J9)/SQRT(COUNT(J2:J9))` | same | same |
| 95% two-tailed t value, df = 7 | `=T.INV.2T(0.05,7)` | same | same |
| Interval half-width | the t value times the standard error (refer to those two cells) | same | same |
| Quick column sum | Select the cell below the column, Command+Shift+T (AutoSum) | Alt+= (AutoSum) | The Σ button on the toolbar |
| Lock a cell address | Type the dollar sign directly, for example `$A$2` | Type the dollar sign directly, or press F4 | Type the dollar sign directly |
| Rounding | `=ROUND(F2,1)` | same | same |

**Indonesian-language Excel.** Function names and argument separators differ: the argument separator becomes a semicolon (for example `=SUMPRODUCT(C26:C29;D26:D29;E26:E29)`), the decimal uses a comma, and the names of some functions are translated (for example JUMLAH for SUM and RATA.RATA, or RATA2 in older versions, for AVERAGE). For other functions (SUMIF, STDEV.S, T.INV.2T), type the English name in the cell and choose from the suggestion list that appears, or use the Insert Function (fx) button so the local name is filled in automatically. The decimal column in the CSV uses a point; if a cell is read as text, replace the point with a comma (Find and Replace) or change the regional settings.

## Weekly assignment

Fill in the "Soil" sheet in the workbook with the data of the eight cores of stratum B (Content 7.4), then a short paragraph containing the methods you use. The assignment passes when all of the following items are met:

- [ ] The CSV data is pasted in full (32 rows) and column F contains a formula bulk density × thickness × %C, not typed numbers.
- [ ] The stock of each layer and the 0–100 cm stock for the eight cores are calculated; B-07 = 495 Mg C/ha and B-03 = 571 Mg C/ha.
- [ ] The 0–30 cm and 0–100 cm stocks are displayed side by side, and the difference (B-07: 339 Mg C/ha) is explained in one sentence.
- [ ] The mean (495), standard deviation (83.7), standard error (29.6), t value (2.365), and interval half-width (70) are calculated with formulas, and the result is reported as 495 ± 70 Mg C/ha to a depth of 1 m.
- [ ] The soil stock of stratum B is calculated (495 × 264 = 130,680 Mg C) with its uncertainty (70 × 264 = 18,480 Mg C).
- [ ] The methods paragraph mentions: the coring tool, k and how it was corrected, the drying temperature (60 °C), the %C method (elemental analysis, LOI, or Walkley-Black), and whether carbonate was corrected with the factor 0.12.
- [ ] The bulk density unit is written g/cm³ in every column, and which number is used when the books differ (for example KD m³ versus cm³) is written down.
- [ ] The two errors in Report A and the one error in Report B are corrected with the correct numbers (495, not 564 or 156).

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0–5 | Opening: results of the "Soil" sheet compared; three questions from participants | Participants' "Soil" sheets |
| 5–15 | Quick review: the three measured numbers, 1 m, and the stock per layer formula; participants calculate B-07 on the whiteboard | B-07 data, calculator |
| 15–30 | Pair exercise: compaction and carbonate correction (problems 2 and 3), then an ashing problem with new numbers | Exercises, worksheet |
| 30–45 | Find the error: Reports A and B discussed in small groups; each group names one way to detect an error | Reports A and B |
| 45–55 | From core to stratum: discussion of 495 ± 70 and the effect of the number of cores (n = 8) on the interval | "Soil" sheet, t table |
| 55–60 | Closing: preview of Module 8 and collecting the sheets | Summary |

Sources: BC chapter 3 (Coastal Blue Carbon: soil sampling and carbon analysis methods), KD 2.3.4.5 and 3.1.7 to 3.1.10 (Kauffman and Donato, CIFOR WP86), Tier 1 values from BC chapter 3; other numbers in this module are illustrations.

---
