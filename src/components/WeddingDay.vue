<script setup>
</script>

<template>
  <div class="wedding-day">
    <div class="background">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="day-card">
      hihi
    </div>
  </div>
</template>


<style lang="scss">
.wedding-day {
  display: flex;
  justify-content: center;
  height: 800px;

  .background {
    position: absolute;
    overflow: hidden;
    margin: 0 40px;
    width: calc(100% - 80px);
    height: 800px;
    border-radius: 40px 0 0 0;
    background: linear-gradient(to right, #e5ebf2, #a7bbde);
    display: flex;
    flex-grow: 1;
    z-index: -1;

    @include desktop {
      font-size: 2rem;
      width: 1200px;
      margin: 0;
      left: calc((100% - 1200px) / 2);
    }


    div {
      position: absolute;
      border-radius: 100%;
      height: 0;
      filter: blur(240vw);
      opacity: 0.4;

      &:nth-child(1) {
        background: linear-gradient(132deg, #ff9e9e 0.00%, #0affad 100.00%);
        width: 41%;
        padding-top: 41%;
        left: 30%;
        top: 82%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(2) {
        background: linear-gradient(132deg, #e88db7 0.00%, #c5689e 100.00%);
        width: 40%;
        padding-top: 40%;
        left: 50%;
        top: 20%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(3) {
        background: linear-gradient(132deg, #75d3ca 0.00%, #1F91CF 100.00%);
        width: 30%;
        padding-top: 30%;
        left: 80%;
        top: 80%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(4) {
        background: linear-gradient(132deg, #e7703f 0.00%, #64a477 100.00%);
        width: 7%;
        padding-top: 7%;
        left: 53%;
        top: 63%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(5) {
        background: linear-gradient(132deg, #2dcbc3 0.00%, #9e37d9 100.00%);
        width: 97%;
        padding-top: 97%;
        left: 81%;
        top: 31%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(6) {
        background: linear-gradient(132deg, #ca7151 0.00%, #43a9e2 100.00%);
        width: 26%;
        padding-top: 26%;
        left: 20%;
        top: 70%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(7) {
        background: linear-gradient(132deg, #d97ca3 0.00%, #ce50b5 100.00%);
        width: 95%;
        padding-top: 95%;
        left: 60%;
        top: 71%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(8) {
        background: linear-gradient(132deg, #5029e8 0.00%, #2ae84d 100.00%);
        width: 2%;
        padding-top: 2%;
        left: 79%;
        top: 95%;
        transform: translateX(-50%) translateY(-50%);
      }
    }

  }


  .day-card {
    //background: black;
    padding: 40px 20px;
    width: 100%;
    max-width: calc(100% - 80px);
    font-size: 1.4rem;

    @include tablet {
      font-size: 1.6rem;
      width: 100%;
    }
    @include desktop {
      font-size: 2rem;
      width: 100%;
      max-width: 1200px;
    }
  }

}


</style>
