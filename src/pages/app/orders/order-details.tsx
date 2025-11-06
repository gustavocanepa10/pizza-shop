import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido : wpdfwfj02mfpafaf1911ie</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 justify-center">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"/>
                <span>Pendente</span>
              </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Cliente
              </TableCell>
              <TableCell className="flex justify-end">
               João Gustavo
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Telefone
              </TableCell>
              <TableCell className="flex justify-end">
              (21) 98612-4136
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
               <div className="flex items-center gap-2">
                <span>10 minutos</span>
              </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Produto
              </TableHead>
              <TableHead>
                Qtd
              </TableHead>
              <TableHead>
                Preço
              </TableHead>
              <TableHead>
                Subtotal
              </TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                Pizza Pepperoni Família
              </TableCell>
              <TableCell>
                2
              </TableCell>
              <TableCell>
                R$ 69,90
              </TableCell>
              <TableCell>
                R$ 139,90
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Pizza Mussarela Família
              </TableCell>
              <TableCell>
                2
              </TableCell>
              <TableCell>
                R$ 79,90
              </TableCell>
              <TableCell>
                R$ 149,90
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                Total do pedido
              </TableCell>
              <TableCell className="font-medium ">
                R$ 229,90
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
