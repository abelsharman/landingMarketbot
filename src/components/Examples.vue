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

        
        
        <div class="examples_nav opportunities_nav">
            <h1>Какие возможности у мессенджеров при общении с клиентами</h1>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['12'] }">Отправка файлов и каталогов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['13'] }">Регистрация на мероприятия</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['14'] }">Расчет параметров</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['15'] }">Активация промокодов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['16'] }">Генерация паролей</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['17'] }">Подтверждение бронирования</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['18'] }">Сбор отзывов и обратной связи</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['19'] }">Проведение опросов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['20'] }">Проведение обучения</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['21'] }">Прием заказов</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['22'] }">Прием платежей</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['23'] }">Информирование и отправка уведомлений</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['24'] }">Анкетирование</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['25'] }">Ответы на частые вопросы</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['26'] }">Напоминания о записи</p>

        </div>

        <div class="examples_nav_phone opportunities_nav_phone">
            <h1>Какие возможности у мессенджеров при общении с клиентами</h1>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['12'] }">Отправка файлов и каталогов</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['13'] }">Регистрация на мероприятия</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['14'] }">Расчет параметров</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['15'] }">Активация промокодов</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['16'] }">Генерация паролей</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['17'] }">Подтверждение бронирования</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['18'] }">Сбор отзывов и обратной связи</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['19'] }">Проведение опросов</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['20'] }">Проведение обучения</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['21'] }">Прием заказов</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['22'] }">Прием платежей</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['23'] }">Информирование и отправка уведомлений</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['24'] }">Анкетирование</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['25'] }">Ответы на частые вопросы</p>
            <p @click="clickOnImageOpportPhone" v-bind:class="{ clicked : coloredP['26'] }">Напоминания о записи</p>
        </div>

        <div class="examples_image_phone opportunities_image_phone">
            <img src="../assets/img-3 mobile.png" alt="img" id="27">
            <img src="../assets/img-3-2 mobile.png" alt="img" id="28">
            <img src="../assets/img-3-3 mobile.png" alt="img" id="29">
            <img src="../assets/img-3-4 mobile.png" alt="img" id="30">
            <img src="../assets/img-3-5.png" alt="img" id="31">
            <img src="../assets/img-3-6 mobile.png" alt="img" id="32">
            <img src="../assets/img-3-7 mobile.png" alt="img" id="33">
            <img src="../assets/img-3-8 mobile.png" alt="img" id="34">
            <img src="../assets/img-3-9 mobile.png" alt="img" id="35">
            <img src="../assets/img-3-10 mobile.png" alt="img" id="36">
            <img src="../assets/img-3-11.png" alt="img" id="37">
            <img src="../assets/img-3-12.png" alt="img" id="38">
            <img src="../assets/img-3-13.png" alt="img" id="39">
            <img src="../assets/img-3-14.png" alt="img" id="40">
            <img src="../assets/img-3-15.png" alt="img" id="41">
        </div>
        <div class="examples_background_images opportunities_background_images">
            <img class="examples_background_images_10" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="examples_background_images_11" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="examples_background_images_12" src="../assets/back/bluemy.png" alt="blueby">
            <img class="examples_background_images_13" src="../assets/back/yellowbyfull.png" alt="yellowby">
            <img class="examples_background_images_14" src="../assets/back/greenmn.png" alt="greenmn">
            <img class="examples_background_images_15" src="../assets/back/bluemyhalf.png" alt="bluemyhalf">

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
                12: true,
                13: false,
                14: false,
                15: false,
                16: false,
                17: false,
                18: false,
                19: false,
                20: false,
                21: false,
                22: false,
                23: false,
                24: false,
                25: false,
                26: false,
                27: true,
                28: false,
                29: false,
                30: false,
                31: false,
                32: false,
                33: false,
                34: false,
                35: false,
                36: false,
                37: false,
                38: false,
                39: false,
                40: false,
                41: false,
            },

            i: 1,
            p: 12,
            pPhone: 27,
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
            if(event.target.innerHTML == 'Отправка файлов и каталогов'){
                this.p = 12
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }


            }

            else if(event.target.innerHTML == 'Регистрация на мероприятия'){
                this.p = 13
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Расчет параметров'){
                this.p = 14
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Активация промокодов'){
                this.p = 15
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Генерация паролей'){
                this.p = 16
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Подтверждение бронирования'){
                this.p = 17
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Сбор отзывов и обратной связи'){
                this.p = 18
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Проведение опросов'){
                this.p = 19
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Проведение обучения'){
                this.p = 20
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Прием заказов'){
                this.p = 21
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Прием платежей'){
                this.p = 22
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Информирование и отправка уведомлений'){
                this.p = 23
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Анкетирование'){
                this.p = 24
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Ответы на частые вопросы'){
                this.p = 25
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
            else if(event.target.innerHTML == 'Напоминания о записи'){
                this.p = 26
                let a = document.querySelectorAll(".opportunities_image img")
                for (let x of a){
                    if (x.id != this.p){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                }
            }
        },
        clickOnImageOpportPhone(){
            if(event.target.innerHTML == 'Отправка файлов и каталогов'){
                this.pPhone = 27
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }


            }

            else if(event.target.innerHTML == 'Регистрация на мероприятия'){
                this.pPhone = 28
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Расчет параметров'){
                this.pPhone = 29
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Активация промокодов'){
                this.pPhone = 30
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Генерация паролей'){
                this.pPhone = 31
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Подтверждение бронирования'){
                this.pPhone = 32
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Сбор отзывов и обратной связи'){
                this.pPhone = 33
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Проведение опросов'){
                this.pPhone = 34
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Проведение обучения'){
                this.pPhone = 35
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Прием заказов'){
                this.pPhone = 36
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Прием платежей'){
                this.pPhone = 37
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Информирование и отправка уведомлений'){
                this.pPhone = 38
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Анкетирование'){
                this.pPhone = 39
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Ответы на частые вопросы'){
                this.pPhone = 40
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
            else if(event.target.innerHTML == 'Напоминания о записи'){
                this.pPhone = 41
                let a = document.querySelectorAll(".opportunities_image_phone img")
                let c = this.pPhone.toString()
                for (let x of a){
                    if (x.id != c){
                        x.style.opacity = 0
                    }
                    else{
                        x.style.opacity = 1
                    }
                }
                for(let item in this.coloredP){
                    if(Number.parseInt(this.pPhone - 15) == Number.parseInt(item)) {
                        this.coloredP[this.pPhone - 15] = true
                    }
                    else{
                        this.coloredP[item] = false
                    }
                }
            }
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
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 13){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 14){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 15){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 16){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 17){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 18){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 19){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 20){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 21){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 22){
                   for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 23){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 24){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 25){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.p == 26){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.p) == Number.parseInt(item)) {
                            this.coloredP[this.p] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
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



                let c = document.querySelectorAll(".opportunities_image_phone img")
                if(this.pPhone == 27){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 28){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 29){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 30){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 31){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 32){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 33){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 34){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 35){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 36){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 37){
                   for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 38){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 39){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 40){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }
                else if (this.pPhone == 41){
                    for(let item in this.coloredP){
                        if(Number.parseInt(this.pPhone) == Number.parseInt(item)) {
                            this.coloredP[this.pPhone - 15] = true
                        }
                        else{
                            this.coloredP[item] = false
                        }
                    }
                }

                for(let z of c){
                    if(z.id == this.pPhone){
                        z.style.opacity = 1 
                    }
                    else{
                        z.style.opacity = 0
                    }
                }
                this.pPhone++
                if(this.pPhone == 42){
                    this.pPhone = 27
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
                z-index: 2
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
                z-index: 2
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
            .examples_background_images_10
                position: absolute
                left: calc((100vw - 1400px) / 2)
                top: 50vh
            .examples_background_images_11
                position: absolute
                left: calc((100vw - 1250px) / 2)
                top: 15vh
            .examples_background_images_12
                left: 8vw
                top: -660px
            .examples_background_images_13
                left: 19vw
                top: -35px
            .examples_background_images_14
                position: absolute
                left: calc((100vw - 1100px) / 2)
                //top: -108vh
                top: -20px
            .examples_background_images_15
                display: none





        .opportunities
            background-color: white
            position: relative
            left: calc((100vw - 1200px) / -2)
            padding: 0 calc((100vw - 1200px) / 2)
            top: -100px
            height: 900px
            z-index: 1
            .opportunities_image
                height: 560px
                display: inline-block
                width: 48%
                vertical-align: top
                position: relative
                top: 95px
                img 
                    transition: 0.5s all ease
                    position: absolute
                    z-index: 2
                    opacity: 0
            .opportunities_nav
                display: inline-block
                width: 52%
                vertical-align: middle
                margin-top: 200px
                h1
                    width: 90%
                p                  
                    margin-right: 30px
                
                   
               
                
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
            .examples_background_images_10
                position: absolute
                left: calc((100vw - 1400px) / 2)
                top: 50vh
            .examples_background_images_11
                display: block
                position: relative
                left: 2vw
                top: -65vh
            .examples_background_images_12
                position: absolute
                right: -20px
                top: -220vh
            .examples_background_images_13
                display: block
                left: 70vw
                top: -121vh
                z-index: -1
            .examples_background_images_14
                display: block
                left: 77vw
                //top: -108vh
                top: -248vh
            .examples_background_images_15
                position: absolute
                display: block
                right: 0px
                top: -220vh

        .opportunities_background_images
            height: 0px
            position: relative

        .opportunities
            background-color: white
            position: relative
            left: 0
            padding: 0
            width: 100%
            top: -150px
            height: max-content
            z-index: 1
            .opportunities_image, .opportunities_nav
                display: none
            .opportunities_image_phone
                min-height: 900px            
                display: block
                width: 100%
                vertical-align: top
                position: relative
                top: 0px
                img 
                    width: 100%
                    transition: 0.5s all ease
                    position: absolute
                    z-index: 2
                    opacity: 0
            .opportunities_nav_phone
                padding-top: 50px
                padding-left: 7%
                display: block
                width: 93%
                vertical-align: middle
                margin-top: 200px
                h1
                    width: 100%
                p          
                    font-size: 20px        
                    margin-right: 30px
                






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
            .examples_background_images_10
                position: absolute
                left: calc((100vw - 1400px) / 2)
                top: 50vh
            .examples_background_images_11
                display: block
                position: relative
                left: 2vw
                top: -65vh
            .examples_background_images_12
                position: absolute
                right: -20px
                top: -220vh
            .examples_background_images_13
                display: block
                left: 63vw
                top: -121vh
            .examples_background_images_14
                display: block
                left: 67vw
                //top: -108vh
                top: -248vh
            .examples_background_images_15
                position: absolute
                display: block
                right: 0px
                top: -220vh
        .opportunities
            background-color: white
            position: relative
            left: 0
            padding: 0
            width: 100%
            top: -150px
            height: max-content
            z-index: 1
            .opportunities_image, .opportunities_nav
                display: none
            .opportunities_image_phone
                display: block
                width: 100%
                height: 930px
                vertical-align: top
                position: relative
                top: 0px
                img 
                    width: 100%
                    transition: 0.5s all ease
                    position: absolute
                    z-index: 2
                    opacity: 0
            .opportunities_nav_phone
                padding-top: 50px
                padding-left: 7%
                display: block
                width: 93%
                vertical-align: middle
                margin-top: 200px
                h1
                    width: 100%
                p         
                    font-size: 20px        
                    margin-right: 30px
</style>




