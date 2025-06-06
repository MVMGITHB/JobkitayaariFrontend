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
        href="https://mvmbs.com/"
        className={`${colors[colorIndex]} font-bold text-3xl transition-colors duration-500`}
      >
        𝐏𝐚𝐲 𝐀𝐟𝐭𝐞𝐫 𝐏𝐥𝐚𝐜𝐞𝐦𝐞𝐧𝐭 𝐓𝐫𝐚𝐢𝐧𝐢𝐧𝐠 𝐏𝐫𝐨𝐠𝐫𝐚𝐦 - 𝐆𝐞𝐭 𝐏𝐥𝐚𝐜𝐞𝐝 𝐈𝐧 𝐓𝐨𝐩 𝐌𝐍𝐂'𝐬
      </Link>
    </div>
  );
}
