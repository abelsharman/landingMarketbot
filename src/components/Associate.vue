<template>
    <div class="associate">
        <div class="associate_nav">
            <h1>{{ langTexts[langComp].associate.associate_h1 }}</h1>
            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].associate.associate_1 }}</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].associate.associate_2 }}</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].associate.associate_3 }}</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].associate.associate_4 }}</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].associate.associate_5 }}</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].associate.associate_6 }}</p>


            <h2>{{ langTexts[langComp].associate.associate_h2 }} <img src="../assets/crm-png.png" loading="lazy" alt=""><img src="" alt=""></h2>
        </div>

        <div class="associate_image">
            <picture>
                <source srcset="../assets/img-4.webp" type="image/webp">
                <img src="../assets/img-4.png" loading="lazy" />
            </picture>
        </div>


        <div class="associate_image_phone">
            <picture>
                <source srcset="../assets/img-4mobile.webp" type="image/webp">
                <img src="../assets/img-4mobile.png" loading="lazy" />
            </picture>
        </div>


        <div class="associate_background_images">
            <img class="associate_background_images_1" src="../assets/back/telegram_back.png" alt="telegram_back">
            <img class="associate_background_images_2" src="../assets/back/vk_back.png" alt="vk_back">
            <img class="associate_background_images_3" src="../assets/back/whatsapp_back_2.png" alt="whatsapp_back_2">
            <img class="associate_background_images_4" src="../assets/back/viber_back.png" alt="yellowby">

            <!--
            <img class="associate_background_images_5" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="associate_background_images_6" src="../assets/back/greymy.png" alt="greenby">
            <img class="associate_background_images_7" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="associate_background_images_8" src="../assets/back/greenby.png" alt="greenby">
            <img class="associate_background_images_9" src="../assets/back/purpleby.png" alt="purpleby">
            <img class="associate_background_images_10" src="../assets/back/bluemn.png" alt="bluemn">
            <img class="associate_background_images_11" src="../assets/back/greysn.png" alt="greysn">
            <img class="associate_background_images_12" src="../assets/back/purplebyhalf.png" alt="greysn">
            <img class="associate_background_images_13" src="../assets/back/brownmyhalf.png" alt="greysn">
            -->
        </div>


    </div>
</template>

<script async>
import langText from '../assets/lang.js'
export default {
    name: 'Associate',
    data(){
        return{
            associate_background_images_1_x: 1,
            associate_background_images_2_x: 1,
            associate_background_images_3_x: 1,
            associate_background_images_4_x: 1,
            associate_background_images_5_x: 1,
            associate_background_images_6_x: 1,
            associate_background_images_7_x: 1,
            associate_background_images_8_x: 1,
            associate_background_images_9_x: 1,
            associate_background_images_10_x: 1,
            associate_background_images_11_x: 1,
            associate_background_images_12_x: 1,
            associate_background_images_13_x: 1,
            langTexts: langText,
        }
    },
    methods:{
        onMouseUpdate(e){
            let x = e.pageX / window.innerWidth * 20
            if(window.innerWidth < 456){
                x = window.pageYOffset / window.innerWidth * 12
            }
            //let y = e.clientY / window.innerHeight * 20
            document.querySelector(".associate_background_images_1").style.left = (this.associate_background_images_1_x - x).toString() + 'px'
            document.querySelector(".associate_background_images_2").style.left = (this.associate_background_images_2_x - x).toString() + 'px'
            document.querySelector(".associate_background_images_3").style.left = (this.associate_background_images_3_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_4").style.left = (this.associate_background_images_4_x + x).toString() + 'px'

            /*
            document.querySelector(".associate_background_images_5").style.left = (this.associate_background_images_5_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_6").style.left = (this.associate_background_images_6_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_7").style.left = (this.associate_background_images_7_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_8").style.left = (this.associate_background_images_8_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_9").style.left = (this.associate_background_images_9_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_10").style.left = (this.associate_background_images_10_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_11").style.left = (this.associate_background_images_11_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_12").style.left = (this.associate_background_images_12_x + x).toString() + 'px'
            document.querySelector(".associate_background_images_13").style.left = (this.associate_background_images_13_x + x).toString() + 'px'
            */

            
        }
    },
    computed:{
        langComp(){
            return this.$store.state.lang
        }
    },
    mounted(){
        document.addEventListener('mousemove', this.onMouseUpdate)
        if(window.innerWidth < 456){
            document.addEventListener('scroll', this.onMouseUpdate)
        }
        this.associate_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_1")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_1")).left).length - 2))
        this.associate_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_2")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_2")).left).length - 2))
        this.associate_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_3")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_3")).left).length - 2))
        this.associate_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_4")).left).length - 2))

        /*
        this.associate_background_images_5_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_5")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_5")).left).length - 2))
        this.associate_background_images_6_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_6")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_6")).left).length - 2))
        this.associate_background_images_7_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_7")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_7")).left).length - 2))
        this.associate_background_images_8_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_8")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_8")).left).length - 2))
        this.associate_background_images_9_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_9")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_9")).left).length - 2))

        this.associate_background_images_10_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_10")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_10")).left).length - 2))
        this.associate_background_images_11_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_11")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_11")).left).length - 2))
        this.associate_background_images_12_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_12")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_12")).left).length - 2))
        this.associate_background_images_13_x = Number.parseInt((window.getComputedStyle(document.querySelector(".associate_background_images_13")).left).substring(0, (window.getComputedStyle(document.querySelector(".associate_background_images_13")).left).length - 2))
        */

    }
}
</script>

