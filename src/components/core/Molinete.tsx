'use client'

import Image from "next/image"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"

export default function Molinete({
    id,
    pfp,
    nombre,
}: {
    id: number;
    pfp: string;
    nombre: string;
}) {
    return (
        <Card className={'w-60 h-80 md:w-72 md:h-102 flex p-5 justify-center'}>
            <CardHeader className={'justify-center items-center'}>
                <CardTitle className={'text-xl'}>Molinete {id}</CardTitle>
            </CardHeader>
            <CardContent className={'justify-center items-center flex flex-col gap-5'}>
                <Image
                    width={500}
                    height={500}
                    alt={'Image'}
                    src={pfp}
                    className={'rounded-full w-32 md:w-40'}
                />
                <h3 className={'font-medium'}>{nombre}</h3>
            </CardContent>
            <CardFooter className={'justify-center items-center'}>
                <Button variant={'secondary'} className={'cursor-pointer'}>
                    Apertura Anónima F{id}  
                </Button>
            </CardFooter>
        </Card>
    )
}