<template>
    <div class="create">
        <div class="create_image">
            <picture>
                <source srcset="../assets/img-5.webp" type="image/webp">
                <img src="../assets/img-5.png" loading="lazy" />
            </picture>
        </div>

        <div class="create_nav">
            <h1>{{ langTexts[langComp].create.create_h1 }}</h1>
            <h2>{{ langTexts[langComp].create.create_h2 }}</h2>
            
            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].create.create_1 }}</p>
            <strong>{{ langTexts[langComp].create.create_strong_1 }}</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].create.create_2 }}</p>
            <strong>{{ langTexts[langComp].create.create_strong_2 }}</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].create.create_3 }}</p>
            <strong>{{ langTexts[langComp].create.create_strong_3 }}</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].create.create_4 }}</p>
            <strong>{{ langTexts[langComp].create.create_strong_4 }}</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].create.create_5 }}</p>
            <strong>{{ langTexts[langComp].create.create_strong_5 }}</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>{{ langTexts[langComp].create.create_6 }}</p>
            <strong>{{ langTexts[langComp].create.create_strong_6 }}</strong>


        </div>


        <div class="create_image_phone">
            <picture>
                <source srcset="../assets/img-5mobile.webp" type="image/webp">
                <img src="../assets/img-5mobile.png" loading="lazy" />
            </picture>
        </div>

        <div class="create_background_images">
            <!--
            <img class="create_background_images_1" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="create_background_images_2" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="create_background_images_3" src="../assets/back/lightpurpleby.png" alt="lightpurpleby">
            <img class="create_background_images_4" src="../assets/back/yellowbyfull.png" alt="yellowby">
            <img class="create_background_images_5" src="../assets/back/greenmn.png" alt="greenmn">
            <img class="create_background_images_6" src="../assets/back/greenmnhalf.png" alt="greenmn">
            -->
        </div>

        <div class="page_grey_lines_12">
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
    name: 'Create',
    data(){
        return{
            create_background_images_1_x: 1,
            create_background_images_2_x: 1,
            create_background_images_3_x: 1,
            create_background_images_4_x: 1,
            create_background_images_5_x: 1,
            create_background_images_6_x: 1, 
            langTexts: langText,
        }
    },
    methods:{
        onMouseUpdate(){
            if(window.innerWidth > 456){
                /*
            let x = e.pageX / window.innerWidth * 20
            document.querySelector(".create_background_images_1").style.left = (this.create_background_images_1_x + x).toString() + 'px'
            document.querySelector(".create_background_images_2").style.left = (this.create_background_images_2_x + x).toString() + 'px'
            document.querySelector(".create_background_images_3").style.left = (this.create_background_images_3_x + x).toString() + 'px'
            document.querySelector(".create_background_images_4").style.left = (this.create_background_images_4_x + x).toString() + 'px'
            document.querySelector(".create_background_images_5").style.left = (this.create_background_images_5_x + x).toString() + 'px'
            document.querySelector(".create_background_images_6").style.left = (this.create_background_images_6_x + x).toString() + 'px'
        */
            }
        }
    },
    computed:{
        langComp(){
            return this.$store.state.lang
        },
    },
    mounted() {
        if(window.innerWidth > 456){
        document.addEventListener('mousemove', this.onMouseUpdate)
        /*
        this.create_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".create_background_images_1")).left).substring(0, (window.getComputedStyle(document.querySelector(".create_background_images_1")).left).length - 2))
        this.create_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".create_background_images_2")).left).substring(0, (window.getComputedStyle(document.querySelector(".create_background_images_2")).left).length - 2))
        this.create_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".create_background_images_3")).left).substring(0, (window.getComputedStyle(document.querySelector(".create_background_images_3")).left).length - 2))
        this.create_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".create_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".create_background_images_4")).left).length - 2))
        this.create_background_images_5_x = Number.parseInt((window.getComputedStyle(document.querySelector(".create_background_images_5")).left).substring(0, (window.getComputedStyle(document.querySelector(".create_background_images_5")).left).length - 2))
        this.create_background_images_6_x = Number.parseInt((window.getComputedStyle(document.querySelector(".create_background_images_6")).left).substring(0, (window.getComputedStyle(document.querySelector(".create_background_images_6")).left).length - 2))
        */
        }
    },
}
</script>


