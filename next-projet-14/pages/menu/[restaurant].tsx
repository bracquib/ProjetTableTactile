import { useRouter } from "next/router";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import axios from "axios";

export default function Restaurant() {
    const router = useRouter();
    const {restaurant} = router.query;

    useEffect(() => {
        if(restaurant !== undefined) {
            axios.get(`http://localhost:5002/repas/${restaurant}`).then((response) => {
                const data = response.data;
                console.log(data);
            });
        }
    }, [restaurant]);


    return (
            <div>
                <h1 className="font-mono text-3xl text-center font-bold mb-5 mt-5">
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <Link href="/edt">
                        Retour à l&apos;emploi du temps 📖
                    </Link>
                </h1>
                
            </div>
    );
}