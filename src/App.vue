<script setup>
import HelloWedding from "@/components/HelloWedding.vue";
import WeddingTitle from "@/components/WeddingTitle.vue";
import PhotoCircle from "@/components/PhotoCircle.vue";
import WeddingContact from "@/components/WeddingContact.vue";
import WeddingCalendar from "@/components/WeddingCalendar.vue";
import WeddingFooter from "@/components/WeddingFooter.vue";
import WeddingGallery from "@/components/WeddingGallery.vue";

import {ref, watch} from 'vue'

const modalFlag = ref(false);
const modalContent = ref('');

const showModal = (accountNo) => {
  modalFlag.value = true;
  modalContent.value = accountNo;

  console.log(modalContent.value)
}

const hideModal = () => {
  console.log(modalContent.value)
  modalFlag.value = false;
  modalContent.value = '';
}

watch(modalFlag, () => {
  const html = document.querySelector('body');
  html.style.overflow = modalFlag.value ? 'hidden' : 'auto'
});

</script>

<template>
  <HelloWedding msg="weddingData"/>
  <WeddingTitle/>
  <!--  <WeddingDay/>-->
  <WeddingGallery/>
  <WeddingCalendar/>
  <PhotoCircle/>
  <WeddingContact @show-contact-modal="showModal"/>
  <WeddingFooter/>
  <div v-show="modalFlag" class="modal-wrap" @click="hideModal">
    <div class="modal-container" @click.stop>
      <div class="modal-title">마음 전하실 곳</div>
      <div class="modal-content">{{ modalContent }}</div>
      <div class="modal-footer" @click="hideModal">닫기</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  .modal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    max-width: 90%;
    background: $lighter-color-1;
    border-radius: 2rem;
    box-sizing: border-box;
    font-family: leferi;

    .modal-title {
      color: $dark-color-1;
      text-align: center;
      font-size: 110%;
      padding: 1rem;
    }

    .modal-content {
      color: $dark-color-1;
      font-size: 100%;
      text-align: center;
      padding: 0 1rem;
    }

    .modal-footer {
      border-top: 0.5px solid $light-color-2;
      color: $dark-color-2;
      text-align: center;
      padding: 1rem;
      margin-top: 1rem;
      font-size: 80%;
    }
  }
}
</style>
