<template>
    <div class="card p-4 mt-3" @click="conteudo = !conteudo" :class="{blue: conteudo,}">
        <h5 class="card-title">{{titulo}}
            <svg xmlns="http://www.w3.org/2000/svg" v-if="!conteudo" width="16" height="16" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" v-if="conteudo" width="16" height="16" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"/>
</svg>
        </h5>
            <Transition name="fade">
                <p v-if="conteudo">
                    <slot name="corpo">
                        Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.
                    </slot>
                </p>
            </Transition>
    </div>
</template>

<script>
    export default{
        name: "CardElement",
        data: () => ({
            conteudo: false
        }),
        props: {
            titulo: String
        }
    }
</script>

<style scoped>
    .card{
        border-radius: 15px;
        border: 0;
        box-shadow: 2px 2px 16px 0px rgb(0 0 0 / 10%);
        scale: 0.95;
        cursor: pointer;
    }

    .card:hover{
        scale: 1.0;
        background: #37c3ee;
        color: white;
        fill: white;
    }

    .blue{
        background: #37c3ee;
        color: white;
        fill: white;
    }

    .fade-enter-active{
        transition: all 1.5s ease-out;
    }
    .fade-leave-active {
        transition: all 0.5s ease-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        translate: 30px;
    }

    h5, p, svg{
        background: transparent;
    }

</style>