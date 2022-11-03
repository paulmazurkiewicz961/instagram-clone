<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="row">
      <div class="col-6 q-px-xl">
        <q-img
          height="600px"
          width="360px"
          src="../assets/iphone.png"
          class="q-mr-xl"
        />
      </div>
      <div class="col-6 q-pt-xs q-pb-lg">
        <q-card square class="shadow-1">
          <q-card-section class="white text-center">
            <q-img src="../assets/Instalogo.png" height="65px" width="220px" />
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-sm q-pb-xs q-gutter-sm">
              <q-input
                color="grey-12"
                bg-color="grey-12"      
                outlined
                square
                clearable
                v-model="user.email"
                type="email"
                label="Phone number, username or email address"
                
              >
                <q-separator />

                <template v-slot:prepend> </template>
              </q-input>
              <q-input
                color="grey-12"
                bg-color="grey-12"            
                outlined
                square
                clearable
                v-model="user.password"
                type="password"
                label="Password"
              >
                <template v-slot:prepend> </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg q-pb-sm">
            <q-btn
              align="around"
              unelevated
              size="md"
              color="light-blue"
              class="full-width text-white"
              label="Log In"
              :to="{name:'InstagramFeed'}"
            />
          </q-card-actions>
          <div class="q-pt-xs">
          <q-card-section class="text-center text-blue-gray-8">
            OR            
          </q-card-section>
          </div>
          <div class="q-pt-xs">
          <q-card-section class="text-center text-blue-10 text-weight-bold">
            <q-icon name="fa-brands fa-square-facebook" />
            Log in with Facebook
          </q-card-section>
          </div>
          
          <q-card-section class="text-center text-caption">
            <p class="text-blue-10">Forgotten your password?</p>
          </q-card-section>
        </q-card>
        <q-card square class="q-mt-md">
          <q-card-section class="text-center row text-blue-grey-10 justify-center">
            <p>Don't have an account?</p>
            <q-btn flat color="primary" class="text-blue q-pl-xs q-pb-sm row" label="Sign up" />
          </q-card-section>
        </q-card>

        <p class="col-12 text-center q-mt-md text-weight-regular">Get the app.</p>
        <div class="row justify-center">
          <q-img         
            class="col-6 q-pr-sm"
            src="../assets/appstore.png"
            height="40px"
            width="150px"
            rounded-borders
          />
        
          <q-img
            class="col-6 q-ml-sm"
            src="../assets/googlestore.png"
            height="40px"
            width="150px"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const user = reactive({
      email: "",
      password: "",
    });

    return {
      user,
    };
  },
});
</script>
