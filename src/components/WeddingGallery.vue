<template>
  <div class="wedding-gallery">
    <div class="gallery-wrapper">
      <div class="gallery-title">갤러리</div>
      <img class="image" src="./../assets/image/gallery.jpg"/>
      <!--      <div class="gallery-more">사진 더보기 >></div>-->

    </div>
  </div>
</template>
<style lang="scss">
.wedding-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 60px 0;

  .gallery-wrapper {
    width: 100%;

    @include tablet {
      width: calc(100% - 60px);
    }

    @include desktop {
      width: 1200px;
    }

    .image {
      width: 100%;
      max-width: 1200px;
      display: block;
    }

    .gallery-more {
      font-family: leferi-special;
      color: $dark-color-1;
      padding: 8px 20px;
      text-align: right;
    }
  }

}

</style>
<script setup>
</script>