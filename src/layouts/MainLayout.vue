<template>
  <q-layout view="lHh Lpr lFf">
    
      
    <q-footer reveal class="bg-white text-grey q-px-l text2" >
      <q-toolbar>
        <q-btn label="Meta" flat /> 
        <q-btn label="About" flat/> 
        <q-btn label="Blogs" flat/> 
        <q-btn label="Jobs" flat/> 
        <q-btn label="Help" flat/> 
        <q-btn label="API" flat/> 
        <q-btn label="Privacy" flat/> 
        <q-btn label="Terms" flat/> 
        <q-btn label="Top Accounts" flat/> 
        <q-btn label="Hashtags" flat/> 
        <q-btn label="Locations" flat/> 
        <q-btn label="Instagram Lite" flat/> 
        <q-btn label="Contact uploading and non-users" flat/> 
        <q-btn label="Dance" flat/> 
        <q-btn label="Food and drinks" flat/> 
        <q-btn label="Home and garden" flat/> 
        <q-btn label="Music" flat/> 
        
          <!-- To-do: Complete Buttons -->
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

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

export default defineComponent({
  name: "MainLayout",

  

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList
    };
  },
});
</script>
