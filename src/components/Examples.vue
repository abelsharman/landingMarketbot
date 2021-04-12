<template>
    <div class="examples">
        <div class="examples_nav">
            <h1>{{ langTexts[langComp].example.example_h1 }}</h1>
            <p @click="clickOnImage" v-bind:class="{ clicked : first }">{{ langTexts[langComp].example.example_1 }}</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : second }">{{ langTexts[langComp].example.example_2 }}</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : third }">{{ langTexts[langComp].example.example_3 }}</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : fourth }">{{ langTexts[langComp].example.example_4 }}</p>
            <p @click="clickOnImage" v-bind:class="{ clicked : fifth }">{{ langTexts[langComp].example.example_5 }}</p>
        </div>

        <div class="examples_nav_phone">
            <h1>{{ langTexts[langComp].example.example_h1 }}</h1>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : firstPhone }">{{ langTexts[langComp].example.example_1 }}</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : secondPhone }">{{ langTexts[langComp].example.example_2 }}</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : thirdPhone }">{{ langTexts[langComp].example.example_3 }}</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : fourthPhone }">{{ langTexts[langComp].example.example_4 }}</p>
            <p @click="clickOnImagePhone" v-bind:class="{ clicked : fifthPhone }">{{ langTexts[langComp].example.example_5 }}</p>
        </div>


        <div class="examples_image">
            <picture>
                <source srcset="../assets/img-2.webp" type="image/webp">
                <img src="../assets/img-2.png" alt="img" id="1" ref="i1">
            </picture>

            <picture>
                <source srcset="../assets/img-2-2.webp" type="image/webp">
                <img src="../assets/img-2-2.png" alt="img" id="2" ref="i2">
            </picture>

            <picture>
                <source srcset="../assets/img-2-3.webp" type="image/webp">
                <img src="../assets/img-2-3.png" alt="img" id="3" ref="i3" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-2-4.webp" type="image/webp">
                <img src="../assets/img-2-4.png" alt="img" id="4" ref="i4" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-2-5.webp" type="image/webp">
                <img src="../assets/img-2-5.png" alt="img" id="5" ref="i5" loading="lazy">
            </picture>
        </div>

        <div class="examples_image_phone">
            <picture>
                <source srcset="../assets/img-2mobile.webp" type="image/webp">
                <img src="../assets/img-2mobile.png" alt="img" id="6">
            </picture>

            <picture>
                <source srcset="../assets/img-2-2mobile.webp" type="image/webp">
                <img src="../assets/img-2-2mobile.png" alt="img" id="7">
            </picture>

            <picture>
                <source srcset="../assets/img-2-3mobile.webp" type="image/webp">
                <img src="../assets/img-2-3mobile.png" alt="img" id="8" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-2-4mobile.webp" type="image/webp">
                <img src="../assets/img-2-4mobile.png" alt="img" id="9" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-2-5mobile.webp" type="image/webp">
                <img src="../assets/img-2-5mobile.png" alt="img" id="10" loading="lazy">
            </picture>
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

        <div class="page_grey_lines_16">
            <img class="page_grey_line_1" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_2" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_3" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_4" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_5" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_6" src="../assets/grey_line.png" alt="grey_line">
        </div>



        <div class="examples opportunities">
        <h1 class="opportunities_heading">{{ langTexts[langComp].opportunity.opportunity_h1 }}</h1>
        <div class="examples_image opportunities_image">
            <picture>
                <source srcset="../assets/img-3.webp" type="image/webp">
                <img src="../assets/img-3.png" alt="img" id="12">
            </picture>

            <picture>
                <source srcset="../assets/img-3-2.webp" type="image/webp">
                <img src="../assets/img-3-2.png" alt="img" id="13">
            </picture>

            <picture>
                <source srcset="../assets/img-3-3.webp" type="image/webp">
                <img src="../assets/img-3-3.png" alt="img" id="14" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-4.webp" type="image/webp">
                <img src="../assets/img-3-4.png" alt="img" id="15" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-5.webp" type="image/webp">
                <img src="../assets/img-3-5.png" alt="img" id="16" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-6.webp" type="image/webp">
                <img src="../assets/img-3-6.png" alt="img" id="17" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-7.webp" type="image/webp">
                <img src="../assets/img-3-7.png" alt="img" id="18" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-8.webp" type="image/webp">
                <img src="../assets/img-3-8.png" alt="img" id="19" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-9.webp" type="image/webp">
                <img src="../assets/img-3-9.png" alt="img" id="20" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-10.webp" type="image/webp">
                <img src="../assets/img-3-10.png" alt="img" id="21" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-11.webp" type="image/webp">
                <img src="../assets/img-3-11.png" alt="img" id="22" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-12.webp" type="image/webp">
                <img src="../assets/img-3-12.png" alt="img" id="23" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-13.webp" type="image/webp">
                <img src="../assets/img-3-13.png" alt="img" id="24" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-14.webp" type="image/webp">
                <img src="../assets/img-3-14.png" alt="img" id="25" loading="lazy">
            </picture>

            <picture>
                <source srcset="../assets/img-3-15.webp" type="image/webp">
                <img src="../assets/img-3-15.png" alt="img" id="26" loading="lazy">
            </picture>
        </div>

        
        
        <div class="examples_nav opportunities_nav">
            <h1>{{ langTexts[langComp].opportunity.opportunity_h1 }}</h1>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['12'] }">{{ langTexts[langComp].opportunity.opportunity_1 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['13'] }">{{ langTexts[langComp].opportunity.opportunity_2 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['14'] }">{{ langTexts[langComp].opportunity.opportunity_3 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['15'] }">{{ langTexts[langComp].opportunity.opportunity_4 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['16'] }">{{ langTexts[langComp].opportunity.opportunity_5 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['17'] }">{{ langTexts[langComp].opportunity.opportunity_6 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['18'] }">{{ langTexts[langComp].opportunity.opportunity_7 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['19'] }">{{ langTexts[langComp].opportunity.opportunity_8 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['20'] }">{{ langTexts[langComp].opportunity.opportunity_9 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['21'] }">{{ langTexts[langComp].opportunity.opportunity_10 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['22'] }">{{ langTexts[langComp].opportunity.opportunity_11 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['23'] }">{{ langTexts[langComp].opportunity.opportunity_12 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['24'] }">{{ langTexts[langComp].opportunity.opportunity_13 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['25'] }">{{ langTexts[langComp].opportunity.opportunity_14 }}</p>
            <p @click="clickOnImageOpport" v-bind:class="{ clicked : coloredP['26'] }">{{ langTexts[langComp].opportunity.opportunity_15 }}</p>

        </div>

        <div class="opportunities_slider_arrow_block">
                <img class="opportunities_slider_arrow" style="left: 60vw;" src="../assets/left_arrow.png" alt="left_arrow">
                <img class="opportunities_slider_arrow" style="left: 70vw;" src="../assets/right_arrow.png" alt="right_arrow">
            </div>
        <div class="opportunities_slider">
            <div class="company_slider_item company_slider_1" id="1" ref="i1"> <!-- v-touch:swipe.left="clickOnSliderPlus" v-touch:touchhold="longClick"  v-touch:swipe.right="clickOnSliderMinus"   -->
                <picture>
                    <source srcset="../assets/img-3mobile.webp" type="image/webp">
                    <img src="../assets/img-3mobile.png" alt="img" class="company_slider_big_img">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_1 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p1 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_2" id="2" ref="i2"  >
                <picture>
                    <source srcset="../assets/img-3-2mobile.webp" type="image/webp">
                    <img src="../assets/img-3-2mobile.png" class="company_slider_big_img" alt="img">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_2 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p2 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_3" id="3" ref="i3" >
                <picture>
                    <source srcset="../assets/img-3-3mobile.webp" type="image/webp">
                    <img src="../assets/img-3-3mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_3 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p3 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_4" id="4" ref="i4" >
                <picture>
                    <source srcset="../assets/img-3-4mobile.webp" type="image/webp">
                    <img src="../assets/img-3-4mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_4 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p4 }}</p>
                </div>
            </div>


            <div class="company_slider_item company_slider_5" id="5" ref="i5" >
                <picture>
                    <source srcset="../assets/img-3-5mobile.webp" type="image/webp">
                    <img src="../assets/img-3-5mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_5 }}</h1>
                    <p></p>
                </div>
            </div>

            <div class="company_slider_item company_slider_6" id="6" ref="i6" >
                <picture>
                    <source srcset="../assets/img-3-6mobile.webp" type="image/webp">
                    <img src="../assets/img-3-6mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_6 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p6 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_7" id="7" ref="i7" >
                <picture>
                    <source srcset="../assets/img-3-7mobile.webp" type="image/webp">
                    <img src="../assets/img-3-7mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_7 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p7 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_8" id="8" ref="i8" >
                <picture>
                    <source srcset="../assets/img-3-8mobile.webp" type="image/webp">
                    <img src="../assets/img-3-8mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_8 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p8 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_9" id="9" ref="i9" >
                <picture>
                    <source srcset="../assets/img-3-9mobile.webp" type="image/webp">
                    <img src="../assets/img-3-9mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_9 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p9 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_10" id="10" ref="i10" >
                <picture>
                    <source srcset="../assets/img-3-10mobile.webp" type="image/webp">
                    <img src="../assets/img-3-10mobile.png" alt="img" class="company_slider_big_img" loading="lazy">
                </picture>
                
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_10 }}</h1>
                    <p>{{ langTexts[langComp].opportunity.opportunity_p10 }}</p>
                </div>
            </div>

            <div class="company_slider_item company_slider_11" id="11" ref="i11" >
                <picture>
                    <source srcset="../assets/img-3-11mobile.webp" type="image/webp">
                    <img src="../assets/img-3-11mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_11 }}</h1>
                    <p></p>
                </div>
            </div>

            <div class="company_slider_item company_slider_12" id="12" ref="i12" >
                <picture>
                    <source srcset="../assets/img-3-12mobile.webp" type="image/webp">
                    <img src="../assets/img-3-12mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_12 }}</h1>
                    <p></p>
                </div>
            </div>

            <div class="company_slider_item company_slider_13" id="13" ref="i13" >
                <picture>
                    <source srcset="../assets/img-3-13mobile.webp" type="image/webp">
                    <img src="../assets/img-3-13mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_13 }}</h1>
                    <p></p>
                </div>
            </div>

            <div class="company_slider_item company_slider_14" id="14" ref="i14" >
                <picture>
                    <source srcset="../assets/img-3-14mobile.webp" type="image/webp">
                    <img src="../assets/img-3-14mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_14 }}</h1>
                    <p></p>
                </div>
            </div>

            <div class="company_slider_item company_slider_15" id="15" ref="i15" >
                <picture>
                    <source srcset="../assets/img-3-15mobile.webp" type="image/webp">
                    <img src="../assets/img-3-15mobile.png" class="company_slider_big_img" alt="img" loading="lazy">
                </picture>
                <div class="company_slider_text">
                    <h1>{{ langTexts[langComp].opportunity.opportunity_15 }}</h1>
                    <p></p>
                </div>
            </div>
        </div>

        
        <div class="examples_background_images opportunities_background_images">
            <img class="examples_background_images_10" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="examples_background_images_11" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="examples_background_images_12" src="../assets/back/bluemy.png" alt="blueby">
            <img class="examples_background_images_13" src="../assets/back/yellowbyfull.png" alt="yellowby">
            <img class="examples_background_images_14" src="../assets/back/greenmn.png" alt="greenmn">
            <img class="examples_background_images_15" src="../assets/back/bluemyhalf.png" alt="bluemyhalf">

        </div>

        <div class="page_grey_lines_17">
            <img class="page_grey_line_1" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_2" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_3" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_4" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_5" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_6" src="../assets/grey_line.png" alt="grey_line">
        </div>
        </div>

        
        
    </div>
</template>


<script async>
import langText from '../assets/lang.js'
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
            langTexts: langText,

            i: 1,
            p: 12,
            pPhone: 27,
            iMobile: 6,

            iSlider: 1,

            b:'',
            examples_background_images_1_x: 1,
            examples_background_images_2_x: 1,
            examples_background_images_3_x: 1,
            examples_background_images_4_x: 1,
            examples_background_images_5_x: 1,
            examples_background_images_6_x: 1,
            examples_background_images_7_x: 1,
            
            examples_background_images_10_x: 1,
            examples_background_images_11_x: 1,
            examples_background_images_12_x: 1,
            examples_background_images_13_x: 1,
            examples_background_images_14_x: 1,
            examples_background_images_15_x: 1,

        }
    },
    methods:{
        clickOnImage(event){
            if(event.target.innerHTML == 'Виджеты обратной связи' || event.target.innerHTML == 'Feedback widgets'){
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
            else if (event.target.innerHTML == 'QR-коды' || event.target.innerHTML == 'QR-codes'){
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
            else if (event.target.innerHTML == 'Формы для регистраций' || event.target.innerHTML == 'Registration forms'){  
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
            else if (event.target.innerHTML == 'Автоуведомления из CRM' || event.target.innerHTML == 'Auto notifications from CRM'){
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
            else if (event.target.innerHTML == 'Прямые ссылки на мессенджер' || event.target.innerHTML == 'Direct links to the messenger'){
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
            if(event.target.innerHTML == 'Виджеты обратной связи' || event.target.innerHTML == 'Feedback widgets'){
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
            else if (event.target.innerHTML == 'QR-коды' || event.target.innerHTML == 'QR-codes'){
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
            else if (event.target.innerHTML == 'Формы для регистраций' || event.target.innerHTML == 'Registration forms'){  
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
            else if (event.target.innerHTML == 'Автоуведомления из CRM' || event.target.innerHTML == 'Auto notifications from CRM'){
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
            else if (event.target.innerHTML == 'Прямые ссылки на мессенджер' || event.target.innerHTML == 'Direct links to the messenger'){
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
            if(event.target.innerHTML == 'Отправка файлов и каталогов' || event.target.innerHTML == 'Uploading files and directories'){
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

            else if(event.target.innerHTML == 'Регистрация на мероприятия' || event.target.innerHTML == 'Registration for events'){
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
            else if(event.target.innerHTML == 'Расчет параметров' || event.target.innerHTML == 'Calculation of parameters'){
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
            else if(event.target.innerHTML == 'Активация промокодов' || event.target.innerHTML == 'Activation of promo codes'){
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
            else if(event.target.innerHTML == 'Генерация паролей' || event.target.innerHTML == 'Generating passwords'){
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
            else if(event.target.innerHTML == 'Подтверждение бронирования' || event.target.innerHTML == 'Booking Confirmation'){
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
            else if(event.target.innerHTML == 'Сбор отзывов и обратной связи' || event.target.innerHTML == 'Collecting reviews and feedback'){
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
            else if(event.target.innerHTML == 'Проведение опросов' || event.target.innerHTML == 'Conducting polls'){
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
            else if(event.target.innerHTML == 'Проведение обучения' || event.target.innerHTML == 'Conducting training'){
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
            else if(event.target.innerHTML == 'Прием заказов' || event.target.innerHTML == 'Receiving orders'){
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
            else if(event.target.innerHTML == 'Прием платежей' || event.target.innerHTML == 'Acceptance of payments'){
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
            else if(event.target.innerHTML == 'Информирование и отправка уведомлений' || event.target.innerHTML == 'Informing and sending notifications'){
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
            else if(event.target.innerHTML == 'Анкетирование' || event.target.innerHTML == 'Questionnaire'){
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
            else if(event.target.innerHTML == 'Ответы на частые вопросы' || event.target.innerHTML == 'Frequently asked questions'){
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
            else if(event.target.innerHTML == 'Напоминания о записи' || event.target.innerHTML == 'Recording reminders'){
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
        clickOnSliderPlus(){
            clearInterval(this.b)
            this.b = this.sliderAuto()
        },
        clickOnSliderMinus(){
            this.iSlider--
            if(this.iSlider == 1){
                this.$refs.i1.style.left = "0px"
                this.$refs.i2.style.left = "630px"
                this.$refs.i3.style.left = "1260px"
                this.$refs.i4.style.left = "1890px"
                this.$refs.i5.style.left = "1890px"
                this.$refs.i6.style.left = "2520px"
                this.$refs.i7.style.left = "3150px"
                this.$refs.i8.style.left = "3780px"
                this.$refs.i9.style.left = "4410px"
                this.$refs.i10.style.left = "5040px"
                this.$refs.i11.style.left = "5670px"
                this.$refs.i12.style.left = "6300px"
                this.$refs.i13.style.left = "5670px"
                this.$refs.i14.style.left = "6300px"
                this.$refs.i15.style.left = "6930px"
            }
            else if(this.iSlider == 2){
                this.$refs.i1.style.left = "-630px"
                this.$refs.i2.style.left = "0"
                this.$refs.i3.style.left = "630px"
                this.$refs.i4.style.left = "1260px"
                this.$refs.i5.style.left = "1890px"
                this.$refs.i6.style.left = "1890px"
                this.$refs.i6.style.left = "2520px"
                this.$refs.i7.style.left = "3150px"
                this.$refs.i8.style.left = "3780px"
                this.$refs.i9.style.left = "4410px"
                this.$refs.i10.style.left = "5040px"
                this.$refs.i11.style.left = "5670px"
                this.$refs.i12.style.left = "6300px"
                this.$refs.i13.style.left = "6930px"
            }
            else if(this.iSlider== 3){
                this.$refs.i2.style.left = "-630px"
                this.$refs.i3.style.left = "0px"
                this.$refs.i4.style.left = "630px"
                this.$refs.i5.style.left = "1260px"
                this.$refs.i6.style.left = "1890px"
                this.$refs.i7.style.left = "2520px"
                this.$refs.i8.style.left = "3150px"
                this.$refs.i9.style.left = "3780px"
                this.$refs.i10.style.left = "4410px"
                this.$refs.i11.style.left = "5040px"
                this.$refs.i12.style.left = "5670px"
                this.$refs.i13.style.left = "6300px"
            }
            else if(this.iSlider == 4){
                this.$refs.i3.style.left = "-630px"
                this.$refs.i4.style.left = "0px"
                this.$refs.i5.style.left = "630px"
                this.$refs.i6.style.left = "1260px"
                this.$refs.i7.style.left = "1890px"
                this.$refs.i8.style.left = "2520px"
                this.$refs.i9.style.left = "3150px"
                this.$refs.i10.style.left = "3780px"
                this.$refs.i11.style.left = "4410px"
                this.$refs.i12.style.left = "5040px"
                this.$refs.i13.style.left = "5670px"
            }
            else if(this.iSlider == 5){
                this.$refs.i4.style.left = "-630px"
                this.$refs.i5.style.left = "0px"
                this.$refs.i6.style.left = "630px"
                this.$refs.i7.style.left = "1260px"
                this.$refs.i8.style.left = "1890px"
                this.$refs.i9.style.left = "2520px"
                this.$refs.i10.style.left = "3150px"
                this.$refs.i11.style.left = "3780px"
                this.$refs.i12.style.left = "4410px"
                this.$refs.i13.style.left = "5040px"
            }
            else if(this.iSlider == 6){
                this.$refs.i5.style.left = "-630px"
                this.$refs.i6.style.left = "0px"
                this.$refs.i7.style.left = "630px"
                this.$refs.i8.style.left = "1260px"
                this.$refs.i9.style.left = "1890px"
                this.$refs.i10.style.left = "2520px"
                this.$refs.i11.style.left = "3150px"
                this.$refs.i12.style.left = "3780px"
                this.$refs.i13.style.left = "4410px"
            }
            else if(this.iSlider == 7){
                this.$refs.i6.style.left = "-630px"
                this.$refs.i7.style.left = "0px"
                this.$refs.i8.style.left = "630px"
                this.$refs.i9.style.left = "1260px"
                this.$refs.i10.style.left = "1890px"
                this.$refs.i11.style.left = "2520px"
                this.$refs.i12.style.left = "3150px"
                this.$refs.i13.style.left = "3780px"
            }
            else if(this.iSlider == 8){
                this.$refs.i7.style.left = "-630px"
                this.$refs.i8.style.left = "0px"
                this.$refs.i9.style.left = "630px"
                this.$refs.i10.style.left = "1260px"
                this.$refs.i11.style.left = "1890px"
                this.$refs.i12.style.left = "2520px"
                this.$refs.i13.style.left = "3150px"
            }
            else if(this.iSlider == 9){
                this.$refs.i8.style.left = "-630px"
                this.$refs.i9.style.left = "0px"
                this.$refs.i10.style.left = "630px"
                this.$refs.i11.style.left = "1260px"
                this.$refs.i12.style.left = "1890px"
                this.$refs.i13.style.left = "2520px"
            }
            else if(this.iSlider == 10){
                this.$refs.i9.style.left = "-630px"
                this.$refs.i10.style.left = "0px"
                this.$refs.i11.style.left = "630px"
                this.$refs.i12.style.left = "1260px"
                this.$refs.i13.style.left = "1890px"
            }
            else if(this.iSlider == 11){
                this.$refs.i10.style.left = "-630px"
                this.$refs.i11.style.left = "0px"
                this.$refs.i12.style.left = "630px"
                this.$refs.i13.style.left = "1260px"
            }
            else if(this.iSlider == 12){
                this.$refs.i11.style.left = "-630px"
                this.$refs.i12.style.left = "0px"
                this.$refs.i13.style.left = "630px"
                this.$refs.i14.style.left = "1260px"
                this.$refs.i15.style.left = "1260px"
            }
            else if(this.iSlider == 13){
                this.$refs.i12.style.left = "-630px"
                this.$refs.i13.style.left = "0px"
                this.$refs.i14.style.left = "630px"
                this.$refs.i15.style.left = "1260px"
            }

            else if(this.iSlider == 14){
                this.$refs.i13.style.left = "-630px"
                this.$refs.i14.style.left = "0px"
                this.$refs.i15.style.left = "630px"
                this.$refs.i1.style.left = "1260px"
            }
            else if(this.iSlider == 15){
                this.$refs.i14.style.left = "-630px"
                this.$refs.i15.style.left = "0px"
                this.$refs.i1.style.left = "630px"



                this.$refs.i2.style.left = "1260px"
                this.$refs.i3.style.left = "1890px"
                this.$refs.i4.style.left = "2520px"
                this.$refs.i5.style.left = "3150px"
                this.$refs.i6.style.left = "3780px"
                this.$refs.i7.style.left = "4410px"
                this.$refs.i8.style.left = "5040px"
                this.$refs.i9.style.left = "5670px"
                this.$refs.i10.style.left = "6300px"
                this.$refs.i11.style.left = "6930px"
                this.$refs.i12.style.left = "7560px"
                this.$refs.i13.style.left = "6930px"
                this.$refs.i14.style.left = "7560px"
                 
            }
            else if(this.iSlider == 16){
                this.$refs.i15.style.left = "-630px"
                this.$refs.i1.style.left = "0px"
                this.$refs.i2.style.left = "630px"


                this.$refs.i15.style.left = "7560px"
            }
            
        },
        sliderAuto(){
            this.iSlider++
            if(this.iSlider == 2){
                this.$refs.i1.style.left = "-630px"
                this.$refs.i2.style.left = "0px"
                this.$refs.i3.style.left = "630px"
                this.$refs.i4.style.left = "1260px"
                this.$refs.i5.style.left = "1890px"
                this.$refs.i6.style.left = "2520px"
                this.$refs.i7.style.left = "3150px"
                this.$refs.i8.style.left = "3780px"
                this.$refs.i9.style.left = "4410px"
                this.$refs.i10.style.left = "5040px"
                this.$refs.i11.style.left = "5670px"
                this.$refs.i12.style.left = "6300px"
                this.$refs.i13.style.left = "6930px"
                this.$refs.i14.style.left = "7560px"
                this.$refs.i15.style.left = "8190px"
            }
            else if(this.iSlider == 3){
                this.$refs.i2.style.left = "-630px"
                this.$refs.i3.style.left = "0px"
                this.$refs.i4.style.left = "630px"
                this.$refs.i5.style.left = "1260px"
                this.$refs.i6.style.left = "1890px"
                this.$refs.i7.style.left = "2520px"
                this.$refs.i8.style.left = "3150px"
                this.$refs.i9.style.left = "3780px"
                this.$refs.i10.style.left = "4410px"
                this.$refs.i11.style.left = "5040px"
                this.$refs.i12.style.left = "5670px"
                this.$refs.i13.style.left = "6300px"
                this.$refs.i14.style.left = "6930px"
                this.$refs.i15.style.left = "7560px"
            }
            else if(this.iSlider == 4){
                this.$refs.i3.style.left = "-630px"
                this.$refs.i4.style.left = "0px"
                this.$refs.i5.style.left = "630px"
                this.$refs.i6.style.left = "1260px"
                this.$refs.i7.style.left = "1890px"
                this.$refs.i8.style.left = "2520px"
                this.$refs.i9.style.left = "3150px"
                this.$refs.i10.style.left = "3780px"
                this.$refs.i11.style.left = "4410px"
                this.$refs.i12.style.left = "5040px"
                this.$refs.i13.style.left = "5670px"
                this.$refs.i14.style.left = "6300px"
                this.$refs.i15.style.left = "6930px"
            }
            else if(this.iSlider == 5){
                this.$refs.i4.style.left = "-630px"
                this.$refs.i5.style.left = "0px"
                this.$refs.i6.style.left = "630px"
                this.$refs.i7.style.left = "1260px"
                this.$refs.i8.style.left = "1890px"
                this.$refs.i9.style.left = "2520px"
                this.$refs.i10.style.left = "3150px"
                this.$refs.i11.style.left = "3780px"
                this.$refs.i12.style.left = "4410px"
                this.$refs.i13.style.left = "5040px"
                this.$refs.i14.style.left = "5670px"
                this.$refs.i15.style.left = "6300px"
            }
            else if(this.iSlider == 6){
                this.$refs.i5.style.left = "-630px"
                this.$refs.i6.style.left = "0px"
                this.$refs.i7.style.left = "630px"
                this.$refs.i8.style.left = "1260px"
                this.$refs.i9.style.left = "1890px"
                this.$refs.i10.style.left = "2520px"
                this.$refs.i11.style.left = "3150px"
                this.$refs.i12.style.left = "3780px"
                this.$refs.i13.style.left = "4410px"
                this.$refs.i14.style.left = "5040px"
                this.$refs.i15.style.left = "5670px"
            }
            else if(this.iSlider == 7){
                this.$refs.i6.style.left = "-630px"
                this.$refs.i7.style.left = "0px"
                this.$refs.i8.style.left = "630px"
                this.$refs.i9.style.left = "1260px"
                this.$refs.i10.style.left = "1890px"
                this.$refs.i11.style.left = "2520px"
                this.$refs.i12.style.left = "3150px"
                this.$refs.i13.style.left = "3780px"
                this.$refs.i14.style.left = "4410px"
                this.$refs.i15.style.left = "5040px"
            }
            else if(this.iSlider == 8){
                this.$refs.i7.style.left = "-630px"
                this.$refs.i8.style.left = "0px"
                this.$refs.i9.style.left = "630px"
                this.$refs.i10.style.left = "1260px"
                this.$refs.i11.style.left = "1890px"
                this.$refs.i12.style.left = "2520px"
                this.$refs.i13.style.left = "3150px"
                this.$refs.i14.style.left = "3780px"
                this.$refs.i15.style.left = "4410px"
            }
            else if(this.iSlider == 9){
                this.$refs.i8.style.left = "-630px"
                this.$refs.i9.style.left = "0px"
                this.$refs.i10.style.left = "630px"
                this.$refs.i11.style.left = "1260px"
                this.$refs.i12.style.left = "1890px"
                this.$refs.i13.style.left = "2520px"
                this.$refs.i14.style.left = "3150px"
                this.$refs.i15.style.left = "3780px"
            }
            else if(this.iSlider == 10){
                this.$refs.i9.style.left = "-630px"
                this.$refs.i10.style.left = "0px"
                this.$refs.i11.style.left = "630px"
                this.$refs.i12.style.left = "1260px"
                this.$refs.i13.style.left = "1890px"
                this.$refs.i14.style.left = "2520px"
                this.$refs.i15.style.left = "3150px"
            }
            else if(this.iSlider == 11){
                this.$refs.i10.style.left = "-630px"
                this.$refs.i11.style.left = "0px"
                this.$refs.i12.style.left = "630px"
                this.$refs.i13.style.left = "1260px"
                this.$refs.i14.style.left = "1890px"
                this.$refs.i15.style.left = "2520px"
            }
            else if(this.iSlider == 12){
                this.$refs.i11.style.left = "-630px"
                this.$refs.i12.style.left = "0px"
                this.$refs.i13.style.left = "630px"
                this.$refs.i14.style.left = "1260px"
                this.$refs.i15.style.left = "1890px"
            }
            else if(this.iSlider == 13){
                this.$refs.i12.style.left = "-630px"
                this.$refs.i13.style.left = "0px"
                this.$refs.i14.style.left = "630px"
                this.$refs.i15.style.left = "1260px"
            }
            else if(this.iSlider == 14){
                this.$refs.i13.style.left = "-630px"
                this.$refs.i14.style.left = "0px"
                this.$refs.i15.style.left = "630px"
                this.$refs.i1.style.left = "1260px"
            }
            else if(this.iSlider == 15){
                this.$refs.i14.style.left = "-630px"
                this.$refs.i15.style.left = "0px"
                this.$refs.i1.style.left = "630px"



                this.$refs.i2.style.left = "1260px"
                this.$refs.i3.style.left = "1890px"
                this.$refs.i4.style.left = "2520px"
                this.$refs.i5.style.left = "3150px"
                this.$refs.i6.style.left = "3780px"
                this.$refs.i7.style.left = "4410px"
                this.$refs.i8.style.left = "5040px"
                this.$refs.i9.style.left = "5670px"
                this.$refs.i10.style.left = "6300px"
                this.$refs.i11.style.left = "6930px"
                this.$refs.i12.style.left = "7560px"
                this.$refs.i13.style.left = "8190px"
                this.$refs.i14.style.left = "8820px"


            }
            else if(this.iSlider == 16){
                this.$refs.i15.style.left = "-630px"
                this.$refs.i1.style.left = "0px"
                this.$refs.i2.style.left = "630px"

                this.$refs.i15.style.left = "7560px"
            }
            if(this.iSlider == 16){
                this.iSlider = 1
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



                //this.sliderAuto()
            }
        },
        longClick(){
            clearInterval(this.b)
            setTimeout(()=> this.b = setInterval(this.intervalMethod, 4000), 5000)
        },
        onMouseUpdate(e){
            if(window.innerWidth > 456){
            let x = e.pageX / window.innerWidth * 20
            let y = e.clientY / window.innerHeight * 20
            document.querySelector(".examples_background_images_1").style.top = (this.examples_background_images_1_x + y).toString() + 'px'
            document.querySelector(".examples_background_images_2").style.top = (this.examples_background_images_2_x + y).toString() + 'px'
            document.querySelector(".examples_background_images_3").style.left = (this.examples_background_images_3_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_4").style.left = (this.examples_background_images_4_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_5").style.left = (this.examples_background_images_5_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_6").style.left = (this.examples_background_images_6_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_7").style.left = (this.examples_background_images_7_x + x).toString() + 'px'
            
            document.querySelector(".examples_background_images_10").style.left = (this.examples_background_images_10_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_11").style.left = (this.examples_background_images_11_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_12").style.left = (this.examples_background_images_12_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_13").style.left = (this.examples_background_images_13_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_14").style.left = (this.examples_background_images_14_x + x).toString() + 'px'
            document.querySelector(".examples_background_images_15").style.left = (this.examples_background_images_15_x + x).toString() + 'px'
            }

            
        }
    },
    computed:{
        langComp(){
            return this.$store.state.lang
        }
    },
    mounted(){
        this.b = setInterval(this.intervalMethod, 4000)
        if(window.innerWidth > 456){
        document.addEventListener('mousemove', this.onMouseUpdate)
        this.examples_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_1")).top).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_1")).top).length - 2))
        this.examples_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_2")).top).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_2")).top).length - 2))
        this.examples_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_3")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_3")).left).length - 2))
        this.examples_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_4")).left).length - 2))
        this.examples_background_images_5_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_5")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_5")).left).length - 2))
        this.examples_background_images_6_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_6")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_6")).left).length - 2))
        this.examples_background_images_7_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_7")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_7")).left).length - 2))

        this.examples_background_images_10_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_10")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_10")).left).length - 2))
        this.examples_background_images_11_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_11")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_11")).left).length - 2))
        this.examples_background_images_12_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_12")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_12")).left).length - 2))
        this.examples_background_images_13_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_13")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_13")).left).length - 2))
        this.examples_background_images_14_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_14")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_14")).left).length - 2))
        this.examples_background_images_15_x = Number.parseInt((window.getComputedStyle(document.querySelector(".examples_background_images_15")).left).substring(0, (window.getComputedStyle(document.querySelector(".examples_background_images_15")).left).length - 2))
        }
    }

}
</script>


