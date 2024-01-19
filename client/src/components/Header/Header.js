import Link from "next/link"
import style from './style.module.scss'
import { Button } from "@mui/material"
export default function Header() {
    return (
        <div className={style.all} >
            <Button variant='text' href={'/'} classname={style.signIn}>Home</Button>
            <div className={style.regAuth} >
                <Button variant='contained' href={'/auth'} classname={style.signIn}>Sign In</Button>
                <Button variant='outlined' href={'/reg'} classname={style.signUp}>Sign Up</Button>
            </div>
        </div >
    )
}



