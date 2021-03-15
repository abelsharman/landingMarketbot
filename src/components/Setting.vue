<template>
    <div class="setting">
        <h1 class="setting_header">Настройте тариф под свои задачи</h1>

        <div class="setting_quiz">
            <div class="setting_quiz_part" id="1" ref="1" v-if="this.i == 1">
                <h1>Шаг {{ this.i }}<strong> Готово: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>

                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>Какие мессенджеры будете подключать?</h2>
                <h3>Выберите один или несколько</h3>



                <div class="setting_quiz_icons setting_quiz_icons_12">
                    <div class="setting_quiz_icons_1">
                        <span>{{ info.program_cost.GS }}₽</span>
                        <img @click="closeWhatsApp" v-if="checkWhatsApp" src="../assets/quiz/whatsapp.png" alt="whatsapp">
                        <img @click="clickWhatsApp" v-if="!checkWhatsApp" src="../assets/quiz/whatsapp3.png" alt="whatsapp">
                        <p>WhatsApp</p>
                    </div>

                    <div class="setting_quiz_icons_2">
                        <span>{{ info.program_cost.TL }}₽</span>
                        <img @click="closeTelegram" v-if="checkTelegram" src="../assets/quiz/telegram.png" alt="Telegram">
                        <img @click="clickTelegram" v-if="!checkTelegram" src="../assets/quiz/telegram3.png" alt="Telegram">
                        <p>Telegram</p>
                    </div>

                    <div class="setting_quiz_icons_3">
                        <span>{{ info.program_cost.VB }}₽</span>
                        <img @click="closeViber" v-if="checkViber" src="../assets/quiz/viber.png" alt="Viber">
                        <img @click="clickViber" v-if="!checkViber" src="../assets/quiz/viber3.png" alt="Viber">
                        <p>Viber</p>
                    </div>

                    <div class="setting_quiz_icons_4">
                        <span>{{ info.program_cost.VK }}₽</span>
                        <img @click="closeVk" v-if="checkVk" src="../assets/quiz/vk.png" alt="Vkontakte">
                        <img @click="clickVk" v-if="!checkVk" src="../assets/quiz/vk3.png" alt="Vkontakte">
                        <p>Vkontakte</p>
                    </div>
                </div>


                <div class="setting_quiz_back" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>Предыдущий шаг</span>
                </div>

                <div class="setting_quiz_after" @click="i++">
                    <button>Далее</button>
                    <p>Или нажмите <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="2" ref="2" v-if="this.i == 2">
                <h1>Шаг {{ this.i }}<strong class="setting_quiz_part_strong"> Готово: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>Будете общаться с клиентами через чат-центр?</h2>
                <h3>Можно пропустить</h3>

                <div class="setting_quiz_icons setting_quiz_icons_12">
                    <div class="setting_quiz_icons_5">
                        <span>{{ info.chat_cost }}₽</span>
                        <img @click="closeChat" v-if="checkChat" src="../assets/quiz/chat.png" alt="chat">
                        <img @click="clickChat" v-if="!checkChat" src="../assets/quiz/chat3.png" alt="chat">
                        <p>Чат</p>
                    </div>

                    <div class="setting_quiz_icons_6">
                        <span>{{ info.write_first_cost }}₽</span>
                        <img @click="closeWrite" v-if="checkWrite" src="../assets/quiz/question.png" alt="question">
                        <img @click="clickWrite" v-if="!checkWrite" src="../assets/quiz/question3.png" alt="question">
                        <p>Написать первым</p>
                    </div>

                    <div class="setting_quiz_icons_7">
                        <span>{{ info.op_cost }}₽</span>
                        <strong class="setting_quiz_minus" @click="clickOperatorMinus">-</strong>
                        <strong class="setting_quiz_operator"><strong>{{ operators }}</strong></strong>
                        <strong class="setting_quiz_plus" @click="clickOperatorPlus">+</strong>
                        <p>Операторы</p>
                    </div>
                </div>


                <div class="setting_quiz_back" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>Предыдущий шаг</span>
                </div>

                <div class="setting_quiz_after" @click="i++">
                    <button>Далее</button>
                    <p>Или нажмите <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="3" ref="3" v-if="this.i == 3">
                <h1>Шаг {{ this.i }}<strong class="setting_quiz_part_strong"> Готово: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>Включите редактор чат-ботов, если хотите автоматизировать общение с клиентами</h2>
                <h3>Можно пропустить</h3>

                <div class="setting_quiz_icons setting_quiz_icons_11">
                    <div class="setting_quiz_icons_8">
                        <span>{{ info.deferred_exec }}₽</span>
                        <img @click="closeEditor" v-if="checkEditor" src="../assets/quiz/editor.png" alt="editor">
                        <img @click="clickEditor" v-if="!checkEditor" src="../assets/quiz/editor3.png" alt="editor">
                        <p>Редактор сценария</p>
                    </div>

                    <div class="setting_quiz_icons_9">
                        <span>{{ info.deferred_exec }}₽</span>
                        <img @click="closeFunnel" v-if="checkFunnel" src="../assets/quiz/funnel.png" alt="funnel">
                        <img @click="clickFunnel" v-if="!checkFunnel" src="../assets/quiz/funnel3.png" alt="funnel">
                        <p>Автоворонки</p>
                    </div>
                </div>


                <div class="setting_quiz_back setting_quiz_back_1" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>Предыдущий шаг</span>
                </div>

                <div class="setting_quiz_after setting_quiz_after_1" @click="i++">
                    <button>Далее</button>
                    <p>Или нажмите <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="4" ref="4" v-if="this.i == 4">
                <h1>Шаг {{ this.i }}<strong class="setting_quiz_part_strong"> Готово: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>Выберите CRM систему для интеграции</h2>
                <h3>Можно пропустить</h3>

                <div class="setting_quiz_icons">
                    <div class="setting_quiz_icons_8">
                        <span>{{ info.crm }}₽</span>
                        <img @click="closeBitrix" v-if="checkBitrix" src="../assets/quiz/bitrix.png" alt="bitrix">
                        <img @click="clickBitrix" v-if="!checkBitrix" src="../assets/quiz/bitrix3.png" alt="bitrix">
                        <p>Bitrix24</p>
                    </div>

                    <div class="setting_quiz_icons_9">
                        <span>{{ info.crm }}₽</span>
                        <img @click="closeCrm" v-if="checkCrm" src="../assets/quiz/amo.png" alt="amo">
                        <img @click="clickCrm" v-if="!checkCrm" src="../assets/quiz/amo3.png" alt="amo">
                        <p>amoCRM</p>
                    </div>
                </div>


                <div class="setting_quiz_back" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>Предыдущий шаг</span>
                </div>

                <div class="setting_quiz_after" @click="i++">
                    <button>Далее</button>
                    <p>Или нажмите <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="5" ref="5" v-if="this.i == 5">
                <h1>Шаг {{ this.i }}<strong class="setting_quiz_part_strong"> Готово: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>Подключите рассылки, если планируете оповещать своих клиентов</h2>
                <h3>Можно пропустить</h3>

                <div class="setting_quiz_icons setting_quiz_icons_11 setting_quiz_icons_12">
                    <div class="setting_quiz_icons_10">
                        <span>{{ info.mailing }}₽</span>
                        <img @click="closeMailing" v-if="checkMail" src="../assets/quiz/mail.png" alt="mail">
                        <img @click="clickMailing" v-if="!checkMail" src="../assets/quiz/mail3.png" alt="mail">
                        <p>Массовая рассылка</p>
                    </div>
                </div>


                <div class="setting_quiz_back setting_quiz_back_1" v-if="i > 1" @click="i--">
                    <img src="../assets/back.png" alt="back"><span>Предыдущий шаг</span>
                </div>

                <div class="setting_quiz_after setting_quiz_after_1" @click="i++">
                    <button>Далее</button>
                    <p>Или нажмите <strong>Enter</strong></p>
                </div>
            </div>

            <div class="setting_quiz_part" id="6" ref="6" v-if="this.i == 6">
                <h1>Финиш<strong class="setting_quiz_part_strong_2"> Готово: </strong><span>{{ (this.i - 1) * 20 }}%</span></h1>
                 
                <div class="setting_quiz_progress">
                    <div class="setting_quiz_progress_grey"></div>
                    <div class="setting_quiz_progress_pink" v-bind:style="{ width: (i-1) * 20 + '%' }"></div>
                </div>

                <h2>Отлично! Активируйте личный кабинет и начните внедрять мессенджеры в ваш бизнес.</h2>
       

                <div class="setting_quiz_back" v-if="i > 1" @click="i--" style="margin-top:266px">
                    <img src="../assets/back.png" alt="back"><span>Предыдущий шаг</span>
                </div>
            </div>






    

            <div class="setting_quiz_result">
                <h1>Итого: <span>{{ totalOfYear }}</span> <strong><span>0</span> ₽ за 30 дней</strong></h1>

                <img src="../assets/img-10-tarif.png" alt="img">

                <div class="setting_quiz_result_info">
                    <h2>Бесплатно 30 дней на <span>МАКСИМУМ</span></h2>
                    <p>В конце периода вы узнаете все возможности сервиса, и сможете настроить тариф точно под себя, чтобы не платить за лишнее.</p>
                </div>

                <button v-bind:class="{ button_clicked : i == 6 }">Активировать</button>
                <p class="setting_quiz_result_dop_info">Для активации настройте тариф</p>
            </div>

        </div>
    </div>
