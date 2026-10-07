# Module 2. Mangrove biology

## Module overview

Module 2 explains how mangroves survive in salty mud with almost no oxygen, and then uses that explanation to answer one calculation question: why the carbon in the soil of the Sample Forest is far greater than the carbon in its trees. This module is biological, so the calculations are simple (percentages, ratios, and parts of a total), and nearly all of its numbers come from Hogarth (H) and Kauffman & Donato (KD). Soil carbon and tree carbon are calculated from the Sample Forest table, which consists of illustrative numbers.

| Aspect | Details |
| --- | --- |
| Week | 1 (together with Module 1) |
| Study time | Video 30 minutes (3 videos), exercises and assignment 60 minutes, live session 60 minutes |
| Prerequisites | Module 1 (the four carbon pools, why coastal soil stores a lot of carbon); basic Excel or Google Sheets |
| Tools | Excel or Google Sheets, a calculator |
| Output of the week | The "Soil vs trees" sheet in the workbook: a one-page answer on why soil carbon can be greater than tree carbon, using the Sample Forest table |

## Learning objectives

After completing this module, participants are able to:

1. Explain why mangrove soil contains no oxygen, and name three forms of aerial roots together with example genera.
2. Distinguish three ways mangroves handle salt (excluding it at the roots, storing it in vacuoles, excreting it through leaves or bark) and calculate the share of salt that gets through from the filtration percentage.
3. Explain why tolerating salt and flooding takes a lot of energy, and how this explains the limits of mangrove distribution in the tropics.
4. Distinguish vivipary, cryptovivipary, and ordinary seeds, and state the consequences for restoration.
5. Calculate the ratio of soil carbon to tree carbon and the soil share of the total per stratum and for the whole Sample Forest.
6. Write a one-page explanation that connects those numbers to the properties of oxygen-free soil, roots, and sediment accumulation.

## Video plan

Total duration 30 minutes, in line with the week 1 budget (Modules 1 and 2 each get 30 minutes).

| No. | Title | Duration (minutes) | Content |
| --- | --- | --- | --- |
| 2.1 | Mangroves, distribution, and oxygen-free soil | 11 | What true mangroves are and where they come from; temperature limits and world area; redox potential; prop roots, knee roots, pneumatophores; lenticels and aerenchyma |
| 2.2 | Salt, the cost of survival, nutrients, and the tropical limit | 10 | Three ways of handling salt; the trade-off between salt tolerance and fast growth; nutrients and nutrient resorption; why mangroves occur only in the tropics |
| 2.3 | Vivipary and the bridge to soil carbon | 9 | Vivipary, cryptovivipary, ordinary seeds; propagule dispersal; the chain of biological reasons that makes soil carbon greater than tree carbon; the Sample Forest calculation |

## Content

### 2.1 Mangroves, distribution, and oxygen-free soil

Mangroves are woody trees and shrubs that grow in flooded and salty habitats. There are about 70 true mangrove species in 28 genera and 20 families. These families are not closely related: according to Hogarth, the ability to live as a mangrove arose independently at least 16 times. The similarity in form among species comes from adaptation to the same environment. Of the 47 species that make up the main mangrove forest, 38 come from Avicenniaceae and Rhizophoraceae (H 1.1).

Mangrove distribution is limited by temperature. Mangroves are almost absent from waters whose winter sea temperature falls below 20 °C and they cannot tolerate frost. The southernmost point is Corner Inlet, Victoria, Australia (38°45′ S), with *Avicennia marina* (H 1.1, 2.6). The world mangrove area is estimated at 110,000 to 240,000 km², with a best estimate of 152,308 km² (2005 data). Almost 23% is in Indonesia, and Indonesia, Brazil, Australia, and Mexico together hold about 42% (KD chapter 1). The Indo-West Pacific region has 61 species in 23 genera, while the Atlantic, Caribbean, and East Pacific region has only 12 species in 8 genera (H 10.2).

**Oxygen-free soil.** Roots need oxygen. In ordinary soil oxygen enters through air spaces, but in mangrove soil those spaces are filled with water. Oxygen moves through water roughly 10,000 times more slowly than through air, and what remains is used up by bacteria, so the soil becomes anoxic (H 2.1). Oxygen level is measured by redox potential. Oxygenated soil has a value above +300 mV, while anoxic mangrove soil has −200 mV or lower. The lower the value, the different the reactions bacteria use:

