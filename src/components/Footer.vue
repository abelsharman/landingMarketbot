<template>
    <div class="footer">
        <div class="footer_logo">
            <img src="../assets/logo_main.png" alt="logo_main">
        </div>

        <div class="footer_logos">
            <div class="footer_logos_flex">
                <img src="../assets/back/whatsapp.png" alt="whatsapp">
                <img src="../assets/back/facebook.png" alt="facebook">
                <img src="../assets/back/insta.png" alt="insta">
                <img src="../assets/back/twitter.png" alt="twitter">
                <img src="../assets/back/telega.png" alt="telega">
            </div>
        </div>

        <p>© 2021 Marketbot. All rights reserved</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="sass">
@media screen and (min-width: 456px)
    .footer
        background-color: white
        width: 100%
        position: relative
        left: calc((100vw - 1200px) / -2)
        padding: 0 calc((100vw - 1200px) / 2)
        padding-top: 50px
        top: 0px
        height: 80px
        z-index: 1
        .footer_logo
            width: 480px
            display: inline-block
        .footer_logos
            display: inline-block
            width: 240px
            .footer_logos_flex
                display: flex
                justify-content: space-around
        p
            display: inline-block
            font-size: 16px
            line-height: 40px
            font-weight: 400
            color: #999
            margin: 0 0 0 205px


@media screen and (max-width: 456px)
    .footer
        background-color: white
        width: 100%
        position: relative
        left: 0
        padding-top: 5vh
        top: 10vh
        height: auto
        z-index: 1
        .footer_logo
            width: 100%
            text-align: center
            display: block
        .footer_logos
            display: block
            margin-top: 5vh
            width: 52%
            margin-left: 24%
            .footer_logos_flex
                display: flex
                justify-content: space-around
        p
            display: inline-block
            font-size: 3.5vw
            font-weight: 400
            color: #999
            width: 62%
            margin: 5vh 0 5vh 19%
</style>