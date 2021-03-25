<template>
    <div class="platform">
       <div class="platform_text">
            <h1>Платформа для обмена сообщениями с клиентами</h1>
            <h3>через мессенджеры и социальные сети</h3>
            <h2>+ <span>Конструктор чат-ботов</span></h2>
            <p>К нам приходят, чтобы настроить общение с клиентами в мессенджерах. Разговаривайте с клиентами через WhatsApp, Telegram, Viber, Вконтакте.</p>
            <button>Получить доступ на 30 дней</button>
       </div>


       <div class="platform_image">
           <img src="../assets/img-1.png" loading="lazy" alt="img-1" >
       </div>


       <div class="platform_image_phone">
           <img src="../assets/img-1 mobile.png" loading="lazy" alt="img-1">
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
    </div>
</template>


<script>
export default {
    name: 'Platform'
}
</script>



<style lang="sass">
$h_color: #370954
$p_color: #370954

@media screen and (min-width: 456px)
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
                left: -240px
                top: -820px
            .platform_background_images_10
                display: none
            .platform_background_images_11
                display: none





@media screen and (max-width: 456px)
    .platform 
        width: 100%
        .platform_text
            padding-left: 7%
            padding-top: 50px
            width: 90%
            display: block
            h1
                width: 90%
                color: $h_color
                line-height: 47px
                font-size: 10.08vw
                font-weight: 700
                margin: 0
            h3
                color: $h_color
                font-size: 5.7vw
                line-height: 35px
                font-weight: 700
                margin: 0
                margin-top: 10px
            h2
                color: #c34688
                font-size: 5.7vw
                font-weight: 700
                margin: 0
                line-height: 35px
                width: max-content 
                span
                    padding-bottom: 3px
                    border-bottom: 1px dotted #c34688
            p
                font-size: 3.94vw
                margin: 0
                margin-top: 30px
                line-height: 26px
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
                padding-left: 7%
                width: 86%

                



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



@media screen and (max-width: 320px)
    .platform 
        width: 100%
        .platform_text
            padding-left: 7%
            padding-top: 30px
            width: 90%
            display: block
            h1
                width: 90%
                color: $h_color
                line-height: 54px
                font-size: 40px
                font-weight: 700
                margin: 0
            h3
                color: $h_color
                font-size: 20px
                line-height: 38px
                font-weight: 700
                margin: 0
                margin-top: 10px
            h2
                color: #c34688
                font-size: 20px
                font-weight: 700
                margin: 0
                line-height: 38px
                width: max-content 
                span
                    padding-bottom: 3px
                    border-bottom: 1px dotted #c34688
            p
                font-size: 15px
                margin: 0
                margin-top: 30px
                line-height: 30px
                color: #222222
                font-size: 400
            button
                border-radius: 31px
                margin-top: 15px
                font-size: 16px
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
                width: 100%

                



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