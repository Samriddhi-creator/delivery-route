"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function StepDelivery() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");


    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;
        if (name === "") {
            setNameError("Full name is required");
            isValid = false;
        } else {
            setNameError("");
        }
        if (email === "") {
            setEmailError("Email address is required");
            isValid = false;
        } else {
            setEmailError("");
        }
        if (phone === "") {
            setPhoneError("Phone number is required");
            isValid = false;
        } else {
            setPhoneError("");
        }
        if (isValid === true) {
            router.push("/deliveryroute");
        }
    };

    return (
        <div className="flex justify-center items-center p-6 bg-[#FAF9F5] min-h-screen">


            <div className="w-full max-w-lg border-4 border-black rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000000] p-6">


                <div className="border-b-2 border-black pb-4 mb-6">
                    <h1 className="text-xl font-black uppercase tracking-tight">
                        Identify Explorer
                    </h1>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                        {"// Step 1: Manifest Verification"}
                    </p>
                </div>


                <form onSubmit={handleNext} className="space-y-5">
                    <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-black">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError("");
                            }}
                            className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus:outline-none"
                        />
                        {nameError !== "" && (
                            <p className="text-xs font-mono text-red-500 font-bold">
                                ⚠ {nameError}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-black">
                            Enter Email
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError("");
                            }}
                            className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus:outline-none"
                        />
                        {emailError !== "" && (
                            <p className="text-xs font-mono text-red-500 font-bold">
                                ⚠ {emailError}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-black">
                            Enter Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setPhoneError("");
                            }}
                            className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus:outline-none"
                        />
                        {phoneError !== "" && (
                            <p className="text-xs font-mono text-red-500 font-bold">
                                ⚠ {phoneError}
                            </p>
                        )}
                    </div>


                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="h-11 px-6 text-xs font-mono font-bold bg-black text-white rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#10B981] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                        >
                            Next Section ➔
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}