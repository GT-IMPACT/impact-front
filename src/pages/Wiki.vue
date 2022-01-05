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
        <q-splitter v-model="splitterModel" disable>
          <template v-slot:before>
            <q-tabs v-model="tab" active-color="blue" class="text-grey-9" vertical>
              <template v-for="mod in wiki.mod" :key="mod">
                <q-tab :label="mod.name" :name="mod.name" />
              </template>
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels v-model="tab" animated transition-next="jump-up" transition-prev="jump-up" vertical>
              <template v-for="mod in wiki.mod" :key="mod">
                <q-tab-panel :name="mod.name">
                  <q-card-section class="text-h4 q-mb-md" style="text-transform: uppercase">{{ mod.name }}
                  </q-card-section>

                  <q-card class="q-pb-xl" flat>
                    <q-tabs v-model="tabsModule" active-color="blue" style="color: black">
                      <template v-for="module in wiki.module" :key="module">
                        <q-tab :icon="module.icon" :label="module.label" :name="module.name" />
                      </template>
                    </q-tabs>
                  </q-card>

                  <q-tab-panels v-model="tabsModule" animated transition-next="jump-up" transition-prev="jump-up">
                    <template v-for="module in wiki.module" :key="module">
                      <q-tab-panel :name="module.name">
                        <template v-if="module.name === 'machines'">
                          <q-card flat>
                            <q-tabs v-model="tabsTiers" active-color="blue" style="color: black">
                              <template v-for="tier in wiki.tiers" :key="tier">
                                <q-tab :label="tier.label" :name="tier.name" />
                              </template>
                            </q-tabs>
                            <q-separator />
                          </q-card>
                          <q-tab-panels v-model="tabsTiers" animated transition-next="jump-up" transition-prev="jump-up">
                            <template v-for="tier in wiki.tiers" :key="tier">
                              <q-tab-panel :name="tier.name">
                                <q-card class="row justify-center" flat>
                                  <template v-for="page in wiki.machines[mod.id].pages" :key="page">
                                    <div v-if="tier.name === page.tier" class="q-ma-xs" style="width: 250px">
                                      <q-item :disable="page.id > blockID" clickable @click="page.id <= blockID ? getNews(page, mod.id) : ''">
                                        <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                                          <q-img :src="page.img" height="205px" width="205px" />
                                          <q-item-label lines="1" style="text-transform: uppercase">
                                            {{ page.name }}
                                          </q-item-label>
                                        </q-card>
                                      </q-item>
                                    </div>
                                    <div v-else-if="tier.name === 'all'" class="q-ma-xs" style="width: 250px">
                                      <q-item :disable="page.id > blockID" clickable @click="page.id <= blockID ? getNews(page, mod.id) : ''">
                                        <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                                          <q-img :src="page.img" height="205px" width="205px" />
                                          <q-item-label lines="1" style="text-transform: uppercase">
                                            {{ page.name }}
                                          </q-item-label>
                                        </q-card>
                                      </q-item>
                                    </div>
                                  </template>
                                </q-card>
                              </q-tab-panel>
                            </template>
                          </q-tab-panels>
                        </template>
                        <template v-else-if="module.name === 'mechanics'">
                          <q-card class="row justify-center" flat>
                            <template v-for="page in wiki.mechanics[mod.id].pages" :key="page">
                              <div class="q-ma-xs" style="width: 250px">
                                <q-item :disable="page.id > blockID" clickable @click="page.id <= blockID ? getMachines(page, mod.id) : ''">
                                  <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                                    <q-img :src="page.img" height="205px" width="205px" />
                                    <q-item-label lines="1" class="q-pt-sm" style="text-transform: uppercase">
                                      {{ page.name }}
                                    </q-item-label>
                                  </q-card>
                                </q-item>
                              </div>
                            </template>
                          </q-card>
                        </template>
                      </q-tab-panel>
                    </template>
                  </q-tab-panels>
                </q-tab-panel>
              </template>
            </q-tab-panels>
          </template>
        </q-splitter>
      </q-card>

      <q-dialog v-model="dialog" v-close-popup class="q-pa-none" transition-hide="0" transition-show="0">
        <q-card class="q-pa-lg" flat square style="width: 800px; max-width: 1200px">

          <q-card-section class="text-h4 items-center text-bold">{{ titlePage }}</q-card-section>
          <q-img :src="imgPage" height="300px" width="300px" />

          <q-card-section class="items-center q-pb-none">
            <q-item class="text-h5 text-bold items-center q-py-none">{{ lang('wiki_desc') }}</q-item>
            <q-item class="items-center q-py-none" style="min-height: 20px">
              {{ lang('wiki_desc_' + modID + "_" + id) }}
            </q-item>
          </q-card-section>

          <q-card-section class="items-center q-pb-none">
            <q-item class="text-h5 items-center text-bold q-py-none">{{ lang('wiki_general') }}</q-item>
            <q-item class="items-center q-py-none" style="min-height: 20px">
              {{ lang('wiki_general_' + modID + "_" + id) }}
            </q-item>
          </q-card-section>

          <q-card-section v-for="(other, countOther) in otherPage" :key="other" class="items-center q-pb-none">
            <q-item v-if="other.title !== ''" class="text-h6 text-bold items-center q-py-none">
              {{ lang('wiki_other_title_' + modID + "_" + id + '_' + countOther) }}
            </q-item>
            <template v-for="(desc, countDesc) in other.desc" :key="desc">
              <q-item class="items-center q-py-none" style="min-height: 20px">
                {{ lang('wiki_other_desc_' + modID + "_" + id + '_' + countOther + '_' + countDesc) }}
              </q-item>
            </template>
            <template v-for="img in other.img" :key="img">
              <q-card-section v-if="img.img !== null" class="q-pa-none">
                <q-item class="items-center q-py-none">
                  <q-img :src="img.img" class="img-fix items-center q-pa-none" style="max-height: 600px; max-width: 600px" />
                </q-item>
              </q-card-section>
            </template>
          </q-card-section>

        </q-card>
      </q-dialog>

      <q-dialog v-model="dialogMachines" v-close-popup class="q-pa-none" transition-hide="0" transition-show="0">
        <q-card class="q-pa-lg" flat square style="width: 800px; max-width: 1200px">

          <q-card-section class="text-h4 items-center text-bold">{{ machinesTitle }}</q-card-section>
          <q-img :src="machinesImg" height="300px" width="300px"/>

          <q-card-section v-for="(ctg, c1) in machinesCategory" :key="ctg" class="items-center q-pb-none">
            <q-item v-if="ctg.title !== ''" class="text-h6 text-bold items-center q-py-none">
              <template v-if="debug === 1">{{ ctg.title }}</template>
              {{ lang('wiki_machines_title_' + modID + "_" + id + '_' + c1) }}
            </q-item>
            <template v-for="(desc, c2) in ctg.body" :key="desc">
              <q-item class="items-center q-py-none" style="min-height: 20px">
                <template v-if="debug === 1">{{ desc }}</template>
                {{ lang('wiki_machines_body_' + modID + "_" + id + '_' + c1 + '_' + c2) }}
              </q-item>
            </template>
            <template v-for="img in ctg.imgBody" :key="img">
              <q-card-section v-if="img !== null" class="q-pa-none">
                <q-item class="items-center q-py-none">
                  <q-img :src="img" class="img-fix items-center q-pa-none" style="max-height: 600px; max-width: 600px" />
                </q-item>
              </q-card-section>
            </template>
          </q-card-section>

        </q-card>
      </q-dialog>

    </q-card-section>
  </q-card>
