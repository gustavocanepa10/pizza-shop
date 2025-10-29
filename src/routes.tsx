import { createBrowserRouter } from "react-router-dom";
import { Dasboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/Sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/Sign-up";




export const routerProvider = createBrowserRouter([

    {path : "/dashboard", element : <AppLayout/>, 
        children : [{path : "/dashboard", element : <Dasboard/>}]
     },

   
    {path : "/", element : <AuthLayout/>, 
        children : [{path : "/", element : <SignIn/>},
                    {path : "/sign-up", element : <SignUp/>}
        ]
        
    }
])