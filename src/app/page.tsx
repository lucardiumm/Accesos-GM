'use client'

import Sedes from '@/components/core/Sedes'
import { Button } from '@/components/ui/button'
import { useSede } from '@/hooks/useSede'
import Image from 'next/image'
import { redirect, RedirectType } from 'next/navigation'
import { useEffect, useState } from 'react'
import GM from '$/public/png/Logo.png'
import { config } from '@/constants/config'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

const getSedeId = (localSede: {
    name: string;
    empresa: string;
}) => {
    if (localSede.empresa === 'megatlon') {
        const element = config.sedes.megatlon.filter((value) => value.name.toLowerCase() === localSede.name.toLowerCase())
        return element[0].id
    }

    const element = config.sedes.fiter.filter((value) => value.name.toLowerCase() === localSede.name.toLowerCase())
    return element[0].id
}

export default function Page() {
    const { sede, empresa, hasEntered, setHasEntered } = useSede()

    const [logged, setLogged] = useState<boolean>(true)
    
    if (!logged) {
        return redirect('https://account.microsoft.com/account?lang=es-es')
    }

    const Press = () => {
        setHasEntered(true)
        redirect(`/${empresa}/${getSedeId({ name: sede, empresa })}`)
    }

    useEffect(() => {
        if (logged && hasEntered && sede) {
            redirect(`/${empresa}/${getSedeId({ name: sede, empresa })}`)
        }   
    }, [logged, hasEntered, sede, empresa])

    return (
        <>
            <main className={'flex flex-1 flex-col items-center justify-center w-screen h-screen'}>
                <div className={'gap-7 flex flex-col'}>
                    <div className={'gap-5'}>
                        <Image 
                            width={300}
                            height={150}
                            alt={'GRUPOMEGATLON'}
                            src={GM}
                            className={'w-44 md:w-52'}
                        />
                        
                        <div className={'w-56 md:w-80 h-[0.25px] bg-black'} />
                    </div>

                    <div className={'gap-5 flex flex-col items-center justify-center'}>
                        <Sedes />

                        {!hasEntered && (
                            <Button onClick={() => {
                                sede ? Press() : toast.error('Debe seleccionar una sede')
                            }} className={'w-40 cursor-pointer'}>
                                <p>Continuar</p>
                            </Button>
                        )}
                    </div>
                </div>
            </main>

            <Toaster position={'top-center'} />
        </>
    )
}