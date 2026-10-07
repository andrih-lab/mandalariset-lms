# Module 5. Productivity and the fate of carbon

This module follows carbon after it is taken up by trees: how much becomes biomass, how much falls as litter, and where that dead material goes (decomposed, carried away, or buried). The end result is a simple carbon flow diagram containing numbers from the books, complete with notes on which numbers differ between books.

| Aspect | Details |
| --- | --- |
| Week | 2 (together with Modules 3 and 4) |
| Video | 3 short videos, 27 minutes in total (out of about 60 minutes of week 2 video) |
| Exercises and assignment | about 20 minutes of the 60 minutes of week 2 exercises |
| Live session | 60 minutes, shared with the other week 2 modules (see the last section) |
| Prerequisites | Modules 1 to 4; basic Excel or Google Sheets (formulas, multiplication, sums); powers and natural logarithms at calculator level |
| Tools | Excel or Google Sheets, a calculator, the e-course workbook |
| Reading | H chapter 8 (8.1.2 to 8.1.5) and chapter 9 (9.4 to 9.6); BC chapter 5 for notes on lateral carbon flow |
| Output of the week | The "Flow" sheet in the workbook: a simple carbon flow diagram in the form of a table of inputs, storage, and outputs |

## Learning objectives

After this module participants are able to:

1. State the range of mangrove forest biomass and its split above and below ground, then convert dry-weight biomass into carbon with a stated factor.
2. Calculate net primary production (NPP) from its three components, and convert litterfall results from g/m² to tonnes/ha.
3. Distinguish the four fates of dead material (destroyed by animals, decomposed by microbes, carried away, buried) and calculate the remaining material at a given time from the decomposition half-life.
4. Build a simple carbon budget (inputs, storage, outputs) from book numbers, calculate the unexplained difference, and name what has not been measured.
5. Find a book number that is inconsistent (the accumulation rates of 22.6 and 13.8 t/ha/year in H) and write which number is used and why.
6. Explain why carbon that leaves laterally with water is not captured by the stock measurements in Modules 7 to 10.

## Video plan

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 5.1 | Biomass and carbon in the tree | 9 | Biomass range by latitude; aboveground and belowground split; conversion factor to carbon; Sample Forest stratum B example |
| 5.2 | Net primary production and litter | 9 | GPP, respiration, NPP; the three-component formula; litter traps and g/m² to t/ha conversion; H's range of numbers |
| 5.3 | The fate of carbon: decomposed, buried, carried away | 9 | Four fates of dead material; half-life of leaves and roots; the role of crabs; simple budget; outwelling; the tenfold difference in accumulation rate |

Total 27 minutes.

## Content

### 5.1 Biomass and carbon in the tree

Mangrove forest biomass is greatest near the equator and decreases toward high latitudes. Undisturbed Rhizophora forest in northern Australia can reach 700 tonnes dry weight per hectare; in old forest, 300 to 500 tonnes per hectare is more common. Dwarf mangrove in Florida has only about 7.9 tonnes per hectare (H 8.1.2). The book states that 300 to 500 tonnes of dry weight is equivalent to 150 to 250 tonnes of carbon per hectare, which implies a factor of 0.50.

Aboveground biomass divides into leaves 3 to 5%, branches 10 to 20%, main trunk 60 to 90%, and aerial roots 8 to 25% (H 8.1.2). Mangroves put more biomass belowground than tropical upland trees: 30 to 50% of total biomass in Rhizophora and 50 to 60% in Avicennia (H 8.1.2). Most fine roots in the soil are already dead and decompose very slowly (0.06 to 0.34% per day), so they accumulate and become mangrove peat material (H 8.1.3).

