import { GetManagedRestaurant } from "@/api/get-managed-restaurant";
import { Button } from "./button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./dialog";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProfileRestaurant } from "@/api/update-restaurant-profile";
import { toast } from "sonner";
import { DialogClose } from "./dialog"

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(6),
});

type StoreProfile = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const queryclient = useQueryClient();

  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: GetManagedRestaurant,
  });

  const { mutateAsync: updateRestaurant } = useMutation({
    mutationFn: UpdateProfileRestaurant,
    onSuccess(_, { name, description }) {
      const cached = queryclient.getQueryData<GetManagedRestaurant>([
        "managed-restaurant",
      ]);

      if (cached) {
        queryclient.setQueryData<GetManagedRestaurant>(["managed-restaurant"], {
          ...cached,
          name,
          description,
        });
      }
    },
  });

  const { register, handleSubmit } = useForm<StoreProfile>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  async function Submit(data: StoreProfile) {
    try {
      await updateRestaurant({
        name: data.name,
        description: data.description,
      });

      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      toast.error("Não foi possivel atualizar o perfil");
      console.log(error);
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visiveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(Submit)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input {...register("name")} className="col-span-3" id="name" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              {...register("description")}
              className="col-span-3"
              id="description"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>

        <DialogClose asChild>
        <Button variant="sucess" type="submit">
            Salvar
          </Button>
        </DialogClose>
          
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
