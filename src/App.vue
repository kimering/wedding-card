<script setup>
import HelloWedding from "@/components/HelloWedding.vue";
import WeddingTitle from "@/components/WeddingTitle.vue";
import PhotoCircle from "@/components/PhotoCircle.vue";
import WeddingContact from "@/components/WeddingContact.vue";
import WeddingCalendar from "@/components/WeddingCalendar.vue";
import WeddingFooter from "@/components/WeddingFooter.vue";
import WeddingGallery from "@/components/WeddingGallery.vue";
</script>

<template>
  <HelloWedding msg="weddingData"/>
  <WeddingTitle/>
  <!--  <WeddingDay/>-->
  <WeddingGallery/>
  <WeddingCalendar/>
  <PhotoCircle/>
  <WeddingContact/>
  <WeddingFooter/>

</template>

<style scoped>
</style>
