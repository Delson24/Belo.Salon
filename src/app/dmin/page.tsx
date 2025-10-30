'use client';

import { useState } from 'react';
import {
  DollarSign, Users, Calendar, Package, TrendingUp,
  Download, Filter, BarChart3, PieChart, LayoutDashboard,
  UserCircle, ShoppingBag, FileText
} from 'lucide-react';
import Link from 'next/link';
import { dashboardStats, mockBookings, mockClients, mockOrders } from '@/lib/data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell, LineChart, Line } from 'recharts';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const revenueData = [
    { month: 'Jan', services: 28000, products: 8500 },
    { month: 'Fev', services: 32000, products: 9200 },
    { month: 'Mar', services: 29500, products: 10100 },
    { month: 'Abr', services: 35000, products: 11500 },
    { month: 'Mai', services: 38250, products: 12100 },
    { month: 'Jun', services: 32400, products: 13280 },
  ];

  const categoryData = [
    { name: 'Cabelo', value: 45 },
    { name: 'Unhas', value: 25 },
    { name: 'Spa', value: 15 },
    { name: 'Tratamentos', value: 15 },
  ];

  const COLORS = ['#d4af37', '#000000', '#666666', '#999999'];

  const exportReport = () => {
    // Simulação de exportação - você pode usar jsPDF aqui
    alert('Relatório exportado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Admin Header */}
      <div className="bg-black text-white border-b border-gold/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                <span className="text-white">Dashboard</span>
                <span className="text-gold"> Admin</span>
              </h1>
              <p className="text-white/70 mt-1">Bem-vindo ao painel de administração</p>
            </div>
            <Link
              href="/"
              className="px-6 py-2.5 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300"
            >
              Ver Site
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: 'overview', label: 'Visão Geral', icon: LayoutDashboard },
              { id: 'bookings', label: 'Agendamentos', icon: Calendar },
              { id: 'clients', label: 'Clientes', icon: UserCircle },
              { id: 'orders', label: 'Pedidos', icon: ShoppingBag },
              { id: 'reports', label: 'Relatórios', icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-gold" />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    dashboardStats.revenue.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    +{dashboardStats.revenue.change}%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Faturamento Mensal</h3>
                <p className="text-3xl font-bold">R$ {dashboardStats.revenue.current.toLocaleString('pt-BR')}</p>
                <div className="mt-3 text-xs text-muted-foreground">
                  <span>Serviços: R$ {dashboardStats.revenue.services.toLocaleString('pt-BR')}</span>
                  <span className="mx-2">•</span>
                  <span>Produtos: R$ {dashboardStats.revenue.products.toLocaleString('pt-BR')}</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                    {dashboardStats.clients.new} novos
                  </span>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Total de Clientes</h3>
                <p className="text-3xl font-bold">{dashboardStats.clients.total}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {dashboardStats.clients.returning} clientes recorrentes
                </p>
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                    {dashboardStats.bookings.pending} pendentes
                  </span>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Agendamentos</h3>
                <p className="text-3xl font-bold">{dashboardStats.bookings.total}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {dashboardStats.bookings.completed} concluídos
                </p>
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                    {dashboardStats.occupancy}%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Taxa de Ocupação</h3>
                <p className="text-3xl font-bold">{dashboardStats.occupancy}%</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Acima da meta de 80%
                </p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold mb-6">Faturamento Mensal</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="services" fill="#d4af37" name="Serviços" />
                    <Bar dataKey="products" fill="#000000" name="Produtos" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold mb-6">Serviços por Categoria</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RePieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Gerenciar Agendamentos</h2>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Filtrar</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">ID</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Cliente</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Serviço</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Profissional</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Data/Hora</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Valor</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-border hover:bg-muted/30">
                        <td className="px-6 py-4 text-sm font-medium">#{booking.id}</td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium">{booking.clientName}</p>
                            <p className="text-xs text-muted-foreground">{booking.clientPhone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">{booking.serviceName}</td>
                        <td className="px-6 py-4 text-sm">{booking.professionalName}</td>
                        <td className="px-6 py-4 text-sm">
                          {new Date(booking.date).toLocaleDateString('pt-BR')} - {booking.time}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gold">
                          R$ {booking.totalPrice}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            booking.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {booking.status === 'confirmed' ? 'Confirmado' :
                             booking.status === 'pending' ? 'Pendente' :
                             booking.status === 'completed' ? 'Concluído' : 'Cancelado'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Gerenciar Clientes</h2>
            </div>

            <div className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Nome</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Contato</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Total Gasto</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Visitas</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Última Visita</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Cadastro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockClients.map((client) => (
                      <tr key={client.id} className="border-b border-border hover:bg-muted/30">
                        <td className="px-6 py-4 font-medium">{client.name}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <p>{client.email}</p>
                            <p className="text-muted-foreground">{client.phone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gold">
                          R$ {client.totalSpent.toLocaleString('pt-BR')}
                        </td>
                        <td className="px-6 py-4">{client.visitCount} vezes</td>
                        <td className="px-6 py-4">{new Date(client.lastVisit).toLocaleDateString('pt-BR')}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(client.registeredAt).toLocaleDateString('pt-BR')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Pedidos da Loja</h2>
            </div>

            <div className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">ID</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Cliente</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Itens</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Valor Total</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-muted/30">
                        <td className="px-6 py-4 text-sm font-medium">#{order.id}</td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium">{order.clientName}</p>
                            <p className="text-xs text-muted-foreground">{order.clientPhone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">{order.items.length} item(s)</td>
                        <td className="px-6 py-4 font-semibold text-gold">
                          R$ {order.totalAmount}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'completed' ? 'bg-green-100 text-green-700' :
                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            order.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {order.status === 'completed' ? 'Completo' :
                             order.status === 'pending' ? 'Pendente' :
                             order.status === 'processing' ? 'Processando' : 'Cancelado'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {new Date(order.createdAt).toLocaleDateString('pt-BR')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Relatórios e Estatísticas</h2>
              <button
                onClick={exportReport}
                className="px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Exportar Relatório PDF</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Revenue Report */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-gold mr-2" />
                  Faturamento Detalhado
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Serviços (Mês Atual)</span>
                    <span className="font-bold">R$ {dashboardStats.revenue.services.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Produtos (Mês Atual)</span>
                    <span className="font-bold">R$ {dashboardStats.revenue.products.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Total Mês Atual</span>
                    <span className="font-bold text-gold">R$ {dashboardStats.revenue.current.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mês Anterior</span>
                    <span className="font-medium">R$ {dashboardStats.revenue.previous.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">
                      Crescimento de +{dashboardStats.revenue.change}% em relação ao mês anterior
                    </p>
                  </div>
                </div>
              </div>

              {/* Client Statistics */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 text-gold mr-2" />
                  Estatísticas de Clientes
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Total de Clientes</span>
                    <span className="font-bold">{dashboardStats.clients.total}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Novos Clientes (Mês)</span>
                    <span className="font-bold">{dashboardStats.clients.new}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Clientes Recorrentes</span>
                    <span className="font-bold">{dashboardStats.clients.returning}</span>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">
                      Taxa de retenção: {((dashboardStats.clients.returning / dashboardStats.clients.total) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <BarChart3 className="h-5 w-5 text-gold mr-2" />
                Performance Mensal Completa
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="services" stroke="#d4af37" strokeWidth={2} name="Serviços" />
                  <Line type="monotone" dataKey="products" stroke="#000000" strokeWidth={2} name="Produtos" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
