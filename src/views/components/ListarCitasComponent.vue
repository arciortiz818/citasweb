<template>
  <div>
    <b-row class="mb-5" style="color: #0A2799">
      <b-col>
        <b-card-title>Consultar / Cancelar Citas</b-card-title>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
        <label for=""
          >Seleccione el afiliado del grupo familiar que desea consultar:</label
        >
        <b-form-select
          v-model="afilSelected"
          :options="itemsGrupoFamiliar"
          @change="listarCitas()"
        >
        </b-form-select>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-5" v-show="loading">
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
            <b-card-text>Consultando listado de citas</b-card-text>
          </div>
        </b-row>
      </b-container>
    </b-row>
    <b-row align-h="center" class="mt-5" v-show="cancelando">
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
            <b-card-text>Realizando cancelación...</b-card-text>
          </div>
        </b-row>
      </b-container>
    </b-row>
    <b-row class="mt-5" v-show="items.length > 0 && !loading && !cancelando">
      <b-col cols="12" sm="12" md="12" lg="12" xl="12">
        <h6>Listado de Citas para el afiliado seleccionado:</h6>
        <b-table
          :fields="fields"
          :items="items"
          small
          head-variant="dark"
          bordered
          responsive
          id="tbl-lista-citas"
        >
          <template #cell(cancelar)="data">
            <b-button
              size="sm"
              variant="outline-danger"
              @click="cancelarCita(data.item)"
              >Cancelar Cita</b-button
            >
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      v-if="items.length <= 0 && !loading && this.afilSelected !== null"
    >
      <b-col>
        <b-card-text class="text-center" style="font-weight: bolder"
          >Sin citas</b-card-text
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import moment from "moment";
  export default {
    props: ["docSelected"],
    data: () => {
      return {
        loading: false,
        cancelando: false,
        fields: [
          { key: "especialidad", label: "Especialidad" },
          { key: "medico", label: "Médico" },
          { key: "fecha", label: "Fecha" },
          { key: "hora", label: "Hora" },
          { key: "unidad", label: "Unidad" },
          { key: "direccion", label: "Dirección" },
          { key: "cancelar", label: "" },
        ],
        items: [],
        afilSelected: null,
        itemsGrupoFamiliar: [],
      };
    },
    computed: {
      ...mapState(["userLogged", "cita", "grupoFamiliar"]),
    },
    created() {
      this.loadInputSelect();
    },
    methods: {
      ...mapActions(["getCitasVigentes", "cancelaCita", "logout"]),
      listarCitas() {
        this.loading = true;
        this.sinCitas = false;
        this.getCitasVigentes(this.afilSelected)
          .then((rta) => {
            this.items = rta.map((el) => {
              return {
                id: el.id,
                especialidad: el.NombreEspecialidad,
                medico: el.nombremedico,
                fecha: moment(el.fecha)
                  .locale("es")
                  .format("dddd, LL"),
                hora: moment(el.fecha).format("hh:mm a"),
                unidad: el.nombreips,
                direccion: el.direccionips,
              };
              // this.items = rta;
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
      cancelarCita(item) {
        let idCita = item.id;
        this.cancelando = true;
        this.cancelaCita({ idCita: idCita, afiliado: this.afilSelected })
          .then((rta) => {
            this.$bvModal
              .msgBoxConfirm(
                `${rta.mensaje}. Número de cancelación: ${rta.numeroCancelacion}`,
                {
                  title: "Confirmación Cancelación de Cita",
                  size: "md",
                  buttonSize: "lg",
                  okVariant: "primary",
                  okTitle: "Cerrar",
                  footerClass: "p-2",
                  hideHeaderClose: false,
                  centered: true,
                  okOnly: true,
                }
              )
              .then((value) => {
                this.cancelando = false;
                // this.listarCitas();
                this.logout().then((error) => {
                  this.$router.replace("/login");
                });
              });
            // this.$bvModal
            //   .msgBoxOk(
            //     `${rta.mensaje}. Número de cancelación: ${rta.numeroCancelacion}`
            //   )
          })
          .catch((error) => {
            this.cancelando = false;
            this.$toastr.e("No se canceló la cita.");
          });
      },
      loadInputSelect() {
        this.itemsTemp = this.grupoFamiliar.map((item) => {
          return {
            value: item.BeneficiarioId,
            text: item.Nombres,
          };
        });
        this.itemsGrupoFamiliar.push({
          value: null,
          text: "Seleccione...",
        });
        this.itemsTemp.forEach((el) => {
          this.itemsGrupoFamiliar.push(el);
        });
      },
    },
  };
</script>
