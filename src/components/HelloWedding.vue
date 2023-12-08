<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="hello">
        <div class="wedding"/>
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
    background: center / cover no-repeat url("../assets/hello/hello_back.png");
}
.wedding {
    display: flex;
    width: 85vw;
    height: 85vh;
    background: center /contain no-repeat url("../assets/hello/hello_friends.png");
    max-width: 85vw;
    max-height: 85vh;
 }
</style>
