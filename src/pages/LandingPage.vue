<script setup>
import { reactive, ref } from "vue";
import LogInForm from "../components/LogInForm.vue";
import SignUpForm from "src/components/SignUpForm.vue";

const user = reactive({
  email: "",
  password: "",
});
const isSignUp = ref(false);

// const switchPage = () => {
//   console.log('Testing')
//   isSignUp.value = !isSignUp.value
// }
</script>

<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="row">
      <div class="col-6 q-px-xl text-right">
        <q-img
          height="600px"
          width="360px"
          src="../assets/iphone.png"
          class="q-mr-xl"
        />
      </div>
      <SignUpForm v-if="isSignUp" @switch-page="isSignUp = !isSignUp" />
      <LogInForm v-else @switch-page="isSignUp = !isSignUp" />
    </div>
  </q-page>
</template>
