'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SettingsIcon } from "lucide-react"
import { config } from "@/constants/config"
import { useSede } from "@/hooks/useSede"

export default function Settings() {
    const { localSede, changeSede } = useSede()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'}>
                    <SettingsIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'w-32 mr-7'} align={'start'}>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        lpignataro@megatlon.com.ar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Cerrar sesion
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                 <DropdownMenuLabel>Megatlon</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={localSede} onValueChange={changeSede}>
                    {config.sedes.megatlon.sort((a, b) => a.name.localeCompare(b.name)).map((sede, i) => (
                        <DropdownMenuRadioItem value={sede.name} key={i}>
                            {sede.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
                <DropdownMenuLabel>Fiter</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={localSede} onValueChange={changeSede}>
                    {config.sedes.fiter.sort((a, b) => a.name.localeCompare(b.name)).map((sede, i) => (
                        <DropdownMenuRadioItem value={sede.name} key={i}>
                            {sede.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}