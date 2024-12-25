import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Bot, Code, FileText, MessageSquare, Settings, Users } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  {
    title: "对话",
    icon: MessageSquare,
    href: "",
  },
  {
    title: "成员",
    icon: Users,
    href: "/members",
  },
  {
    title: "知识库",
    icon: FileText,
    href: "/knowledge",
  },
  {
    title: "插件",
    icon: Code,
    href: "/plugins",
  },
  {
    title: "模型",
    icon: Bot,
    href: "/models",
  },
  {
    title: "设置",
    icon: Settings,
    href: "/settings",
  },
]

export function WorkspaceNav({ workspaceId }: { workspaceId: string }) {
  const location = useLocation()
  const currentPath = location.pathname
  const basePath = `/workspaces/${workspaceId}`

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <ScrollArea orientation="horizontal" className="w-full">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  "h-auto px-4 py-2",
                  currentPath === `${basePath}${item.href}` && "bg-secondary"
                )}
              >
                <Link to={`${basePath}${item.href}`}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
} 