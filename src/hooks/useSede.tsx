import { Sede } from "@/types/include"
import { useEffect, useState } from "react"
import axios from 'axios'

export function useSede() {
    const [data, setData] = useState<Sede>()

    const changeSede = (name: string, hasChosen: boolean) => {
        setData({
            name,
            hasChosen
        })
        axios.post('/api/crypto/hash', {
            object: data
        }).then((response) => {
            localStorage.setItem('Sede', response.data.text)
        })
    }

    useEffect(() => {
        const savedSede = localStorage.getItem('Sede') as string
        
        if (savedSede) {
            axios.post('/api/crypto/unhash', {
                object: savedSede,
            }).then((response) => {
                setData(response.data.text)
            })
        }
    }, [])

    return {
        localSede: data,
        changeSede
    }
}