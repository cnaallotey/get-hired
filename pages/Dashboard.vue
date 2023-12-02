<script setup>
definePageMeta({
  middleware:['auth']
});
</script>

<template>
  <div>
    <Dashboardnav>
      <Profile />
    </Dashboardnav>
  </div>
</template>


