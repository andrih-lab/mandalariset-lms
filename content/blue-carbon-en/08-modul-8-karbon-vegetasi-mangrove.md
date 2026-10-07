# Module 8. Mangrove vegetation carbon

## Module overview

Module 8 teaches how to turn tree measurements and dead material in a plot into vegetation carbon per hectare, from stem diameter at breast height to a stratum mean with a 95% confidence interval. Participants calculate the carbon of live aboveground trees, roots, standing dead trees, downed dead wood, and litter, then assemble it on the "Vegetation" sheet for Sample Forest stratum B. The three source books do not always agree (breast height of 1.3 m or 1.37 m, carbon factors, wood density), so each participant records the choices they use.

| Aspect | Details |
| --- | --- |
| Week | 5 (together with Module 9, which is optional) |
| Video | 4 videos, 40 minutes in total (Module 9 adds about 20 minutes in the same week) |
| Exercises and assignment | about 60 minutes |
| Live session | 60 minutes |
| Prerequisites | Module 6 (plot and subplot design), basic Excel or Google Sheets, basic statistics (mean, standard deviation, standard error) |
| Tools | Excel (Mac or Windows) or Google Sheets, a scientific calculator with a power key, a measuring tape for the line intersect part (if available) |
| Data | "Sample Forest data: stratum B vegetation" in section 8.4 of this module (illustration) |
| Output of the week | The "Vegetation" sheet in the workbook: biomass and carbon per plot, per hectare, and the stratum B mean ± 95% confidence interval |
| Main references | KD chapters 2 and 3, BC chapter 4 (Tables 4.1 and 4.2), H chapter 2 for comparison |

## Learning objectives

After this module, participants are able to:

1. Calculate the biomass and carbon of one mangrove tree from diameter at breast height (DBH), wood density, an allometric equation, and a carbon conversion factor.
2. Check whether an allometric equation may be used for a particular tree (diameter range) and record the choices of measurement point, equation, wood density, and carbon factor used.
3. Calculate root carbon, class 3 standing dead trees, downed dead wood (line intersect technique), and litter from field data.
4. Convert the amount of carbon per plot into Mg C/ha with the correct unit conversion factor.
5. Calculate the mean, standard error, and 95% confidence interval (t according to degrees of freedom) from several plots, then report it as mean ± half-width of the interval.
6. Name the differences in numbers between the source books that are relevant to vegetation and explain their impact on the results.

## Video plan

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 8.1 | Live trees: DBH and allometric equations | 10 | What is measured on a tree, plot and subplot rules, measurement point of 1.3 m or 1.37 m, special stem forms, choosing an equation and checking the diameter range, the 20 cm tree example |
| 8.2 | Wood density, carbon factors, and roots | 10 | Measuring and choosing wood density, carbon factors across books, the root equation, aboveground : belowground ratio, the root example for the 20 cm tree |
| 8.3 | Dead trees, downed dead wood, and litter | 10 | Three classes of standing dead trees, the truncated cone formula, line intersect, recording rules, litter, a worked example for each component |
| 8.4 | From plot to hectare: the Vegetation sheet | 10 | Plot B-01 data, the unit conversion factor, summary of eight plots, mean, standard error, 95% interval, filling in the Vegetation sheet |

## Content

### 8.1 Live trees: DBH and allometric equations

Tree biomass is not weighed, but estimated from stem diameter with an allometric equation, then multiplied by a carbon conversion factor. Trees are not felled because there are too many of them and the same plot will be re-measured years later (KD chapter 3, BC chapter 4).

```latex
C_{tree}\ (\mathrm{kg\ C}) = B\ (\mathrm{kg}) \times CF
```

B is the aboveground dry biomass from the allometric equation and CF is the carbon conversion factor (live wood 0.46 to 0.50; the Sample Forest uses 0.47).

**What is recorded for each tree.** Species, diameter of the main stem at breast height (DBH), condition (alive or dead), and height if possible. A tree at the edge of the plot is counted if at least 50% of its main stem is rooted inside the plot boundary. All tree sizes are measured, including small ones, because in many mangrove forests small trees are the main constituents of the stand. To save time, small trees are measured in a subplot smaller than the main plot (KD 2.3.1, subplot design is in Module 6). Seedlings are only counted; their biomass is obtained from the number of seedlings multiplied by the mean dry weight of one seedling pulled outside the plot.

**Measurement point: 1.3 m or 1.37 m.** KD sets breast height at 1.37 m, while the guidebook (BC) and H use 1.3 m. The difference is 7 cm along the stem. On a straight stem the effect on diameter is small, but the data used for allometric equations and re-measurement must use the same point. Choose one, write it in the methods section, and do not change it in later measurements. This module uses 1.3 m for the Sample Forest.

**Unusual stem forms** (KD 2.3.1):

- A tree on a slope is measured from the uphill side.
- A leaning tree is measured at 1.3 m along its stem.
- A tree that forks below breast height is measured just below the fork. If the fork is very close to the ground, both stems are counted as two trees.
- A tree with high buttresses is measured just above the buttress.
- *Rhizophora* is measured above the highest prop root, where the main stem begins to form.
- In permanent plots, a measurement point that is not at breast height is marked with a ring of paint or a label. Nails are not recommended because the surrounding wood swells and the tree appears to grow faster.

