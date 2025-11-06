import {
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { Search, X, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails/>
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        08a0damwdoa
      </TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span>Pendente</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">João Gustavo</TableCell>

      <TableCell className="font-medium">R$ 110,00</TableCell>

      <TableCell>
        <Button variant="ghost" size="sm">
          <CheckCircle className="w-3 h-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="w-3 h-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
