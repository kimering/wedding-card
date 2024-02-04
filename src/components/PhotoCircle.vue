<script setup>
</script>

<template>
  <div class="photo-back">
    <div class="half-back">
      <div class="half-inner"></div>
    </div>
    <div class="circle-back"></div>
    <img class="circle" src="./../assets/image/circle.png"/>
  </div>
</template>


<style lang="scss">
.photo-back {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  overflow: hidden;
  position: relative;

  .half-back {
    aspect-ratio: 2 / 1;
    background: $dark-color-1;
    width: 100%;
    position: absolute;
    z-index: -2;

    @include tablet {
      width: calc(100% - 60px);
    }

    @include desktop {
      width: 1200px;
    }

    .half-inner {
      border: 1px solid $light-color-2;
      border-top: none;
      margin: 0 16px 16px 16px;
      width: calc(100% - 32px);
      height: 100%;
    }
  }

  .circle-back {
    border-radius: 50% 50% 0 0;
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 1240px;
    background: white;
    position: absolute;
    z-index: -2;
    @include tablet {
      width: calc(100% - 60px);
    }
    @include desktop {
      max-width: 1200px;
    }
  }

  .circle {
    border-radius: 50%;
    border: 20px solid white;
    aspect-ratio: 1 / 1;
    width: 100%;
    position: relative;

    max-width: 1200px;
    @include tablet {
      width: calc(100% - 60px);

    }

    @include desktop {
      max-width: 1200px;
    }
  }

}
</style>