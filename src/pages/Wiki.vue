<template>
  <q-card class="justify-evenly q-ma-lg bg-none" flat square style="padding: 0 200px;">
    <q-card-section class="text-h4" style="text-transform: uppercase; color: white; font-weight: 900; text-align: center">
      {{ $t('wiki_modpack') }}
    </q-card-section>
    <q-card-section class="items-center q-pa-md" style="text-align: center">
      <q-card flat square style="padding-top: 60px; padding-bottom: 60px;">
        <q-splitter v-model="splitterModel" disable>
          <template v-slot:before>
            <q-tabs v-model="tab" active-color="blue" class="text-grey-9" vertical>
              <template v-for="mod in wiki.mods" :key="mod">
                <q-tab :label="mod.mod" :name="mod.mod" />
              </template>
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels v-model="tab" animated transition-next="jump-up" transition-prev="jump-up" vertical>
              <template v-for="mod in wiki.mods" :key="mod">
                <q-tab-panel :name="mod.mod">
                  <q-card-section class="text-h4 q-mb-md" style="text-transform: uppercase">{{ mod.mod }}
                  </q-card-section>

                  <q-card flat>
                    <q-tabs v-model="tabsTiers" active-color="blue" style="color: black">
                      <template v-for="tier in wiki.tiers" :key="tier">
                        <q-tab :label="tier.label" :name="tier.name" />
                      </template>
                    </q-tabs>
                    <q-separator/>
                  </q-card>
                  <q-tab-panels v-model="tabsTiers" animated transition-next="jump-up" transition-prev="jump-up">
                    <template v-for="tier in wiki.tiers" :key="tier">
                      <q-tab-panel :name="tier.name">
                        <q-card class="row justify-center" flat>
                          <template v-for="page in mod.pages" :key="page">
                            <div v-if="tier.name === page.tier" class="q-ma-xs" style="width: 250px">
                              <q-item clickable @click="page.id <= 40 ? getNews(page, mod.id) : ''">
                                <q-card class="q-pa-none q-ma-none bg-none " flat square style="width: 100%; height: 100%">
                                  <q-img :src="page.img" height="205px" width="205px" />
                                  <q-item-label lines="1" style="text-transform: uppercase">
                                    {{ page.name }}
                                  </q-item-label>
                                </q-card>
                              </q-item>
                            </div>
                            <div v-else-if="tier.name === 'all'" class="q-ma-xs" style="width: 250px">
                              <q-item clickable @click="page.id <= 40 ? getNews(page, mod.id) : ''">
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
            <q-item class="text-h5 text-bold items-center q-py-none">{{ $t('wiki_desc') }}</q-item>
            <q-item class="items-center q-py-none" style="min-height: 20px">
              {{ $t('wiki_decs_' + modID + "_" + id) }}
            </q-item>
          </q-card-section>

          <q-card-section class="items-center q-pb-none">
            <q-item class="text-h5 items-center text-bold q-py-none">{{ $t('wiki_general') }}</q-item>
            <q-item class="items-center q-py-none" style="min-height: 20px">
              {{ $t('wiki_general_' + modID + "_" + id) }}
            </q-item>
          </q-card-section>

          <q-card-section v-for="(other, countOther) in otherPage" :key="other" class="items-center q-pb-none">
            <q-item v-if="other.title !== ''" class="text-h6 text-bold items-center q-py-none">
              {{ $t('wiki_other_title_' + modID + "_" + id + '_' + countOther) }}
            </q-item>
            <template v-for="(desc, countDesc) in other.desc" :key="desc">
              <q-item class="items-center q-py-none" style="min-height: 20px">
                {{ $t('wiki_other_desc_' + modID + "_" + id + '_' + countOther + '_' + countDesc) }}
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

    </q-card-section>
  </q-card>
</template>

<script>
import {onMounted, ref, watch} from 'vue'
import wiki from 'assets/wiki.js'

export default {
  name: "Download",

  setup() {
    const dialog = ref(false);

    const titlePage = ref("");
    const descPage = ref("");
    const generalPage = ref("");
    const imgPage = ref("");
    const otherPage = ref([]);
    const modID = ref(0);
    const id = ref(0);
    let tabsTiers = ref('all');
    let tab = ref("impact-core");

    const getNews = (page, mod) => {
      dialog.value = true;
      modID.value = mod;
      id.value = page.id;
      titlePage.value = page.name;
      generalPage.value = page.general;
      descPage.value = page.desc;
      imgPage.value = page.img;
      otherPage.value = page.other;
    };

    return {
      tab,
      tabsTiers,
      splitterModel: ref(15),
      wiki, dialog, titlePage, generalPage, descPage, imgPage, otherPage, id, modID,
      getNews,
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
