<template>
  <q-card class="justify-evenly q-ma-lg bg-none" flat square style="padding: 0 200px;">

    <q-card-section class="text-h4" style="text-transform: uppercase; color: white; font-weight: 900; text-align: center">
      {{ lang('wiki_modpack') }}
    </q-card-section>
    <q-card-section style="text-transform: uppercase; color: white; text-align: center">
      {{ lang('wiki_credits') }}
    </q-card-section>

    <q-card-section class="text-h3 text-bold" style="text-transform: uppercase; color: white; text-align: center">
      {{ lang('wiki_items') }}
    </q-card-section>

    <q-card-section class="q-pa-none">
      <q-btn flat icon="keyboard_backspace" size="lg" style="border-radius: 0" text-color="white" to="/wiki" />
    </q-card-section>

    <q-card-section class="items-center q-pa-none" style="text-align: center">
      <q-card flat square style="padding-top: 20px; padding-bottom: 20px;">

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

                  <q-card class="row justify-center" flat>
                    <template v-for="item in items" :key="item['id']">
                      <template v-if="mod['name'] === item['mod']">
                        <div class="q-ma-xs" style="width: 250px">
                          <q-item clickable @click="go(item['slug'])">
                            <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                              <q-img :src="item['img']" height="205px" width="205px" />
                              <q-item-label lines="1" style="text-transform: uppercase">
                                {{ item['name'] }}
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
          </template>

        </q-splitter>

      </q-card>
    </q-card-section>
  </q-card>

  <q-card>
    <Article v-on:goBack="goBack" />
  </q-card>
</template>

<script>
import items from "assets/items_and_tools.json";
import mods from "assets/mods.json";

import Article from "components/ItemsAndTools";
import {defineComponent, ref} from "vue";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {Scroll} from "quasar";

export default defineComponent({
  name: "ItemsAndTools",
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
      items, mods,
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