**Choosing an equation.** B in kg, D in cm, ρ in g/cm³. The last column is the largest tree diameter used to build that equation (KD Table 3, BC Table 4.2).

| Group | Equation | Largest D (cm) | Data origin |
| --- | --- | --- | --- |
| General, Asia | B = 0.251 × ρ × D^2.46 | 49 | Komiyama et al. 2005 |
| General, Americas | B = 0.168 × ρ × D^2.471 | 42 | Chave et al. 2005 |
| *Rhizophora apiculata* | B = 0.043 × D^2.63 | 40 | Indonesia |
| *Rhizophora apiculata* | B = 0.1709 × D^2.516 | 30 | Malaysia |
| *Avicennia marina* | B = 0.1848 × D^2.3524 | 35.2 | Indonesia |
| *Xylocarpus granatum* | B = 0.1832 × D^2.21 | 41 | Indonesia |

Three selection rules (KD 3.1.1):

1. Prefer species-specific equations from the working region; general equations are used when no species-specific equation exists.
2. Do not use an equation for a tree larger than its largest D. For large trees the result can deviate widely. Example from Yap, Micronesia: a 69 cm *Bruguiera* tree was estimated at 2,588 kg by an equation built from trees up to 132 cm, but 7,014 kg by a general equation built from trees up to 49 cm.
3. Use the same equation for all trees in the site and in every re-measurement.

Equations that use tree height also exist, but KD does not recommend them because tree height is hard to measure accurately inside a forest.

**Worked example 1: one *Rhizophora apiculata* tree, DBH 20 cm, ρ = 0.87 g/cm³ (BC Table 4.1), general Asia equation.** The tree's numbers are illustrations; the equation and ρ are from the books.

1. Check the range: 20 cm is less than 49 cm, the equation may be used.
2. D^2.46 = 20^2.46 = 1,586.84.
3. 0.251 × 0.87 = 0.21837.
4. B = 0.21837 × 1,586.84 = 346.5 kg.
5. C = 346.5 × 0.47 = 162.9 kg C.

**Worked example 2: the choice of equation changes the result.** For the same 20 cm tree, the Indonesian *R. apiculata* equation (limit 40 cm) gives 0.043 × 20^2.63 = 113.5 kg, the Malaysian equation (limit 30 cm) gives 320.7 kg, and the general Asia equation gives 346.5 kg. All three meet the diameter range, but the difference is large: 113.5 kg is about a third of 346.5 kg. The book does not explain the cause of this difference (outside the books: different data origins, for example which components were weighed, need checking against the source publications). For the Sample Forest, all modules use the general Asia equation so the numbers are uniform. In a real project, write the reason for your choice in the methods report.

**Sensitivity to diameter.** Because the exponent is 2.46, a diameter error of 1% produces a biomass error of 1.01^2.46 − 1 = 2.5%. For a 20 cm tree, a difference of 0.2 cm (20.2 cm) changes biomass from 346.5 to 355.1 kg. That is why the measurement point and measuring tool must be consistent.

**Record your choices (fill in on the Vegetation sheet, sheet "Choices").** Differences between books are marked with ≠.

| What is chosen | Options in the books | My choice |
| --- | --- | --- |
| Breast height | ≠ KD 1.37 m; BC and H 1.3 m |  |
| Tree equation | General Asia, or a species equation (check largest D) |  |
| Seedling limit | ≠ KD: height < 1.37 m; BC: height 10 to 30 cm |  |
| Wood density | Measured yourself, or BC Table 4.1 |  |
| Live wood carbon factor | ≠ KD and BC 0.46 to 0.50; H 40 to 45% of dry weight |  |

### 8.2 Wood density, carbon factors, and roots

Wood density, carbon factors, and the root equation determine the final number as strongly as diameter does, and in the three source books all three contain differences in numbers. This section sets the values used in the Sample Forest and shows where participants must record their choices.

**Wood density (ρ)** is the oven-dry weight of wood divided by the fresh volume of the wood. Volume is measured by immersing a piece of wood in a container of water on a balance: the rise in the balance reading (g) equals the volume (cm³) because the density of water is 1 g/cm³. The piece is then dried at 100 °C and weighed. The unit is g/cm³, which has the same value as Mg/m³. Do not mix it with kg/m³ (the number becomes 1,000 times larger). The density of one species can differ between sites, so your own measurement is better. If that is not possible, use BC Table 4.1:

| Species | ρ (g/cm³) | Species | ρ (g/cm³) |
| --- | --- | --- | --- |
| *Avicennia marina* | 0.62 | *Rhizophora apiculata* | 0.87 |
| *Bruguiera gymnorrhiza* | 0.81 | *Rhizophora mucronata* | 0.83 |
| *Ceriops tagal* | 0.85 | *Sonneratia alba* | 0.47 |
| *Xylocarpus granatum* | 0.61 | Mean of 16 species | 0.71 |

**Differences between books on ρ.** KD Table 5 writes *Sonneratia alba* 0.078 and *Rhizophora apiculata* 1.050, while BC Table 4.1 writes 0.47 and 0.87. The figure 0.078 is clearly a misprint. The effect: for a 20 cm *S. alba* tree with the general Asia equation, ρ = 0.078 gives B = 31.1 kg, whereas ρ = 0.47 gives 187.2 kg, a ratio of 1 : 6. Participants use BC Table 4.1 and write it on the "Choices" sheet.

