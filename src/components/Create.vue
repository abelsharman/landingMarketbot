<template>
    <div class="create">
        <div class="create_image">
            <img src="../assets/img-5.png" alt="img">
        </div>

        <div class="create_nav">
            <h1>Создавайте сценарии и автоворонки для чат-бота</h1>
            <h2>через простой и удобный редактор сценария</h2>
            
            <img src="../assets/ulli.png" alt="ulli"><p>Отправка отложенных сообщений</p>
            <strong>Например, когда нужно напомнить о себе</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>Создание меню с кнопками</p>
            <strong>Клиенту удобнее нажать на кнопку, чем ответить</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>Автоуведомления</p>
            <strong>Например, если заказ прибыл в пункт назначения</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>Сбор данных</p>
            <strong>Если нужно спросить клиента о чем-то конкретном</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>Подключение оператора</p>
            <strong>Когда чат-бот не может дать ответ, человек всегда придет на помощь</strong>

            <img src="../assets/ulli.png" alt="ulli"><p>Прием платежей</p>
            <strong>Намного удобнее взять оплату прямо в мессенджере</strong>


        </div>


        <div class="create_image_phone">
            <img src="../assets/img-5 mobile.png" alt="img">
        </div>

       
    </div>
</template>


<script>
export default {
    name: 'Create'
}
</script>


<style lang="sass">
@media screen and (min-width: 456px)
    .create
        background-color: white
        width: 100%
        position: relative
        left: calc((100vw - 1200px) / -2)
        padding: 0 calc((100vw - 1200px) / 2)
        top: -00px
        height: 900px
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
            img 
                transition: 0.5s all ease
                position: absolute
                width: 100%
                z-index: 2
                opacity: 1
        .create_image_phone
            display: none
        .create_background_images
            position: absolute
            height: 0px
            img
                position: relative
            .create_background_images_1
                top: -60px
                left: 500px
                z-index: 2
            .create_background_images_2
                left: 730px
                top: -830px
                z-index: 2
            .create_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .create_background_images_4
                left: 630px
                top: -270px
            .create_background_images_5
                top: -515px
                left: -210px
            .create_background_images_6
                top: -465px
                left: 0px
                z-index: 1
            .create_background_images_7
                left: 40px
                top: -200px
            .create_background_images_8
                left: 250px
                top: -800px
            .create_background_images_9
                left: 00px
                top: -1010px
            .create_background_images_10
                left: 100px
                top: -540px
            .create_background_images_11
                left: -390px
                top: -1000px
            .create_background_images_12
                display: none
            



@media screen and (max-width: 456px)   
     .create
        background-color: white
        width: 100%
        position: relative
        top: 00px
        height: 900px
        z-index: 1
        .create_nav
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            position: relative
            top: 100px
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
            position: relative
            top: 130px
            z-index: 2
            img
                width: 100%
        .create_background_images
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .create_background_images_1
                position: absolute
                display: block
                top: -720px
                right: 10vw
                z-index: 2
            .create_background_images_2
                position: absolute
                display: block
                right: 15vw
                top: -1520px
                z-index: 2
            .create_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .create_background_images_4
                left: 630px
                top: -270px
            .create_background_images_5
                display: block
                top: -15px
                left: 34vw
            .create_background_images_6
                display: block
                top: -155px
                left: 36vw
                z-index: 1
            .create_background_images_7
                left: 40px
                top: -200px
            .create_background_images_8
                left: 250px
                top: -800px
            .create_background_images_9
                left: 00px
                top: -1010px
            .create_background_images_10
                left: 100px
                top: -540px
            .create_background_images_11
                display: block
                left: 82vw
                top: -1100px
            .create_background_images_12
                display: block
                position: absolute
                right: 0
                top: -1070px
            
</style>