**Differences between books that need to be recorded.** The biomass carbon factor is not the same in the three books. KD and BC use 0.46 to 0.50 for wood and 0.39 for roots (the formula sheet). H gives 40 to 45% of tissue dry weight. In addition, the formula sheet lists an aboveground : belowground biomass ratio of 2.0 to 3.0 for mangroves (BC), which means 25 to 33% belowground, whereas H writes 30 to 50% for Rhizophora. Write the factor and range you use in the methods section, and do not change them midway through the work.

**Worked example 1: dry biomass equivalent to stand carbon (numbers from the books)**

The biomass of an old stand of 400 tonnes dry weight per hectare is converted into carbon with four factors:

| Factor | Source | Carbon (t C/ha) |
| --- | --- | --- |
| 0.40 | H lower bound | 160 |
| 0.45 | H upper bound | 180 |
| 0.46 | KD and BC lower bound | 184 |
| 0.50 | KD and BC upper bound | 200 |

The formula:

```latex
C = B \times f_C
```

where B is dry-weight biomass (t/ha) and f_C is the carbon factor. The choice of factor changes the result by up to 40 t C/ha (25%) for the same biomass, so the factor must be stated.

**Worked example 2: Sample Forest stratum B (illustration)**

Stratum B has live aboveground trees of 120 Mg C/ha and roots of 40 Mg C/ha. The steps:

1. Total living carbon = 120 + 40 = 160 Mg C/ha.
2. Ratio aboveground : belowground = 120 ÷ 40 = 3.0, right at the upper limit of the range 2.0 to 3.0 (BC). Share belowground = 40 ÷ 160 = 25%.
3. Equivalent dry biomass: 120 ÷ 0.50 = 240 tonnes, and 40 ÷ 0.39 = 102.6 tonnes, a total of 342.6 t/ha. With a factor of 0.46 for the aboveground part, 120 ÷ 0.46 = 260.9 tonnes, a total of 363.4 t/ha.
4. Both numbers (343 to 363 t/ha) are within the range of 300 to 500 t/ha for old forest (H 8.1.2).

The tree and root carbon of stratum B (160 Mg C/ha) is only a small part of its total stock (670 Mg C/ha); the rest is mainly soil (495 Mg C/ha). That is why material that dies and is buried, discussed in 5.3, determines the long-term stock.

### 5.2 Net primary production and litter

Net primary production (NPP) is gross photosynthesis minus the tree's respiration, and NPP is what becomes the raw material for all other organisms in the ecosystem (H 8.1.3). Root respiration is almost impossible to measure, so NPP is calculated from biomass increment, plus the material that falls, plus the part eaten by animals (H 8.1.3):

```latex
NPP = \Delta B + L + H
```

where ΔB is the increment in tree biomass, L is litter (leaves, twigs, branches, flowers, fruit, propagules, and dead trees if counted per area), and H is the part eaten by animals. In a forest in equilibrium, ΔB is close to zero and the losses from dead trees and fallen material balance production, so litter becomes the most decisive component (H 8.1.3).

Litter is measured with traps under the canopy. The traps must be high enough not to be swept by the tide or eaten by crabs, emptied often so little decomposes, and left long enough to capture the seasons. Numbers from the books:

| Quantity | Value | Reference |
| --- | --- | --- |
| General litterfall | 5 to 15 tonnes/ha/year | H 8.1.3 |
| Dwarf mangrove litterfall | about 2.9 tonnes/ha/year | H 8.1.3 |
| Aboveground NPP, Rhizophora | 8.1 to 26.7 tonnes/ha/year | H 8.1.3 (Komiyama et al. 2008) |
| Aboveground NPP, Avicennia | 3.99 to 24.6 tonnes/ha/year | H 8.1.3 |
| NPP if belowground parts are counted | possibly double | H 8.1.3 |
| Wood | 20 to 50% of NPP | H 8.1.4.3 |

NPP and biomass both decline toward high latitudes, but not proportionally: the ratio of litter to biomass actually rises with latitude and is larger in small trees (H 8.1.3).

**Units.** Trap results are usually in g/m², whereas the book uses t/ha. One hectare = 10,000 m² and one tonne = 1,000,000 g, so:

```latex
1\ \mathrm{g/m^2} = 0.01\ \mathrm{tonnes/ha}
```

**Worked example 3: from litter traps to t C/ha/year (illustration)**

Six traps of 0.5 m² each are emptied every 14 days. The mean dry content per trap is 16.8 g.

1. Per m² per collection: 16.8 ÷ 0.5 = 33.6 g/m².
2. Per day: 33.6 ÷ 14 = 2.4 g/m²/day.
3. Per year: 2.4 × 365 = 876 g/m²/year.
4. To t/ha: 876 × 0.01 = 8.76 tonnes dry weight/ha/year. This value is within the range of 5 to 15 t/ha/year (H 8.1.3).
5. To carbon with the litter factor 0.45 (formula sheet): 8.76 × 0.45 = 3.94 t C/ha/year.

**Worked example 4: NPP from three components (illustration)**

An invented Rhizophora stand has ΔB = 8.0, litter = 9.0, and the part eaten by animals = 0.7 (all in tonnes dry weight/ha/year).

1. NPP = 8.0 + 9.0 + 0.7 = 17.7 t/ha/year. This value is within the range of 8.1 to 26.7 for Rhizophora (H 8.1.3).
2. Litter = 9.0 ÷ 17.7 = 50.8% of NPP.
3. In carbon with a factor of 0.46: 17.7 × 0.46 = 8.14 t C/ha/year.

Note: litter from traps represents only the aboveground part. Root turnover is not captured, and total NPP can be up to double (H 8.1.3).

### 5.3 The fate of carbon: decomposed, buried, carried away

Dead material shed by the tree (leaves, twigs, wood, roots, propagules; called necromass) has four fates: destroyed by animals such as crabs, decomposed by microbes, carried away by the tide or river flow, or buried in the mud (H 8.1.4). The share of each depends on the position of the forest. In low parts of the coast, the tide quickly carries litter away; in higher parts, crabs and microbes play a larger role.

**Leaves.** In the first 10 to 14 days, leaf weight falls mainly because soluble substances are leached out by water, not because microbes eat it; about 30 to 50% of leaf organic matter can be lost this way. The time until leaf weight is halved (half-life) in the Matang forest, Malaysia: 15 days for Sonneratia alba, 34 days for Rhizophora mucronata, 43 days for R. apiculata, and 70 days for Bruguiera parviflora (H 8.1.4.1).

**Crabs.** Sesarmid crabs eat 19 to 100% of the litter on the forest floor. Crabs drag leaves into burrows so they are not swept away by the tide, and chop tough leaves into fine particles that microbes decompose more easily. The presence of crabs speeds up litter decomposition by up to two orders of magnitude, that is up to 100 times (H 8.1.4.2).

**Wood and roots.** A fallen trunk loses half its weight in 2 years if boring shipworms (teredinids) are present, and only about 5% if they are absent (H 8.1.4.3). In 270 days, Avicennia fibrous roots lose 15% of their weight and the main roots 60% (H 8.1.4.3). Dead roots accumulate faster than they decompose, and that is the origin of mangrove peat.

**Worked example 5: leaf remaining after 30 days (half-life numbers from the book; the exponential decay assumption is outside the book)**

If decomposition is assumed to proceed at a constant rate per day, the fraction remaining after time t is:

```latex
S(t) = 0.5^{\,t / t_{1/2}}
```

For t = 30 days:

| Species | Half-life (days) | Remaining after 30 days | Lost |
| --- | --- | --- | --- |
| Sonneratia alba | 15 | 0.5^(30/15) = 0.250 | 75.0% |
| Rhizophora mucronata | 34 | 0.5^(30/34) = 0.542 | 45.8% |
| Rhizophora apiculata | 43 | 0.5^(30/43) = 0.617 | 38.3% |
| Bruguiera parviflora | 70 | 0.5^(30/70) = 0.743 | 25.7% |