**Carbon conversion factor.** Carbon is a fraction of dry biomass. A factor of 0.47 means 47% (KD 3.1, BC chapter 4):

| Component | Factor |
| --- | --- |
| Live trees, dwarf mangrove, salt marsh shrubs | 0.46 to 0.50 |
| Tree roots and pneumatophores | 0.39 |
| Standing dead trees and downed dead wood | 0.50 |
| Palms, including nipa | 0.47 |
| Lianas | 0.46 |
| Mangrove litter | 0.45 |

Wood carbon content that has been measured: 46.3% in *Bruguiera gymnorrhiza*, 45.9% in *Rhizophora apiculata*, 47.1% in *Sonneratia alba* (KD 3.1). A difference between books: KD and BC use 0.46 to 0.50 for wood, while H gives 40 to 45% of tissue dry weight. The effect on a 346.5 kg tree:

| Factor | Carbon (kg C) |
| --- | --- |
| 0.40 (H, lower bound) | 138.6 |
| 0.45 (H, upper bound) | 155.9 |
| 0.46 (KD, BC, lower bound) | 159.4 |
| 0.47 (used in the Sample Forest) | 162.9 |
| 0.50 (KD, BC, upper bound) | 173.3 |

The difference from 138.6 to 173.3 kg C is 25% relative to the lowest figure. Measure it yourself if possible; if not, write down the factor used.

**Roots.** Mangroves store a lot of biomass belowground. The ratio of aboveground to belowground biomass in mangroves is generally 2.0 to 3.0, whereas in upland forest it is 3.96 to 4.52 (KD 3.1.2). A smaller ratio means a larger share of roots. Digging up and weighing roots is almost impossible, so root biomass is estimated with the general equation of Komiyama et al. (2008):

```latex
B_{root}\ (\mathrm{kg}) = 0.199 \times \rho^{0.899} \times D^{2.22}
```

The root carbon factor is 0.39 (root carbon content 36 to 42%).

**Worked example 3: roots of the 20 cm *R. apiculata* tree (ρ = 0.87), continuing example 1.**

1. ρ^0.899 = 0.87^0.899 = 0.8823.
2. D^2.22 = 20^2.22 = 773.19.
3. B root = 0.199 × 0.8823 × 773.19 = 135.8 kg.
4. C root = 135.8 × 0.39 = 52.9 kg C.
5. Ratio check: 346.5 ÷ 135.8 = 2.55, within the range 2.0 to 3.0.

A typical error: using 0.47 for roots. The result is 135.8 × 0.47 = 63.8 kg C, 20.5% larger than the correct figure.

**Worked example 4: a *Rhizophora mucronata* tree of 25 cm (ρ = 0.83, BC Table 4.1).** The tree's numbers are an illustration.

1. B above = 0.251 × 0.83 × 25^2.46 = 572.4 kg; C above = 572.4 × 0.47 = 269.0 kg C.
2. B root = 0.199 × 0.83^0.899 × 25^2.22 = 213.6 kg; C root = 213.6 × 0.39 = 83.3 kg C.
3. Whole-tree carbon = 269.0 + 83.3 = 352.3 kg C.

### 8.3 Dead trees, downed dead wood, and litter

Dead material is recorded separately from live trees, and each type of material has its own calculation method: standing dead trees according to the degree of decay, downed dead wood with line intersects, litter with small quadrats. The carbon factor for dead wood is 0.50 and for litter 0.45 (KD 3.1.3, 3.1.5, 3.1.6; BC chapter 4).

**Standing dead trees.** The calculation method depends on the decay class (KD 3.1.3):

| Class | Features | How to calculate biomass |
| --- | --- | --- |
| 1 | Recently dead; small twigs still complete, only leaves lost | Live tree equation minus leaf weight; easy way: subtract 2.5% |
| 2 | Small twigs lost, some large branches lost | Live tree equation minus 10 to 20% |
| 3 | Only the main stem remains, often broken off above | Truncated cone volume × wood density |

For class 3, the base diameter, DBH, and the height of the remaining stem are measured. The tip diameter is estimated with the following formula (if the tip d result is negative, use 0):

```latex
d_{tip} = d_{base} - \frac{100 \times h \times (d_{base} - DBH)}{130}
```

```latex
V\ (\mathrm{cm^3}) = \frac{\pi \times 100\,h}{12} \left( d_{base}^2 + d_{tip}^2 + d_{base}\, d_{tip} \right), \qquad B\ (\mathrm{g}) = V \times \rho
```

h is the height of the remaining stem (m), diameter in cm, ρ in g/cm³. The number 130 in the formula equals breast height of 1.3 m in cm (an inference, outside the book). The formula is used as written with 130; note on the "Choices" sheet that a measurement point of 1.3 m is used.

**Worked example 5: a class 3 dead tree** (d base 30 cm, DBH 25 cm, h = 6 m, ρ = 0.69 g/cm³; illustrative numbers).

1. d tip = 30 − 100 × 6 × (30 − 25) ÷ 130 = 30 − 23.08 = 6.92 cm.
2. V = 3.1416 × 600 ÷ 12 × (900 + 47.9 + 207.7) = 181,525 cm³.
3. B = 181,525 × 0.69 = 125,252 g = 125.3 kg.
4. C = 125.3 × 0.50 = 62.6 kg C.

