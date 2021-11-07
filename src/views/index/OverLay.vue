<template>
    <div class="overlay">
        <div class="overlay-content">
            <div class="slogan sofiaBold">
                <div class="slogan-title">常工院-3w社</div>
                <div class="slogan-subtitle">3w IN CIT</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverLay'
}
</script>

<style lang = "less" scoped>
.overlay {
    position: absolute;
    width: 80%;
    height: 50%;
    top: 30%;
    left: 10%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    cursor: default;
    //background: rgba(51,112,255,.2);
    .slogan {
        font-size: 54px;
        line-height: 61px;
        color: #fff;
        margin-bottom: 67px;
        letter-spacing: 1px;
        font-weight: 800;

        .slogan-subtitle {
            letter-spacing: 16px;
            text-indent: 16px;
            font-size: 14px;
            line-height: 17px;
            opacity: 0.8;
            margin-top: 14px;
            position: relative;
        }
    }
}

.slogan .slogan-subtitle:after,
.slogan .slogan-subtitle:before {
    content: "";
    display: block;
    width: 74px;
    height: 2px;
    position: absolute;
    top: calc(50% - 1px);
    background-image: linear-gradient(
        270deg,
        hsla(0, 0%, 100%, 0),
        #fff 47%,
        hsla(0, 0%, 100%, 0)
    );
}
.slogan .slogan-subtitle:before {
    left: -50px;
}

.slogan .slogan-subtitle:after {
    right: -50px;
}
</style>
