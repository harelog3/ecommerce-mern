import { TextField, Button } from "@mui/material";
import { SetStateAction, useState } from "react";
import { registerUser } from "../api/auth";
import LoadingScreen from "../components/_loadingScreen";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loaderOpen, setLoaderOpen] = useState(false);

    function handleFormFieldChange(
        setter: React.Dispatch<SetStateAction<string>>,
        value: string
    ) {
        setter(value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoaderOpen(true);
        registerUser({ username, email, password })
            .then((data) => {
                alert(data);
                window.location.replace("/login");
            })
            .catch((error) => {
                alert(error.response.data);
            })
            .finally(() => {
                setLoaderOpen(false);
            });
    }

    return (
        <>
            <LoadingScreen isShown={loaderOpen} />
            <div className="rounded-md bg-white p-3">
                <h1 className="text-center text-3xl mb-3">Registro</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <TextField
                        variant="standard"
                        label="Nombre de Usuario"
                        type="text"
                        value={username}
                        onChange={(e) =>
                            handleFormFieldChange(setUsername, e.target.value)
                        }
                    />
                    <TextField
                        variant="standard"
                        label="Correo Electrónico"
                        type="email"
                        value={email}
                        onChange={(e) =>
                            handleFormFieldChange(setEmail, e.target.value)
                        }
                    />
                    <TextField
                        variant="standard"
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) =>
                            handleFormFieldChange(setPassword, e.target.value)
                        }
                    />
                    <Button type="submit" size="large" variant="contained">
                        Registrar Usuario
                    </Button>
                </form>
            </div>
        </>
    );
}
