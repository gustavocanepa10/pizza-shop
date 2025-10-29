import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routerProvider } from "./routes";
import { Toaster } from "sonner";


export function App() {
  return (
    <>
     
        <Toaster richColors closeButton  />
        <RouterProvider router={routerProvider} />
      
    </>
  );
}
