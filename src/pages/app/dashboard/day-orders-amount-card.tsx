



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className="flex items-center  space-y-0 flex-row justify-between pb-2">
                <CardTitle className="text-base font-semibold">
                    Pedidos (dia)
                </CardTitle>
                 <Utensils className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <span className="text-2xl font-bold tracking-tight">
                    12
                </span>
                <p className="text-sm text-muted-foreground">
                    <span className="text-rose-500 dark:text-rose-400">-4%</span> em relação a ontem
                </p>
               
            </CardContent>
        </Card>
    )
}