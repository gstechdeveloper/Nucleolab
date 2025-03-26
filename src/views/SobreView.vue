<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="wallpaperunidades">
                    <div>
                        Sobre o Núcleo
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="container p-5">
                    <div class="row row-interno">
                        <div class="col-10">
                            
                            <p>Desde 1996, o Núcleolab entrega serviços em saúde.</p>
                            <br>
                            <p>Fundado em 1996, o Núcleolab é uma rede de análises clínicas Citológico e Toxicológico. Atualmente, possui unidades distribuídas por toda Minas Gerais, um avanço conquistado pela utilização dos mais modernos equipamentos do mercado, sempre com agilidade, segurança e qualidade na realização dos exames.</p>
                            <br>
                            <p>O Núcleolab, de acordo com os processos de trabalho implementados oferece resultados mais rápidos, precisos e seguro. Tendo o contratante suporte adequado através de;</p>
                            <br>
                            <p>➟ Coleta empresarial.</p>
                            <br>
                            <p>➟ Realizamos mais de 3 mil tipos de exames.</p>
                            <br>
                            <p>➟ Acessória científica!</p>
                            <br>
                            <p>➟ Resultados de exames on-line ou via sistema.</p>
                            <br>
                            <p>➟ O Núcleolab conta com um corpo clínico com alto grau de qualificação e experiência nas mais diversas especialidades. Isso se traduz em maior segurança e qualidade de serviços para médicos e pacientes.</p>
                            <br>
                            <p>➟ Trabalhamos com equipamentos de ponta, para garantir resultados precisos e ágeis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "MedicosView",

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