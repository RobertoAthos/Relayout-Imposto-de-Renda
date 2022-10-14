import jwtDecode from 'jwt-decode'
import {toast} from 'react-toastify'

const initialState = {
    token: localStorage.getItem('token'),
    fullName: null,
    email: null,
    data: null,
    password:null,
    cpf: null,
    _id: null

}

export const UserAuthReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'SIGN_UP':
        case 'SIGN_IN':
            toast.success('Cadastro Finalizado com Sucesso !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            const user = jwtDecode(action.token)
            return {
                ...initialState,
                token: action.token,
                fullName: user.fullName,
                cpf: user.cpf,
                email: user.email,
                password: user.password,
                data: user.data,
                _id: user._id
            }
            default: 
                return state;
    }
}

