import { api } from "@/lib/axios";

interface UpdateProfile {
    name : string,
    description : string | null
}


export async function UpdateProfileRestaurant({name, description} : UpdateProfile) {

    const response = await api.put("/profile", {name,description})

    return response.data

}