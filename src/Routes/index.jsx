import { BrowserRouter } from "react-router-dom";

// Importando o hook de autenticação
import { useAuth } from '../hooks/authContext'

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    const { user } = useAuth();

    return(
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}