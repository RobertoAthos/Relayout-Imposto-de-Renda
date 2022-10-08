import jwtDecode from 'jwt-decode'
import {toast} from 'react-toastify'

const initialState = {
    token: localStorage.getItem('token'),
    fullName: null,
    cpf: null,
    _id: null

}

export const UserAuthReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'SIGN_UP':
            
            const user = jwtDecode(action.token)
            return {
                ...initialState,
                token: action.token,
                fullName: user.name,
                cpf: user.cpf,
                _id: user._id
            }
            default: 
                return state;
    }
}

