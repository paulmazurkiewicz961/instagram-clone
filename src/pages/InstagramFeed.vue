<script setup></script>
<template>
  <q-page class="window-height window-width row justify-center items-evenly">
    <div class="row">
      <div class="col-3">
        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
          <div class="q-pt-md q-pl-md">
            <q-img src="../assets/Instalogo.png" height="37px" width="150px" />
          </div>
          <div class="column q-pa-md q-gutter-sm" style="height: 520px">
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="home"
              label="Home"
            />
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="search"
              label="Search"
            />
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="explore"
              label="Explore"
            />
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="send"
              label="Messages"
            />
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="favorite_border"
              label="Notifications"
            />
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="add_box"
              label="Create"
            />
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="account_circle"
              label="Profile"
            />
          </div>
          <div class="q-pt-xl q-pa-md">
            <q-btn
              class="col"
              flat
              rounded
              align="left"
              icon="density_medium"
              label="More"
            />
          </div>
        </q-drawer>
      </div>
    </div>
    <div class="col-5 q-pt-xs q-pb-md">
      <q-card square class="q-mt-xl">
        <q-card-section class="row justify-around">
          <q-btn round color="blue" icon="home" />
          <q-btn round color="black" icon="explore" />
          <q-btn round color="red" icon="search" />
          <q-btn round color="yellow" icon="account_circle" />
          <q-btn round color="pink" icon="add_box" />
          <q-btn round color="green-10" icon="spellcheck" />
          <q-btn round color="purple-10" icon="contactless" />
        </q-card-section>
      </q-card>
      <q-card square class="q-mt-md">
        <q-card-section class="row justify-start">
          <q-item clickable v-ripple>
          <q-item-section side>
            <q-btn round color="blue-grey" icon="turned_in" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
            
          </q-item-section>
          
        </q-item>
        </q-card-section>
        <q-card-section class="justify-evenly">
          <q-img src="../assets/Instalogo.png"/>
        </q-card-section>
        <q-card-section class="row justify-start">
          <q-btn class="row" flat rounded icon="favorite_border" />
          <q-btn class="row" flat rounded icon="mode_comment" />
          <q-btn class="row" flat rounded icon="send" />
        </q-card-section>
        <q-card-section class="row justify-start">
          <div class="text-weight-bold" >Likes: Michelle_owens and others</div>
        </q-card-section>
        <q-card-section class="column justify-start">
          <div>
            Coming in 2023, Suicide Squad: Kill The Justice League. The
            legendary group will take on the mightiest group of heroes on this
            planet.
          </div>
          <div class="text-grey text-subtitle2 q-pt-sm">View all 666 comments</div>
          <div class="text-grey text-caption q-pt-sm">23 hours ago</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input v-model="text" label="Add a comment..." dense/>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-4 q-pt-xl q-pl-xl column">
      <q-list class="row justify-start q-pb-lg">
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-btn round color="black" icon="casino" size="22px"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
            <q-item-label caption>Official Profile</q-item-label>
          </q-item-section>
          <q-item-section side class="text-blue text-weight-bold">
            <q-btn label="Switch" flat size="12px" padding="xs" no-caps />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <p class="text-weight-bold text-blue-grey-3">Suggestions for you</p>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-btn round color="grey" icon="sports_esports" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
            <q-item-label caption>Official Profile</q-item-label>
          </q-item-section>
          <q-item-section side class="text-blue text-weight-bold">
            <q-btn label="Follow" flat size="12px" padding="xs" no-caps/>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-btn round color="yellow" icon="gamepad" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
            <q-item-label caption>Official Profile</q-item-label>
          </q-item-section>
          <q-item-section side class="text-blue text-weight-bold">
            <q-btn label="Follow" flat size="12px" padding="xs" no-caps />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-btn round color="blue" icon="sports_hockey" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
            <q-item-label caption>Official Profile</q-item-label>
          </q-item-section>
          <q-item-section side class="text-blue text-weight-bold">
            <q-btn label="Follow" flat size="12px" padding="xs" no-caps />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-btn round color="green" icon="sports_tennis" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
            <q-item-label caption>Official Profile</q-item-label>
          </q-item-section>
          <q-item-section side class="text-blue text-weight-bold">
            <q-btn label="Follow" flat size="12px" padding="xs" no-caps />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-btn round color="red" icon="sports_basketball" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">Suicide_squadgame</q-item-label>
            <q-item-label caption>Official Profile</q-item-label>
          </q-item-section>
          <q-item-section side class="text-blue text-weight-bold">
            <q-btn label="Follow" flat size="12px" padding="xs" no-caps />
          </q-item-section>
        </q-item>
      </q-list>
      <div class="col">
        <div class="row text-grey q-pl-lg  col">
          <q-btn label="About" flat size="10px" padding="xs" no-caps />
          <q-btn label="Help" flat size="10px" padding="xs" no-caps />
          <q-btn label="Press" flat size="10px" padding="xs" no-caps />
          <q-btn label="API" flat size="10px" padding="xs" no-caps />
          <q-btn label="Jobs" flat size="10px" padding="xs" no-caps />
          <q-btn label="Privacy" flat size="10px" padding="xs" no-caps />
          <q-btn label="Terms" flat size="10px" padding="xs" no-caps />
        </div>
        <div class="row q-pl-lg text-grey col">
          <q-btn label="Locations" flat size="10px" padding="xs" no-caps />
          <q-btn label="Language" flat size="10px" padding="xs" no-caps />
        </div>
        <div class="text-grey q-pl-lg justify-start col">
          <q-btn
            align="around"
            label="2022 Quasagram By Pawel"
            flat
            size="12px"
            icon="copyright"
            padding="sm"
            no-caps
          />
        </div>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-page>
</template>
