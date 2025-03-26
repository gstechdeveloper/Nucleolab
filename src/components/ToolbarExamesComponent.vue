<template>
    <nav class="container-fluid">
        <div class="row">
            <router-link class="col col-lg-3 router" to="/exames/exames">
                Exames
            </router-link>
            <router-link class="col col-lg-3 router" to="/exames/agendamento">
                Agendamento
            </router-link>

            <router-link class="col col-lg-3 router" to="/exames/resultados">
                Resultados
            </router-link>
        </div>
    </nav>
</template>

<script>

    export default{
        name: "ToolbarExamesComponent",
    }
</script>

<style scoped>
    .router{
        border: 1px solid #eee;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        color: black;
    }

    .router:hover{
        background: #00c3fe;
        color: white;
    }

    .router-link-active{
        background: #00c3fe;
        color: white;
    }
</style>