<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#0000)"
  >
    <div class="row">
      <div class="col-6 q-px-xl">
        <q-img
          height="500px"
          width="300px"
          src="../assets/iphone.png"
          class="q-mr-xl"
        />
      </div>
      <div class="col-6">
        <q-card square class="shadow-24" style="width: 300px; height: 485px">
          <q-card-section class="bg-deep-purple-7">
            <div class="text-h5 text-white q-my-md">Instagram</div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input
                square
                clearable
                v-model="user.email"
                type="email"
                label="Email or username"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="user.password"
                type="password"
                label="Password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="purple-4"
              class="full-width text-white"
              label="Log In"
            />
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
