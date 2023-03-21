import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center content-center border">
            <ul className="font-mono text-3xl font-bold text-center mt-5">
                <li className="mb-5"><Link href="http://localhost:8080">Retour à la page d&apos;accueil 🏠</Link></li>
                <li className="mb-5"><Link href="/edt">Emploi du temps 📖</Link></li>
                <li className="mb-5"><Link href="#">Menu Crous 🍽</Link></li>
            </ul>
        </div>
    );
}
