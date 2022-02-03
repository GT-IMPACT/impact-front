<template>
  <q-card class="bg-blur header-h row items-center justify-evenly q-mb-lg" flat square>
    <q-card-section class="q-py-none">
      <q-item active-class="color: white" class="items-center justify-center" clickable to='/'>
        <q-item-section class="text-bold text-h4 items-center">IMPACT</q-item-section>
        <q-item-section class="items-center" style="max-width: 80px; font-size: 12px;">GREGTECH EDITION</q-item-section>

      </q-item>
    </q-card-section>
    <q-card-section class="q-py-none">
      <q-list class="row">
        <q-item class="line-h items-center" clickable to='/'>{{ $t('home') }}</q-item>
        <q-item class="line-h items-center" clickable to='/about'>{{ $t('about') }}</q-item>
        <q-item class="line-h items-center" clickable to='/download'>{{ $t('download') }}</q-item>
        <q-item class="line-h items-center" clickable to='/wiki'>{{ $t('wiki') }}</q-item>

      </q-list>
    </q-card-section>
    <q-card-section class="q-py-none">
      <q-item v-if="locale === 'en-US'" class="line-h items-center" clickable @click="lang('ru-RU')">EN</q-item>
      <q-item v-else class="line-h items-center" clickable @click="lang('en-US')">RU</q-item>
    </q-card-section>
  </q-card>
</template>

<script>
import {useI18n} from 'vue-i18n'
import {onMounted, watch} from "vue";

export default {
  name: "Header",
  setup() {
    const {locale} = useI18n({useScope: 'global'})
    const lang = (text) => {
      locale.value = text;
      location.reload();
    }

    onMounted(() => {
      locale.value = (localStorage.getItem("lang") === null) ? 'en-US' : localStorage.getItem("lang");
    })

    watch(locale, (val) => {
      localStorage.setItem("lang", val);
    });

    return {
      locale,
      lang,
    }
  }
}
</script>
<style scoped>

.bg-blur {
  background-color: rgba(76, 28, 102, 0);
}

.line-h {
  text-transform: uppercase;
  font-weight: 700;
}

.line-h-active {
  color: purple;
}


</style>
