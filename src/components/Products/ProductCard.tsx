"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/context/useCheckoutStore";
import OrderSummary from "@/components/Summary/OrderSummary";
import PromoInput from "@/components/Summary/PromoInput";

const ITEM_DETAILS: Record<string, { title: string; price: number; category: string; image: string }> = {
    session1: { title: "Session 1 Pass", price: 100, category: "passage", image: "https://i.pinimg.com/1200x/2f/7c/80/2f7c8099998f78c220e01d0974e6d292.jpg" },
    session2: { title: "Session 2 Pass", price: 100, category: "passage", image: "https://i.pinimg.com/736x/92/8c/ea/928cea3480d434e07d89b80b483b5c16.jpg" },
    combo: { title: "Combo", price: 200, category: "passage", image: "https://i.pinimg.com/1200x/35/b8/84/35b884a0d2f130c813e67d625bcc3a45.jpg" },
    tshirt: { title: "Terra Incognita Tshirt", price: 200, category: "artifact", image: "https://i.pinimg.com/736x/af/85/14/af8514965d7c78077e2aee7c501688df.jpg" },
    bags: { title: "Terra Incognita bags", price: 200, category: "artifact", image: "https://i.pinimg.com/736x/3a/66/fe/3a66fea78bff57af666e41d43d0e4705.jpg" },
    hoodie: { title: "Terra Incognita Hoodies", price: 200, category: "artifact", image: "https://i.pinimg.com/736x/fd/e2/71/fde271e19db42613dbc8e9ade451250e.jpg" },
    rubiks: { title: "Rubiks", price: 200, category: "archive", image: "https://i.pinimg.com/736x/74/1c/7d/741c7dcd1fbf62ab0b958c2d64ddde8a.jpg" },
    stickers: { title: "Terra incognita Stickers", price: 200, category: "archive", image: "https://i.pinimg.com/736x/30/10/2a/30102abb00fa37422b5b5661e7b1e0c2.jpg" },
    binoculars: { title: "Binoculars Telescopes", price: 200, category: "archive", image: "https://i.pinimg.com/1200x/dc/7d/9f/dc7d9f2250a96a0263bfdc6125ad9b05.jpg" },
};

