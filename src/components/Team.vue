<template>
    <div class="team">
        <div class="team_intro">
            <h1>Наша команда</h1>
            <p>Мы видим, что людям нравится общаться в мессенджерах. Выстраивайте связь с клиентом через диалоги, делая процесс общения максимально комфортным. Для этого мы создали платформу с помощь которой вы внедрите диалоговый маркетинг в свой бизнес.</p>
        </div>


        <div class="team_members">
            <div class="team_member">
                <img src="../assets/ava-1.png" alt="ava">
                <h2>Иван Каплюченко</h2>
                <p>Основатель проекта, CEO</p>
            </div>

            <div class="team_member">
                <img src="../assets/ava-2.png" alt="ava">
                <h2>Богдан Марфейчук</h2>
                <p>Технический директор, CIO</p>
            </div>


            <div class="team_member">
                <img src="../assets/ava-3.png" alt="ava">
                <h2>Владимир Казбанов</h2>
                <p>Инвестор проекта, CFO</p>
            </div>


            
        </div>

        <div class="team_members">
            <div class="team_member">
                <img src="../assets/ava-4.png" alt="ava">
                <h2>Александр</h2>
                <p>Дизайнер проекта</p>
            </div>

            <div class="team_member">
                <img src="../assets/ava-5.png" alt="ava">
                <h2>Даниил</h2>
                <p>Маркетолог, PR</p>
            </div>


            <div class="team_member">
                <img src="../assets/ava-6.png" alt="ava">
                <h2>Раден</h2>
                <p>Контент мейкер</p>
            </div>

            <div class="team_member">
                <img src="../assets/ava-7.png" alt="ava">
                <h2>Анна</h2>
                <p>Копирайтер, SMM</p>
            </div>


            <div class="team_member">
                <img src="../assets/ava-8.png" alt="ava">
                <h2>Екатерина</h2>
                <p>HR специалист</p>
            </div>
        </div>


        <div class="team_members_phone">
            <div class="team_member">
                <img src="../assets/ava-1.png" alt="ava">
                <h2>Иван Каплюченко</h2>
                <p>Основатель проекта, CEO</p>
            </div>

            <div class="team_member">
                <img src="../assets/ava-2.png" alt="ava">
                <h2>Богдан Марфейчук</h2>
                <p>Технический директор, CIO</p>
            </div>


            <div class="team_member">
                <img src="../assets/ava-3.png" alt="ava">
                <h2>Владимир Казбанов</h2>
                <p>Инвестор проекта, CFO</p>
            </div>

            <div class="team_member">
                <img src="../assets/ava-4.png" alt="ava">
                <h2>Александр</h2>
                <p>Дизайнер проекта</p>
            </div>

            <div class="team_member">
                <img src="../assets/ava-5.png" alt="ava">
                <h2>Даниил</h2>
                <p>Маркетолог, PR</p>
            </div>


            <div class="team_member">
                <img src="../assets/ava-6.png" alt="ava">
                <h2>Раден</h2>
                <p>Контент мейкер</p>
            </div>

            <div class="team_member">
                <img src="../assets/ava-7.png" alt="ava">
                <h2>Анна</h2>
                <p>Копирайтер, SMM</p>
            </div>


            <div class="team_member">
                <img src="../assets/ava-8.png" alt="ava">
                <h2>Екатерина</h2>
                <p>HR специалист</p>
            </div>
        </div>



        <div class="team_background_images">
            <img class="team_background_images_1" src="../assets/back/whatsapp_back.png" alt="whatsapp_back">
            <img class="team_background_images_2" src="../assets/back/vk_back.png" alt="vk_back">
            <img class="team_background_images_3" src="../assets/back/purplesn.png" alt="1">
            <img class="team_background_images_4" src="../assets/back/greymy.png" alt="2">
            <img class="team_background_images_5" src="../assets/back/greysn.png" alt="3">


       </div>
    </div>
</template>


<script>
export default {
    name: 'Team',
}
</script>


<style lang="sass">
@media screen and (min-width: 456px)
    .team
        width: 1200px
        height: 800px
        .team_intro
            width: 480px    
            margin-top: 150px
            display: inline-block
            h1
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 0px
                margin: 0
            p
                font-weight: 400
                font-size: 18px
                color: #222
                line-height: 30px
                width: 88%
        .team_members
            display: inline-block
            position: relative
            top: -290px

            .team_member
                vertical-align: top
                text-align: center
                width: 240px
                margin-top: 50px
                display: inline-block

                h2
                    font-weight: 500
                    font-size: 20px
                    line-height: 22px
                    color: #370954
                p
                    font-size: 18px
                    line-height: 22px
                    font-weight: 400
                    color: #222
                    text-align: center
                    width: 90%
                    padding: 0 5%
                    margin: 0
        .team_members_phone
            display: none
        .team_background_images
            position: relative
            height: 0px
            img
                position: relative
            .team_background_images_1
                top: -1025px
                left: 70px
                z-index: 3
            .team_background_images_2
                position: absolute
                top: -420px
                right: -100px
            .team_background_images_3
                top: -1110px
                left: 140px
            .team_background_images_4
                top: -1130px
                left: 210px
                z-index: 3
            .team_background_images_5
                top: -1135px
                left: 620px
                z-index: 1






@media screen and (max-width: 456px)
    .team
        height: 1500px
        .team_intro
            width: 93%
            padding-left: 7%
            margin-top: 80px
            display: inline-block
            h1
                font-size: 30px
                width: 95%
                line-height: 42px
                font-weight: 700
                color: #370954
                padding-bottom: 0px
                margin: 0
            p
                font-weight: 400
                font-size: 18px
                color: #222
                line-height: 30px
                width: 95%
        .team_members
            display: none
        .team_members_phone
            display: flex
            width: 100vw
            flex-wrap: wrap
            .team_member
                vertical-align: top
                text-align: center
                width: 50vw
                margin-top: 20px
                img
                    width: 80%
              

                h2
                    font-weight: 500
                    font-size: 4.38vw
                    line-height: 22px
                    color: #370954
                    margin: 1vh 0
                p
                    font-size: 3.947vw
                    line-height: 22px
                    font-weight: 400
                    color: #222
                    text-align: center
                    width: 90%
                    padding: 0 5%
                    margin: 0
        .team_background_images
            position: relative
            height: 0px
            width: 100%
            img
                position: relative
                display: none
            .team_background_images_1
                display: block
                position: absolute
                top: -1445px
                right: 0px
                z-index: 3
            .team_background_images_2
                position: absolute
                top: -420px
                right: -100px
            .team_background_images_3
                display: block
                top: -90px
                left: 46vw
            .team_background_images_4
                top: -1130px
                left: 210px
                z-index: 3
            .team_background_images_5
                display: block
                top: -1035px
                left: 55vw
                z-index: 1

</style>