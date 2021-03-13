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






@media screen and (max-width: 456px)
    .team
        height: 800px
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

</style>