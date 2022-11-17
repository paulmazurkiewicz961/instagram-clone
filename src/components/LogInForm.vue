<script setup>
import { reactive, ref } from "vue";

const emit = defineEmits(["switchPage"]);

const user = reactive({
  email: "",
  password: "",
});
const isSignUp = ref(false);
</script>

<template>
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
          :to="{ name: 'InstagramFeed' }"
        />
      </q-card-actions>
      <div class="q-pt-xs">
        <q-card-section class="text-center text-blue-gray-8">
          OR
        </q-card-section>
      </div>
      <div class="q-pt-xs">
        <q-card-section class="text-center text-blue-10 text-weight-bold">
          <q-btn
            icon="fa-brands fa-square-facebook"
            label="Log in with Facebook"
            no-caps
            flat
          />
        </q-card-section>
      </div>

      <q-card-section
        class="text-center text-caption text-blue-10 text-weight-lighter"
      >
        <q-btn
          class="text-center text-caption text-blue-10 text-weight-lighter"
          label="Forgot password?"
          no-caps
          flat
        />
      </q-card-section>
    </q-card>

    <q-card square class="q-mt-md">
      <div class="row justify-center items-center">
        <q-card-section> Have an account? </q-card-section>
        <q-card-section>
          <q-btn label="Sign Up" flat size="12px" color="blue" no-caps @click="$emit('switchPage')"  />
        </q-card-section>
      </div>
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
</template>