**Worked example 6: a class 2 dead tree.** An *R. apiculata* tree of 20 cm (live B = 346.5 kg) with a loss of 15% (within the range of 10 to 20%): B = 346.5 × 0.85 = 294.5 kg; C = 294.5 × 0.50 = 147.3 kg C.

**Downed dead wood (line intersect).** A measuring tape is stretched from the centre of the subplot and every piece of wood the tape crosses is recorded. Size classes (KD Table 2; the quadratic mean diameter and specific gravity figures come from the Micronesian mangrove sample after a typhoon, Kauffman and Cole 2010):

| Class | Diameter (cm) | How to record | QMD (cm) | Specific gravity |
| --- | --- | --- | --- | --- |
| Fine | < 0.6 | Count the number on part of the transect | 0.43 | 0.48 |
| Small | 0.6 to 2.5 | Count the number on part of the transect | 1.47 | 0.64 |
| Medium | 2.5 to 7.6 | Count the number on part of the transect | 4.52 | 0.71 |
| Large | > 7.6 | Measure the diameter of each piece; record sound or rotten |  | 0.69 |

Recording rules:

- The wood must be detached from the tree. Standing dead trees and dead branches still attached are not recorded here.
- The tape must cross the centre line of the piece of wood. If the tape only touches the end, the wood is not recorded (this is the boundary between "crossed" and "touched").
- A piece crossed twice by the tape is recorded twice.
- Only wood up to 2 m above the ground is recorded.
- Large wood is classed as sound or rotten with a machete strike: sound if the machete bounces off or enters slightly, rotten if the machete goes in deep and the wood is crumbly.

```latex
QMD = \sqrt{\frac{\sum d^2}{n}}, \qquad V\ (\mathrm{m^3/ha}) = \frac{\pi^2 \times N \times QMD^2}{8 \times L}, \qquad V_{large}\ (\mathrm{m^3/ha}) = \frac{\pi^2 \times \sum d_i^2}{8 \times L}
```

N is the number of pieces crossed by the tape, d the diameter (cm), L the transect length (m). Biomass (Mg/ha) = V × specific gravity; carbon = biomass × 0.50. Because π² ÷ 8 = 1.2337, the formula can be written V = 1.2337 × Σd² ÷ L.

**Worked example 7: downed dead wood of plot B-01** (illustration). On a transect of L = 24 m, the sound large wood crossed by the tape has diameters 9, 11, 8.5, and 12 cm. Medium wood is counted over 10 m of transect: 5 pieces.

1. Σd² = 81 + 121 + 72.25 + 144 = 418.25.
2. V large = 9.8696 × 418.25 ÷ (8 × 24) = 21.50 m³/ha.
3. B large = 21.50 × 0.69 = 14.83 Mg/ha; C large = 14.83 × 0.50 = 7.42 Mg C/ha.
4. V medium = 9.8696 × (5 × 4.52²) ÷ (8 × 10) = 12.60 m³/ha.
5. B medium = 12.60 × 0.71 = 8.95 Mg/ha; C medium = 8.95 × 0.50 = 4.47 Mg C/ha.

Fine and small wood are not counted in this example; KD states that only wood above 2.5 cm stores a significant amount of carbon, and smaller wood can be merged into the litter sample.

**Litter and other small components.** Litter is newly fallen non-woody dead material (leaves, flowers, fruit). In mangroves its amount is small because it is eaten by crabs and carried away by the tide, so it is often not measured. When measured, litter is collected from 50 × 50 cm quadrats (0.25 m²), dried, and weighed. Pneumatophores (*Avicennia*, *Bruguiera*, *Sonneratia*) are not covered by the tree equation: count the pneumatophores in a small quadrat, multiply by the mean dry weight of one pneumatophore (from 50 to 100 roots outside the plot), carbon factor 0.39 (an example outside the Sample Forest plots: 60 pneumatophores × 5 g = 300 g per 0.25 m² = 1.2 kg/m²; × 0.39 = 0.468 kg C/m² = 4.7 Mg C/ha).

**Worked example 8: litter of plot B-01** (illustration). Three 0.25 m² quadrats with dry weights of 36, 41, and 43 g.

1. Mean = (36 + 41 + 43) ÷ 3 = 40 g per 0.25 m².
2. Per m² = 40 ÷ 0.25 = 160 g/m² = 0.16 kg/m²; × 10 = 1.6 Mg/ha.
3. C = 1.6 × 0.45 = 0.72 Mg C/ha.

### 8.4 From plot to hectare: the Vegetation sheet

Carbon calculated in a plot must be divided by plot area and converted to hectares before averaging across plots. After that, the mean, standard error, and 95% confidence interval are calculated from the carbon per hectare of each plot, not from the total carbon per plot.

```latex
C_{ha}\ (\mathrm{Mg\ C/ha}) = \frac{\sum C\ (\mathrm{kg\ C})}{A_{plot}\ (\mathrm{m^2})} \times 10
```

The factor 10 comes from 1 ha = 10,000 m² and 1 Mg = 1,000 kg, so 10,000 ÷ 1,000 = 10. If trees of various sizes are measured in different subplots, add up the carbon of each size class and divide by the area of that class's own subplot before summing. A frequent error is to write kg C/m² as Mg C/ha without the factor 10.

#### Sample Forest data: stratum B vegetation

