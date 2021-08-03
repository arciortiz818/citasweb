import axios from "axios";
// let urlApi = "https://pruebas.saludtotal.com.co/STAPI_AfiliadosPBS/api";
let urlApi = "https://transaccional.saludtotal.com.co/STAPI_AfiliadosPBS/api";
import store from "../store/index";

const getToken = () => {
  return new Promise((resolve, reject) => {
    if (
      store.state.tokenAfiliado !== null ||
      store.state.tokenAfiliado !== ""
    ) {
      resolve({
        Token: store.state.tokenAfiliado,
      });
    }
    let dataToSend = {
      Token: store.state.tokenAuth,
      origen: "CITAS-ALIANZA",
    };
    axios
      .get(`${urlApi}/Token/GetToken`, { params: dataToSend })
      .then(async (response) => {
        store.commit("setTokenAfiliado", response.data.Token);
        await getGrupoFamiliar({
          identificacion: store.state.afiliado.identificacion,
          identificacionId: store.state.afiliado.identificacionId,
        });
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getGrupoFamiliar = async (data) => {
  return new Promise(async (resolve, reject) => {
    let dataToSend = {
      BeneficiarioId: data.identificacion,
      BeneficiarioTipoId: data.identificacionId,
    };
    return axios
      .get(`${urlApi}/ConsultaAfiliados/ConsultaGrupoFamiliar`, {
        params: dataToSend,
        headers: {
          Authorization: store.state.tokenAfiliado,
        },
      })
      .then((response) => {
        // console.log(response);
        store.commit("setGrupoFamiliarData", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        // console.log(error);
        reject(error);
      });
  });
};

export { getToken, getGrupoFamiliar };
