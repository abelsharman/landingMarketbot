<template>
    <div class="execute">
        <div class="execute_nav">
            <h1>{{ langTexts[langComp].execute.execute_h1 }}</h1>
            <h2>{{ langTexts[langComp].execute.execute_h2 }}</h2>
            <p>{{ langTexts[langComp].execute.execute_p }}</p>
        </div>

        <div class="execute_image">
            <picture>
                <source srcset="../assets/img-6.webp" type="image/webp">
                <img src="../assets/img-6.png" loading="lazy" />
            </picture>
        </div>


        <div class="execute_image_phone">
            <picture>
                <source srcset="../assets/img-6mobile.webp" type="image/webp">
                <img src="../assets/img-6mobile.png" loading="lazy" />
            </picture>
        </div>


        <div class="execute_background_images">
            <img class="execute_background_images_1" src="../assets/back/telegram_back.png" alt="telegram_back">
            <img class="execute_background_images_2" src="../assets/back/viber_back_2.png" alt="viber_back">
            <img class="execute_background_images_3" src="../assets/back/whatsapp_back.png" alt="whatsapp_back">
            <!--
            <img class="execute_background_images_4" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="execute_background_images_5" src="../assets/back/greymy.png" alt="greymy">
            <img class="execute_background_images_6" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="execute_background_images_7" src="../assets/back/purpleby.png" alt="purpleby">
            <img class="execute_background_images_8" src="../assets/back/bluemn.png" alt="bluemn">
            <img class="execute_background_images_9" src="../assets/back/greysn.png" alt="greysn">
            -->
        </div>


        
    </div>
</template>



