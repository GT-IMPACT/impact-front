### BLAST SMELTER

![LOGO](https://gtimpact.space/media/gregtech/BlastSmelter.png)

##### Description

The mechanism makes it possible to produce alloys in liquid form from a multitude of solid components at the input.

##### General

Performs recipes that can be seen in the NEI.

Blast Smelter can work with a lot of programmed circuits that are in different Input Buses. The recipe is executed with the circuit that is in the same Input Bus as the materials.

The Blast Smelter also has mechanics similar to those of the Electric Blast Furnace:


1. Every 900 K of coil temperature above the minimum required for the operation reduces power consumption by 5%.


2. Every 1800 K of coil temperature above the minimum required for the operation allows you to increase the level of Energy Hatch required without losing efficiency (time is reduced by a factor of 4).


3. Increasing the Energy Hatch level, starting with HV, increases the coil temperature of the blast furnace alloyer by 100 K. That is, dT = 100 * (Tier - 2).

##### Structure Features

Smelter has 24 heating coils, the same as those used in the electric blast furnace. It is not possible to combine different coils.
