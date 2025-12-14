import { config } from "@/constants/config"
import { Socio } from "@/types/include"
import { useEffect, useState } from "react"

export function useLister() {
    const [data, setData] = useState<Socio[]>(config.socios)

    const add = (socio: Socio) => {
        setData(prevData => [...prevData, socio])
        return data
    }

    useEffect(() => {

    }, [])

    return {
        list: data,
        add
    }
}