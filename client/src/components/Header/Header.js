import Link from "next/link"


export default function Header() {
    return (
        <div>
            <p><Link href={'/auth'}>Go to Autorization page</Link></p>
            <p><Link href={'/reg'}>Go to Registration page</Link></p>
            <p><Link href={'/'}>Go to Main page</Link></p>
        </div>
    )
}



