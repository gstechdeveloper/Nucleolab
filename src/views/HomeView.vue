<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="wallpaperunidades">
                    <div>
                        Início
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="container-fluid p-3">
                    <div class="row row-interno">
                        <div class="col-12 col-md-10 p-3">
                            <h1 class="paragraph-title">Confira nossos check ups:</h1>
                        </div>
                    </div>
                    <div class="row row-interno">
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P1.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P2.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P3.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P4.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P5.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P6.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P7.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P8.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P9.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P10.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P11.png" class="w-100">
                        </div>
                        <div class="col-12 col-md-6 p-3">
                            <img src="@/assets/promocoes/P12.png" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "HomeView",

    }
</script>

<style scoped>
    .container-fluid{
    
    }

    .wallpaperunidades{
        background: url("@/assets/images/WallpaperUnidades.png");
        background-size: cover;
        height: 300px;
        color: white;
        display: flex;
        align-items: center;
        font-size: 2.5rem;
        padding: 20px;
    }

    .paragraph-title{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 2rem;
    }

    *{
        background: #F0F0F0
    }

    div{
        background: transparent;
    }
    
    *{
        margin: 0;
        padding: 0;
    }

    .row{
        background: #F0F0F0;
    }

    .row-interno{
        padding: 10px;
    }

</style>