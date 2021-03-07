<template>
    <div class="header">
        <img src="../assets/logo_main.png" alt="logo">
        <div class="header_nav" ref="nav">
            <a href="#">WhatsApp Business API</a>
            <a href="#">Продукты &or;</a>
            <a href="#">Команда</a>
            <a href="#">Цены</a>
            <a href="#">Блог</a>
        </div>

        <a class="header_lang" href="#">RU</a>

        <div class="header_button">
            <span>Личный кабинет</span>
            <img src="../assets/key.png" alt="key">
        </div>

        <div class="header_burger" v-bind:class="{ header_burger_clicked: checkBurger }" @click="showBurger">
            <img src="../assets/burder_1.png" alt="burder_1">
            <img class="header_burger_long" src="../assets/burder_1.png" alt="burder_2">
            <img src="../assets/burder_1.png" alt="burder_3">
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
                margin-left: 110px
                a
                    margin-right: 46px
                    font-weight: 400
                    color: $h_color
                    text-decoration: none
            .header_lang
                position: relative
                top: -4px
                margin-left: 10px
                color: #999999
                text-decoration: none
                font-size: 13px
                font-weight: 400
                line-height: 27px
                background-color: #e8e8e8
                padding: 5px 3px
                border-radius: 45px
            .header_button
                position: relative
                top: -4px
                width: 180px
                border: 1px solid #c34688
                padding: 7px 15px
                background-color: white
                cursor: pointer
                margin-left: 25px
                border-radius: 5px
                img
                    margin-left: 10px
                span
                    font-size: 15px
                    color: #c34688
            .header_burger
                display: none
    @media screen and (max-width: 456px)
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