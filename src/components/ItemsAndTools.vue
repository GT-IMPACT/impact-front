<template>

  <q-dialog v-model="dialog" full-height full-width @hide="$emit(`goBack`)">
    <q-card class="q-pa-lg" flat square>
      <q-btn flat id="follow" @click="dialog = false">
        <q-icon color="grey" size="xl" name="close"/>
      </q-btn>
      <q-card-section class="q-pa-none" v-html="compiledMd" />
    </q-card>
  </q-dialog>

</template>

<script>
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import * as marked from "marked";
import mechanics from "assets/items_and_tools.json";
import {useI18n} from "vue-i18n";

export default {
  setup() {
    const $route = useRoute();
    const dialog = ref(false);
    const target = ref(null);
    const compiledMd = ref("");
    const pathFiles = ref("");

    const renderMd = async () => {
      if (cache.has(target.value.article)) {
        compiledMd.value = cache.get(target.value.article);
      } else {
        const preCache = marked.parse(await (await fetch(pathFiles.value + "/" + target.value.article)).text());
        cache.set(target.value.article, preCache);
        compiledMd.value = preCache;
      }
    };
    const cache = new Map();

    const {locale} = useI18n({useScope: 'global'})
    const lang = (text) => {
      locale.value = text
    }

    onMounted(() => {
      locale.value = (localStorage.getItem("lang") === null) ? 'en-US' : localStorage.getItem("lang");
      pathFiles.value = locale.value !== 'ru-RU' ? 'en' : 'ru';
      if ($route.hash) {
        target.value = mechanics.find((v) => v.slug == $route.hash.substring(1));
        renderMd();
        dialog.value = true;
      }
    });

    watch($route, (cur) => {
      if (cur.hash) {
        target.value = mechanics.find((v) => v.slug == cur.hash.substring(1));
        renderMd();
        dialog.value = true;
      }
    });

    watch(locale, (val) => {
      localStorage.setItem("lang", val)
    });

    return {
      dialog, target, compiledMd,
      locale, lang,
    };
  },
};
</script>
<style>
body {
  font-family: 'Montserrat', sans-serif !important;
}

#follow {
  margin: 25px;
  padding: 5px;
  z-index: 2;
  position: fixed;
  top: 10px;
  right: 30px;
  border-radius: 0;
}

img[alt=LOGO] {
  width: 15%;
  height: 15%;
}

img[alt=SMALL] {
  width: 25%;
  height: 25%;
}

img[alt=BIG] {
  width: 50%;
  height: 50%;
}

h1 {
  font-size: 6rem;
  font-weight: 700;
  line-height: 6rem;
  letter-spacing: -0.01562em;
  margin: 20px 0 5px 0;
}

h2 {
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 3.75rem;
  letter-spacing: -0.00833em;
  margin: 20px 0 5px 0;
}

h3 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.125rem;
  letter-spacing: normal;
  margin: 20px 0 5px 0;
}

h4 {
  font-size: 2.125rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 0.00735em;
  margin: 20px 0 5px 0;
}

h5 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: normal;
  margin: 20px 0 5px 0;
}

h6 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  margin: 20px 0 5px 0;
}

a {
  color: #1976D2FF;
  font-weight: 400;
}

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: rgba(94, 94, 94, 0.66);
}

::-webkit-scrollbar-thumb {
  background-color: #1976D2FF;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #1976D2FF;
}
</style>
