<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="@/assets/logo.png" />
            </a>
            <div class="mr-auto d-none d-lg-block">
                <ul class="navbar-nav mt-sm-3">
                    <router-link class="nav-item" to="/">
                        <span class="nav-link">Início</span>
                    </router-link>
                    <router-link class="nav-item" to="/exames">
                        <span class="nav-link">Exames</span>
                    </router-link>
                    <router-link class="nav-item" to="/unidades">
                        <span class="nav-link">Unidades</span>
                    </router-link>
                    <router-link class="nav-item" to="/convenios">
                        <span class="nav-link">Convênios</span>
                    </router-link>

                    <router-link class="nav-item" to="/sobrenos">
                        <span class="nav-link">Sobre nós</span>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>


    export default{
        name: "NavbarElement"
    }
</script>

<style scoped>
    img{
        width: 15rem
    }

    .navbar{
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
    }

    nav{
        padding: 10px;
        background: #fbfbfb;
        box-shadow: 1px 1px #eee;
    }

    .navbar-nav{
        margin-left: auto;
    }

    .nav-link{
        color: black;
    }

    .nav-item{
        text-decoration: none;
    }

    .router-link-active{
        border-bottom: 3px solid #4cd2fc;
    }
  
</style>