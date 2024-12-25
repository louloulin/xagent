import { useState } from "react"
import { Bot, Code, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const templates = [
  {
    id: "assistant",
    name: "智能体",
    icon: Bot,
    description: "创建一个智能对话助手，可以回答问题、提供建议等",
  },
  {
    id: "development",
    name: "应用",
    icon: Code,
    description: "创建一个应用程序，可以包含用户界面和交互功能",
    beta: true,
  },
  {
    id: "tool",
    name: "工具",
    icon: FileText,
    description: "创建一个专门的工具，用于特定的任务处理",
  },
]

interface WorkspaceCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WorkspaceCreateDialog({
  open,
  onOpenChange,
}: WorkspaceCreateDialogProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>创建</DialogTitle>
          <DialogDescription>
            选择一个模板开始创建您的工作空间
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-3 gap-4">
            {templates.map((template) => (
              <Button
                key={template.id}
                variant="outline"
                className={`h-auto flex flex-col items-center justify-center gap-4 p-6 hover:border-primary/50 ${
                  selectedTemplate === template.id
                    ? "border-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <template.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-medium flex items-center gap-2">
                    {template.name}
                    {template.beta && (
                      <span className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                        Beta
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {template.description}
                  </div>
                </div>
              </Button>
            ))}
          </div>
          {selectedTemplate && (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>名称</Label>
                <Input placeholder="输入工作空间名称" />
              </div>
              <div className="space-y-2">
                <Label>描述</Label>
                <Input placeholder="输入工作空间描述（可选）" />
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            取消
          </Button>
          <Button
            type="submit"
            disabled={!selectedTemplate}
            onClick={() => onOpenChange(false)}
          >
            创建
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 