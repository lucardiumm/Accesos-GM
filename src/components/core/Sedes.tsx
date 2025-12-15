'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { config } from '@/constants/config'
import { useSede } from '@/hooks/useSede'
import { useState } from 'react'

export default function Sedes() {
    const { changeSede } = useSede()

    return (
        <Select onValueChange={(value) => {
            const [name, empresa] = value.split('-')
            changeSede(name, empresa)
        }}>
            <SelectTrigger className={'w-52'}>
                <SelectValue placeholder={'Selecciona una sede'} />
            </SelectTrigger>
            <SelectContent className={'h-52'}>
                <SelectGroup>
                    <SelectLabel>Megatlon</SelectLabel>
                    {config.sedes.megatlon.map((sede, i) => (
                        <SelectItem key={i} value={`${sede.name}-megatlon`}>{sede.name}</SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Fiter</SelectLabel>
                    {config.sedes.fiter.map((sede, i) => (
                        <SelectItem key={i} value={`${sede.name}-fiter`}>{sede.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}