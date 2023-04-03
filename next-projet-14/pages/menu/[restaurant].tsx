import { useRouter } from "next/router";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import axios from "axios";
import parse from 'html-react-parser';

export default function Restaurant() {
    const router = useRouter();
    const {restaurant} = router.query;
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if(restaurant !== undefined) {
            axios.get(`http://localhost:5002/repas/${restaurant}`).then((response) => {
                
            setData(parse(response.data));
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

                <h2 className="font-mono text-2xl text-center font-bold mb-5 mt-5">
                    {restaurant}
                </h2>

                <div className="font-mono text-xl text-center font-bold mb-5 mt-5">
                    {data}
                </div>
            </div>
    );
}