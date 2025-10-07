import React, { useState } from 'react';

export default function App() {
  const [trend, setTrend] = useState('');
  const [video, setVideo] = useState(null);

  const trends = [
    'Frases motivacionales del día',
    'Reflexiones con imágenes de Dios',
    'Videos de guerreros y superación',
    'Ideas virales de comida y estilo de vida',
  ];

  function generarVideo() {
    const randomTrend = trends[Math.floor(Math.random() * trends.length)];
    setTrend(randomTrend);
    setVideo('https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-green-800 to-yellow-400">
      <h1 className="text-4xl font-bold mb-2">jdrm.create</h1>
      <p className="text-lg mb-6 italic">"Crea videos virales con la energía de la IA"</p>

      <button
        onClick={generarVideo}
        className="bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
      >
        Generar video IA
      </button>

      {trend && (
        <div className="mt-6 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
          <h2 className="text-xl mb-2">Tendencia generada:</h2>
          <p className="font-semibold">{trend}</p>
        </div>
      )}

      {video && (
        <video className="mt-6 rounded-xl shadow-lg w-full max-w-sm" controls>
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}