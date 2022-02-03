<template>
  <q-card class="justify-evenly q-ma-lg bg-none" flat square style="padding: 0 200px;">

    <q-card-section class="text-h4" style="text-transform: uppercase; color: white; font-weight: 900; text-align: center">
      {{ lang('wiki_modpack') }}
    </q-card-section>
    <q-card-section style="text-transform: uppercase; color: white; text-align: center">
      {{ lang('wiki_credits') }}
    </q-card-section>

    <q-card-section class="text-h3 text-bold" style="text-transform: uppercase; color: white; text-align: center">
      {{ lang('wiki_machines') }}
    </q-card-section>

    <q-card-section class="items-center q-pa-md" style="text-align: center">
      <q-card flat square style="padding-top: 60px; padding-bottom: 60px;">

        <q-splitter v-model="splitterModel" disable>

          <template v-slot:before>
            <q-tabs v-model="tab" active-color="blue" class="text-grey-9" vertical>
              <template v-for="mod in mods" :key="mod['id']">
                <q-tab :label="mod['name']" :name="mod['name']" />
              </template>
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels v-model="tab" animated transition-next="jump-up" transition-prev="jump-up" vertical>
              <template v-for="mod in mods" :key="mod['id']">
                <q-tab-panel :name="mod['name']">

                  <q-card-section class="text-h4 q-mb-md" style="text-transform: uppercase">
                    {{ mod['name'] }}
                  </q-card-section>

                  <q-card flat>
                    <q-tabs v-model="tabsTiers" active-color="blue" style="color: black">
                      <template v-for="tier in tiers" :key="tier">
                        <q-tab :label="tier['label']" :name="tier['name']" />
                      </template>
                    </q-tabs>
                    <q-separator />
                  </q-card>

                  <q-tab-panels v-model="tabsTiers" animated transition-next="jump-up" transition-prev="jump-up">
                    <template v-for="tier in tiers" :key="tier">
                      <q-tab-panel :name="tier['name']">
                        <q-card class="row justify-center" flat>

                          <template v-for="machine in list" :key="machine['id']">
                            <template v-if="mod['name'] === machine['mod']">
                              <div v-if="tier['name'] === machine['tier']" class="q-ma-xs" style="width: 250px">
                                <q-item clickable @click="go(machine['slug'])">
                                  <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                                    <q-img :src="machine['img']" height="205px" width="205px" />
                                    <q-item-label lines="1" style="text-transform: uppercase">
                                      {{ machine['name'] }}
                                    </q-item-label>
                                  </q-card>
                                </q-item>
                              </div>
                              <div v-else-if="tier['name'] === 'all'" class="q-ma-xs" style="width: 250px">
                                <q-item clickable @click="$router.push({ hash: `#${machine['slug']}`})">
                                  <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                                    <q-img :src="machine['img']" height="205px" width="205px" />
                                    <q-item-label lines="1" style="text-transform: uppercase">
                                      {{ machine['name'] }}
                                    </q-item-label>
                                  </q-card>
                                </q-item>
                              </div>
                            </template>
                          </template>

                        </q-card>
                      </q-tab-panel>
                    </template>
                  </q-tab-panels>

                </q-tab-panel>
              </template>
            </q-tab-panels>
          </template>
        </q-splitter>
      </q-card>
    </q-card-section>
  </q-card>

  <q-card>
    <Article v-on:goBack = "goBack" />
  </q-card>
</template>

<script>
import machines from "assets/machines.json";
import mods from "assets/mods.json";
import tiers from "assets/tiers.json";

import Article from "components/Machines";
import {defineComponent, ref} from "vue";
import {TranslateResult, useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {Scroll} from "quasar";

export default defineComponent({
  name: "Mechanics",
  components: {Article},
  setup() {
    const {t: lang} = useI18n()

    let tab = ref("impact");
    let tabsTiers = ref("all");
    const scroll = Scroll;
    const router = useRouter();
    const go = (machine) => {
      router.push({hash: `#${machine}`})
      // router.options.scrollBehavior({hash: `#${machine}`}, {}, () => ({top: scroll.verticalScrollPosition}));
    }

    const goBack = () => {
      // const scrollPoss = () => ({top: scroll.verticalScrollPosition})
      router.push({hash: ``})
      // router.options.scrollBehavior({}, {}, scrollPoss);
    }

    return {
      splitterModel: ref(15),
      list: machines, mods, tiers,
      lang,
      tab, tabsTiers,
      go, goBack
    };
  },
});
</script>

<style scoped>
.bg-none {
  background: none;
}

.badge-last-update {
  font-size: 12px;
  margin-top: -8px;
  margin-right: 12px;
  padding: 2px;
}
</style>
