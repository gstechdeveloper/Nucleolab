<template>
  <header-component />

  <router-view/>

  <footer-component class="d-none d-lg-block" />

  <navbar-mobile-element />
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import NavbarMobileElement from '@/elements/NavbarMobileElement.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

  export default{
    name: "App",
    components: {
      HeaderComponent,
      NavbarMobileElement,
      FooterComponent
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    background: #fbfbfb;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
</style>
