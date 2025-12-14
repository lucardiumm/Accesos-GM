'use client'

import Sedes from "@/components/core/Sedes"
import { Button } from "@/components/ui/button"
import { useSede } from "@/hooks/useSede"
import Image from "next/image"
import { redirect, RedirectType } from "next/navigation"
import { useEffect, useState } from "react"
import GM from '$/public/png/Logo.png'
import { config } from "@/constants/config"

export default function Page() {
    const { localSede } = useSede()

    const [logged, setLogged] = useState<boolean>(true)
    
    if (!logged) {
        return redirect('https://account.microsoft.com/account?lang=es-es')
    }

    useEffect(() => {
        if (localSede?.name) {
            const element = config.sedes.megatlon.filter((value) => value.name === localSede?.name)

            redirect(`/megatlon/${element[0].id}`)
        }
    }, [localSede?.name])

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
                            className={'w-52'}
                        />
                        
                        <div className={'w-102 h-[0.25px] bg-black'} />
                    </div>

                    <div className={'gap-5 flex flex-col items-center justify-center'}>
                        <Sedes />

                        <Button disabled={localSede?.name.length > 0 ? false : true} onClick={() => redirect(``, RedirectType.replace)} className={'w-40 cursor-pointer'}>
                            <p>Continuar</p>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}