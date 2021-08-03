<template>
  <b-container class="main-login">
    <!-- <b-row align-h="center">
      <b-col cols="8">
        <b-card text-variant="white" class="text-center">
          <img
            src="https://www.alianzadiagnostica.com/images/logo-img.png"
            alt=""
            class="mb-3"
          />
          <h4 style="background-color: #0A2799">
            Bienvenido al Servicio Virtual de Asignación de Citas
          </h4>
        </b-card>
      </b-col>
    </b-row> -->
    <b-row align-h="center" class="text-center">
      <b-col cols="12" sm="12" md="12" lg="8" xl="8">
        <b-card header-bg-variant="Info" class="text-left">
          <b-card-text class="text-center">
            <b-img
              src="https://www.alianzadiagnostica.com/images/logo-img.png"
              alt=""
              class="mb-3"
            ></b-img>
            <h4 style="color: #0A2799">
              Servicio Virtual de Asignación de Citas
            </h4>
            <h5 style="color: #0A2799">
              Protegidos Salud Total
            </h5>
          </b-card-text>
          <b-form @submit.prevent="onSubmit">
            <b-form-group label="Tipo de Usuario:" label-for="input-1">
              <b-form-select
                id="input-1"
                v-model="form.userType"
                :options="userTypes"
                :value="null"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group
              label="Tipo de Identificación del Usuario:"
              label-for="input-2"
            >
              <b-form-select
                id="input-2"
                v-model="form.identificacionId"
                :options="identificationTypes"
                :value="null"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group
              label="Número de Identificación del Usuario:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.identificacion"
                required
              ></b-form-input>
            </b-form-group>
            <!-- <b-form-group label="Clave:" label-for="input-4">
              <b-form-input
                id="input-4"
                type="password"
                v-model="form.password"
                required
              ></b-form-input>
            </b-form-group> -->
            <b-form-group class="mt-4 text-center">
              <b-button
                type="submit"
                style="background-color: #0A2799"
                size="lg"
                >Ingresar</b-button
              >
            </b-form-group>
            <b-row align-h="center">
              <div class="d-flex justify-content-center ">
                <b-icon
                  v-if="loading"
                  icon="arrow-repeat"
                  animation="spin-reverse"
                  font-scale="4"
                ></b-icon>
              </div>
            </b-row>
            <b-form-group class="mt-4">
              <b-alert
                :show="dismissCountDown"
                dismissible
                fade
                variant="danger"
                @dismiss-count-down="countDownChanged"
              >
                {{ msgNotification }}
              </b-alert>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
        // form: {
        //   userType: "AFI",
        //   identificationType: "C",
        //   identification: "1085095941",
        //   password: "saludtotal",
        // },
        form: {
          userType: null,
          identificacionId: null,
          identificacion: null,
          // password: null,
        },
        msgNotification: null,
        showNotification: false,
        dismissSecs: 4,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        loading: false,
      };
    },
    computed: {
      ...mapState(["userLogged", "identificationTypes", "userTypes"]),
    },
    methods: {
      ...mapActions(["setLayout", "loginApi", "getGrupoFamiliarAfil"]),
      onSubmit() {
        this.showNotification = false;
        this.msgNotification = null;
        this.loading = true;

        this.loginApi(this.form)
          .then(async (response) => {
            this.loading = false;
            this.$router.push("/");
          })
          .catch((error) => {
            this.loading = false;
            // this.$toastr.e(error, "Inicio Sesión");
            this.msgNotification = "Los datos de acceso son incorrectos";
            this.showNotification = true;
            this.dismissCountDown = this.dismissSecs;
          });
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      },
    },
  };
</script>
<style>
  .main-login {
    margin-top: 5vh;
  }
</style>