This assumption is only a rough estimate, because the decline in the first 10 to 14 days is dominated by leaching and not a constant rate. For comparison, dead roots decompose at 0.06 to 0.34% per day (H 8.1.3). If those numbers are read as an exponential rate per day, the half-life is ln 2 ÷ 0.0034 = 204 days to ln 2 ÷ 0.0006 = 1,155 days (3.2 years), far slower than leaves at 15 to 70 days. This difference explains why root carbon is buried and leaf carbon is not.

**Carbon carried away.** An older hypothesis (outwelling) holds that mangroves send a lot of organic matter to the sea as food for offshore fisheries. Measurements show a more limited picture (H 8.1.5, 9.5):

- The exchange of organic carbon (POC + DOC) between mangroves and their surroundings ranges from balanced to net export; the global mean is about 6.8 kg C/ha/day, roughly half POC and half DOC (Bouillon and Connolly 2009). This is only 20% of NPP.
- Dissolved inorganic carbon (DIC, mainly CO₂ dissolved in water and groundwater) may be ten times larger and is rarely measured. Example from Australia: DIC about 3 g C/m²/day, DOC about 0.3 g C/m²/day (Maher et al. 2013, cited in H 8.1.5). The figure of 3 g C/m²/day equals 30 kg C/ha/day or 10.95 t C/ha/year, which is 10 times the DOC in that example but only 4.4 times the global mean of POC + DOC (6.8 kg C/ha/day). The phrase "ten times" in H depends on the comparison.
- Soil microbial respiration is about 5.56 tonnes C/ha/year (Komiyama et al. 2008, H 8.1.5).
- Material carried away generally travels only a few hundred metres or a few kilometres from the forest (H 9.4).

As a tracer, the δ¹³C value of mangrove material ranges from −24 to −30‰, far lower than seagrass (H 9.6).

BC chapter 5 notes that lateral carbon flows are not captured by gas measurements at the surface, so the carbon flux between atmosphere and soil surface is not necessarily the same as the change in wetland carbon stock.

**A simple carbon flow diagram: table of inputs, storage, outputs**

The following table brings together H's numbers for tropical mangrove forest. Stock and rate numbers come from Figure 8.6 (Robertson et al. 1992, cited in H) unless stated otherwise. Figure 8.6 deliberately ignores belowground biomass and flows and DIC (H 8.1.5), so this budget does not close.

| Group | Component | Value | Unit | Reference |
| --- | --- | --- | --- | --- |
| Input | Aboveground NPP | 14 | t C/ha/year | H Figure 8.6 |
| Storage (stock) | Aboveground biomass | 190 | t C/ha | H Figure 8.6 |
| Storage (stock) | Downed wood | 1.9 | t C/ha | H Figure 8.6 |
| Storage (stock) | Bacterial biomass | 2.1 | t C/ha | H Figure 8.6 |
| Storage (stock) | Particulate organic matter (POC) | 102.5 | t C/ha | H Figure 8.6 |
| Storage (rate) | Buried in sediment | 1.5 | t C/ha/year | H 8.1.4.4 (Malaysian forest; about 10% of production) |
| Output | Litter carried away | 2.7 | t C/ha/year | H Figure 8.6 |
| Output | POC carried away | 0.6 | t C/ha/year | H Figure 8.6 |
| Output | Soil respiration | 5.56 | t C/ha/year | H 8.1.5 (Komiyama et al. 2008) |
| Output | DIC | not in Figure 8.6 |  | H 8.1.5 |

Copy the following data into Excel or Google Sheets (split the columns with Data > Text to Columns if needed):

