<template>
  <div>
    <b-row class="mb-3">
      <b-col>
        <b-card-text
          >Seleccione la especialidad en la que desea asignar su
          cita:</b-card-text
        >
      </b-col>
    </b-row>
    <b-row align-h="center">
      <div class="d-flex justify-content-center mb-3 mt-3">
        <b-icon
          v-if="loading"
          icon="arrow-repeat"
          animation="spin-reverse"
          font-scale="4"
        ></b-icon>
      </div>
    </b-row>
    <b-row>
      <b-col v-if="items.length > 0">
        <b-table
          :fields="fields"
          :items="items"
          small
          head-variant="dark"
          bordered
          :tbody-tr-class="rowClass"
          @row-clicked="seleccionar($event)"
        >
        </b-table>
      </b-col>
    </b-row>
    <b-row v-if="!loading">
      <b-col>
        <b-button @click="prevStep()" variant="dark" class="btn-steps"
          >Anterior</b-button
        >
        <b-button @click="nextStep()" variant="dark" class="btn-steps"
          >Siguiente</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    props: ["docSelected"],
    data: () => {
      return {
        loading: false,
        fields: [{ key: "nombre", label: "Especialidades" }],
        items: [],
        espSelected: null,
      };
    },
    computed: {
      ...mapState(["afiliado", "especialidades", "cita"]),
    },
    mounted() {
      this.listarEspecialidades();
    },
    methods: {
      ...mapActions([
        "getEspecialidadesAfil",
        "setEspecialidadCita",
        "nextStep",
        "prevStep",
      ]),
      listarEspecialidades() {
        this.loading = true;
        this.getEspecialidadesAfil()
          .then((rta) => {
            this.items = this.especialidades.map((e) => {
              return {
                codigo: e.codespecialidad,
                nombre: e.especialidad,
              };
            });
            this.loading = false;
          })
          .catch((error) => {
            this.$toastr.e("No fue posible consultar las especialidades.");
            this.loading = false;
            if (error.status == 401) {
              this.logout().then((rta) => {
                this.$router.replace("/login");
              });
            }
          });
      },
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.codigo == this.cita.especialidad) {
          return "row-selected cursor-pointer";
        } else {
          return "cursor-pointer";
        }
      },
      seleccionar(item) {
        this.setEspecialidadCita(item.codigo);
      },
    },
  };
</script>
