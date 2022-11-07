<script setup></script>
<template>
  <q-page class="window-height window-width row justify-center items-evenly">
  
<div class="row">
<div class="col-3">
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
    </q-drawer>
    </div>
    </div>
    <div class="col-5 q-pt-xs q-pb-lg">
        <q-card square class="q-mt-xl">
          <q-card-section class="row justify-around">
           <q-avatar color="blue" text-color="white" icon="home" />
           <q-avatar color="yellow" text-color="white" icon="search" />
           <q-avatar color="black" text-color="white" icon="explore" />
           <q-avatar color="red" text-color="white" icon="send" />
           <q-avatar color="green" text-color="white" icon="favorite_border" />
           <q-avatar color="grey" text-color="white" icon="add_box" /> 
          </q-card-section>
        </q-card>
        <q-card square class="q-mt-md">
          <q-card-section class="row justify-start">
            <q-avatar color="black" text-color="white" icon="bolt"/>
          </q-card-section>
          <q-card-section class="justify-evenly">
            <q-img src="../assets/suicidesquad.jpg"
            width="580px"/>
          </q-card-section>
            

        </q-card>
        </div>      
       <div class="col-4 q-pt-xl q-pr-sm column">
       <q-list class="columb">
      <q-item clickable v-ripple >
        <q-item-section>
        <q-avatar color="black" text-color="green" icon="bolt"/>
        <q-item-section> Picture of a bolt</q-item-section>
        </q-item-section>
      </q-item>
      <q-item>
      <q-item-section>
        <p class="text-weight-bold text-blue-grey-3">Suggestions for you</p>
      </q-item-section>   
      </q-item>
      <q-item>
        <q-item-section>
          <q-avatar color="black" text-color="green" icon="bolt"/>
          <q-item-section> Picture of a bolt</q-item-section>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-avatar color="black" text-color="green" icon="bolt"/>
          <q-item-section> Picture of a bolt</q-item-section>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-avatar color="black" text-color="green" icon="bolt"/>
          <q-item-section> Picture of a bolt</q-item-section>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-avatar color="black" text-color="green" icon="bolt"/>
          <q-item-section> Picture of a bolt</q-item-section>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-avatar color="black" text-color="green" icon="bolt"/>
          <q-item-section> Picture of a bolt</q-item-section>
        </q-item-section>
      </q-item>

       </q-list>
       </div>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-page>
</template>