<template>
    <div class="setting" id="quiz">
        <h1 class="setting_header">{{ langTexts[langComp].setting.setting_h1 }}</h1>
        <h1 class="setting_header_2">{{ langTexts[langComp].setting.setting_h2 }}</h1>

        <div class="setting_quiz" ref="header">
            <div class="setting_quiz_part" id="1" ref="1" v-if="this.i == 1">
                <h1>{{ langTexts[langComp].setting.setting_step }} {{ this.i }}<strong> {{ langTexts[langComp].setting.setting_ready }}: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>

                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>{{ langTexts[langComp].setting.setting_1_h2 }}</h2>
                <h3>{{ langTexts[langComp].setting.setting_1_h3 }}</h3>



                <div class="setting_quiz_icons setting_quiz_icons_12">
                    <div class="setting_quiz_icons_1">
                        <span>{{ Math.round(info.program_cost.GS * info.yearly_discount) }}₽</span>
                        <img @click="closeWhatsApp" v-if="checkWhatsApp" src="../assets/quiz/whatsapp.png" alt="whatsapp">
                        <img @click="clickWhatsApp" v-if="!checkWhatsApp" src="../assets/quiz/whatsapp3.png" alt="whatsapp">
                        <p>WhatsApp</p>
                    </div>

                    <div class="setting_quiz_icons_2">
                        <span>{{ Math.round(info.program_cost.TL * info.yearly_discount) }}₽</span>
                        <img @click="closeTelegram" v-if="checkTelegram" src="../assets/quiz/telegram.png" alt="Telegram">
                        <img @click="clickTelegram" v-if="!checkTelegram" src="../assets/quiz/telegram3.png" alt="Telegram">
                        <p>Telegram</p>
                    </div>

                    <div class="setting_quiz_icons_3">
                        <span>{{ Math.round(info.program_cost.VB * info.yearly_discount) }}₽</span>
                        <img @click="closeViber" v-if="checkViber" src="../assets/quiz/viber.png" alt="Viber">
                        <img @click="clickViber" v-if="!checkViber" src="../assets/quiz/viber3.png" alt="Viber">
                        <p>Viber</p>
                    </div>

                    <div class="setting_quiz_icons_4">
                        <span>{{ Math.round(info.program_cost.VK * info.yearly_discount) }}₽</span>
                        <img @click="closeVk" v-if="checkVk" src="../assets/quiz/vk.png" alt="Vkontakte">
                        <img @click="clickVk" v-if="!checkVk" src="../assets/quiz/vk3.png" alt="Vkontakte">
                        <p>Vkontakte</p>
                    </div>
                </div>


                <div class="setting_quiz_back" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>{{ langTexts[langComp].setting.setting_back }}</span>
                </div>

                <div class="setting_quiz_after" @click="i++">
                    <button ref="after1">{{ langTexts[langComp].setting.setting_after }}</button>
                    <p>{{ langTexts[langComp].setting.setting_after_span }} <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="2" ref="2" v-show="this.i == 2">
                <h1>{{ langTexts[langComp].setting.setting_step }} {{ this.i }}<strong class="setting_quiz_part_strong"> {{ langTexts[langComp].setting.setting_ready }}: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>{{ langTexts[langComp].setting.setting_2_h2 }}</h2>
                <h3>{{ langTexts[langComp].setting.setting_2_h3 }}</h3>

                <div class="setting_quiz_icons setting_quiz_icons_12">
                    <div class="setting_quiz_icons_5">
                        <span>{{ Math.round(info.chat_cost * info.yearly_discount) }}₽</span>
                        <img @click="closeChat" v-if="checkChat" src="../assets/quiz/chat.png" alt="chat">
                        <img @click="clickChat" v-if="!checkChat" src="../assets/quiz/chat3.png" alt="chat">
                        <p>{{ langTexts[langComp].setting.setting_2_1_p }}</p>
                    </div>

                    <div class="setting_quiz_icons_6">
                        <span>{{  Math.round(info.write_first_cost * info.yearly_discount) }}₽</span>
                        <img @click="closeWrite" v-if="checkWrite" src="../assets/quiz/question.png" alt="question">
                        <img @click="clickWrite" v-if="!checkWrite && checkWhatsApp" src="../assets/quiz/question3.png" alt="question">
                        <img v-if="!checkWrite && !checkWhatsApp" src="../assets/quiz/question3.png" alt="question">
                        <p>{{ langTexts[langComp].setting.setting_2_2_p }}</p>
                    </div>

                    <div class="setting_quiz_icons_7">
                        <span>{{ Math.round(info.op_cost * info.yearly_discount) }}₽</span>
                        <strong class="setting_quiz_minus" @click="clickOperatorMinus" ref="minus">-</strong>
                        <strong class="setting_quiz_operator"><strong ref="operator">{{ operators }}</strong></strong>
                        <strong class="setting_quiz_plus" @click="clickOperatorPlus" ref="plus">+</strong>
                        <p>{{ langTexts[langComp].setting.setting_2_3_p }}</p>
                    </div>
                </div>


                <div class="setting_quiz_back" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>{{ langTexts[langComp].setting.setting_back }}</span>
                </div>

                <div class="setting_quiz_after" @click="i++">
                    <button ref="after2">{{ langTexts[langComp].setting.setting_after }}</button>
                    <p>{{ langTexts[langComp].setting.setting_after_span }} <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="3" ref="3" v-if="this.i == 3">
                <h1>{{ langTexts[langComp].setting.setting_step }} {{ this.i }}<strong class="setting_quiz_part_strong"> {{ langTexts[langComp].setting.setting_ready }}: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>{{ langTexts[langComp].setting.setting_3_h2 }}</h2>
                <h3>{{ langTexts[langComp].setting.setting_2_h3 }}</h3>

                <div class="setting_quiz_icons setting_quiz_icons_11">
                    <div class="setting_quiz_icons_8">
                        <span>{{ Math.round(info.deferred_exec * info.yearly_discount) }}₽</span>
                        <img @click="closeEditor" v-if="checkEditor" src="../assets/quiz/editor.png" alt="editor">
                        <img @click="clickEditor" v-if="!checkEditor" src="../assets/quiz/editor3.png" alt="editor">
                        <p>{{ langTexts[langComp].setting.setting_3_1_p }}</p>
                    </div>

                    <div class="setting_quiz_icons_9">
                        <span>{{ Math.round(info.deferred_exec * info.yearly_discount) }}₽</span>
                        <img @click="closeFunnel" v-if="checkFunnel" src="../assets/quiz/funnel.png" alt="funnel">
                        <img @click="clickFunnel" v-if="!checkFunnel" src="../assets/quiz/funnel3.png" alt="funnel">
                        <p>{{ langTexts[langComp].setting.setting_3_2_p }}</p>
                    </div>
                </div>


                <div class="setting_quiz_back setting_quiz_back_1" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>{{ langTexts[langComp].setting.setting_back }}</span>
                </div>

                <div class="setting_quiz_after setting_quiz_after_1" @click="i++">
                    <button ref="after3">{{ langTexts[langComp].setting.setting_after }}</button>
                    <p>{{ langTexts[langComp].setting.setting_after_span }} <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="4" ref="4" v-if="this.i == 4">
                <h1>{{ langTexts[langComp].setting.setting_step }} {{ this.i }}<strong class="setting_quiz_part_strong"> {{ langTexts[langComp].setting.setting_ready }}: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>{{ langTexts[langComp].setting.setting_4_h2 }}</h2>
                <h3>{{ langTexts[langComp].setting.setting_2_h3 }}</h3>

                <div class="setting_quiz_icons">
                    <div class="setting_quiz_icons_8">
                        <span>{{ Math.round(info.crm * info.yearly_discount) }}₽</span>
                        <img @click="closeBitrix" v-if="checkBitrix" src="../assets/quiz/bitrix.png" alt="bitrix">
                        <img @click="clickBitrix" v-if="!checkBitrix" src="../assets/quiz/bitrix3.png" alt="bitrix">
                        <p>Bitrix24</p>
                    </div>

                    <div class="setting_quiz_icons_9">
                        <span>{{ Math.round(info.crm * info.yearly_discount) }}₽</span>
                        <img @click="closeCrm" v-if="checkCrm" src="../assets/quiz/amo.png" alt="amo">
                        <img @click="clickCrm" v-if="!checkCrm" src="../assets/quiz/amo3.png" alt="amo">
                        <p>amoCRM</p>
                    </div>
                </div>


                <div class="setting_quiz_back" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>{{ langTexts[langComp].setting.setting_back }}</span>
                </div>

                <div class="setting_quiz_after" @click="i++">
                    <button ref="after4">{{ langTexts[langComp].setting.setting_after }}</button>
                    <p>{{ langTexts[langComp].setting.setting_after_span }} <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="5" ref="5" v-if="this.i == 5">
                <h1>{{ langTexts[langComp].setting.setting_step }} {{ this.i }}<strong class="setting_quiz_part_strong"> {{ langTexts[langComp].setting.setting_ready }}: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>{{ langTexts[langComp].setting.setting_5_h2 }}</h2>
                <h3>{{ langTexts[langComp].setting.setting_2_h3 }}</h3>

                <div class="setting_quiz_icons setting_quiz_icons_11 setting_quiz_icons_12">
                    <div class="setting_quiz_icons_10">
                        <span>{{ Math.round(info.mailing * info.yearly_discount) }}₽</span>
                        <img @click="closeMailing" v-if="checkMail" src="../assets/quiz/mail.png" alt="mail">
                        <img @click="clickMailing" v-if="!checkMail" src="../assets/quiz/mail3.png" alt="mail">
                        <p>{{ langTexts[langComp].setting.setting_5_1_p }}</p>
                    </div>
                </div>


                <div class="setting_quiz_back setting_quiz_back_1" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>{{ langTexts[langComp].setting.setting_back }}</span>
                </div>

                <div class="setting_quiz_after setting_quiz_after_1" @click="i++">
                    <button ref="after5">{{ langTexts[langComp].setting.setting_after }}</button>
                    <p>{{ langTexts[langComp].setting.setting_after_span }} <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="6" ref="6" v-if="this.i == 6">
                <h1>{{ langTexts[langComp].setting.setting_phinish }}<strong class="setting_quiz_part_strong_2"> {{ langTexts[langComp].setting.setting_ready }}: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>{{ langTexts[langComp].setting.setting_6_h2 }}</h2>
       

                <div class="setting_quiz_back setting_quiz_back_2" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>{{ langTexts[langComp].setting.setting_back }}</span>
                </div>
            </div>






    

            <div class="setting_quiz_result" id="result">
                <h1>{{ langTexts[langComp].setting.setting_result_h1 }}: <span>{{ totalOfYear }}</span> <strong><span>0</span> ₽ {{ langTexts[langComp].setting.setting_result_h1_span }}</strong></h1>

                <picture>
                    <source srcset="../assets/img-10-tarif.webp" type="image/webp">
                    <img src="../assets/img-10-tarif.png" />
                </picture>

                <div class="setting_quiz_result_info">
                    <h2>{{ langTexts[langComp].setting.setting_result_h2 }} <span>{{ langTexts[langComp].setting.setting_result_h2_span }}</span></h2>
                    <p>{{ langTexts[langComp].setting.setting_result_p }}</p>
                </div>
                <button class="button_clicked" @click="openPopup" v-if="i == 6">{{ langTexts[langComp].setting.setting_result_btn }}</button>
                <button @click="clickMotion" v-if="i < 6">{{ langTexts[langComp].setting.setting_result_btn }}</button>
                <p class="setting_quiz_result_dop_info">{{ langTexts[langComp].setting.setting_result_btn_span }}</p>
            </div>

            <div class="setting_quiz_popup" id="popup">
                <h1>{{ langTexts[langComp].setting.setting_popup_h1 }}</h1>
                <p class="setting_quiz_popup_p">{{ langTexts[langComp].setting.setting_popup_p1 }}</p>
                <a href="https://marketbot.biz/935" target="_blank"><button>{{ langTexts[langComp].setting.setting_popup_btn }}</button></a>
                <p class="setting_quiz_popup_p">{{ langTexts[langComp].setting.setting_popup_p2 }}</p>
                <img src="../assets/qr.png" alt="qr">
                <p class="setting_quiz_popup_bottom">{{ langTexts[langComp].setting.setting_popup_p3 }}<a href="https://marketbot.biz/oferta.html" target="_blank">{{ langTexts[langComp].setting.setting_popup_p3_span_1 }}</a> {{ langTexts[langComp].setting.setting_popup_p3_span_3 }} <a href="https://marketbot.biz/oferta.html" target="_blank">{{ langTexts[langComp].setting.setting_popup_p3_span_2 }}</a></p>
            </div>

        </div>

        <div class="setting_background_images">
            <img class="setting_background_images_1" src="../assets/back/telegram_back.png" alt="telegram_back">
            <img class="setting_background_images_2" src="../assets/back/greenmn.png" alt="greenmn">
            <img class="setting_background_images_3" src="../assets/back/lightbluemy.png" alt="lightbluemy">
            <img class="setting_background_images_4" src="../assets/back/purplesn.png" alt="purplesn">
            <img class="setting_background_images_5" src="../assets/back/lightpurpleby2.png" alt="lightpurpleby">
            <img class="setting_background_images_6" src="../assets/back/bluemy.png" alt="greenby">
            <img class="setting_background_images_7" src="../assets/back/yellowbyfull.png" alt="yellowbyfull">
            <img class="setting_background_images_8" src="../assets/back/purpleby.png" alt="purpleby">
       </div>
    </div>