</template>


<script>
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
            checkEditor: false, 
            checkFunnel: true,
            checkBitrix: false,
            checkCrm: false,
            checkMail: true,
            operators: 0,

        }
    },
    methods:{
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
        }
    },
    created(){
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                if(this.i < 6)
                    this.i++
            }
        });
    }
}
</script>

<style lang="sass">
@media screen and (min-width: 456px)
    .setting
        position: relative
        top: 00px
        height: 800px
        width: 100%
        .setting_header
            width: 100%
            text-align: center
            font-size: 30px
            line-height: 42px
            color: #370954
            font-weight: 700
            margin-bottom: 50px



        .setting_quiz
            width: 1140px
            box-shadow: 0px 0px 10px 3px rgb(240,240,240)
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
                        padding: 0 6px
                        border-radius: 10px
                        cursor: pointer
                        user-select: none
                    .setting_quiz_plus
                        position: relative
                        top: 13px
                        left: -10px
                        font-weight: 200
                        border: 1px solid white
                        color: white
                        background-color: #a13c7f
                        padding: 0 4px
                        cursor: pointer
                        border-radius: 30px
                        outline: none
                        user-select: none
                
            
                    
                    .setting_quiz_icons_1:hover
                        span
                            display: inline
                            left: 180px

                    .setting_quiz_icons_2:hover
                        span
                            display: inline
                            left: 290px
                    .setting_quiz_icons_3:hover
                        span
                            display: inline
                            left: 400px
                    .setting_quiz_icons_4:hover
                        span
                            display: inline
                            left: 510px
                    .setting_quiz_icons_5:hover
                        span
                            display: inline
                            left: 235px
                    .setting_quiz_icons_6:hover
                        span
                            display: inline
                            left: 345px
                    .setting_quiz_icons_7:hover
                        span
                            display: inline
                            left: 455px
                    .setting_quiz_icons_8:hover
                        span
                            display: inline
                            left: 295px
                    .setting_quiz_icons_9:hover
                        span
                            display: inline
                            left: 405px
                    .setting_quiz_icons_10:hover
                        span
                            display: inline
                            left: 345px
                .setting_quiz_icons_11
                    margin-top: 22px


                .setting_quiz_back
                    cursor: pointer
                    float: left 
                    margin-top: 120px
                    user-select: none
                    span
                        font-style: italic
                        font-weight: 300
                        font-size: 16px
                        color: #bbb
                        padding-left: 21px
                        user-select: none

                .setting_quiz_after
                    float: right
                    user-select: none
                    margin-top: 98px
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


                        










            .setting_quiz_result
                display: inline-block
                background: #f9f9f9f9
                vertical-align: top
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
                    margin-bottom: 50px
                    padding-left: 140px
                .button_clicked
                    background-color: #c34688
                    cursor: pointer


