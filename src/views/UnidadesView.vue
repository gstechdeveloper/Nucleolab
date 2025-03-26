<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="wallpaperunidades">
                    <div>
                        Nossas Unidades
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="container-fluid">
                    <div class="row row-interno">
                        <CardLocalization 
                            titulo="Brumadinho"
                            endereco= "R. República da Argentina, 75, B. Santo Antônio, Brumadinho."
                            linkligar="tel:+553120100293"
                            linkwpp="https://api.whatsapp.com/send/?phone=5531991835253"
                            linkrotas="https://www.google.com/maps/dir//N%C3%BAcleo+Especialidades+M%C3%A9dicas+-+R.+Rep%C3%BAblica+da+Argentina,+75+-+Santo+Antonio,+Brumadinho+-+MG,+35460-000/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xa6cd62bb316a11:0xa77c86bcd421682b?sa=X&ved=1t:57443&ictx=111"
                        />

                        <CardLocalization 
                            titulo="Mantiqueira"
                            endereco= "Av. Joaquim Abel Coelho, 75 B. Mantiqueira – Belo Horizonte."
                            linkligar="tel:+553134557400 "
                            linkwpp="https://api.whatsapp.com/send/?phone=553134557400"
                            linkrotas="https://www.google.com/maps/dir//Av.+Joaquim+Abel+Coelho,+75+-+Mantiqueira,+Belo+Horizonte+-+MG,+31652-290/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xa68efff9948b7f:0x3d15a812d618467a?sa=X&ved=1t:707&ictx=111"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardLocalization from '@/elements/CardLocalization.vue';



    export default{
        name: "UnidadesView",
        components: {
            CardLocalization
        }
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