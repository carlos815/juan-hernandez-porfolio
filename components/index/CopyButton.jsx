import Image from 'next/image'
import userData from "../../userData/userData";
import styles from '../../styles/CopyButton.module.css'
import { useState } from 'react';

export default function CopyButton({ data }) {

    const [isCopyNotificationShown, setIsCopyNotificationShown] = useState(false)

    const copyCodeToClipboard = async () => {
        const copyState = await navigator.clipboard.writeText(userData.email)
        setIsCopyNotificationShown(true)
        await setTimeout(() => { setIsCopyNotificationShown(false); }, 3000); // wait


    }
    const notification = <div>Copiaste mi correo a tu portapapeles! <span><img src="/assets/icons/grin-alt-regular.svg" alt="" srcset="" /></span></div>
    const img = <img src="/assets/icons/grin-alt-regular.svg" alt="" srcset="" />

    return (
        <div className="group relative">
            <button className="flex font-display  text-tiny bg-black text-gray-900 py-[8.5px] px-6 rounded items-center gap-x-4 " onClick={() => {
                copyCodeToClipboard()
            }}>
                <p>{userData.email}</p>

                <div className='group-hover:animate-wiggle  flex items-center'>                <Image src="/assets/copy.svg" height="14" width="14" />
                </div>
            </button>

            <div className={`transition-opacity duration-500  w-full absolute text-center gap-3 items-center mt-4 justify-center ${!isCopyNotificationShown && "opacity-0"} text-body text-black`} >

                <p>
                    Copiaste mi correo a tu portapapeles! <span>{":)"}</span>
                </p></div>
        </div >


    )
}