</template>

 
<script async>
import langText from '../assets/lang.js'
export default {
    name: 'Setting',
    data(){
        return{
            i: 1,
            sum: 2499+499+499+299+499,
            info:{
                "waba_setup_fee": 499,
                "program_cost": {
                    "GS": 2499,
                    "TL": 499,
                    "VB": 499,
                    "VK": 499
                },
                "chat_cost": 499,
                "write_first_cost": 399,
                "op_cost": 199,
                "bot": 499,
                "deferred_exec": 299,
                "mailing": 499,
                "crm": 499,
                "storage_per_gib": 75,
                "yearly_discount": 0.4
            },
            checkWhatsApp: true, 
            checkTelegram: true, 
            checkViber: false,
            checkVk: false, 
            checkChat: true, 
            checkWrite: false,
            checkEditor: true, 
            checkFunnel: false,
            checkBitrix: false,
            checkCrm: false,
            checkMail: true,
            operators: 0,
            setting_background_images_1_x: 1,
            setting_background_images_2_x: 1,
            setting_background_images_3_x: 1,
            setting_background_images_4_x: 1,
            setting_background_images_5_x: 1,
            setting_background_images_6_x: 1,
            setting_background_images_7_x: 1,
            setting_background_images_8_x: 1,
            langTexts: langText,

        }
    },
    methods:{
        openPopup(){
            this.i = 7
            document.querySelector("#result").style.display = "none"
            document.querySelector("#popup").style.display = "block"

        },
        onMouseUpdate(e){
            if(window.innerWidth > 456){
            let x = e.pageX / window.innerWidth * 20
            let y = e.clientY / window.innerHeight * 20
            document.querySelector(".setting_background_images_1").style.top = (this.setting_background_images_1_x + y).toString() + 'px'
            document.querySelector(".setting_background_images_2").style.left = (this.setting_background_images_2_x + x).toString() + 'px'
            document.querySelector(".setting_background_images_3").style.left = (this.setting_background_images_3_x + x).toString() + 'px'
            document.querySelector(".setting_background_images_4").style.left = (this.setting_background_images_4_x + x).toString() + 'px'
            document.querySelector(".setting_background_images_5").style.left = (this.setting_background_images_5_x + x).toString() + 'px'
            document.querySelector(".setting_background_images_6").style.left = (this.setting_background_images_6_x + x).toString() + 'px'
            document.querySelector(".setting_background_images_7").style.left = (this.setting_background_images_7_x + x).toString() + 'px'
            document.querySelector(".setting_background_images_8").style.left = (this.setting_background_images_8_x + x).toString() + 'px'
            }
            
        },
        extensionForSafari(e, time, where){
            var eTop = e.getBoundingClientRect().top;
            var eAmt = eTop / 100;
            var curTime = 0;
            while (curTime <= time) {
                window.setTimeout(this.SVS_B, curTime, eAmt, where);
                curTime += time / 100;
            }
        },
        SVS_B(eAmt, where) {
            if(where == "center" || where == "")
                window.scrollBy(0, eAmt / 2);
            if (where == "top")
                window.scrollBy(0, eAmt);
        },
        clickMotion(){
            if(window.innerWidth > 456){
                if(this.i == 1){
                    this.$refs.after1.style.animation = "clickMotionButton 0.7s"
                    setTimeout(()=> this.$refs.after1.style.animation = "none", 700)
                }
                else if(this.i == 2){
                    this.$refs.after2.style.animation = "clickMotionButton 0.7s"
                    setTimeout(()=> this.$refs.after2.style.animation = "none", 700)
                }
                else if(this.i == 3){
                    this.$refs.after3.style.animation = "clickMotionButton 0.7s"
                    setTimeout(()=> this.$refs.after3.style.animation = "none", 700)
                }
                else if(this.i == 4){
                    this.$refs.after4.style.animation = "clickMotionButton 0.7s"
                    setTimeout(()=> this.$refs.after4.style.animation = "none", 700)
                }
                else if(this.i == 5){
                    this.$refs.after5.style.animation = "clickMotionButton 0.7s"
                    setTimeout(()=> this.$refs.after5.style.animation = "none", 700)
                }
            }
            else{
                window.scrollBy(0, -300);
                //window.scrollTo({top: window.pageYOffset + this.$refs.header.getBoundingClientRect().top, behavior: 'smooth'})
            }
        },
        closeWhatsApp(){
            this.checkWhatsApp = false
            this.sum -= this.info.program_cost.GS
        },
        clickWhatsApp(){
            this.checkWhatsApp = true
            this.sum += this.info.program_cost.GS
        },
        closeTelegram(){
            this.checkTelegram = false
            this.sum -= this.info.program_cost.TL
        },
        clickTelegram(){
            this.checkTelegram = true
            this.sum += this.info.program_cost.TL
        },
        closeViber(){
            this.checkViber = false
            this.sum -= this.info.program_cost.VB
        },
        clickViber(){
            this.checkViber = true
            this.sum += this.info.program_cost.VB
        },
        closeVk(){
            this.checkVk = false
            this.sum -= this.info.program_cost.VK
        },
        clickVk(){
            this.checkVk = true
            this.sum += this.info.program_cost.VK
        },
        closeChat(){
            this.checkChat = false
            this.sum -= this.info.chat_cost
        },
        clickChat(){
            this.checkChat = true
            this.sum += this.info.chat_cost
        },
        closeWrite(){
            this.checkWrite = false
            this.sum -= this.info.write_first_cost
        },
        clickWrite(){
            this.checkWrite = true
            this.sum += this.info.write_first_cost
        },
        closeEditor(){
            this.checkEditor = false
            this.sum -= this.info.deferred_exec
        },
        clickEditor(){
            this.checkEditor = true
            this.sum += this.info.deferred_exec
        },
        closeFunnel(){
            this.checkFunnel = false
            this.sum -= this.info.deferred_exec
        },
        clickFunnel(){
            this.checkFunnel = true
            this.sum += this.info.deferred_exec
        },
        closeBitrix(){
            this.checkBitrix = false
            this.sum -= this.info.crm
        },
        clickBitrix(){
            this.checkBitrix = true
            this.sum += this.info.crm
        },
        closeCrm(){
            this.checkCrm = false
            this.sum -= this.info.crm
        },
        clickCrm(){
            this.checkCrm = true
            this.sum += this.info.crm
        },
        closeMailing(){
            this.checkMail = false
            this.sum -= this.info.mailing
        },
        clickMailing(){
            this.checkMail = true
            this.sum += this.info.mailing
        },
        clickOperatorMinus(){
            if(this.operators > 0){
                this.operators--
                this.sum -= this.info.op_cost
            }
        },
        clickOperatorPlus(){
            this.operators++
            this.sum += this.info.op_cost
        },



    },
    computed:{
        totalOfYear(){
            return Math.round(this.sum * this.info.yearly_discount)
        },
        langComp(){
            return this.$store.state.lang
        }
    },
    mounted(){
        if (navigator.appVersion.indexOf("Win") != -1) {
            this.$refs.minus.style.padding = "0px 7px 2px 7px"
            this.$refs.minus.style.borderRadius = "25px"
            this.$refs.plus.style.padding = "1px 5px"
            this.$refs.minus.style.top = "11px"
            this.$refs.plus.style.top = "11px"
            this.$refs.operator.style.top = "12px"
        }
        if(window.innerWidth > 456){
        document.addEventListener('mousemove', this.onMouseUpdate)
        this.setting_background_images_1_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_1")).top).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_1")).top).length - 2))
        this.setting_background_images_2_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_2")).left).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_2")).left).length - 2))
        this.setting_background_images_3_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_3")).left).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_3")).left).length - 2))
        this.setting_background_images_4_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_4")).left).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_4")).left).length - 2))
        this.setting_background_images_5_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_5")).left).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_5")).left).length - 2))
        this.setting_background_images_6_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_6")).left).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_6")).left).length - 2))
        this.setting_background_images_7_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_7")).left).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_7")).left).length - 2))
        this.setting_background_images_8_x = Number.parseInt((window.getComputedStyle(document.querySelector(".setting_background_images_8")).left).substring(0, (window.getComputedStyle(document.querySelector(".setting_background_images_8")).left).length - 2))
        }
    },
    created(){
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                if(this.i < 6){
                    this.i++
                }
            }
        })
    }
}
</script>

