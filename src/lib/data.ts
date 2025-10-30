import type { Service, Professional, Product, Booking, Order, Client, DashboardStats } from './types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Corte Feminino',
    description: 'Corte personalizado de acordo com seu estilo e formato de rosto',
    price: 80,
    duration: 60,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800'
  },
  {
    id: '2',
    name: 'Corte Masculino',
    description: 'Corte moderno e profissional com acabamento premium',
    price: 60,
    duration: 45,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800'
  },
  {
    id: '3',
    name: 'Coloração Completa',
    description: 'Coloração profissional com produtos de alta qualidade',
    price: 250,
    duration: 180,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800'
  },
  {
    id: '4',
    name: 'Mechas / Highlights',
    description: 'Mechas californianas ou babylights para iluminar seu visual',
    price: 300,
    duration: 240,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'
  },
  {
    id: '5',
    name: 'Escova Progressiva',
    description: 'Alisamento profissional com efeito duradouro',
    price: 350,
    duration: 180,
    category: 'treatments',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800'
  },
  {
    id: '6',
    name: 'Hidratação Profunda',
    description: 'Tratamento intensivo para cabelos danificados',
    price: 120,
    duration: 90,
    category: 'treatments',
    image: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800'
  },
  {
    id: '7',
    name: 'Manicure',
    description: 'Cuidado completo para as unhas das mãos',
    price: 50,
    duration: 60,
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800'
  },
  {
    id: '8',
    name: 'Pedicure',
    description: 'Tratamento relaxante e embelezador para os pés',
    price: 60,
    duration: 60,
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800'
  },
  {
    id: '9',
    name: 'Unhas em Gel',
    description: 'Aplicação de unhas em gel com design personalizado',
    price: 100,
    duration: 90,
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800'
  },
  {
    id: '10',
    name: 'Massagem Relaxante',
    description: 'Massagem terapêutica para alívio do estresse',
    price: 150,
    duration: 60,
    category: 'spa',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800'
  },
];

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Sofia Martins',
    role: 'Cabeleireira Master',
    specialty: 'Coloração e Cortes Femininos',
    bio: '15 anos de experiência em transformações capilares. Especialista em colorimetria e técnicas avançadas.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Rafael Costa',
    role: 'Barbeiro',
    specialty: 'Cortes Masculinos e Barbearia',
    bio: 'Especialista em cortes clássicos e modernos. Apaixonado por criar estilos únicos.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Isabella Santos',
    role: 'Colorista',
    specialty: 'Mechas e Coloração Avançada',
    bio: 'Formação internacional em colorimetria. Criadora de looks personalizados e modernos.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    rating: 5.0
  },
  {
    id: '4',
    name: 'Mariana Lima',
    role: 'Manicure & Pedicure',
    specialty: 'Nail Art e Design de Unhas',
    bio: 'Artista em unhas com certificações internacionais. Especialista em tendências e técnicas modernas.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Ana Paula Rocha',
    role: 'Terapeuta Capilar',
    specialty: 'Tratamentos e Hidratação',
    bio: 'Especialista em recuperação capilar e tratamentos intensivos. Foco em saúde dos fios.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 4.8
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Brincos Argola Dourada',
    description: 'Brincos em argola banhados a ouro com design elegante e atemporal',
    price: 45,
    category: 'earrings',
    stock: 25,
    images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800'],
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'p2',
    name: 'Colar Delicado com Pingente',
    description: 'Colar fino com pingente de coração, perfeito para o dia a dia',
    price: 65,
    category: 'necklaces',
    stock: 18,
    images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800'],
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'p3',
    name: 'Pulseira Corrente Dourada',
    description: 'Pulseira em corrente elos banhada a ouro 18k',
    price: 55,
    category: 'bracelets',
    stock: 30,
    images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800'],
    featured: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'p4',
    name: 'Anel Solitário Elegante',
    description: 'Anel delicado com zircônia, design minimalista',
    price: 40,
    category: 'rings',
    stock: 22,
    images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800'],
    featured: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'p5',
    name: 'Conjunto Colar + Brincos',
    description: 'Set completo com colar e brincos combinando, design sofisticado',
    price: 95,
    category: 'sets',
    stock: 12,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800'],
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'p6',
    name: 'Brincos Pérola Clássicos',
    description: 'Brincos com pérolas sintéticas, elegância clássica',
    price: 50,
    category: 'earrings',
    stock: 20,
    images: ['https://images.unsplash.com/photo-1589674781759-c0c97c9f4b10?w=800'],
    featured: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'p7',
    name: 'Pulseira Berloques',
    description: 'Pulseira com berloques intercambiáveis, personalize seu estilo',
    price: 75,
    category: 'bracelets',
    stock: 15,
    images: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800'],
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'p8',
    name: 'Colar Camadas Múltiplas',
    description: 'Colar moderno com múltiplas camadas e pingentes variados',
    price: 85,
    category: 'necklaces',
    stock: 10,
    images: ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800'],
    featured: false,
    createdAt: new Date().toISOString()
  },
];

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    clientId: 'c1',
    clientName: 'Ana Silva',
    clientEmail: 'ana.silva@email.com',
    clientPhone: '(11) 98765-4321',
    serviceId: '3',
    serviceName: 'Coloração Completa',
    professionalId: '3',
    professionalName: 'Isabella Santos',
    date: '2025-11-02',
    time: '14:00',
    status: 'confirmed',
    totalPrice: 250,
    createdAt: '2025-10-25T10:30:00Z'
  },
  {
    id: 'b2',
    clientId: 'c2',
    clientName: 'Carlos Mendes',
    clientEmail: 'carlos.m@email.com',
    clientPhone: '(11) 91234-5678',
    serviceId: '2',
    serviceName: 'Corte Masculino',
    professionalId: '2',
    professionalName: 'Rafael Costa',
    date: '2025-10-31',
    time: '10:00',
    status: 'completed',
    totalPrice: 60,
    createdAt: '2025-10-28T14:20:00Z'
  },
  {
    id: 'b3',
    clientId: 'c3',
    clientName: 'Juliana Pereira',
    clientEmail: 'ju.pereira@email.com',
    clientPhone: '(11) 99876-5432',
    serviceId: '9',
    serviceName: 'Unhas em Gel',
    professionalId: '4',
    professionalName: 'Mariana Lima',
    date: '2025-11-01',
    time: '16:00',
    status: 'pending',
    totalPrice: 100,
    createdAt: '2025-10-29T09:15:00Z'
  },
];

