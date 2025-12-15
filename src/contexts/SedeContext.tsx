'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import axios from 'axios'
import { SedeContextType } from '@/types/include'

const SedeContext = createContext<SedeContextType | undefined>(undefined)

export function SedeProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<{ name: string; empresa: string }>({ name: '', empresa: '' })
    const [hasEntered, setHasEntered] = useState<boolean>(false)

    const changeSede = (name: string, empresa: string) => {
        setData({ name, empresa })
        
        axios.post('/api/crypto/hash', {
            object: { name, empresa }
        }).then((response) => {
            localStorage.setItem('Data', response.data.text)
        })
    }

    useEffect(() => {
        const savedSede = localStorage.getItem('Data') as string
        
        if (savedSede) {
            setHasEntered(true)
            axios.post('/api/crypto/unhash', {
                object: savedSede,
            }).then((response) => { 
                const decoded = response.data.text
                setData(decoded)
            })
        }
    }, [])

    return (
        <SedeContext.Provider value={{ sede: data.name, empresa: data.empresa, hasEntered, changeSede, setHasEntered }}>
            {children}
        </SedeContext.Provider>
    )
}

export function useSede() {
    const context = useContext(SedeContext)

    if (context === undefined) {
        throw new Error('useSede must be used within a SedeProvider')
    }

    return context
}