<style lang="sass">
@media screen and (min-width: 456px)
    .associate
        z-index: 100
        position: relative
        margin-top: 100px
        .associate_nav
            display: inline-block
            width: 46.7%
            vertical-align: top
            position: relative
            top: -25px
            h1
                font-size: 30px
                width: 100%
                line-height: 42px
                font-weight: 700
                color: white
                padding-bottom: 20px

           
            
            img
                user-select: none
                display: inline-block
                margin-right: 17px
                vertical-align: top
                padding-top: 30px
                margin-left: 30px


            h2
                font-size: 20px
                color: white
                font-weight: 500
                display: inline-block
                width: 100%
                img
                    position: relative
                    top: -4px
                    vertical-align: bottom
                    user-select: none
                    display: inline-block
                  
            p
                font-weight: 400
                font-size: 18px
                color: white
                display: inline-block
                font-weight: regular
                width: 80%
                margin: 0
                margin-right: 40px
                margin-top: 27px
                padding-bottom: 2px
                transition: 0.3s all ease
        .associate_image
            user-select: none
            height: 700px
            display: inline-block
            width: 51%
            vertical-align: top
            position: relative
            top: -30px
            margin-bottom: 50px
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 2
                opacity: 1
        .associate_image_phone
            display: none
        .associate_background_images
            user-select: none
            position: absolute
            height: 0px
            img
                transition: none
                position: relative
            .associate_background_images_1
                top: -60px
                left: 500px
                z-index: 2
            .associate_background_images_2
                left: 730px
                top: -860px
                z-index: 1
            .associate_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .associate_background_images_4
                left: 630px
                top: -270px
            .associate_background_images_5
                top: -515px
                left: -210px
            .associate_background_images_6
                top: -465px
                left: 0px
                z-index: 1
            .associate_background_images_7
                left: 40px
                top: -200px
            .associate_background_images_8
                left: 250px
                top: -800px
            .associate_background_images_9
                left: 00px
                top: -1010px
            .associate_background_images_10
                left: 470px
                top: -610px
            .associate_background_images_11
                left: -390px
                top: -1000px
            .associate_background_images_12
                display: none
            .associate_background_images_13
                display: none
            



@media screen and (max-width: 456px)   
     .associate
        position: relative
        z-index: 1000
        background-color: #1e2024
        top: 0
        .associate_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: -150px
            background-color: #1e2024
            padding-top: 40px
            h1
                width: 95%
                font-size: 7vw
                line-height: 9.6vw
                font-weight: 700
                color: white
                padding-bottom: 0px

           
            
            img
                display: inline-block
                margin-right: 10px
                vertical-align: top
                padding-top: 16px
                margin-left: 0px


            h2
                margin-top: 20px
                font-size: 4.38vw
                color: white
                font-weight: 500
                display: inline-block
                width: 100%
                img
                    position: relative
                    top: -4px
                    vertical-align: bottom
                    display: inline-block
                  
            p
                font-weight: 400
                font-size: 3.94vw
                color: white
                display: inline-block
                font-weight: regular
                width: 90%
                margin: 0
                margin-right: 0px
                margin-top: 14px
                line-height: 6.57vw
                padding-bottom: 2px
                transition: 0.3s all ease
        .associate_image
            display: none
            width: 52%
            vertical-align: top
            position: relative
            top: 30px
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 2
                opacity: 1
        .associate_image_phone
            display: block
            width: 100%
            position: relative
            top: -140px
            z-index: 2
            height: 70vw
            background-color: #1e2024
            img
                padding-left: 3.5vw
                width: 93vw
        .associate_background_images
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .associate_background_images_1
                position: absolute
                display: block
                top: -20px
                right: 0vw
                width: 30vw
                z-index: 2
            .associate_background_images_2
                position: absolute
                display: block
                right: 5vw
                width: 35vw
                top: -1050px
                z-index: 1
            .associate_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .associate_background_images_4
                left: 630px
                top: -270px
            .associate_background_images_5
                top: -15px
                left: 34vw
            .associate_background_images_6
                top: -155px
                left: 36vw
                z-index: 1
            .associate_background_images_7
                left: 40px
                top: -200px
            .associate_background_images_8
                left: 250px
                top: -800px
            .associate_background_images_9
                left: 00px
                top: -1010px
            .associate_background_images_10
                left: 100px
                top: -540px
            .associate_background_images_11
                display: block
                left: 88vw
                top: -630px
                width: 5vw
            .associate_background_images_12
                display: block
                position: absolute
                right: 0
                top: -700px
                width: 10vw
            .associate_background_images_13
                display: block
                position: absolute
                right: 0
                top: -50px
                width: 15vw


@media screen and (max-width: 355px)   
     .associate
        .associate_background_images
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .associate_background_images_1
                position: absolute
                display: block
                top: -420px
                right: 0vw
                width: 30vw
                z-index: 2
            .associate_background_images_2
                position: absolute
                display: block
                right: 5vw
                width: 35vw
                top: -1030px
                z-index: 1
            .associate_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .associate_background_images_4
                left: 630px
                top: -270px
            .associate_background_images_5
                top: -15px
                left: 34vw
            .associate_background_images_6
                top: -155px
                left: 36vw
                z-index: 1
            .associate_background_images_7
                left: 40px
                top: -200px
            .associate_background_images_8
                left: 250px
                top: -800px
            .associate_background_images_9
                left: 00px
                top: -1010px
            .associate_background_images_10
                left: 100px
                top: -540px
            .associate_background_images_11
                display: block
                left: 88vw
                top: -630px
                width: 5vw
            .associate_background_images_12
                display: block
                position: absolute
                right: 0
                top: -780px
                width: 10vw
            .associate_background_images_13
                display: block
                position: absolute
                right: 0
                top: -50px
                width: 15vw


</style>