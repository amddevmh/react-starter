import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeModeDisplay() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  
  // Only access window object after component is mounted (client-side)
  useEffect(() => {
    setMounted(true)
    
    // Determine if we're in dark mode
    const checkDarkMode = () => {
      if (theme === "dark") return true
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
      }
      return false
    }
    
    setIsDark(checkDarkMode())
    
    // Listen for system preference changes if in system mode
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches)
      
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme])
  
  // Toggle between light and dark mode
  const toggleTheme = () => {
    if (isDark) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }
  
  // Avoid hydration mismatch by rendering nothing until client-side
  if (!mounted) {
    return <div className="flex items-center gap-2 opacity-0">Loading...</div>
  }
  
  return (
    <div 
      className="flex items-center gap-2 cursor-pointer" 
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleTheme()
        }
      }}
    >
      {!isDark ? (
        <>
          <Moon className="h-4 w-4" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          <span>Light Mode</span>
        </>
      )}
    </div>
  )
}
