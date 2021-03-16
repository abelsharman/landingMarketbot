<template>
    <div class="header">
        <img src="../assets/logo_main.png" alt="logo">
        <div class="header_nav" ref="nav">
            <a href="#">WhatsApp Business API</a>
            <a href="#">Продукты &or;</a>
            <a href="#">Команда</a>
            <a href="#">Цены</a>
            <a href="https://blog.marketbot.biz/">Блог</a>
        </div>

        <a class="header_lang" href="#">RU</a>

        <a href="https://marketbot.biz/user/home">
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

        }
    },
    created(){
        //let self = this
        //console.log(self.checkBurger)
    }
}
</script>
<style lang="sass" scoped>
    $h_color: #370954
    @media screen and (min-width: 456px)
        .page_grey_lines
            position: relative
            img
                position: fixed
                height: 100vh
                top: -20px
                z-index: 99
            .page_grey_line_1
                left: calc((100vw - 1200px) / 2)
            .page_grey_line_2
                left: calc((100vw - 720px) / 2)
            .page_grey_line_3
                left: calc((100vw - 240px) / 2)
            .page_grey_line_4
                display: inline
                left: calc((100vw + 240px) / 2)
            .page_grey_line_5
                display: inline
                left: calc((100vw + 720px) / 2)
            .page_grey_line_6
                display: inline
                left: calc((100vw + 1200px) / 2)
            
        .header
            padding-bottom: 10px
            *
                font-family: 'Cera Pro'
                display: inline
            img
                margin-top: 15px
            .header_nav 
                position: relative
                top: -4px
                margin-left: 100px
                a
                    margin-right: 48px
                    font-weight: 400
                    color: $h_color
                    text-decoration: none
            .header_lang
                position: relative
                top: -4px
                margin-left: 14px
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
                margin-left: 41px
                border-radius: 5px
                text-decoration: none
                img
                    margin-left: 10px
                span
                    font-size: 15px
                    color: #c34688
                    text-decoration: none
            .header_burger
                display: none
    @media screen and (max-width: 456px)
        .page_grey_lines
            position: relative
            img
                position: fixed
                height: 100vh
                top: 0px
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
            padding-bottom: 10px
            *
                font-family: 'Cera Pro'
                display: inline
            img
                margin-top: 37px
                width: 44%
                margin-left: 7%
            .header_nav 
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
                margin-left: 13%
                color: #999999
                text-decoration: none
                font-size: 13px
                
                font-weight: 400
                line-height: 27px
                background-color: #e8e8e8
                padding: 5px 3px
                border-radius: 45px
                vertical-align: middle
            .header_button
                position: relative
                top: -4px
                width: 180px
                border: 1px solid #c34688
                padding: 7px 7px
                background-color: white
                cursor: pointer
                margin-left: 5%
                border-radius: 5px
                img
                    width: 18px
                    margin-left: 0px
                span
                    display: none
                    font-size: 15px
                    color: #c34688
            .header_burger
                display: inline-block
                margin-left: 4%
                padding: 7px 14px 7px 2px
                position: relative
                top: 12px
                width: 7%
                border-radius: 20px
                transition: 0.5s all ease
                img
                    width: 83%
                    padding-left: 17%
                    display: block
                    height: 3px
                    margin: 5px
                .header_burger_long
                    width: 100%
                    padding-left: 0%
            .header_burger_clicked
                background-color: rgb(230,230,230)
    @media screen and (max-width: 360px)
        .header
            padding-bottom: 10px
            *
                font-family: 'Cera Pro'
                display: inline
            img
                margin-top: 37px
                width: 44%
                margin-left: 7%
            a
                text-decoration: none
            .header_nav 
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
            .header_lang
                position: relative
                top: -4px
                margin-left: 9%
                color: #999999
                text-decoration: none
                font-size: 13px
                
                font-weight: 400
                line-height: 27px
                background-color: #e8e8e8
                padding: 5px 3px
                border-radius: 45px
                vertical-align: middle
            .header_button
                position: relative
                top: -4px
                width: 180px
                border: 1px solid #c34688
                padding: 7px 7px
                background-color: white
                cursor: pointer
                margin-left: 4%
                border-radius: 5px
                img
                    width: 18px
                    margin-left: 0px
                span
                    display: none
                    font-size: 15px
                    color: #c34688
            .header_burger
                display: inline-block
                margin-left: 3%
                padding: 5px 12px 5px 2px
                position: relative
                top: 8px
                width: 6%
                border-radius: 20px
                transition: 0.5s all ease
                img
                    width: 83%
                    padding-left: 17%
                    display: block
                    height: 3px
                    margin: 4px
                .header_burger_long
                    width: 100%
                    padding-left: 0%
            .header_burger_clicked
                background-color: rgb(230,230,230)
                
                
            
                    
    


        


                

        
</style>