<style lang="sass">
@keyframes clickMotionButton
    0%
        transform: rotate(15deg)
    25%
        transform: rotate(-15deg)
    50%
        transform: rotate(7deg)
    75%
        transform: rotate(-7deg)
    100%
        transform: rotate(0deg)

@media screen and (min-width: 456px)
    .setting
        position: relative
        top: 00px
        height: 780px
        width: 100%
        .setting_header
            width: 100%
            text-align: center
            font-size: 30px
            line-height: 42px
            color: #370954
            font-weight: 700
            margin-bottom: 0px
        .setting_header_2
            width: 100%
            text-align: center
            font-size: 23px
            line-height: 12px
            color: #370954
            font-weight: 700
            margin-bottom: 50px



        .setting_quiz
            width: 1140px
            position: relative
            background-color: #f9f9f9
            z-index: 3
            box-shadow: 0px 0px 16px -5px rgb(100,100,100)
            border-radius: 10px
            margin: 0 29px

            .setting_quiz_part
                display: inline-block
                background: white
                border-top-left-radius: 10px
                border-bottom-left-radius: 10px
                width: 522px
                padding: 0 49px
                height: 580px
                margin: 0
                h1
                    font-size: 30px
                    padding-top: 20px
                    line-height: 42px
                    font-weight: 700
                    color: #c34688
                    text-align: left
                    width: 100%
                    strong
                        padding-left: 348px
                        font-size: 16px
                        line-height: 26px
                        font-weight: 400
                        color: #999
                    .setting_quiz_part_strong
                        padding-left: 332px
                    .setting_quiz_part_strong_2
                        padding-left: 308px
                    span
                        font-size: 16px
                        text-align: right
                        line-height: 26px
                        font-weight: 400
                        color: #c34688
                h2
                    font-size: 20px
                    line-height: 28px
                    font-weight: 700
                    color: #370954
                    text-align: left
                    width: 100%
                    margin: 20px 0 0 0 
                h3
                    margin: 0
                    margin-top: 14px
                    font-size: 16px
                    line-height:16px
                    font-weight: 400
                    color: #999
                .setting_quiz_progress
                    position: relative
                    top: -7px
                    .setting_quiz_progress_grey
                        width: 100%
                        height: 4px
                        background: #eee
                        border-radius: 2px
                    .setting_quiz_progress_pink
                        position: relative
                        min-width: 2%
                        width: 0%
                        top: -4px
                        height: 4px
                        background: #c34688
                        border-radius: 2px   
                        transition: 0.5s all ease 

                
                    

                .setting_quiz_icons
                    width: 440px
                    display: flex
                    flex-wrap: wrap
                    justify-content: center
                    margin-top: 50px
                    margin-left: 40px
                
                    p
                        font-size: 13px
                        font-weight: 400
                        color: #777
                        margin: 0
                        width: 100%
                        text-align: center
                    div
                        width: 25%
                        img
                           padding-left: 18%
                           user-select: none
                           cursor: pointer
                    span
                        user-select: none
                        font-size: 0.6vw
                        font-weight: 600
                        color: white
                        background-color: #d6496f
                        padding: 1px 3px   
                        border-radius: 10px
                        position: absolute
                        z-index: 10
                        top: 245px
                        display: none
                




                    .setting_quiz_operator
                        width: 50px
                        border: 1px solid #a13c7f
                        font-size: 20px
                        border-radius: 50px
                        background-color: #f6f6f6
                        height: 50px
                        color: #a13c7f
                        text-align: center
                        margin: 10px 0 16px 8px
                        display: inline-block
                        strong
                            user-select: none
                            position: relative
                            top: 14px
                    .setting_quiz_minus
                        position: relative
                        top: 13px
                        left: 20px
                        font-weight: 200
                        border: 1px solid white
                        color: white
                        background-color: #a13c7f
                        padding: 0 7px
                        font-size: 16px
                        border-radius: 10px
                        cursor: pointer
                        user-select: none
                        font-family: sans-serif
                    .setting_quiz_plus
                        position: relative
                        top: 13px
                        left: -10px
                        font-weight: 200
                        border: 1px solid white
                        color: white
                        background-color: #a13c7f
                        font-family: sans-serif
                        padding: 0 4px
                        height: 18px
                        font-size: 16px
                        cursor: pointer
                        border-radius: 30px
                        outline: none
                        user-select: none
                
            
                    
                    .setting_quiz_icons_1:hover
                        span
                            display: inline
                            left: 150px

                    .setting_quiz_icons_2:hover
                        span
                            display: inline
                            left: 260px
                    .setting_quiz_icons_3:hover
                        span
                            display: inline
                            left: 370px
                    .setting_quiz_icons_4:hover
                        span
                            display: inline
                            left: 480px
                    .setting_quiz_icons_5:hover
                        span
                            display: inline
                            left: 205px
                    .setting_quiz_icons_6:hover
                        span
                            display: inline
                            left: 315px
                    .setting_quiz_icons_7:hover
                        span
                            display: inline
                            left: 425px
                    .setting_quiz_icons_8:hover
                        span
                            display: inline
                            left: 265px
                    .setting_quiz_icons_9:hover
                        span
                            display: inline
                            left: 375px
                    .setting_quiz_icons_10:hover
                        span
                            display: inline
                            left: 315px
                .setting_quiz_icons_11
                    margin-top: 22px


                .setting_quiz_back
                    cursor: pointer
                    float: left 
                    margin-top: 120px
                    outline: none
                    user-select: none
                    span
                        font-style: italic
                        font-weight: 300
                        font-size: 16px
                        color: #bbb
                        padding-left: 21px
                        user-select: none
                        outline: none

                .setting_quiz_after
                    float: right
                    user-select: none
                    margin-top: 98px
                    outline: none
                    button
                        width: 220px
                        color: white
                        border-radius: 31px
                        border: 0px
                        font-size: 18px
                        font-weight: 400
                        padding: 20px 0
                        cursor: pointer
                        outline: none
                        transition: 0.2s all ease
                        background: url('../assets/after.png') no-repeat 80% 50% #c34688
                    p
                        margin: 0
                        margin-top: 10px
                        font-size: 16px
                        line-height: 16px
                        color: #999
                        width: 100%
                        text-align: center
                        font-weight: 400
                        //margin-bottom: 60px
                .setting_quiz_after_1
                    margin-top: 82px
                .setting_quiz_back_1
                    margin-top: 104px
                .setting_quiz_back_2
                    margin-top: 266px


                        










            .setting_quiz_result
                display: inline-block
                background: #f9f9f9f9
                vertical-align: top
                position: relative
                z-index: 3
                h1
                    font-size: 18px
                    padding-left: 90px
                    padding-top: 20px
                    line-height: 48px
                    font-weight: 400
                    color: #222
                    span
                        padding-left: 4px
                        font-size: 20px
                        color: #bdbdbd
                        text-decoration: line-through
                        text-decoration-color: #d6496f
                    strong
                        font-size: 26px
                        color: #d6496f
                        font-weight: 400
                        span
                            color: #d6496f
                            text-decoration: none
                            font-size: 46px
                            font-weight: 700

                img
                    padding-left: 160px
                    user-select: none
                .setting_quiz_result_info
                    margin-top: 0px
                    width: 380px
                    margin-left: 50px
                    padding: 26px 0px 10px 40px
                    background-color: white
                    border-radius: 5px
                    h2
                        margin: 0
                        font-size: 18px
                        line-height: 24px
                        font-weight: 700
                        color: #370954
                        span
                            color: #c34688
                    p
                        font-size: 16px
                        line-height: 24px
                        font-weight: 400
                        color: #222
                button
                    user-select: none
                    width: 360px
                    margin-left: 80px
                    color: white
                    border-radius: 31px
                    border: 0px
                    background-color: #dbe0e4
                    margin-top: 24px
                    margin-bottom: 20px
                    font-size: 18px
                    font-weight: 400
                    padding: 20px 0
                    cursor: not-allowed
                    outline: none
                    transition: 0.2s all ease
                .setting_quiz_result_dop_info
                    font-size: 16px
                    line-height: 16px
                    font-weight: 400
                    color: #999
                    margin: 0
                    margin-bottom: 30px
                    width: 115%
                    text-align: center
                .button_clicked
                    background-color: #c34688
                    cursor: pointer




            .setting_quiz_popup
                width: 100%
                height: 580px
                display: none
                background-color: white
                border-radius: 10px
                h1
                    font-weight: 700
                    font-size: 20px
                    line-height: 32px
                    color: #370954
                    text-align: center
                    width: 700px
                    padding-left: 220px
                    padding-top: 73px
                .setting_quiz_popup_p
                    font-weight: 400
                    font-size: 16px
                    line-height: 24px
                    color: #999
                    text-align: center
                    width: 700px
                    padding-left: 220px
                    padding-top: 13px
                button
                    color: white
                    font-size: 18px
                    font-weight: 400
                    border: 0px
                    padding: 23px 70px
                    background-color: #189d0e
                    border-radius: 31px
                    margin-left: 400px
                    width: 350px
                    outline: none 
                    cursor: pointer
                    transition: 0.3s all ease
                    margin-bottom: 10px
                    background-image: url("../assets/whatsapp_btn.png")
                    background-repeat: no-repeat
                    background-position: 95% 50%
                    user-select: none
                button:hover
                    background-color: rgb(0, 140, 14)
                img
                    margin-left: 515px
                    margin-bottom: 10px
                    user-select: none
                .setting_quiz_popup_bottom
                    color: #999
                    font-size: 14px
                    line-height: 18px
                    font-weight: 400
                    margin-left: 280px
                    text-align: center
                    width: 580px
                    a
                        text-decoration: none
                        color: #999
                        border-bottom: 1px solid #999















        .setting_background_images
            user-select: none
            position: absolute
            height: 0px
            img
                position: relative
            .setting_background_images_1
                top: -90px
                left: 280px
                z-index: 3
            .setting_background_images_2
                left: 675px
                top: -145px
                z-index: 3
            .setting_background_images_3
                top: -530px
                left: -325px
                z-index: 2
            .setting_background_images_4
                left: -350px
                top: -620px
            .setting_background_images_5
                top: -330px
                left: -400px
            .setting_background_images_6
                top: -195px
                left: 330px
            .setting_background_images_7
                top: -700px
                left: -950px   
            .setting_background_images_8
                top: -790px
                left: 260px   


