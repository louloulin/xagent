import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Star, Trash2 } from "lucide-react"

const historyItems = [
  {
    id: "1",
    title: "股票市场分析",
    date: "2024-03-21",
    preview: "分析了最近的市场趋势和主要指标...",
    messageCount: 12,
    isStarred: true,
  },
  {
    id: "2",
    title: "技术面分析",
    date: "2024-03-20",
    preview: "讨论了K线图形态和技术指标...",
    messageCount: 8,
  },
]

export function WorkspaceHistory() {
  return (
    <div className="space-y-2">
      {historyItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className="w-full justify-start h-auto py-3 px-4 hover:bg-secondary/50"
        >
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
              <div className="font-medium">{item.title}</div>
              <div className="flex items-center gap-2">
                {item.isStarred && (
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {item.preview}
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {item.date}
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                {item.messageCount} 条消息
              </div>
            </div>
          </div>
        </Button>
      ))}
    </div>
  )
} 