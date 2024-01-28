<script setup>
</script>

<template>
  <div class="wedding-title">
    <img class="title-star" src="./../assets/icon/square_star.png"/>
    <div class="title-card">

      <div class="title-card-text">
        서로가 서로에게 기꺼이 <br/>
        당신의 유일이 되리라 다짐했습니다. <br/><br/>
        하나가 되는 날, <br/>
        오셔서 축하해 주시면 <br/>
        더없는 기쁨이겠습니다. <br/>
      </div>
      <img class="title-star" src="./../assets/icon/square_star.png"/>

      <div class="title-card-family">
        <div class="family-box">
          김승섭, 채영희의 아들
          <h1 class="name">태훈</h1>
        </div>
        <div class="family-box">
          김성우, 김주현의 딸
          <h2 class="name">혜림</h2>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.wedding-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  margin: 40px 20px;
  color: $dark-color-1;
  @include tablet {
    margin: 40px 30px;

  }
  @include desktop {
    margin: 40px;

  }


  .title-star {
    width: 32px;
    height: 30px;
  }

  .title-card {
    position: relative;
    top: -16px;
    border: 2px solid $light-color-1;
    border-radius: 40px 40px 0 40px;
    width: 100%;
    padding: 40px 20px;
    font-family: leferi-white;
    font-weight: 600;
    letter-spacing: -0.4px;
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

    .title-card-text {
      text-align: center;
    }

    .title-star {
      margin: 40px 0;
      width: 20px;
      height: 20px;
    }

    .title-card-family {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .family-box {
        min-width: 40%;
        color: #222;

        .name {
          /*color: red;*/
          font-family: leferi-special;
          color: $dark-color-1;
          font-size: 20px;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
