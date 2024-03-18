import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div className="flex items-center justify-center h-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
