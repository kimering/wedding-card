<template>
  <div class="wedding-gallery">
    <img class="image" src="./../assets/image/collage_notext.png"/>
    <div class="gallery-text">Gallery >></div>

  </div>
</template>
<style lang="scss">
.wedding-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(white, antiquewhite);

  .image {
    width: 100%;
    max-width: 800px;
    padding: 20px;
  }

  .gallery-text {
    font-family: leferi-special;
    font-size: 20px;
    color: $dark-color-1;
  }
}

</style>