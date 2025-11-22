// src/components/ui/button.jsx
import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 text-slate-50 hover:bg-slate-900/90 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