</template>

<script>
import {onMounted, ref, watch} from 'vue'
import wiki from 'assets/wiki.js'
import {useQuasar} from "quasar";
import {TranslateResult, useI18n} from "vue-i18n";

export default {
  name: "Download",

  setup() {
    const dialog = ref(false);
    const dialogMachines = ref(false);

    const titlePage = ref("");
    const descPage = ref("");
    const generalPage = ref("");
    const imgPage = ref("");
    const otherPage = ref([]);
    const modID = ref(0);
    const id = ref(0);


    const machinesImg = ref("");
    const machinesTitle = ref("");
    const machinesID = ref(0);
    const machinesCategory = ref([]);
    const debug = ref(0);


    let tabsTiers = ref('all');
    let tabsModule = ref('machines');
    let tab = ref("impact-core");
    const blockID = ref(200);

    const $q = useQuasar()
    const {t:lang} = useI18n()

    const notify = () => {
      console.log(lang('notify_wiki'))
        $q.notify({message: lang('notify_wiki'), color: 'purple', position: 'top'});
      localStorage.setItem("notifyBool", "true");
    }

    onMounted(() => {
     if (localStorage.getItem("notifyBool") != "true") {
       notify();
     }
    });

    const getNews = (page, mod) => {
      console.log(mod)
      dialog.value = true;
      modID.value = mod;
      id.value = page.id;
      titlePage.value = page.name;
      generalPage.value = page.general;
      descPage.value = page.desc;
      imgPage.value = page.img;
      otherPage.value = page.other;
    };

    const getMachines = (page, mod) => {
      dialogMachines.value = true;
      modID.value = mod;
      machinesID.value = page.id;
      machinesImg.value = page.img;
      machinesTitle.value = page.name;
      machinesCategory.value = page.category;
      debug.value = page.debug;
    }

    return {
      tab,
      tabsTiers, tabsModule,
      splitterModel: ref(15),
      wiki, dialog, titlePage, generalPage, descPage, imgPage, otherPage, id, modID, blockID,
      dialogMachines, machinesCategory, machinesID, machinesImg, machinesTitle, debug,
      getNews, getMachines, lang

    }
  }
}
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
