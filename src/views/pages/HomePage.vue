<template>
  <b-card
    class="text-center mt-5"
    header-bg-variant="dark"
    header-text-variant="white"
    v-show="tokenAuth !== null"
  >
    <template #header>
      <h4>Bienvenido, Protegido salud total</h4>
    </template>
    <b-container>
      <b-row align-h="center" v-show="grupoFamiliar.length == 0">
        <b-container>
          <b-row align-h="center">
            <div class="d-flex justify-content-center ">
              <b-icon
                icon="arrow-repeat"
                animation="spin-reverse"
                font-scale="4"
              ></b-icon>
            </div>
          </b-row>
          <b-row align-h="center">
            <div class="d-flex justify-content-center ">
              <b-card-text>Estamos cargando tu información...</b-card-text>
            </div>
          </b-row>
        </b-container>
      </b-row>
      <b-row class="mt-5" v-show="grupoFamiliar.length > 0">
        <b-col></b-col>
        <b-col class="text-center">
          <router-link
            to="/citas"
            class="link-home"
            title="Solicitar una cita nueva"
          >
            <b-icon
              stacked
              icon="calendar-date"
              style="font-size: 1.5rem; color: #0A2799"
              class="icon-home"
            ></b-icon>
            <p>Asignar Cita</p>
          </router-link>
        </b-col>
        <b-col class="text-center">
          <router-link
            to="/mis-citas"
            class="link-home"
            title="Ver/Cancelar citas"
          >
            <b-icon
              stacked
              icon="calendar-check"
              style="font-size: 1.5rem; color: #0A2799"
              class="icon-home"
            ></b-icon>
            <p>Mis Citas</p>
          </router-link>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </b-card>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState(["tokenAuth", "tokenAfiliado", "grupoFamiliar"]),
    },
    mounted() {
      if (this.tokenAuth === null) {
        this.logout().then((rta) => {
          this.$router.replace("/login");
        });
      }
    },
    updated() {
      // if (this.tokenAfiliado) {
      //   this.getGrupoFamiliarAfil();
      // }
    },
    methods: {
      ...mapActions(["validateAuthToken", "logout", "getGrupoFamiliarAfil"]),
    },
  };
</script>
<style>
  .icon-home {
    height: 40%;
    cursor: pointer;
  }
  .link-home p {
    font-size: 1.5rem;
  }
</style>
