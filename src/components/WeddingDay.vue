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
      <div class="day-card-title">
        <div class="day-card-upper">
          <!--          <span class="year">2024</span>-->
          <span class="month">2024년 6월 22일 토요일</span>
          <!--          <span class="week">[토요일]</span>-->
        </div>
        <div class="day-card-lower">
          <span class="time">12:40</span>
          <span class="place">더파티움 여의도 B1 그랜드컨벤션 홀</span>
        </div>
      </div>

      <img class="calendar" src="./../assets/image/calendar.png"/>
    </div>
  </div>
</template>


<style lang="scss">
.wedding-day {
  display: flex;
  justify-content: center;

  width: 100%;
  padding-bottom: 50%;

  @include desktop {
    padding-bottom: min(50%, 600px);
  }

  .background {
    position: absolute;
    overflow: hidden;
    //margin: 0 20px;
    width: calc(100% - 40px);
    height: 100%;
    border-radius: 40px 0 0 0;
    background: linear-gradient(to right, #e5ebf2, #a7bbde);
    display: flex;
    flex-grow: 1;
    z-index: -1;

    @include mobile {
      margin: 0;
      width: 100%;
      border-radius: 60px 0 0 0;

    }

    @include tablet {
      margin: 0 30px;
      width: calc(100% - 60px);

    }

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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
    width: 100%;
    max-width: calc(100% - 80px);
    font-size: 2.0rem;
    font-family: leferi-special;
    //font-family: GowunBatang-Regular;
    //font-family: 'Nanum Myeongjo';
    color: $dark-color-1;


    @include tablet {
      //font-size: 1.6rem;
      width: 100%;
    }
    @include desktop {
      //font-size: 2rem;
      width: 100%;
      max-width: 1200px;
    }


    .day-card-title {
      background: white;
      border-radius: 40px;
      text-align: center;
      width: 90%;

      .day-card-upper {
        font-weight: bold;

        .year {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 32%;
          font-weight: bold;
          padding-left: 4px;

        }

        .month {
          font-size: 100%;
          padding-right: 16px;

        }

        .week {
          font-size: 40%;
        }
      }

      .day-card-lower {
        .time {
          padding-right: 16px;
          font-size: 100%;
        }

        .place {
          font-size: 40%;
        }
      }
    }

    .calendar {
      margin-top: 20px;
      width: 100%;
      max-width: 600px;
    }
  }

}


</style>
