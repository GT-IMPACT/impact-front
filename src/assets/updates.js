const updateList = [
  // {
  //   label: '1.0.1.7',
  //   name: 'last',
  //   date: '21.01.2022',
  //   title: 'Oh, bugs, again..',
  //   desc: 'Many bug fixed, GT p2p, main menu and more recipes.',
  //   img: '',
  //   linkServer: '',
  //   linkClient: '',
  //   changelog: [
  //     {
  //       label: 'GREGTECH', children: [{label: 'test'}]
  //     },
  //   ]
  // },
  {
    label: '1.0.1.6',
    name: 'last',
    id: '1016',
    date: '02 Aug 2021',
    title: 'Oh, bugs, again..',
    desc: 'Many bug fixed, GT p2p, main menu and more recipes.',
    img: 'https://media.discordapp.net/attachments/660172135808892966/871752474032209950/1016.png',
    linkServer: 'https://gtimpact.space/go/releases/1.0.1.6/IMPACT-1.0.1.6-SERVER.zip',
    linkClient: 'https://gtimpact.space/go/releases/1.0.1.6/IMPACT-1.0.1.6-CLIENT.zip',
    changelog: [
      {
        label: 'IMPACT CORE', children: [{label: 'fix main menu lags'}]
      }, {
        label: 'AE2', children: [
          {label: 'Fix fallback, if there was not enough items for a batch'},
          {label: 'Fix non-uniformly filled patterns batch crafting'}
        ]
      }, {
        label: 'AE2-P2P-GT', children: [
          {label: 'revert changes in 1.0.1.5'},
        ]
      }, {
        label: 'WAILA PLUGINS', children: [
          {label: 'fix EU GT5'},
        ]
      }, {
        label: 'IMPACT RECIPE MODULE', children: [
          {label: 'Fix recipe of Gelled Toluene'},
          {label: 'Fix amount of dust on output'},
          {label: 'Change recipes of HA Transformers'},
          {label: 'Buff ExtraHeavyOil'},
          {label: 'Fix RoseGold recipe'},
          {label: 'Fix more recipes in IC2'},
          {label: 'Fix recipe of Crystal Board'},
        ]
      },
    ]
  }, {
    label: '1.0.1.5',
    name: '1015',
    id: '1015',
    date: '27 Jul 2021',
    title: 'More bugs…',
    desc: 'Many bug fixed, new NEI version by GTNH-team and modpack redesign.',
    img: 'https://cdn.discordapp.com/attachments/660172135808892966/869629685385023601/1015.png',
    linkServer: 'https://gtimpact.space/go/releases/1.0.1.5/IMPACT-1.0.1.5-SERVER.zip',
    linkClient: 'https://gtimpact.space/go/releases/1.0.1.5/IMPACT-1.0.1.5-CLIENT.zip',
    changelog: [
      {
        label: 'GREGTECH', children: [
          {label: 'corrected the naming of the Achievements'},
          {label: 'fixed tanks (working with capsules)'},
          {label: 'removed small and tiny dust (in progress)'},
          {label: 'deleted unused prescription maps'},
          {label: 'fixed Cracking Unit working with different types of plasma'},
          {label: 'void mods added to all 1-block tanks'},
          {label: 'fixed EU detector cover'},
          {label: 'fixed gui'},
          {label: 'fixed ME output bus'},
        ]
      }, {
        label: 'IMPACT CORE', children: [
          {label: 'fixed crash with ExtraCells2 tyres'},
          {label: 'added display of stored items in Waila'},
          {label: 'changed Nuclear Reactor'},
          {label: 'modified multi-unit battery (missing charge!)'},
          {label: 'main menu changed'},
          {label: 'fixed the multiblock odds handling'},
          {label: 'added new Bus/Hatch, works with liquid and objects simultaneously'},
          {label: 'added volume selection gui for Regulate Chest'},
          {label: 'fixed pollution from parallel - multiblocks'},
          {label: 'changed parallel system (at code level, in-game as well)'},
          {label: 'added localization for Waila Impact Plugin'},
          {label: 'added OC integration for Launch Controller from GalactiCraft'},
        ]
      }, {
        label: 'CROPS ++', children: [
          {label: 'remove IV+ machines'},
        ]
      }, {
        label: 'NUCLEAR CONTROL', children: [
          {label: 'fixed texture bug on the back of the panels'},
        ]
      }, {
        label: 'AE2', children: [
          {label: 'added oredict card'},
          {label: 'added conduit support for interfaces'},
          {label: 'added toggle button to save text in the gui'},
        ]
      }, {
        label: 'AE2-P2P-GT', children: [
          {label: 'added safe energy transfer and warning'},
        ]
      },
    ]
  },
]

const homePic = [
  {src: 'https://gtimpact.space/media/bg/1.png'},
  {src: 'https://gtimpact.space/media/bg/2.png'},
  {src: 'https://gtimpact.space/media/bg/3.png'},
  {src: 'https://gtimpact.space/media/bg/4.png'},
  {src: 'https://gtimpact.space/media/bg/5.png'},
  {src: 'https://gtimpact.space/media/bg/6.png'},
  {src: 'https://gtimpact.space/media/bg/7.png'},
  {src: 'https://gtimpact.space/media/bg/8.png'},
  {src: 'https://gtimpact.space/media/bg/9.png'},
  {src: 'https://gtimpact.space/media/bg/10.png'},
  {src: 'https://gtimpact.space/media/bg/11.png'},
  {src: 'https://gtimpact.space/media/bg/12.png'},
]

export default {
  updateList, homePic
}
