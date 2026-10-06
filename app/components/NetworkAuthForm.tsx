"use client";

import { useState } from "react";

export function NetworkAuthForm() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setStatus("TRANSMITTING...");
    setTimeout(() => {
      setStatus("ACCESS DENIED // OVERRIDE REQUIRED");
      setTimeout(() => setStatus(null), 3000);
    }, 800);
  };

  return (
    <div className="w-full max-w-lg flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="AUTHORIZATION CODE"
          className="flex-1 bg-transparent border-2 border-ivory text-ivory font-meta uppercase px-4 py-3 focus:outline-none focus:border-accent-red placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="bg-accent-red text-ivory font-display text-xl uppercase px-8 py-3 border-2 border-accent-red hover:bg-ivory hover:text-charcoal transition-colors whitespace-nowrap shadow-[4px_4px_0_0_#F4F1EA] active:translate-y-1 active:translate-x-1 active:shadow-none cursor-pointer"
        >
          Connect
        </button>
      </form>
      {status && (
        <p className="mt-4 font-meta text-xs uppercase tracking-widest text-accent-mustard animate-pulse">
          {status}
        </p>
      )}
    </div>
  );
}