```csv
group,component,value,unit,reference
input,aboveground NPP,14,t C/ha/year,H Figure 8.6
stock,aboveground biomass,190,t C/ha,H Figure 8.6
stock,downed wood,1.9,t C/ha,H Figure 8.6
stock,bacterial biomass,2.1,t C/ha,H Figure 8.6
stock,POC,102.5,t C/ha,H Figure 8.6
storage rate,buried in sediment,1.5,t C/ha/year,H 8.1.4.4
output,litter carried away,2.7,t C/ha/year,H Figure 8.6
output,POC carried away,0.6,t C/ha/year,H Figure 8.6
output,soil respiration,5.56,t C/ha/year,H 8.1.5
```

**Worked example 6: a simple budget and its difference (numbers from the books)**

1. Litterfall = 3.4 t C/ha/year (Figure 8.6). Litter carried away 2.7 plus what is dragged by crabs 0.7 = 3.4; the total matches.
2. Organic export = litter 2.7 + POC 0.6 = 3.3 t C/ha/year, or 3.3 × 1,000 ÷ 365 = 9.04 kg C/ha/day. Its share is 3.3 ÷ 14 = 23.6% of NPP, close to 20% and the global mean of 6.8 kg C/ha/day.
3. The global mean of 6.8 kg C/ha/day × 365 ÷ 1,000 = 2.482 t C/ha/year. If this is 20% of NPP, the NPP is 2.482 ÷ 0.20 = 12.4 t C/ha/year, not far from 14.
4. Burial in sediment = 1.5 ÷ 14 = 10.7% of NPP, consistent with "about 10%" (H 8.1.4.4).
5. Measured outputs and burial = 2.7 + 0.6 + 5.56 + 1.5 = 10.36 t C/ha/year.
6. Unexplained difference = 14 − 10.36 = 3.64 t C/ha/year (26% of NPP).

The difference of 3.64 is not a calculation error. This budget combines numbers from different studies (Figure 8.6, the Malaysian forest, and Komiyama et al.), and DIC, tree respiration, and belowground flows are not included. Participants write these limitations on the Flow sheet.

**The tenfold difference in carbon accumulation rate.** In chapter 12, H writes that the mean carbon accumulation rate is "22.6 t/ha/year" for mangroves and 13.8 for seagrass (McLeod et al. 2011). That number appears to be ten times too large (the formula sheet). The check using the book's own numbers:

1. Compare with NPP: 22.6 ÷ 14 = 1.61, that is burial of 161% of NPP in Figure 8.6. Burial cannot exceed production.
2. Compare with Malaysian burial: 1.5 t C/ha/year (H 8.1.4.4). The figure of 22.6 is 15 times that.
3. Calculate how long it takes to fill the soil of Sample Forest stratum B (illustration, rate assumed constant): 495 ÷ 22.6 = 21.9 years, far too fast for soil that according to H accumulates over thousands of years in many forests (H chapter 12); with 1.5 the result is 495 ÷ 1.5 = 330 years.
4. Outside the books: the commonly quoted McLeod et al. (2011) value is 226 g C/m²/year for mangrove and 138 for seagrass. With 1 g/m² = 0.01 tonnes/ha, that is 2.26 and 1.38 t C/ha/year, exactly one-tenth of H's numbers. Check the original paper before quoting.

Participants write on the Flow sheet which accumulation rate number they use and why. Also note that H does not state the unit of that number (tonnes of carbon or tonnes of CO₂e).

## Self-study exercises

Work in Excel or Google Sheets, then compare with the key. Numbers labeled "illustration" were made up for practice.

