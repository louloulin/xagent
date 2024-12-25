import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Workspace } from "@/types/workspace"
import { Bot, FileText, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function WorkspacePage() {
  return (
    <div className="container py-6 space-y-6">
      {/* 页面标题和操作 */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">工作空间</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          新建工作空间
        </Button>
      </div>

      {/* 搜索和筛选 */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="搜索工作空间..." 
            className="pl-9"
          />
        </div>
        <Button variant="outline">最近访问</Button>
        <Button variant="outline">已收藏</Button>
      </div>

      {/* 工作空间网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </div>
  )
}

interface WorkspaceCardProps {
  workspace: Workspace
}

function WorkspaceCard({ workspace }: WorkspaceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <workspace.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium truncate">{workspace.name}</h3>
              {workspace.status === 'online' && (
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
              )}
            </div>
            {workspace.description && (
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {workspace.description}
              </p>
            )}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-muted-foreground">
                {workspace.lastUpdated}
              </span>
              {workspace.type === 'assistant' && (
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  助手
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const workspaces: Workspace[] = [
  {
    id: "1",
    name: "股票数据分析助手",
    description: "基于大数据的股票市场分析工具，提供实时市场洞察和投资建议。支持技术分析、基本面分析和市场情绪分析。",
    icon: Bot,
    status: "online",
    isVerified: true,
    type: "assistant",
    lastUpdated: "最近更新 12:06 22:49"
  },
  {
    id: "2",
    name: "论文助手",
    description: "智能论文写作助手，支持多种学术格式，提供写作建议、文献引用和格式化功能。",
    icon: FileText,
    status: "online",
    isVerified: true,
    type: "assistant",
    lastUpdated: "最近更新 12:06 22:48"
  },
  // ... 添加更多工作空间
] 