import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routerProvider } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/themeProvider";

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="pizzaShop-theme">
        <Toaster richColors closeButton />
        <RouterProvider router={routerProvider} />
      </ThemeProvider>
    </>
  );
}
