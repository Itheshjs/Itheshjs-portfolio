import { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'))
    }, 350)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#0b0f19] flex items-center justify-center z-50">
      <div className="text-center px-4">
        {/* Logo badge */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold shadow-xl shadow-sky-500/20 animate-pulse">
          IJ
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
          ITHESH <span className="text-gradient">JS</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 font-medium mb-6">
          Junior Web Developer | WordPress &amp; Frontend
        </p>

        {/* Loading Indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-bounce"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0.15s' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        <div className="text-xs text-slate-500 mt-4 font-mono">
          Loading Portfolio{dots}
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen