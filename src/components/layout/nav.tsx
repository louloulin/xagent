import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "lucide-react"

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-2 px-4 h-14 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* 左侧搜索按钮 */}
      <Button variant="ghost" size="icon" className="shrink-0">
        <Search className="h-4 w-4" />
      </Button>

      {/* 右侧主题切换 */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </nav>
  )
} 