import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuTrigger } from "./dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./dropdown-menu";




export function AccountMenu() {
  return (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
            Pizza Shop

            <ChevronDown className="w-4 h-4"  />
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">   
    <DropdownMenuLabel className="flex flex-col">
    <span> 
        Gustavo Canepa
    </span>
    <span className="text-xs font-normal text-muted-foreground">
        gustavociscotto@gmail.com
    </span>
    </DropdownMenuLabel>
    <DropdownMenuSeparator/>
    <DropdownMenuItem>
    <Building className="w-4 h-4 mr-2"/>
    <span>Perfil da loja</span>
    </DropdownMenuItem>
    <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
    <LogOut color="oklch(64.5% 0.246 16.439)" className="w-4 h-4 mr-2"/>
    <span>Sair</span>
    </DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}