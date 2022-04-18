### Рудогенерация

![LOGO](https://cdn.discordapp.com/attachments/916393114166525974/928074818505560064/111.png)

##### Description

The world of IMPACT presents a completely unique system for generating fossil resources.

Despite the lack of the ability to detect veins with the naked eye, this generation provides a more comfortable mining experience.

##### First Start

To get the first resources, you need a tool - Forge Hammer (with a special mode - Advanced Harvester Mode).

The mode is activated by the Right Mouse Click on the ground.
With this mode, you can mine any rock and you will get special stones (see picture):

![SMALL](https://cdn.discordapp.com/attachments/916393114166525974/946019723617914910/unknown.png)

There are 3 types of stones:

- Mineral (gypsum, calcite)
- Metallic (iron, copper, tin, lead)
- Coal-sulfur (coal, lignite, sulfur)

After extraction of the stones, they are processed in a special machine - [The Mill](wiki/machines#themill)

![SMALL](https://cdn.discordapp.com/attachments/916393114166525974/946022528411893770/unknown.png)

##### Principle of ore generation

Ore is generated in regions 512x512 block, there are 64 different veins in a region, which are generated in 16 chunks (4x4).

There are two layers to the game:
- Layer #0: Small ores, may contain only 1 type of ore
- Layer #1: Normal Ores, can contain up to 4 types of ore

In the picture, layer #1 is selected, you can see that the vein consists of 16 cubes (chunks).

![SMALL](https://cdn.discordapp.com/attachments/916393114166525974/928061128100184124/unknown.png)

Each chunk generates a certain amount of ore, depending on the level of the layer and type of vein.

The quantities specified in a chunk are cycles. A cycle is the number of digging operations of the current chunk.

##### Geological Exploration

In the first stages you can find ore with a special tool - Ore Sampling Tool

This tool allows you to determine from the rock which ore is in the current chunk.

Can only be used for layer #0

![BIG](https://i.imgur.com/baAOsHM.gif)

In the early game it becomes easier to find ore by using ore prospectors.

Ore Prospectors allow you to find not only ore, but also fluids.

![BIG](https://i.imgur.com/mlj29PP.gif)

In the late game there are manual ore prospectors, which do not require anything but energy. The principle of operation is the same as that of blocks ore prospectors.

![BIG](https://i.imgur.com/dqtruf0.gif)

##### Ore mining

To mine the ore, you will need miners:
- Coal Miner: consume coal, mines ore in layer #0 ([check](/wiki/machines#coalminer))
- Basic Electric Miner: able to mine ore in all layers, has a small bonus when digging ([check](/wiki/machines#basicelectricminer))
- Advanced Electric Miner: able to mine ore in all layers, has a significant digging bonus, and also contains a flotation module ([check](/wiki/machines#advancedelectricminer))

![SMALL](https://cdn.discordapp.com/attachments/916393114166525974/928070934580068462/unknown.png)
