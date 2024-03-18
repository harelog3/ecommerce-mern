import axios from "axios";

interface LoginFormData {
    email: string;
    password: string;
}

interface RegisterFormData extends LoginFormData {
    username: string;
}

const apiUrl = "http://localhost:7573/api";

export async function registerUser(data: RegisterFormData) {
    const { email, password, username } = data;
    const res = await axios.post(apiUrl + "/register/user", {
        user: { email, password, username },
    });
    return res.data;
}

export async function loginUser(data: LoginFormData) {
    const { email, password } = data;
    const res = await axios.post(apiUrl + "/login/user", {
        user: { email, password },
    });
    return res.data;
}
