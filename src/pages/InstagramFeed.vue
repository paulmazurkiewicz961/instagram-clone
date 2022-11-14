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
          <q-card-section class="row justify-start">
            <q-btn class="row" flat rounded  icon="favorite_border"/>
            <q-btn class="row" flat rounded  icon="mode_comment"/>
            <q-btn class="row" flat rounded  icon="send"/>
          </q-card-section>
          <q-card-section class="row justify-start">
          <p class="text-weight-bold">Likes: Michelle_owens and others</p>
          </q-card-section>
          <q-card-section class="column justify-start">
            <p>Coming in 2023, Suicide Squad: Kill The Justice League. The legendary group will take on the mightiest group of heroes on this planet. </p>
            <p class="text-grey text-subtitle2">View all 666 comments </p>
            <p class="text-grey text-caption">23 hours ago</p>
             </q-card-section>
             <q-separator/>
             <q-card-section>
              <q-input v-model="text" label="Add a comment"/>       
             </q-card-section>
            

        </q-card>
        </div>      
       <div class="col-4 q-pt-xl q-pl-xl column">
       <q-list class="row justify-start q-pb-lg">
      <q-item clickable v-ripple>
        <q-item-section side>
        <q-avatar round size="58px">
          <img src="../assets/suicidesquad.jpg"/>
        </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
        <q-item-label caption>Official Profile</q-item-label>
        </q-item-section>
        <q-item-section side class="text-blue text-weight-bold">
          <q-btn label="Switch" flat size="12px" padding="xs"/> 
        </q-item-section>
      </q-item>
      
      
      <q-item>
      <q-item-section>
        <p class="text-weight-bold text-blue-grey-3">Suggestions for you</p>
      </q-item-section>
      
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section side>
        <q-avatar round size="38px">
          <img src="../assets/suicidesquad.jpg"/>
        </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
        <q-item-label caption>Official Profile</q-item-label>
        </q-item-section>
        <q-item-section side class="text-blue text-weight-bold">
          <q-btn label="Follow" flat size="12px" padding="xs"/> 
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section side>
        <q-avatar round size="38px">
          <img src="../assets/suicidesquad.jpg"/>
        </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
        <q-item-label caption>Official Profile</q-item-label>
        </q-item-section>
        <q-item-section side class="text-blue text-weight-bold">
          <q-btn label="Follow" flat size="12px" padding="xs"/> 
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section side>
        <q-avatar round size="38px">
          <img src="../assets/suicidesquad.jpg"/>
        </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
        <q-item-label caption>Official Profile</q-item-label>
        </q-item-section>
        <q-item-section side class="text-blue text-weight-bold">
          <q-btn label="Follow" flat size="12px" padding="xs"/> 
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section side>
        <q-avatar round size="38px">
          <img src="../assets/suicidesquad.jpg"/>
        </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
        <q-item-label caption>Official Profile</q-item-label>
        </q-item-section>
        <q-item-section side class="text-blue text-weight-bold">
          <q-btn label="Follow" flat size="12px" padding="xs"/> 
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section side>
        <q-avatar round size="38px">
          <img src="../assets/suicidesquad.jpg"/>
        </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
        <q-item-label caption>Official Profile</q-item-label>
        </q-item-section>
        <q-item-section side class="text-blue text-weight-bold">
          <q-btn label="Follow" flat size="12px" padding="xs"/> 
        </q-item-section>
      </q-item>
      
      
      
       </q-list>
       <div class="col">
       <div class="row text-grey col">
        <q-btn label="About" flat size="10px" padding="xs"/>
        <q-btn label="Help" flat size="10px" padding="xs"/>
        <q-btn label="Press" flat size="10px" padding="xs"/>
        <q-btn label="API" flat size="10px" padding="xs"/>
        <q-btn label="Jobs" flat size="10px" padding="xs"/>
        <q-btn label="Privacy" flat size="10px" padding="xs"/>
        <q-btn label="Terms" flat size="10px" padding="xs"/>
        </div>
        <div class="row text-grey col">
        <q-btn label="Locations" flat size="10px" padding="xs"/>
        <q-btn label="Language" flat size="10px" padding="xs"/>  
        </div>
        <div class="text-grey justify-start col">
           <q-btn align="around" label="2022 Quasagram By Pawel" flat size="12px" icon="copyright" padding="sm"/>
        </div>
        </div>
       </div>
       

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-page>
</template>