The following data are illustrations, designed so that the stratum B means equal the Sample Forest figures (live trees 120 ± 18, roots 40 ± 8, dead trees + downed dead wood + litter 15 ± 6 Mg C/ha). Stratum B (264 ha, mature *Rhizophora* forest) is represented by eight circular plots with a radius of 7 m (area 153.9 m²), so the degrees of freedom are 7 and t (two-tailed, 95%) = 2.365. Plot B-01 is given in full down to each tree; plots B-02 to B-08 are given as summary results. Wood density from BC Table 4.1. Other modules that need stratum B vegetation data refer to this section.

Live trees of plot B-01 (12 trees; for simplicity all trees are measured in the 7 m plot and there are no small subplots):

```csv
plot,no,species,dbh_cm,rho_g_cm3
B-01,1,Rhizophora apiculata,7.8,0.87
B-01,2,Rhizophora apiculata,10.6,0.87
B-01,3,Rhizophora apiculata,12.9,0.87
B-01,4,Rhizophora apiculata,14.7,0.87
B-01,5,Rhizophora apiculata,16.2,0.87
B-01,6,Rhizophora apiculata,17.8,0.87
B-01,7,Rhizophora apiculata,20.0,0.87
B-01,8,Rhizophora mucronata,19.4,0.83
B-01,9,Rhizophora apiculata,21.3,0.87
B-01,10,Bruguiera gymnorrhiza,22.6,0.81
B-01,11,Rhizophora apiculata,24.1,0.87
B-01,12,Rhizophora mucronata,27.2,0.83
```

Standing dead tree of plot B-01 (class 3):

```csv
plot,id,class,d_base_cm,dbh_cm,height_m,rho_g_cm3
B-01,M1,3,24,20,5,0.69
```

Downed dead wood of plot B-01 (line intersect; QMD and specific gravity of medium wood from the Micronesian sample, KD Table 2):

```csv
class,transect_length_m,diameter_cm,pieces,qmd_cm,specific_gravity
large,24,9,1,,0.69
large,24,11,1,,0.69
large,24,8.5,1,,0.69
large,24,12,1,,0.69
medium,10,,5,4.52,0.71
```

Litter of plot B-01 (three 50 × 50 cm quadrats):

```csv
plot,quadrat,dry_weight_g,quadrat_area_m2
B-01,1,36,0.25
B-01,2,41,0.25
B-01,3,43,0.25
```

Summary of the eight plots (Mg C/ha; B-01 calculated from the data above, B-02 to B-08 illustrations):

```csv
plot,live_aboveground,roots,dead_down_litter
B-01,109.9,35.5,15.1
B-02,106.4,34.8,18.4
B-03,138.3,48.7,8.1
B-04,101.1,29.5,4.0
B-05,125.7,41.9,10.2
B-06,98.6,33.4,26.6
B-07,118.3,37.0,20.1
B-08,161.7,59.2,17.5
```

The five data blocks are copied into Excel or Google Sheets by splitting the columns on commas (see the Excel notes section). Numbers use a decimal point.

#### Results of plot B-01 (to check participants' calculations)

Biomass with the general Asia equation and roots with the Komiyama et al. equation; above carbon = 0.47 × B, root carbon = 0.39 × B root:

| No. | B above (kg) | C above (kg C) | B root (kg) | C root (kg C) |
| --- | --- | --- | --- | --- |
| 1 | 34.2 | 16.1 | 16.8 | 6.5 |
| 2 | 72.7 | 34.2 | 33.2 | 12.9 |
| 3 | 117.8 | 55.4 | 51.3 | 20.0 |
| 4 | 162.5 | 76.4 | 68.5 | 26.7 |
| 5 | 206.3 | 97.0 | 85.0 | 33.2 |
| 6 | 260.2 | 122.3 | 104.8 | 40.9 |
| 7 | 346.5 | 162.9 | 135.8 | 52.9 |
| 8 | 306.7 | 144.2 | 121.6 | 47.4 |
| 9 | 404.6 | 190.2 | 156.1 | 60.9 |
| 10 | 435.8 | 204.8 | 167.0 | 65.1 |
| 11 | 548.2 | 257.7 | 205.4 | 80.1 |
| 12 | 704.4 | 331.0 | 257.5 | 100.4 |
| Total | 3,599.8 | 1,691.9 | 1,403.0 | 547.2 |

The totals are calculated from unrounded numbers, so they can differ by up to 0.3 from the sum of the rounded columns. Tree number 7 is the sample tree of examples 1 and 3. Other components (each row already divided by the plot or transect area):

| Component | Result |
| --- | --- |
| Standing dead tree M1: V = 112,180 cm³; B = 77.4 kg; C = 38.7 kg C | 2.51 Mg C/ha |
| Large downed dead wood (example 7) | 7.42 Mg C/ha |
| Medium downed dead wood (example 7) | 4.47 Mg C/ha |
| Litter (example 8) | 0.72 Mg C/ha |
| Total dead + downed + litter | 15.1 Mg C/ha |

**Worked example 9: plot B-01 to hectares.**

1. Plot area = 3.1416 × 7² = 153.94 m².
2. Live tree carbon = 1,691.9 kg C; per m² = 1,691.9 ÷ 153.94 = 10.99 kg C/m².
3. Per hectare = 10.99 × 10 = 109.9 Mg C/ha.
4. Roots: 547.2 ÷ 153.94 × 10 = 35.5 Mg C/ha.
5. Standing dead tree: 38.7 ÷ 153.94 × 10 = 2.51 Mg C/ha.

