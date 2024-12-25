import { Card, CardContent } from "@/components/ui/card"
import { Workspace } from "@/types/workspace"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface WorkspaceCardProps {
  workspace: Workspace
  className?: string
}

export function WorkspaceCard({ workspace, className }: WorkspaceCardProps) {
  return (
    <Card 
      className={cn(
        "group hover:shadow-lg transition-all duration-300 cursor-pointer",
        className
      )}
    >
      <Link to={`/workspaces/${workspace.id}`} className="block">
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
                {workspace.isVerified && (
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {workspace.type === 'assistant' ? '助手' : 
                   workspace.type === 'development' ? '开发' : 
                   workspace.type === 'tool' ? '工具' : '其他'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
} 