<template>
  <div>
    <Dashboardnav>
      <Profile />
    </Dashboardnav>
  </div>
</template>

<script setup>
import Dashboardnav from "../components/dashboardnav.vue";
import Profile from "../components/profile.vue";
import { onMounted, onBeforeMount } from "vue";
import { auth } from "../firebase/index";
import { router } from "../router/index";
import { store } from "../store/index";
//import { getCurrentUser } from "../store/index";

onBeforeMount(() => {
  store.dispatch("fetchUser");
});
</script>
