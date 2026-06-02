"use client";
import React from 'react';
import ProductCard from "@/components/Products/ProductCard";
import Navbar from "@/components/navbar/navbar";


export default function Page() {

    return (
        <div className="min-h-screen bg-[#ffffff]">
            <Navbar />
            <div className="p-4 md:p-6 lg:p-8">
                <ProductCard />
            </div>
        </div>
    );
}