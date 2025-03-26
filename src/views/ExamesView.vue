<template>
  <carrousel-element />
  <toolbar-exames-component />
  <router-view />
</template>

<script>
    import ToolbarExamesComponent from '@/components/ToolbarExamesComponent.vue';
    import CarrouselElement from '@/elements/CarrouselElement.vue';


    export default{
        name: "ExamesView",
        components: {
          ToolbarExamesComponent,
          CarrouselElement
        }
    }
</script>

<style scoped>

</style>