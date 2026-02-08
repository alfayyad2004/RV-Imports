// Database types for the application

export interface Vehicle {
    id: string
    make: string
    model: string
    year: number
    price: number
    price_ttd?: number  // TTD price if different from base price
    mileage?: number
    condition: 'RORO' | 'Local Used' | 'New'
    type?: 'Sedan' | 'SUV' | 'Truck' | 'Van' | 'Coupe' | 'Hatchback'
    status?: 'In Stock' | 'In Transit' | 'Sold'
    description?: string
    features?: string[]
    specs?: string  // Specifications text
    images?: string[]
    transmission?: string
    fuel_type?: string
    fuel_system?: string
    engine_size?: string
    body_color?: string
    interior_color?: string
    interior_type?: string
    doors?: number
    seats?: number
    wheels?: string
    sub_model?: string
    chassis_no?: string
    reference_no?: string
    created_at?: string
    updated_at?: string
}

export interface ContactMessage {
    id: string
    first_name: string
    last_name: string
    email: string
    message: string
    created_at: string
}
