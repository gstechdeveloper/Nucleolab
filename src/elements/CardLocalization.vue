<template>
    <div class="card-widget col-12 col-sm-4 mx-0 mx-sm-2">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-main" viewBox="0 0 16 16">
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
            </svg>
        </div>
        <div>
            <p>{{titulo}}</p>
            <p>{{endereco}}</p>
        </div>
        <div style="margin-top: 30px">
            <a :href="linkligar" class="cardLocalization-btn mr-2">
                Ligar
            </a>

            <a :href="linkwpp" class="cardLocalization-btn mr-2">
                WhatsApp
            </a>

            <a :href="linkrotas" class="cardLocalization-btn ml-2">
                Rotas
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name: "CardLocalization",
        props: {
            titulo: String,
            endereco: String,
            linkligar: String,
            linkrotas: String,
            linkwpp: String
        }
    }
</script>

<style scoped>

    *{
        background: transparent;
    }
    
    .card-widget{
        border-radius: 15px;
        text-align: center;
        padding: 20px;
        color: white;
        background: #37c3ee;
        fill: white;
        box-shadow: 2px 2px 16px rgba(0 0 0 / 20%);
    }

    a{
        display: block;
    }

    .cardLocalization-btn{
        background: #016482;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 10px;
        outline: 4px solid transparent;
        margin-top: 10px;
    }

    .cardLocalization-btn:hover{
        background: #007a9f;
        outline-color: rgba(1, 62, 80, 0.2)
    }

    .card-widget:hover{
        background: #4dd5ff;
    }
    
    .icon-main{
        width: 5rem;
        background: transparent;
    }
    div, p{
        margin-top: 10px;
        background: transparent;
    }

    .icon{
        padding: 5px;
    }
</style>