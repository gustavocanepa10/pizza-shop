import { api } from "@/lib/axios";

interface UpdateProfile {
    name : string,
    description : string | null
}


export async function UpdateProfileRestaurant({name, description} : UpdateProfile) {

    api.put("/profile", {name,description})

}