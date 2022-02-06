<template>
  <q-card class="justify-evenly q-ma-lg bg-none" flat square style="padding: 0 200px;">

    <q-card-section class="text-h4" style="text-transform: uppercase; color: white; font-weight: 900; text-align: center">
      {{ lang('wiki_modpack') }}
    </q-card-section>
    <q-card-section style="text-transform: uppercase; color: white; text-align: center">
      {{ lang('wiki_credits') }}
    </q-card-section>

    <q-card-section class="text-h3 text-bold" style="text-transform: uppercase; color: white; text-align: center">
      {{ lang('wiki_mechanics') }}
    </q-card-section>

    <q-card-section class="q-pa-none">
      <q-btn to="/wiki" style="border-radius: 0" size="lg" flat icon="keyboard_backspace" text-color="white" />
    </q-card-section>

    <q-card-section class="items-center q-pa-none" style="text-align: center">
      <q-card flat square style="padding-top: 20px; padding-bottom: 20px;">

        <q-card class="row justify-center" flat>
          <template v-for="mechanic in mechanics" :key="mechanic['id']">
            <q-item clickable @click="go(mechanic['slug'])">
              <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                <q-img :src="mechanic['img']" height="205px" width="205px" />
                <q-item-label lines="1" style="text-transform: uppercase">
                  {{ lang("wiki_mechanics_" + mechanic['slug']) }}
                </q-item-label>
              </q-card>
            </q-item>
          </template>
        </q-card>

      </q-card>
    </q-card-section>
  </q-card>

  <q-card>
    <Article v-on:goBack="goBack" />
  </q-card>
</template>

<script>
import mechanics from "assets/mechanics.json";

import Article from "components/Mechanics";
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
      mechanics,
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
