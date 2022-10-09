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
                fullName: user.name,
                cpf: user.cpf,
                email: user.email,
                password: user.password,
                data: user.data,
                _id: user._id
            }
            case 'SIGN_IN':
                const userIN = jwtDecode(action.token)
            return {
                ...initialState,
                token: action.token,  
                cpf: userIN.cpf,
                password: userIN.password,
                _id: userIN._id
            }
            default: 
                return state;
    }
}

