import React from 'react'

export function NodeLogo({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="w-full h-full animate-[spin_30s_linear_infinite]">
        <svg 
          viewBox="0 0 256 256" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M228.6 182.2c0 2.2-1.2 4.2-3.1 5.3l-94.4 54.5c-1.9 1.1-4.2 1.1-6.1 0L30.6 187.5c-1.9-1.1-3.1-3.1-3.1-5.3V73.4c0-2.2 1.2-4.2 3.1-5.3L125 13.6c1.9-1.1 4.2-1.1 6.1 0l94.4 54.5c1.9 1.1 3.1 3.1 3.1 5.3v108.8z" fill="#339933"/>
          <path d="M128 50.1c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6 14.7 0 26.6-11.9 26.6-26.6 0-14.7-11.9-26.6-26.6-26.6zm0 101.4c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6 14.7 0 26.6-11.9 26.6-26.6 0-14.7-11.9-26.6-26.6-26.6zm-50.7-50.7c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6 14.7 0 26.6-11.9 26.6-26.6 0-14.7-11.9-26.6-26.6-26.6zm101.4 0c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6 14.7 0 26.6-11.9 26.6-26.6 0-14.7-11.9-26.6-26.6-26.6z" fill="#FFF"/>
        </svg>
      </div>
      <div className="absolute w-[20%] h-[20%] bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_25px_rgba(255,255,255,0.6)]" />
    </div>
  )
}
