<script setup>
</script>
<template>
  <div class="wedding-calendar">

    <div class="calendar-title">
      <div class="title-wrapper">
        <img class="calendar-date" src="./../assets/image/calendar_date.png"/>
      </div>

    </div>
    <div class="calendar-divider">
      <div class="left-circle"></div>
      <div class="line"></div>
      <div class="right-circle"></div>
    </div>
    <div class="calendar-body">
      <div class="body-wrapper">
        <h3 class="title">날짜</h3>
        <img class="image calendar-image" src="./../assets/image/calendar.png"/>
        <h3 class="title">오시는 길</h3>
        <img class="image" src="./../assets/image/map.png"/>
        <div class="map-address-wrapper">
          <div>도로명주소</div>
          <div>서울시 영등포구 은행로 30 (여의도동, 중소기업중앙회)</div>
          <div>지번주소</div>
          <div>서울시 영등포구 여의도동 16-2 중소기업중앙회</div>
        </div>
        <div class="map-icon-wrapper">
          <div class="map-icon"></div>
          <div class="map-icon"></div>
          <div class="map-icon"></div>
          <div class="map-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.wedding-calendar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;


  .calendar-title {
    background-color: $dark-color-1;
    border-radius: 20px 20px 0 0;
    padding: 24px 16px 16px 16px;
    width: 100%;

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

    .title-wrapper {
      border: 1px solid $light-color-2;
      border-radius: 10px;
      padding: 20px 20px 10px 20px;


      @include tablet {
        text-align: center;
      }
      @include desktop {
        text-align: center;
      }

      .calendar-date {
        width: 100%;
        max-width: 400px;
      }
    }
  }

  .calendar-divider {
    background-color: $dark-color-1;
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: hidden;

    @include tablet {
      width: calc(100% - 60px);
    }

    @include desktop {
      width: 1200px;
    }

    .line {
      border-top: 1px solid $light-color-2;
      width: 100%;
    }

    .left-circle {
      width: 32px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background: white;
      position: relative;
      top: -16px;
      left: -16px;
    }

    .right-circle {
      width: 32px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background: white;
      position: relative;
      top: -16px;
      right: -16px;
    }
  }

  .calendar-body {
    background-color: $dark-color-1;
    width: 100%;

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

    .body-wrapper {
      border: 1px solid $light-color-2;
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      padding: 20px;
      margin: 16px 16px 0 16px;

      .image {
        margin-top: 20px;
        width: 100%;
        max-width: 600px;
      }

      .title {
        color: $light-color-2;
        text-align: center;
        font-family: leferi-special;
      }

      .calendar-image {
        padding-left: 12px;
        margin-bottom: 20px;
      }

      .map-address-wrapper {
        font-family: leferi-white;
      }

      .map-icon-wrapper {
        display: flex;
        flex-direction: row;

        gap: 20px;
        padding: 20px 0;

        .map-icon {
          width: 100px;
          aspect-ratio: 1 / 1;
          background: pink;
          border-radius: 50%;

        }
      }

    }
  }

}
</style>