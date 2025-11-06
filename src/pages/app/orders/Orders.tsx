import {OrderTableRow} from "./order-table-row"
import {OrderTableFilters} from "./order-table-filters"


import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";



export function Orders() {
  return (
    <div className="flex flex-col pl-7 gap-6">
      <h1 className="text-3xl font-bold -tracking-wide">Pedidos</h1>

      <div className="space-y-3.5">
        <OrderTableFilters/>

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
              {Array.from({ length: 105}).map((_, i) => {
              return <OrderTableRow/>
              
               
              })}
            </TableBody>
          </Table>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10}/>
      </div>
    </div>
  );
}
