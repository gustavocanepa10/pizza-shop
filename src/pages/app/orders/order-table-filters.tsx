
import { SelectValue } from "@radix-ui/react-select"
import {Input} from "../../../components/ui/input"
import { Select, SelectContent , SelectTrigger, SelectItem} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

export function OrderTableFilters() {
    return <form className="flex items-center gap-3" action="">
          <span className="font-semibold text-sm">Filtros</span>
          <Input className="h-8 w-auto" placeholder="ID do pedido" />
          <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
          <Select defaultValue="All">
            <SelectTrigger className="h-8 w-[180px]" >
                <SelectValue/>

            </SelectTrigger>
            <SelectContent>
                <SelectItem value = "All">Todos</SelectItem>
                <SelectItem value = "pending">Pendente</SelectItem>
                <SelectItem value = "canceled">Cancelado</SelectItem>
                <SelectItem value = "processing">Em preparo</SelectItem>
                <SelectItem value = "delivering">Em entrega</SelectItem>
                <SelectItem value = "delivered">Entregue</SelectItem>



            </SelectContent>
          </Select>

          <Button type="submit" variant="secondary" size="sm">
            <Search className="mr-2 h-4 w-4" />
            Filtrar resultados
          </Button>

           <Button type="button" variant="outline" size="sm">
            <X className="mr-2 h-4 w-4" />
            Remover filtros
          </Button>

        </form>
}