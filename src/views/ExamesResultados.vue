<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 col-1 coluna"></div>
            <div class="col-md-8 col-10 coluna">
                <div class="card m-3" style="box-shadow: 10px 8px 10px #ddd">
                    <div class="card-header" style="background: #0693e3; text-align: center; color: white">
                    Resultado de Exames
                    </div>
                    <div class="card-body">
                        <form id="form_laudos" method="POST" style="text-align: center">
                            <label for="codigocnpj" class="form-label my-2">Código ou CNPJ</label>
                            <input type="text" class="form-control mt-1 text-center" id="codigocnpj" name="codigocnpj" data-required="true" data-title="Código ou CNPJ">
                            <label for="senha" class="form-label my-2">Senha</label>
                            <input type="password" class="form-control mt-1 text-center" id="senha" name="senha" data-required="true" data-title="Senha">
                            <button class="btn btn-outline-primary my-3">Enviar</button>
                        </form>
        </div>
    </div>
            </div>
            <div class="col-md-2 col-1 coluna"></div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "HomeView"
    }
</script>

<style scoped>
    .container-fluid{
        padding: 30px;
    }

    .container-fluid, .row, .coluna{
        background: #F0F0F0;
    }
</style>