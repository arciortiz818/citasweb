import axios from "axios";
// let urlApi = "https://pruebas.saludtotal.com.co/ApiAgenda/api";
let urlApi = "https://transaccional.saludtotal.com.co/StApiAgenda/api";
import store from "../store/index";

const getToken = () => {
  return new Promise((resolve, reject) => {
    if (store.state.tokenAgenda !== null || store.state.tokenAgenda !== "") {
      resolve({
        Token: store.state.tokenAgenda,
      });
    }
    let dataToSend = {
      Token: store.state.tokenAuth,
      aporigen: "CITAS-ALIANZA",
    };
    axios
      .post(
        `${urlApi}/GetToken?Token=${dataToSend.Token}&aporigen=${dataToSend.aporigen}`
      )
      .then((response) => {
        store.commit("setTokenAgenda", response.data.Token);
        // console.log("token agenda");
        resolve(response.data);
      })
      .catch((error) => {
        // console.log("fallo token", error);
        reject(error);
      });
  });
};

const getEspecialidades = (data) => {
  return new Promise((resolve, reject) => {
    let dataToSend = {
      numero_documento: data.identificacion,
      tipo_documento: data.identificacionId,
    };
    // Traemos token de agenda
    getToken(data.authToken)
      .then((response) => {
        return axios.get(
          `${urlApi}/especialidades?numero_documento=${dataToSend.numero_documento}&tipo_documento=${dataToSend.tipo_documento}`,
          {
            headers: {
              Authorization: store.state.tokenAgenda,
            },
          }
        );
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        // console.log(error);
        reject(error);
      });
  });
};

const getAgendaDisponible = (data) => {
  return new Promise((resolve, reject) => {
    let dataToSend = {
      documentoafiliado: data.identificacion,
      tipo_documento: data.identificacionId,
      codespecialidad: data.especialidadCita,
      producto: 1,
      citasxmedico: 20,
      Fecha: data.fechaCita,
      horai: "null",
      mini: "null",
      horaf: "null",
      minf: "null",
      sede: "null",
      medico: "null",
      diassemana: "1,2,3,4,5,6,7",
      Oportunidad: true,
    };
    axios
      .get(`${urlApi}/CitasDisponiblesAfiliado`, {
        params: dataToSend,
        headers: {
          Authorization: store.state.tokenAgenda,
        },
      })
      .then((response) => {
        console.log("desde api", response);
        resolve(response.data);
      })
      .catch((error) => {
        reject({
          message: error.response.data,
          status: error.response.status,
        });
      });
  });
};

