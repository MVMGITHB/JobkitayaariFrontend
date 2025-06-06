'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AnimatedLink() {
  const colors = ['text-blue-600', 'text-black', 'text-green-600'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000); // Change color every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-4">
      <Link
        href="https://spectrum.gotrackier.com/click?campaign_id=183&pub_id=945"
        className={`${colors[colorIndex]} font-bold text-3xl transition-colors duration-500`}
      >
        Learn immersive public speaking and creative writing skills - Unleash your true Potential Now
      </Link>
    </div>
  );
}
