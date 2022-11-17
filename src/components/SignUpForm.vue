<script setup>
import { reactive, ref } from "vue";

const user = reactive({
  email: "",
  password: "",
});
</script>

<template>
   <div class="col-6 q-pt-xs q-pb-lg">
    <q-card square class="shadow-1">
      <q-card-section class="white text-center">
        <q-img src="../assets/Instalogo.png" height="65px" width="220px" />
      </q-card-section>
      <q-card-section class="text-center text-grey text-weight-bold">
        Sign up to see photos and videos from your friends.
      </q-card-section>
      <q-card-section class="text-center text-blue-10 text-weight-bold">
        <q-btn
          align="center"
          unelevated
          size="md"
          color="blue-10"
          icon="facebook"
          class="text-white text-center"
          label="Log in With Facebook"
          :to="{ name: 'InstagramFeed' }"
        />
      </q-card-section>
      <div class="q-pt-xs q-pb-xs">
        <q-card-section class="text-center text-blue-gray-8">
          OR
        </q-card-section>
      </div>

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
            label="Mobile number or email address"
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
            label="Full name"
          >
            <template v-slot:prepend> </template>
          </q-input>
          <q-input
            color="grey-12"
            bg-color="grey-12"
            outlined
            square
            clearable
            v-model="user.email"
            type="email"
            label="Username"
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
      <q-card-section class="text-center text-grey text-weight-regular">
        People who use our service may have uploaded your contact information to Instagram. Learn more
      </q-card-section>
      <q-card-section class="text-center text-grey text-weight-regular">
        By signing up, you agree to our Terms. Learn how we collect, use and share your data in our Privacy Policy and how we use cookies and similar technology in our Cookies Policy.
      </q-card-section>
      <q-card-section class="text-center text-blue-10 text-weight-bold">
        <q-btn
          align="center"
          unelevated
          size="md"
          color="light-blue"
          class="full-width text-white text-center"
          label="Next"
          :to="{ name: 'InstagramFeed' }"
        />
      </q-card-section>
    </q-card>

    <q-card square class="q-mt-md">
      <div class="row justify-center items-center">
        <q-card-section> Have an account? </q-card-section>
        <q-card-section>
          <q-btn
            label="Log In"
            flat
            size="12px"
            color="blue"
            no-caps
            @click="$emit('switchPage')"
          />
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
