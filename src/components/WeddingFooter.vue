<script>
</script>
<template>
  <div class="footer">
    <div class="footer-contents">
      <div>
        <div>
          @2024 김혜림
        </div>
        <div>
          GitHub @kimering/<a href="https://github.com/kimering/wedding-card">Wedding-Card</a>
        </div>
        <div>
          LICENSE: CoffeeWare
        </div>
      </div>
      <div class="credit">
        <div class="credit-role">
          <div>Produced by</div>
          <div>Design by</div>
          <div>Developed by</div>
          <div>Cheered by</div>
        </div>
        <div class="credit-name">
          <div>김혜림</div>
          <div>김혜림</div>
          <div>김혜림</div>
          <div>김태훈</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 40px 20px;
  color: black;
  background-color: #f5f2f5;

  font-size: 2rem;
  @include tablet {
    font-size: 2.4rem;
  }
  @include desktop {
    font-size: 2.8rem;
  }

  .footer-contents {
    display: flex;
    flex-direction: row;
    font-size: 60%;
    gap: 20px;
    width: 100%;
    max-width: 1100px;
    justify-content: space-between;
    color: $dark-color-1;
    font-family: 'Chosunilbo_myungjo';

    .credit {
      display: flex;
      flex-direction: row;
      gap: 12px;

      .credit-role {

      }

      .credit-name {
      }
    }
  }
}
</style>