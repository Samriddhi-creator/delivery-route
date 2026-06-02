export interface Variant {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: 'passage' | 'artifact' | 'archive';
    image: string;
    variants?: Variant[];
}

export interface CartItem {
    product: Product;
    quantity: number;
    selectedVariantId?: string;
}

export interface CheckoutFormData {
    fullName: string;
    email: string;
    phone: string;
    deliveryType: 'in-campus' | 'out-of-campus';
    hostel?: string;
    roomNumber?: string;
    notes?: string;
    addressLine?: string;
    city?: string;
    state?: string;
    postalCode?: string;
}