| Redox potential | Reaction in the soil |
| --- | --- |
| +200 to +300 mV | Nitrate becomes nitrogen gas |
| +100 to +200 mV | Fe³⁺ becomes Fe²⁺; iron and phosphate become soluble and can be taken up by roots |
| −100 to −200 mV | Sulfate becomes toxic sulfide; CO₂ becomes methane; the source of the smell of mangrove mud |

**Aerial roots.** Mangroves bring air to their roots through parts that stand above the mud:

- Prop roots in *Rhizophora*: grow from the trunk or branches, up to 2 m above the ground. Prop roots can reach 24% of the aboveground tree biomass.
- Knee roots in *Bruguiera* and *Xylocarpus*: horizontal roots that occasionally rise up and then go back into the soil.
- Pneumatophores in *Avicennia* and *Sonneratia*: upright projections up to 30 cm tall, up to 3 m in *Sonneratia*. A single *Avicennia* tree 2 to 3 m tall can have more than 10,000 pneumatophores.

Air enters through lenticels (pores in the root bark) and flows through aerenchyma (hollow tissue) to the submerged roots; in those roots more than half the volume can be air space. The function of pneumatophores is to carry air, not to absorb salt or nutrients. Because the deeper soil layers are very poor in oxygen, roots spread shallowly and there is no deep taproot; prop roots and horizontal roots also support the tree in soft mud (H 2.1).

**Worked example (illustration): Indonesia's mangrove area from its share of the world.** Two numbers from KD chapter 1 can be combined into a rough estimate of Indonesia's mangrove area. The formula:

```latex
L_{\text{Indonesia}} = L_{\text{world}} \times p
```

1. Indonesia's share p = 23% = 0.23 (KD writes "almost 23%", so the result is slightly above the true value according to that source).
2. World L (best estimate) = 152,308 km².
3. Indonesia L = 152,308 × 0.23 = 35,031 km².
4. One km² equals 100 ha, so 35,031 km² = 3,503,084 ha, or about 3.5 million ha.
5. With the lower and upper bounds of world area: 110,000 × 0.23 = 25,300 km² and 240,000 × 0.23 = 55,200 km². The range is more than double, so the world area used must be written down.

This result is not an official national figure. For a report, use the official map and cite the source.

**A difference in numbers in this section.** The range of world area (110,000 to 240,000 km²) and the best estimate of 152,308 km² come from the same source but give very different numbers. Write on your sheet which number you use and why.

### 2.2 Salt, the cost of survival, nutrients, and the tropical limit

Seawater contains about 35 g of salt per litre, a concentration lethal to most plants. Mangroves use three ways, with different emphasis by species (H 2.2):

| Way | Mechanism | Example |
| --- | --- | --- |
| Excluding at the roots | Most of the salt is held back at the root surface as water is taken up; this is physical filtration driven by the evaporative pull of the leaves | *Aegiceras*, *Avicennia*: 90% held back, rising to 97% as water gets saltier; other species up to 99% |
| Storing | Salt that gets through is stored in vacuoles; the cytoplasm is filled with organic compounds (glycine betaine, proline, mannitol) to balance cell fluid, and making them takes a lot of energy | All species, in different amounts |
| Excreting | Salt glands on the leaves; or salt is deposited in bark or old leaves that later fall off | Salt glands: *Acanthus*, *Aegiceras*, *Aegialitis*, *Avicennia*. Deposition: *Rhizophora*, *Sonneratia*, *Xylocarpus* |

**The cost of survival.** To get water from a salty environment, mangroves need many roots, so the saltier the habitat the larger the share of roots relative to the canopy. The leaves are thick, waxy, and often held at an angle to the sun so the tree saves water. As a result there is a trade-off between salt tolerance and fast growth. *Sonneratia lanceolata* grows only up to a salinity of 50% seawater, while *S. alba* grows up to 100%. Both grow best at 5% seawater, but at that point the growth of *S. alba* is less than half that of *S. lanceolata* (H 2.3). Under the harshest conditions trees become dwarfed, for example mature *Avicennia* under 0.5 m in the Indus delta.

