import Link from "next/link";

export default function Edt() {
    return (
        <div className="min-h-screen flex flex-col justify-center content-center border">
            <h1 className="font-mono text-3xl font-bold text-center mt-5">
                Emploi du temps 📖
            </h1>
            <div className="justify-center content-center">
                <div className="mt-5">
                    <div className="flex justify-center">
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/menu/ru-lintermezzo">
                                Intermezzo
                            </Link>
                        </h2>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}