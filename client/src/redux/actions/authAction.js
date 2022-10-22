import axios from 'axios'
import {toast} from 'react-toastify'

const url = 'https://imposto-de-renda-api.onrender.com/user'


export const userRegister =  user => {
    return (dispatch) => {
        axios
          .post(`${url}/register`, user)
          .then((token) => {
            localStorage.setItem("token", token.data);
    
            dispatch({
              type: "SIGN_UP",
              token: token.data,
            });
            toast.success('Cadastro Finalizado com Sucesso !', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
          .catch((error) => {
            console.log(error.response);
          });
          
      };
}

export const userLogin = (creds) => {
  return (dispatch) => {
    axios
      .post(`${url}/login`, creds)
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
}
