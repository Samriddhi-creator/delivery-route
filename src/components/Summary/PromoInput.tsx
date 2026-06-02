"use client";
import React, { useState } from 'react';
import { useCheckoutStore } from '@/context/useCheckoutStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function PromoInput() {
    const { promoCode, discountPercent, applyPromoCode, removePromoCode } = useCheckoutStore();
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);

    const handleApply = () => {
        if (!code.trim()) return;
        const success = applyPromoCode(code.trim());
        if (success) {
            setError(false);
            setCode('');
        } else {
            setError(true);
        }
    };

    return (
        <div className="w-full space-y-2 mt-4">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">Promo Code</p>
            {promoCode ? (
                <div className="flex justify-between items-center bg-green-50 border border-green-300 rounded-xl p-3">
                    <div className="flex flex-col">
                        <span className="text-xs font-mono font-bold text-green-800">DISCOUNT APPLIED</span>
                        <span className="text-sm font-sans font-bold text-green-900">{promoCode} (-{discountPercent}%)</span>
                    </div>
                    <Button 
                        onClick={removePromoCode}
                        className="h-8 px-3 text-xs bg-red-100 hover:bg-red-200 text-red-700 border border-red-300 rounded-lg font-mono font-bold"
                    >
                        Remove
                    </Button>
                </div>
            ) : (
                <div className="space-y-1">
                    <div className="flex gap-2">
                        <Input
                            placeholder="Enter Code (e.g. TEDX2026)"
                            value={code}
                            onChange={(e) => {
                                setCode(e.target.value);
                                if (error) setError(false);
                            }}
                            className="border-2 border-black rounded-xl h-10 px-3 text-xs font-mono focus-visible:ring-0 focus-visible:border-black uppercase flex-1"
                        />
                        <Button 
                            onClick={handleApply}
                            className="h-10 px-4 text-xs font-mono font-bold bg-black text-white hover:bg-neutral-800 rounded-xl border border-black"
                        >
                            Apply
                        </Button>
                    </div>
                    {error && (
                        <p className="text-[10px] font-mono text-red-500 font-bold uppercase">Invalid Code</p>
                    )}
                </div>
            )}
        </div>
    );
}
