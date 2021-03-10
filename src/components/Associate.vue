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


            <h2>Возможна интеграция с: <img src="../assets/crm-png.png" alt=""><img src="" alt=""></h2>
        </div>

        <div class="associate_image">
            <img src="../assets/img-4.png" alt="img">
        </div>


        <div class="associate_image_phone">
            <img src="../assets/img-4 mobile.png" alt="img">
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
        .associate_nav
            display: inline-block
            width: 47.3%
            vertical-align: top
            h1
                font-size: 30px
                width: 100%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 20px

           
            
            img
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
            height: 700px
            display: inline-block
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
            display: none
        .associate_background_images
            img
                position: relative
            .associate_background_images_1
                top: 0px
                left: 950px
                z-index: 2
            .associate_background_images_2
                left: -120px
                top: -200px
            .associate_background_images_3
                top: -400px
                left: 154px
            .associate_background_images_4
                top: -270px
                z-index: 1 
                left: 220px
            .associate_background_images_5
                position: absolute
                z-index: 2
                top: 215vh
                left: 87vw
            .associate_background_images_6
                top: -695px
                left: 115px
                z-index: 1
            .associate_background_images_7
                position: absolute
                right: 6vw
                top: 159vh
            .associate_background_images_10
                position: absolute
                left: calc((100vw - 1400px) / 2)
                top: 50vh
            .associate_background_images_11
                position: absolute
                left: calc((100vw - 1250px) / 2)
                top: 15vh
            .associate_background_images_12
                left: 8vw
                top: -660px
            .associate_background_images_13
                left: 19vw
                top: -35px
            .associate_background_images_14
                position: absolute
                left: calc((100vw - 1100px) / 2)
                //top: -108vh
                top: -20px
            .associate_background_images_15
                display: none



@media screen and (max-width: 456px)   
     .associate
        .associate_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: -70px
            h1
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 20px

           
            
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
            img
                width: 100%
        .associate_background_images
            img
                position: relative
            .associate_background_images_1
                top: 0px
                left: 950px
                z-index: 2
            .associate_background_images_2
                left: -120px
                top: -200px
            .associate_background_images_3
                top: -400px
                left: 154px
            .associate_background_images_4
                top: -270px
                z-index: 1 
                left: 220px
            .associate_background_images_5
                position: absolute
                z-index: 2
                top: 215vh
                left: 87vw
            .associate_background_images_6
                top: -695px
                left: 115px
                z-index: 1
            .associate_background_images_7
                position: absolute
                right: 6vw
                top: 159vh
            .associate_background_images_10
                position: absolute
                left: calc((100vw - 1400px) / 2)
                top: 50vh
            .associate_background_images_11
                position: absolute
                left: calc((100vw - 1250px) / 2)
                top: 15vh
            .associate_background_images_12
                left: 8vw
                top: -660px
            .associate_background_images_13
                left: 19vw
                top: -35px
            .associate_background_images_14
                position: absolute
                left: calc((100vw - 1100px) / 2)
                //top: -108vh
                top: -20px
            .associate_background_images_15
                display: none
</style>