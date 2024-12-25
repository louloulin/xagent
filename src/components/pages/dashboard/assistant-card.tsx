import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AssistantCardProps {
  title: string
  description: string
  avatar: string
  stats?: {
    views?: number
    likes?: number
    comments?: number
  }
  verified?: boolean
  className?: string
}

export function AssistantCard({ 
  title, 
  description, 
  avatar, 
  stats, 
  verified, 
  className 
}: AssistantCardProps) {
  return (
    <Card className={cn(
      "group hover:shadow-lg transition-all duration-300",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 rounded-lg">
            <AvatarImage src={avatar} alt={title} />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium truncate">{title}</h3>
              {verified && (
                <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {description}
            </p>
            {stats && (
              <div className="flex items-center gap-4 mt-4">
                {stats.views && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {stats.views.toLocaleString()}
                  </div>
                )}
                {stats.likes && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {stats.likes.toLocaleString()}
                  </div>
                )}
                {stats.comments && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {stats.comments.toLocaleString()}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 