<template>
  <div>
    <WelcomePanel />
    <Tabs
      @changeactive="
        (n) => {
          activenav = n;
        }
      "
    />

    <div class="w-full grid grid-cols-6 gap-10" v-if="activenav === 'Personal Details'">
      <Generalform class="col-span-6 md:col-span-4" />
    </div>
    <Education />
  </div>
</template>

<script setup>
const activenav = ref("Personal Details");
</script>
