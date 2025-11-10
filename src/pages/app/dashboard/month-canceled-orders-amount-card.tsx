

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className="flex items-center  space-y-0 flex-row justify-between pb-2">
                <CardTitle className="text-base font-semibold">
                    Pedidos cancelados (mês)
                </CardTitle>
                 <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <span className="text-2xl font-bold tracking-tight">
                    21
                </span>
                <p className="text-sm text-muted-foreground">
                    <span className="text-emerald-400 dark:text-emerald-500">+3%</span> em relação ao mes passado
                </p>
               
            </CardContent>
        </Card>
    )
}