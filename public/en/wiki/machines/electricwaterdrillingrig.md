### ELECTRIC WATER DRILLING RIG

![LOGO](https://gtimpact.space/media/gregtech/ElWater.png)

##### Description

Designed for pumping water from bedrock using electricity.

##### General

The machine pumps out water from bedrock using electricity, depending on the biome in which the controller is located, and Energy Hatch and Output Hatch range.

When installed in an Ocean biome, salt water is pumped out.

##### Water generation coefficient

Water generation coefficient = h. The coefficient is changed using the Energy Hatch and Output Hatch tier.

##### Biome Coefficient

Biome coefficient = b. The coefficient is changed depending on the biome the controller is located in:

— Ocean, River: b = 1000 L/s

— Swampland: b = 800 L/s

— Jungle: b = 350 L/s

— Snow, Iceland: b = 300 L/s

— Plains, Forest: b = 250 L/s

— Taiga: b = 175 L/s

— Beach: b = 170 L/s

— Other: b = 100 L/s

##### Water generation

Water is generated according to the following formula:

Water generation (L/s) = (1 * 2 ^ h) * 2 * b * 20

