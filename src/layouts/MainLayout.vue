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
    reveal 
    class="bg-white text-grey"
    >
      <q-toolbar class="justify-evenly"> 
        <q-btn label="Meta" flat size="11px" padding="sm"/>
        <q-btn label="About" flat size="11px" padding="sm"/>
        <q-btn label="Blogs" flat size="11px" padding="sm" />
        <q-btn label="Jobs" flat size="11px" padding="sm"/>
        <q-btn label="Help" flat size="11px" padding="sm"/>
        <q-btn label="API" flat size="11px" padding="sm"/>
        <q-btn label="Privacy" flat size="11px" padding="sm"/>
        <q-btn label="Terms" flat size="11px" padding="sm"/>
        <q-btn label="Top Accounts" flat size="11px" padding="sm"/>
        <q-btn label="Hashtags" flat size="11px" padding="sm"/>
        <q-btn label="Locations" flat size="11px" padding="sm"/>
        <q-btn label="Instagram Lite" flat size="11px" padding="sm"/>
        <q-btn label="Contact uploading and non-users" flat size="11px" padding="sm"/>
        <q-btn label="Dance" flat size="11px" padding="sm"/>
        <q-btn label="Food and drinks" flat size="11px" padding="sm"/>
        <q-btn label="Home and garden" flat size="11px" padding="sm"/>
        <q-btn label="Music" flat size="11px" padding="sm"/>

        <!-- To-do: Complete Buttons -->
        <!--Complete the Q-drawer -->
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
