<script setup>
import { defineComponent, ref } from "vue";
import { useRoute} from "vue-router";
import EssentialLink from "components/EssentialLink.vue";

const route = useRoute()

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-if="route.name == 'InstagramFeed'"></q-drawer>
    <q-footer 
    v-else 
    sticky
    class="bg-white text-grey"
    >
    <div class="column">
      <q-toolbar class="justify-center col-6"> 
        <q-btn label="Meta" flat size="12px" padding="xs"/>
        <q-btn label="About" flat size="12px" padding="xs"/>
        <q-btn label="Blogs" flat size="12px" padding="xs" />
        <q-btn label="Jobs" flat size="12px" padding="xs"/>
        <q-btn label="Help" flat size="12px" padding="xs"/>
        <q-btn label="API" flat size="12px" padding="xs"/>
        <q-btn label="Privacy" flat size="12px" padding="xs"/>
        <q-btn label="Terms" flat size="12px" padding="xs"/>
        <q-btn label="Top Accounts" flat size="12px" padding="xs"/>
        <q-btn label="Hashtags" flat size="12px" padding="xs"/>
        <q-btn label="Locations" flat size="12px" padding="xs"/>
        <q-btn label="Instagram Lite" flat size="12px" padding="xs"/>
        <q-btn label="Contact uploading & non-users" flat size="12px" padding="xs"/>
        
        <!-- To-do: Complete Buttons -->
        <!--Complete the Q-drawer -->
      </q-toolbar>
      <q-toolbar class="justify-center col-6">
        <q-btn-dropdown label="English" flat size="12px" padding="sm">
          <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Francais</q-item-label>
          </q-item-section>
        </q-item>
        </q-btn-dropdown>
        <q-btn align="left" label="2022 Instagram from Meta" flat size="12px" icon="copyright" padding="sm"/>
      </q-toolbar>
      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
