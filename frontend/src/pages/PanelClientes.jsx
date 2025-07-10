import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, Phone, Home, Clock, ArrowRight, Trash2, History, Calendar,
  Star, Award, Leaf, Recycle, TreePine, Sparkles, Heart,
  Shield, Zap, Gift, X
} from 'lucide-react';

export default function PanelUsuario() {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const usuario = {
    nombre: 'Rommel Chambi',
    celular: '987654321',
    direccion: 'Cerro Colorado - Av. Paisajista 123',
    registradoDesde: '2024-12-01',
    recojosTotales: 12,
    kgReciclados: 28.5,
    puntosFidelidad: 145,
    nivelEco: 'Eco Warrior'
  };

  const beneficios = [
    { icon: TreePine, titulo: 'Planeta Protegido', descripcion: 'Cada recojo salva el medio ambiente' },
    { icon: Zap, titulo: 'Servicio Rápido', descripcion: 'Recojo en menos de 24 horas' },
    { icon: Shield, titulo: 'Confianza Total', descripcion: 'Servicio 100% seguro y confiable' },
    { icon: Gift, titulo: 'Recompensas', descripcion: 'Gana puntos por cada recojo' }
  ];

  const estadisticas = [
    {
      valor: usuario.recojosTotales,
      etiqueta: 'Recojos Realizados',
      color: 'from-blue-500 to-cyan-600',
      icon: Recycle
    },
    {
      valor: `${usuario.kgReciclados} kg`,
      etiqueta: 'Residuos Reciclados',
      color: 'from-green-500 to-emerald-600',
      icon: Leaf
    },
    {
      valor: usuario.puntosFidelidad,
      etiqueta: 'Puntos Eco',
      color: 'from-purple-500 to-pink-600',
      icon: Star
    },
    {
      valor: usuario.nivelEco,
      etiqueta: 'Nivel Actual',
      color: 'from-orange-500 to-red-600',
      icon: Award
    }
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">

        {showWelcome && (
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 rounded-3xl text-white mb-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-8 -translate-x-8"></div>

            <button
              onClick={() => setShowWelcome(false)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">¡Hola, {usuario.nombre}! 🌱</h1>
                  <p className="text-green-100 text-lg">Tu aliado en el cuidado del planeta</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-100">
                <Sparkles className="w-5 h-5" />
                <span>Miembro desde {usuario.registradoDesde} • {usuario.nivelEco}</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {estadisticas.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase opacity-80 mb-1">{stat.etiqueta}</p>
                  <p className="text-2xl font-bold">{stat.valor}</p>
                </div>
                <stat.icon className="w-8 h-8 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-green-600" />
            Mi Información
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard icon={<User className="w-6 h-6 text-green-600" />} label="Nombre completo" value={usuario.nombre} />
            <InfoCard icon={<Phone className="w-6 h-6 text-blue-600" />} label="Número de celular" value={usuario.celular} />
            <InfoCard icon={<Home className="w-6 h-6 text-purple-600" />} label="Dirección registrada" value={usuario.direccion} />
            <InfoCard icon={<Clock className="w-6 h-6 text-orange-600" />} label="Cliente desde" value={usuario.registradoDesde} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-3xl mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Por qué elegirnos? 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-md mb-4 mx-auto w-fit">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{beneficio.titulo}</h3>
                  <p className="text-gray-600 text-sm">{beneficio.descripcion}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ActionButton onClick={() => handleNavigation('/cliente/historial')} icon={<History className="w-6 h-6" />} label="Ver Historial" color="from-green-500 to-emerald-600" />
          <ActionButton onClick={() => alert('¡Próximamente disponible!')} icon={<Trash2 className="w-6 h-6" />} label="Solicitar Recojo" color="from-blue-500 to-cyan-600" />
          <ActionButton onClick={() => alert('¡Función en desarrollo!')} icon={<Calendar className="w-6 h-6" />} label="Programar Recojo" color="from-purple-500 to-pink-600" />
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-3xl text-white shadow-lg text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">¡Gracias por cuidar nuestro planeta! 🌍</h3>
          <p className="text-yellow-100 text-lg mb-4">
            Con tus {usuario.recojosTotales} recojos has reciclado {usuario.kgReciclados} kg de residuos.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full font-bold">
              Nivel: {usuario.nivelEco}
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full font-bold">
              {usuario.puntosFidelidad} Puntos Eco
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
      <div className="p-3 rounded-full bg-opacity-20">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-gray-800 font-semibold">{value}</p>
      </div>
    </div>
  );
}

function ActionButton({ onClick, icon, label, color }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r ${color} text-white font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-between group transform hover:scale-105 transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg">{label}</span>
      </div>
      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