const asignarCita = (data) => {
  return new Promise((resolve, reject) => {
    let dataToSend = {
      numero_documento: data.numero_documento,
      tipo_documento: data.tipo_documento,
      idCita: data.idCita,
      planSalud: data.planSalud,
      sede: data.sede,
      duracion: data.duracion,
      fechaCita: data.fechaCita,
      codespecialidad: data.codespecialidad,
    };
    axios
      .get(`${urlApi}/citasSolicita`, {
        params: dataToSend,
        headers: {
          Authorization: store.state.tokenAgenda,
        },
      })
      .then((response) => {
        // console.log(response);
        // if (response.data.Error === null) {
        //   resolve(response.data);
        // }
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const citasVigentes = (data) => {
  return new Promise(async (resolve, reject) => {
    let dataToSend = {
      numero_documento: data.numero_documento,
      tipo_documento: data.tipo_documento,
      aplicativoOrigen: data.aplicativoOrigen,
    };
    let tmpTokenAgenda = null;
    if (store.state.tokenAgenda === null) {
      tmpTokenAgenda = await getToken(store.state.userLogged.token);
    } else {
      tmpTokenAgenda = store.state.tokenAgenda;
    }
    axios
      .get(`${urlApi}/CitasVigentes`, {
        params: dataToSend,
        headers: {
          Authorization: tmpTokenAgenda,
        },
      })
      .then((response) => {
        // console.log("citas", response);
        if (response.data[0].Error === null || response.data[0].Error === "") {
          resolve(response.data);
        } else if (response.data[0].Error === "Sin Datos") {
          resolve([]);
        }
        reject(response.data.Error);
      });
  });
};

const citasVigentesGrupoFamiliar = (data) => {
  return new Promise(async (resolve, reject) => {
    let dataToSend = {
      numero_documento: data.numero_documento,
      tipo_documento: data.tipo_documento,
    };
    let tmpTokenAgenda = null;
    if (store.state.tokenAgenda === null) {
      tmpTokenAgenda = await getToken(store.state.userLogged.token);
    } else {
      tmpTokenAgenda = store.state.tokenAgenda;
    }
    axios
      .get(`${urlApi}/CitasVigentes`, {
        params: dataToSend,
        headers: {
          Authorization: tmpTokenAgenda,
        },
      })
      .then((response) => {
        if (response.data[0].Error === null || response.data[0].Error === "") {
          resolve(response.data);
        }
        reject(response.data.Error);
      });
  });
};

const cancelaCita = (data) => {
  return new Promise(async (resolve, reject) => {
    let dataToSend = {
      numero_documento: data.numero_documento,
      tipo_documento: data.tipo_documento,
      aplicativoOrigen: data.aplicativoOrigen,
      idCita: data.idCita,
    };
    let tmpTokenAgenda = null;
    if (store.state.tokenAgenda === null) {
      tmpTokenAgenda = await getToken(store.state.userLogged.token);
    } else {
      tmpTokenAgenda = store.state.tokenAgenda;
    }
    axios
      .get(`${urlApi}/CitasCancela`, {
        params: dataToSend,
        headers: {
          Authorization: tmpTokenAgenda,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Señor(a) ${nombreProtegido}, la cita de ${especialidad} ha sido asignada con el DragEvent(a) ${medico}, para el ${fecha} a las ${hora}, en la unidad de atención asignada ${Lugar}, ubicada en ${direccion}.
// let rta = {
//   Error: null,
//   Nap: "01001-2102008595",
//   ValorPago: 3500,
//   mensaje:
//     "Señor(A)  ALBEIRO ENRIQUE BALLESTEROS MEJIA, tu cita quedo programada para Videoconsulta (atención virtual) MEDICINA GENERAL, recuerda que no debes desplazarte a la unidad de atención. Debes ingresar mínimo con 15 minutos de anterioridad a la cita agendada en la oficina virtual www.saludtotal.com.co, Recuerda realizar el pago de la cuota moderadora cuando sea necesario desde la oficina virtual y certificar la lectura del consentimiento informado para la realización de la video consulta\r\n.  \n\n\n\n\r\n Apreciado usuario te recomendamos antes de asistir a tu cita ingresar a www.virreysolisips.com y registrar los datos que allí se solicitan respecto a tu estado de salud.\n\nSi  por algún motivo debes cancelar esta cita puedes hacerlo a través de nuestra Oficina Virtual en www.saludtotal.com.co o comunicándote con nuestra Central de Citas en cualquier momento durante las 24 horas del día, de lo contrario generará una inasistencia y sanción pedagógica. \n\nValor Cuota Moderadora $ 3500 Número de Cita 575127222",
//   idCita: 575127222,
//   nombreProtegido: "ALBEIRO ENRIQUE BALLESTEROS MEJIA",
//   especialidad: "MEDICINA GENERAL",
//   medico: "Anderson Santamaria Jerez",
//   fecha: "2021-07-29T06:00:00",
//   hora: "06:00:00 AM",
//   Lugar: "VS AMERICAS",
//   direccion: "AV LAS AMERICAS 66 A 27",
//   mensajeAPP:
//     "Señor(A)  ALBEIRO ENRIQUE BALLESTEROS MEJIA, tu cita quedo programada para Videoconsulta¡(atención virtual) MEDICINA GENERAL, recuerda que no debes desplazarte a la unidad¡de atención. Debes ingresar mínimo con 15 minutos de anterioridad a la cita agendada¡en la oficina virtual www.saludtotal.com.co, Recuerda realizar el pago de la cuota moderadora¡cuando sea necesario desde la oficina virtual y certificar la lectura del consentimiento¡informado para la realización de la video consulta\r\n.  \r\n\r\n Apreciado usuario te recomendamos antes de asistir a tu cita ingresar a www.virreysolisips.com y registrar los datos que allí se solicitan respecto a tu estado de salud.\r\nSi  por algún motivo debes cancelar esta cita puedes hacerlo a través de nuestra Oficina¡Virtual en www.saludtotal.com.co o comunicándote con nuestra Central de Citas en cualquier¡momento durante las 24 horas del día, de lo contrario generará una inasistencia¡y sanción pedagógica. \r\nValor Cuota Moderadora $ 3500 Número de Cita 575127222",
// };

// let rta = {
//   Error:
//     "Existe una cita de MEDICINA GENERAL de fecha 07/29/2021 6:00:00 AM con el médico Anderson Santamaria Jerez",
//   Nap: null,
//   ValorPago: 0,
//   mensaje: null,
//   idCita: 0,
//   nombreProtegido: null,
//   especialidad: null,
//   medico: null,
//   fecha: "0001-01-01T00:00:00",
//   hora: null,
//   Lugar: null,
//   direccion: null,
//   mensajeAPP: null,
// };

export {
  getEspecialidades,
  getAgendaDisponible,
  asignarCita,
  citasVigentes,
  getToken,
  cancelaCita,
};
