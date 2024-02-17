<script setup>

import {ref} from 'vue'

const showToast = ref(false);

const toggleToast = (text) => {
  navigator.clipboard.writeText(text)

  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000)
}
</script>

<template>
  <div class="wedding-contact">
    <div class="contact-card">
      <img class="image" src="./../assets/image/sopung_hi.png"/>
      <div class="contact-card-contents">
        <div class="title">연락주실 곳</div>
        <div class="contact-contents">
          <div class="contact-title">신랑, 신부에게 마음 전하기</div>
          <div class="contact">
            <div>
              <div class="name">신랑 김태훈</div>
              <div class="icons">
                <div class="icon taehun-call" onclick="location.href='tel:01085154753'"></div>
                <div class="icon taehun-heart" @click="toggleToast('')"></div>
                <!--                <div class="icon taehun-msg" onclick="location.href='sms:01085154753'"></div>-->
              </div>
            </div>
            <div>
              <div class="name">신부 김혜림</div>
              <div class="icons">
                <div class="icon hyerim-call" onclick="document.location.href='tel:01071207671'"></div>
                <div class="icon hyerim-heart" @click="toggleToast('')"></div>
                <!--                <div class="icon hyerim-msg" onclick="document.location.href='sms:01071207671'"></div>-->
              </div>
            </div>
          </div>
        </div>
        <div class="contact-contents">
          <div class="contact-title">신랑 측 혼주에게 마음 전하기</div>
          <div class="contact">
            <div>
              <div class="name">아버지 김승섭</div>
              <div class="icons">
                <div class="icon taehun-call" onclick="location.href='tel:01055374753'"></div>
                <div class="icon taehun-heart" @click="toggleToast('')"></div>
                <!--                <div class="icon taehun-msg" onclick="location.href='sms:01055374753'"></div>-->
              </div>
            </div>
            <div>
              <div class="name">어머니 채영희</div>
              <div class="icons">
                <div class="icon hyerim-call" onclick="location.href='tel:01056444753'"></div>
                <div class="icon hyerim-heart" @click="toggleToast('')"></div>
                <!--                <div class="icon hyerim-msg" onclick="location.href='sms:01056444753'"></div>-->
              </div>
            </div>
          </div>
        </div>
        <div class="contact-contents">
          <div class="contact-title">신부 측 혼주에게 마음 전하기</div>
          <div class="contact">
            <div>
              <div class="name">아버지 김성우</div>
              <div class="icons">
                <div class="icon taehun-call" onclick="location.href='tel:01096717671'"></div>
                <div class="icon taehun-heart" @click="toggleToast('')"></div>
                <!--                <div class="icon taehun-msg" onclick="location.href='sms:01096717671'"></div>-->
              </div>
            </div>
            <div>
              <div class="name">어머니 김주현</div>
              <div class="icons">
                <div class="icon hyerim-call" onclick="location.href='tel:01068016901'"></div>
                <div class="icon hyerim-heart" @click="toggleToast('')"></div>
                <!--                <div class="icon hyerim-msg" onclick="location.href='sms:01068016901'"></div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notice-card-contents">
        <div class="title">전하는 말씀</div>
        <div class="contents">
          <div class="notice-icon-wrapper">
            <div class="icon camera"></div>
          </div>
          <div class="notice-text">
            현장에 포토부스가 설치될 예정입니다.<br/>
            소중한 추억 사진으로 남겨주세요!
          </div>
        </div>
        <div class="contents">
          <div class="notice-icon-wrapper">
            <div class="icon meal"></div>
          </div>
          <div class="notice-text">
            한정식 한상 + 세미뷔페 조합으로 준비했습니다.<br/>
            한 상에 4명까지 둘러앉으실 수 있습니다.
          </div>
        </div>
        <div class="contents">
          <div class="last-text">
            <img class="star" src="./../assets/icon/square_star.png"/><br/>

            찾아주시는 모든 걸음 소중히 기억하겠습니다. <br/>
            여러분의 축복과 격려에 힘입어 행복하게 잘 살겠습니다. <br/> <br/>
            김태훈, 김혜림 드림
          </div>
        </div>
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
    padding-bottom: 20px;

    @include mobile {
      margin: 0;
    }
    @include tablet {
      width: calc(100% - 60px);
    }

    @include desktop {
      width: 1200px;
    }

    .image {
      padding-top: 30px;
      width: 50%;
      max-width: 400px;
    }

    .contact-card-contents {
      display: flex;
      flex-direction: column;
      padding: 40px 0;
      width: 100%;
      gap: 20px;

      .title {
        font-size: 120%;
        font-family: leferi-special;
      }

      .contact-contents {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        font-family: leferi;

        .contact-title {
          padding-top: 10px;
        }

        .contact {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          text-align: start;
          padding: 10px 0;
          width: 100%;
          max-width: 900px;

          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;

            .name {
              word-break: keep-all;
            }

            .icons {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding-top: 8px;
              max-width: 200px;

              .icon {
                width: 30%;
                max-width: 80px;
                aspect-ratio: 1 / 1;
                border-radius: 50%;

                &.taehun-call {
                  background: center / 60% no-repeat url("../assets/icon/call.png"), #8d92a6;
                }

                &.taehun-msg {
                  background: center / 60% no-repeat url("../assets/icon/message.png"), #8d92a6;
                }

                &.taehun-heart {
                  background: center / 70% no-repeat url("../assets/icon/heart.png"), #8d92a6;
                }

                &.hyerim-call {
                  background: center / 60% no-repeat url("../assets/icon/call.png"), #ff7992;
                }

                &.hyerim-msg {
                  background: center / 60% no-repeat url("../assets/icon/message.png"), #ff7992;
                }

                &.hyerim-heart {
                  background: center / 70% no-repeat url("../assets/icon/heart.png"), #ff7992;
                }

                @include mobile {
                  width: 40px;
                }
                @include tablet {
                  width: 50px;
                }
                @include desktop {
                  width: 60px;
                }
              }
            }
          }

        }

        .hyerim-contact {
          text-align: start;
        }
      }

    }

    .notice-card-contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 0;
      gap: 20px;

      .title {
        font-size: 120%;
        font-family: leferi-special;
      }

      .contents {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        font-family: leferi;

        .notice-icon-wrapper {
          .icon {
            width: 30%;
            max-width: 80px;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            margin-right: 20px;

            &.meal {
              background: center / 60% no-repeat url("../assets/icon/meal.png"), $dark-color-1;
            }

            &.camera {
              background: center / 60% no-repeat url("../assets/icon/camera.png"), $dark-color-1;
            }

            @include mobile {
              width: 40px;
            }
            @include tablet {
              width: 50px;
            }
            @include desktop {
              width: 60px;
            }

          }
        }

        .notice-text {
          text-align: start;
        }

        .last-text {
          text-align: center;
          margin: 30px 0;

          .star {
            width: 20px;
            margin-bottom: 20px;
          }
        }
      }

    }
  }

}

</style>