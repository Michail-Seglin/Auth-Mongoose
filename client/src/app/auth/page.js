'use client'
import Header from "../../components/Header/Header"
import style from './style.module.css'
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function Auth() {
    return (
        <div>
            <Header />
            <h1>Авторизация</h1>
            <input placeholder="email"></input>
            <input placeholder="password"></input>
            <button>Sign in</button>
        </div>
    )
}

