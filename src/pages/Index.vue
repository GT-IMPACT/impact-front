<template>
  <q-page style="min-height: 750px;">
    <q-card class="q-pa-none bg-none" flat square style="margin-top: 50px;">
      <q-card class="row justify-center items-center bg-none" flat>
        <q-card-section class="text-white" style="width: 450px; text-align: right">
          <span style="text-transform: uppercase; font-size: 50px; font-weight: 900;">
            {{$t('home_title_impact') }}
          </span>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-md">
            <q-carousel v-model="slide" navigation arrows animated infinite style="width: 500px; height: 300px;" swipeable>
              <template v-for="(pic, id) in updates.homePic" :key="pic">
                <q-carousel-slide :name="id" :img-src="pic.src" />
              </template>
            </q-carousel>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="q-pa-none bg-none " flat>
        <div class="row justify-center items-center">
          <span class="text-white" style="text-transform: uppercase; font-weight: 700;">
            {{$t('update_progress') }}
          </span>
        </div>
        <div class="row justify-center items-center">
          <q-linear-progress :value="update" class="q-mt-sm" color="orange" dark rounded size="20px" stripe style="width: 600px;" />
        </div>
      </q-card>
      <q-card class="bg-none" flat>
        <div class="row justify-center items-center text-white q-my-lg">
          <q-card-section>
            <q-btn type="a" href="https://github.com/GT-IMPACT/IMPACT-MODPACK" target="_blank" class="border-radius-inherit" flat icon="img:https://cdn.discordapp.com/attachments/886791383740985464/886960175041380352/github-brands.svg" style="color: white" />
          </q-card-section>
          <q-card-section>
            <q-btn type="a" href="https://discord.gg/bMf2qvd" target="_blank" class="border-radius-inherit" flat icon="discord" style="color: white" />
          </q-card-section>
          <q-card-section>
            <q-btn type="a" href="https://www.patreon.com/gtimpact" target="_blank" class="border-radius-inherit" flat icon="img:https://cdn.discordapp.com/attachments/886791383740985464/886959672156897300/patreon-brands.svg" style="color: white" />
          </q-card-section>
          <q-card-section>
            <q-btn type="a" href="https://vk.com/gregcorporation" target="_blank" class="border-radius-inherit" flat icon="img:https://cdn.discordapp.com/attachments/886791383740985464/886959234552586240/vk-brands.svg" style="color: white" />
          </q-card-section>
          <q-card-section>
            <q-btn type="a" href="https://www.curseforge.com/minecraft/modpacks/impact-gt-edition" target="_blank" class="border-radius-inherit" flat icon="img:https://cdn.discordapp.com/attachments/916393114166525974/970202929879457822/unoptimized_logo.svg" style="color: white" />
          </q-card-section>
          <q-card-section>
            <q-btn type="a" href="https://boosty.to/gt-impact" target="_blank" class="border-radius-inherit" flat>
              <q-icon name="img:https://cdn.discordapp.com/attachments/886791383740985464/886956617227190294/White.svg" size="28px"/>
            </q-btn>
          </q-card-section>
        </div>
      </q-card>
    </q-card>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import updates from 'assets/updates.js'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const {locale} = useI18n({useScope: 'global'})
    return {
      locale,
      slide: ref(1),
      update: 1.0,
      updates
    }
  }
})
</script>
<style>
.bg-none {
  background: none;
}
</style>