@media screen and (max-width: 456px)
    .setting
        position: relative
        top: 00px
        height: 1050px
        width: 100vw
        .setting_header
            width: 90%
            margin-left: 5%
            text-align: center
            font-size: 6.14vw
            line-height: 4vh
            color: #370954
            font-weight: 700
            margin-bottom: 0px
        .setting_header_2
            width: 90%
            margin-left: 5%
            text-align: center
            font-size: 4.82vw
            line-height: 3.3vh
            color: #370954
            font-weight: 700
            margin-bottom: 50px



        .setting_quiz
            position: relative
            z-index: 3
            width: 100vw
            box-shadow: 0px 0px 10px 3px rgb(240,240,240)
            border-radius: 10px
            margin: 0

            .setting_quiz_part
                display: block
                background: white
                border-top-left-radius: 10px
                border-bottom-left-radius: 10px
                width: calc(100vw - 60px)
                padding: 0 30px
                height: 420px
                margin: 0
                h1
                    padding-top: 20px
                    font-size: 7vw
                    line-height: 9.6vw
                    font-weight: 700
                    color: #c34688
                    text-align: left
                    width: 100%
                    strong
                        padding-left: 46vw
                        font-size: 3.50vw
                        line-height: 26px
                        font-weight: 400
                        color: #999
                    .setting_quiz_part_strong
                        padding-left: 44vw
                    .setting_quiz_part_strong_2
                        padding-left: 38vw
                    span
                        font-size: 3.50vw
                        text-align: right
                        line-height: 26px
                        font-weight: 400
                        color: #c34688
                h2
                    font-size: 4.38vw
                    line-height: 6.14vw
                    font-weight: 700
                    color: #370954
                    text-align: left
                    width: 100%
                    margin: 10px 0 0 0 
                h3
                    margin: 0
                    margin-top: 4px
                    font-size: 3.508vw
                    line-height: 5.7vw
                    font-weight: 400
                    color: #999
                .setting_quiz_progress
                    position: relative
                    top: -7px
                    .setting_quiz_progress_grey
                        width: 100%
                        height: 4px
                        background: #eee
                        border-radius: 2px
                    .setting_quiz_progress_pink
                        position: relative
                        min-width: 2%
                        width: 0%
                        top: -4px
                        height: 4px
                        background: #c34688
                        border-radius: 2px   
                        transition: 0.5s all ease 

                
                    

                .setting_quiz_icons
                    width: 100%
                    display: flex
                    flex-wrap: wrap
                    justify-content: center
                    margin-top: 0px
                    margin-left: 0px
                    p
                        font-size: 2.85vw
                        font-weight: 400
                        color: #777
                        margin: 0
                        width: 100%
                        text-align: center
                    div
                        width: 25%
                        img
                           padding-left: 10%
                           width: 80%
                           cursor: pointer
                    span
                        font-size: 0.6vw
                        font-weight: 600
                        color: white
                        background-color: #d6496f
                        padding: 1px 3px   
                        border-radius: 10px
                        position: absolute
                        z-index: 10
                        top: 335px
                        display: none





                    .setting_quiz_operator
                        width: 11.5vw
                        border: 1px solid #a13c7f
                        font-size: 20px
                        border-radius: 50px
                        background-color: #f6f6f6
                        height: 11.5vw
                        color: #a13c7f
                        text-align: center
                        margin: 10px 0 0px 0px
                        margin-bottom: 15px
                        display: inline-block
                        strong
                            position: relative
                            top: 14px
                    .setting_quiz_minus
                        position: relative
                        top: 13px
                        left: 12px
                        font-weight: 200
                        border: 1px solid white
                        color: white
                        background-color: #a13c7f
                        padding: 0 6px
                        border-radius: 10px
                        cursor: pointer
                        user-select: none
                    .setting_quiz_plus
                        position: relative
                        top: 13px
                        left: -12px
                        //left: 61px !important
                        //top: -34px !important
                        font-weight: 200
                        border: 1px solid white
                        color: white
                        background-color: #a13c7f
                        padding: 0 4px
                        cursor: pointer
                        border-radius: 30px
                        outline: none
                        user-select: none
                .setting_quiz_icons_11
                    margin-top: 2px
                .setting_quiz_icons_12
                    margin-top: 12px
                    
                    
                .setting_quiz_back
                    cursor: pointer
                    float: left 
                    margin-top: 40px
                    outline: none
                    user-select: none
                    span
                        font-style: italic
                        font-weight: 300
                        font-size: 3.5vw
                        color: #bbb
                        padding-left: 21px
                        outline: none
                        user-select: none 

                .setting_quiz_after
                    float: right
                    user-select: none
                    margin-top: 18px
                    outline: none
                    button
                        width: 37vw
                        color: white
                        border-radius: 31px
                        border: 0px
                        font-size: 4.38vw
                        font-weight: 400
                        padding: 20px 0
                        cursor: pointer
                        outline: none
                        transition: 0.2s all ease
                        background: url('../assets/after.png') no-repeat 80% 50% #c34688
                    p
                        display: none
                        margin: 0
                        margin-top: 10px
                        font-size: 3.50vw
                        line-height: 16px
                        color: #999
                        width: 100%
                        text-align: center
                        font-weight: 400
                        //margin-bottom: 60px
                .setting_quiz_after_1
                    margin-top: 8px
                .setting_quiz_back_1
                    margin-top: 24px
                .setting_quiz_back_2
                    margin-top: 46px
                


                        










            .setting_quiz_result
                top: -40px
                position: relative
                display: inline-block
                //background: #f9f9f9f9
                background-color: white
                vertical-align: top
                h1
                    font-size: 3.94vw
                    padding-left: 16vw
                    padding-top: 0px
                    line-height: 10.52vw
                    font-weight: 400
                    color: #222
                    span
                        padding-left: 4px
                        font-size: 4.38vw
                        color: #bdbdbd
                        text-decoration: line-through
                        text-decoration-color: #d6496f
                    strong
                        font-size: 5.7vw
                        color: #d6496f
                        font-weight: 400
                        span
                            color: #d6496f
                            text-decoration: none
                            font-size: 10.1vw
                            font-weight: 700

                img
                    padding-left: 25vw
                    width: 50vw
                .setting_quiz_result_info
                    margin-top: 0px
                    width: calc(100vw - 40px)
                    margin-left: 0px
                    padding: 16px 0px 0px 40px
                    background-color: white
                    border-radius: 5px
                    h2
                        margin: 0
                        font-size: 3.9473vw
                        line-height: 5.263vw
                        font-weight: 700
                        color: #370954
                        span
                            color: #c34688
                    p
                        font-size: 3.5vw
                        line-height: 5.263vw
                        font-weight: 400
                        color: #222
                        width: 90%
                button
                    width: 80vw
                    margin-left: 10vw
                    color: white
                    border-radius: 31px
                    border: 0px
                    background-color: #dbe0e4
                    margin-top: 4px
                    margin-bottom: 20px
                    font-size: 4.38vw
                    font-weight: 400
                    padding: 20px 0
                    cursor: not-allowed
                    outline: none
                    transition: 0.2s all ease
                .setting_quiz_result_dop_info
                    font-size: 3.947vw
                    line-height: 16px
                    font-weight: 400
                    color: #999
                    margin: 0
                    margin-bottom: 30px
                    
                    width: 100vw
                    text-align: center
                .button_clicked
                    background-color: #c34688
                    cursor: pointer
        .setting_background_images
            position: absolute
            width: 100vw
            height: 0px
            img
                position: relative
                display: none
            .setting_background_images_1
                position: absolute
                top: -10px
                right: 0
                z-index: 3
                display: inline
            .setting_background_images_2
                position: absolute
                display: inline
                left: -20px
                top: 55px
                z-index: 3

            .setting_background_images_3
                position: absolute
                display: inline
                top: -880px
                right: 5vw
            .setting_background_images_4
                position: absolute
                display: inline
                top: 10px
                left: 10vw
                z-index: 3
            .setting_background_images_5
                top: -330px
                left: -400px
            .setting_background_images_6
                top: -195px
                left: 330px
            .setting_background_images_7
                top: -700px
                left: -950px   
            .setting_background_images_8
                top: -790px
                left: 260px




