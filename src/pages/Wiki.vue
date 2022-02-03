<template>
  <q-card class="justify-evenly q-ma-lg bg-none" flat square style="padding: 0 200px;">
    <q-card-section class="text-h4" style="text-transform: uppercase; color: white; font-weight: 900; text-align: center">
      {{ lang('wiki_modpack') }}
    </q-card-section>
    <q-card-section style="text-transform: uppercase; color: white; text-align: center">
      {{ lang('wiki_credits') }}
    </q-card-section>

    <q-card-section class="items-center q-pa-md" style="text-align: center">
      <q-card flat square style="padding-top: 60px; padding-bottom: 60px;">

        <q-card class="row justify-center" flat>
          <template v-for="module in modules" :key="module['id']">
            <q-item :disable="module['disable']" :to="'/wiki/' + module['name']" clickable>
              <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 250px;">
                <q-icon style="height: 100px;" size="xl" :name="module['icon']"/>
                <q-item-label lines="1" style="text-transform: uppercase">
                  {{ lang(module['label']) }}
                </q-item-label>
              </q-card>
            </q-item>
          </template>
        </q-card>

      </q-card>
    </q-card-section>

  </q-card>
</template>

<script>
import {useI18n} from "vue-i18n";
import modules from "assets/modules.json"

export default {
  name: "Download",
  setup() {
    const {t: lang} = useI18n()
    return {
      lang, modules
    }
  }
}
</script>

<style scoped>
.bg-none {
  background: none;
}
</style>
