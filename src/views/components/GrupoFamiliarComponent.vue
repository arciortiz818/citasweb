<template>
  <div>
    <b-row>
      <b-col>
        <b-card-text
          >A continuación seleccione la persona de su grupo familiar a quien
          desea asignar la cita:</b-card-text
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
    <b-row class="mt-3">
      <b-col cols="12" sm="12" md="12" lg="12" xl="12" v-if="items.length > 0">
        <h6>Grupo Familiar</h6>
        <b-table
          :fields="fields"
          :items="items"
          small
          head-variant="dark"
          bordered
          :tbody-tr-class="rowClass"
          @row-clicked="seleccionar($event)"
          id="tbl-grp-familiar"
        >
        </b-table>
      </b-col>
    </b-row>
    <b-row v-if="!loading">
      <b-col>
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
    data: () => {
      return {
        loading: false,
        fields: [
          { key: "documento", label: "Documento" },
          { key: "nombre", label: "Nombre" },
        ],
        items: [],
      };
    },
    computed: {
      ...mapState(["afiliado", "cita", "tokenAfiliado", "identificationTypes"]),
    },
    created() {},
    mounted() {
      this.listarGrupoFamiliar();
    },
    methods: {
      ...mapActions([
        "getGrupoFamiliarAfil",
        "setAfiliadoCita",
        "nextStep",
        "getInfoAfiliado",
      ]),
      listarGrupoFamiliar() {
        this.loading = true;
        this.getGrupoFamiliarAfil()
          .then((rta) => {
            this.items = rta.map((el) => {
              if (el.BeneficiarioId == this.afiliado.identificacion) {
                this.seleccionar({
                  documento: el.BeneficiarioId,
                  documentoId: el.BeneficiarioTipoId,
                  nombre: el.Nombres,
                  estado: el.EstadoServicio,
                });
              }
              return {
                documento: el.BeneficiarioId,
                documentoId: el.BeneficiarioTipoId,
                nombre: el.Nombres,
                estado: el.EstadoServicio,
              };
            });
            this.loading = false;
          })
          .catch((error) => {
            // this.$toastr.e("No fue posible consultar los datos del afiliado.");
            this.loading = false;
            if (error.status !== null && error.status == 401) {
              this.logout().then((rta) => {
                this.$router.replace("/login");
              });
            }
          });
      },
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.documento === this.cita.afiliado.identificacion) {
          return "row-selected cursor-pointer";
        } else {
          return "cursor-pointer";
        }
      },
      seleccionar(item) {
        let docId = this.identificationTypes.find(
          (e) => e.value == item.documentoId
        );
        this.setAfiliadoCita({
          identificacion: item.documento,
          identificacionId: docId.id,
        });
      },
    },
  };
</script>
