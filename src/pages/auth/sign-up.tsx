import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerRestaurant } from "@/api/register";

export function SignUp() {
  const SignUpForm = z.object({
    restaurantName: z.string(),
    email: z.email("digite um e-mail válido"),
    managerName: z.string(),
    phone: z.string(),
  });

  type SignForm = z.infer<typeof SignUpForm>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignForm>();



  const {mutateAsync: mutateRegisterRestaurant} = useMutation({
    mutationFn : registerRestaurant
  })

  const navigate = useNavigate()  

  async function handleSignUp(data: SignForm) {

    

    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      mutateRegisterRestaurant({
        email : data.email,
        restaurantName : data.restaurantName,
        managerName : data.managerName,
        phone : data.phone
        
      })

      toast.success("Cadastro realizado com sucesso!", {
        action : {
            label : "Login",
            onClick : () => navigate(`/?email=${data.email}`)
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar");
    }
  }

  return (
    <>
      <div className="p-8 ">
        <Button className="absolute right-8 top-8" asChild>
          <Link to="/">Fazer login</Link>
        </Button>

        <div className="w-[320px] flex flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-4 "
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input {...register("restaurantName")} id="restaurantName" type="text" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone do estabelecimento</Label>
              <Input {...register("phone")} id="phone" type="tel" />
            </div>{" "}

            <div className="space-y-2">
              <Label htmlFor="managerName">Nome do dono</Label>
              <Input {...register("managerName")} id="managerName" type="text" />
            </div>{" "}

            <div className="space-y-2">
              <Label htmlFor="email">E-mail do estabelecimento</Label>
              <Input {...register("email")} id="email" type="email" />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer"
              type="submit"
            >
              Finalizar cadastro
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