**Worked example 10: stratum B mean and 95% interval** from the summary of eight plots (live aboveground trees):

1. Mean = 960.0 ÷ 8 = 120.0 Mg C/ha.
2. Standard deviation (s) = 21.4 Mg C/ha.
3. Standard error = s ÷ √n = 21.4 ÷ √8 = 7.57.
4. t (7 degrees of freedom, two-tailed, 95%) = 2.365.
5. Interval half-width = 2.365 × 7.57 = 17.9, rounded to 18.
6. Report: 120 ± 18 Mg C/ha (n = 8 plots, 95% confidence interval).

Results for the three vegetation pools:

| Pool | Mean | s | Standard error | t × standard error | Reported (Mg C/ha) |
| --- | --- | --- | --- | --- | --- |
| Live aboveground trees | 120.0 | 21.4 | 7.57 | 17.9 | 120 ± 18 |
| Roots | 40.0 | 9.70 | 3.43 | 8.1 | 40 ± 8 |
| Dead trees + downed dead wood + litter | 15.0 | 7.27 | 2.57 | 6.1 | 15 ± 6 |

These numbers are the same as the stratum B row in the Sample Forest table. The total of the three vegetation pools is 175 Mg C/ha. Module 10 combines the uncertainty with the square root of the sum of squares, √(18² + 8² + 6²) = 20.6, and adds the soil pool (Module 7). A note outside the books: if the interval is calculated directly from the sum of the three components per plot, the result is 26.0, larger because the three components are correlated across plots. Write down the method you use.

## Self-study exercises

Work with a calculator or Excel, then compare with the key. Problems 2, 3, and 5 use the Sample Forest data in section 8.4. Write the carbon factor, equation, and measurement point you use on the "Choices" sheet.

1. (Easy) An *Avicennia marina* tree has a diameter of 25 cm. Calculate its biomass and carbon with the species-specific equation (B = 0.1848 × D^2.3524, largest D 35.2 cm), then with the general Asia equation (ρ = 0.62). Carbon factor 0.47. What is the difference in carbon between the two equations?
2. (Easy to medium) For tree number 4 in plot B-01 (DBH 14.7 cm, ρ = 0.87) calculate aboveground biomass and carbon, root biomass and carbon, and the aboveground : belowground biomass ratio. Is the ratio within the range 2.0 to 3.0?
3. (Medium) A class 3 dead tree: base diameter 28 cm, DBH 24 cm, remaining height 5 m, ρ = 0.69 g/cm³. Calculate its carbon (kg C), then the carbon per hectare if it is the only dead tree in plot B-01 (153.94 m²).
4. (Medium) A 30 m line intersect crosses three sound large pieces of wood with diameters of 9, 13, and 16 cm (specific gravity 0.69). Calculate the volume (m³/ha), biomass (Mg/ha), and carbon (Mg C/ha).
5. (Harder) From the summary of eight plots in section 8.4, calculate the mean, standard deviation, standard error, and 95% interval half-width for root carbon. Repeat with only plots B-01 to B-07 (t for 6 degrees of freedom = 2.447). What changes, and what does it mean for the plot number decision (Module 6)?

#### Answer key

1. Species equation: B = 0.1848 × 25^2.3524 = 359.1 kg; C = 359.1 × 0.47 = 168.8 kg C. General Asia equation: B = 0.251 × 0.62 × 25^2.46 = 427.6 kg; C = 200.95 kg C. Difference 32.2 kg C, or 19.1% of the species-specific figure. Both equations meet the diameter range (25 < 35.2). Record the equation chosen.
2. B above = 0.251 × 0.87 × 14.7^2.46 = 162.5 kg; C above = 162.5 × 0.47 = 76.4 kg C. B root = 0.199 × 0.87^0.899 × 14.7^2.22 = 68.5 kg; C root = 68.5 × 0.39 = 26.7 kg C. Ratio = 162.5 ÷ 68.5 = 2.37, within the range 2.0 to 3.0.
3. d tip = 28 − 100 × 5 × (28 − 24) ÷ 130 = 28 − 15.38 = 12.62 cm. V = 3.1416 × 500 ÷ 12 × (784 + 159.1 + 353.2) ≈ 169,696 cm³ (calculated without intermediate rounding). B = 169,696 × 0.69 = 117,090 g = 117.1 kg. C = 117.1 × 0.50 = 58.5 kg C. Per hectare: 58.5 ÷ 153.94 × 10 = 3.80 Mg C/ha.
4. Σd² = 81 + 169 + 256 = 506. V = 9.8696 × 506 ÷ (8 × 30) = 20.81 m³/ha. B = 20.81 × 0.69 = 14.36 Mg/ha. C = 14.36 × 0.50 = 7.18 Mg C/ha.
5. Eight plots: mean 40.0; s = 9.70; standard error = 9.70 ÷ √8 = 3.43; half-width = 2.365 × 3.43 = 8.1, reported as 40 ± 8 Mg C/ha. Seven plots (B-01 to B-07): mean 37.3; s = 6.28; standard error = 2.37; t = 2.447; half-width = 5.8. The mean falls because plot B-08 (59.2), the highest, is dropped, and the interval narrows because the spread decreases, not because the data are better. Dropping a high plot without a field reason gives a biased result; a plot is dropped only when there is a methodological reason that is recorded.

## Find the error

The two short reports below look correct. Find the errors before opening the key.

