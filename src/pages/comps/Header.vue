<template>
  <q-card class="bg-blur header-h row items-center justify-evenly" flat square>
    <q-card-section class="q-py-none">
      <q-item class="items-center" clickable>LOGO</q-item>
    </q-card-section>
    <q-card-section class="q-py-none">
      <q-list class="row">
        <q-item to='/' class="line-h items-center" clickable>{{ $t('home') }}</q-item>
        <q-item to='/about' class="line-h items-center" clickable>{{ $t('about') }}</q-item>
        <q-item to='/download' class="line-h items-center" clickable>{{ $t('download') }}</q-item>
        <q-item to='/wiki' class="line-h items-center" clickable>{{ $t('wiki') }}</q-item>

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
      locale.value = text
    }

    onMounted(() => {
      locale.value = (localStorage.getItem("lang") === null) ? 'en-US' : localStorage.getItem("lang");
    })

    watch(locale, (val) => {
      localStorage.setItem("lang", val)
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
