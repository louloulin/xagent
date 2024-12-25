import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { 
  Plus, ChevronRight, Home, Settings, Users,
  Compass, Star, Clock, BookOpen, MessageSquare, Zap,
  Bot, FileText, Code, PenTool, Database, BarChart, 
  HeadphonesIcon, Sparkles, ChevronDown,
  FolderOpen, Store, Webhook, HelpCircle
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/layout/header"
import { cn } from "@/lib/utils"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { ScrollAreaViewport } from "@/components/ui/scroll-area-viewport"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { WorkspaceList } from "../workspace/workspace-list"
import { useState } from "react"
import type { Workspace } from "@/types/workspace"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { workspaces } from "../workspace/data"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const mainNavItems = [
  { 
    name: '首页', 
    icon: Home, 
    path: '/',
    description: '总览和快速访问'
  },
  { 
    name: '工作空间', 
    icon: FolderOpen, 
    path: '/workspaces',
    description: '管理您的工作空间'
  },
  { 
    name: '应用市场', 
    icon: Store, 
    path: '/store',
    description: '浏览和安装应用'
  },
  { 
    name: 'API', 
    icon: Webhook, 
    path: '/api',
    description: '接口和开发文档'
  }
]

const bottomNavItems = [
  { 
    name: '设置', 
    icon: Settings, 
    path: '/settings',
    description: '系统设置'
  },
  { 
    name: '帮助', 
    icon: HelpCircle, 
    path: '/help',
    description: '帮助和支持'
  }
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedWorkspace, setSelectedWorkspace] = useState<string>()

  return (
    <div className="flex min-h-screen">
      {/* 固定宽度的侧边栏 */}
      <aside className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Logo */}
        <div className="flex h-14 items-center gap-3 border-b px-6">
          <div className="relative h-8 w-8">
            <img src="/coze-logo.svg" alt="Coze" className="h-full w-full" />
            <div className="absolute inset-0 rounded-lg bg-primary/10 animate-pulse" />
          </div>
          <span className="text-xl font-semibold">易设编辑</span>
        </div>

        <div className="flex flex-1 flex-col">
          <ScrollArea className="flex-1">
            <ScrollAreaViewport>
              <div className="space-y-4 py-4">
                {/* 主导航 */}
                <div className="px-3">
                  <div className="space-y-1">
                    {mainNavItems.map((item) => (
                      <Tooltip key={item.path}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start",
                              location.pathname === item.path && "bg-secondary"
                            )}
                            asChild
                          >
                            <Link to={item.path}>
                              <item.icon className="mr-2 h-4 w-4" />
                              {item.name}
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <div className="flex flex-col gap-1">
                            <p className="font-medium">{item.name}</p>
                            {item.description && (
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            )}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>

                <Separator className="mx-3" />

                {/* 工作空间列表 */}
                <div className="px-3">
                  <div className="mb-2 px-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">工作空间</span>
                      <span className="text-xs text-muted-foreground">{workspaces.length}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6 hover:bg-primary/10 hover:text-primary"
                      onClick={() => navigate('/workspaces')}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <WorkspaceList 
                    items={workspaces}
                    selectedId={selectedWorkspace}
                    onSelect={(workspace) => {
                      setSelectedWorkspace(workspace.id)
                      navigate(`/workspaces/${workspace.id}`)
                    }}
                  />
                </div>
              </div>
            </ScrollAreaViewport>
          </ScrollArea>

          {/* 底部导航 */}
          <div className="mt-auto border-t">
            <div className="space-y-1 p-3">
              {bottomNavItems.map((item) => (
                <Tooltip key={item.path}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start",
                        location.pathname === item.path && "bg-secondary"
                      )}
                      asChild
                    >
                      <Link to={item.path}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">{item.name}</p>
                      {item.description && (
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* 主内容区域 */}
      <div className="pl-72 flex-1">
        <Header />
        {children}
      </div>
    </div>
  )
} 