**Nutrients.** Mangrove soil is generally poor in nutrients, and most nutrients arrive from the land through rivers. Nitrogen fixation from the air by bacteria around the roots, on litter, and in the cyanobacterial layer on the mud is estimated to meet about 40% of the forest's annual nitrogen needs. Leaves are long-lived (an average of 16 months), and before they fall nutrients are resorbed: in *Kandelia candel* 77% of nitrogen and 58% of phosphorus. The limiting nutrient depends on the position of the tree. In fertilization experiments in Belize, seaward trees responded to nitrogen, dwarfed landward trees responded to phosphorus, and trees in between responded to both (H 2.4).

**Why only in the tropics.** Salt-tolerant plants and flood-tolerant plants also exist in temperate regions. What occurs only in the tropics is the combination of three traits: being a tree, tolerating salt, and tolerating flooding. Becoming a tree with all the adaptations above is expensive. The farther from the equator, the smaller the net photosynthesis, so the cost is harder to bear. In addition, freezing temperatures damage the water-transport vessels because air bubbles from freezing water block them (H 2.6).

**Worked example: the share of salt that gets into the tree.** The formula with an illustrative simplification (salt that is not held back is carried along with the water taken up):

```latex
G_{\text{through}} = K \times (1 - r)
```

K is the salt concentration of the outside water (g/L) and r is the share of salt held back at the roots. The tree is assumed to take up 1 litre of seawater with K = 35 g/L (the K and r values are from H 2.2; the uptake assumption is an illustration).

1. r = 90% = 0.90: G = 35 × (1 − 0.90) = 35 × 0.10 = 3.5 g.
2. r = 97% = 0.97: G = 35 × 0.03 = 1.05 g.
3. r = 99% = 0.99: G = 35 × 0.01 = 0.35 g.
4. Compare: going from 90% to 99% looks small (nine percentage points), but the salt that gets through falls from 3.5 to 0.35 g, which is ten times less. That is why a difference of a few percent in filtration matters a great deal to the tree, and why the salt that gets through still needs to be stored or excreted.

This result only illustrates orders of magnitude. In nature, the salt concentration in the sap also depends on how much water is evaporated.

### 2.3 Vivipary and the bridge to soil carbon

All mangroves disperse by water, and in many species what leaves the parent is not a seed but an already-growing seedling (a propagule). This phenomenon is called vivipary: the embryo keeps growing on the parent tree without a resting period like an ordinary seed (H 2.5):

- True vivipary in Rhizophoraceae (*Rhizophora*, *Bruguiera*): the hypocotyl breaks through the fruit wall and elongates like a stick, up to 1 m in *Rhizophora mucronata*.
- Cryptovivipary in *Avicennia* and *Aegiceras*: the embryo germinates on the parent but does not break through the fruit wall.
- Ordinary seeds in other species, for example *Xylocarpus* with fruit up to 3 kg.

Large propagules are often assumed to help dispersal over long distances, but the data show the opposite: about 78% of *Avicennia marina* propagules are stranded no more than 2 km from their source. Large propagules seem more useful for survival and for rooting quickly in the local habitat. For restoration the consequence is that natural regeneration works best when the parent forest is close to the site (H 2.5).

**From biology to soil carbon.** Carbon in tree bodies lasts a few years to a few decades, whereas carbon in coastal soil can last hundreds to thousands of years; mangrove soil in Belize is more than 10 m thick and more than 6,000 years old (BC chapter 1). The chain of reasons, with the biology part from this module:

1. The soil is waterlogged and anoxic (H 2.1), so decomposition of organic matter is very slow and carbon does not return to the air quickly (BC chapter 1).
2. Most of the biomass is placed in the roots, and dead roots stay where they are; this carbon is called autochthonous (BC chapter 1). A salty habitat also makes mangroves enlarge their root share (H 2.2).
3. The soil surface keeps rising through new deposits, so old layers are buried and preserved (BC chapter 1). Mangrove forests trap about 80% of the sediment in coastal waters (H 4.1.3, discussed in Module 3). Part of the soil carbon can also come from outside (allochthonous).
4. Tree carbon is only the stock at the present moment; soil carbon is the result of accumulation over a much longer time.

**Worked example (illustration, Sample Forest data): stratum B.** Stratum B has live aboveground trees 120 Mg C/ha, roots 40, dead trees + downed dead wood + litter 15, and soil to 1 m 495. The formula:

