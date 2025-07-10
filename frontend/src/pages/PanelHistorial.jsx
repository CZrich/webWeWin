import { useState } from 'react';
import { Calendar, MapPin, Weight, CheckCircle, Clock, Wallet, Truck, TrendingUp, Award, Zap } from 'lucide-react';

export default function PanelClientes() {
  const [activeTab, setActiveTab] = useState('pagos');

  const pagos = [
    {
      id: 1,
      fecha: '2025-06-28',
      monto: 15.0,
      metodo: 'Yape',
      estado: 'Completado',
      descripcion: 'Pago por recojo de residuos',
      hora: '14:32',
      distancia: '3.2 km'
    },
    {
      id: 2,
      fecha: '2025-06-15',
      monto: 15.0,
      metodo: 'Yape',
      estado: 'Completado',
      descripcion: 'Pago por recojo de residuos',
      hora: '09:15',
      distancia: '3.2 km'
    },
    {
      id: 3,
      fecha: '2025-06-01',
      monto: 15.0,
      metodo: 'Yape',
      estado: 'Completado',
      descripcion: 'Pago por recojo de residuos',
      hora: '16:45',
      distancia: '3.2 km'
    },
    {
      id: 4,
      fecha: '2025-05-20',
      monto: 15.0,
      metodo: 'Yape',
      estado: 'Completado',
      descripcion: 'Pago por recojo de residuos',
      hora: '11:20',
      distancia: '3.2 km'
    },
  ];

  const recojos = [
    {
      id: 1,
      fecha: '2025-07-03',
      zona: 'Cerro Colorado - Av. Paisajista 123',
      peso: '5.2 kg',
      estado: 'Recolectado',
      items: 'Botellas plásticas, latas, cartón',
      hora: '10:30'
    },
    {
      id: 2,
      fecha: '2025-06-28',
      zona: 'Cerro Colorado - Av. Paisajista 123',
      peso: '3.8 kg',
      estado: 'Recolectado',
      items: 'Plástico, vidrio, papel periódico',
      hora: '15:45'
    },
    {
      id: 3,
      fecha: '2025-06-15',
      zona: 'Cerro Colorado - Av. Paisajista 123',
      peso: '7.1 kg',
      estado: 'Recolectado',
      items: 'Botellas, cartón, latas, papel blanco',
      hora: '08:15'
    },
    {
      id: 4,
      fecha: '2025-06-01',
      zona: 'Cerro Colorado - Av. Paisajista 123',
      peso: '4.3 kg',
      estado: 'Recolectado',
      items: 'Plástico, papel, envases tetra pak',
      hora: '17:00'
    },
    {
      id: 5,
      fecha: '2025-05-20',
      zona: 'Cerro Colorado - Av. Paisajista 123',
      peso: '6.9 kg',
      estado: 'Recolectado',
      items: 'Botellas, latas, cartón, vidrio',
      hora: '12:30'
    },
  ];

  const totalGanado = pagos.reduce((sum, pago) => sum + pago.monto, 0);
  const totalReciclado = recojos.reduce((sum, recojo) => sum + parseFloat(recojo.peso), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-4 py-8">
      {/* Header con estadísticas */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-2">¡Hola, Campeón del Reciclaje! 🌱</h1>
          <p className="text-lg text-green-700">Mira todo lo que has logrado reciclando</p>
        </div>

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 mb-1">Total Pagado</p>
                <p className="text-3xl font-bold">S/. {totalGanado.toFixed(2)}</p>
              </div>
              <Wallet className="w-12 h-12 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 mb-1">Total Reciclado</p>
                <p className="text-3xl font-bold">{totalReciclado.toFixed(1)} kg</p>
              </div>
              <Weight className="w-12 h-12 text-blue-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 mb-1">Recojos Realizados</p>
                <p className="text-3xl font-bold">{recojos.length}</p>
              </div>
              <Truck className="w-12 h-12 text-purple-200" />
            </div>
          </div>
        </div>

        {/* Mensaje motivacional */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl text-white mb-8 shadow-lg">
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">¡Excelente trabajo, pata! 🎉</h3>
              <p className="text-yellow-100">Has reciclado {totalReciclado.toFixed(1)} kg de residuos. ¡Sigue cuidando nuestro planeta!</p>
            </div>
          </div>
        </div>

        {/* Pestañas */}
        <div className="flex space-x-1 bg-green-100 p-1 rounded-xl mb-8">
          <button
            onClick={() => setActiveTab('pagos')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'pagos' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'text-green-700 hover:bg-green-200'
            }`}
          >
            💰 Mis Pagos ({pagos.length})
          </button>
          <button
            onClick={() => setActiveTab('recojos')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'recojos' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'text-green-700 hover:bg-green-200'
            }`}
          >
            🚛 Mis Recojos ({recojos.length})
          </button>
        </div>

        {/* Contenido de pestañas */}
        {activeTab === 'pagos' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Historial de Pagos - ¡Pagos por Yape!
            </h2>
            {pagos.map((pago) => (
              <div key={pago.id} className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      Y
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{pago.descripcion}</h3>
                      <span className="text-2xl font-bold text-green-600">S/. {pago.monto.toFixed(2)}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {pago.fecha} • {pago.hora}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Distancia: {pago.distancia}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {pago.estado}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'recojos' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <Truck className="w-6 h-6" />
              Historial de Recojos - ¡Cada recojo cuenta!
            </h2>
            {recojos.map((recojo) => (
              <div key={recojo.id} className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Truck className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800">Recojo #{recojo.id}</h3>
                      <span className="text-xl font-bold text-blue-600">{recojo.peso}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {recojo.fecha} • {recojo.hora}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {recojo.zona}
                      </span>
                      <span className="flex items-center gap-1">
                        <Weight className="w-4 h-4" />
                        {recojo.peso}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {recojo.estado}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">Materiales reciclados:</p>
                      <p className="text-sm text-gray-600">{recojo.items}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer motivacional */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-2xl text-white">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">¡Sigue así, campeón! 🏆</h3>
            <p className="text-green-100 mb-4">
              Con cada recojo ayudas a cuidar nuestro hermoso Perú. ¡Eres parte del cambio!
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <p className="font-bold">{recojos.length}</p>
                <p className="text-green-200">Recojos solicitados</p>
              </div>
              <div>
                <p className="font-bold">{totalReciclado.toFixed(1)} kg</p>
                <p className="text-green-200">Reciclados</p>
              </div>
              <div>
                <p className="font-bold">S/. {totalGanado.toFixed(2)}</p>
                <p className="text-green-200">Pagados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}