import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import { Nav } from "./nav"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Bot,
  Code,
  FileText,
  Home,
  LayoutGrid,
  Plus,
  Settings,
  Store,
} from "lucide-react"

const workspaces = [
  {
    id: "1",
    name: "股票数据分析助手",
    icon: Bot,
  },
  {
    id: "2",
    name: "论文助手",
    icon: FileText,
  },
  {
    id: "3",
    name: "AI PPT助手",
    icon: FileText,
  },
  {
    id: "4",
    name: "代码生成器",
    icon: Code,
  },
  {
    id: "5",
    name: "系统配置助手",
    icon: Settings,
  },
]

export function DashboardLayout() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen">
      {/* 侧边栏 */}
      <div className="w-[250px] flex flex-col border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 h-14 border-b border-border/40"
        >
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg" />
            <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-lg p-1.5">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-5 h-5 text-white"
              >
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
          </div>
          <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            XAGENT
          </span>
        </Link>

        {/* 导航菜单 */}
        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-4">
            {/* 主导航 */}
            <div className="space-y-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "hover:bg-accent"
                  )
                }
              >
                <Home className="h-4 w-4" />
                首页
              </NavLink>
              <NavLink
                to="/workspaces"
                end
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "hover:bg-accent"
                  )
                }
              >
                <LayoutGrid className="h-4 w-4" />
                工作空间
              </NavLink>
              <NavLink
                to="/market"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "hover:bg-accent"
                  )
                }
              >
                <Store className="h-4 w-4" />
                应用市场
              </NavLink>
            </div>

            {/* 工作空间列表 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-3">
                <h2 className="text-xs font-semibold text-foreground/60">工作空间</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-4 w-4"
                  onClick={() => navigate('/workspaces')}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Separator className="mx-3 bg-border/40" />
              <div className="space-y-1">
                {workspaces.map((workspace) => (
                  <NavLink
                    key={workspace.id}
                    to={`/workspaces/${workspace.id}`}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        isActive ? "bg-primary/10 text-primary" : "hover:bg-accent"
                      )
                    }
                  >
                    <workspace.icon className="h-4 w-4" />
                    <span className="truncate">{workspace.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* 主内容区 */}
      <main className="flex-1 flex flex-col">
        <Nav />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
} 