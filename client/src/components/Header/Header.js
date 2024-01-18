import Link from "next/link"
import style from './style.module.scss'

export default function Header() {
    return (
        <div className={style.all} >
            <p><Link href={'/'}>Home</Link></p>
            <p><Link href={'/auth'}>Sign in</Link></p>
            <p><Link href={'/reg'}>Sign up</Link></p>
        </div>
    )
}



