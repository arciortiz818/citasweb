<template>
  <div>
    <b-row class="mb-3">
      <b-col>
        <b-card-text
          >Seleccione la fecha para su cita y en la tabla inferior seleccione su
          cita:</b-card-text
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="12" md="5" lg="4" xl="3">
        <b-row>
          <b-col>
            <b-calendar
              v-model="fechaCita"
              @context="onSelectDate"
              locale="es-CO"
              selected-variant="primary"
              today-variant="danger"
              nav-button-variant="primary"
              class="mb-3"
            ></b-calendar>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col>
            <b-button @click="prevStep()" variant="dark" class="btn-steps"
              >Anterior</b-button
            >
            <b-button @click="cancelar()" variant="dark" class="btn-steps"
              >Cancelar</b-button
            >
          </b-col>
        </b-row>
      </b-col>

      <b-col>
        <b-table
          :fields="fields"
          :items="items"
          :per-page="perPage"
          :currentPage="currentPage"
          small
          hover
          head-variant="dark"
          bordered
          :tbody-tr-class="rowClass"
          @row-clicked="seleccionar($event)"
          id="tbl-agenda"
          v-show="!loading && !asignando"
        >
          <template #cell(sede)="data">
            <b-row>
              <b-col>
                {{ data.item.sede }}
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <span class="text-muted" style="font-size:small;">{{
                  data.item.dirSede
                }}</span>
              </b-col>
            </b-row>
          </template>
        </b-table>
        <b-row align-h="center" v-show="loading">
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
                <b-card-text>Consultando agenda disponible...</b-card-text>
              </div>
            </b-row>
          </b-container>
        </b-row>
        <b-row align-h="center" v-show="asignando">
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
                <b-card-text>Asignando cita, un momento...</b-card-text>
              </div>
            </b-row>
          </b-container>
        </b-row>
        <b-row v-if="items.length > 0 && !loading && !asignando">
          <b-col>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="tbl-agenda"
              align="center"
            ></b-pagination>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  import moment from "moment";
  export default {
    data: () => {
      return {
        loading: false,
        asignando: false,
        context: null,
        fields: [
          { key: "medico", label: "Médico" },
          { key: "fecha", label: "Fecha" },
          { key: "hora", label: "Hora" },
          { key: "sede", label: "Sede" },
        ],
        items: [],
        fechaCita: null,
        currentPage: 1,
        perPage: 10,
        showError: false,
        error: null,
      };
    },
    computed: {
      ...mapState(["userLogged", "cita"]),
      rows() {
        return this.items.length;
      },
    },
    mounted() {
      // this.getInfoAfiliado().then((rta) => {
      //   console.log("info afiliado", rta);
      // });
    },
    methods: {
      ...mapActions([
        "setFechaCita",
        "getAgenda",
        "setIdCita",
        "getInfoAfiliado",
        "logout",
        "asignarCita",
        "prevStep",
        "resetStep",
      ]),
      onSelectDate(ctx) {
        // this.showError = false;
        // this.error = "";
        if (
          ctx.selectedDate &&
          this.cita.fecha !== moment(ctx.selectedDate).format("MM-DD-YYYY")
        ) {
          this.setFechaCita(moment(this.fechaCita).format("MM-DD-YYYY"));
          this.loading = true;
          this.getAgenda()
            .then((rta) => {
              this.items = [];
              if (rta.length == 0) {
                this.$toastr.e(
                  "La fecha seleccionada no es válida o no tiene disponibilidad."
                );
                // this.showError = true;
                // this.error =
                //   "La fecha seleccionada no es válida o no tiene disponibilidad.";
              } else {
                this.items = rta;
              }
              this.loading = false;
            })
            .catch((error) => {
              this.loading = false;
              if (error.status == 401) {
                this.logout().then((rta) => {
                  this.$router.replace("/");
                });
              }
            });
        }
      },
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.idCita === this.cita.idCita) {
          return "row-selected cursor-pointer";
        } else {
          return "cursor-pointer";
        }
      },
      seleccionar(item) {
        this.$bvModal
          .msgBoxConfirm(
            `Está seguro de asignar esta cita para el ${item.fecha} a las ${item.hora}?`,
            {
              title: "Confirmar cita",
              size: "md",
              buttonSize: "lg",
              okVariant: "primary",
              okTitle: "Si",
              cancelVariant: "danger",
              cancelTitle: "No",
              footerClass: "p-2",
              hideHeaderClose: true,
              centered: true,
            }
          )
          .then((value) => {
            if (value === true) {
              this.asignando = true;
              this.asignarCita(item)
                .then((rta) => {
                  if (rta.Error !== null) {
                    this.$bvModal.msgBoxConfirm(rta.Error, {
                      title: "Asignación de cita",
                      size: "md",
                      buttonSize: "lg",
                      okVariant: "primary",
                      okTitle: "Cerrar",
                      footerClass: "p-2",
                      hideHeaderClose: false,
                      centered: true,
                      okOnly: true,
                    });
                    this.asignando = false;
                    return;
                  }
                  this.asignando = false;
                  const h = this.$createElement;
                  const textModal = h("div", {
                    domProps: {
                      innerHTML: `Señor(a) ${rta.nombreProtegido}, la cita de ${
                        rta.especialidad
                      } ha sido asignada con el Dr(a) ${
                        rta.medico
                      }, para el ${moment(rta.fecha)
                        .locale("es")
                        .format("dddd LL")} a las ${
                        rta.hora
                      }. Por favor tome nota de esta información y diríjase a la unidad de atención asignada ${
                        rta.Lugar
                      }, ubicada en ${
                        rta.direccion
                      }, con su carné y su documento de identidad, con 15 minutos de anticipación para trámites administrativos.<br><br>
                        Si por algún motivo debes cancelar esta cita puedes hacerlo en esta misma utilidad, en el menú principal, en la sección <b>Mis Citas</b>.<br><br>Valor Cuota Moderadora: $${
                          rta.ValorPago
                        }  Número Cita: ${rta.idCita}`,
                    },
                  });
                  this.$bvModal
                    .msgBoxConfirm(textModal, {
                      title: "Confirmación de Cita",
                      size: "md",
                      centered: true,
                    })
                    .then((value) => {
                      this.resetStep();
                      this.logout().then((rta) => {
                        this.$router.replace("/login");
                      });
                    });
                })
                .catch((error) => {
                  // this.error = error;
                  // this.showError = true;
                  // console.log(error);
                  // this.$toastr.e(error);
                  this.$bvModal.msgBoxConfirm(error, {
                    title: "Asignación de cita",
                    size: "md",
                    buttonSize: "lg",
                    okVariant: "primary",
                    okTitle: "Cerrar",
                    footerClass: "p-2",
                    hideHeaderClose: false,
                    centered: true,
                    okOnly: true,
                  });
                  this.asignando = false;
                });
            }
          })
          .catch((error) => {
            this.$toastr.e(error);
            // if (error.status == 401) {
            //   this.logout().then((rta) => {
            //     this.$router.replace("/login");
            //   });
            // }
          });
      },
      async cancelar() {
        await this.resetStep();
        this.$router.replace("/");
      },
    },
  };
</script>
