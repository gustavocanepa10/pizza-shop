import { api } from "@/lib/axios";



export async function SignOut() {

    const response = await api.post("/sign-out")
    
    return response.data
}