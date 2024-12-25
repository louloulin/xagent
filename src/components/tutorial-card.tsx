import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TutorialCardProps {
  title: string
  image: string
  className?: string
}

export function TutorialCard({ title, image, className }: TutorialCardProps) {
  return (
    <Card className={cn(
      "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      "border-transparent bg-secondary/50 hover:bg-background",
      className
    )}>
      <div className="aspect-video relative rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-base">{title}</h3>
      </div>
    </Card>
  )
} 