1. **Litter traps (basic, illustration).** The mean dry litter in the traps is 3.0 g/m²/day. Calculate tonnes dry weight/ha/year and t C/ha/year (litter factor 0.45). Is the result within the range of general litterfall in H?
2. **NPP (basic, illustration).** Biomass increment 5.5, litter 6.2, and the part eaten by animals 0.4 (tonnes dry weight/ha/year). Calculate NPP, the litter share, and NPP in carbon with a factor of 0.46.
3. **Sample Forest (intermediate).** From the Sample Forest stock table, calculate for each stratum the living carbon (aboveground trees + roots), the aboveground : belowground ratio, and the share belowground (%). Also calculate living carbon for each stratum and for the whole site (Mg C), and the percent of the site total of 331,620 Mg C. Is the ratio of each stratum within the range 2.0 to 3.0 (BC)?
4. **Leaf decomposition (intermediate).** The half-life of R. apiculata leaves is 43 days (H 8.1.4.1). Assuming exponential decay, calculate the leaf remaining after 60 days and the time until 10% is left.
5. **Budget and number differences (harder).** (a) Convert 6.8 kg C/ha/day to t C/ha/year. (b) If this is 20% of NPP, what is the implied NPP? (c) How many years are needed to bury 495 Mg C/ha (stratum B soil, illustration) at a rate of 1.5 t C/ha/year? (d) Write one sentence: which accumulation rate number do you use (1.5 or 22.6), and why.

**Answer key**

1. 3.0 × 365 = 1,095 g/m²/year; × 0.01 = 10.95 tonnes dry weight/ha/year; × 0.45 = 4.93 t C/ha/year. The value 10.95 is within the range of 5 to 15 t/ha/year (H 8.1.3).
2. NPP = 5.5 + 6.2 + 0.4 = 12.1 t/ha/year. Litter = 6.2 ÷ 12.1 = 51.2%. Carbon = 12.1 × 0.46 = 5.57 t C/ha/year.
3. Living carbon: A = 70 + 25 = 95; B = 120 + 40 = 160; C = 95 + 30 = 125 Mg C/ha. Ratio: A 70 ÷ 25 = 2.8; B 120 ÷ 40 = 3.0; C 95 ÷ 30 = 3.17. Share belowground: A 26.3%; B 25.0%; C 24.0%. Site: A 95 × 180 = 17,100; B 160 × 264 = 42,240; C 125 × 120 = 15,000; total 74,340 Mg C = 22.4% of 331,620. The ratios of A and B are within the range; C is slightly above 3.0, so note it and check the field data rather than immediately assuming it is wrong. The share belowground (24 to 26%) is also below the range of 30 to 50% for Rhizophora in H; this is an example of a difference between books that must be stated.
4. Remaining = 0.5^(60/43) = 0.380 (38.0%). Time to 10%: 43 × log₂(10) = 43 × 3.32 = 142.8, so about 143 days.
5. (a) 6.8 × 365 ÷ 1,000 = 2.482 t C/ha/year. (b) 2.482 ÷ 0.20 = 12.4 t C/ha/year. (c) 495 ÷ 1.5 = 330 years. (d) A good answer uses 1.5 (H 8.1.4.4) and states that 22.6 exceeds the NPP of 14 in Figure 8.6 and appears ten times too large; outside the books, the McLeod et al. 2011 value is 2.26 t C/ha/year, which needs checking against the original source.

## Find the error

The two short reports below look tidy but contain errors. Find and correct them before opening the key.

**Report A.** "Using H's numbers, aboveground NPP of tropical mangrove forest is 14 t C/ha/year. Organic carbon export is about 20% of NPP, that is 2.8 t C/ha/year. The rest, 80% or 11.2 t C/ha/year, is buried in the soil. In CO₂e, 11.2 × 3.67 = 41.1 Mg CO₂e/ha/year. At this rate, the soil of stratum B containing 495 Mg C/ha forms in 495 ÷ 11.2 = 44 years."

**Report B.** "The mean litter from the traps is 2.4 g/m²/day. In a year 2.4 × 365 = 876 g/m², or 876 × 0.1 = 87.6 tonnes dry weight/ha. Litter carbon = 87.6 × 0.50 = 43.8 t C/ha/year."

**Key**