**Report A.** "A *Rhizophora apiculata* tree 38 cm in diameter in plot B-05. Biomass was calculated with the Malaysian equation B = 0.1709 × D^2.516 as 1,612.4 kg. Because most of the carbon in a tree's body is in the wood, a factor of 0.39 was used. Carbon = 1,612.4 × 0.39 = 628.8 kg C."

**Report B.** "Plot B-01: live tree carbon 1,691.9 kg C on a plot of 153.9 m², so 1,691.9 ÷ 153.9 = 11.0 kg C/m² = 11.0 Mg C/ha. Root carbon of stratum B from eight plots: mean 40.0 and standard deviation 9.70, reported as 40 ± 10 Mg C/ha (95% confidence interval)."

#### Key

**Report A: two errors.**

1. The Malaysian equation was built from trees up to 30 cm (KD Table 3), whereas the tree is 38 cm, so it was used outside the diameter range. The Indonesian equation (largest D 40 cm) or the general Asia equation (49 cm) meets the range. With the general Asia equation and ρ = 0.87: B = 0.251 × 0.87 × 38^2.46 = 1,680.6 kg.
2. The factor 0.39 is the root factor. For aboveground stems use 0.47 (range 0.46 to 0.50): C = 1,680.6 × 0.47 = 789.9 kg C. The report's figure (628.8 kg C) is 20.4% low, almost entirely because of the factor 0.39 (0.39 ÷ 0.47 = 0.83). With the Indonesian equation the result is 614.2 kg and 288.7 kg C, far from both other numbers (see worked example 2); whatever is chosen, write it down.
3. How to detect it: compare the tree diameter with the "Largest D" column before calculating, and match the factor with the factor table per component.

**Report B: two errors.**

1. The conversion to hectares did not use the factor 10. 11.0 kg C/m² equals 110 Mg C/ha (precisely 10.99 × 10 = 109.9), not 11.0. Detection: the plot B-01 value is a tenth of the other plots (98.6 to 161.7) and of the stratum mean of 120.
2. The number after ± is the standard deviation (9.70), not the 95% interval half-width. The correct value is t × s ÷ √n = 2.365 × 9.70 ÷ √8 = 8.1, reported as 40 ± 8. Detection: for n = 8, the interval half-width is always 0.84 times the standard deviation (2.365 ÷ √8); a ± number almost equal to the standard deviation is suspect.

## The role of AI and example prompts

An AI assistant helps draft formulas, explain terms, and check calculation steps, but does not replace hand calculation and the numbers in the books. Every AI result is checked against one tree whose answer is already known (a 20 cm tree: 346.5 kg and 162.9 kg C aboveground; roots 135.8 kg and 52.9 kg C).

**Prompt 1: drafting Excel formulas.**

> My Excel table: column D = DBH (cm), column E = wood density (g/cm3), rows 2 to 13. Write formulas for aboveground biomass (kg) with B = 0.251 x rho x D^2.46, aboveground carbon (factor 0.47), root biomass with B = 0.199 x rho^0.899 x D^2.22, and root carbon. My Excel is in Indonesian, the argument separator is a semicolon. Explain the carbon factor you use for each formula.

Check: (a) fill in one row with D = 20 and ρ = 0.87; the results must be 346.5; 162.9; 135.8; 52.9. (b) Match the carbon factors with the factor table in section 8.2. (c) Display the formulas (Formulas > Show Formulas) and read them one by one.

**Prompt 2: explaining terms.**

> Explain the line intersect technique for downed dead wood in mangrove forest in five sentences, including when a piece of wood is not counted. Do not add numbers you are not sure of.

Check: compare with the recording rules in section 8.3 (the tape crosses the centre line, wood detached from the tree, up to 2 m from the ground). An answer that gives numbers for size classes or specific gravity must be matched against KD Table 2.

**Prompt 3: checking a calculation.**

> Check my calculation. Class 3 dead tree: d base 28 cm, DBH 24 cm, height 5 m, density 0.69 g/cm3. I got a carbon of 58.5 kg C. Rewrite each step with the intermediate numbers, do not just say whether it is right or wrong.

Check: calculate d tip (12.62 cm) and the volume (169,696 cm³) yourself, then compare step by step. If the AI says it is right without steps, ask for the steps.

**Example of an AI answer that can be wrong.** For prompt 1, the AI answers:

> Aboveground biomass: `=0.251*E2*D2^2.46`. Aboveground carbon: `=F2*0.47`. Root biomass: `=0.199*E2^0.899*D2^2.22`. Root carbon: `=H2*0.47`, because the factor 0.47 applies to wood biomass.

