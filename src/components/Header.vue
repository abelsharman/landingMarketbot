<template>
    <div class="header">
        <img src="../assets/logo_main.png" alt="logo">
        <div class="header_nav" ref="nav">
            <a href="#">WhatsApp Business API</a>
            <!--<a href="#">Продукты &or;</a>-->
            <a href="#" @click="clickTeam" v-show="checkChrome">Команда</a>
            <a href="#" @click="clickCost" v-show="checkChrome">Цены</a>
            <a href="#team" v-show="!checkChrome">Команда</a>
            <a href="#quiz" v-show="!checkChrome">Цены</a>
            <a href="https://blog.marketbot.biz/">Блог</a>
        </div>

        <a class="header_lang" href="#">RU</a>

        <a href="https://marketbot.biz/user/home" target="_blank">
            <div class="header_button">
                <span>Личный кабинет</span>
                <img src="../assets/key.png" alt="key">
            </div>
        </a>


        <div class="header_burger" v-bind:class="{ header_burger_clicked: checkBurger }" @click="showBurger">
            <img src="../assets/burder_1.png" alt="burder_1">
            <img class="header_burger_long" src="../assets/burder_1.png" alt="burder_2">
            <img src="../assets/burder_1.png" alt="burder_3">
        </div>

        <div class="page_grey_lines">
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
    name: 'Header',
    data(){
        return{
            checkBurger: false,
            checkChrome: ''
        }
    },
    methods:{
        showBurger(){
            if(this.checkBurger == true){
                this.checkBurger = false
                this.$refs.nav.style.left = '100vw'
            }
            else{
                this.checkBurger = true
                this.$refs.nav.style.left = '0vw'
            }

        },
        SmoothVerticalScrolling(e, time, where) {
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
        clickTeam(){
            if(window.innerWidth > 456){
                let a = document.querySelector("#team")
                this.SmoothVerticalScrolling(a, 400, "top")
            }
            else{
                this.showBurger()
                let a = document.querySelector("#team")
                this.SmoothVerticalScrolling(a, 3000, "center")
            }
        },  
        clickCost(){
            if(window.innerWidth > 456){
                let a = document.querySelector("#quiz")
                this.SmoothVerticalScrolling(a, 400, "top")
            }
            else{
                this.showBurger()
                let a = document.querySelector("#quiz")
                this.SmoothVerticalScrolling(a, 3000, "center")
            }
        }
    },
    mounted(){
        let safariAgent = navigator.userAgent.indexOf("Safari")
        let chromeAgent = navigator.userAgent.indexOf("Chrome")

        if(safariAgent != -1 && chromeAgent != -1){
            this.checkChrome = false
        }
        else if(safariAgent > -1 || navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("rv:") > -1){
            this.checkChrome = true
        }
        else{
            this.checkChrome = false
        }
    }
}
</script>
<style lang="sass" scoped>
    $h_color: #370954
    @media screen and (min-width: 456px)
        .page_grey_lines
            img
                position: absolute
                height: 2520px
                width: 1px
                top: -20px
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
            
        .header
            width: calc(100vw - (100vw - 1200px))
            padding-bottom: 10px
            *
                font-family: 'Cera Pro'
                display: inline
            img
                user-select: none
                margin-top: 15px
            .header_nav 
                position: relative
                top: -4px
                //margin-left: 100px
                margin-left: 200px
                a
                    margin-right: 48px
                    font-weight: 400
                    color: $h_color
                    text-decoration: none
            .header_lang
                user-select: none
                position: relative
                top: -4px
                //margin-left: 14px
                margin-left: 51px
                color: #999999
                text-decoration: none
                font-size: 13px
                font-weight: 400
                line-height: 27px
                background-color: #e8e8e8
                padding: 5px 3px
                border-radius: 45px
            a
                text-decoration: none
            .header_button
                position: relative
                top: -4px
                width: 180px
                border: 1px solid #c34688
                padding: 7px 15px
                background-color: white
                cursor: pointer
                margin-left: 40px
                border-radius: 5px
                text-decoration: none
                img
                    width: 18px
                    margin-left: 10px
                span
                    font-size: 15px
                    color: #c34688
                    text-decoration: none
            .header_burger
                display: none
    @media screen and (max-width: 456px)
        .page_grey_lines
            img
                position: absolute
                display: inline
                height: 125px
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
            
        .header
            padding-bottom: 0px
            *
                font-family: 'Cera Pro'
            img
                display: inline
                margin-top: 20px
                width: 44%
                margin-left: 7%
            .header_nav 
                display: inline
                position: fixed
                left: 100vw
                background-color: black
                top: 90px
                transition: 0.3s all ease
                width: 100vw
                z-index: 2
                padding: 15px 0
                a
                    margin-right: 0px
                    padding: 10px 0
                    display: block
                    width: 100%
                    font-size: 18px
                    text-align: center
                    font-weight: 400
                    color: white
                    text-decoration: none
            a
                text-decoration: none
            .header_lang
                position: relative
                top: -4px
                margin-left: 15%
                color: #999999
                text-decoration: none
                font-size: 2.85vw
                
                font-weight: 400
                line-height: 27px
                background-color: #e8e8e8
                padding: 5px 3px
                border-radius: 45px
                vertical-align: middle
            .header_button
                display: inline
                position: relative
                top: -4px
                border: 1px solid #c34688
                padding: 1.5vw
                background-color: white
                cursor: pointer
                margin-left: 5%
                border-radius: 5px
                height: 6vw
                img
                    width: 4vw
                    margin-left: 0px
                span
                    display: none
                    font-size: 15px
                    color: #c34688
            .header_burger
                display: inline-block
                margin-left: 2%
                padding: 7px 14px 7px 2px
                position: relative
                top: 14px
                width: 7%
                border-radius: 20px
                transition: 0.5s all ease
                img
                    width: 83%
                    padding-left: 17%
                    display: block
                    height: 3px
                    margin: 1.5vw
                .header_burger_long
                    width: 100%
                    padding-left: 0%
            .header_burger_clicked
                background-color: rgb(230,230,230)



    




        


                

        
</style>