import {fetchGet, fetchPost} from "./fetch.js";

const serverHost = import.meta.env.VITE_SERVER_HOST;
const SECURITY_API_URL = `${serverHost}/api/security`;

export const fetchPostLogin = (email, password, rememberMe) => {
    const data = {
        email,
        password,
        rememberMe
    }
    return fetchPost(`${SECURITY_API_URL}/login`, data);
}

export const getLoginUserAction = () => {
    return fetchGet(`${SECURITY_API_URL}/login-user`);
}

export const logoutAction = () => {
    return fetchPost(`${SECURITY_API_URL}/logout`, {})
}
