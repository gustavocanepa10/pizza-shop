import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, Search, X } from "lucide-react";

export function Orders() {
  return (
    <div className="flex flex-col pl-7 gap-6">
      <h1 className="text-3xl font-bold -tracking-wide">Pedidos</h1>

      <div className="space-y-3.5">
        <form className="flex items-center gap-3" action="">
          <span className="font-semibold text-sm">Filtros</span>
          <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
        </form>

        <div className="border mt-6 rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Pedido há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                  </TableCell>

                  <TableCell className="font-mono text-xs font-medium">
                    08a0damwdoa
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    há 15 minutos
                  </TableCell>

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
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
