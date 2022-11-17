<script setup>
import { reactive, ref } from "vue";

const user = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div class="col-6 q-pt-xs q-pb-lg q-px-xl">
    <q-card square class="shadow-1 q-px-xl">
      <!-- Logo -->
      <q-card-section class="white text-center">
        <q-img src="../assets/Instalogo.png" height="65px" width="220px" />
      </q-card-section>
      <q-card-section class="white text-center">
        <div class="text-body1 text-weight-bolder text-grey-8">
          Sign up to see photos and videos from your friends
        </div>
      </q-card-section>

      <q-card-section class="row justify-center">
        <q-btn
          flat
          no-caps
          icon="fa-brands fa-square-facebook"
          label="Log in with Facebook"
          class="text-white bg-blue col-12"
        />
      </q-card-section>

      <!--Signup form -->
      <q-card-section>
        <q-form class="q-pt-sm q-pb-xs q-gutter-sm row">
          <q-input
            color="grey-12"
            bg-color="grey-12"
            outlined
            square
            clearable
            v-model="user.email"
            type="email"
            label="Phone number, username or email address"
            class="col-12"
          /><q-input
            color="grey-12"
            bg-color="grey-12"
            outlined
            square
            clearable
            v-model="user.email"
            type="email"
            label="Phone number, username or email address"
            class="col-12"
          />
          <q-input
            color="grey-12"
            bg-color="grey-12"
            outlined
            square
            clearable
            v-model="user.email"
            type="email"
            label="Phone number, username or email address"
            class="col-12"
          />
          <q-input
            color="grey-12"
            bg-color="grey-12"
            outlined
            square
            clearable
            v-model="user.password"
            type="password"
            label="Password"
            class="col-12"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <div>
          People who use our service may have uploaded your contact information
          to Instagram.
        </div>
      </q-card-section>
      <q-card-section class="text-center">
        <div>By signing up, you agree to our</div>
      </q-card-section>

      <!-- Sign up Button -->
      <q-card-actions class="q-pb-xl">
        <q-btn
          align="around"
          unelevated
          size="md"
          color="light-blue"
          class="full-width text-white"
          label="Sign Up"
          :to="{ name: 'InstagramFeed' }"
        />
      </q-card-actions>
    </q-card>

    <q-card square class="q-mt-md">
      <div class="row justify-center items-center">
        <q-card-section> Have an account? </q-card-section>
        <q-card-section>
          <q-btn
            label="Log in"
            flat
            size="12px"
            color="blue"
            no-caps
            @click="$emit('switchPage')"
          />
        </q-card-section>
      </div>
    </q-card>

    <div class="col-12 text-center q-my-lg text-weight-regular">
      Get the app.
    </div>
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
