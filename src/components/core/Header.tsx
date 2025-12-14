'use client'

import Image from "next/image"
import Settings from "@/components/core/Settings"
import { Modal } from "./Modal";
import { useSede } from "@/hooks/useSede";

export default function Header() {
    const { localSede } = useSede()

    return (
        <header className={'w-full h-20 border-b-[1.5px] flex-row flex border-b-gray-200 justify-between items-center'}>
            <div className={'ml-7'}>
                <Image
                    width={500}
                    height={500}
                    alt={'ICON'}
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4RRqgkSruMFjfTcjN614mMUi9Ee4CXOUTA&s'}
                    className={'w-12 rounded-full'}
                />
            </div>

            <h1 className={'font-semibold text-xl'}>{localSede}</h1>

            <div className={'mr-7 gap-5 flex-row flex'}>
                {localSede && <Modal />}
                <Settings />
            </div>
        </header>
    )
}