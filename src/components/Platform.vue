<template>
    <div class="platform">
       <div class="platform_text">
            <h1>{{ langTexts[langComp].platform.platform_h1 }}</h1>
            <h3>{{ langTexts[langComp].platform.platform_h3 }}</h3>
            <h2>+ <span>{{ langTexts[langComp].platform.platform_h2 }}</span></h2>
            <p>{{ langTexts[langComp].platform.platform_p }}</p>
            <a href="#quiz"><button>{{ langTexts[langComp].platform.platform_a }}</button></a>
       </div>


       <div class="platform_image">
            <picture>
                <source srcset="../assets/img_1.webp" type="image/webp">
                <img src="../assets/img_1.png" />
            </picture>
       </div>


       <div class="platform_image_phone">
            <picture>
                <source srcset="../assets/img-1-mobile.webp" type="image/webp">
                <img src="../assets/img-1-mobile.png" alt="1">
            </picture>
       </div>

       <div class="platform_background_images">
            <img class="platform_background_images_1" src="../assets/back/whatsapp_back.png" alt="whatsapp_back">
            <img class="platform_background_images_2" src="../assets/back/telegram_back.png" alt="telegram_back">
            <img class="platform_background_images_3" src="../assets/back/viber_back.png" alt="viber_back">
            
            <img class="platform_background_images_4" src="../assets/back/bluemn.png" alt="1">
            <img class="platform_background_images_5" src="../assets/back/greenby.png" alt="2">
            <img class="platform_background_images_6" src="../assets/back/greymy.png" alt="3">
            <img class="platform_background_images_7" src="../assets/back/greysn.png" alt="4">
            <img class="platform_background_images_8" src="../assets/back/purpleby.png" alt="5">
            <img class="platform_background_images_9" src="../assets/back/purplesn.png" alt="6">
            <img class="platform_background_images_10" src="../assets/back/yellowby.png" alt="7">
            <img class="platform_background_images_11" src="../assets/back/greenmn.png" alt="8">

       </div>

       <div class="page_grey_lines_15">
            <img class="page_grey_line_1" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_2" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_3" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_4" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_5" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_6" src="../assets/grey_line.png" alt="grey_line">
        </div>
    </div>
</template>


<script async>
import langText from '../assets/lang.js'
export default {
    name: 'Platform',
    data(){
        return{
            platform_background_images_1_x: 1,
            platform_background_images_2_x: 1,
            platform_background_images_3_x: 1,
            platform_background_images_4_x: 1,
            platform_background_images_5_x: 1,
            platform_background_images_6_x: 1,
            platform_background_images_7_x: 1,
            platform_background_images_8_x: 1,
            platform_background_images_9_x: 1,
            platform_background_images_10_x: 1,
            platform_background_images_11_x: 1,
            langTexts: langText,

        }
    },
    methods:{
        onMouseUpdate(e){
            if(window.innerWidth > 456){
            let x = e.pageX / window.innerWidth * 20
            let y = e.clientY / window.innerHeight * 20
            document.querySelector(".platform_background_images_1").style.top = (this.platform_background_images_1_x + y).toString() + 'px'
            document.querySelector(".platform_background_images_2").style.top = (this.platform_background_images_2_x + y).toString() + 'px'
            document.querySelector(".platform_background_images_3").style.top = (this.platform_background_images_3_x + y).toString() + 'px'
            document.querySelector(".platform_background_images_4").style.left = (this.platform_background_images_4_x + x).toString() + 'px'
            document.querySelector(".platform_background_images_5").style.left = (this.platform_background_images_5_x + x).toString() + 'px'
            document.querySelector(".platform_background_images_6").style.left = (this.platform_background_images_6_x + x).toString() + 'px'
            document.querySelector(".platform_background_images_7").style.left = (this.platform_background_images_7_x + x).toString() + 'px'
            document.querySelector(".platform_background_images_8").style.left = (this.platform_background_images_8_x + x).toString() + 'px'
            document.querySelector(".platform_background_images_9").style.left = (this.platform_background_images_9_x + x).toString() + 'px'
            document.querySelector(".platform_background_images_10").style.left = (this.platform_background_images_10_x + x).toString() + 'px'
            document.querySelector(".platform_background_images_11").style.left = (this.platform_background_images_11_x + x).toString() + 'px'
            }  
        },  
    },
    computed:{
        langComp(){
            return this.$store.state.lang
        }
    },
    mounted(){
        if(window.innerWidth > 456){
        document.addEventListener('mousemove', this.onMouseUpdate)
        this.platform_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_1")).top).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_1")).top).length - 2))
        this.platform_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_2")).top).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_2")).top).length - 2))
        this.platform_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_3")).top).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_3")).top).length - 2))
        this.platform_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_4")).left).length - 2))
        this.platform_background_images_5_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_5")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_5")).left).length - 2))
        this.platform_background_images_6_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_6")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_6")).left).length - 2))
        this.platform_background_images_7_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_7")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_7")).left).length - 2))
        this.platform_background_images_8_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_8")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_8")).left).length - 2))
        this.platform_background_images_9_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_9")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_9")).left).length - 2))
        this.platform_background_images_10_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_10")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_10")).left).length - 2))
        this.platform_background_images_11_x = Number.parseInt((window.getComputedStyle(document.querySelector(".platform_background_images_11")).left).substring(0, (window.getComputedStyle(document.querySelector(".platform_background_images_11")).left).length - 2))
        
        }
    }
}
</script>



