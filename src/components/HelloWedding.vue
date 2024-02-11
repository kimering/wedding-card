<script setup>
</script>

<template>
  <div class="hello">
    <div class="wedding">
      <div class="img-wrapper"></div>
    </div>
  </div>
</template>


<style scoped>
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: center / cover no-repeat url("../assets/image/hello_back.jpg");
}

.wedding {
  display: flex;
  width: 85vw;
  height: 85vh;
  max-width: 85vw;
  max-height: 85vh;

  .img-wrapper {
    width: 100%;
    height: 100%;
    background: center / contain no-repeat url("../assets/image/hello_wedding.png");

  }
}
</style>