```latex
\text{ratio} = \frac{C_{\text{soil}}}{C_{\text{live trees}}}, \qquad \text{soil share} = \frac{C_{\text{soil}}}{C_{\text{total}}} \times 100\%
```

Live trees are calculated as aboveground trees plus roots.

1. C live trees = 120 + 40 = 160 Mg C/ha.
2. C total = 120 + 40 + 15 + 495 = 670 Mg C/ha (the same as the Sample Forest table).
3. Ratio = 495 ÷ 160 = 3.09. The soil stores about three times the carbon of the live trees.
4. Soil share = 495 ÷ 670 × 100% = 73.9%.
5. If only aboveground trees are compared: 495 ÷ 120 = 4.12. The choice of definition changes the ratio, so the definition must be written down.

### Sample Forest data: soil carbon and tree carbon per stratum

The following are illustrative numbers (means, Mg C/ha) used in all modules. Copy them into Excel or Google Sheets for the "Soil vs trees" sheet. Uncertainty (±) is not used in this module and is discussed in Module 10.

```csv
Stratum,Area_ha,Aboveground_trees,Roots,Dead_litter,Soil_1m,Total
A,180,70,25,8,380,483
B,264,120,40,15,495,670
C,120,95,30,10,430,565
```

Calculation results (illustration):

| Stratum | Live trees (aboveground + roots), Mg C/ha | Dead + litter, Mg C/ha | Soil 1 m, Mg C/ha | Total, Mg C/ha | Ratio soil : live trees | Soil share |
| --- | --- | --- | --- | --- | --- | --- |
| A | 95 | 8 | 380 | 483 | 4.00 | 78.7% |
| B | 160 | 15 | 495 | 670 | 3.09 | 73.9% |
| C | 125 | 10 | 430 | 565 | 3.44 | 76.1% |
| Site, Mg C (area × per ha) | 74,340 | 6,600 | 250,680 | 331,620 | 3.37 | 75.6% |

Explanation of the site calculation: soil = 380 × 180 + 495 × 264 + 430 × 120 = 68,400 + 130,680 + 51,600 = 250,680 Mg C. Of the 331,620 Mg C total, 75.6% is in the soil, 22.4% in live trees (74,340), and 2.0% in dead material (6,600). Roots and soil together store 269,340 Mg C, or 81.2% of the total. That figure lies within the range of 50% to more than 90% of the mangrove stock that is belowground (the formula sheet).

Some things to read from the table:

- Soil is larger than live trees in all three strata, with a ratio of 3.1 to 4.0.
- From A to B, live tree carbon rises 68% (95 to 160) while soil carbon rises 30% (380 to 495). Bigger trees do not add soil carbon in proportion. A conjecture: the soil reflects long-term accumulation, not just the trees standing now. These data do not test that conjecture.
- The soil here is only to 1 m. A different depth would change the ratio.

**A difference in numbers in this section.** The weighted mean soil carbon of the Sample Forest is 250,680 ÷ 564 = 444.5 Mg C/ha, while the Tier 1 world mean for mangrove soil to 1 m is 386 Mg C/ha (BC Table 1.2). Write down which number you use in the report and say why (the Sample Forest is illustrative data; the Tier 1 figure is a world mean).

## Self-study exercises

Work in Excel or Google Sheets and write down the steps. Problems 3 and 4 use Sample Forest data (illustration).

1. **Redox.** Determine the state of the soil at redox potentials of +350 mV, +250 mV, +150 mV, and −150 mV: is it oxygenated or anoxic, and what reaction takes place.
2. **Salt.** A tree takes up 10 litres of seawater (K = 35 g/L). Calculate the salt that gets into the tree if the roots hold back 90%, 97%, and 99% of the salt. How many times more salt gets through at 90% than at 99%?
3. **Stratum C.** From the Sample Forest data (aboveground trees 95, roots 30, dead + litter 10, soil 430 Mg C/ha), calculate live tree carbon, the ratio soil : live trees, and the soil share of the total.
4. **Site and Tier 1.** Calculate the total soil carbon of the site (Mg C) and the weighted mean per hectare. Compare with 386 Mg C/ha (world mean, BC Table 1.2): what is the difference in Mg C/ha and in percent, and is the difference plausible if the Tier 1 error for soil carbon is ±90%?
5. **Propagules and restoration.** Of 1,000 *Avicennia marina* propagules, how many are expected to be stranded within 2 km of the parent? A former aquaculture pond is 5 km from the nearest parent forest. What can and cannot be concluded from the book's numbers about natural regeneration there?

