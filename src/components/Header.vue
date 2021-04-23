<template>
    <div class="header">
        <img src="../assets/logo_white.png" alt="logo">
        <div class="header_nav" ref="nav">
            <a href="#">WhatsApp Business API</a>
            <!--<a href="#">Продукты &or;</a>-->
            <a href="#team" class="header_nav_a" @click="showBurger" >{{ langTexts[a].header.header_team }}</a>
            <a href="#quiz2" class="header_nav_b" @click="showBurger">{{ langTexts[a].header.header_cost }}</a>
            <a href="https://blog.marketbot.biz/">{{ langTexts[a].header.header_blog }}</a>
        </div>





        <a class="header_lang" id="lang1" v-if="a == 1" @click="changeLang">RU</a>
        <a class="header_lang" id="lang2" v-if="a == 2" @click="changeLang">EN</a>

        <a class="header_header_button_a" href="https://marketbot.biz/user/home" target="_blank" >
            <div class="header_button" >
                <span>{{ langTexts[a].header.header_cab }}</span>
                <img src="../assets/key.png" alt="key">
            </div>
        </a>


        <div class="header_burger" v-bind:class="{ header_burger_clicked: checkBurger }" @click="showBurger">
            <img src="../assets/burder_2.png" alt="burder_1">
            <img class="header_burger_long" src="../assets/burder_2.png" alt="burder_2">
            <img src="../assets/burder_2.png" alt="burder_3">
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
import langText from '../assets/lang.js'
export default {
    name: 'Header',
    data(){
        return{
            checkBurger: false,
            langTexts: langText,
        }
    },
    methods:{
        changeColor(){
            if(this.b == 1){
                this.$store.state.color = 2
            }
            else{
                this.$store.state.color = 1
            }
        },
        showBurger(){
            if(window.innerWidth < 456){
                if(this.checkBurger == true){
                    this.checkBurger = false
                    this.$refs.nav.style.left = '100vw'
                }
                else{
                    this.checkBurger = true
                    this.$refs.nav.style.left = '0vw'
                }
            }

        },
        changeLang(){
            if(this.a == 1){
                this.$store.state.lang = 2
            }
            else{
                this.$store.state.lang = 1
            }
        },
    },
    computed:{
        a(){
            return this.$store.state.lang
        },
    },
    mounted(){
    }
}
</script>
<style lang="sass" scoped>
    $h_color: #370954
    
    //$background_color: #f9f9f9
    @media screen and (min-width: 456px)
        .page_grey_lines
            img
                position: absolute
                height: 2500px
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
                margin-left: 200px
                //margin-left: 200px
                a
                    margin-right: 48px //38px
                    font-weight: 400
                    color: white
                    text-decoration: none
                    transition: 0.5s all ease
                .header_nav_a
                    display: inline-block
                    width: 113px
                    margin-right: 0px
                .header_nav_b
                    display: inline-block
                    width: 89px
                    margin-right: 0px
                
            .switch 
                position: relative
                margin: 0px 15px
                display: inline-block
                width: 46px
                height: 20px
                top: -2px
    

                input 
                    opacity: 0
                    width: 0
                    height: 0

                .slider 
                    position: absolute
                    cursor: pointer
                    top: 0
                    left: 0
                    right: 0
                    bottom: 0
                    background-color: #ccc
                    -webkit-transition: .4s
                    transition: .4s
    

                .slider:before 
                    position: absolute
                    content: ""
                    height: 20px
                    width: 20px
                    left: 1px
                    bottom: 0px
                    background-color: white
                    z-index: 99
                    -webkit-transition: .4s
                    transition: .4s
    
                input:checked + .slider 
                    background-color: #2196F3

                input:focus + .slider 
                    box-shadow: 0 0 1px #2196F3

                input:checked + .slider:before 
                    -webkit-transform: translateX(24px)
                    -ms-transform: translateX(24px)
                    transform: translateX(24px)


                .slider.round 
                    border-radius: 34px

                .slider.round:before 
                    border-radius: 50%
                    
            .header_lang
                user-select: none
                cursor: pointer
                position: relative
                top: -4px
                //margin-left: 14px
                margin-left: 51px //51px
                color: #240d32
                text-decoration: none
                font-size: 13px
                font-weight: 400
                line-height: 27px
                background-color: #e8e8e8
                padding: 5px 3px
                border-radius: 45px
            .header_header_button_a
                text-decoration: none
                margin-left: 39px //39px
            .header_button
                position: relative
                top: -4px
                width: 180px
                border: 1px solid #c34688
                padding: 7px 15px
                cursor: pointer
                border-radius: 5px
                text-decoration: none
                img
                    width: 18px
                    margin-left: 10px
                span
                    font-size: 15px
                    width: 116px
                    display: inline-block
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

                background: #c34688 //#370954 //linear-gradient(90deg, #370954 -20%, #c34688 100%)
                top: 70px
                transition: 0.3s all ease
                width: 94vw
                z-index: 2
                padding: 4vh 6vw 4vh 0
                text-align: right
                a
                    padding: 1vh 0
                    display: block
                    width: 100%
                    font-size: 4.70vw //16px
                    font-weight: 500
                    color: white



            .header_header_button_a
                text-decoration: none
                margin-left: 5%
            .header_lang
                position: relative
                top: -4px
                margin-left: 14.2%
                color: #240d32
                text-decoration: none
                font-size: 2.85vw
                
                font-weight: 400
                line-height: 27px
                background-color: #e8e8e8
                padding: 1.5vw 1.3vw
                border-radius: 45px
                vertical-align: middle
            .header_button
                display: inline
                position: relative
                top: -4px
                border: 1px solid #c34688
                padding: 1.1vw 1.22vw
                background-color: #1e2024
                cursor: pointer
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
                padding: 1vh 4vw 1vh 0px
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
                background-color: rgb(120,120,120)



    




        


                

        
</style>