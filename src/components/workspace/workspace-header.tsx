import { Button } from "@/components/ui/button"
import { Settings, Share2, Star } from "lucide-react"
import type { Workspace } from "@/types/workspace"

interface WorkspaceHeaderProps {
  workspace: Workspace
}

export function WorkspaceHeader({ workspace }: WorkspaceHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
          <workspace.icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-semibold">{workspace.name}</h1>
            {workspace.status === 'online' && (
              <span className="flex h-2 w-2 rounded-full bg-green-500" />
            )}
            {workspace.isVerified && (
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            {workspace.description}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm text-muted-foreground">
              {workspace.lastUpdated}
            </span>
            <span className="text-sm text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              {workspace.type === 'assistant' ? '助手' : 
               workspace.type === 'development' ? '开发' : 
               workspace.type === 'tool' ? '工具' : '其他'}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:text-primary">
          <Star className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:text-primary">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:text-primary">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 