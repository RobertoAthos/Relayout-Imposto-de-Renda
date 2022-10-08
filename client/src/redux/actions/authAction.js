import axios from 'axios'
import {toast} from 'react-toastify'

const url = 'http://localhost:5000/user'


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
          })
          .catch((error) => {
            console.log(error.response);
    
            toast.error(error.response?.data, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      };
}

