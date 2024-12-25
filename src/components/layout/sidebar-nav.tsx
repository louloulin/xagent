import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface SidebarNavProps {
  items: {
    name: string
    icon: React.ElementType
    badge?: number
  }[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const [activeItem, setActiveItem] = useState(items[0].name)

  return (
    <div className="px-3">
      <div className="space-y-1">
        {items.map((item) => {
          const isActive = activeItem === item.name
          return (
            <Button
              key={item.name}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start relative group",
                isActive && "bg-primary/10 text-primary hover:bg-primary/20"
              )}
              onClick={() => setActiveItem(item.name)}
            >
              <item.icon className={cn(
                "mr-2 h-4 w-4 transition-transform duration-200",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
              )} />
              <span className="font-medium">{item.name}</span>
              {item.badge && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary/10 px-1 text-xs font-medium text-primary">
                  {item.badge}
                </span>
              )}
            </Button>
          )
        })}
      </div>
    </div>
  )
} 