<style lang="sass">
@keyframes motionOfArrows 
    0%
        left: -3vw
    50%
        left: 3vw
    100%
        left: -3vw

    
@media screen and (min-width: 456px)
    .page_grey_lines_16
        display: none
    .page_grey_lines_17
        display: none
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
            user-select: none
            height: 560px
            display: inline-block
            width: 52%
            vertical-align: top
            position: relative
            top: -95px
            z-index: 100
            img 
                transition: 0.5s all ease
                position: absolute
                z-index: 2
                opacity: 0
        .examples_image_phone
            display: none
        .examples_background_images
            user-select: none
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
                top: 205vh
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

        .opportunities_slider_arrow_block
            display: none



        .opportunities
            background-color: white
            position: relative
            left: calc((100vw - 1200px) / -2)
            padding: 0 calc((100vw - 1200px) / 2)
            top: -100px
            height: 880px
            .opportunities_heading
                display: none
            .opportunities_slider
                display: none
            .opportunities_image
                user-select: none
                height: 560px
                display: inline-block
                width: 48.5%
                vertical-align: top
                position: relative
                top: 95px
                z-index: 100
                img 
                    transition: 0.5s all ease
                    position: absolute
                    z-index: 2
                    opacity: 0
            .opportunities_image_phone
                display: none
            .opportunities_nav
                display: inline-block
                width: 51.5%
                vertical-align: middle
                margin-top: 160px
                h1
                    width: 100%
                p                  
                    margin-right: 23px
                
                   
               
                
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
            z-index: 100
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
    .page_grey_lines_16
        img
            position: absolute
            height: 100%
            width: 1px
            top: 0px
        .page_grey_line_1
                margin: 0
                width: 1px
                left: 23.5%
        .page_grey_line_2
                margin: 0
                width: 1px
                left: 76.5%
        .page_grey_line_3
                display: none
                left: calc((100vw - 240px) / 2)
        .page_grey_line_4
                display: none
                left: calc((100vw + 240px) / 2)
        .page_grey_line_5
                display: none
                left: calc((100vw + 720px) / 2)
        .page_grey_line_6
                display: none
                left: calc((100vw + 1200px) / 2)
    .page_grey_lines_17
        img
                position: absolute
                display: inline
                height: 100%
                width: 1px
                top: -40px
        .page_grey_line_1
                margin: 0
                width: 1px
                left: 23.5%
        .page_grey_line_2
                margin: 0
                width: 1px
                left: 76.5%
        .page_grey_line_3
                display: none
                left: calc((100vw - 240px) / 2)
        .page_grey_line_4
                display: none
                left: calc((100vw + 240px) / 2)
        .page_grey_line_5
                display: none
                left: calc((100vw + 720px) / 2)
        .page_grey_line_6
                display: none
                left: calc((100vw + 1200px) / 2)
    .examples
        position: relative
        width: 100%
        .examples_nav_phone
            display: block
            width: 93%
            padding-left: 7%
            vertical-align: top
            
            h1
                z-index: 3
                position: relative
                width: 100%
                font-size: 7vw
                line-height: 9.6vw
                font-weight: 700
                color: #370954
                margin-bottom: 0px
                padding-bottom: 10px
            p
                font-weight: 400
                font-size: 4.3vw
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
                padding-left: 3.5vw
                width: 93vw
                z-index: 100
        .examples_image
            display: none
        
        .examples_background_images
            position: relative
            user-select: none
            outline: none
            pointer-events: none
            //height: 450px
            height: 115vw
            img
                position: relative
                display: none
            .examples_background_images_1
                position: absolute
                display: block
                //top: -47vh
                top: -82vw
                width: 35vw
                right: 0
            .examples_background_images_2
                display: block  
                left: 10vw
                top: 48vh
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
                display: none
                position: relative
                left: 2vw
                top: -65vh
            .examples_background_images_12
                position: absolute
                right: -20px
                top: -220vh
            .examples_background_images_13
                left: 70vw
                top: -121vh
                z-index: -1
            .examples_background_images_14
                display: block
                left: 82vw
                width: 12vw
                //top: -108vh
                top: -115vh
            .examples_background_images_15
                position: absolute
                display: block
                right: 0px
                top: -100vh

        .opportunities_background_images
            height: 0px
            position: relative

        .opportunities
            h1
                z-index: 3
                position: relative
                width: 90%
                padding-left: 7%
                font-size: 7vw
                line-height: 9.6vw
                font-weight: 700
                color: #370954
                padding-bottom: 10px
                padding-top: 30px
            
            background-color: white
            position: relative
            left: 0
            padding: 0
            width: 100%
            top: 0px
            height: max-content
            z-index: 1
            .opportunities_image, .opportunities_nav
                display: none
            .opportunities_image_phone
                display: none
                height: calc(225vw)        
                width: 100%
                vertical-align: top
                position: relative
                top: 0px
                img 
                    transition: 0.5s all ease
                    position: absolute
                    opacity: 0
                    z-index: 100
                    
            .opportunities_nav_phone
                padding-top: 50px
                padding-left: 7%
                display: none
                width: 93%
                vertical-align: middle
                margin-top: 200px
                h1
                    width: 100%
                p          
                    font-size: 4.3vw
                    margin-right: 30px



        .opportunities_slider_arrow_block
                position: relative
                top: 0vw
                padding-left: 57vw
                animation: 1s motionOfArrows infinite ease
        .opportunities_slider_arrow
            padding-left: 10vw
            top: 15vw
            z-index: 1110
            right: 0vw

        .opportunities_slider
            height: 160vw
            width: 100%
            position: relative
            left: 0px
            top: 00px
            overflow-x: visible //hidden
            overflow-y: hidden
            
            .company_slider_item
                padding-top: -10vw
                position: absolute
                width: 100vw
                transition: 0.5s all ease
                img
                    z-index: 100
                .company_slider_big_img
                    position: relative
                    left: -15px
                    top: 0px
                    display: inline-block
                    user-select: none
                    outline: none
                    pointer-events: none
                    padding-left: 7vw
                    width: 50vw
                .company_slider_text
                    padding-top: 15vw
                    display: inline-block
                    width: 43vw
                    vertical-align: top
                    user-select: none
                    outline: none
                    pointer-events: none
    

                h1
                    font-size: 4.38vw
                    line-height: 24px
                    color: #c34688
                    font-weight: 700
                    position: relative
                    margin: 0
                    padding: 0
                    padding-top: 7vw
                p
                    font-size: 3.28vw
                    line-height: 5.26vw
                    color: #888
                    font-weight: 300
                    width: 95%
                    vertical-align: top
                    position: relative

                .company_slider_span
                    font-size: 3.2vw
                    line-height: 5vw
                    color: #999
                    font-weight: 400
                    vertical-align: top
                    width: 30vw
                    left: 235px
                    
           
            .company_slider_1 // Спортмастер
                left: 000vw // 0px 
            .company_slider_2 // СДЭК
                left: 100vw // 630px
            .company_slider_3 // Альфа
                left: 200vw // 1260px
            .company_slider_4 // Университет Синергия
                left: 300vw //1890px
            .company_slider_5 // amoCRM
                left: 400vw // 2520px
            .company_slider_6 // yota
                left: 500vw //3150px
            .company_slider_7 // БКС Банк
                left: 600vw //3780px
            .company_slider_8 // Деловые Линии
                left: 700vw // 4410px
            .company_slider_9 // TalkBank
                left: 800vw //5040px
            .company_slider_10 // М.Видео
                left: 900vw //5670px
            .company_slider_11 // Эльдорадо
                left: 1000vw //6300px
            .company_slider_12 // Nestle
                left: 1100vw //6930px
            .company_slider_13 // AliExpress
                left: 1200vw //7560px
            .company_slider_14 // AliExpress
                left: 1300vw //8190px
            .company_slider_15 // AliExpress
                left: 1400vw //8820px
        .company_slider_arrows
            padding-left: 37.5%
            margin-top: 35px
            padding-bottom: 65px
            z-index: 100
            position: relative
            img
                cursor: pointer
                outline: none
            .company_slider_arrows_2
                margin-left: 25%







</style>




