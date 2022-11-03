<script setup></script>
<template>
<q-layout view="hHh lpR fFf">

    <q-drawer 
    show-if-above 
    v-model="leftDrawerOpen" 
    side="left" 
    bordered
    >
    <div class="q-pt-md q-pl-md">
    <q-img src="../assets/Instalogo.png" height="37px" width="150px" />
    </div>
    <div class="column q-pa-md q-gutter-sm" style="height: 520px">
      <q-btn class="col" flat rounded align="left" icon="home" label="Home"/>
      <q-btn class="col" flat rounded align="left" icon="search" label="Search"/>
      <q-btn class="col" flat rounded align="left" icon="explore" label="Explore"/>
      <q-btn class="col" flat rounded align="left" icon="send" label="Messages"/>
      <q-btn class="col" flat rounded align="left" icon="favorite_border" label="Notifications"/>
      <q-btn class="col" flat rounded align="left" icon="add_box" label="Create"/>
      <q-btn class="col" flat rounded align="left" icon="account_circle" label="Profile"/>
    </div>
    <div class="q-pt-xl q-pa-md">
      <q-btn class="col" flat rounded align="left" icon="density_medium" label="More"/>
    </div>
    <div class="col-6">
      <q-card square class="shadow-1">
      
      </q-card>
 </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>