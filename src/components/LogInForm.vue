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
    <q-card square class="shadow-1 q-mx-lg">
      <q-card-section class="white text-center">
        <q-img src="../assets/Instalogo.png" height="65px" width="220px" />
      </q-card-section>
      <q-card-section>
        <q-form class="q-px-sm q-pt-sm q-pb-xs q-gutter-sm">
          <q-input
            dense
            class="q-px-lg"
            color="grey-12"
            bg-color="grey-12"
            outlined
            square
            v-model="user.password"
            type="password"
            label="Phone number, username or email"
          >
            <q-separator />

            <template v-slot:prepend> </template>
          </q-input>
          <q-input
            dense
            class="q-px-lg"
            color="grey-12"
            bg-color="grey-12"
            outlined
            square
            v-model="user.password"
            type="password"
            label="Password"
          >
            <template v-slot:prepend> </template>
          </q-input>

          <q-card-actions class="q-px-lg">
            <q-btn
              flat
              no-caps
              label="Next"
              class="text-white bg-light-blue col-12"
            />
          </q-card-actions>
          <div class="text-center text-blue-grey">OR</div>
          <q-card-actions class="q-px-lg">
            <q-btn
              flat
              no-caps
              label="Log in with Facebook"
              class="text-blue-10 col-12"
              icon="fa-brands fa-square-facebook"
            />
          </q-card-actions>
          <q-card-actions class="q-px-lg q-mx-xl">
            <q-btn
              flat
              no-caps
              label="Forgot password?"
              class="text-blue col-12"
              size="11px"
            />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>

    <q-card square class="q-mt-md q-mx-lg">
      <div class="row justify-center items-center">
        <q-card-section> Don't have an account? </q-card-section>
        <q-card-section>
          <q-btn
            label="Sign Up"
            flat
            size="12px"
            color="blue"
            no-caps
            @click="$emit('switchPage')"
          />
        </q-card-section>
      </div>
    </q-card>

    <div class="col-12 text-center q-mt-md text-weight-regular q-pb-sm">
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
