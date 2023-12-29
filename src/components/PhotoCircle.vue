<script setup>
</script>

<template>
  <div class="photo-back">

    <div class="photo-circle">
      <div class="circle-frame">

      </div>
    </div>
  </div>
</template>


<style lang="scss">
.photo-back {
  background: white;
}

.photo-circle {
  display: flex;
  position: relative;
  justify-content: center;
  padding: 30px 40px calc(50%) 40px;
  margin: 0 40px;

  @include mobile {
    margin: 0 20px;
  }

  @include desktop {
    padding-bottom: min(50%, 600px);
  }

  .circle-frame {
    position: absolute;
    transform: translate(0%, -55%);
    background: center / cover no-repeat url("../assets/image/circle.png");
    width: 100%;
    padding-bottom: 100%;
    border-radius: 100%;

    @include mobile {
      outline: 20px solid white;

    }
    @include tablet {
      outline: 30px solid white;

    }
    @include desktop {
      width: 100%;
      max-width: 1200px;
      padding-bottom: min(100%, 1200px);
      outline: 40px solid white;
    }
  }
}
</style>