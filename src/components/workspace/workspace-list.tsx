import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import type { Workspace } from "@/types/workspace"
import { Link } from "react-router-dom"

interface WorkspaceListProps {
  items: Workspace[]
  selectedId?: string
  onSelect?: (workspace: Workspace) => void
}

export function WorkspaceList({ items, selectedId, onSelect }: WorkspaceListProps) {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <Tooltip key={item.id}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start group relative hover:bg-secondary/50 h-auto py-2"
              onClick={() => onSelect?.(item)}
              asChild
            >
              <Link to={`/workspaces/${item.id}`}>
                <div className="flex items-center flex-1 gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                    <item.icon className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-sm truncate">
                        {item.name}
                      </div>
                      {item.status === 'online' && (
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500" />
                      )}
                      {item.isVerified && (
                        <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    {item.description && (
                      <div className="text-xs text-muted-foreground truncate mt-0.5">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ChevronRight className="ml-2 h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
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
  )
} 