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
            width: 38%
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
                top: -60px
                left: 500px
                z-index: 2
            .execute_background_images_2
                left: 730px
                top: -830px
                z-index: 2
            .execute_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .execute_background_images_4
                left: 630px
                top: -270px
            .execute_background_images_5
                top: -515px
                left: -210px
            .execute_background_images_6
                top: -465px
                left: 0px
                z-index: 1
            .execute_background_images_7
                left: 40px
                top: -200px
            .execute_background_images_8
                left: 250px
                top: -800px
            .execute_background_images_9
                left: 00px
                top: -1010px
            .execute_background_images_10
                left: 100px
                top: -540px
            .execute_background_images_11
                left: -390px
                top: -1000px
            .execute_background_images_12
                display: none
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
                position: absolute
                display: block
                top: -720px
                right: 10vw
                z-index: 2
            .execute_background_images_2
                position: absolute
                display: block
                right: 15vw
                top: -1520px
                z-index: 2
            .execute_background_images_3
                top: -980px
                left: -200px
                z-index: 3
            .execute_background_images_4
                left: 630px
                top: -270px
            .execute_background_images_5
                display: block
                top: -15px
                left: 34vw
            .execute_background_images_6
                display: block
                top: -155px
                left: 36vw
                z-index: 1
            .execute_background_images_7
                left: 40px
                top: -200px
            .execute_background_images_8
                left: 250px
                top: -800px
            .execute_background_images_9
                left: 00px
                top: -1010px
            .execute_background_images_10
                left: 100px
                top: -540px
            .execute_background_images_11
                display: block
                left: 82vw
                top: -1100px
            .execute_background_images_12
                display: block
                position: absolute
                right: 0
                top: -1070px
</style>