<style lang="sass">
$h_color: #370954
$p_color: #370954

@media screen and (min-width: 456px)
    .page_grey_lines_15
        display: none
        img
                position: absolute
                display: inline
                height: 150px
                width: 1px
                top: -40px
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
    .platform 
        width: 100%
        .platform_text
            padding-top: 150px
            vertical-align: top
            width: 47.7%
            display: inline-block
            h1
                width: 90%
                color: $h_color
                line-height: 54px
                font-size: 46px
                font-weight: 700
                margin: 0
            h3
                color: $h_color
                font-size: 26px
                line-height: 38px
                font-weight: 700
                margin: 0
                margin-top: 10px
            h2
                color: #c34688
                font-size: 26px
                font-weight: 700
                margin: 0
                line-height: 38px
                width: max-content 
                span
                    padding-bottom: 3px
                    border-bottom: 1px dotted #c34688
            p
                font-size: 18px
                margin-top: 30px
                line-height: 30px
                color: #222222
                font-size: 400
            button
                user-select: none
                border-radius: 31px
                margin-top: 50px
                font-size: 18px
                color: white
                font-weight: 400
                border: 0px
                background-color: #c34688
                height: 62px
                width: 360px
                outline: none
                cursor: pointer
                







        
        .platform_image
            vertical-align: top
            width: 52.3%
            display: inline-block
            z-index: 100
            position: relative
            user-select: none
            padding-top: 70px
            picture
                display: block
            source
                display: block
        .platform_image_phone
            display: none
        .platform_background_images
            user-select: none
            img
                position: relative
            .platform_background_images_1
                top: -225px
                left: 505px
            .platform_background_images_2
                left: 80px
            .platform_background_images_3
                position: absolute
                top: 530px
                right: 160px
            .platform_background_images_4
                top: -150px
                left: 785px
            .platform_background_images_5
                top: -145px
                left: 238px
                z-index: 1
            .platform_background_images_6
                top: -725px
                left: -13px
                z-index: 1
            .platform_background_images_7
                left: 350px 
                top: -60px
            .platform_background_images_8
                position: absolute
                right: 85px
                top: 380px
                z-index: 1
            .platform_background_images_9
                left: -240px
                top: -820px
            .platform_background_images_10
                display: none
            .platform_background_images_11
                display: none





@media screen and (max-width: 456px)
    .page_grey_lines_15
            img
                position: absolute
                display: inline
                height: calc(100% + 70px)
                width: 1px
                top: 0px
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
    .platform 
        position: relative
        width: 100%
        .platform_text
            padding-left: 7%
            padding-top: 45px
            width: 90%
            display: block
            h1
                width: 90%
                color: $h_color
                line-height: 11.842vw
                font-size: 10.08vw
                width: 77%
                font-weight: 700
                margin: 0
            h3
                color: $h_color
                font-size: 5.7vw
                line-height: 8.33vw
                font-weight: 700
                margin: 0
                margin-top: 10px
            h2
                color: #c34688
                font-size: 5.7vw
                font-weight: 700
                margin: 0
                line-height: 8.33vw
                width: max-content 
                span
                    padding-bottom: 3px
                    border-bottom: 1px dotted #c34688
            p
                font-size: 3.94vw
                margin: 0
                margin-top: 30px
                line-height: 6.57vw
                color: #222222
                font-size: 400
            button
                border-radius: 31px
                margin-top: 25px
                font-size: 3.94vw
                color: white
                font-weight: 400
                border: 0px
                background-color: #c34688
                height: 62px
                width: 95%
                outline: none
                cursor: pointer
                







        
        .platform_image
            width: 100%
            display: none
            z-index: 2
            position: relative
            padding-top: 70px
            img
                width: 100%
        .platform_image_phone
            display: block
            width: 100%
            z-index: 100
            position: relative
            padding-top: 46px
            img
                padding-left: 3.5vw
                width: 93vw

                



        .platform_background_images
            img
                position: relative
                display: none
            .platform_background_images_1
                top: -225px
                left: 505px
            .platform_background_images_2
                left: 80px
            .platform_background_images_3
                position: absolute
                top: 530px
                right: 0px
            .platform_background_images_4
                top: -150px
                left: 785px
            .platform_background_images_5
                top: -145px
                left: 238px
                z-index: 1
            .platform_background_images_6
                top: -725px
                left: -13px
                z-index: 1
            .platform_background_images_7
                left: 350px 
                top: -60px
            .platform_background_images_8
                position: absolute
                right: 45px
                top: 380px
                z-index: 1
            .platform_background_images_9
                display: block
                position: absolute
                right: 12%
                top: 50px
                width: 5vw
            .platform_background_images_10
                display: block
                position: absolute
                right: 0px
                top: 70px
            .platform_background_images_11
                display: block
                position: relative
                left: 40%
                z-index: 1
                top: -60px



