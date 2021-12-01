<template>
  <q-card class="justify-evenly q-ma-lg bg-none" flat square style="padding: 0 200px;">
    <q-card-section class="text-h4" style="text-transform: uppercase; color: white; font-weight: 900; text-align: center">
      {{ $t('download_modpack') }}
    </q-card-section>
    <q-card-section class="items-center q-pa-md" style="text-align: center">
      <q-card flat square>

        <q-card flat square>
          <q-tabs v-model="tab" class="bg-primary text-white shadow-2 q-pa-sm">
            <template v-for="update in updates.updateList" :key="update">
              <q-tab :label="update.label" :name="update.name" class="q-mt-sm">
                <q-badge v-if="update.name === 'last'" class="badge-last-update" color="red" floating>
                  {{ $t('last_update') }}
                </q-badge>
              </q-tab>
            </template>
          </q-tabs>
        </q-card>

        <q-card>
          <q-tab-panels v-model="tab" animated>
            <template v-for="update in updates.updateList" :key="update">
              <q-tab-panel :name="update.name">
                <q-card square flat style="padding-top: 60px; padding-bottom: 60px">
                  <q-card class="row justify-evenly q-py-none" flat square>
                    <q-card>
                      <q-img :src="update.img" height="360px" width="720px" />
                    </q-card>
                    <q-card>
                      <q-card-section>
                        <q-card-section class="q-mx-md q-py-none">
                          <span class="text-h3 q-mb-md text-bold">{{ update.label }}</span>
                          <span class="q-mx-sm">{{ $t('update_date_' + update.id) }}</span>
                        </q-card-section>
                        <div class="text-h5 q-my-md text-bold">{{ $t('update_title_' + update.id)  }}</div>
                        <q-item class="justify-center items-center" style="width: 450px">{{ $t('update_desc_' + update.id) }}</q-item>
                      </q-card-section>
                      <q-card-section class="q-py-none">
                        <q-btn :href="update.linkClient" class="q-mx-sm" flat :label="$t('client')" no-caps style="border: 1px solid black; width: 100px" type="a" />
                        <q-btn :href="update.linkServer" class="q-mx-sm" flat :label="$t('server')" no-caps style="border: 1px solid black; width: 100px" type="a" />
                      </q-card-section>
                      <q-card-section>
                        <q-item class="justify-center items-center q-py-none" style="font-size: 12px;">{{$t('download_server_cores')}}</q-item>
                        <q-btn :href="'https://gtimpact.space/go/server_cores/THERMOS_IMPACT_EMPTY_SERVER.zip'" class="q-mx-sm" flat label="Thermos" no-caps size="md" type="a" />
                        <q-btn :href="'https://gtimpact.space/go/server_cores/ULTRAMINE_ORIGINAL_IMPACT_EMPTY_SERVER.zip'" class="q-mx-sm" flat label="UltraMine" no-caps size="md" type="a" />
                        <q-btn :href="'https://gtimpact.space/go/server_cores/ULTRAMINE_PATCHED_IMPACT_EMPTY_SERVER.zip'" class="q-mx-sm" flat label="UltraMine (IMPACT)" no-caps size="md" type="a" />
                      </q-card-section>
                    </q-card>
                  </q-card>
                  <q-card class="q-my-lg">
                    <span class="text-h6 q-mb-md text-bold">{{$t('changelog')}}</span>
                    <q-card-section class="q-pa-md q-gutter-sm">
                        <q-input square style="width: 200px" ref="filterRef" v-model="filter" :label="$t('search')">
                          <template v-slot:append>
                            <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer" @click="resetFilter" />
                          </template>
                        </q-input>
                        <q-tree :nodes="update.changelog" node-key="label" default-expand-all :filter="filter" />
                    </q-card-section>
                  </q-card>
                </q-card>
              </q-tab-panel>
            </template>
          </q-tab-panels>
        </q-card>

      </q-card>

    </q-card-section>
  </q-card>
</template>

<script>
import {ref} from 'vue'
import updates from 'assets/updates.js'

export default {
  name: "Download",
  setup() {
    const filter = ref('')
    const filterRef = ref(null)

    return {
      resetFilter () {
        filter.value = ''
        filterRef.value.focus()
      },
      tab: ref('last'),
      filter,
      filterRef,
      updates,
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
