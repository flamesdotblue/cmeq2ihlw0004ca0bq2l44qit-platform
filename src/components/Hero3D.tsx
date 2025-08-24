"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline").then(m => m.default), {
  ssr: false,
});

export default function Hero3D({ scene }: { scene: string }) {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 rounded-3xl border border-gray-200/70 bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md overflow-hidden">
      {!mounted && (
        <div className="absolute inset-0 grid place-items-center text-gray-500 text-sm">Loading…</div>
      )}
      {mounted && (
        <div className="spline-wrapper absolute inset-0">
          <Spline scene={scene} onLoad={() => setReady(true)} />
          {!ready && (
            <div className="absolute inset-0 grid place-items-center text-gray-500 text-sm">Loading 3D…</div>
          )}
        </div>
      )}
    </div>
  );
}