Aboveground biomass, aboveground carbon, and root biomass are correct. Root carbon is wrong: the root factor is 0.39 (KD 3.1.2). How to catch it: for a 20 cm tree this formula gives 135.8 × 0.47 = 63.8 kg C, while worked example 3 gives 52.9 kg C. The AI can also go wrong on the argument separator (comma or semicolon according to Excel's language) and on the decimal sign; check with the sample tree result.

## Excel notes: Mac and Windows

The formulas in the table are written with commas as argument separators and decimal points (English settings). In Indonesian-language Excel, function names and argument separators differ: a semicolon as separator, a comma as decimal, and some function names are translated (for example JUMLAH for SUM and RATA.RATA, or RATA2 in older versions, for AVERAGE). Use the fx button (Insert Function) to see function names in your language. Example: `=SUM(H2:H13)` becomes `=JUMLAH(H2:H13)`. Google Sheets follows the file's locale setting (File > Settings).

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Entering a csv block | Copy the block, click A1, paste with Cmd+V, then Data > Text to Columns > Delimited > Comma | Copy the block, click A1, Ctrl+V, then Data > Text to Columns > Delimited > Comma | Paste in A1, then Data > Split text to columns > Comma |
| If decimal numbers are read as text (left-aligned) | Edit > Find > Replace: replace . with , | Home > Find & Select > Replace: replace . with , | Edit > Find and replace (check File > Settings > Locale) |
| Aboveground biomass of one tree | `=0.251*E2*D2^2.46` | `=0.251*E2*D2^2.46` | `=0.251*E2*D2^2.46` |
| Carbon and roots | `=F2*0.47` ; `=0.199*E2^0.899*D2^2.22` ; `=H2*0.39` | same | same |
| Density from a species table | `=VLOOKUP(C2,Table!$A$2:$B$9,2,FALSE)` | same | same |
| Tip diameter of a dead tree | `=MAX(0,D2-100*F2*(D2-E2)/130)` | same | same |
| Plot area and conversion to ha | `=SUM(I2:I13)/(PI()*7^2)*10` | same | same |
| Mean and standard deviation | `=AVERAGE(B2:B9)` ; `=STDEV.S(B2:B9)` | same | same |
| Standard error | `=STDEV.S(B2:B9)/SQRT(COUNT(B2:B9))` | same | same |
| 95% two-tailed t | `=T.INV.2T(0.05,COUNT(B2:B9)-1)` (older version: TINV) | same | `=T.INV.2T(0.05,COUNT(B2:B9)-1)` |
| Interval half-width | t × standard error, with the t cell and the standard error cell | same | same |
| Rounding | `=ROUND(B10,0)` | `=ROUND(B10,0)` | `=ROUND(B10,0)` |
| Lock a cell in a formula | Type the dollar sign directly, e.g. `$B$2` | Type the dollar sign directly | Type the dollar sign directly |
| Display formulas for checking | Formulas > Show Formulas | Formulas > Show Formulas | View > Show > Formulas |

Note: the Analysis ToolPak is not needed. The confidence interval is calculated with the functions above.

## Weekly assignment

Submit the Excel or Google Sheets file "Vegetation_YourName" with four sheets: Choices, Trees_B01, Components_B01, Summary_B. This file is the "Vegetation" sheet of the workbook and is used in Module 10.

Pass criteria:

- [ ] The Choices sheet contains breast height (1.3 or 1.37 m), tree equation, seedling limit, source of wood density, carbon factors for live wood, roots, dead wood, and litter, each with a number and a book source.
- [ ] The Trees_B01 sheet contains 12 trees with columns for aboveground biomass, aboveground carbon, root biomass, and root carbon, all as formulas (not typed numbers).
- [ ] The diameter range check is recorded (all trees less than 49 cm).
- [ ] Plot B-01 totals: 3,599.8 kg aboveground biomass; 1,691.9 kg C aboveground; 547.2 kg C roots (largest difference 0.2).
- [ ] The aboveground : root biomass ratio of plot B-01 is calculated and lies in the range 2.0 to 3.0 (correct result: 2.57).
- [ ] The Components_B01 sheet contains dead tree M1 (2.51), large wood (7.42), medium wood (4.47), litter (0.72), total 15.1 Mg C/ha.
- [ ] The conversion to hectares uses a plot area of 153.94 m² and the factor 10: 109.9; 35.5; and 15.1 Mg C/ha for B-01.
- [ ] The Summary_B sheet calculates the mean, s, standard error, t (2.365), and interval half-width; results 120 ± 18, 40 ± 8, 15 ± 6 Mg C/ha.
- [ ] One paragraph (3 to 5 sentences) explains your choices for breast height and carbon factor, the differences between books, and the impact on the 346.5 kg tree figure.
- [ ] Exercises 1 to 5 are done and compared with the key (wrong answers are corrected, not deleted).

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0 to 5 | Opening: goals of the week, the output to be submitted | Module aspect table |
| 5 to 15 | Each participant states their choice of breast height and carbon factor, and the reason; discuss differences between books | Participants' Choices sheets, carbon factor table |
| 15 to 30 | Calculate trees number 7 and 12 of plot B-01 together (aboveground and roots), checking the diameter range | Trees_B01 sheet, calculator |
| 30 to 40 | Class 3 dead trees and line intersect: demonstration with a measuring tape or drawing, calculate example 7 | Measuring tape, drawing of wood crossings, section 8.3 |
| 40 to 50 | Find the error (Reports A and B) in pairs, then discuss the key | The Find the error section |
| 50 to 58 | Summary of eight plots: mean, standard error, t, interval; read the result 120 ± 18 | Summary_B sheet |
| 58 to 60 | Closing: unfinished questions, submitting the Vegetation sheet | Assignment checklist |

Sources: KD (Kauffman and Donato 2012, CIFOR Working Paper 86) chapters 2 and 3, Table 2, Table 3, Table 5; BC (Howard et al. 2014, *Coastal Blue Carbon*) chapter 4, Tables 4.1 and 4.2; H (Hogarth 2015) chapter 2 for carbon content. Numbers labeled "illustration" were designed for this course and are not from the books.

---
