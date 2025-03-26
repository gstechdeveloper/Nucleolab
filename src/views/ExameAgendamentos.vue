<template>
    <div class="container-fluid">
        <div class="row">

            <div class="col-12 col-sm-6 p-2">
                <a href="https://api.whatsapp.com/send/?phone=5531991835253&text=Ola%20gostaria%20de%20realizar%20um%20agendamento%20a%20domicilio.">Agendamento a Domicilio</a>
            </div>

            <div class="col-12 col-sm-6 p-2">
                <a href="https://api.whatsapp.com/send/?phone=5531991835253&text=Ola%20gostaria%20de%20realizar%20um%20agendamento%20presencial.">Agendamento Presencial</a>
            </div>


            
        </div>
    </div>
</template>
  
  <script>

      export default{
          name: "ExamesResultadosView.vue"
      }
  </script>
  
<style scoped>
    a{
        display: block;
        border-radius: 15px;
        padding: 20px;
        border: 1px solid #ccc;
        text-decoration: none;
        text-align: center;
        color: black;
        box-shadow: 2px 2px 16px rgba(0,0,0,0.1);
    }

    a:hover{
        background: #37c3ee;
        color: white
    }

    .container-fluid{
        padding: 10px;
        background: #F0F0F0;
    }

    .row, .col-12 , .col-sm-6{
        background: #F0F0F0;
    }
</style>