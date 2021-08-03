import Vue from "vue";
import Vuex from "vuex";
import * as AuthService from "../services/AuthApi";
import * as AfiliadoService from "../services/AfiliadoApi";
import * as AgendaService from "../services/AgendaApi";
import moment from "moment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userTypes: [
      { value: null, text: "Seleccione" },
      { value: "AFI", text: "Afiliado" },
      { value: "ASE", text: "Gente Comercial" },
      { value: "EJE", text: "Gente Comercial" },
      { value: "EMP", text: "Empleadores" },
      { value: "IND", text: "INDEPENDIENTE" },
      { value: "IPS", text: "IPS" },
      { value: "PAC", text: "AfiliadosPac" },
      { value: "PAF", text: "AfiliadosPacYPos" },
      { value: "PAR", text: "Asesor Especialista" },
    ],
    identificationTypes: [
      { value: null, text: "Seleccione" },
      { value: "C", text: "Cédula de Ciudadanía", id: 1 },
      { value: "T", text: "Tarjeta de Identidad", id: 2 },
      { value: "R", text: "Registro Civil", id: 3 },
      { value: "N", text: "Nit", id: 4 },
      { value: "E", text: "Cédula de Extranjería", id: 5 },
      { value: "CD", text: "Carnet Diplomático", id: 11 },
      { value: "CN", text: "Certificado Nacido Vivo", id: 13 },
      { value: "J", text: "Personería Jurídica", id: 6 },
      { value: "M", text: "Menor de Edad", id: 7 },
      { value: "MS", text: "Menor Sin Identificación", id: 8 },
      { value: "NU", text: "Número de Identificación Personal", id: 9 },
      { value: "P", text: "Pasaporte", id: 10 },
      { value: "PE", text: "Permiso Especial de Permanencia", id: 14 },
      { value: "SC", text: "Salvoconducto", id: 12 },
    ],
    layout: "MainLayout",
    tokenAfiliado: null,
    tokenAgenda: null,
    tokenAuth: null,
    grupoFamiliar: [],
    especialidades: [],
    cita: {
      afiliado: null,
      especialidad: null,
      idCita: null,
      fecha: null,
    },
    currentStep: 0,
    afiliado: {},
  },
  mutations: {
    setLayout: (state, payload) => {
      state.layout = payload;
    },
    logout: (state) => {
      state.tokenAfiliado = null;
      state.tokenAgenda = null;
      state.tokenAuth = null;
      state.grupoFamiliar = [];
      state.especialidades = [];
      state.cita = {
        afiliado: null,
        especialidad: null,
        fecha: null,
      };
      localStorage.removeItem("tokenAfiliado");
      localStorage.removeItem("tokenAgenda");
      localStorage.removeItem("tokenAuth");
      localStorage.removeItem("grupoFamiliar");
      localStorage.removeItem("especialidades");
      localStorage.removeItem("afiliado");
      state.currentStep = 0;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    resetStep: (state) => {
      state.currentStep = 0;
      state.cita = {
        afiliado: null,
        especialidad: null,
        fecha: null,
      };
    },
    // Set tokens
    setTokenAfiliado: (state, payload) => {
      state.tokenAfiliado = payload;
      localStorage.setItem("tokenAfiliado", JSON.stringify(payload));
    },
    setTokenAgenda: (state, payload) => {
      state.tokenAgenda = payload;
      localStorage.setItem("tokenAgenda", JSON.stringify(payload));
    },
    setTokenAuth: (state, payload) => {
      state.tokenAuth = payload;
      localStorage.setItem("tokenAuth", JSON.stringify(payload));
    },
    setGrupoFamiliarData: (state, payload) => {
      state.grupoFamiliar = payload;
      localStorage.setItem("grupoFamiliar", JSON.stringify(payload));
    },
    setEspecialidadesData: (state, payload) => {
      state.especialidades = payload;
      localStorage.setItem("especialidades", JSON.stringify(payload));
    },
    setAfiliadoData: (state, payload) => {
      state.afiliado = payload;
      localStorage.setItem("afiliado", JSON.stringify(payload));
    },
    // Asignar datos de la cita
    setAfiliadoCita: (state, payload) => {
      state.cita.afiliado = payload;
    },
    setEspecialidadCita: (state, payload) => {
      state.cita.especialidad = payload;
    },
    setFechaCita: (state, payload) => {
      state.cita.fecha = payload;
    },
    setIdCita: (state, payload) => {
      state.cita.idCita = payload;
    },
  },
  actions: {
    nextStep: (context) => {
      context.commit("nextStep");
    },
    prevStep: (context) => {
      context.commit("prevStep");
    },
    resetStep: (context) => {
      context.commit("resetStep");
    },
    setLayout: (context, payload) => {
      context.commit("setLayout", payload);
    },
    isLogged: (context) => {
      let localTokenAuth = JSON.parse(localStorage.getItem("tokenAuth"));
      let localTokenAfiliado = JSON.parse(
        localStorage.getItem("tokenAfiliado")
      );
      let localTokenAgenda = JSON.parse(localStorage.getItem("tokenAgenda"));
      let localGrupoFamiliar = JSON.parse(
        localStorage.getItem("grupoFamiliar")
      );
      let localEspecialidades = JSON.parse(
        localStorage.getItem("especialidades")
      );
      let localAfiliado = JSON.parse(localStorage.getItem("afiliado"));
      if (localTokenAfiliado !== null) {
        if (localTokenAfiliado !== null) {
          context.commit("setTokenAfiliado", localTokenAfiliado);
        }
        if (localTokenAgenda !== null) {
          context.commit("setTokenAgenda", localTokenAgenda);
        }
        if (localTokenAuth !== null) {
          context.commit("setTokenAuth", localTokenAuth);
        }
        if (localGrupoFamiliar !== null) {
          context.commit("setGrupoFamiliarData", localGrupoFamiliar);
        }
        if (localGrupoFamiliar !== null) {
          context.commit("setEspecialidadesData", localEspecialidades);
        }
        if (localAfiliado !== null) {
          context.commit("setAfiliadoData", localAfiliado);
        }
        return true;
      } else {
        return false;
      }
    },
    logout: (context) => {
      context.commit("logout");
    },
    setTokenAfiliado: (context, payload) => {
      context.commit("setTokenAfiliado", payload);
    },
    setTokenAgenda: (context, payload) => {
      context.commit("setTokenAgenda", payload);
    },
    setTokenAuth: (context, payload) => {
      context.commit("setTokenAuth", payload);
    },
    setGrupoFamiliarData: (context, payload) => {
      context.commit("setGrupoFamiliarData", payload);
    },
    setAfiliadoData: (context, payload) => {
      context.commit("setAfiliadoData", payload);
    },
    setAfiliadoCita: (context, payload) => {
      context.commit("setAfiliadoCita", payload);
    },
    setEspecialidadCita: (context, payload) => {
      context.commit("setEspecialidadCita", payload);
    },
    setFechaCita: (context, payload) => {
      context.commit("setFechaCita", payload);
    },
    setIdCita: (context, payload) => {
      context.commit("setIdCita", payload);
    },
    loginApi: (context, payload) => {
      return new Promise(async (resolve, reject) => {
        AuthService.login().then(async (rta) => {
          if (rta.Valido === true) {
            context.commit("setTokenAuth", rta.Token);
            context.commit("setAfiliadoData", payload);
            await AfiliadoService.getToken().then(async (rta) => {
              // console.log("get grupo");
              // await context.dispatch("getGrupoFamiliarAfil");
            });
            await AgendaService.getToken();

            resolve();
          } else {
            // console.log("fallo", rta);
            reject(rta.Error);
          }
        });
      });
    },
    validateAuthToken: (context) => {
      return new Promise((resolve, reject) => {
        AuthService.validateToken(context.state.tokenAuth)
          .then((rta) => {
            if (rta.Valido === true) {
              resolve(true);
            }
            reject(rta.Error);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getGrupoFamiliarAfil: async (context) => {
      return new Promise((resolve, reject) => {
        if (context.state.grupoFamiliar.length > 0) {
          resolve(context.state.grupoFamiliar);
        } else {
          AfiliadoService.getGrupoFamiliar({
            identificacion: context.state.afiliado.identificacion,
            identificacionId: context.state.afiliado.identificacionId,
          })
            .then((rta) => {
              resolve(rta);
            })
            .catch((error) => {
              reject(error);
            });
        }
      });
    },
    getEspecialidadesAfil: (context, payload) => {
      return new Promise((resolve, reject) => {
        context.commit("setEspecialidadCita", 385);
        AgendaService.getEspecialidades({
          identificacion: context.state.cita.afiliado.identificacion,
          identificacionId: context.state.cita.afiliado.identificacionId,
        })
          .then((rta) => {
            context.commit("setEspecialidadesData", rta.data);
            resolve(rta.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
      // });
    },
    getAgenda: async (context, payload) => {
      return new Promise((resolve, reject) => {
        AgendaService.getAgendaDisponible({
          identificacion: context.state.cita.afiliado.identificacion,
          identificacionId: context.state.cita.afiliado.identificacionId,
          especialidadCita: context.state.cita.especialidad,
          fechaCita: context.state.cita.fecha,
          tokenAgenda: context.state.tokenAgenda,
        })
          .then((rta) => {
            // rta.forEach((e) => {
            //   console.log(moment(e.Fecha).format("MM-DD-YYYY"));
            // });
            let agenda = rta
              // .filter(
              //   (el) =>
              //     moment(el.Fecha).format("MM-DD-YYYY") ==
              //     context.state.cita.fecha
              // )
              .map((e) => {
                // console.log("mapeando", e);
                return {
                  idCita: e.IdCita,
                  medico: e.Medico,
                  fecha: moment(e.Fecha)
                    .locale("es")
                    .format("LL"), //.format("DD-MM-YYYY"),
                  hora: moment(e.Fecha).format("hh:mm a"),
                  sede: e.IPS,
                  codSede: e.codsede,
                  dirSede: e.DirIPS,
                  duracion: e.Duracion,
                };
              });
            // console.log("agenda", agenda);
            resolve(agenda);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getInfoAfiliado: (context) => {
      return new Promise((resolve, reject) => {
        let afil = context.state.grupoFamiliar.find(
          (e) => e.BeneficiarioId == context.state.cita.afiliado.identificacion
        );
        resolve(afil);
      });
    },
    asignarCita: (context, payload) => {
      return new Promise((resolve, reject) => {
        let datosCita = payload;
        // let infoAfil = context.state.grupoFamiliar.find(
        //   (e) => e.BeneficiarioId == context.state.cita.afiliado.identificacion
        // );
        // let identificacionAfil = context.state.identificationTypes.find(
        //   (e) => e.value == infoAfil.BeneficiarioTipoId
        // );
        AgendaService.asignarCita({
          numero_documento: context.state.cita.afiliado.identificacion,
          tipo_documento: context.state.cita.afiliado.identificacionId,
          idCita: datosCita.idCita,
          planSalud: 1,
          sede: datosCita.sede,
          duracion: datosCita.duracion,
          fechaCita: context.state.cita.fecha,
          codespecialidad: context.state.cita.especialidad,
        })
          .then((rta) => {
            resolve(rta);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getCitasVigentes: (context, payload) => {
      return new Promise((resolve, reject) => {
        let infoAfil = context.state.grupoFamiliar.find(
          (e) => e.BeneficiarioId == payload
        );
        let identificacionAfil = context.state.identificationTypes.find(
          (e) => e.value == infoAfil.BeneficiarioTipoId
        );
        AgendaService.citasVigentes({
          numero_documento: infoAfil.BeneficiarioId,
          tipo_documento: identificacionAfil.id,
          aplicativoOrigen: 2,
        })
          .then((rta) => {
            resolve(rta);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // getCitasVigentesGrupoFamiliar: (context) => {
    //   return new Promise((resolve, reject) => {
    //     AgendaService.citasVigentes({
    //       numero_documento: context.state.userLogged.identification,
    //       tipo_documento: context.state.userLogged.identificationTypeId,
    //     })
    //       .then((rta) => {
    //         resolve(rta);
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // },
    cancelaCita: (context, payload) => {
      // console.log(payload);
      return new Promise((resolve, reject) => {
        let infoAfil = context.state.grupoFamiliar.find(
          (e) => e.BeneficiarioId == payload.afiliado
        );
        let identificacionAfil = context.state.identificationTypes.find(
          (e) => e.value == infoAfil.BeneficiarioTipoId
        );
        AgendaService.cancelaCita({
          numero_documento: infoAfil.BeneficiarioId,
          tipo_documento: identificacionAfil.id,
          aplicativoOrigen: "AgendaIT",
          idCita: payload.idCita,
        })
          .then((rta) => {
            resolve(rta);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});
