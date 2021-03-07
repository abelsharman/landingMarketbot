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
            <img src="../assets/img-2.png" alt="img" id="1" ref="i1">
            <img src="../assets/img-2-2.png" alt="img" id="2" ref="i2">
            <img src="../assets/img-2-3.png" alt="img" id="3" ref="i3">
            <img src="../assets/img-2-4.png" alt="img" id="4" ref="i4">
            <img src="../assets/img-2-5.png" alt="img" id="5" ref="i5">
        </div>

        <div class="examples_image_phone">
            <img src="../assets/img-2 mobile.png" alt="img" id="6">
            <img src="../assets/img-2-2 mobile.png" alt="img" id="7">
            <img src="../assets/img-2-3 mobile.png" alt="img" id="8">
            <img src="../assets/img-2-4 mobile.png" alt="img" id="9">
            <img src="../assets/img-2-5 mobile.png" alt="img" id="10">
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



        <div class="examples opportunities">
        <div class="examples_image opportunities_image">
            <img src="../assets/img-3.png" alt="img" id="12">
            <img src="../assets/img-3-2.png" alt="img" id="13">
            <img src="../assets/img-3-3.png" alt="img" id="14">
            <img src="../assets/img-3-4.png" alt="img" id="15">
            <img src="../assets/img-3-5.png" alt="img" id="16">
            <img src="../assets/img-3-6.png" alt="img" id="17">
            <img src="../assets/img-3-7.png" alt="img" id="18">
            <img src="../assets/img-3-8.png" alt="img" id="19">
            <img src="../assets/img-3-9.png" alt="img" id="20">
            <img src="../assets/img-3-10.png" alt="img" id="21">
            <img src="../assets/img-3-11.png" alt="img" id="22">
            <img src="../assets/img-3-12.png" alt="img" id="23">
            <img src="../assets/img-3-13.png" alt="img" id="24">
            <img src="../assets/img-3-14.png" alt="img" id="25">
            <img src="../assets/img-3-15.png" alt="img" id="26">
        </div>

        <div class="examples_image_phone opportunities_image_phone">
            <img src="../assets/img-3 mobile.png" alt="img" id="12">
            <img src="../assets/img-3-2 mobile.png" alt="img" id="13">
            <img src="../assets/img-3-3 mobile.png" alt="img" id="14">
            <img src="../assets/img-3-4 mobile.png" alt="img" id="15">
            <img src="../assets/img-3-5.png" alt="img" id="16">
            <img src="../assets/img-3-6 mobile.png" alt="img" id="17">
            <img src="../assets/img-3-7 mobile.png" alt="img" id="18">
            <img src="../assets/img-3-8 mobile.png" alt="img" id="19">
            <img src="../assets/img-3-9 mobile.png" alt="img" id="20">
            <img src="../assets/img-3-10 mobile.png" alt="img" id="21">
            <img src="../assets/img-3-11.png" alt="img" id="22">
            <img src="../assets/img-3-12.png" alt="img" id="23">
            <img src="../assets/img-3-13.png" alt="img" id="24">
            <img src="../assets/img-3-14.png" alt="img" id="25">
            <img src="../assets/img-3-15.png" alt="img" id="26">
        </div>
        
        <div class="examples_nav opportunities_nav">
            <h1>Какие возможности у мессенджеров при общении с клиентами</h1>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.first1 }">Отправка файлов и каталогов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.second1 }">Регистрация на мероприятия</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.third1 }">Расчет параметров</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fourth1 }">Активация промокодов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fifth1 }">Генерация паролей</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.sixth1 }">Подтверждение бронирования</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.seventh1 }">Сбор отзывов и обратной связи</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.eigthth1 }">Проведение опросов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.nineth1 }">Проведение обучения</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.ten1 }">Прием заказов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.eleven1 }">Прием платежей</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.twelve1 }">Информирование и отправка уведомлений</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.thirteen1 }">Анкетирование</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fourteen1 }">Ответы на частые вопросы</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fifteen1 }">Напоминания о записи</p>

        </div>

        <div class="examples_nav_phone opportunities_nav_phone">
            <h1>Какие возможности у мессенджеров при общении с клиентами</h1>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.first1 }">Отправка файлов и каталогов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.second1 }">Регистрация на мероприятия</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.third1 }">Расчет параметров</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fourth1 }">Активация промокодов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fifth1 }">Генерация паролей</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.sixth1 }">Подтверждение бронирования</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.seventh1 }">Сбор отзывов и обратной связи</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.eigthth1 }">Проведение опросов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.nineth1 }">Проведение обучения</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.ten1 }">Прием заказов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.eleven1 }">Прием платежей</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.twelve1 }">Информирование и отправка уведомлений</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.thirteen1 }">Анкетирование</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fourteen1 }">Ответы на частые вопросы</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP.fifteen1 }">Напоминания о записи</p>
        </div>


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
            coloredP:{
                first12: true,
                second13: false,
                third14: false,
                fourth15: false,
                fifth16: false,
                sixth17: false,
                seventh18: false,
                eigthth19: false,
                nineth20: false,
                ten21: false,
                eleven22: false,
                twelve23: false,
                thirteen24: false,
                fourteen25: false,
                fifteen26: false,
            },

            i: 1,
            p: 12,
            iMobile: 6,

        }
    },
    methods:{
        clickOnImage(event){
            if(event.target.innerHTML == 'Виджеты обратной связи'){
                this.i = 1
                let a = document.querySelectorAll(".examples_image img")
                for (let x of a){
                    if (x.id != this.i){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.first = true,this.second = false, this.third = false, this.fourth = false, this.fifth = false

            }
            else if (event.target.innerHTML == 'QR-коды'){
                this.i = 2
                let a = document.querySelectorAll(".examples_image img")
                for (let x of a){
                    if (x.id != this.i){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.first = false,this.second = true, this.third = false, this.fourth = false, this.fifth = false
            }
            else if (event.target.innerHTML == 'Формы для регистраций'){  
                this.i = 3
                let a = document.querySelectorAll(".examples_image img")
                for (let x of a){
                    if (x.id != this.i){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.first = false,this.second = false, this.third = true, this.fourth = false, this.fifth = false
            }     
            else if (event.target.innerHTML == 'Автоуведомления из CRM'){
                this.i = 4
                let a = document.querySelectorAll(".examples_image img")
                for (let x of a){
                    if (x.id != this.i){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.first = false,this.second = false, this.third = false, this.fourth = true, this.fifth = false
            }
            else if (event.target.innerHTML == 'Прямые ссылки на мессенджер'){
                this.i = 5
                let a = document.querySelectorAll(".examples_image img")
                for (let x of a){
                    if (x.id != this.i){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.first = false,this.second = false, this.third = false, this.fourth = false, this.fifth = true
            }
        },
        clickOnImagePhone(event){
            if(event.target.innerHTML == 'Виджеты обратной связи'){
                this.iMobile = 6
                let a = document.querySelectorAll(".examples_image_phone img")
                for (let x of a){
                    if (x.id != this.iMobile){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.firstPhone = true,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false

            }
            else if (event.target.innerHTML == 'QR-коды'){
                this.iMobile = 7
                let a = document.querySelectorAll(".examples_image_phone img")
                for (let x of a){
                    if (x.id != this.iMobile){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.secondPhone = true,this.firstPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false
            }
            else if (event.target.innerHTML == 'Формы для регистраций'){  
                this.iMobile = 8
                let a = document.querySelectorAll(".examples_image_phone img")
                for (let x of a){
                    if (x.id != this.iMobile){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.thirdPhone = true,this.firstPhone = false, this.secondPhone = false, this.fourthPhone = false, this.fifthPhone = false
            }     
            else if (event.target.innerHTML == 'Автоуведомления из CRM'){
                this.iMobile = 9
                let a = document.querySelectorAll(".examples_image_phone img")
                for (let x of a){
                    if (x.id != this.iMobile){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.fourthPhone = true,this.firstPhone = false, this.secondPhone = false, this.thirdPhone = false, this.fifthPhone = false
            }
            else if (event.target.innerHTML == 'Прямые ссылки на мессенджер'){
                this.iMobile = 10
                let a = document.querySelectorAll(".examples_image_phone img")
                for (let x of a){
                    if (x.id != this.iMobile){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                this.fifthPhone = true,this.firstPhone = false, this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false
            }
        },
        clickOnImageOpport(){
            console.log(1)
        },
        intervalMethod(){
            if(window.innerWidth > 456){
                /*
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
            */
                let a = document.querySelectorAll(".examples_image img")
                if(this.i == 1){
                    this.first = true,this.second = false, this.third = false, this.fourth = false, this.fifth = false
                }
                else if (this.i == 2){
                    this.first = false,this.second = true, this.third = false, this.fourth = false, this.fifth = false
                }
                else if (this.i == 3){
                    this.first = false,this.second = false, this.third = true, this.fourth = false, this.fifth = false
                }
                else if (this.i == 4){
                    this.first = false,this.second = false, this.third = false, this.fourth = true, this.fifth = false
                }
                else if (this.i == 5){
                    this.first = false,this.second = false, this.third = false, this.fourth = false, this.fifth = true
                }

                for(let x of a){
                    if(x.id == this.i){
                        x.style.opacity = 1 
                    }
                    else{
                        x.style.opacity = 0
                    }
                }
                this.i++
                if(this.i == 6){
                    this.i = 1
                }


                let c = document.querySelectorAll(".opportunities_image img")
                if(this.p == 12){
                    for(let item in this.coloredP){
                        console.log(this.p, Number.parseInt(item.substring(item.length - 2, item.length)))
                        if( Number.parseInt(this.p) == Number.parseInt(item.substring(item.length - 2, item.length))) {
                            
                            this.coloredP[item] = true
                        }
                        else{
                            item = false
                        }
                    }
                }
                else if (this.p == 13){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item.substring(item.length - 2, item.length))){
                            item = true
                        }
                        else{
                            item = false
                        }
                    }
                }
                else if (this.p == 14){
                    this.first1 = false,this.second1 = false, this.third1 = true, this.fourth1 = false, this.fifth1 = false
                }
                else if (this.p == 15){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = true, this.fifth1 = false
                }
                else if (this.p == 16){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = false, this.fifth1 = true
                }
                else if (this.p == 17){
                    this.first1 = false,this.second1 = true, this.third1 = false, this.fourth1 = false, this.fifth1 = false
                }
                else if (this.p == 18){
                    this.first1 = false,this.second1 = false, this.third1 = true, this.fourth1 = false, this.fifth1 = false
                }
                else if (this.p == 19){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = true, this.fifth1 = false
                }
                else if (this.p == 20){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = false, this.fifth1 = true
                }
                else if (this.p == 21){
                    this.first1 = false,this.second1 = true, this.third1 = false, this.fourth1 = false, this.fifth1 = false
                }
                else if (this.p == 22){
                    this.first1 = false,this.second1 = false, this.third1 = true, this.fourth1 = false, this.fifth1 = false
                }
                else if (this.p == 23){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = true, this.fifth1 = false
                }
                else if (this.p == 24){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = false, this.fifth1 = true
                }
                else if (this.p == 25){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = true, this.fifth1 = false
                }
                else if (this.p == 26){
                    this.first1 = false,this.second1 = false, this.third1 = false, this.fourth1 = false, this.fifth1 = true
                }

                for(let z of c){
                    if(z.id == this.p){
                        z.style.opacity = 1 
                    }
                    else{
                        z.style.opacity = 0
                    }
                }
                this.p++
                if(this.p == 27){
                    this.p = 12
                }





            }





            else{
                /*
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
            */
                let b = document.querySelectorAll(".examples_image_phone img")
                if(this.iMobile == 6){
                    this.firstPhone = true,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false
                }
                else if (this.iMobile == 7){
                    this.firstPhone = false,this.secondPhone = true, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = false
                }
                else if (this.iMobile == 8){
                    this.firstPhone = false,this.secondPhone = false, this.thirdPhone = true, this.fourthPhone = false, this.fifthPhone = false
                }
                else if (this.iMobile == 9){
                    this.firstPhone = false,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = true, this.fifthPhone = false
                }
                else if (this.iMobile == 10){
                    this.firstPhone = false,this.secondPhone = false, this.thirdPhone = false, this.fourthPhone = false, this.fifthPhone = true
                }

                for(let x of b){
                    if(x.id == this.iMobile){
                        x.style.opacity = 1 
                    }
                    else{
                        x.style.opacity = 0
                    }
                }
                this.iMobile++
                if(this.iMobile == 11){
                    this.iMobile = 6
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
                position: absolute
                z-index: 2
                opacity: 0
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
                position: absolute
                z-index: 2
                opacity: 0
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
                z-index: 3
                position: relative
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
            background-color: lightblue
            img 
                transition: 0.5s all ease
                position: absolute
                opacity: 0
                width: 100%
                
                z-index: 2
        .examples_image
            display: none
        .examples_background_images
            position: relative
            height: 470px
            img
                position: relative
                display: none
            .examples_background_images_1
                position: absolute
                display: block
                top: -57vh
                right: 0
            .examples_background_images_2
                display: block  
                left: 10vw
                top: 58vh
                z-index: 2
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






@media screen and (max-width: 370px)
    .examples
        width: 100%
        .examples_nav_phone
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            h1
                z-index: 3
                position: relative
                font-size: 26px
                width: 100%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 20px
            p
                font-weight: 400
                font-size: 17px
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
            background-color: lightblue
            img 
                transition: 0.5s all ease
                position: absolute
                opacity: 0
                width: 100%
                
                z-index: 2
        .examples_image
            display: none
        .examples_background_images
            position: relative
            height: 470px
            img
                position: relative
                display: none
            .examples_background_images_1
                position: absolute
                display: block
                top: -57vh
                right: 0
            .examples_background_images_2
                display: block  
                left: 10vw
                top: 58vh
                z-index: 2
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




