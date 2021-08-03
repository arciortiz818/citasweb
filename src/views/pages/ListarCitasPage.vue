<template>
  <b-card
    header-bg-variant="info"
    header-text-variant="white"
    class="text-left"
  >
    <listar-citas></listar-citas>
  </b-card>
</template>
<script>
  import ListarCitas from "../components/ListarCitasComponent.vue";
  import GrupoFamiliarComponent from "../components/GrupoFamiliarComponent.vue";
  import { mapActions, mapState } from "vuex";
  export default {
    components: {
      GrupoFamiliarComponent,
      "listar-citas": ListarCitas,
    },
    data() {
      return {};
    },
    mounted() {
      if (this.tokenAuth === null) {
        this.logout().then((rta) => {
          this.$router.replace("/login");
        });
      }
    },
    computed: {
      ...mapState(["currentStep", "tokenAuth", "grupoFamiliar"]),
    },
    methods: {
      ...mapActions(["logout"]),
    },
  };
</script>
