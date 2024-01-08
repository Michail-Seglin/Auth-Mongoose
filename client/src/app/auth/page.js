'use client'
import Header from "../../components/Header/Header"

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

