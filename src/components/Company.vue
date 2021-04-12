<template>
    <div class="company">
        <div class="company_padding">
        <h1>{{ langTexts[langComp].company.company_h1 }}</h1>
        <h2>{{ langTexts[langComp].company.company_h2 }}</h2>
        </div>

        <div class="company_slider">
            <div class="company_slider_item company_slider_1" id="1" ref="i1">
                <picture>
                    <source srcset="../assets/client-1.webp" type="image/webp">
                    <img src="../assets/client-1.png" class="company_slider_big_img"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_1_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_1_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_1_span }}</p>
            </div>

            <div class="company_slider_item company_slider_2" id="2" ref="i2">
                <picture>
                    <source srcset="../assets/client-2.webp" type="image/webp">
                    <img src="../assets/client-2.png" class="company_slider_big_img"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_2_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_2_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_2_span }}</p>
            </div>

            <div class="company_slider_item company_slider_3" id="3" ref="i3">
                <picture>
                    <source srcset="../assets/client-3.webp" type="image/webp">
                    <img src="../assets/client-3.png" class="company_slider_big_img"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_3_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_3_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_3_span }}</p>
            </div>

            <div class="company_slider_item company_slider_4" id="4" ref="i4">
                <picture>
                    <source srcset="../assets/client-4.webp" type="image/webp">
                    <img src="../assets/client-4.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_4_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_4_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_4_span }}</p>
            </div>


            <div class="company_slider_item company_slider_5" id="5" ref="i5">
                <picture>
                    <source srcset="../assets/client-5.webp" type="image/webp">
                    <img src="../assets/client-5.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_5_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_5_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_5_span }}</p>
            </div>

            <div class="company_slider_item company_slider_6" id="6" ref="i6">
                <picture>
                    <source srcset="../assets/client-6.webp" type="image/webp">
                    <img src="../assets/client-6.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_6_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_6_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_6_span }}</p>
            </div>

            <div class="company_slider_item company_slider_7" id="7" ref="i7">
                <picture>
                    <source srcset="../assets/client-7.webp" type="image/webp">
                    <img src="../assets/client-7.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_7_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_7_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_7_span }}</p>
            </div>

            <div class="company_slider_item company_slider_8" id="8" ref="i8">
                <picture>
                    <source srcset="../assets/client-8.webp" type="image/webp">
                    <img src="../assets/client-8.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_8_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_8_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_8_span }}</p>
            </div>

            <div class="company_slider_item company_slider_9" id="9" ref="i9">
                <picture>
                    <source srcset="../assets/client-9.webp" type="image/webp">
                    <img src="../assets/client-9.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_9_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_9_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_9_span }}</p>
            </div>

            <div class="company_slider_item company_slider_10" id="10" ref="i10">
                <picture>
                    <source srcset="../assets/client-10.webp" type="image/webp">
                    <img src="../assets/client-10.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_10_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_10_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_10_span }}</p>
            </div>

            <div class="company_slider_item company_slider_11" id="11" ref="i11">
                <picture>
                    <source srcset="../assets/client-11.webp" type="image/webp">
                    <img src="../assets/client-11.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_11_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_11_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_11_span }}</p>
            </div>

            <div class="company_slider_item company_slider_12" id="12" ref="i12">
                <picture>
                    <source srcset="../assets/client-12.webp" type="image/webp">
                    <img src="../assets/client-12.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_12_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_12_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_12_span }}</p>
            </div>

            <div class="company_slider_item company_slider_13" id="13" ref="i13">
                <picture>
                    <source srcset="../assets/client-13.webp" type="image/webp">
                    <img src="../assets/client-13.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
                <h1>{{ langTexts[langComp].company.company_13_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_13_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_13_span }}</p>
            </div>
        </div>
        

        <div class="company_slider_arrows">
            <img v-if="this.i != 1" @click="clickOnSliderMinus" src="../assets/left_arrow.png" alt="">
            <img v-if="this.i == 1" src="../assets/left_arrow_passive.png" alt="">
            <img class="company_slider_arrows_2" @click="clickOnSliderPlus" src="../assets/right_arrow.png" alt="">
        </div>

        <div class="company_slider_arrows_phone">
            <img src="../assets/left_arrow.png" alt="">
            <img class="company_slider_arrows_2" src="../assets/right_arrow.png" alt="">
        </div>

        <div class="company_slider_phone">
            <div class="company_slider_item company_slider_1" id="1" ref="i14" >
                <h1>{{ langTexts[langComp].company.company_1_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_1_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_1_span }}</p>
                <picture>
                    <source srcset="../assets/client-1.webp" type="image/webp">
                    <img src="../assets/client-1.png" class="company_slider_big_img"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_2" id="2" ref="i15">
                <h1>{{ langTexts[langComp].company.company_2_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_2_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_2_span }}</p>
                <picture>
                    <source srcset="../assets/client-2.webp" type="image/webp">
                    <img src="../assets/client-2.png" class="company_slider_big_img"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_3" id="3" ref="i16" >
                <h1>{{ langTexts[langComp].company.company_3_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_3_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_3_span }}</p>
                <picture>
                    <source srcset="../assets/client-3.webp" type="image/webp">
                    <img src="../assets/client-3.png" class="company_slider_big_img"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_4" id="4" ref="i17" >
                <h1>{{ langTexts[langComp].company.company_4_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_4_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_4_span }}</p>
                <picture>
                    <source srcset="../assets/client-4.webp" type="image/webp">
                    <img src="../assets/client-4.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>


            <div class="company_slider_item company_slider_5" id="5" ref="i18" >
                <h1>{{ langTexts[langComp].company.company_5_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_5_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_5_span }}</p>
                <picture>
                    <source srcset="../assets/client-5.webp" type="image/webp">
                    <img src="../assets/client-5.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_6" id="6" ref="i19" >
                <h1>{{ langTexts[langComp].company.company_6_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_6_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_6_span }}</p>
                <picture>
                    <source srcset="../assets/client-6.webp" type="image/webp">
                    <img src="../assets/client-6.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_7" id="7" ref="i20" >
                <h1>{{ langTexts[langComp].company.company_7_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_7_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_7_span }}</p>
                <picture>
                    <source srcset="../assets/client-7.webp" type="image/webp">
                    <img src="../assets/client-7.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_8" id="8" ref="i21" >
                <h1>{{ langTexts[langComp].company.company_8_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_8_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_8_span }}</p>
                <picture>
                    <source srcset="../assets/client-8.webp" type="image/webp">
                    <img src="../assets/client-8.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_9" id="9" ref="i22" >
                <h1>{{ langTexts[langComp].company.company_9_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_9_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_9_span }}</p>
                <picture>
                    <source srcset="../assets/client-9.webp" type="image/webp">
                    <img src="../assets/client-9.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_10" id="10" ref="i23" >
                <h1>{{ langTexts[langComp].company.company_10_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_10_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_10_span }}</p>
                <picture>
                    <source srcset="../assets/client-10.webp" type="image/webp">
                    <img src="../assets/client-10.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_11" id="11" ref="i24" >
                <h1>{{ langTexts[langComp].company.company_11_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_11_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_11_span }}</p>
                <picture>
                    <source srcset="../assets/client-11.webp" type="image/webp">
                    <img src="../assets/client-11.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_12" id="12" ref="i25" >
                <h1>{{ langTexts[langComp].company.company_12_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_12_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_12_span }}</p>
                <picture>
                    <source srcset="../assets/client-12.webp" type="image/webp">
                    <img src="../assets/client-12.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>

            <div class="company_slider_item company_slider_13" id="13" ref="i26" >
                <h1>{{ langTexts[langComp].company.company_13_h1 }}<img src="../assets/check.png" alt="check"></h1>
                <p>{{ langTexts[langComp].company.company_13_p }}</p>
                <p class="company_slider_span">{{ langTexts[langComp].company.company_13_span }}</p>
                <picture>
                    <source srcset="../assets/client-13.webp" type="image/webp">
                    <img src="../assets/client-13.png" class="company_slider_big_img" loading="lazy"/>
                </picture>
            </div>
        </div>

        
        
        
        <div class="company_background_images">
            <img class="company_background_images_1" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="company_background_images_2" src="../assets/back/purpleby.png" alt="purpleby">
            <img class="company_background_images_3" src="../assets/back/bluemn.png" alt="bluemn">
            <img class="company_background_images_4" src="../assets/back/purplesn.png" alt="purplesn">
        </div>

        <div class="page_grey_lines_14">
            <img class="page_grey_line_1" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_2" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_3" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_4" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_5" src="../assets/grey_line.png" alt="grey_line">
            <img class="page_grey_line_6" src="../assets/grey_line.png" alt="grey_line">
        </div>
    </div>