### Exercise answer key

1. +350 mV: above +300 mV, the soil is oxygenated. +250 mV: nitrate becomes nitrogen gas (range +200 to +300). +150 mV: Fe³⁺ becomes Fe²⁺, iron and phosphate become soluble (range +100 to +200). −150 mV: sulfate becomes toxic sulfide and CO₂ becomes methane (range −100 to −200); the soil is anoxic. (H 2.1)
2. Salt through = 10 L × 35 g/L × (1 − r). For 90%: 350 × 0.10 = 35 g. For 97%: 350 × 0.03 = 10.5 g. For 99%: 350 × 0.01 = 3.5 g. Ratio 35 ÷ 3.5 = 10 times.
3. Live trees = 95 + 30 = 125 Mg C/ha. Ratio = 430 ÷ 125 = 3.44. Total = 95 + 30 + 10 + 430 = 565; soil share = 430 ÷ 565 = 76.1%.
4. Site soil = 380 × 180 + 495 × 264 + 430 × 120 = 68,400 + 130,680 + 51,600 = 250,680 Mg C. Weighted mean = 250,680 ÷ 564 = 444.5 Mg C/ha. Difference from 386 = 58.5 Mg C/ha, or 58.5 ÷ 386 = 15.2% higher. That difference is far below ±90%, so it is plausible; but because the Sample Forest is illustrative data, the difference proves nothing about a real forest.
5. 1,000 × 0.78 = 780 propagules stranded within 2 km, so at most 220 (22%) are stranded farther away. The book does not give the share that reaches 5 km; all that can be concluded is that the number is no more than 220 of 1,000 and probably much smaller. Natural regeneration works best when the parent forest is close (H 2.5), so at a site 5 km away planting should be considered. This last conclusion is reasoning from the book's numbers, not a finding of the book.

## Find the error

### Paragraph 1: summary of mangrove biology

Read the following paragraph and mark all statements that do not agree with the book (there are seven).

> Mangroves live in oxygen-rich mud, so the carbon in their soil decomposes quickly. The pneumatophores of *Avicennia* take salt from the mud to be excreted through the leaves. Salt enters the roots without being filtered, and then all mangrove species excrete it through salt glands, including *Rhizophora*. The most salt-tolerant species also grow fastest. Large propagules are useful so that they disperse far from the parent, so the parent forest does not need to be near the restoration site. Mangrove distribution is limited by rainfall, not by temperature.

### Paragraph 2: soil share calculation

> In stratum B of the Sample Forest, the carbon outside the soil is 120 + 40 + 15 = 175 Mg C/ha and the soil carbon is 495 Mg C/ha. The soil share of the total is 495 ÷ 175 = 2.83, or 283%. So the soil stores 283% of the carbon of stratum B.

### Key

Paragraph 1:

1. Wrong: the mud is rich in oxygen and carbon decomposes quickly. Correct: mangrove soil is anoxic (−200 mV or lower) and decomposition is slow so carbon is retained (H 2.1; BC chapter 1).
2. Wrong: pneumatophores take up salt. Correct: pneumatophores carry air through lenticels and aerenchyma to the submerged roots (H 2.1).
3. Wrong: salt enters without being filtered. Correct: the roots hold back about 90% of the salt (97% in saltier water, up to 99% in other species) (H 2.2).
4. Wrong: all species, including *Rhizophora*, have salt glands. Correct: salt glands are found in *Acanthus*, *Aegiceras*, *Aegialitis*, *Avicennia*; *Rhizophora* deposits salt in bark or old leaves (H 2.2).
5. Wrong: the most salt-tolerant species grow fastest. Correct: there is a trade-off; at the best salinity, *S. alba* (tolerates up to 100% seawater) grows less than half as fast as *S. lanceolata* (H 2.3).
6. Wrong: large propagules disperse far and the parent forest is not needed. Correct: about 78% of *A. marina* propagules are stranded within 2 km, and natural regeneration is best when the parent forest is close (H 2.5). Numbers 2, 4, and 6 are the easiest to miss.

