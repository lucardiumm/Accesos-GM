'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { config } from "@/constants/config"
import { useLister } from "@/hooks/useLister"
import { Socio } from "@/types/include"
import { Search } from "lucide-react"
import { useState } from "react"

export function Modal() {
    const { add } = useLister()

    const [dni, setDni] = useState<string>('')
    const [nombre, setNombre] = useState('')
    const [exists, setExists] = useState(false)

    const findSocio = (docu: string) => {
        const filtered = config.socios.find(socio => {
            return socio.doc === parseInt(docu)
        })

        if (filtered) {
            add(filtered)
            setExists(true)
            setNombre(filtered?.nc as string)

            return true
        }

        setNombre('')
        setExists(false)

        return false
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Search />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Buscar socio</DialogTitle>
                    <DialogDescription>
                        {exists && nombre}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only"></Label>
                        <Input
                            value={dni}
                            onChange={(e) => {
                                setDni(e.target.value)
                                findSocio(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <Button disabled={exists ? false : true} type="button" onClick={() => {
                        findSocio(dni)
                    }}>
                        Abrir
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}