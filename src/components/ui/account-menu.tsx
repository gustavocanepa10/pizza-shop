import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuTrigger } from "./dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { GetManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./skeleton";
import { Dialog } from "./dialog";
import { DialogTrigger } from "../ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";
import { SignOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";

export function AccountMenu() {


  const navigate = useNavigate()

  const {data : profile, isLoading : isLoadingProfile} = useQuery({
    queryKey : ["profile"],
    queryFn : getProfile
    
  })

  const {data : managedRestaurant, isLoading : isLoadingManagedRestaurant } = useQuery({
    queryKey : ["managed-restaurant"],
    queryFn : GetManagedRestaurant
  })

  const {mutateAsync : signOutFn} = useMutation({
    mutationFn : SignOut,
    onSuccess : () => {
      navigate("/sign-in", {replace : true})
    }
    

  })

  return (
    <Dialog>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          {isLoadingManagedRestaurant ? (
            <Skeleton className="w-40 h-4" />
          ): managedRestaurant?.name  }
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32"  />
                <Skeleton className="h-3 w-24"  />


              </div>
            ) : <>
            <span>
              {profile?.name}
            </span>
          <span className="text-xs font-normal text-muted-foreground">
            {profile?.email}
          </span>
            </> 
            }
            
            
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DialogTrigger asChild>
           <DropdownMenuItem>
          <Building className="w-4 h-4 mr-2" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        </DialogTrigger>
       
        <DropdownMenuItem asChild className="text-rose-500 dark:text-rose-400">
          <button className="w-full" onClick={() => signOutFn()} >
          <LogOut color="oklch(64.5% 0.246 16.439)" className="w-4 h-4 mr-2" />
          <span>Sair</span>
          </button>
          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <StoreProfileDialog/>
    </Dialog>
  );
}