The seventh statement in paragraph 1 (the last sentence) is also wrong: mangrove distribution is limited by temperature, not rainfall. Mangroves are almost absent from waters with a winter sea temperature below 20 °C and cannot tolerate frost (H 1.1, 2.6).

Paragraph 2: the divisor is wrong. The soil share is divided by the total (175 + 495 = 670), not by the non-soil carbon. Correct: 495 ÷ 670 = 73.9%. How to detect it: a part of a total cannot be more than 100%; a result of 283% immediately shows the divisor is wrong. Second check: the soil share and the non-soil share must add up to 100% (73.9% + 26.1%).

## The role of AI and example prompts

AI is useful for drafting Excel formulas, explaining terms, and checking calculations, but in this module it must not be a source of biological facts. Facts (salt filtration percentages, redox ranges, root forms) must be matched against the book. Every AI answer is checked before use.

**Prompt 1: drafting formulas.**

> I have a table in Excel: column A stratum, B area (ha), C aboveground trees, D roots, E dead + litter, F soil 1 m (all in Mg C/ha), rows 2 to 4. Write formulas for total per hectare, the ratio of soil to live trees (C + D), the soil share of the total, and the site total soil carbon. The argument separator in my Excel is a semicolon.

Check: calculate stratum B by hand (495 ÷ 160 = 3.09; 495 ÷ 670 = 73.9%) and compare with the cell results. The site total soil carbon must be 250,680 Mg C. Also check that the soil share is not more than 100%.

**Prompt 2: explaining terms.**

> Explain in five sentences the difference between lenticels, aerenchyma, and pneumatophores in mangroves. Give one example genus for pneumatophores. Mark which sentences you are sure of and which not.

Check: match with section 2.1 (H 2.1). Pneumatophores must be linked to *Avicennia* or *Sonneratia*, and their function is to carry air. Sentences not found in the book are marked "outside the books" in your notes.

**Prompt 3: checking a calculation.**

> Here is my calculation: a tree takes up 10 litres of seawater at 35 g/L, the roots hold back 97% of the salt, salt through is 10.5 g. Check the steps one by one and point out any unit error.

Check: repeat with a calculator (10 × 35 × 0.03 = 10.5 g). If the AI states a different result, ask it to write out each step, then decide yourself which step is wrong.

**Example of an AI answer that can be wrong.** Question: "What percentage of salt do mangrove roots hold back?" AI answer: "All mangrove species hold back 99% of the salt at the roots, so salt glands are not needed."

How to catch it:

1. Match with H 2.2: 90% in *Aegiceras* and *Avicennia* (97% as water gets saltier), and only certain species reach 99%.
2. Salt glands do exist in *Avicennia*, *Aegiceras*, *Acanthus*, and *Aegialitis*; so the second part of the answer is also wrong.
3. Test with numbers: at 99% 0.35 g of salt gets through per litre, at 90% 3.5 g per litre. A tenfold difference is large enough to show that "all species 99%" is not a safe simplification.

## Excel notes: Mac and Windows

Data location: paste the csv block in section 2.3 into cell A1 with column A Stratum, B Area_ha, C Aboveground_trees, D Roots, E Dead_litter, F Soil_1m, G Total; rows 2 to 4 are strata A to C. Column H onward is used for results.

