import { api } from "@/lib/axios";




interface registerRestaurant {
    restaurantName : string,
    managerName : string,
    email : string,
    phone : string
}


export async function registerRestaurant({
    email,restaurantName,phone
} : registerRestaurant) {
    const response = await api.post("/restaurants", {email,restaurantName,phone})
    return response.data
}