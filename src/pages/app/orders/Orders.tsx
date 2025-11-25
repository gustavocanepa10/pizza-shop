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
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import z from "zod";



export function Orders() {

  const [searchParams, setSearchParams] = useSearchParams()


  const pageIndex = z.coerce.number()
  .transform(page => page - 1)
  .parse(searchParams.get("page") ?? "1")



  const {data : ordersData} = useQuery({
    queryKey : ["orders"],
    queryFn : () => getOrders({pageIndex})

  })

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
              {ordersData && ordersData.orders.map((order) => (
                <OrderTableRow key={order.orderId} order = {order} />)
              )
              }
            </TableBody>
          </Table>
        </div>
       {ordersData && (
         <Pagination pageIndex={ordersData.meta.pageIndex} totalCount={ordersData.meta.totalCount} perPage={ordersData.meta.perPage}/>
       )}
      </div>
    </div>
  );
}