- Report A, the error: the entire remainder of NPP is assumed to be buried. The remainder of NPP is also lost as respiration (soil alone about 5.56 t C/ha/year, H 8.1.5), part is carried away as DIC that has not been measured, and sediment burial is only 1.5 t C/ha/year or about 10% of production (H 8.1.4.4). The correct numbers follow H: 1.5 × 3.67 = 5.5 Mg CO₂e/ha/year, not 41.1; and 495 ÷ 1.5 = 330 years, not 44. How to detect it: a budget that does not list respiration and DIC does not close, and 80% is far from the 10% written in H. The factor 3.67 is correct.
- Report B, first error: the conversion from g/m² to t/ha used 0.1, whereas 1 g/m² = 0.01 t/ha; the correct figure is 8.76 tonnes dry weight/ha/year. Second error: the litter carbon factor is 0.45 (formula sheet), not 0.50 which is for dead wood; the correct carbon is 8.76 × 0.45 = 3.94 t C/ha/year, not 43.8. How to detect it: 87.6 t/ha/year is far above the range of 5 to 15 t/ha/year (H 8.1.3); recalculate with units: 10,000 m²/ha ÷ 1,000,000 g/tonne = 0.01.

## The role of AI and example prompts

AI is useful for drafting spreadsheet formulas, explaining terms, and checking the order of calculations. AI must not be a source of numbers: every carbon number must be found in the books or calculated yourself.

**Prompt 1: drafting Excel formulas**

```markdown
I use Excel for Mac in Indonesian. Column B contains the dry content (grams) of litter traps of 0.5 m2 emptied every 14 days. Write formulas to convert the mean of column B into tonnes dry weight per hectare per year, then into tonnes C per hectare per year with a factor of 0.45. Write the unit at each step and write the function names in Indonesian.
```

Check: (1) calculate by hand using the numbers from example 3 (a mean of 16.8 g must give 8.76 t/ha/year and 3.94 t C/ha/year); (2) make sure the result is in the range of 5 to 15 t/ha/year (H 8.1.3); (3) check that the factor 0.01 appears, not 0.1 or 10.

**Prompt 2: explaining terms**

```markdown
Explain the difference between POC, DOC, and DIC in mangrove carbon in five sentences. Give one example number from Hogarth's book (The Biology of Mangroves and Seagrasses, 3rd edition) and name the chapter or section. Say if you are not sure.
```

Check: open the section named (for example H 8.1.5 or 9.5) and look for the number. Numbers not found in the book are crossed out, and the section named must really contain that number.

**Prompt 3: checking a budget calculation**

```markdown
Here are the steps of my carbon budget, in t C/ha/year: NPP 14; litter export 2.7; POC export 0.6; soil respiration 5.56; sediment burial 1.5. Check the sum and units, name components that may not yet be counted, and do not change the source numbers.
```

Check: add them up yourself (2.7 + 0.6 + 5.56 + 1.5 = 10.36; difference 3.64). If the AI gives another number, find the step that differs and follow the hand calculation.

**Example of an AI answer that can be wrong**

> "According to Hogarth, mangroves bury an average of 22.6 t C/ha/year. At this rate, the soil of stratum B containing 495 Mg C/ha forms in about 22 years."

This answer quotes the book's number correctly but repeats a number that appears ten times too large, and calls it "t C" although the book does not state the unit. How to catch it: compare with the NPP of 14 t C/ha/year in Figure 8.6 (22.6 exceeds NPP), compare with 1.5 t C/ha/year in H 8.1.4.4, and read the note on differences between books in section 5.3. Participants ask the AI to show the original sentence in the book, then compare it with the formula sheet.

