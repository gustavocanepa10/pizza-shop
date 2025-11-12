import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routerProvider } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/themeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="pizzaShop-theme">
        <Toaster richColors closeButton />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routerProvider} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
