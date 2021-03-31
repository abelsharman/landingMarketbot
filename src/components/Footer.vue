<template>
    <div class="footer">
        <div class="footer_logo">
            <img src="../assets/logo_main.png" alt="logo_main">
        </div>

        <div class="footer_logos">
            <div class="footer_logos_flex">
                <a href="https://marketbot.biz/935" target="_blank"><img src="../assets/back/whatsapp.png" alt="whatsapp"></a>
                <a href="#"><img src="../assets/back/facebook.png" alt="facebook"></a>
                <a href="#"><img src="../assets/back/insta.png" alt="insta"></a>
                <a href="#"><img src="../assets/back/telega.png" alt="telega"></a>
            </div>
        </div>

        <p>© 2021 Marketbot. All rights reserved</p>


        <div class="page_grey_lines">
            <img class="page_grey_line_1" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_2" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_3" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_4" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_5" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_6" src="../assets/grey_line.png" alt="grey_line">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="sass">
@media screen and (min-width: 456px)
    .page_grey_lines
        img
            position: absolute
            height: 130px
            width: 1px
            top: 0px
            z-index: 99
        .page_grey_line_1
            left: calc((100vw - 1200px) / 2)
        .page_grey_line_2
            left: calc((100vw - 720px) / 2)
        .page_grey_line_3
            left: calc((100vw - 240px) / 2)
        .page_grey_line_4
            left: calc((100vw + 240px) / 2)
        .page_grey_line_5
            left: calc((100vw + 720px) / 2)
        .page_grey_line_6
            left: calc((100vw + 1200px) / 2)
    .footer
        background-color: white
        width: calc(100vw - (100vw - 1200px))
        position: relative
        left: calc((100vw - 1200px) / -2)
        padding: 0 calc((100vw - 1200px) / 2)
        padding-top: 50px
        top: 0px
        height: 80px
        z-index: 1
        .footer_logo
            user-select: none
            width: 480px
            display: inline-block
        .footer_logos
            user-select: none
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
    .page_grey_lines
        img
            position: absolute
            height: 100%
            width: 1px
            top: 0px
            z-index: 99
        .page_grey_line_1
            margin: 0
            width: 1px
            left: 23.5%
        .page_grey_line_2
            margin: 0
            width: 1px
            left: 76.5%
        .page_grey_line_3
            display: none
            left: calc((100vw - 240px) / 2)
        .page_grey_line_4
            display: none
            left: calc((100vw + 240px) / 2)
        .page_grey_line_5
            display: none
            left: calc((100vw + 720px) / 2)
        .page_grey_line_6
            display: none
            left: calc((100vw + 1200px) / 2)
    .footer
        background-color: white
        width: 100%
        position: relative
        left: 0
        padding-top: 5vh
        top: 6vh
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