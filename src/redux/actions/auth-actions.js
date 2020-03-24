export const LOGIN = "LOGIN", LOGOUT = "LOGOUT";

export function login(user, token) {
    return {
        type: LOGIN,
        user: user,
        token: token,
    };
}

export function logout() {
    return {
        type: LOGOUT,
    }
}