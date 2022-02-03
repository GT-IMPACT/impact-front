<template>
  <q-card class="justify-evenly q-ma-lg bg-none" flat square style="padding: 0 200px;">
    <q-card-section class="text-h4" style="text-transform: uppercase; color: white; font-weight: 900; text-align: center">
      {{ $t('about') }}
    </q-card-section>
    <q-card-section class="items-center q-pa-md" style="text-align: center">
      <q-card class="row q-pa-md justify-center items-center" flat square style="padding-top: 60px; padding-bottom: 60px">
        <q-card class="block-about-text q-px-md" flat square style="text-align: right">
          <span class="text-justify">{{ $t('about_part1') }}</span>
        </q-card>
        <q-card class="block-about-text q-px-md" flat square style="text-align: left">
          <span class="text-justify">{{ $t('about_part2') }}</span>
        </q-card>
        <q-card class="block-faq" flat square>
          <q-tabs v-model="faq" active-color="black" align="justify" class="text-grey" dense indicator-color="black" narrow-indicator no-caps>
            <q-tab :label="$t('for_beginner')" name="first" />
            <q-tab label="GT++" name="second" />
          </q-tabs>

          <q-tab-panels v-model="faq" animated>
            <q-tab-panel name="first">
              <b>{{ $t('for_beginner1') }}</b><br>
              <span>{{ $t('for_beginner2') }}</span>
            </q-tab-panel>
            <q-tab-panel name="second">
              <b>{{ $t('gt_plus1') }}</b><br>
              <span>{{ $t('gt_plus2') }}</span>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

        <q-card>
          <q-card class="q-mt-lg">
            <span>{{ $t('our_team') }}</span>
          </q-card>
          <q-card class="q-mt-sm">
            <span>{{ $t('our_team1') }}</span>
          </q-card>
          <q-card class="q-mt-lg">
            <span>{{ $t('donate') }}</span>
          </q-card>
          <q-card class="q-mt-sm">
            <q-btn class="q-mx-sm" flat href="https://www.patreon.com/gtimpact" no-caps stretch style="border: 1px solid black; width: 100px" target="_blank" type="a">
              Patreon
            </q-btn>
            <q-btn class="q-mx-sm" flat href="https://boosty.to/gt-impact" no-caps stretch style="border: 1px solid black; width: 100px" target="_blank" type="a">
              Boosty
            </q-btn>
          </q-card>

        </q-card>
      </q-card>

      <q-dialog v-model="modList" v-close-popup full-width>
        <q-card class="q-mt-lg" square>
          <q-card-section class="text-h4 text-bold row justify-center" style="text-transform: uppercase">
            {{ $t('mod_list') }}
          </q-card-section>
          <q-list class="q-pa-none row justify-between">
              <span v-for="mod in mods.length" :key="mod" class="q-pa-sm">{{ mods[mod] }}
              </span>
          </q-list>
        </q-card>
      </q-dialog>

    </q-card-section>
  </q-card>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "About",
  setup() {
    const modList = ref(false);
    const mods = [
      'AppleCore-mc1.7.10-1.3.9',
      'ArchitectureCraft-1.7.3-mc1.7.10-impact',
      'Aroma1997Core-1.7.10-1.0.2.16',
      'Aroma1997s-Dimensional-World-1.7.10-1.1.0.1',
      'AromaBackup-1.7.10-0.1.0.0',
      'AsieLib-1.7.10-0.4.9',
      'Baubles-1.7.10-1.0.1.10',
      'BetterBuildersWands-0.8.1-1.7.10r92+aec06c3',
      'BiblioCraft[v1.11.7][MC1.7.10]',
      'Carpenters-Blocks-3.3.8.2-impact',
      'ChickenChunkPatcher1.1',
      'ChickenChunks-1.7.10-1.3.4.19-universal',
      'Chisel-2.9.5.12-impact',
      'ChunkAnimator-MC1.7.10-1.0.1',
      'CoFHCore-[1.7.10]3.1.4-329',
      'CodeChickenCore-1.7.10-1.0.7.47-universal',
      'CodeChickenLib-1.7.10-1.1.3.140-universal',
      'CompactKineticGenerators-1.7.10-1.0',
      'Computronics-1.7.10-1.6.6',
      'CraftPresence-Forge-1.7.10-Release-1.8.1',
      'CraftTweaker-1.7.10-3.0.2-IIA-edition',
      'CropLoadCore-0.1.3',
      'CropsPP-1.3.5.2-impact',
      'EnderCore-1.7.10-0.2.0.39_beta',
      'EnderIO-2.3.1.16-impact',
      'ExtraCells-rv2-22-impact',
      'ForgeMultipart-1.7.10-1.2.0.347-universal',
      'ForgeRelocation-0.0.1.4-universal',
      'ForgeRelocationFMP-0.0.1.2-universal',
      'FTBLib-1.7.10-1.0.18.3',
      'FTBUtilities-1.7.10-1.0.18.3',
      'FastLeafDecay-1.7.10-1.4',
      'GS-IMPACT-Edition-0.0.7',
      'GTScannerMod-1.5.7',
      'GTTweaker-GW-Edition-1.7.10-1.7.5',
      'GalacticGreg-1.7.10-0.9.9S0.1',
      'Galacticraft-3.0.12.507-impact-full',
      'GalaxySpace-1.2.14.04-impact',
      'GregsLighting-1.11.2-mc1.7.10',
      'IC2NuclearControl-2.4.5-impact',
      'INpureCore-[1.7.10]1.0.0B9-62',
      'IguanaTinkerTweaks-1.7.10-2.1.6.2',
      'Impact-GalacticModule-0.0.2',
      'Impact-RecipeModule-0.0.1',
      'Impact-core-0.0.9',
      'ImpactArchitecture-0.0.1',
      'InGameInfoXML-1.7.10-2.8.1.82-universal',
      'InventoryTweaks-1.59-dev-156',
      'Jabba-1.2.7-impact',
      'LoadingScreen-0.0.1-impact',
      'Locomotives-0.04',
      'LunatriusCore-1.7.10-1.1.2.21-universal',
      'Mantle-1.7.10-0.3.2b',
      'MicdoodleCore-3.0.15-GTNH',
      'MobiusCore-1.2.5_1.7.10',
      'ModTweaker2-0.9.6',
      'MouseTweaks-2.4.4-mc1.7.10',
      'NEIIntegration-MC1.7.10-1.1.2',
      'NotEnoughItems-1.7.10-2.1.6-GTNH-universal',
      'OpenBlocks-1.7.10-1.6.2-1.7.10-snapshot-4',
      'OpenComputers-MC1.7.10-1.7.5.7-impact-universal',
      'OpenGlasses-1.1-impact.1',
      'OpenModsLib-1.7.10-0.10.1',
      'OpenPeripheral-1.7.10-AIO-8',
      'OpenSecurity-1.7.10-1.0-117',
      'Opis-1.2.5_1.7.10-RUS_PATCH',
      'P2P-GT5-impact-1.7.10-1.0-universal',
      'PlayerAPI-1.7.10-1.4',
      'ProjectRed-1.7.10-4.7.0pre12.95-Base',
      'ProjectRed-1.7.10-4.7.0pre12.95-Compat',
      'ProjectRed-1.7.10-4.7.0pre12.95-Fabrication',
      'ProjectRed-1.7.10-4.7.0pre12.95-Integration',
      'ProjectRed-1.7.10-4.7.0pre12.95-Lighting',
      'RTG-1.7.10-1.1.1.7',
      'Railcraft_1.7.10-9.12.2.2-impact',
      'RandomThings-2.2.5-impact',
      'SGCraft-1.9.5-mc1.7.10+fix',
      'Schematica-1.7.10-1.7.6.131-universal',
      'Stackie-1.7.10-1.6.0.36-universal',
      'StevesAddons-1.7.10-0.10.17',
      'StevesFactoryManager-A97-Impact',
      'StorageDrawers-1.7.10-1.11.5-impact',
      'SuperTic-1.2.0',
      'TConstruct-1.7.10-1.8.9.12-GTNH',
      'TGregworks-1.7.10-1.0.18',
      'TMechworks-1.7.10-0.2.15.106',
      'TecTech-1.7.10-3.8.7-impact',
      'TiCTooltips-mc1.7.10-1.2.5',
      'UndergroundBiomesConstructs-1.7.10-0.8-beta49',
      'WAILAPlugins-0.2.3.8-impact',
      'WR-CBE-1.7.10-1.4.2-GTNH-universal',
      'Waila-1.5.10_1.7.10',
      'WailaHarvestability-mc1.7.10-1.1.6',
      'WirelessCraftingTerminal-1.7.10-rv3-1.8.7.8-GTNH',
      'YAMCore-1.7.10-0.5.79',
      'Ztones-2.2.2-impact',
      'ae2stuff-1.1.5-impact',
      'appliedenergistics2-rv3-35-impact',
      'backpack-2.2.4-1.7.x',
      'bdlib-1.9.4.109-mc1.7.10',
      'buildcraft-impact-7.1.9a-impact',
      'catwalks-2.0.4',
      'chestup-1.7.10-0.1d-universal',
      'extrautilities-1.2.12',
      'fastcraft-1.25',
      'forestry-4.2.29-impact',
      'galacticraft_fuel_fix-1.0',
      'gendustry-1.6.4.135-mc1.7.10',
      'gregtech-5.09.34.67-impact',
      'industrialcraft-2-2.2.832-impact',
      'journeymap-1.7.10-5.1.4-unlimited',
      'legiblenei_1.7.10-1.6.7.6',
      'logisticspipes-0.9.3.133-impact',
      'malisiscore-1.7.10-0.14.3',
      'malisisdoors-1.7.10-1.13.2',
      'neiaddons-1.12.15.41-mc1.7.10-impact',
      'p455w0rdslib-1.7.10-1.0.4',
      'bspkrsCore-universal-6.16',
      'MrTJPCore-1.7.10-1.1.0.33-universal'
    ]
    return {
      mods, modList,
      faq: ref('first')
    }
  }

}
</script>

<style scoped>
.bg-none {
  background: none;
}

.block-about-text {
  width: 250px;
}

.block-faq {
  padding-left: 100px;
  width: 650px;
}
</style>
