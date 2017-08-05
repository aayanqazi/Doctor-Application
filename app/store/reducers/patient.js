
import AuthActions from "./../actions/authActions";

const INITIAL_STATE = {
    data: {},
    isAdd: false,
    isProcessing: false,
    isError: false,
    errorMessage: {}
}

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActions.ADD_PATIENT:
            return { ...state, isProcessing: true, isAdd: false, isError: false };
        case AuthActions.ADD_PATIENT_SUCCESSFULL:
            return { ...state, isProcessing: false, isAdd: true, isError: false, data: action.payload };
        case AuthActions.ADD_PATIENT_FAILED:
            return { ...state, isProcessing: false, isAdd: false, isError: true , errorMessage:action.payload };
        // case AuthActions.SIGNUP_SUCCESSFUL:
        //     return { ...state, isProcessing: false, isRegistered: true, isError: false };
        // case AuthActions.SIGNUP_REJECTED:
        //     return { ...state, isProcessing: false, isRegistered: false, isError: true, errorMessage: action.payload };
        // case AuthActions.SIGNIN:
        //     return { ...state, isProcessing: true, isAuthenticated: false, isError: false };
        // case AuthActions.SIGNIN_SUCCESSFUL:
        //     return { ...state, isProcessing: false, isAuthenticated: true, isError: false, authUser: action.payload };
        // case AuthActions.SIGNIN_REJECTED:
        //     return { ...state, isProcessing: false, isAuthenticated: false, authUser: {}, isError: true, errorMessage: action.payload };
        // case AuthActions.LOGOUT:
        //     return { ...state, isProcessing: true };
        // case AuthActions.LOGOUT_SUCCESSFUL:
        //     return { ...state, isProcessing: false, isAuthenticated: false, authUser: {} };
        // case AuthActions.ISLOGGEDIN:
        //     return { ...state, isProcessing: false, isAuthenticated: true, authUser: action.payload };
        // case AuthActions.UPDATE_USER:
        //     return { ...state, isProcessing: false, isAuthenticated: true, authUser: action.payload };
        // case "logging":
        //     return { ...state, isProcessing: false, isAuthenticated: true, isError: false, authUser: action.payload, errorMessage: {} };

        default:
            return state;
    }
}

export default AuthReducer;