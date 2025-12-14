'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { config } from "@/constants/config"
import { useSede } from "@/hooks/useSede"

export default function Sedes() {
    const { localSede, changeSede } = useSede()

    return (
        <Select onValueChange={(value) => {
            changeSede(value, true)
        }}>
            <SelectTrigger className={"w-52"}>
                <SelectValue placeholder={"Selecciona una sede"} />
            </SelectTrigger>
            <SelectContent className={'h-52'}>
                <SelectGroup>
                    <SelectLabel>Megatlon</SelectLabel>
                    {config.sedes.megatlon.map((sede, i) => (
                        <SelectItem key={i} value={sede.name}>{sede.name}</SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Fiter</SelectLabel>
                    {config.sedes.fiter.map((sede, i) => (
                        <SelectItem key={i} value={sede.name}>{sede.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}