<style lang="sass">
@media screen and (min-width: 456px)
    .page_grey_lines_12
        img
            position: absolute
            height: 860px
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
    .create
        background-color: white
        width: 100%
        position: relative
        left: calc((100vw - 1200px) / -2)
        padding: 0 calc((100vw - 1200px) / 2)
        top: -00px
        height: 860px
        z-index: 1
        .create_nav
            display: inline-block
            width: 40%
            vertical-align: middle
            margin-top: 130px
            padding-left: 5%
            h1
                font-size: 30px
                width: 100%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 0px
                margin-bottom: 15px

           
            
            img
                display: inline-block
                margin-right: 10px
                vertical-align: top
                padding-top: 30px
                margin-left: 30px
                user-select: none


            h2
                font-size: 20px
                color: #370954
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-bottom: 30px
                  
            p
                font-weight: 400
                font-size: 18px
                color: #222
                display: inline-block
                font-weight: regular
                width: max-content
                margin: 0
                margin-right: 40px
                margin-top: 27px
                padding-bottom: 2px
                transition: 0.3s all ease
            strong
                display: block
                margin-left: 56px
                font-size: 16px
                font-weight: 400
                color: #999
  
        .create_image
            height: 560px
            display: inline-block
            width: 55%
            vertical-align: top
            position: relative
            top: 125px
            z-index: 100
            user-select: none
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 2
                opacity: 1
                left: -35px

        .create_image_phone
            display: none
        .create_background_images
            position: absolute
            height: 0px
            user-select: none
            img
                transition: none
                position: relative
            .create_background_images_1
                top: -260px
                left: 110px
                z-index: 2
            .create_background_images_2
                left: 400px
                top: -850px
            .create_background_images_3
                top: -260px
                left: -165px
            .create_background_images_4
                left: 230px
                top: -270px
            .create_background_images_5
                top: -905px
                left: -290px
            .create_background_images_6
                display: none
            



@media screen and (max-width: 456px)   
    .page_grey_lines_12
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
    .create
        background-color: white
        width: 100%
        position: relative
        top: -20px
        z-index: 1
        .create_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 70px
            h1
                width: 100%
                font-size: 6.578vw
                line-height: 9.6vw
                font-weight: 700
                color: #370954
                padding-bottom: 0px
                margin-bottom: 10px

           
            
            img
                display: inline-block
                margin-right: 10px
                vertical-align: top
                padding-top: 18px
                margin-left: 0px


            h2
                margin-top: 0px
                font-size: 4.38vw
                color: #370954
                font-weight: 500
                line-height: 6.1vw
                margin: 0
                margin-bottom: 10px
                display: inline-block
                width: 100%
            strong
                display: block
                margin-left: 25px
                font-size: 3.5vw
                width: 80vw
                font-weight: 400
                color: #999
                  
            p
                font-weight: 400
                font-size: 3.94vw
                line-height: 5vw
                color: #222
                display: inline-block
                font-weight: regular
                width: 90%
                margin: 0
                margin-right: 0px
                margin-top: 15px
                padding-bottom: 2px
                transition: 0.3s all ease
        .create_image
            height: 700px
            display: none
            width: 52%
            vertical-align: top
            position: relative
            top: -30px
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 2
                opacity: 1
        .create_image_phone
            display: block
            width: 100%
            height: calc(145vw)
            position: relative
            top: 100px
            z-index: 100
            img
                padding-left: 3.5vw
                width: 93vw
                position: relative
                z-index: 100
                                
        .create_background_images
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .create_background_images_1
                display: block
                top: -85px
                left: 70vw
            .create_background_images_2
                display: block
                left: 90vw
                top: -800px
                z-index: -1
            .create_background_images_3
                top: -260px
                left: -165px
            .create_background_images_4
                left: 230px
                top: -270px
            .create_background_images_5
                top: -905px
                left: -290px
            .create_background_images_6
                display: block
                position: absolute
                right: 0%
                top: -700px


            
</style>