import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export function SignIn() {
  const signInForm = z.object({
    email: z.email("digite um e-mail válido"),
  });

  type SignForm = z.infer<typeof signInForm>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignForm>();

  async function handleSignIn(data: SignForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticação para o seu e-mail.")
    

    
    } catch (error) {
      console.log(error);
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <>
      <div className="p-8 ">
        <Button className="absolute right-8 top-8" asChild>
        <Link to="/sign-up">
        Novo estabelecimento
        </Link>
        </Button>
        <div className="w-[320px] flex flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4 "
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input {...register("email")} id="email" type="email" />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer"
              type="submit"
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
