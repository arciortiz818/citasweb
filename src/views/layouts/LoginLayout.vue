<template>
  <b-container class="main-login">
    <b-row>
        <b-col>
            <b-card bg-variant="info" text-variant="white" class="text-center">
                <h4>Bienvenido al Servicio Virtual de Asignación de Citas</h4>
            </b-card>
        </b-col>
    </b-row>
    <b-row>
      <b-col>
          <b-card header-bg-variant="Info" class="text-left">
            <b-form @submit="onSubmit">
                <b-form-group label="Tipo de Usuario:" label-for="input-1">
                    <b-form-select
                    id="input-1"
                    v-model="form.userType"
                    :options="userTypes"
                    :value="null"
                    required
                    ></b-form-select>
                </b-form-group>
                <b-form-group label="Tipo de Identificación del Usuario:" label-for="input-2">
                    <b-form-select
                    id="input-2"
                    v-model="form.identificationType"
                    :options="identificationTypes"
                    :value="null"
                    required
                    ></b-form-select>
                </b-form-group>
                <b-form-group label="Número de Identificación del Usuario:" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="form.identification"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label="Clave:" label-for="input-4">
                    <b-form-input
                    id="input-4"
                    type="password"
                    v-model="form.password"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group class="mt-4">
                    <b-button type="submit" variant="primary" size="lg">Ingresar</b-button>
                </b-form-group>
            </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  export default {
    data() {
      return {
        userTypes: [{ value: null, text: "Seleccione" }],
        identificationTypes: [{ value: null, text: "Seleccione" }],
        form: {
          userType: "",
          identificationType: "",
          identification: "",
          password: "",
        },
      };
    },
    methods: {
      onSubmit() {},
    },
  };
</script>
<style>
    .main-login{
        margin-top: 15vh;
    }
</style>