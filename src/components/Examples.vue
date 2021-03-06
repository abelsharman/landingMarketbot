<template>
    <div class="examples">
        <div class="examples_nav">
            <h1>Примеры внедрения мессенджеров в бизнес</h1>
            <p @click="clickOnImage" v-bind:class="{ clicked : first }">Виджеты обратной связи</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : second }">QR-коды</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : third }">Формы для регистраций</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : fourth }">Автоуведомления из CRM</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : fifth }">Прямые ссылки на мессенджер</p>
        </div>

        <div class="examples_nav_phone">
            <h1>Примеры внедрения мессенджеров в бизнес</h1>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : firstPhone }">Виджеты обратной связи</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : secondPhone }">QR-коды</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : thirdPhone }">Формы для регистраций</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : fourthPhone }">Автоуведомления из CRM</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : fifthPhone }">Прямые ссылки на мессенджер</p>
        </div>


        <div class="examples_image">
            <img src="../assets/img-2.png" alt="img" ref="image">
        </div>

        <div class="examples_image_phone">
            <img src="../assets/img-2 mobile.png" alt="img" ref="image_phone">
        </div>

        <div class="examples_background_images">
            <img class="examples_background_images_1" src="../assets/back/whatsapp_back_2.png" alt="whatsapp_back_2">
            <img class="examples_background_images_2" src="../assets/back/viber_back_2.png" alt="viber_back_2">

            <img class="examples_background_images_3" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="examples_background_images_4" src="../assets/back/greymy.png" alt="greymy">
            <img class="examples_background_images_5" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="examples_background_images_6" src="../assets/back/purpleby.png" alt="purpleby">
            <img class="examples_background_images_7" src="../assets/back/bluemn.png" alt="bluemn">
        </div>

        
        
    </div>
</template>


