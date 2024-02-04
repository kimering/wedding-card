<script setup>
</script>
<template>
  <div class="wedding-calendar">

    <div class="calendar-title">
      <div class="img-wrapper">
        <img class="calendar-date" src="./../assets/image/calendar_date.png"/>
      </div>

    </div>
    <div class="calendar-body">
      <div class="img-wrapper">
        <img class="calendar" src="./../assets/image/calendar.png"/>
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
    background-color: #224e84;
    border-radius: 20px 20px 0 0;
    padding: 16px;
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

    .img-wrapper {
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

  .calendar-body {
    background-color: #224e84;
    width: 100%;
    padding-bottom: 50%;

    @include tablet {
      margin: 0 30px;
      width: calc(100% - 60px);

    }

    @include desktop {
      font-size: 2rem;
      width: 1200px;
      margin: 0;
      left: calc((100% - 1200px) / 2);
      padding-bottom: min(50%, 600px);
    }

    .img-wrapper {

      border: 1px solid $light-color-2;
      border-radius: 10px;
      padding: 20px;
      margin: 16px;

      .calendar {
        margin-top: 20px;
        width: 100%;
        max-width: 600px;
      }
    }
  }

}
</style>