@media screen and (max-width: 320px)
    .platform 
        width: 100%
        .platform_text
            padding-left: 7%
            padding-top: 35px
            width: 90%
            display: block
            h1
                width: 90%
                color: $h_color
                line-height: 11.842vw
                font-size: 10.08vw
                width: 77%
                font-weight: 700
                margin: 0
            h3
                color: $h_color
                font-size: 5.7vw
                line-height: 8.33vw
                font-weight: 700
                margin: 0
                margin-top: 10px
            h2
                color: #c34688
                font-size: 5.7vw
                font-weight: 700
                margin: 0
                line-height: 8.33vw
                width: max-content 
                span
                    padding-bottom: 3px
                    border-bottom: 1px dotted #c34688
            p
                font-size: 3.94vw
                margin: 0
                margin-top: 30px
                line-height: 6.57vw
                color: #222222
                font-size: 400
            button
                border-radius: 31px
                margin-top: 25px
                font-size: 3.94vw
                color: white
                font-weight: 400
                border: 0px
                background-color: #c34688
                height: 62px
                width: 95%
                outline: none
                cursor: pointer
                







        
        .platform_image
            width: 100%
            display: none
            z-index: 2
            position: relative
            padding-top: 70px
            img
                width: 100%
        .platform_image_phone
            display: block
            width: 100%
            z-index: 2
            position: relative
            padding-top: 46px
            img
                width: 86vw
                padding-left: 7vw

                



        .platform_background_images
            img
                position: relative
                display: none
            .platform_background_images_1
                top: -225px
                left: 505px
            .platform_background_images_2
                left: 80px
            .platform_background_images_3
                position: absolute
                top: 530px
                right: 0px
            .platform_background_images_4
                top: -150px
                left: 785px
            .platform_background_images_5
                top: -145px
                left: 238px
                z-index: 1
            .platform_background_images_6
                top: -725px
                left: -13px
                z-index: 1
            .platform_background_images_7
                left: 350px 
                top: -60px
            .platform_background_images_8
                position: absolute
                right: 45px
                top: 380px
                z-index: 1
            .platform_background_images_9
                display: block
                position: absolute
                right: 12%
                top: 170px
            .platform_background_images_10
                display: block
                position: absolute
                right: 0px
                top: 190px
            .platform_background_images_11
                display: block
                position: relative
                left: 40%
                z-index: 1
                top: -60px






@media screen and (min-width: 1920px)
    .platform 
        width: 100%
        .platform_text
            padding-top: 150px
            vertical-align: top
            width: 47.3%
            display: inline-block
            h1
                width: 90%
                color: $h_color
                line-height: 54px
                font-size: 46px
                font-weight: 700
                margin: 0
            h3
                color: $h_color
                font-size: 26px
                line-height: 38px
                font-weight: 700
                margin: 0
                margin-top: 10px
            h2
                color: #c34688
                font-size: 26px
                font-weight: 700
                margin: 0
                line-height: 38px
                width: max-content 
                span
                    padding-bottom: 3px
                    border-bottom: 1px dotted #c34688
            p
                font-size: 18px
                margin-top: 30px
                line-height: 30px
                color: #222222
                font-size: 400
            button
                border-radius: 31px
                margin-top: 50px
                font-size: 18px
                color: white
                font-weight: 400
                border: 0px
                background-color: #c34688
                height: 62px
                width: 360px
                outline: none
                cursor: pointer
                







        
        .platform_image
            vertical-align: top
            width: 52.7%
            display: inline-block
            z-index: 2
            position: relative
            padding-top: 70px
        .platform_image_phone
            display: none
        .platform_background_images
            img
                position: relative
            .platform_background_images_1
                top: -225px
                left: 505px
            .platform_background_images_2
                left: 80px
            .platform_background_images_3
                position: absolute
                top: 530px
                right: 200px
            .platform_background_images_4
                top: -150px
                left: 785px
            .platform_background_images_5
                top: -145px
                left: 238px
                z-index: 1
            .platform_background_images_6
                top: -725px
                left: -13px
                z-index: 1
            .platform_background_images_7
                left: 350px 
                top: -60px
            .platform_background_images_8
                position: absolute
                right: 285px
                top: 380px
                z-index: 1
            .platform_background_images_9
                left: -240px
                top: -820px
            .platform_background_images_10
                display: none
            .platform_background_images_11
                display: none


</style>