<script>
export default {
    name: 'Examples',
    data(){
        return{
            first: true,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            firstPhone: true,
            secondPhone: false,
            thirdPhone: false,
            fourthPhone: false,
            fifthPhone: false,
            i: 1,
        }
    },
    methods:{
        clickOnImage(event){
            if(event.target.innerHTML == 'Виджеты обратной связи'){
                this.i = 1
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('../assets/img-2.png');this.$refs.image.style.opacity = 1}, 300)
                this.first = true,this.second = false, this.third = false, this.fourth = false, this.fifth = false
            }
            else if (event.target.innerHTML == 'QR-коды'){
                this.i = 2
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('../assets/img-2-2.png');this.$refs.image.style.opacity = 1}, 300)
                this.second = true,this.first = false, this.third = false, this.fourth = false, this.fifth = false
            }
            else if (event.target.innerHTML == 'Формы для регистраций'){  
                this.i = 3
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('../assets/img-2-3.png');this.$refs.image.style.opacity = 1}, 300)
                this.third = true,this.first = false, this.second = false, this.fourth = false, this.fifth = false
            }     
            else if (event.target.innerHTML == 'Автоуведомления из CRM'){
                this.i = 4
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('../assets/img-2-4.png');this.$refs.image.style.opacity = 1}, 300)
                this.fourth = true,this.first = false, this.second = false, this.third = false, this.fifth = false
            }
            else if (event.target.innerHTML == 'Прямые ссылки на мессенджер'){
                this.i = 0
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('../assets/img-2-5.png');this.$refs.image.style.opacity = 1}, 300)
                this.fifth = true,this.first = false, this.second = false, this.third = false, this.fourth = false
            }
        },
        clickOnImagePhone(event){
            if(event.target.innerHTML == 'Виджеты обратной связи'){
                this.i = 1
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('../assets/img-2 mobile.png');this.$refs.image_phone.style.opacity = 1}, 300)
                this.firstPhone = true,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false
            }
            else if (event.target.innerHTML == 'QR-коды'){
                this.i = 2
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('../assets/img-2-2 mobile.png');this.$refs.image_phone.style.opacity = 1}, 300)
                this.secondPhone = true,this.firstPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false
            }
            else if (event.target.innerHTML == 'Формы для регистраций'){  
                this.i = 3
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('../assets/img-2-3 mobile.png');this.$refs.image_phone.style.opacity = 1}, 300)
                this.thirdPhone = true,this.firstPhone = false, this.secondPhone = false, this.fourthPhone = false, this.fifthPhone = false
            }     
            else if (event.target.innerHTML == 'Автоуведомления из CRM'){
                this.i = 4
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('../assets/img-2-4 mobile.png');this.$refs.image_phone.style.opacity = 1}, 300)
                this.fourthPhone = true,this.firstPhone = false, this.secondPhone = false, this.thirdPhone = false, this.fifthPhone = false
            }
            else if (event.target.innerHTML == 'Прямые ссылки на мессенджер'){
                this.i = 0
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('../assets/img-2-5 mobile.png');this.$refs.image_phone.style.opacity = 1}, 300)
                this.fifthPhone = true,this.firstPhone = false, this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false
            }
        },
        intervalMethod(){
            if(window.innerWidth > 456){
            if(this.i == 0){
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('@/assets/img-2.png');this.$refs.image.style.opacity = 1}, 500)
                this.first = true,this.second = false, this.third = false, this.fourth = false, this.fifth = false
            }
            else if(this.i == 1){
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('@/assets/img-2-2.png');this.$refs.image.style.opacity = 1}, 500)
                this.first = false,this.second = true, this.third = false, this.fourth = false, this.fifth = false
            }
            else if(this.i == 2){
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('@/assets/img-2-3.png');this.$refs.image.style.opacity = 1}, 500)
                this.first = false,this.second = false, this.third = true, this.fourth = false, this.fifth = false
            }
            else if(this.i == 3){
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('@/assets/img-2-4.png');this.$refs.image.style.opacity = 1}, 500)
                this.first = false,this.second = false, this.third = false, this.fourth = true, this.fifth = false
            }
            else if(this.i == 4){
                this.$refs.image.style.opacity = 0
                setTimeout(()=> {this.$refs.image.src = require('@/assets/img-2-5.png');this.$refs.image.style.opacity = 1}, 500)
                this.first = false,this.second = false, this.third = false, this.fourth = false, this.fifth = true
            }
            this.i++
            if(this.i == 5){
                this.i = 0
            }
            }





            else{
               if(this.i == 0){
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('@/assets/img-2 mobile.png');this.$refs.image_phone.style.opacity = 1}, 500)
                this.firstPhone = true,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false
            }
            else if(this.i == 1){
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('@/assets/img-2-2 mobile.png');this.$refs.image_phone.style.opacity = 1}, 500)
                this.firstPhone = false,this.secondPhone = true, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false
            }
            else if(this.i == 2){
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('@/assets/img-2-3 mobile.png');this.$refs.image_phone.style.opacity = 1}, 500)
                this.firstPhone = false,this.secondPhone = false, this.thirdPhone = true, this.fourthPhone = false, this.fifthPhone = false
            }
            else if(this.i == 3){
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('@/assets/img-2-4 mobile.png');this.$refs.image_phone.style.opacity = 1}, 500)
                this.firstPhone = false,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = true, this.fifthPhone = false
            }
            else if(this.i == 4){
                this.$refs.image_phone.style.opacity = 0
                setTimeout(()=> {this.$refs.image_phone.src = require('@/assets/img-2-5 mobile.png');this.$refs.image_phone.style.opacity = 1}, 500)
                this.firstPhone = false,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = true
            }
            this.i++
            if(this.i == 5){
                this.i = 0
            } 
            }
        }
    },
    mounted(){
        setInterval(this.intervalMethod, 3000)
    }

}
</script>


