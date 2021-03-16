<template>
    <div class="execute">
        <div class="execute_nav">
            <h1>Запускайте умные рассылки по своей аудитории</h1>
            <h2>с настройкой поведенческих факторов</h2>
            <p>Например: отправить сообщение с приглашением на ужин всем, кто посетил ваш ресторан более 30 дней назад</p>
        </div>

        <div class="execute_image">
            <img src="../assets/img-6.png" alt="img">
        </div>


        <div class="execute_image_phone">
            <img src="../assets/img-6 mobile.png" alt="img">
        </div>


        <div class="execute_background_images">
            <img class="execute_background_images_1" src="../assets/back/telegram_back.png" alt="telegram_back">
            <img class="execute_background_images_2" src="../assets/back/viber_back_2.png" alt="viber_back">
            <img class="execute_background_images_3" src="../assets/back/whatsapp_back.png" alt="whatsapp_back">
            <img class="execute_background_images_4" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="execute_background_images_5" src="../assets/back/greymy.png" alt="greymy">
            <img class="execute_background_images_6" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="execute_background_images_7" src="../assets/back/purpleby.png" alt="purpleby">
            <img class="execute_background_images_8" src="../assets/back/bluemn.png" alt="bluemn">
            <img class="execute_background_images_9" src="../assets/back/greysn.png" alt="greysn">
        </div>


        
    </div>
</template>



<script>
export default {
    name: 'Execute'
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
                color: #370954
                padding-bottom: 0px
                margin: 0

            h2
                font-size: 20px
                color: #370954
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-top: 27px
                  
            p
                font-weight: 400
                font-size: 16px
                color: #999
                
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
            position: absolute
            height: 0px
            img
                position: relative
            .execute_background_images_1
                top: -70px
                left: 1030px
                z-index: 2
            .execute_background_images_2
                left: 0px
                top: -330px
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
        margin-top: 0px
        .execute_nav
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
                margin: 0

           
        


            h2
                font-size: 20px
                color: #370954
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-top: 10px
                  
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
            top: 100px
            height: 750px
            z-index: 2
            img
                width: 100%
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
                top: -1050px
            .execute_background_images_3
                display: block
                position: absolute
                top: -1120px
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
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                margin: 0

           
        


            h2
                font-size: 20px
                color: #370954
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-top: 10px
                  
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
            top: 100px
            height: 670px
            z-index: 2
            img
                width: 100%
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
                top: -1050px
            .execute_background_images_3
                display: block
                position: absolute
                top: -1120px
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
    
@media screen and (max-width: 320px)   
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
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                margin: 0

           
        


            h2
                font-size: 20px
                color: #370954
                font-weight: 500
                display: inline-block
                width: 100%
                margin: 0
                margin-top: 10px
                  
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
            top: 100px
            height: 600px
            z-index: 2
            img
                width: 100%
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
                top: -1050px
            .execute_background_images_3
                display: block
                position: absolute
                top: -1120px
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