</template>



<script async>
import langText from '../assets/lang.js'
export default {
    name: 'Company',
    data(){
        return{
            i: 1,
            a:'',
            company_background_images_1_x: 1,
            company_background_images_2_x: 1,
            company_background_images_3_x: 1,
            company_background_images_4_x: 1,
            langTexts: langText,
        }
    },
    methods:{
        sliderAuto(){
            if(window.innerWidth > 456){
            this.i++
            if(this.i == 2){
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
            }
            else if(this.i == 3){
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
            else if(this.i == 4){
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
            else if(this.i == 5){
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
            else if(this.i == 6){
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
            else if(this.i == 7){
                this.$refs.i6.style.left = "-630px"
                this.$refs.i7.style.left = "0px"
                this.$refs.i8.style.left = "630px"
                this.$refs.i9.style.left = "1260px"
                this.$refs.i10.style.left = "1890px"
                this.$refs.i11.style.left = "2520px"
                this.$refs.i12.style.left = "3150px"
                this.$refs.i13.style.left = "3780px"
            }
            else if(this.i == 8){
                this.$refs.i7.style.left = "-630px"
                this.$refs.i8.style.left = "0px"
                this.$refs.i9.style.left = "630px"
                this.$refs.i10.style.left = "1260px"
                this.$refs.i11.style.left = "1890px"
                this.$refs.i12.style.left = "2520px"
                this.$refs.i13.style.left = "3150px"
            }
            else if(this.i == 9){
                this.$refs.i8.style.left = "-630px"
                this.$refs.i9.style.left = "0px"
                this.$refs.i10.style.left = "630px"
                this.$refs.i11.style.left = "1260px"
                this.$refs.i12.style.left = "1890px"
                this.$refs.i13.style.left = "2520px"
            }
            else if(this.i == 10){
                this.$refs.i9.style.left = "-630px"
                this.$refs.i10.style.left = "0px"
                this.$refs.i11.style.left = "630px"
                this.$refs.i12.style.left = "1260px"
                this.$refs.i13.style.left = "1890px"
            }
            else if(this.i == 11){
                this.$refs.i10.style.left = "-630px"
                this.$refs.i11.style.left = "0px"
                this.$refs.i12.style.left = "630px"
                this.$refs.i13.style.left = "1260px"
            }
            else if(this.i == 12){
                this.$refs.i11.style.left = "-630px"
                this.$refs.i12.style.left = "0px"
                this.$refs.i13.style.left = "630px"
                this.$refs.i1.style.left = "1260px"
            }
            else if(this.i == 13){
                this.$refs.i12.style.left = "-630px"
                this.$refs.i13.style.left = "0px"
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
            }
            else if(this.i == 14){
                this.$refs.i13.style.left = "-630px"
                this.$refs.i1.style.left = "0px"
                this.$refs.i2.style.left = "630px"

                this.$refs.i13.style.left = "7560px"
            }
            if(this.i == 14){
                this.i = 1
            }
            }



            /*
            else{
                this.i++
            if(this.i == 2){
                this.$refs.i14.style.left = "-630px"
                this.$refs.i15.style.left = "0px"
                this.$refs.i16.style.left = "630px"
                this.$refs.i17.style.left = "1260px"
                this.$refs.i18.style.left = "1890px"
                this.$refs.i19.style.left = "2520px"
                this.$refs.i20.style.left = "3150px"
                this.$refs.i21.style.left = "3780px"
                this.$refs.i22.style.left = "4410px"
                this.$refs.i23.style.left = "5040px"
                this.$refs.i24.style.left = "5670px"
                this.$refs.i25.style.left = "6300px"
                this.$refs.i26.style.left = "6930px"
            }
            else if(this.i == 3){
                this.$refs.i15.style.left = "-630px"
                this.$refs.i16.style.left = "0px"
                this.$refs.i17.style.left = "630px"
                this.$refs.i18.style.left = "1260px"
                this.$refs.i19.style.left = "1890px"
                this.$refs.i20.style.left = "2520px"
                this.$refs.i21.style.left = "3150px"
                this.$refs.i22.style.left = "3780px"
                this.$refs.i23.style.left = "4410px"
                this.$refs.i24.style.left = "5040px"
                this.$refs.i25.style.left = "5670px"
                this.$refs.i26.style.left = "6300px"
            }
            else if(this.i == 4){
                this.$refs.i16.style.left = "-630px"
                this.$refs.i17.style.left = "0px"
                this.$refs.i18.style.left = "630px"
                this.$refs.i19.style.left = "1260px"
                this.$refs.i20.style.left = "1890px"
                this.$refs.i21.style.left = "2520px"
                this.$refs.i22.style.left = "3150px"
                this.$refs.i23.style.left = "3780px"
                this.$refs.i24.style.left = "4410px"
                this.$refs.i25.style.left = "5040px"
                this.$refs.i26.style.left = "5670px"
            }
            else if(this.i == 5){
                this.$refs.i17.style.left = "-630px"
                this.$refs.i18.style.left = "0px"
                this.$refs.i19.style.left = "630px"
                this.$refs.i20.style.left = "1260px"
                this.$refs.i21.style.left = "1890px"
                this.$refs.i22.style.left = "2520px"
                this.$refs.i23.style.left = "3150px"
                this.$refs.i24.style.left = "3780px"
                this.$refs.i25.style.left = "4410px"
                this.$refs.i26.style.left = "5040px"
            }
            else if(this.i == 6){
                this.$refs.i18.style.left = "-630px"
                this.$refs.i19.style.left = "0px"
                this.$refs.i20.style.left = "630px"
                this.$refs.i21.style.left = "1260px"
                this.$refs.i22.style.left = "1890px"
                this.$refs.i23.style.left = "2520px"
                this.$refs.i24.style.left = "3150px"
                this.$refs.i25.style.left = "3780px"
                this.$refs.i26.style.left = "4410px"
            }
            else if(this.i == 7){
                this.$refs.i19.style.left = "-630px"
                this.$refs.i20.style.left = "0px"
                this.$refs.i21.style.left = "630px"
                this.$refs.i22.style.left = "1260px"
                this.$refs.i23.style.left = "1890px"
                this.$refs.i24.style.left = "2520px"
                this.$refs.i25.style.left = "3150px"
                this.$refs.i26.style.left = "3780px"
            }
            else if(this.i == 8){
                this.$refs.i20.style.left = "-630px"
                this.$refs.i21.style.left = "0px"
                this.$refs.i22.style.left = "630px"
                this.$refs.i23.style.left = "1260px"
                this.$refs.i24.style.left = "1890px"
                this.$refs.i25.style.left = "2520px"
                this.$refs.i26.style.left = "3150px"
            }
            else if(this.i == 9){
                this.$refs.i21.style.left = "-630px"
                this.$refs.i22.style.left = "0px"
                this.$refs.i23.style.left = "630px"
                this.$refs.i24.style.left = "1260px"
                this.$refs.i25.style.left = "1890px"
                this.$refs.i26.style.left = "2520px"
            }
            else if(this.i == 10){
                this.$refs.i22.style.left = "-630px"
                this.$refs.i23.style.left = "0px"
                this.$refs.i24.style.left = "630px"
                this.$refs.i25.style.left = "1260px"
                this.$refs.i26.style.left = "1890px"
            }
            else if(this.i == 11){
                this.$refs.i23.style.left = "-630px"
                this.$refs.i24.style.left = "0px"
                this.$refs.i25.style.left = "630px"
                this.$refs.i26.style.left = "1260px"
            }
            else if(this.i == 12){
                this.$refs.i24.style.left = "-630px"
                this.$refs.i25.style.left = "0px"
                this.$refs.i26.style.left = "630px"
                this.$refs.i14.style.left = "1260px"
            }
            else if(this.i == 13){
                this.$refs.i25.style.left = "-630px"
                this.$refs.i26.style.left = "0px"
                this.$refs.i14.style.left = "630px"



                this.$refs.i15.style.left = "1260px"
                this.$refs.i16.style.left = "1890px"
                this.$refs.i17.style.left = "2520px"
                this.$refs.i18.style.left = "3150px"
                this.$refs.i19.style.left = "3780px"
                this.$refs.i20.style.left = "4410px"
                this.$refs.i21.style.left = "5040px"
                this.$refs.i22.style.left = "5670px"
                this.$refs.i23.style.left = "6300px"
                this.$refs.i24.style.left = "6930px"
                this.$refs.i25.style.left = "7560px"
            }
            else if(this.i == 14){
                this.$refs.i26.style.left = "-630px"
                this.$refs.i14.style.left = "0px"
                this.$refs.i15.style.left = "630px"

                this.$refs.i26.style.left = "7560px"
            }
            if(this.i == 14){
                this.i = 1
            }
            }
            */
            
        },
        clickOnSliderPlus(){
            if(window.innerWidth > 456){
            clearInterval(this.a)
            this.a = this.sliderAuto()
            }
        },
        clickOnSliderMinus(){
            if(window.innerWidth > 456){
            this.i--
            if(this.i == 1){
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
                this.$refs.i13.style.left = "6930px"
            }
            else if(this.i == 2){
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
            else if(this.i == 3){
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
            else if(this.i == 4){
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
            else if(this.i == 5){
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
            else if(this.i == 6){
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
            else if(this.i == 7){
                this.$refs.i6.style.left = "-630px"
                this.$refs.i7.style.left = "0px"
                this.$refs.i8.style.left = "630px"
                this.$refs.i9.style.left = "1260px"
                this.$refs.i10.style.left = "1890px"
                this.$refs.i11.style.left = "2520px"
                this.$refs.i12.style.left = "3150px"
                this.$refs.i13.style.left = "3780px"
            }
            else if(this.i == 8){
                this.$refs.i7.style.left = "-630px"
                this.$refs.i8.style.left = "0px"
                this.$refs.i9.style.left = "630px"
                this.$refs.i10.style.left = "1260px"
                this.$refs.i11.style.left = "1890px"
                this.$refs.i12.style.left = "2520px"
                this.$refs.i13.style.left = "3150px"
            }
            else if(this.i == 9){
                this.$refs.i8.style.left = "-630px"
                this.$refs.i9.style.left = "0px"
                this.$refs.i10.style.left = "630px"
                this.$refs.i11.style.left = "1260px"
                this.$refs.i12.style.left = "1890px"
                this.$refs.i13.style.left = "2520px"
            }
            else if(this.i == 10){
                this.$refs.i9.style.left = "-630px"
                this.$refs.i10.style.left = "0px"
                this.$refs.i11.style.left = "630px"
                this.$refs.i12.style.left = "1260px"
                this.$refs.i13.style.left = "1890px"
            }
            else if(this.i == 11){
                this.$refs.i10.style.left = "-630px"
                this.$refs.i11.style.left = "0px"
                this.$refs.i12.style.left = "630px"
                this.$refs.i13.style.left = "1260px"
            }
            else if(this.i == 12){
                this.$refs.i11.style.left = "-630px"
                this.$refs.i12.style.left = "0px"
                this.$refs.i13.style.left = "630px"
                this.$refs.i1.style.left = "1260px"
            }
            else if(this.i == 13){
                this.$refs.i12.style.left = "-630px"
                this.$refs.i13.style.left = "0px"
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
            }
            else if(this.i == 14){
                this.$refs.i13.style.left = "-630px"
                this.$refs.i1.style.left = "0px"
                this.$refs.i2.style.left = "630px"

  

                this.$refs.i13.style.left = "7560px"
            }
            }
            else{
                this.i--
            if(this.i == 1){
                this.$refs.i14.style.left = "0px"
                this.$refs.i15.style.left = "630px"
                this.$refs.i16.style.left = "1260px"
                this.$refs.i17.style.left = "1890px"
                this.$refs.i18.style.left = "1890px"
                this.$refs.i19.style.left = "2520px"
                this.$refs.i20.style.left = "3150px"
                this.$refs.i21.style.left = "3780px"
                this.$refs.i22.style.left = "4410px"
                this.$refs.i23.style.left = "5040px"
                this.$refs.i24.style.left = "5670px"
                this.$refs.i25.style.left = "6300px"
                this.$refs.i26.style.left = "6930px"
            }
            else if(this.i == 2){
                this.$refs.i14.style.left = "-630px"
                this.$refs.i15.style.left = "0"
                this.$refs.i16.style.left = "630px"
                this.$refs.i17.style.left = "1260px"
                this.$refs.i18.style.left = "1890px"
                this.$refs.i19.style.left = "1890px"
                this.$refs.i19.style.left = "2520px"
                this.$refs.i20.style.left = "3150px"
                this.$refs.i21.style.left = "3780px"
                this.$refs.i22.style.left = "4410px"
                this.$refs.i23.style.left = "5040px"
                this.$refs.i24.style.left = "5670px"
                this.$refs.i25.style.left = "6300px"
                this.$refs.i26.style.left = "6930px"
            }
            else if(this.i == 3){
                this.$refs.i15.style.left = "-630px"
                this.$refs.i16.style.left = "0px"
                this.$refs.i17.style.left = "630px"
                this.$refs.i18.style.left = "1260px"
                this.$refs.i19.style.left = "1890px"
                this.$refs.i20.style.left = "2520px"
                this.$refs.i21.style.left = "3150px"
                this.$refs.i22.style.left = "3780px"
                this.$refs.i23.style.left = "4410px"
                this.$refs.i24.style.left = "5040px"
                this.$refs.i25.style.left = "5670px"
                this.$refs.i26.style.left = "6300px"
            }
            else if(this.i == 4){
                this.$refs.i16.style.left = "-630px"
                this.$refs.i17.style.left = "0px"
                this.$refs.i18.style.left = "630px"
                this.$refs.i19.style.left = "1260px"
                this.$refs.i20.style.left = "1890px"
                this.$refs.i21.style.left = "2520px"
                this.$refs.i22.style.left = "3150px"
                this.$refs.i23.style.left = "3780px"
                this.$refs.i24.style.left = "4410px"
                this.$refs.i25.style.left = "5040px"
                this.$refs.i26.style.left = "5670px"
            }
            else if(this.i == 5){
                this.$refs.i17.style.left = "-630px"
                this.$refs.i18.style.left = "0px"
                this.$refs.i19.style.left = "630px"
                this.$refs.i20.style.left = "1260px"
                this.$refs.i21.style.left = "1890px"
                this.$refs.i22.style.left = "2520px"
                this.$refs.i23.style.left = "3150px"
                this.$refs.i24.style.left = "3780px"
                this.$refs.i25.style.left = "4410px"
                this.$refs.i26.style.left = "5040px"
            }
            else if(this.i == 6){
                this.$refs.i18.style.left = "-630px"
                this.$refs.i19.style.left = "0px"
                this.$refs.i20.style.left = "630px"
                this.$refs.i21.style.left = "1260px"
                this.$refs.i22.style.left = "1890px"
                this.$refs.i23.style.left = "2520px"
                this.$refs.i24.style.left = "3150px"
                this.$refs.i25.style.left = "3780px"
                this.$refs.i26.style.left = "4410px"
            }
            else if(this.i == 7){
                this.$refs.i19.style.left = "-630px"
                this.$refs.i20.style.left = "0px"
                this.$refs.i21.style.left = "630px"
                this.$refs.i22.style.left = "1260px"
                this.$refs.i23.style.left = "1890px"
                this.$refs.i24.style.left = "2520px"
                this.$refs.i25.style.left = "3150px"
                this.$refs.i26.style.left = "3780px"
            }
            else if(this.i == 8){
                this.$refs.i20.style.left = "-630px"
                this.$refs.i21.style.left = "0px"
                this.$refs.i22.style.left = "630px"
                this.$refs.i23.style.left = "1260px"
                this.$refs.i24.style.left = "1890px"
                this.$refs.i25.style.left = "2520px"
                this.$refs.i26.style.left = "3150px"
            }
            else if(this.i == 9){
                this.$refs.i21.style.left = "-630px"
                this.$refs.i22.style.left = "0px"
                this.$refs.i23.style.left = "630px"
                this.$refs.i24.style.left = "1260px"
                this.$refs.i25.style.left = "1890px"
                this.$refs.i26.style.left = "2520px"
            }
            else if(this.i == 10){
                this.$refs.i22.style.left = "-630px"
                this.$refs.i23.style.left = "0px"
                this.$refs.i24.style.left = "630px"
                this.$refs.i25.style.left = "1260px"
                this.$refs.i26.style.left = "1890px"
            }
            else if(this.i == 11){
                this.$refs.i23.style.left = "-630px"
                this.$refs.i24.style.left = "0px"
                this.$refs.i25.style.left = "630px"
                this.$refs.i26.style.left = "1260px"
            }
            else if(this.i == 12){
                this.$refs.i24.style.left = "-630px"
                this.$refs.i25.style.left = "0px"
                this.$refs.i26.style.left = "630px"
                this.$refs.i14.style.left = "1260px"
            }
            else if(this.i == 13){
                this.$refs.i25.style.left = "-630px"
                this.$refs.i26.style.left = "0px"
                this.$refs.i14.style.left = "630px"


                this.$refs.i15.style.left = "1260px"
                this.$refs.i16.style.left = "1890px"
                this.$refs.i17.style.left = "2520px"
                this.$refs.i18.style.left = "3150px"
                this.$refs.i19.style.left = "3780px"
                this.$refs.i20.style.left = "4410px"
                this.$refs.i21.style.left = "5040px"
                this.$refs.i22.style.left = "5670px"
                this.$refs.i23.style.left = "6300px"
                this.$refs.i24.style.left = "6930px"
                this.$refs.i25.style.left = "7560px"
            }
            else if(this.i == 14){
                this.$refs.i26.style.left = "-630px"
                this.$refs.i14.style.left = "0px"
                this.$refs.i15.style.left = "630px"
                this.$refs.i26.style.left = "7560px"
            }
            }
            
        },
        longClick(){
            clearInterval(this.a)
            setTimeout(()=> this.a = setInterval(this.sliderAuto, 5000), 5000)
        },
        onMouseUpdate(e){
            if(window.innerWidth > 456){
            let x = e.pageX / window.innerWidth * 20
            document.querySelector(".company_background_images_1").style.left = (this.company_background_images_1_x + x).toString() + 'px'
            document.querySelector(".company_background_images_2").style.left = (this.company_background_images_2_x + x).toString() + 'px'
            document.querySelector(".company_background_images_3").style.left = (this.company_background_images_3_x + x).toString() + 'px'
            document.querySelector(".company_background_images_4").style.left = (this.company_background_images_4_x + x).toString() + 'px'
        
            }
            
        }
    },
    computed:{
        langComp(){
            return this.$store.state.lang
        }
    },
    mounted(){
        if(window.innerWidth > 456){
        this.a = setInterval(this.sliderAuto, 5000)
        document.addEventListener('mousemove', this.onMouseUpdate)
        this.company_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".company_background_images_1")).left).substring(0, (window.getComputedStyle(document.querySelector(".company_background_images_1")).left).length - 2))
        this.company_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".company_background_images_2")).left).substring(0, (window.getComputedStyle(document.querySelector(".company_background_images_2")).left).length - 2))
        this.company_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".company_background_images_3")).left).substring(0, (window.getComputedStyle(document.querySelector(".company_background_images_3")).left).length - 2))
        this.company_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".company_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".company_background_images_4")).left).length - 2))
        }
    }
}
</script>

