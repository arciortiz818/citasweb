<template>
  <div>
    <b-navbar
      text="white"
      style="background-color: white; border: solid 1px gray; box-shadow: 2px 2px 5px #999;"
    >
      <b-navbar-brand href="https://www.alianzadiagnostica.com">
        <b-img
          src="https://www.alianzadiagnostica.com/images/logo-img.png"
          alt=""
        ></b-img>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto" v-show="tokenAuth !== null">
        <b-nav-item
          ><b-button
            @click="closeSesion()"
            variant="success"
            style="background-color: #00b350"
            size="lg"
            >Salir</b-button
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid="lg" class="mt-2">
      <b-row class="mt-3">
        <!-- <b-col cols="12" sm="12" md="12" lg="3" xl="3" class="mb-5"> -->
        <!-- <b-card class="text-left">
            <b-card-text class="text-name-user"
              ><h4>Javier Eduardo Arciniegas Ortiz</h4></b-card-text
            >
            <b-card-text class="text-profile"
              ><span>Perfil: Cotizante</span></b-card-text
            >
          </b-card> -->
        <b-col>
          <router-view />
        </b-col>
      </b-row>
      <b-row
        class="mt-4"
        v-if="$route.name != 'Home' && $route.name != 'Login'"
      >
        <b-col>
          <b-button to="/" variant="dark" class="btn-menu-principal"
            >Menú Principal</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { mapActions, mapState } from "vuex";

  export default {
    data() {
      return {};
    },
    mounted() {},
    computed: {
      ...mapState(["currentStep", "tokenAuth"]),
    },
    methods: {
      ...mapActions(["logout"]),
      closeSesion() {
        this.logout().then((rta) => {
          this.$router.push("/login");
        });
      },
    },
  };
</script>
<style></style>
