import {useSelector} from "react-redux";

export function useAuth() {
    const {userName, token, isLogin} = useSelector(state=>state.auth)

    return {
        isLogin,
        userName,
        token
    }
}