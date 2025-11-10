import { MonthRenevueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amout-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card";
import { RevenueChart } from "./charts/revenue-chart";
import { PopularProductsChart } from "./charts/popular-products-chart";

export function Dasboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRenevueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard/>

      </div>


      <div className="grid grid-cols-8 gap-4">
        <RevenueChart/>
        <PopularProductsChart/>

      </div>
    </div>
  );
}