@media screen and (max-width: 375px)
    .setting
        .setting_quiz
            .setting_quiz_part
                display: block
                background: white
                border-top-left-radius: 10px
                border-bottom-left-radius: 10px
                width: calc(100vw - 60px)
                padding: 0 30px
                height: 420px
                margin: 0
                h1
                    font-size: 6.57vw
                    padding-top: 20px
                    line-height: 42px
                    font-weight: 700
                    color: #c34688
                    text-align: left
                    width: 100%
                    strong
                        padding-left: 46vw
                        font-size: 3.50vw
                        line-height: 26px
                        font-weight: 400
                        color: #999
                    .setting_quiz_part_strong
                        padding-left: 44vw
                    .setting_quiz_part_strong_2
                        padding-left: 38vw
                    span
                        font-size: 3.50vw
                        text-align: right
                        line-height: 26px
                        font-weight: 400
                        color: #c34688
                h2
                    font-size: 4.38vw
                    line-height: 6.14vw
                    font-weight: 700
                    color: #370954
                    text-align: left
                    width: 100%
                    margin: 10px 0 0 0 
                h3
                    margin: 0
                    margin-top: 4px
                    font-size: 3.508vw
                    line-height: 5.7vw
                    font-weight: 400
                    color: #999
                .setting_quiz_progress
                    position: relative
                    top: -7px
                    .setting_quiz_progress_grey
                        width: 100%
                        height: 4px
                        background: #eee
                        border-radius: 2px
                    .setting_quiz_progress_pink
                        position: relative
                        min-width: 2%
                        width: 0%
                        top: -4px
                        height: 4px
                        background: #c34688
                        border-radius: 2px   
                        transition: 0.5s all ease 

                
                    

                .setting_quiz_icons
                    width: 100%
                    display: flex
                    flex-wrap: wrap
                    justify-content: center
                    margin-top: 10px
                    margin-left: 0px
                    p
                        font-size: 2.85vw
                        font-weight: 400
                        color: #777
                        margin: 0
                        width: 100%
                        text-align: center
                    div
                        width: 25%
                        img
                           padding-left: 10%
                           width: 80%
                           cursor: pointer
                    span
                        font-size: 0.6vw
                        font-weight: 600
                        color: white
                        background-color: #d6496f
                        padding: 1px 3px   
                        border-radius: 10px
                        position: absolute
                        z-index: 10
                        top: 335px
                        display: none





                    .setting_quiz_operator
                        width: 10vw
                        border: 1px solid #a13c7f
                        font-size: 4.38vw
                        border-radius: 50px
                        background-color: #f6f6f6
                        height: 10vw
                        color: #a13c7f
                        text-align: center
                        margin: 10px 0 0px 0px
                        margin-bottom: 15px
                        display: inline-block
                        strong
                            position: relative
                            top: 8px
                    .setting_quiz_minus
                        position: relative
                        top: 8px
                        left: 9px
                        font-weight: 200
                        border: 1px solid white
                        color: white
                        font-size: 3.3vw
                        background-color: #a13c7f
                        padding: 0 4px
                        border-radius: 10px
                        cursor: pointer
                        user-select: none
                    .setting_quiz_plus
                        position: relative
                        top: 8px
                        left: -9px
                        //left: 61px !important
                        //top: -34px !important
                        font-weight: 200
                        border: 1px solid white
                        color: white
                        font-size: 3.3vw
                        background-color: #a13c7f
                        padding: 0 3px
                        cursor: pointer
                        border-radius: 30px
                        outline: none
                        user-select: none
                .setting_quiz_icons_11
                    margin-top: 10px
                .setting_quiz_icons_12
                    margin-top: 10px
                    
                    
                .setting_quiz_back
                    cursor: pointer
                    float: left 
                    margin-top: 40px
                    outline: none
                    user-select: none
                    span
                        font-style: italic
                        font-weight: 300
                        font-size: 3.50vw
                        color: #bbb
                        padding-left: 21px
                        outline: none
                        user-select: none 

                .setting_quiz_after
                    float: right
                    user-select: none
                    margin-top: 28px
                    outline: none
                    button
                        width: 37vw
                        color: white
                        border-radius: 31px
                        border: 0px
                        font-size: 3.947vw
                        font-weight: 400
                        padding: 20px 0
                        cursor: pointer
                        outline: none
                        transition: 0.2s all ease
                        background: url('../assets/after.png') no-repeat 80% 50% #c34688
                    p
                        display: none
                        margin: 0
                        margin-top: 10px
                        font-size: 3.50vw
                        line-height: 16px
                        color: #999
                        width: 100%
                        text-align: center
                        font-weight: 400
                        //margin-bottom: 60px
                .setting_quiz_after_1
                    margin-top: 8px
                .setting_quiz_back_1
                    margin-top: 30px
                .setting_quiz_back_2
                    margin-top: 76px
                


                        










            .setting_quiz_result
                top: -50px
                position: relative
                display: inline-block
                //background: #f9f9f9f9
                background-color: white
                vertical-align: top
                h1
                    font-size: 3.94vw
                    padding-left: 16vw
                    padding-top: 0px
                    line-height: 10.52vw
                    font-weight: 400
                    color: #222
                    span
                        padding-left: 4px
                        font-size: 4.38vw
                        color: #bdbdbd
                        text-decoration: line-through
                        text-decoration-color: #d6496f
                    strong
                        font-size: 5.7vw
                        color: #d6496f
                        font-weight: 400
                        span
                            color: #d6496f
                            text-decoration: none
                            font-size: 10.1vw
                            font-weight: 700

                img
                    padding-left: 25vw
                    width: 50vw
                .setting_quiz_result_info
                    margin-top: 0px
                    width: calc(100vw - 40px)
                    margin-left: 0px
                    padding: 16px 0px 0px 40px
                    background-color: white
                    border-radius: 5px
                    h2
                        margin: 0
                        font-size: 3.9473vw
                        line-height: 5.263vw
                        font-weight: 700
                        color: #370954
                        span
                            color: #c34688
                    p
                        font-size: 3.5vw
                        line-height: 5.263vw
                        font-weight: 400
                        color: #222
                        width: 90%
                button
                    width: 80vw
                    margin-left: 10vw
                    color: white
                    border-radius: 31px
                    border: 0px
                    background-color: #dbe0e4
                    margin-top: 4px
                    margin-bottom: 20px
                    font-size: 4.38vw
                    font-weight: 400
                    padding: 20px 0
                    cursor: not-allowed
                    outline: none
                    transition: 0.2s all ease
                .setting_quiz_result_dop_info
                    font-size: 3.947vw
                    line-height: 16px
                    font-weight: 400
                    color: #999
                    margin: 0
                    margin-bottom: 30px
                    
                    width: 100vw
                    text-align: center
                .button_clicked
                    background-color: #c34688
                    cursor: pointer
    


</style>