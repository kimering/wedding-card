<script setup>
import HelloWedding from "@/components/HelloWedding.vue";
import WeddingTitle from "@/components/WeddingTitle.vue";
import PhotoCircle from "@/components/PhotoCircle.vue";
import WeddingPay from "@/components/WeddingPay.vue";
import WeddingCalendar from "@/components/WeddingCalendar.vue";
</script>

<template>
  <HelloWedding msg="weddingData"/>
  <WeddingTitle/>
  <!--  <WeddingDay/>-->
  <WeddingCalendar/>
  <PhotoCircle/>
  <WeddingPay/>

</template>

<style scoped>
</style>