<script async>
import langText from '../assets/lang.js'
export default {
    name: 'Execute',
    data(){
        return{
            execute_background_images_1_x: 1,
            execute_background_images_2_x: 1,
            execute_background_images_3_x: 1,
            execute_background_images_4_x: 1,
            execute_background_images_5_x: 1,
            execute_background_images_6_x: 1,
            execute_background_images_7_x: 1,
            execute_background_images_8_x: 1,
            execute_background_images_9_x: 1,
            langTexts: langText,
        }
    },
    methods: {
        onMouseUpdate(e){
            let x = e.pageX / window.innerWidth * 20
            //let y = e.clientY / window.innerHeight * 20
            if(window.innerWidth < 456){
                x = (window.pageYOffset - 2000) / window.innerWidth * 12
            }
            document.querySelector(".execute_background_images_1").style.right = (this.execute_background_images_1_x - x).toString() + 'px'
            document.querySelector(".execute_background_images_2").style.right = (this.execute_background_images_2_x - x).toString() + 'px'
            document.querySelector(".execute_background_images_3").style.left = (this.execute_background_images_3_x + x).toString() + 'px'
            if(window.innerWidth > 456){
                document.querySelector(".execute_background_images_1").style.left = (this.execute_background_images_1_x + x).toString() + 'px'
                document.querySelector(".execute_background_images_2").style.left = (this.execute_background_images_2_x + x).toString() + 'px'
                document.querySelector(".execute_background_images_3").style.left = (this.execute_background_images_3_x + x).toString() + 'px'
            }
            /*
            document.querySelector(".execute_background_images_4").style.left = (this.execute_background_images_4_x + x).toString() + 'px'
            document.querySelector(".execute_background_images_5").style.left = (this.execute_background_images_5_x + x).toString() + 'px'
            document.querySelector(".execute_background_images_6").style.left = (this.execute_background_images_6_x + x).toString() + 'px'
            document.querySelector(".execute_background_images_7").style.left = (this.execute_background_images_7_x + x).toString() + 'px'
            document.querySelector(".execute_background_images_8").style.left = (this.execute_background_images_8_x + x).toString() + 'px'
            document.querySelector(".execute_background_images_9").style.left = (this.execute_background_images_9_x + x).toString() + 'px'
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
        this.execute_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_1")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_1")).left).length - 2))
        this.execute_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_2")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_2")).left).length - 2))
        this.execute_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_3")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_3")).left).length - 2))
        /*
        this.execute_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_4")).left).length - 2))
        this.execute_background_images_5_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_5")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_5")).left).length - 2))
        this.execute_background_images_6_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_6")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_6")).left).length - 2))
        this.execute_background_images_7_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_7")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_7")).left).length - 2))
        this.execute_background_images_8_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_8")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_8")).left).length - 2))
        this.execute_background_images_9_x = Number.parseInt((window.getComputedStyle(document.querySelector(".execute_background_images_9")).left).substring(0, (window.getComputedStyle(document.querySelector(".execute_background_images_9")).left).length - 2))
        */
    }
}
</script>



<style lang="sass">
@media screen and (min-width: 456px)
    .execute
        margin-top: 100px
        .execute_nav
            display: inline-block
            width: 37.7%
            vertical-align: top
            padding-top: 200px
            h1
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: white
                padding-bottom: 0px
                margin: 0

            h2
                font-size: 20px
                color: white
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-top: 27px
                  
            p
                font-weight: 400
                font-size: 16px
                color: white
                
                display: inline-block
                font-weight: 400
                width: 85%
                margin: 0
                margin-right: 40px
                margin-top: 27px
                padding-bottom: 2px
                transition: 0.3s all ease
        .execute_image
            height: 663px
            display: inline-block
            width: 52%
            vertical-align: top
            user-select: none
            position: relative
            top: -30px
            margin-bottom: 50px
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 2
                opacity: 1
        .execute_image_phone
            display: none
        .execute_background_images
            user-select: none
            position: absolute
            height: 0px
            img
                transition: none
                position: relative
            .execute_background_images_1
                top: -70px
                left: 1030px
                z-index: 2
            .execute_background_images_2
                left: 0px
                top: -270px
            .execute_background_images_3
                top: -680px
                left: -50px
                z-index: 2
            .execute_background_images_4
                top: -820px
                left: -125px
            .execute_background_images_5
                top: -820px
                left: -30px
            .execute_background_images_6
                top: -320px
                left: 300px
                z-index: 2
            .execute_background_images_7
                left: 275px
                top: -260px
            .execute_background_images_8
                left: -430px
                top: -300px
            .execute_background_images_9
                left: 190px
                top: -865px


@media screen and (max-width: 456px)   
    .execute
        position: relative
        z-index: 110
        background-color: #1e2024
        margin-top: 0px
        top: -20px
        .execute_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 70px
            h1
                width: 95%
                font-size: 7vw
                line-height: 9.6vw
                font-weight: 700
                color: white
                margin: 0

           
        


            h2
                font-size: 4.38vw
                color: white
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-top: 10px
                  
            p
                font-weight: 400
                font-size: 3.5vw
                line-height: 5.26vw
                color: white
                display: inline-block
                font-weight: regular
                width: 91%
                margin: 0
                margin-right: 0px
                margin-top: 17px
                padding-bottom: 2px
                transition: 0.3s all ease
        .execute_image
            height: 700px
            display: none
            width: 52%
            vertical-align: top
            position: relative
            top: 30px
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 4
                opacity: 1
        .execute_image_phone
            display: block
            width: 100%
            position: relative
            top: 80px
            height: 120vw
            margin-bottom: 50px
            background-color: #1e2024
            z-index: 1
            img
                position: relative
                z-index: 4
                width: 100vw
        .execute_background_images
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .execute_background_images_1
                display: block
                position: absolute
                top: -70px
                right: 0
                z-index: 5
            .execute_background_images_2
                display: block
                position: absolute
                right: 0
                width: 25vw
                top: -830px
                z-index: 5
            .execute_background_images_3
                display: block
                position: absolute
                top: -1000px
                left: -30px
                width: 35vw
                z-index: 3
            .execute_background_images_4
                display: block
                top: 20px
                left: 15vw
                z-index: 3
            .execute_background_images_5
                display: block
                top: -90px
                left: -30px
                z-index: 3
            .execute_background_images_6
                top: 1320px
                left: 300px
                z-index: 2
            .execute_background_images_7
                left: 275px
                top: -260px
            .execute_background_images_8
                left: -430px
                top: -300px




@media screen and (max-width: 375px)   
    .execute
        margin-top: 0px
        .execute_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 70px
            h1
                width: 95%
                font-size: 7vw
                line-height: 9.6vw
                font-weight: 700
                color: #370954
                margin: 0

           
        


            h2
                font-size: 4.38vw
                color: #370954
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-top: 10px
                  
            p
                font-weight: 400
                font-size: 3.5vw
                line-height: 5.26vw
                color: #999
                display: inline-block
                font-weight: regular
                width: 91%
                margin: 0
                margin-right: 0px
                margin-top: 17px
                padding-bottom: 2px
                transition: 0.3s all ease
        .execute_image
            height: 700px
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
        .execute_image_phone
            display: block
            width: 100%
            position: relative
            top: 70px
            height: 100vw
            margin-bottom: 50px
            background-color: #f9f9f9
            z-index: 1
            img
                position: relative
                z-index: 4
                width: 86%
                padding-left: 7%
        .execute_background_images
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .execute_background_images_1
                display: block
                position: absolute
                top: -70px
                right: 0
                z-index: 2
            .execute_background_images_2
                display: block
                position: absolute
                right: 0
                top: -760px
            .execute_background_images_3
                display: block
                position: absolute
                top: -950px
                left: -30px
                z-index: 2
            .execute_background_images_4
                display: block
                top: 20px
                left: 15vw
            .execute_background_images_5
                display: block
                position: absolute
                top: -90px
                left: -30px
            .execute_background_images_6
                top: 1320px
                left: 300px
                z-index: 2
            .execute_background_images_7
                left: 275px
                top: -260px
            .execute_background_images_8
                left: -430px
                top: -300px
    

</style>