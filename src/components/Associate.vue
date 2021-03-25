<template>
    <div class="associate">
        <div class="associate_nav">
            <h1>Общайтесь с клиентами в одном месте через удобный чат-центр</h1>
            <img src="../assets/ulli.png" alt="ulli"><p>Отправляйте файлы и каталоги</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>Создавайте шаблоны для быстрых ответов</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>Обменивайтесь аудиосообщениями</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>Проводите опросы</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>Делитесь ссылками</p><br>
            <img src="../assets/ulli.png" alt="ulli"><p>Поддержка любого количества операторов и возможность общаться с клиентами с одного номера телефона или аккаунта</p>


            <h2>Возможна интеграция с: <img src="../assets/crm-png.png" loading="lazy" alt=""><img src="" alt=""></h2>
        </div>

        <div class="associate_image">
            <img src="../assets/img-4.png" alt="img">
        </div>


        <div class="associate_image_phone">
            <img src="../assets/img-4 mobile.png" alt="img">
        </div>


        <div class="associate_background_images">
            <img class="associate_background_images_1" src="../assets/back/telegram_back.png" alt="telegram_back">
            <img class="associate_background_images_2" src="../assets/back/vk_back.png" alt="vk_back">
            <img class="associate_background_images_3" src="../assets/back/whatsapp_back_2.png" alt="whatsapp_back_2">
            <img class="associate_background_images_4" src="../assets/back/viber_back.png" alt="yellowby">
            <img class="associate_background_images_5" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="associate_background_images_6" src="../assets/back/greymy.png" alt="greenby">
            <img class="associate_background_images_7" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="associate_background_images_8" src="../assets/back/greenby.png" alt="greenby">
            <img class="associate_background_images_9" src="../assets/back/purpleby.png" alt="purpleby">
            <img class="associate_background_images_10" src="../assets/back/bluemn.png" alt="bluemn">
            <img class="associate_background_images_11" src="../assets/back/greysn.png" alt="greysn">
            <img class="associate_background_images_12" src="../assets/back/purplebyhalf.png" alt="greysn">
        </div>


    </div>
</template>

<script>
export default {
    name: 'Associate'
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
            h1
                font-size: 30px
                width: 100%
                line-height: 42px
                font-weight: 700
                color: #370954
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
                color: #370954
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
                color: #222
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
                position: relative
            .associate_background_images_1
                top: -60px
                left: 500px
                z-index: 2
            .associate_background_images_2
                left: 730px
                top: -830px
                z-index: 2
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
                left: 100px
                top: -540px
            .associate_background_images_11
                left: -390px
                top: -1000px
            .associate_background_images_12
                display: none
            



@media screen and (max-width: 456px)   
     .associate
        position: relative
        z-index: 1000
        background-color: #f9f9f9
        top: 0
        .associate_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: -150px
            background-color: #f9f9f9
            padding-top: 40px
            h1
                font-size: 30px
                width: 95%
                line-height: 38px
                font-weight: 700
                color: #370954
                padding-bottom: 0px

           
            
            img
                display: inline-block
                margin-right: 10px
                vertical-align: top
                padding-top: 22px
                margin-left: 0px


            h2
                margin-top: 40px
                font-size: 20px
                color: #370954
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
                font-size: 18px
                color: #222
                display: inline-block
                font-weight: regular
                width: 90%
                margin: 0
                margin-right: 0px
                margin-top: 18px
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
            top: -120px
            z-index: 2
            height: 134vw
            background-color: #f9f9f9
            img
                width: 100%
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
                top: -720px
                right: 0vw
                width: 30vw
                z-index: 2
            .associate_background_images_2
                position: absolute
                display: block
                right: 15vw
                top: -1480px
                z-index: 2
            .associate_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .associate_background_images_4
                left: 630px
                top: -270px
            .associate_background_images_5
                display: block
                top: -15px
                left: 34vw
            .associate_background_images_6
                display: block
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
                left: 82vw
                top: -1100px
            .associate_background_images_12
                display: block
                position: absolute
                right: 0
                top: -970px
                width: 10vw



@media screen and (max-width: 370px)   
     .associate
        .associate_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 00px
            background-color: #f9f9f9
            padding-top: 30px
            margin-top: 180px
            h1
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 0px

           
            
            img
                display: inline-block
                margin-right: 10px
                vertical-align: top
                padding-top: 30px
                margin-left: 0px


            h2
                margin-top: 40px
                font-size: 20px
                color: #370954
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
        .associate_image
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
        .associate_image_phone
            display: block
            width: 100%
            position: relative
            top: -20px
            z-index: 2
            height: 150vw
            background-color: #f9f9f9

            
        
            img
                z-index: 5
                position: relative
                width: 100%
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
                top: -720px
                right: 10vw
                z-index: 2
            .associate_background_images_2
                position: absolute
                display: block
                right: 15vw
                top: -1520px
                z-index: 2
            .associate_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .associate_background_images_4
                left: 630px
                top: -270px
            .associate_background_images_5
                display: block
                top: -15px
                left: 34vw
            .associate_background_images_6
                display: block
                top: -155px
                left: 36vw
                z-index: 2
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
                left: 82vw
                top: -1100px
            .associate_background_images_12
                display: block
                position: absolute
                right: 0
                top: -1070px
            
</style>