export default function ProductCard() {
    const storeCart = useCheckoutStore((state) => state.cart);
    const updateQuantity = useCheckoutStore((state) => state.updateQuantity);
    const [activeProductId, setActiveProductId] = useState<string | null>(null);

    const cart: Record<string, number> = {
        session1: storeCart.find(item => item.id === 'session1')?.quantity || 0,
        session2: storeCart.find(item => item.id === 'session2')?.quantity || 0,
        combo: storeCart.find(item => item.id === 'combo')?.quantity || 0,
        tshirt: storeCart.find(item => item.id === 'tshirt')?.quantity || 0,
        bags: storeCart.find(item => item.id === 'bags')?.quantity || 0,
        hoodie: storeCart.find(item => item.id === 'hoodie')?.quantity || 0,
        rubiks: storeCart.find(item => item.id === 'rubiks')?.quantity || 0,
        stickers: storeCart.find(item => item.id === 'stickers')?.quantity || 0,
        binoculars: storeCart.find(item => item.id === 'binoculars')?.quantity || 0,
    };

    const increment = (id: string) => {
        const details = ITEM_DETAILS[id];
        if (details) {
            updateQuantity(id, details.title, details.price, details.category, 1);
        }
    };
    const decrement = (id: string) => {
        const details = ITEM_DETAILS[id];
        if (details) {
            updateQuantity(id, details.title, details.price, details.category, -1);
        }
    };

    const activeProduct = activeProductId && ITEM_DETAILS[activeProductId]
        ? { id: activeProductId, ...ITEM_DETAILS[activeProductId] }
        : null;

    return (
        <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full justify-between items-start">

                <div className="flex-1 w-full space-y-12">
                    {/* Section 1: Passages */}
                    <div>
                        <h1 className="text-2xl font-bold mb-6 font-mono tracking-tight uppercase text-black">PASSAGES</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            <Card
                                className="border-4 border-green-900 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('session1')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.session1.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Session 1 Pass</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.100</p>
                                    <div className="flex flex-row items-center border-2 border-black bg-black text-white rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('session1'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors h-full select-none cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 font-mono font-bold min-w-[40px] text-center flex items-center justify-center">
                                            {cart.session1}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('session1'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors h-full select-none cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card
                                className="border-4 border-green-900 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('session2')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.session2.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Session 2 Pass</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.100</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('session2'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.session2}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('session2'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card
                                className="border-4 border-green-900 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('combo')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.combo.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Combo</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.200</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('combo'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.combo}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('combo'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="h-[2px] bg-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full" />

                    {/* Section 2: Artifacts */}
                    <div>
                        <h1 className="text-2xl font-bold mb-6 font-mono tracking-tight uppercase text-black">ARTIFACTS</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            <Card
                                className="border-4 border-yellow-400 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('tshirt')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.tshirt.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Terra Incognita Tshirt</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.200</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('tshirt'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.tshirt}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('tshirt'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card
                                className="border-4 border-yellow-400 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('bags')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.bags.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Terra Incognita bags</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.200</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('bags'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.bags}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('bags'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card
                                className="border-4 border-yellow-400 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('hoodie')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.hoodie.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Terra Incognita Hoodies</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.200</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('hoodie'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.hoodie}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('hoodie'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="h-[2px] bg-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full" />

                    {/* Section 3: Archive Items */}
                    <div>
                        <h1 className="text-2xl font-bold mb-6 font-mono tracking-tight uppercase text-black">ARCHIVE ITEMS</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            <Card
                                className="border-4 border-pink-400 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('rubiks')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.rubiks.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Rubiks</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.200</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('rubiks'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.rubiks}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('rubiks'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card
                                className="border-4 border-pink-400 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('stickers')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.stickers.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Terra incognita Stickers</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.200</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('stickers'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.stickers}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('stickers'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>

                            <Card
                                className="border-4 border-pink-400 shadow-[2px_2px_0px_0px_#000000] w-full max-w-[280px] mx-auto sm:mx-0 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between cursor-pointer"
                                onClick={() => setActiveProductId('binoculars')}
                            >
                                <CardHeader className="p-4">
                                    <div
                                        style={{ backgroundImage: `url('${ITEM_DETAILS.binoculars.image}')`, backgroundSize: "cover" }}
                                        className="h-40 w-full bg-center rounded-lg">
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 py-2">
                                    <p className="font-bold font-sans text-black">Binoculars Telescopes</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                                    <p className="font-mono font-bold text-black">Rs.200</p>
                                    <div className="flex flex-row gap-2 bg-black text-white border-2 border-black rounded-lg overflow-hidden">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); decrement('binoculars'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-mono font-bold min-w-[40px] text-center">
                                            {cart.binoculars}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); increment('binoculars'); }}
                                            className="px-3 py-1 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Right Column: Expedition Manifest Sidebar */}
                <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-6">
                    <Card className="border-4 border-red-800 w-full max-w-sm mx-auto lg:w-80 lg:mx-0 shadow-[2px_2px_0px_0px_#000000] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between p-6 bg-white">
                        <CardHeader className="p-0">
                            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">Expedition Manifest</p>
                            <p className="mt-1 text-2xl font-black uppercase text-black">
                                {storeCart.length > 0 ? "Survey Manifest" : "Select Coordinates"}
                            </p>
                            <div className="h-[2px] w-full bg-black my-4" />
                            <OrderSummary />
                            {storeCart.length > 0 && <PromoInput />}
                        </CardHeader>

                        <CardFooter className="p-0 flex flex-col gap-4 mt-6">
                            {storeCart.length > 0 ? (
                                <Link href="/stepdelivery" className="w-full">
                                    <Button className="h-12 w-full text-sm font-mono font-bold bg-[#10B981] hover:bg-emerald-600 text-white border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_#000000] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer">
                                        Continue Expedition ➔
                                    </Button>
                                </Link>
                            ) : (
                                <Button disabled className="h-12 w-full text-sm font-mono font-bold bg-[#E0E0E0] text-neutral-400 border-2 border-dashed border-neutral-300 rounded-xl cursor-not-allowed select-none">
                                    Continue Expedition ➔
                                </Button>
                            )}
                            <div className="flex justify-between w-full text-[10px] text-neutral-400 uppercase tracking-wider font-mono">
                                <span>Secure Transmission</span>
                                <span>Authenticated</span>
                            </div>
                        </CardFooter>
                    </Card>
                </div>

            </div>

            {/* Popup Modal for Bigger Image / Middle screen */}
            {activeProduct && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all"
                    onClick={() => setActiveProductId(null)}
                >
                    <div
                        className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] w-full max-w-xl overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button top right */}
                        <button
                            className="absolute top-4 right-4 bg-black text-white hover:bg-red-500 rounded-xl p-2 border-2 border-black font-mono font-bold cursor-pointer transition-all hover:scale-105 active:translate-y-0.5"
                            onClick={() => setActiveProductId(null)}
                        >
                            ✕
                        </button>

                        <div className="p-6 space-y-6">
                            {/* Product Image bigger size */}
                            <div
                                className="w-full h-80 rounded-xl border-4 border-black bg-center"
                                style={{ backgroundImage: `url('${activeProduct.image}')`, backgroundSize: "cover" }}
                            />

                            {/* Product Details */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-2xl font-black uppercase tracking-tight font-sans text-black">
                                        {activeProduct.title}
                                    </h2>
                                    <p className="text-xl font-mono font-black text-black">
                                        Rs. {activeProduct.price}
                                    </p>
                                </div>
                                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide">
                                    Category: {activeProduct.category}
                                </p>
                                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                                    Add this rare artifact/passage to your survey manifest. Authenticated coordinates will be delivered upon transmission verification.
                                </p>
                            </div>

                            {/* Quantity Controls in Popup */}
                            <div className="flex items-center justify-between border-t-2 border-black pt-4">
                                <span className="font-mono text-xs font-bold uppercase text-black">Manifest Quantity:</span>
                                <div className="flex flex-row items-center border-2 border-black bg-black text-white rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => decrement(activeProduct.id)}
                                        className="px-4 py-2 bg-black hover:bg-red-900 font-bold border-r border-neutral-800 transition-colors select-none text-lg cursor-pointer"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 font-mono font-bold min-w-[50px] text-center text-lg">
                                        {cart[activeProduct.id]}
                                    </span>
                                    <button
                                        onClick={() => increment(activeProduct.id)}
                                        className="px-4 py-2 bg-black hover:bg-red-900 font-bold border-l border-neutral-800 transition-colors select-none text-lg cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}