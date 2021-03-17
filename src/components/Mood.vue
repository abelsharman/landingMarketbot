<template>
    <div class="mood">
        <div class="mood_image">
            <img src="../assets/img-7.png" alt="img">
        </div>

        <div class="mood_nav">
            <h1>Настраивайте и подключайте новые каналы взаимодействия с вашими клиентами</h1>
            <h2>вместе с Marketbot</h2>
            <button>Получить доступ на 30 дней</button>
        </div>


        <div class="mood_image_phone">
            <img src="../assets/img-7 mobile.png" alt="img">
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

<script>
export default {
    name: 'Mood'
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
            img
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
            height: 1800px
            width: 1px
            top: 0px
            z-index: 99
            display: none
        .page_grey_line_1
            margin: 0
            display: block
            width: 1px
            left: 23.5%
        .page_grey_line_2
            margin: 0
            display: block
            width: 1px
            left: 76.5%
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
        height: 830px
        z-index: 1
        .mood_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 70px
            h1
                font-size: 30px
                width: 95%
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
                margin-left: 0px


            h2
                margin-top: 0px
                font-size: 20px
                color: #370954
                font-weight: 500
                margin: 0
                margin-bottom: 40px
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
                font-size: 18px
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
            top: 130px
            z-index: 100
            img
                width: 100%
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
                top: 90px


@media screen and (max-width: 375px)   
     .mood
        background-color: white
        width: 100%
        position: relative
        top: 00px
        z-index: 1
        .mood_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 70px
            h1
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 0px
                margin-bottom: 15px

        


            h2
                margin-top: 0px
                font-size: 20px
                color: #370954
                font-weight: 500
                margin: 0
                margin-bottom: 40px
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
                font-size: 18px
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
            height: 360px
            position: relative
            top: 130px
            z-index: 2
         
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
                top: 90px

@media screen and (max-width: 320px)   
     .mood
        background-color: white
        width: 100%
        position: relative
        top: 00px
        z-index: 1
        .mood_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 70px
            h1
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 0px
                margin-bottom: 15px

        


            h2
                margin-top: 0px
                font-size: 20px
                color: #370954
                font-weight: 500
                margin: 0
                margin-bottom: 40px
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
                font-size: 18px
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
            height: 320px
            position: relative
            top: 130px
            z-index: 2
         
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
                top: 90px


            
</style>