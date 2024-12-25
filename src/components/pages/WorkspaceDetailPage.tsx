import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Settings, Share2, Star } from "lucide-react"

export function WorkspaceDetailPage() {
  const { id } = useParams()
  const workspace = workspaces.find(w => w.id === id)

  if (!workspace) {
    return <div>工作空间不存在</div>
  }

  return (
    <div className="container py-6 space-y-6">
      {/* 头部信息 */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <workspace.icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{workspace.name}</h1>
            <p className="text-muted-foreground mt-2">{workspace.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 工作区内容 */}
      <div className="grid grid-cols-12 gap-6">
        {/* 主要内容区域 */}
        <div className="col-span-8">
          {/* 在这里添加工作区的主要功能 */}
        </div>

        {/* 侧边栏 */}
        <div className="col-span-4">
          {/* 在这里添加工作区的辅助功能 */}
        </div>
      </div>
    </div>
  )
} 