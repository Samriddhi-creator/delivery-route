"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useCheckoutStore } from '@/context/useCheckoutStore';

export default function Deliveryroute() {
    const router = useRouter();
    const { shippingType, setShippingType } = useCheckoutStore();
    const [hostelSector, setHostelSector] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [addressLine, setAddressLine] = useState("");
    const [city, setCity] = useState("");
    const [stateName, setStateName] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [collectionNotes, setCollectionNotes] = useState("");

    const [hostelError, setHostelError] = useState("");
    const [roomError, setRoomError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");
    const [postalError, setPostalError] = useState("");

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;
        setHostelError("");
        setRoomError("");
        setAddressError("");
        setCityError("");
        setStateError("");
        setPostalError("");
        if (shippingType === "on-campus") {

            if (hostelSector === "") {
                setHostelError("Hostel/Sector is required");
                isValid = false;
            }

            if (roomNo === "") {
                setRoomError("Room number is required");
                isValid = false;
            }

        } else {

            if (addressLine === "") {
                setAddressError("Address line is required");
                isValid = false;
            }

            if (city === "") {
                setCityError("City is required");
                isValid = false;
            }

            if (stateName === "") {
                setStateError("State is required");
                isValid = false;
            }

            if (postalCode === "") {
                setPostalError("Postal code is required");
                isValid = false;
            }
        }
        if (isValid === true) {
            router.push("/successful");
        }
    };

    return (
        <div className="flex justify-center items-center p-4 sm:p-6 bg-[#FAF9F5] min-h-screen">
            <Card className="w-full max-w-lg border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000000]">
                <form onSubmit={handleNext}>

                    <CardHeader className="p-4 sm:p-6 border-b-2 border-black bg-neutral-50 rounded-t-2xl">
                        <CardTitle className="text-xl font-black tracking-tight font-sans uppercase">Collection Route</CardTitle>
                        <p className="text-xs font-mono text-neutral-400 mt-1">{"// Step 2: Location Settings"}</p>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-6 space-y-5">

                        <div className="flex flex-row bg-neutral-100 p-1.5 border-2 border-black rounded-xl gap-2 mb-4">
                            <Button
                                type="button"
                                onClick={() => setShippingType('on-campus')}
                                className={`flex-1 h-10 text-xs font-mono font-bold rounded-lg cursor-pointer ${shippingType === 'on-campus'
                                    ? "bg-black text-white"
                                    : "bg-white text-black border border-black"
                                    }`}
                            >
                                On-Campus
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setShippingType('off-campus')}
                                className={`flex-1 h-10 text-xs font-mono font-bold rounded-lg cursor-pointer ${shippingType === 'off-campus'
                                    ? "bg-black text-white"
                                    : "bg-white text-black border border-black"
                                    }`}
                            >
                                Off-Campus
                            </Button>
                        </div>
                        {shippingType === 'on-campus' ? (
                            <>
                                <Field className="space-y-1.5">
                                    <FieldLabel htmlFor="Hostel-Sector" className="text-xs font-mono font-bold uppercase tracking-wide text-black">
                                        Hostel-Sector
                                    </FieldLabel>
                                    <Input
                                        id="Hostel-Sector"
                                        placeholder="Enter Hostel Sector"
                                        value={hostelSector}
                                        onChange={(e) => {
                                            setHostelSector(e.target.value);
                                            setHostelError("");
                                        }}
                                        className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus-visible:ring-0"
                                    />
                                    {hostelError !== "" && (
                                        <FieldError className="text-xs font-mono text-red-500 font-bold mt-1">
                                            {hostelError}
                                        </FieldError>
                                    )}
                                </Field>

                                <Field className="space-y-1.5">
                                    <FieldLabel htmlFor="Roomno." className="text-xs font-mono font-bold uppercase tracking-wide text-black">
                                        Room no
                                    </FieldLabel>
                                    <Input
                                        id="Roomno."
                                        placeholder="Enter Room no."
                                        value={roomNo}
                                        onChange={(e) => {
                                            setRoomNo(e.target.value);
                                            setRoomError("");
                                        }}
                                        className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus-visible:ring-0"
                                    />
                                    {roomError !== "" && (
                                        <FieldError className="text-xs font-mono text-red-500 font-bold mt-1">
                                            {roomError}
                                        </FieldError>
                                    )}
                                </Field>
                            </>
                        ) : (
                            <>
                                <Field className="space-y-1.5">
                                    <FieldLabel htmlFor="AddressLine" className="text-xs font-mono font-bold uppercase tracking-wide text-black">
                                        Address Line
                                    </FieldLabel>
                                    <Input
                                        id="AddressLine"
                                        placeholder="Enter address details"
                                        value={addressLine}
                                        onChange={(e) => {
                                            setAddressLine(e.target.value);
                                            setAddressError("");
                                        }}
                                        className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus-visible:ring-0"
                                    />
                                    {addressError !== "" && (
                                        <FieldError className="text-xs font-mono text-red-500 font-bold mt-1">
                                            {addressError}
                                        </FieldError>
                                    )}
                                </Field>

                                <div className="grid grid-cols-2 gap-4">
                                    <Field className="space-y-1.5">
                                        <FieldLabel htmlFor="City" className="text-xs font-mono font-bold uppercase tracking-wide text-black">
                                            City
                                        </FieldLabel>
                                        <Input
                                            id="City"
                                            placeholder="City"
                                            value={city}
                                            onChange={(e) => {
                                                setCity(e.target.value);
                                                setCityError("");
                                            }}
                                            className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus-visible:ring-0"
                                        />
                                        {cityError !== "" && (
                                            <FieldError className="text-xs font-mono text-red-500 font-bold mt-1">
                                                {cityError}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field className="space-y-1.5">
                                        <FieldLabel htmlFor="State" className="text-xs font-mono font-bold uppercase tracking-wide text-black">
                                            State
                                        </FieldLabel>
                                        <Input
                                            id="State"
                                            placeholder="State"
                                            value={stateName}
                                            onChange={(e) => {
                                                setStateName(e.target.value);
                                                setStateError("");
                                            }}
                                            className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus-visible:ring-0"
                                        />
                                        {stateError !== "" && (
                                            <FieldError className="text-xs font-mono text-red-500 font-bold mt-1">
                                                {stateError}
                                            </FieldError>
                                        )}
                                    </Field>
                                </div>

                                <Field className="space-y-1.5">
                                    <FieldLabel htmlFor="PostalCode" className="text-xs font-mono font-bold uppercase tracking-wide text-black">
                                        Postal / PIN Code
                                    </FieldLabel>
                                    <Input
                                        id="PostalCode"
                                        placeholder="Enter PIN code"
                                        value={postalCode}
                                        onChange={(e) => {
                                            setPostalCode(e.target.value);
                                            setPostalError("");
                                        }}
                                        className="border-2 border-black rounded-xl h-11 px-4 text-sm font-sans focus-visible:ring-0"
                                    />
                                    {postalError !== "" && (
                                        <FieldError className="text-xs font-mono text-red-500 font-bold mt-1">
                                            {postalError}
                                        </FieldError>
                                    )}
                                </Field>
                            </>
                        )}
                        <Field className="space-y-1.5">
                            <FieldLabel htmlFor="comments" className="text-xs font-mono font-bold uppercase tracking-wide text-black">
                                Collection Notes
                            </FieldLabel>
                            <Textarea
                                id="comments"
                                placeholder="Add any additional comments"
                                value={collectionNotes}
                                onChange={(e) => setCollectionNotes(e.target.value)}
                                className="border-2 border-black rounded-xl p-4 text-sm font-sans focus-visible:ring-0 resize-none"
                            />
                        </Field>

                    </CardContent>

                    <CardFooter className="p-4 sm:p-6 pt-0 flex justify-end">
                        <Button type="submit" className="h-11 px-6 text-xs font-mono font-bold bg-black text-white rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#10B981] active:translate-y-0.5 active:shadow-none cursor-pointer">
                            Next Section ➔
                        </Button>
                    </CardFooter>

                </form>
            </Card>
        </div>
    );
}