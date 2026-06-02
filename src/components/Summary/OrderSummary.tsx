"use client";
import React from 'react';
import { useCheckoutStore } from '@/context/useCheckoutStore';

export default function OrderSummary() {
    const { cart, getCartTotal, discountPercent } = useCheckoutStore();
    const subtotal = getCartTotal();
    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    const finalTotal = subtotal - discountAmount;

    if (cart.length === 0) {
        return (
            <p className="text-sm font-mono text-neutral-600 mt-12 mb-16">
                Awaiting survey input. Select coordinates to begin.
            </p>
        );
    }

    return (
        <div className="w-full space-y-4">
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm border-b border-dashed border-neutral-200 pb-2">
                        <div className="flex flex-col">
                            <span className="font-bold text-black">{item.title}</span>
                            <span className="text-xs text-neutral-500 font-mono">Qty: {item.quantity} × Rs.{item.price}</span>
                        </div>
                        <span className="font-mono font-bold text-black">Rs.{item.price * item.quantity}</span>
                    </div>
                ))}
            </div>

            <div className="h-[2px] w-full bg-black my-2" />

            <div className="space-y-1.5 text-sm">
                <div className="flex justify-between font-mono">
                    <span className="text-neutral-500 uppercase">Subtotal</span>
                    <span className="font-bold">Rs.{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                    <div className="flex justify-between font-mono text-green-700">
                        <span className="uppercase">Discount</span>
                        <span className="font-bold">-Rs.{discountAmount}</span>
                    </div>
                )}
                <div className="flex justify-between font-sans text-base font-black pt-1 border-t border-neutral-100">
                    <span className="uppercase">Final Sum</span>
                    <span>Rs.{finalTotal}</span>
                </div>
            </div>
        </div>
    );
}
