import { TextField, Button, Link } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../api/auth";
import LoadingScreen from "../components/_loadingScreen";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loaderOpen, setLoaderOpen] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoaderOpen(true);
        loginUser({ email, password })
            .then((data) => {
                alert(data);
            })
            .catch((e) => {
                alert(e.response.data);
            })
            .finally(() => {
                setLoaderOpen(false);
            });
    };
    return (
        <>
            <LoadingScreen isShown={loaderOpen} />
            <div className="rounded-md bg-white p-3">
                <h1 className="text-center text-3xl mb-3">Login</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <TextField
                        variant="standard"
                        label="Correo Electrónico"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        variant="standard"
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button type="submit" size="large" variant="contained">
                        Iniciar Sesion
                    </Button>
                </form>
                <p className="text-center mt-5 ">
                    ¿No tienes cuenta?{" "}
                    <Link className="cursor-pointer" href="/register">
                        Registrate aquí
                    </Link>
                </p>
            </div>
        </>
    );
}
