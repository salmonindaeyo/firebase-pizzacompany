<script setup>

const getLinkAll = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_APP_TITLE}/api/events/${myRouter.query.BookingId}`
  );
  if (res.status === 200) {
    eventLists.value = await res.json();
  }
};

</script>
 
<template>
<div>

            about

</div>

</template>
 
<style>

</style>