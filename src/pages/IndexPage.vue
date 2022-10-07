<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#0000);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-img src="../assets/iphone.png" /> 
      </div>
    </div>
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Instagram</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="email" type="email" label="Email or username">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Log In" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgotten your password?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
