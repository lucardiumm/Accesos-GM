'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Socio } from "@/types/include";
import { useEffect, useState } from "react";
import moment from 'moment'

export default function Lister({ list }: {
    list: Socio[];
}) {
    const currentTime = () => {
        const aDate = new Date(Date.now())
        return `${aDate.getHours()}:${aDate.getMinutes()}`
    }

    return (
        <Table>
            <TableCaption>Registro de ingreso</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Hora</TableHead>
                    <TableHead>Nro socio</TableHead>
                    <TableHead>Documento</TableHead>
                    <TableHead>Nombre completo</TableHead>
                    <TableHead className="w-[100px]">Vto contrato</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Resultado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className={''}>
                {list.map((socio, i) => (
                    <TableRow key={i} className={false ? '' : ''}>
                        <TableCell>
                            {currentTime()}
                        </TableCell>
                        <TableCell>
                            {socio.ns}
                        </TableCell>
                        <TableCell>
                            {socio.doc}
                        </TableCell>
                        <TableCell>
                            {socio.nc}
                        </TableCell>
                        <TableCell>
                            <b>{socio.vto}</b>
                        </TableCell>
                        <TableCell>
                            {moment().isAfter(moment(socio.vto, 'L')) ? 'CONCEDIDO' : 'DENEGADO'}
                        </TableCell>
                        <TableCell>
                            {socio.doc}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}