<style lang="sass">
//vue2-touch-events
@keyframes motionOfArrows 
    0%
        left: -3vw
    50%
        left: 3vw
    100%
        left: -3vw
@media screen and (min-width: 456px)
    .page_grey_lines_14
        display: none
        img
            position: absolute
            height: 100%
            width: 1px
            top: 0px
            z-index: 99
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
    .company
        background-color: white
        width: 100%
        position: relative
        left: calc((100vw - 1200px) / -2)
        padding: 0 calc((100vw - 1200px) / 2)
        top: 0px
        padding-top: 17px
        height: 670px
        h1
            font-size: 30px
            width: 100%
            line-height: 42px
            font-weight: 700
            color: #370954
            padding-bottom: 0px
            margin-bottom: 15px
            display: inline
        h2
            font-size: 20px
            color: #370954
            font-weight: 500
            display: inline
            width: 100%
            margin: 0
            margin-bottom: 30px
        .company_slider_phone, .company_slider_arrows_phone
            display: none
        .company_slider
            height: 540px
            width: 1260px
            position: relative
            left: -30px
            top: 28px
            overflow-x: hidden 
            overflow-y: hidden

            
            .company_slider_item
                position: absolute
                width: 650px
                transition: 0.5s all ease
                .company_slider_big_img
                    position: relative
                    left: -15px
                    top: 0px
                    z-index: 98
                
                
                h1
                    font-size: 20px
                    line-height: 24px
                    color: #370954
                    font-weight: 700
                    position: relative
                    left: -108px
                    top: 54px
                img
                    vertical-align: top
                    margin-left: 10px
                    position: relative
                    top: 5px
                    user-select: none
                p
                    font-size: 16px
                    line-height: 24px
                    color: #222
                    font-weight: 400
                    vertical-align: top
                    width: 320px
                    position: relative
                    top: -450px
                    left: 270px

                .company_slider_span
                    font-size: 16px
                    line-height: 24px
                    color: #999
                    font-weight: 400
                    vertical-align: top
                    width: 200px
                    left: 370px
                    
           
            .company_slider_1 // Спортмастер
                left:  0px
            .company_slider_2 //
                left: 630px
            .company_slider_3 //
                left:  1260px
            .company_slider_4 //
                left: 1890px
            .company_slider_5 //
                left: 2520px
            .company_slider_6 //yota
                left: 3150px
                p
                    top: -430px
            .company_slider_7
                left: 3780px
            .company_slider_8
                left: 4410px
                p
                    top: -430px
            .company_slider_9
                left: 5040px
            .company_slider_10
                left: 5670px
                p
                    top: -430px
            .company_slider_11
                left: 6300px
                p
                    top: -430px
            .company_slider_12
                left: 6930px
                h1
                    left: -8px
                    top: 54px
       
                p
                    top: -420px
                    left: 270px

                .company_slider_span
                    left: 270px
                    width: 320px
            .company_slider_13
                left: 7560px
                h1
                    left: -8px
                    top: 54px
    
                p
                    top: -420px
                    left: 270px

                .company_slider_span
                    left: 270px
                    width: 320px
        .company_slider_arrows
            padding-left: 45%
            margin-top: 25px
            user-select: none
            img
                cursor: pointer
                //width: 13px
                outline: none
            .company_slider_arrows_2
                margin-left: 10%
        .company_background_images
            user-select: none
            position: absolute
            height: 0px
            img
                position: relative
            .company_background_images_1
                position: absolute
                left: 1160px
                top: -140px
                z-index: 3
            .company_background_images_2
                position: absolute
                left: 1190px
                top: -130px
            .company_background_images_3
                top: -240px
                left: 605px
                z-index: 4
            .company_background_images_4
                left: 950px
                top: -730px


        
    
    
    
    
    
    
