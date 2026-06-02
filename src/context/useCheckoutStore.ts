"use client";
import { create } from 'zustand';

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    category: string;
}

interface CheckoutStore {
    cart: CartItem[];
    currentStep: number;
    shippingType: 'on-campus' | 'off-campus';
    promoCode: string | null;
    discountPercent: number;
    setShippingType: (type: 'on-campus' | 'off-campus') => void;
    setStep: (step: number) => void;
    updateQuantity: (id: string, title: string, price: number, category: string, delta: number) => void;
    getCartTotal: () => number;
    applyPromoCode: (code: string) => boolean;
    removePromoCode: () => void;
    clearCart: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set, get) => ({
    cart: [],
    currentStep: 1,
    shippingType: 'on-campus',
    promoCode: null,
    discountPercent: 0,
    setShippingType: (type) => set({ shippingType: type }),
    setStep: (step) => set({ currentStep: step }),
    updateQuantity: (id, title, price, category, delta) => set((state) => {
        const existing = state.cart.find(item => item.id === id);
        if (!existing && delta > 0) {
            return { cart: [...state.cart, { id, title, price, quantity: 1, category }] };
        }
        const updated = state.cart.map(item => {
            if (item.id === id) {
                const nextQty = item.quantity + delta;
                return nextQty > 0 ? { ...item, quantity: nextQty } : null;
            }
            return item;
        }).filter(Boolean) as CartItem[];

        return { cart: updated };
    }),
    getCartTotal: () => get().cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    applyPromoCode: (code) => {
        const upperCode = code.toUpperCase();
        if (upperCode === 'TEDX2026' || upperCode === 'EXPEDITION') {
            set({ promoCode: upperCode, discountPercent: 10 });
            return true;
        }
        if (upperCode === 'SUPERCOMBO') {
            set({ promoCode: upperCode, discountPercent: 15 });
            return true;
        }
        return false;
    },
    removePromoCode: () => set({ promoCode: null, discountPercent: 0 }),
    clearCart: () => set({ cart: [], promoCode: null, discountPercent: 0 }),
}));