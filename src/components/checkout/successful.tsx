import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Successful() {
    return (
        <div className="flex justify-center items-center p-4 sm:p-6 bg-[#FAF9F5]">
            <Card className="w-full max-w-md border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-8 flex flex-col items-center text-center gap-6">
                
                <div className="flex items-center justify-center bg-neutral-50 border-2 border-black rounded-xl p-4 w-full">
                    <Image
                        src="https://i.pinimg.com/originals/8d/ef/af/8defaf7ff8fd7cbfc358b5a5fd7b2a81.gif"
                        alt="Successful"
                        width={240}
                        height={240}
                        className="h-48 w-48 object-contain"
                        unoptimized
                    />
                </div>

                <CardHeader className="p-0 space-y-2">
                    <CardTitle className="text-2xl font-black uppercase font-sans tracking-tight">Transmission Successful</CardTitle>
                    <CardDescription className="font-mono text-xs text-neutral-500">{"// Coordinates Authenticated & Recorded"}</CardDescription>
                </CardHeader>

                <CardContent className="p-0 text-sm font-sans text-neutral-600">
                    Your survey submission and expedition details have been successfully transmitted to mainframe.
                </CardContent>

                <CardFooter className="p-0 w-full pt-2">
                    <Link href="/" className="w-full">
                        <Button className="h-11 w-full text-xs font-mono font-bold bg-black text-white rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#10B981] transition-all hover:bg-neutral-800 active:translate-y-0.5 active:shadow-none">
                            Return to Base (Home) ➔
                        </Button>
                    </Link>
                </CardFooter>

            </Card>
        </div>
    );
}