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


<style scoped>
.wedding-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;
    padding: 30px;
    color: #073369;

    .title-star {
        width: 32px;
        height: 30px;
    }
    .title-card {
        position: relative;
        top: -16px;
        border: 2px solid #79a6dd;
        border-radius: 60px 60px 0 60px;
        width: 100%;
        padding: 40px 20px;
        font-family: leferi-white;
        font-weight: 300;
        max-width: 800px;
        letter-spacing: -0.4px;

        .title-card-text {
            text-align: center;
            font-size: 12px;
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
            font-size: 12px;
            .family-box {
                min-width: 40%;
                color: #111;
                .name {
                    /*color: red;*/
                    font-family: leferi-special;
                    color: #073369;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
