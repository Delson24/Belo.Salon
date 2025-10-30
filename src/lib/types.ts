export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: 'hair' | 'nails' | 'spa' | 'treatments';
  image?: string;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  rating: number;
}

export interface Booking {
  id: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string;
  serviceName: string;
  professionalId: string;
  professionalName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'earrings' | 'necklaces' | 'bracelets' | 'rings' | 'sets';
  stock: number;
  images: string[];
  featured: boolean;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
  deliveryAddress?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  visitCount: number;
  lastVisit: string;
  registeredAt: string;
}

export interface DashboardStats {
  revenue: {
    current: number;
    previous: number;
    change: number;
    services: number;
    products: number;
  };
  clients: {
    total: number;
    new: number;
    returning: number;
  };
  bookings: {
    total: number;
    completed: number;
    cancelled: number;
    pending: number;
  };
  orders: {
    total: number;
    completed: number;
    pending: number;
  };
  occupancy: number;
}
