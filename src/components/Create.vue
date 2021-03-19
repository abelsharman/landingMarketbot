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

        <div class="create_background_images">
            <img class="create_background_images_1" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="create_background_images_2" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="create_background_images_3" src="../assets/back/lightpurpleby.png" alt="lightpurpleby">
            <img class="create_background_images_4" src="../assets/back/yellowbyfull.png" alt="yellowby">
            <img class="create_background_images_5" src="../assets/back/greenmn.png" alt="greenmn">
            <img class="create_background_images_6" src="../assets/back/greenmnhalf.png" alt="greenmn">
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


<script>
export default {
    name: 'Create'
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
            img
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
        display: block
        img
            position: absolute
            height: 100%
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
            height: calc(200vw)
            position: relative
            top: 130px
            z-index: 100
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
                display: block
                top: -85px
                left: 70vw
            .create_background_images_2
                display: block
                left: 90vw
                top: -950px
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
                top: -850px

@media screen and (max-width: 360px) 
    .page_grey_lines_12
        display: block
        img
            position: absolute
            height: 100%
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
    .create
        background-color: white
        width: 100%
        position: relative
        top: 0px
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
            height: calc(200vw)
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
                display: block
                top: -85px
                left: 70vw
            .create_background_images_2
                display: block
                left: 90vw
                top: -950px
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
                top: -850px
            
            
</style>