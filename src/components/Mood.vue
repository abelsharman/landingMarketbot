<template>
    <div class="mood">
        <div class="mood_image">
            <picture>
                <source srcset="../assets/img-7.webp" type="image/webp">
                <img src="../assets/img-7.png" loading="lazy" />
            </picture>
        </div>

        <div class="mood_nav">
            <h1>{{ langTexts[langComp].mood.mood_h1 }}</h1>
            <h2>{{ langTexts[langComp].mood.mood_h2 }}</h2>
            <a href="#quiz2"><button>{{ langTexts[langComp].platform.platform_a }}</button></a>
        </div>


        <div class="mood_image_phone">
            <picture>
                <source srcset="../assets/img-7mobile.webp" type="image/webp">
                <img src="../assets/img-7mobile.png" loading="lazy" />
            </picture>
        </div>

        <div class="mood_background_images">
            <img class="mood_background_images_1" src="../assets/back/greenmn.png" alt="greenmn">
            <img class="mood_background_images_2" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="mood_background_images_3" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="mood_background_images_4" src="../assets/back/turquoiseby.png" alt="turquoiseby">
            <img class="mood_background_images_5" src="../assets/back/yellowbyfull.png" alt="yellowby">
            <img class="mood_background_images_6" src="../assets/back/greysn.png" alt="greysn">
        </div>

        <div class="page_grey_lines_11">
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
import JQuery from 'jquery'
let $ = JQuery
import langText from '../assets/lang.js'
export default {
    name: 'Mood',
    data(){
        return{
            mood_background_images_1_x: 1,
            mood_background_images_2_x: 1,
            mood_background_images_3_x: 1,
            mood_background_images_4_x: 1,
            mood_background_images_5_x: 1,
            mood_background_images_6_x: 1,
            langTexts: langText,
        }
    },
    methods:{
        onMouseUpdate(e){
            if(window.innerWidth > 456){
            let x = e.pageX / window.innerWidth * 20
            document.querySelector(".mood_background_images_1").style.left = (this.mood_background_images_1_x + x).toString() + 'px'
            document.querySelector(".mood_background_images_2").style.left = (this.mood_background_images_2_x + x).toString() + 'px'
            document.querySelector(".mood_background_images_3").style.left = (this.mood_background_images_3_x + x).toString() + 'px'
            document.querySelector(".mood_background_images_4").style.left = (this.mood_background_images_4_x + x).toString() + 'px'
            document.querySelector(".mood_background_images_5").style.left = (this.mood_background_images_5_x + x).toString() + 'px'
            document.querySelector(".mood_background_images_6").style.left = (this.mood_background_images_6_x + x).toString() + 'px'
            }
            
        },
       
    },
    computed:{
        langComp(){
            return this.$store.state.lang
        },
    },
    mounted() {
        document.addEventListener('mousemove', this.onMouseUpdate)
        this.mood_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".mood_background_images_1")).left).substring(0, (window.getComputedStyle(document.querySelector(".mood_background_images_1")).left).length - 2))
        this.mood_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".mood_background_images_2")).left).substring(0, (window.getComputedStyle(document.querySelector(".mood_background_images_2")).left).length - 2))
        this.mood_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".mood_background_images_3")).left).substring(0, (window.getComputedStyle(document.querySelector(".mood_background_images_3")).left).length - 2))
        this.mood_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".mood_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".mood_background_images_4")).left).length - 2))
        this.mood_background_images_5_x = Number.parseInt((window.getComputedStyle(document.querySelector(".mood_background_images_5")).left).substring(0, (window.getComputedStyle(document.querySelector(".mood_background_images_5")).left).length - 2))
        this.mood_background_images_6_x = Number.parseInt((window.getComputedStyle(document.querySelector(".mood_background_images_6")).left).substring(0, (window.getComputedStyle(document.querySelector(".mood_background_images_6")).left).length - 2))
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
        
    },
}

</script>


<style lang="sass">
@media screen and (min-width: 456px)
    .page_grey_lines_11
        img
            position: absolute
            height: 1447px
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
    .mood
        background-color: white
        width: 100%
        position: relative
        left: calc((100vw - 1200px) / -2)
        padding: 0 calc((100vw - 1200px) / 2)
        top: -00px
        height: 760px
        z-index: 1
        .mood_nav
            display: inline-block
            width: 40%
            vertical-align: middle
            margin-top: 240px
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


            h2
                font-size: 20px
                color: #370954
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                  
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
                
  
        .mood_image
            height: 500px
            display: inline-block
            width: 55%
            vertical-align: top
            position: relative
            top: 115px
            z-image: 100
            user-select: none
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 100
                opacity: 1
                left: -35px
        .mood_image_phone
            display: none
        .mood_background_images
            position: absolute
            height: 0px
            user-select: none
            img
                transition: none
                position: relative
            .mood_background_images_1
                top: -475px
                left: 60px
            .mood_background_images_2
                left: -125px
                z-index: 3
                top: -240px
            .mood_background_images_3
                top: -550px
                left: -105px
            .mood_background_images_4
                left: -180px
                top: -130px
            .mood_background_images_5
                top: -55px
                left: 310px
            .mood_background_images_6
                display: none
            



@media screen and (max-width: 456px) 
    .page_grey_lines_11
        display: block
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
    .mood
        background-color: white
        width: 100%
        position: relative
        height: 190vw
        z-index: 1
        .mood_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 70px
            h1
                width: 95%
                font-size: 6.57vw
                line-height: 9.21vw
                font-weight: 700
                color: #370954
                padding-bottom: 0px
                margin-bottom: 15px

           
            
            img
                display: inline-block
                margin-right: 10px
                vertical-align: top
                padding-top: 30px
                margin-left: 0px


            h2
                margin-top: 0px
                font-size: 4.38vw
                color: #370954
                font-weight: 500
                margin: 0
                margin-bottom: 30px
                display: inline-block
                width: 100%
            strong
                display: block
                margin-left: 25px
                font-size: 16px
                font-weight: 400
                color: #999
                  
            p
                font-weight: 400
                font-size: 18px
                color: #222
                display: inline-block
                font-weight: regular
                width: 90%
                margin: 0
                margin-right: 0px
                margin-top: 27px
                padding-bottom: 2px
                transition: 0.3s all ease
            button
                border-radius: 31px
                margin-top: 0px
                font-size: 4vw
                color: white
                font-weight: 400
                border: 0px
                background-color: #c34688
                height: 62px
                width: 95%
                outline: none
                cursor: pointer

        .mood_image
            height: 600px
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
        .mood_image_phone
            display: block
            width: 100%
            height: 400px
            position: relative
            top: 100px
            z-index: 110
            img
                width: 100vw
                padding-left: 0
                z-index: 110
                position: absolute
        .mood_background_images
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .mood_background_images_1
                top: -475px
                left: 60px
            .mood_background_images_2
                left: -125px
                z-index: 3
                top: -240px
            .mood_background_images_3
                top: -550px
                left: -105px
            .mood_background_images_4
                left: -180px
                top: -130px
            .mood_background_images_5
                top: -55px
                left: 310px
            .mood_background_images_6
                display: block
                left: 70vw
                top: 30px


            
</style>