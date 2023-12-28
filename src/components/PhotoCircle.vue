<script setup>
</script>

<template>
  <div class="photo-circle">
    <div class="circle-frame">

    </div>
  </div>
</template>


<style lang="scss">
.photo-circle {
  display: flex;
  position: relative;
  justify-content: center;
  padding: 30px 40px calc(50% + 30px) 40px;
  margin: 0 40px;

  @include desktop {
    padding-bottom: min(50%, 1200px);
  }

  .circle-frame {
    position: absolute;
    transform: translate(0%, -50%);
    background: center / cover no-repeat url("../assets/image/circle.png");
    width: 100%;
    padding-bottom: 100%;
    border-radius: 100%;
    outline: 30px solid white;

    @include desktop {
      width: 100%;
      max-width: 1200px;
      padding-bottom: min(100%, 1200px);
    }
  }
}
</style>