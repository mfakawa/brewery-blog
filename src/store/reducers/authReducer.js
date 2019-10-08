const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: "nieprawidłowy adres e-mail lub hasło!"
            }
        case 'LOGOUT_SUCCESS':
            return state;

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: 'success'
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.error.message
            }

        default:
            return state;
    }
}

export default authReducer;