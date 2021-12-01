const mods = [
  {
    mod: 'impact-core',
    pages: [
      {
        id: 0,
        name: "COKE OVEN",
        img: "https://gtimpact.space/media/gregtech/cokeoven.png",
        desc: 'This machine is designed for the production of charcoal / coke coal and creosote in the early stages.',
        general: 'The oven carries out recipes that can be seen at NEI.',
        other: [
          {
            title: '',
            desc: [
              {p: 'This machine has no unusual mechanics. An important note — all recipes are completed in the same time: 90 seconds.',},
            ],
            img: [
            ]
          }
        ]
      }, {
        id: 1,
        name: "PRIMITIVE WATER PUMP",
        img: "https://gtimpact.space/media/gregtech/primwaterpump.png",
        desc: 'Designed to generate water at the initial stages and in hard-to-reach places without power supply.',
        general: 'The machine generates water without electricity depending on the biome in which the controller is located.',
        other: [
          {
            title: 'Water generation coefficient',
            desc: [
              {p: 'Water generation coefficient = h. The ratio is changed using Output Hatch:'},
              {p: '— Pump Output Hatch: h = 1'},
              {p: '— ULV Output Hatch: h = 2'},
              {p: '— LV Output Hatch: h = 3'},
            ],
            img: []
          }
        ]
      }, {
        id: 2,
        name: "SAW MILL",
        img: "https://gtimpact.space/media/gregtech/sawmill.png",
        desc: 'Designed for woodworking, since all other woodworking mechanics are disabled (except hand tools), you will need this machine for processing.',
        general: 'The machine has 3 operating modes. Modes are switched using Screwdriver.',
        other: [
          {
            title: 'Mode 1. Planks & Sawdust:',
            desc: [
              {p: 'This mode allows you to get boards and sawdust from logs, if you have an Output Bus ULV of the shooting range, you will only get boards at the output.'},
            ],
            img: []
          }, {
            title: 'Mode 2. Wood Pulp & Sawdust:',
            desc: [
              {p: 'This mode allows you to get wood pulp and sawdust from logs with water, if you have an Output Bus ULV of the range, you will only get wood pulp at the output.',},
            ],
            img: []
          }, {
            title: 'Mode 3. Only Sawdust:',
            desc: [
              {p: 'This mode allows you to get only sawdust from the logs.',},
            ],
            img: []
          }
        ]
      }, {
        id: 3,
        name: "PYROLYSE OVEN",
        img: "https://gtimpact.space/media/gregtech/purolyse.png",
        desc: 'The principle of operation of a pyrolysis oven is based on the thermal decomposition of organic substances into pyrolysis gases and solid residues.',
        general: 'The machine has a unique mechanics — product output during operation.',
        other: [
          {
            title: 'Principle of operation',
            desc: [
              {p: 'During («Time») of the recipe, gases and solid fuels are released:'},
              {p: '— At 7 seconds — Carbon Monoxide (72L)'},
              {p: '— At 14 seconds — Hydrogen Gas (288L)'},
              {p: '— At 21 seconds — Methane Gas (144L)'},
              {p: '— At 28 seconds — CO2 Gas (216L)'},
              {p: '— At 35 seconds — Wood Tar (1440L) and Charcoal (x5)'},
            ],
            img: []
          },
        ]
      }, {
        id: 4,
        name: "ADVANCED PYROLYSE OVEN",
        img: "https://gtimpact.space/media/gregtech/AdvPyrolyse.png",
        desc: 'The principle of operation of a pyrolysis oven is based on the thermal decomposition of organic substances into pyrolysis gases and solid residues.',
        general: 'The advanced Pyrolysis Oven differs from the conventional Pyrolysis Oven in that it is parallel (several recipes are executed at the same time).',
        other: [
          {
            title: 'Principle of operation',
            desc: [
              {p: 'Principle of operation: During («Time») of the recipe, gases and solid fuels are released:'},
              {p: '— At 7 seconds — Carbon Monoxide (72L)'},
              {p: '— At 14 seconds — Hydrogen Gas (288L)'},
              {p: '— At 21 seconds — Methane Gas (144L)'},
              {p: '— At 28 seconds — CO2 Gas (216L)'},
              {p: '— At 35 seconds — Wood Tar (1440L) and Charcoal (x5)'},
            ],
            img: []
          }, {
            title: 'Important!',
            desc: [
              {p: 'The machine, depending on the tier Energy Hatch, performs several recipes at a time (LV — 2x, MV — 4x, HV — 6x .. Tier * 2)'},
            ],
            img: []
          }, {
            title: 'Energy consumption',
            desc: [
              {p: 'EU / t = EU / t (prescription) * number of concurrent recipes * Energy Hatch tier / 2'},
            ],
            img: []
          },
        ]
      }, {
        id: 5,
        name: "ELECTRIC WATER DRILLING RIG",
        img: "https://gtimpact.space/media/gregtech/ElWater.png",
        desc: 'Designed for pumping water from bedrock using electricity.',
        general: 'The machine pumps out water from bedrock using electricity, depending on the biome in which the controller is located, and Energy Hatch and Output Hatch range.',
        other: [
          {
            title: 'Water generation coefficient',
            desc: [
              {p: 'Water generation coefficient = h. The coefficient is changed using the Energy Hatch and Output Hatch tier.'},
            ],
            img: []
          }, {
            title: 'Biome Coefficient',
            desc: [
              {p: 'Biome coefficient = b. The coefficient is changed depending on the biome the controller is located in:'},
              {p: '— Ocean, River: b = 1000 L/s'},
              {p: '— Swampland: b = 800 L/s'},
              {p: '— Jungle: b = 350 L/s'},
              {p: '— Snow, Iceland: b = 300 L/s'},
              {p: '— Plains, Forest: b = 250 L/s'},
              {p: '— Taiga: b = 175 L/s'},
              {p: '— Beach: b = 170 L/s'},
              {p: '— Other: b = 100 L/s'},
            ],
            img: []
          }, {
            title: 'Water generation',
            desc: [
              {p: 'Water is generated according to the following formula:'},
              {p: 'Water generation (L/s) = (1 * 2 ^ h) * 2 * b * 20'},
            ],
            img: []
          },
        ]
      }, {
        id: 6,
        name: "SPACE SATELLITE",
        img: "https://gtimpact.space/media/gregtech/SpaceSatellite.png",
        desc: 'The Space Satellite allows for wireless communication between machines on earth.',
        general: '— Need a Communication Tower',
        other: [
          {
            title: 'Principle of operation',
            desc: [
              {p: 'After installing the Space Satellite, you must tune the frequency using your Laptop.'},
              {p: 'Communication Transmitter is used for frequency setting.'},
            ],
            img: []
          }, {
            title: 'Important!',
            desc: [
              {p: 'One satellite is enough for the game.'},
              {p: 'The satellite does not require electrical power.'},
            ],
            img: []
          }, {
            title: '',
            desc: [
              {p: 'Setting the frequency for the Space Satellite'},
            ],
            img: [{
              img: 'https://gtimpact.space/media/gregtech/connectSattelite.gif'
            }]
          },
        ]
      }, {
        id: 7,
        name: "COMMUNICATION TOWER",
        img: "https://gtimpact.space/media/gregtech/ParTower.png",
        desc: 'The Communication Tower allows wireless communication between the satellite in orbit and machines on the «Earth».',
        general: '— Need a Space Satellite',
        other: [
          {
            title: 'Principle of operation',
            desc: [
              {p: 'After installing the Space Satellite, you must tune the frequency using your Laptop.'},
              {p: ' '},
              {p: 'Communication Receiver is used to configure the connection. The frequency must match the satellite frequency. To establish communication, you need to connect all 4 receivers.'},
            ],
            img: []
          }, {
            title: 'Important!',
            desc: [
              {p: 'The tower has a radius of operation — 256 blocks, it is counted from the controller.'},
              {p: 'Several towers can be connected to one frequency — the satellite frequency.'},
              {p: 'The tower does not require electrical power.'},
              {p: ''},
              {p: 'Setting the frequency for connecting the Communication Tower to the satellite'}
            ],
            img: [{img: 'https://gtimpact.space/media/gregtech/connectTowerSattelite.gif'}]
          },
        ]
      }, {
        id: 8,
        name: "NUCLEAR REACTOR",
        img: "https://gtimpact.space/media/gregtech/NuclearReactor.png",
        desc: 'There are 3 tiers of the reactor, they differ in structure and the amount of rods (1, 9 or 25). ' +
          'Designed for the generation of conventional / superheated steam and for the extraction of radioactive resources.',
        general: 'The nuclear reactor has 2 modes of operation, Default Mode and Fast Decay Mode. Each mode includes 2 types of fuel: regular rods and MOX rods.',
        other: [
          {
            title: 'Default Mode',
            desc: [
              {p: 'Regular rods generate steam. MOX rods generate superheated steam, but it is important that all the rods in the reactor are MOX, otherwise the regime will remain as with regular rods.'},
            ],
            img: []
          }, {
            title: 'Fast Decay Mode',
            desc: [
              {p: 'This mode allows the rapid decay of nuclear fuel. Fuel decay occurs 5 times faster than the Default mode. In this mode, the reactor consumes Coolant and produces Hot Coolant.'},
            ],
            img: []
          }, {
            title: 'Reactor control',
            desc: [
              {p: '1. Current mode of the reactor.'},
              {p: '2. Input / Output fluids.'},
              {p: '3. MOX fuel indicator.'},
              {p: '4. Temperature indicator.'},
              {p: '5. Up the level of all rods completely.'},
              {p: '6. Up / Down the level for all rods by 10%.'},
              {p: ''},
              {p: 'Reactor control'},
            ],
            img: [{
              img: 'https://gtimpact.space/media/gregtech/NuclearGui.png'
            }]
          }, {
            title: 'Rod control',
            desc: [
              {p: '1. Up / Down the level for all rods by 10%.'},
              {p: '2. Fuel slot.'},
              {p: '3. Rod level indicator.'},
              {p: '4. If you visit the fuel, the duration of the fuel burning is subtracted in proportion to the level of the rod.'},
              {p: ''},
              {p: 'Rod control'},
            ],
            img: [{
              img: 'https://gtimpact.space/media/gregtech/NuclearHatch.png'
            }]
          },
        ]
      }, {
        id: 9,
        name: "PARALLEL SUPER COMPUTER",
        img: "https://gtimpact.space/media/gregtech/ParComputer.png",
        desc: 'The supercomputer allows parallels to be distributed to Impact machines.',
        general: '— Need a Space Satellite',
        other: [
          {
            title: '',
            desc: [
              {p: '— Need a Communication Tower'},
              {p: ''},
              {p: 'The computer stores Parallel Point (PP), with the possibility of increasing or spending them. Points are needed to distribute parallels to machines, each machine is limited by the number of parallels: 4, 16, 64, 256.'},
              {p: ''},
              {p: 'What is parallelism? Parallelism is the ability to simultaneously perform the same type of action in several threads.'},
              {p: ''},
              {p: 'If we consider parallels in the game, then this is the execution of one type of recipe several times at one time (while the energy consumption is proportional to the number of recipes being executed).'},
              {p: ''},
              {p: 'The structure of the computer can change (in length), the maximum length is 16 blocks, the minimum is 2.'},
            ],
            img: []
          }, {
            title: 'Principle of operation',
            desc: [
              {p: 'After installing the communication tower, it is necessary to tune the frequency with which the tower, computer and machines will worked. Are tuned through the laptop.'},
              {p: ''},
              {p: 'There is a Computer Rack to control the points of parallels. The Computer Rack has 4 slots that fit the Parallel CPU. There are 4 types of processors that produce: 4, 16, 64, 256 PP.'},
              {p: ''},
              {p: 'Parallel Transmitter is used to transmit parallelism. Parallel Transmitter there are 4 tiers that transmit: 4, 16, 64, 256 PP. When installing the transmitter, the computer will immediately reserve the required amount of PP for the transmitter to work.'},
              {p: ''},
              {p: 'To transfer the PP to the machine you need, you need to install the Parallel Receiver in it. Next, click on the Parallel Receiver using your laptop and then click on the Parallel Transmitter on your computer.'},
              {p: 'If the receiver / transmitter is lit red — there is a connection error or there is no connection, if it is lit yellow — a successful connection.'},
            ],
            img: []
          }, {
            title: 'Important!',
            desc: [
              {p: 'The power consumption of a computer is calculated using the following formula:'},
              {p: 'Consumption (EU/t) = 8192 + Max PP.'},
              {p: 'Max PP — the total amount of PP from the Parallel Processors installed in the computer.'},
              {p: ''},
              {p: 'Setting the frequency for connecting the Computer to the Communication Tower'},
            ],
            img: [{img: 'https://gtimpact.space/media/gregtech/connectTowerComp.gif'}]
          },{
           title: '',
           desc: [
             {p: 'Parallel Processors in a Computer Rack'},
           ],
            img: [{img: 'https://gtimpact.space/media/gregtech/ComputerRackGUI.png'}]
         },{
           title: '',
           desc: [
             {p: 'Setting up the transmit of PP from the computer to the machine'},
           ],
            img: [{img: 'https://gtimpact.space/media/gregtech/connectMachineComp.gif'}]
         },
        ]
      },
/*
         {
            name: "",
            img: "",
            desc: '',
            general: '',
            other: [
              {
                title: '',
                desc: [
                  {p: ''},
                ],
                img: []
              },
            ]
          },
*/
    ]
  }
]

export default {
  mods
}
