import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex h-screen overflow-hidden flex-col justify-center gap-3 items-center">
      <h1 className="font-bold text-4xl ">Erro 404</h1>
      <h2 className="font-bold text-accent-foreground text-3xl">
        Página não encontrada
      </h2>

      <p>
        Voltar para o{" "}
        <Link
          className="cursor-pointer font-bold text-sky-600 dark:text-sky-300"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </p>
    </div>
  );
}
