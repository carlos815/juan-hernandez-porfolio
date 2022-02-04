import Link from "next/link";
import Image from 'next/image'
import userData from "../../userData/userData";
import CopyButton from "./CopyButton";

export default function Hero({ data }) {
    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText('juanhernandez@hey.com')
    }
    const notification = <div>Copiaste mi correo a tu portapapeles! <span><img src="/assets/icons/grin-alt-regular.svg" alt="" srcset="" /></span></div>
    return (
        <div className="w-full flex justify-center xl:my-[171px] my-36">
            <div className="max-w-2xl flex flex-col items-center">
                <h1 className="font-display text-2xl font-extrabold text-gray-100 leading-none text-center">
                    {userData.name}
                </h1>
                <h2 className="font-display text-xl text-black mb-2">Diseñador UI</h2>
                <p className="font-body text-base text-center text-gray-300 mb-8">
                    Bienvenido a mi portafolio, acá puedes ver un poco mi trabajo.
                </p>
                <CopyButton />
            </div>
        </div>
    )
}