## Excel notes: Mac and Windows

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Sum cells | =SUM(B2:B7), or Cmd+Shift+T (AutoSum) | =SUM(B2:B7), or Alt+= (AutoSum) | =SUM(B2:B7) |
| Mean | =AVERAGE(B2:B7) | =AVERAGE(B2:B7) | =AVERAGE(B2:B7) |
| g/m² to t/ha | =B2*0.01 | =B2*0.01 | =B2*0.01 |
| Remaining material after t days | =0.5^(30/B2) | =0.5^(30/B2) | =0.5^(30/B2) |
| Time until 10% is left | =B2*LOG(10,2) | =B2*LOG(10,2) | =B2*LOG(10,2) |
| Lock a referenced cell | Cmd+T while editing the formula, or type the $ sign directly | F4 while editing the formula, or type the $ sign directly | type the $ sign directly |
| Percent format | Ctrl+Shift+% | Ctrl+Shift+% | Format > Number > Percent |
| Range check | =IF(B2<5,"check",IF(B2>15,"check","within range")) | same | same |
| Split pasted csv data | Data > Text to Columns | Data > Text to Columns | Data > Split text to columns |

In Indonesian-language Excel, function names and separators differ: SUM becomes JUMLAH, AVERAGE becomes RATA.RATA (RATA2 in older versions), IF becomes JIKA, arguments are separated by semicolons (;), and the decimal uses a comma (=B2*0,01). Formulas in the table are written with comma separators and decimal points. If another function name (for example LOG) is not recognized, find it with Formulas > Insert Function. Numbers from the csv block written with a decimal point may be read as text under Indonesian settings; replace the point with a comma if needed.

## Weekly assignment

Fill in the "Flow" sheet in the workbook. The assignment passes when all of the following items are met.

- [ ] The table of inputs, storage, and outputs contains all rows of the table in 5.3, each with a value, unit, and reference (chapter or figure and book name).
- [ ] The sum of outputs and burial is calculated with a formula, not typed in, and the result is 10.36 t C/ha/year with a difference of 3.64 from NPP of 14.
- [ ] The percent of organic export (23.6%) and sediment burial (10.7%) are calculated relative to NPP.
- [ ] One sentence states the accumulation rate used (1.5 or 22.6 t/ha/year) with the reason.
- [ ] The biomass carbon factor used is written down, with a note on the difference between books (0.46 to 0.50 in KD and BC; 0.40 to 0.45 in H).
- [ ] Three things not measured in the budget are written down (DIC, belowground part, lateral flows according to BC chapter 5).
- [ ] A sketch of arrows from inputs to storage and outputs contains the same numbers as the table.
- [ ] All units are consistent (t C/ha/year for rates, t C/ha for stocks), and invented numbers are labeled "illustration".
- [ ] Exercises 1 to 5 are answered, and the two reports in "Find the error" have been corrected.

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0 to 5 | Opening: three quick questions (biomass range, NPP formula, four fates of dead material) | Questions on screen |
| 5 to 15 | Participants show their answers to exercises 1 and 2; discuss the g/m² to t/ha conversion | Workbook, exercise key |
| 15 to 25 | Practice: copy the budget csv block, calculate the output total and the difference of 3.64 | Csv block in 5.3, Excel or Sheets |
| 25 to 40 | Discussion of differences between books: rates of 22.6 and 1.5, carbon factors 0.46 to 0.50 and 0.40 to 0.45; each participant writes the number they choose | Formula sheet, H 8.1.4.4 and chapter 12 |
| 40 to 50 | In pairs: correct reports A and B in "Find the error" | Report text |
| 50 to 60 | Review the Flow sheet, Q&A, introduction to Module 6 | Participants' Flow sheets |

If the week 2 session is shared with Modules 3 and 4, take rows 5 to 25 and 40 to 50 (about 30 minutes) and the rest is done by participants independently.

Sources: Hogarth (2015), The Biology of Mangroves and Seagrasses, 3rd edition (H), chapter 8 (8.1.2 to 8.1.5), chapter 9 (9.4 to 9.6), and chapter 12; Howard et al. (2014), Coastal Blue Carbon (BC), chapter 5; Kauffman and Donato (2012), CIFOR Working Paper 86 (KD); the shared formula sheet for carbon factors and differences between books. The McLeod et al. (2011) value is outside the books and needs checking against the original paper. Numbers labeled "illustration" were made up for practice.

---