@media screen and (max-width: 456px)
    .setting
        position: relative
        top: 00px
        height: 800px
        width: 100vw
        .setting_header
            width: 100%
            text-align: center
            font-size: 30px
            line-height: 42px
            color: #370954
            font-weight: 700
            margin-bottom: 50px



        .setting_quiz
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
                height: 520px
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
                    line-height: 28px
                    font-weight: 700
                    color: #370954
                    text-align: left
                    width: 100%
                    margin: 20px 0 0 0 
                h3
                    margin: 0
                    margin-top: 14px
                    font-size: 3.508vw
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
                    width: 100%
                    display: flex
                    flex-wrap: wrap
                    justify-content: center
                    margin-top: 50px
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
                        width: 50px
                        border: 1px solid #a13c7f
                        font-size: 20px
                        border-radius: 50px
                        background-color: #f6f6f6
                        height: 50px
                        color: #a13c7f
                        text-align: center
                        margin: 10px 0 0px 0px
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
                        left: 12px
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
                    margin-top: 12px
                .setting_quiz_icons_12
                    margin-top: 32px
                    
                    
                .setting_quiz_back
                    cursor: pointer
                    float: left 
                    margin-top: 80px
                    user-select: none
                    span
                        font-style: italic
                        font-weight: 300
                        font-size: 3.50vw
                        color: #bbb
                        padding-left: 21px
                        user-select: none

                .setting_quiz_after
                    float: right
                    user-select: none
                    margin-top: 58px
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
                    margin-top: 82px
                .setting_quiz_back_1
                    margin-top: 104px
                


                        










            .setting_quiz_result
                display: inline-block
                //background: #f9f9f9f9
                background-color: white
                vertical-align: top
                h1
                    font-size: 3.947vw
                    padding-left: 16vw
                    padding-top: 0px
                    line-height: 48px
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
                            font-size: 46px
                            font-weight: 700

                img
                    padding-left: 25vw
                    width: 50vw
                .setting_quiz_result_info
                    margin-top: 0px
                    width: calc(100vw - 40px)
                    margin-left: 0px
                    padding: 26px 0px 10px 40px
                    background-color: white
                    border-radius: 5px
                    h2
                        margin: 0
                        font-size: 4.38vw
                        line-height: 24px
                        font-weight: 700
                        color: #370954
                        span
                            color: #c34688
                    p
                        font-size: 3.947vw
                        line-height: 24px
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
                    margin-top: 24px
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
                    margin-bottom: 50px
                    
                    width: 100vw
                    text-align: center
                .button_clicked
                    background-color: #c34688
                    cursor: pointer

</style>