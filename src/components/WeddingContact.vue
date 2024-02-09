<script setup>
</script>

<template>
  <div class="wedding-contact">
    <div class="contact-card">
      <img class="image" src="./../assets/image/sopung_hi.png"/>
      <div class="contact-card-contents">
        <div class="title">전하는 말씀</div>
      </div>
      <div class="contact-card-contents">
        <div class="title">연락주실 곳</div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.wedding-contact {
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to right, #e5ebf2, #a7bbde);
    border-radius: min(300px, 45vw) min(300px, 45vw) 0 0;
    text-align: center;
    width: 100%;
    color: $dark-color-1;

    font-size: 1.4rem;
    @include mobile {
      margin: 0;
    }
    @include tablet {
      width: calc(100% - 60px);
      font-size: 2rem;
    }

    @include desktop {
      width: 1200px;
      font-size: 2.4rem;
    }

    .image {
      padding-top: 30px;
      width: 50%;
      max-width: 400px;
    }

    .contact-card-contents {
      padding: 20px 0;

      .title {
        font-size: 120%;
        font-family: leferi-special;
      }
    }
  }

}

</style>