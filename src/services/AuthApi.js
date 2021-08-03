import axios from "axios";
let urlApi = "https://transaccional.saludtotal.com.co/ApiSeguridad/api";

const login = (data) => {
  return new Promise((resolve, reject) => {
    let dataToSend = {
      PerfilUsuario: "IPS",
      TipoEmpleadorId: "N",
      EmpleadorId: "900038024",
      TipoDocumentoId: "C",
      DocumentoId: "915369141",
      Clave: "Alianza2021.",
      Aplicativo: "CITAS-ALIANZA",
    };
    axios.defaults.headers.get["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios
      .get(`${urlApi}/LogIn`, {
        params: dataToSend,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const validateToken = (token) => {
  return new Promise((resolve, reject) => {
    let authToken = token;
    // resolve({
    //   Valido: true,
    //   Error: "",
    // });
    resolve({
      Valido: false,
      Error: "Token invalido",
    });
    // reject({
    //   Valido: false,
    //   Token: null,
    //   Error: "Error de de api",
    // });
    // let dataToSend = {
    //   token: "dfsjsdjkfnjaksfnjhdf",
    //   aplicativo: "CITAS-ALIANZA",
    // };
    // axios
    //   .get("https://pruebas.saludtotal.com.co/ApiSeguridad/api/ValidaToken", {
    //     params: dataToSend,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     resolve(response.data);
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });
  });
};

export { login, validateToken };