@media screen and (max-width: 456px)
    .page_grey_lines_14
        display: block
        img
            position: absolute
            height: 100%
            width: 1px
            top: 0px
            z-index: 99
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
    .company
        background-color: white
        width: 100%
        position: relative
        top: 0px
        padding-top: 20px
        height: 190vw
        .company_padding
            margin-left: 7vw
        h1
            width: 95vw
            font-size: 7vw
            line-height: 9.6vw
            font-weight: 700
            color: #370954
            padding-bottom: 0px
            margin-bottom: 5px
            display: inline
        h2
            font-size: 4.58vw
            line-height: 7.6vw
            color: #370954
            font-weight: 500
            display: inline
            margin: 0
            margin-bottom: 30px
        .company_slider, .company_slider_arrows
            display: none
        .company_slider_phone
            height: 650px
            width: 100%
            position: relative
            left: 0px
            top: -8vw
            overflow-x: scroll  //hidden
            overflow-y: hidden

            
            .company_slider_item
                position: absolute
                width: 100vw
                top: 20px
                transition: 0.5s all ease
                .company_slider_big_img
                    position: relative
                    left: -17px
                    top: -75px
                    width: 82vw
                    z-index: 98
                    user-select: none
                    outline: none
                    pointer-events: none
                
                h1
                    font-size: 4.38vw
                    line-height: 5.26vw
                    color: #370954
                    font-weight: 700
                    position: absolute
                    left: 7vw
                    top: 7px
                    user-select: none
                    outline: none
                    pointer-events: none
                img
                    margin-left: 10px
                    position: relative
                    top: 4px
                p
                    font-size: 3.5vw
                    line-height: 5.26vw
                    color: #222
                    font-weight: 400
                    vertical-align: top
                    width: 90vw
                    position: relative
                    left: 7vw
                    top: 40px
                    user-select: none
                    outline: none
                    pointer-events: none

                .company_slider_span
                    font-size: 3.5vw
                    line-height: 5.26vw
                    color: #999
                    font-weight: 400
                    width: 39vw
                    left: 60vw
                    top: 25px
                    padding-top: 20px
                    user-select: none
                    outline: none
                    pointer-events: none
                    
           
            .company_slider_1 // Спортмастер
                left: 0vw //0px
            .company_slider_2 // СДЭК
                left: 100vw //630px
            .company_slider_3 // Альфа
                left: 200vw //1260px
            .company_slider_4 // Университет Синергия
                left: 300vw //1890px
                .company_slider_big_img
                    top: -100px
            .company_slider_5 // amoCRM
                left: 400vw //2520px
            .company_slider_6 // yota
                left: 500vw //3150px
            .company_slider_7 // БКС Банк
                left: 600vw //3780px
            .company_slider_8 // Деловые Линии
                left: 700vw //4410px
            .company_slider_9 // TalkBank
                left: 800vw //5040px
            .company_slider_10 // М.Видео
                left: 900vw //5670px
            .company_slider_11 // Эльдорадо
                left: 1000vw //6300px
            .company_slider_12 // Nestle
                left: 1100vw //6930px
                .company_slider_big_img
                    top: -70px
                    width: 60vw
            .company_slider_13 // AliExpress
                left: 1200vw //7560px
                .company_slider_big_img
                    top: -100px
                    width: 60vw













        .company_slider_arrows_phone
            padding-left: 60vw
            margin-top: 0px
            padding-bottom: 0px
            z-index: 100
            position: relative
            top: -10px
            //animation: motionOfArrows 1s infinite
            img
                cursor: pointer
                outline: none
            .company_slider_arrows_2
                margin-left: 10vw

        .company_background_images
            user-select: none
            outline: none
            pointer-events: none
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .company_background_images_1
                display: block
                position: absolute
                top: -275px
                right: 3vw
            .company_background_images_2
                left: -125px
                z-index: 3
                top: -240px
            .company_background_images_3
                display: block
                position: relative
                top: -40px
                left: 10vw
            .company_background_images_4
                display: block
                position: absolute
                right: 15vw
                top: -315px
@media screen and (max-width: 375px)
    .company
        height: 196vw           
        .company_slider_arrows_phone
            top: -10px






      
@media screen and (max-width: 355px)
    .company
        .company_background_images
            user-select: none
            outline: none
            pointer-events: none
            position: absolute
            width: 100%
            height: 0px
            img
                position: relative
                display: none
            .company_background_images_1
                display: block
                position: absolute
                top: -275px
                right: 3vw
            .company_background_images_2
                left: -125px
                z-index: 3
                top: -240px
            .company_background_images_3
                display: block
                position: relative
                top: -100px
                left: 10vw
            .company_background_images_4
                display: block
                position: absolute
                right: 15vw
                top: -315px

</style>