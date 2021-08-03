<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<style lang="scss"></style>

<script>
  import LoginLayout from "./views/layouts/LoginLayout";
  import MainLayout from "./views/layouts/MainLayout";
  import { mapState } from "vuex";

  export default {
    components: {
      LoginLayout,
      MainLayout,
    },
    computed: {
      ...mapState(["layout"]),
    },
  };
</script>
<style>
  body {
    background-color: whitesmoke;
  }

  .text-name-user {
    font-size: 1.5rem;
    font-weight: bolder;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 0px !important;
  }

  .text-profile {
    font-size: 1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 0px !important;
  }

  .item-list:hover {
    padding-left: 25px;
    font-weight: bolder;
    background-color: #00b350 !important;
    color: white !important;
  }
  .item-activo {
    background-color: #0a2799 !important;
    color: white !important;
  }
  .btn-menu-principal {
    background-color: #00b350 !important;
  }
  .row-selected {
    background-color: #00b35142;
    color: black;
    font-weight: bold;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .btn-steps {
    /* background-color: #00b350 !important; */
    margin-right: 20px;
  }
  .step-progress__step-label {
    font-size: 30px !important;
  }
  .step-progress__wrapper {
    zoom: 0.4;
  }

  .step-progress__step-icon {
    color: white !important;
  }
</style>
// verde // #00B350 // azul #0A2799
