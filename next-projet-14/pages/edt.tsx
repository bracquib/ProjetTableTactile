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
                            <Link href="/edt/info3">
                                INFO 3
                            </Link>
                        </h2>
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/info4">
                                INFO 4
                            </Link>
                        </h2>
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/info5">
                                INFO 5
                            </Link>
                        </h2>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex  justify-center">
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/tis3">
                                TIS 3
                            </Link>
                        </h2>
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/tis4">
                                TIS 4
                            </Link>
                        </h2>
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/tis5">
                                TIS 5
                            </Link>
                        </h2>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex justify-center">
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/iese3">
                                IESE 3
                            </Link>
                        </h2>
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/iese4">
                                IESE 4
                            </Link>
                        </h2>
                        <h2 className="font-mono text-2xl font-bold text-center py-5 px-5">
                            <Link href="/edt/iese5">
                                IESE 5
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}