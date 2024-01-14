'use client'
import Header from "../../components/Header/Header"
import style from './style.module.css'
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function Reg() {
    return (
        <div>
            <Header />
            <h1>Регистрация</h1>
            <input placeholder="name"></input>
            <input placeholder="surname"></input>
            <input placeholder="email"></input>
            <input placeholder="password"></input>
            <input placeholder="age"></input>
            <button>Sign Up</button>
        </div>
    )
}

