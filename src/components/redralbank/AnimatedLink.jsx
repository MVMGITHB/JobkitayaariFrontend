'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AnimatedLink({text,link}) {
  const textColors = ['text-blue-300', 'text-violet-950', 'text-red-900'];
  const borderColors = ['border-blue-300', 'border-violet-950', 'border-red-900'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % textColors.length);
    }, 1000); // Change color every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-center p-1 border rounded-[10px] transition-colors duration-500 ${borderColors[colorIndex]}`}>
      <Link
        href={link}
        className={`${textColors[colorIndex]} font-bold text-2xl transition-colors duration-500`}
      >
        {text}
      </Link>
    </div>
  );
}
