import { createBrowserRouter } from "react-router-dom";
import { Dasboard } from "./pages/app/dashboard/Dashboard";
import { SignIn } from "./pages/auth/sign-in"
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";
import {Orders} from "./pages/app/orders/Orders"
import { NotFoundPage } from "./pages/NotFoundPage";




export const routerProvider = createBrowserRouter([

    {path : "/dashboard", element : <AppLayout/>, 
        children : [
            {index: true, element : <Dasboard/>},
            {path : "orders", element : <Orders/>}
        ]
     },

   
    {path : "/", element : <AuthLayout/>, 
        children : [{path : "/", element : <SignIn/>},
                    {path : "/sign-up", element : <SignUp/>}
        ]
        
    },

    {path : "/orders", element : <AppLayout/>,
        children : [{path : "/orders", element : <Dasboard/>}]
    },

    {path : "*", element : <AppLayout/>,
        children : [{path : "*", element : <NotFoundPage/>}  ]
    }

    
])