| Step | Mac | Windows | Google Sheets |
| --- | --- | --- | --- |
| Copy and paste data | Cmd+C, then click A1 and Cmd+V | Ctrl+C, then click A1 and Ctrl+V | Same as Windows; on Mac use Cmd |
| Split text if all data lands in one column | Data > Text to Columns, choose Delimited, tick Comma | Data > Text to Columns, choose Delimited, tick Comma | Data > Split text to columns |
| Total per hectare (G2) | Type `=SUM(C2:F2)`, press Return | Type `=SUM(C2:F2)`, press Enter | Type `=SUM(C2:F2)`, press Enter |
| Ratio soil : live trees (H2) | `=F2/(C2+D2)` | `=F2/(C2+D2)` | `=F2/(C2+D2)` |
| Soil share of total (I2) | `=F2/G2` | `=F2/G2` | `=F2/G2` |
| Percent format | Home > Number group > % button | Home > Number group > % button | Format > Number > Percent |
| Copy formulas to the rows below | Select H2:I4, press Cmd+D (or drag the fill handle at the bottom-right corner) | Select H2:I4, press Ctrl+D (or drag the fill handle) | Select H2:I4, press Cmd+D on Mac or Ctrl+D on Windows |
| Site total soil carbon | `=SUMPRODUCT(F2:F4,B2:B4)`, result 250,680 | `=SUMPRODUCT(F2:F4,B2:B4)`, result 250,680 | `=SUMPRODUCT(F2:F4,B2:B4)` |
| Weighted mean per ha | `=SUMPRODUCT(F2:F4,B2:B4)/SUM(B2:B4)`, result 444.5 | Same | Same |
| Rounding | `=ROUND(H2,2)` | `=ROUND(H2,2)` | `=ROUND(H2,2)` |
| Flag shares above 100% | `=IF(I2>1,"check","ok")` | `=IF(I2>1,"check","ok")` | `=IF(I2>1,"check","ok")` |
| Lock a cell in a formula | Type the dollar sign directly, e.g. `$B$2` | Type the dollar sign directly, or press F4 | Type the dollar sign directly |

A note on language and separators: in Excel or Google Sheets using Indonesian regional settings, the argument separator is usually a semicolon (`=ROUND(H2;2)`) and the decimal separator is a comma. In some language settings, function names are also translated (for example SUM becomes JUMLAH and AVERAGE becomes RATA.RATA, or RATA2 in older versions). If a formula is rejected, open Insert Function (the fx button) to see the name and separator that apply on your computer, or change the language and region settings to English. This module does not need the Analysis ToolPak.

## Weekly assignment

Fill in the "Soil vs trees" sheet in the workbook: the Sample Forest calculation table and a one-page answer (about 300 to 400 words) explaining why soil carbon can be greater than tree carbon. Pass criteria:

- [ ] The table contains live tree carbon (aboveground + roots), soil carbon, and the total for strata A, B, C, and the site; site total 331,620 Mg C and site soil carbon 250,680 Mg C.
- [ ] The ratio soil : live trees and the soil share of the total are calculated with Excel formulas (not typed in) and match the key (4.00; 3.09; 3.44 and 78.7%; 73.9%; 76.1%).
- [ ] The definition of "trees" is written (aboveground only or aboveground + roots) and the soil depth (1 m) is stated.
- [ ] The answer contains at least three biological reasons from the chain in section 2.3: anoxic soil, roots that die in place, and sediment accumulation; each with a book citation.
- [ ] The answer distinguishes carbon that lasts a few years to decades (trees) from hundreds to thousands of years (soil).
- [ ] The differences in numbers between books are written openly: the world mangrove area used (section 2.1) and the choice between the Sample Forest weighted mean (444.5) and the Tier 1 figure (386 Mg C/ha) together with the reason.
- [ ] All Sample Forest numbers are labeled "illustration", and numbers from the books name the book.
- [ ] If AI was used, the prompts and the results of hand-calculation checks are recorded on the sheet.

## 60-minute live session plan

| Minutes | Activity | Materials |
| --- | --- | --- |
| 0–5 | Opening; participants name the one thing most confusing in videos 2.1 to 2.3 | List of participants' questions |
| 5–15 | Biology Q&A: aerial roots, salt filtration, vivipary; review exercises 1 and 2 | Pictures of prop roots, knee roots, pneumatophores; exercise key |
| 15–30 | Group work: find the errors in paragraphs 1 and 2, then compare with the key | The "Find the error" text |
| 30–45 | Excel practice: participants calculate the ratio, soil share, and site soil carbon; other participants check by hand | The "Soil vs trees" sheet, Sample Forest data |
| 45–55 | Several participants read out their reasons why soil carbon is larger; the group tests them against the chain of reasons in 2.3 | The chain of reasons in section 2.3 |
| 55–60 | Closing: assignment pass criteria, bridge to Module 3 (forest structure and sediment) | Assignment checklist |

Sources: Hogarth (H) The Biology of Mangroves and Seagrasses 3rd edition, chapters 1.1, 2.1–2.6, 4.1.3, 10.2; Kauffman & Donato (KD) CIFOR Working Paper 86, chapter 1; Howard et al. (BC) Coastal Blue Carbon, chapter 1 and Table 1.2. The Sample Forest data and worked examples labeled "illustration" were created for this e-course.

---