<style lang="sass">
@media screen and (min-width: 456px)
    .examples
        width: 100%
        .examples_nav
            display: inline-block
            width: 47.3%
            vertical-align: top
            h1
                font-size: 30px
                width: 80%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 20px
            p
                font-weight: 400
                font-size: 20px
                color: #c2c2c2
                display: inline-block
                width: max-content
                margin: 0
                margin-right: 40px
                margin-top: 27px
                cursor: pointer
                padding-bottom: 2px
                transition: 0.3s all ease
            .clicked
                color: #c34688
                border-bottom: 1px dotted #c34688
        .examples_nav_phone
            display: none
        .examples_image
            height: 560px
            display: inline-block
            width: 52%
            vertical-align: top
            position: relative
            top: -95px
            img 
                transition: 0.5s all ease
                position: relative
                z-index: 2
        .examples_image_phone
            display: none
        .examples_background_images
            img
                position: relative
            .examples_background_images_1
                top: 0px
                left: 950px
            .examples_background_images_2
                left: -120px
                top: -200px
            .examples_background_images_3
                top: -400px
                left: 154px
            .examples_background_images_4
                top: -270px
                z-index: 1 
                left: 220px
            .examples_background_images_5
                position: absolute
                top: 215vh
                left: 87vw
            .examples_background_images_6
                top: -695px
                left: 115px
                z-index: 1
            .examples_background_images_7
                position: absolute
                right: 6vw
                top: 159vh
@media screen and (min-width: 1920px)
    .examples
        width: 100%
        .examples_nav
            display: inline-block
            width: 47.3%
            vertical-align: top
            h1
                font-size: 30px
                width: 80%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 20px
            p
                font-weight: 400
                font-size: 20px
                color: #c2c2c2
                display: inline-block
                width: max-content
                margin: 0
                margin-right: 40px
                margin-top: 27px
                cursor: pointer
                padding-bottom: 2px
                transition: 0.3s all ease
            .clicked
                color: #c34688
                border-bottom: 1px dotted #c34688
        
        .examples_image
            height: 560px
            display: inline-block
            width: 52%
            vertical-align: top
            position: relative
            top: -95px
            img 
                transition: 0.5s all ease
                position: relative
                z-index: 2
        .examples_background_images
            img
                position: relative
            .examples_background_images_1
                top: 0px
                left: 950px
            .examples_background_images_2
                left: -120px
                top: -200px
            .examples_background_images_3
                top: -400px
                left: 154px
            .examples_background_images_4
                top: -270px
                z-index: 1 
                left: 220px
            .examples_background_images_5
                position: absolute
                top: 160vh
                left: 87vw
            .examples_background_images_6
                top: -695px
                left: 115px
                z-index: 1
            .examples_background_images_7
                position: absolute
                right: 17vw
                top: 116vh
@media screen and (max-width: 456px)
    .examples
        width: 100%
        .examples_nav_phone
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            h1
                font-size: 30px
                width: 100%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 20px
            p
                font-weight: 400
                font-size: 20px
                color: #c2c2c2
                display: inline-block
                width: max-content
                margin: 0
                margin-right: 40px
                margin-top: 10px
                cursor: pointer
                padding-bottom: 2px
                transition: 0.3s all ease
            .clicked
                color: #c34688
                border-bottom: 1px dotted #c34688
        .examples_nav
            display: none
        .examples_image_phone
            display: block
            width: 100%
            vertical-align: top
            position: relative
            top: 15px
            height: 500px
            img 
                transition: 0.5s all ease
                position: relative
                width: 100%
                z-index: 2
        .examples_image
            display: none
        .examples_background_images
            img
                position: relative
                display: none
            .examples_background_images_1
                display: none
                top: -113vh
                left: 75vw
            .examples_background_images_2
                display: block  
                left: -10px
                top: -20vh
            .examples_background_images_3
                top: -400px
                left: 154px
            .examples_background_images_4
                top: -270px
                z-index: 1 
                left: 220px
            .examples_background_images_5
                position: absolute
                top: 160vh
                left: 87vw
            .examples_background_images_6
                top: -695px
                left: 115px
                z-index: 1
            .examples_background_images_7
                position: absolute
                right: 17vw
                top: 116vh
</style>