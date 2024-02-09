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
        <div class="body-content">
          <div class="title">2024 / 06</div>
          <img class="image calendar-image" src="./../assets/image/calendar.png"/>
        </div>
        <div class="body-content">
          <div class="title">오시는 길</div>
          <img class="image" src="./../assets/image/map.png"/>
          <div>
            <div class="map-title">도로명주소</div>
            <div class="map-address-wrapper">
              <div>서울시 영등포구 은행로 30</div>
              <div>(여의도동, 중소기업중앙회)</div>
            </div>
            <div class="map-title">지번주소</div>
            <div class="map-address-wrapper">
              <div>서울시 영등포구 여의도동 16-2</div>
              <div>중소기업중앙회</div>
            </div>

          </div>
          <div class="map-icon-wrapper">
            <div class="map-icon naver-map"></div>
            <div class="map-icon kakao-map"></div>
            <div class="map-icon t-map"></div>
            <div class="map-icon copy"></div>
          </div>
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

  font-size: 1.4rem;
  @include tablet {
    font-size: 1.6rem;
  }
  @include desktop {
    font-size: 2rem;
  }


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
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;

      .body-content {

        .image {
          margin-top: 20px;
          width: 100%;
          max-width: 600px;
        }

        .title {
          color: $lighter-color-1;
          text-align: center;
          font-size: 120%;
          font-family: leferi-special;
        }

        .calendar-image {
          padding-left: 12px;
          margin-bottom: 20px;
        }

        .map-title {
          margin-top: 10px;
          color: $lighter-color-1;
          font-family: leferi;
        }

        .map-address-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          font-family: leferi;
          color: $light-color-2;

          div {
            font-family: leferi-white;
            padding-right: 8px;
          }
        }

        .map-icon-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 20px;
          padding: 30px 0 20px 0;

          .map-icon {
            width: 20%;
            max-width: 80px;
            aspect-ratio: 1 / 1;
            background: pink;
            border-radius: 50%;

            &.naver-map {
              background: center / 150% no-repeat url("../assets/icon/naver_map.png"), white;
            }

            &.kakao-map {
              background: center / 90% no-repeat url("../assets/icon/kakao_map.png"), #ffdf00;
            }

            &.t-map {
              background: center / 80% no-repeat url("../assets/icon/t_map.svg"), white;
            }

            &.copy {
              background: center / 55% no-repeat url("../assets/icon/copy.png"), $lighter-color-1;;
            }
          }
        }
      }
    }
  }

}
</style>