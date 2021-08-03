<template>
  <div>
    <b-card
      header-bg-variant="info"
      header-text-variant="white"
      class="text-left"
    >
      <!-- <b-row>
        <b-col>
          Estimado usuario(a), a continuación encontrará el listado de sus citas
          y/o las de sus beneficiarios.
        </b-col>
      </b-row> -->
      <b-row class="mb-5" style="color: #0A2799">
        <b-col>
          <b-card-title>Asignar Citas</b-card-title>
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col>
          <step-progress
            :steps="mySteps"
            :current-step="currentStep"
            icon-class="fa fa-check"
            active-color="green"
          ></step-progress>
        </b-col>
      </b-row>
      <h6 v-if="nombreBeneficiario">
        Está asignando cita a: {{ nombreBeneficiario }}(Estado:
        {{ estadoBeneficiario }})
      </h6>
      <grupo-familiar-component
        v-if="currentStep == 0"
      ></grupo-familiar-component>
      <especialidades-component
        v-if="currentStep == 1"
      ></especialidades-component>
      <agenda-component v-if="currentStep == 2"></agenda-component>
    </b-card>
  </div>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  import GrupoFamiliarComponent from "../components/GrupoFamiliarComponent.vue";
  import EspecialidadesComponent from "../components/EspecialidadesComponent.vue";
  import AgendaComponent from "../components/AgendaComponent.vue";
  import StepProgress from "vue-step-progress";

  export default {
    components: {
      GrupoFamiliarComponent,
      EspecialidadesComponent,
      AgendaComponent,
      "step-progress": StepProgress,
    },
    data: () => {
      return {
        nombreBeneficiario: "",
        estadoBeneficiario: "",
        datosCita: [],
        mySteps: [
          "Seleccionar Afiliado",
          "Seleccionar Especialidad",
          "Asignar Cita",
        ],
      };
    },
    computed: {
      ...mapState(["currentStep", "tokenAuth"]),
    },
    mounted() {
      this.resetStep();
      if (this.tokenAuth === null) {
        this.logout().then((rta) => {
          this.$router.replace("/login");
        });
      }
    },
    methods: {
      ...mapActions(["resetStep", "logout"]),
      seleccionarBeneficiario(e) {
        this.nombreBeneficiario = e.nombre;
        this.estadoBeneficiario = e.estado;
        this.datosCita.documentoBeneficiario = e.documento;
      },
      seleccionarEspecialidad(e) {},
    },
  };
</script>
