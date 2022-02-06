### Parallelism

![LOGO](https://cdn.discordapp.com/attachments/916393114166525974/939784614275330088/PARALLELISM.png)

##### General

Parallelism (General) is the ability to perform the same actions simultaneously.

Parallelism (IT) is a property of systems in which multiple computations are performed simultaneously.

If we consider parallelism in the game, it is the execution of one type of recipe several times in one cycle (the energy consumption is proportional to the number of executed recipes).

In the game there is such a concept as Parallel Point (PP). PP is the current parallelism, for example, 4 PP is 4 identical recipes executed in one time (recipe time).

**EXAMPLE:**

Parallel Point = 4.

Initial recipe: **x** steel ingots in **x** steel plates in **t** time and in **e** EU/t.

Recipe with PP: **4 * x** steel ingots in **4 * x** steel plates in **t** time and in **4 * e** EU/t.

Thus, in the same time we can perform a different number of the same recipe.

##### Wireless communication

In IMPACT Parallelism works by wireless communication.

The communication is represented as follows:

Parallel Computer > Communications Tower > Space Satellite > Communications Tower > Parallel Machines.

A special tool, the notebook, is used for all connections.

Connecting the Space Satellite to the Communications Tower (see below):

![BIG](https://i.imgur.com/5fOq2WD.gif)

Connecting the Communication Tower to the Parallel Computer and to the Parallel Machines (see below):

![BIG](https://i.imgur.com/hg3ctYF.gif)

##### Space satellite

This machine must be in Orbit to transmit communication between the Communications Tower.

For more information, see this article - [Space satellite](/wiki/machines#spacesatellite )

##### Communication Tower

This machine allows communication between the Parallel Machines and the Parallel Computer.

For more information, see this article - [Communication Tower](/wiki/machines#communicationtower )

##### Parallel Computer

This machine is capable of generating PP. In order to generate PP, special CPU cores are required.

There are 4 tiers of CPU cores, which are divided by PP generation: 4, 16, 64, 256.

PP transmission requires special hatches- Parallel Transmitter.

There are 4 tiers of Parallel Transmitter which limit maximum PP transmission: 4, 16, 64, 256.

For more information, see this article - [Parallel Computer](/wiki/machines#parallelsupercomputer)

##### Parallel Machines

There are many machines in IMPACT that can process recipes in parallel (have parallelism).
It is written in the description of these machines.

Such machines are capable of spending parallelism points. To make a machine parallel, you need to put a special hatch in it - Parallel Receiver, without it the machine is not parallel and performs recipes in the usual way.

There are 4 tiers of Parallel Receiver, which limit the maximum number of PP: 4, 16, 64, 256.

Hatches can't just issue PP to a machine, it requires a connection to a Parallel Computer.

To connect to a computer you will need a Laptop (see below).

![BIG](https://i.imgur.com/anGgJhL.gif)