export const mockOrders: Order[] = [
  {
    id: 'o1',
    clientId: 'c1',
    clientName: 'Ana Silva',
    clientEmail: 'ana.silva@email.com',
    clientPhone: '(11) 98765-4321',
    items: [
      { productId: 'p2', quantity: 1, product: products[1] },
      { productId: 'p5', quantity: 1, product: products[4] }
    ],
    totalAmount: 160,
    status: 'completed',
    createdAt: '2025-10-28T15:30:00Z',
    deliveryAddress: 'Rua das Flores, 123 - São Paulo, SP'
  },
  {
    id: 'o2',
    clientId: 'c4',
    clientName: 'Patricia Oliveira',
    clientEmail: 'patricia@email.com',
    clientPhone: '(11) 97777-8888',
    items: [
      { productId: 'p1', quantity: 2, product: products[0] }
    ],
    totalAmount: 90,
    status: 'pending',
    createdAt: '2025-10-30T11:00:00Z',
    deliveryAddress: 'Av. Paulista, 1000 - São Paulo, SP'
  },
];

export const mockClients: Client[] = [
  {
    id: 'c1',
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    phone: '(11) 98765-4321',
    totalSpent: 1250,
    visitCount: 8,
    lastVisit: '2025-10-28',
    registeredAt: '2024-05-15'
  },
  {
    id: 'c2',
    name: 'Carlos Mendes',
    email: 'carlos.m@email.com',
    phone: '(11) 91234-5678',
    totalSpent: 420,
    visitCount: 7,
    lastVisit: '2025-10-31',
    registeredAt: '2024-08-20'
  },
  {
    id: 'c3',
    name: 'Juliana Pereira',
    email: 'ju.pereira@email.com',
    phone: '(11) 99876-5432',
    totalSpent: 890,
    visitCount: 12,
    lastVisit: '2025-10-25',
    registeredAt: '2024-02-10'
  },
  {
    id: 'c4',
    name: 'Patricia Oliveira',
    email: 'patricia@email.com',
    phone: '(11) 97777-8888',
    totalSpent: 650,
    visitCount: 5,
    lastVisit: '2025-10-20',
    registeredAt: '2024-09-05'
  },
];

export const dashboardStats: DashboardStats = {
  revenue: {
    current: 45680,
    previous: 38250,
    change: 19.4,
    services: 32400,
    products: 13280
  },
  clients: {
    total: 234,
    new: 18,
    returning: 216
  },
  bookings: {
    total: 156,
    completed: 142,
    cancelled: 8,
    pending: 6
  },
  orders: {
    total: 89,
    completed: 76,
    pending: 13
  },
  occupancy: 87.5
};
