import { useState } from "react"
import { Bot, Code, FileText, Sparkles } from "lucide-react"
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
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "development",
    name: "应用",
    icon: Code,
    description: "创建一个应用程序，可以包含用户界面和交互功能",
    beta: true,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "tool",
    name: "工具",
    icon: FileText,
    description: "创建一个专门的工具，用于特定的任务处理",
    gradient: "from-emerald-500/20 to-teal-500/20",
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
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-gradient-to-b from-gray-50/50 to-white/95 backdrop-blur-xl border-gray-200/50">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            创建工作空间
          </DialogTitle>
          <DialogDescription className="text-base">
            选择一个模板开始您的创作之旅
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 py-4">
          <div className="grid grid-cols-3 gap-4">
            {templates.map((template) => (
              <Button
                key={template.id}
                variant="outline"
                className={`relative h-auto flex flex-col items-center justify-center gap-4 p-6 border-gray-200/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  selectedTemplate === template.id
                    ? "border-primary/50 shadow-lg bg-primary/5"
                    : ""
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className={`absolute inset-0 opacity-50 bg-gradient-to-br ${template.gradient}`} />
                <div className="relative h-12 w-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                  <template.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="relative text-center">
                  <div className="font-medium flex items-center justify-center gap-2">
                    {template.name}
                    {template.beta && (
                      <span className="text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                        Beta
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-1.5 line-clamp-2">
                    {template.description}
                  </div>
                </div>
              </Button>
            ))}
          </div>
          {selectedTemplate && (
            <div className="space-y-4 pt-6 animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="space-y-2">
                <Label className="text-sm font-medium">名称</Label>
                <Input 
                  placeholder="输入工作空间名称" 
                  className="h-11 bg-white/50 border-gray-200/50 hover:border-primary/30 focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">描述</Label>
                <Input 
                  placeholder="输入工作空间描述（可选）" 
                  className="h-11 bg-white/50 border-gray-200/50 hover:border-primary/30 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="p-6 pt-4 bg-gray-50/50">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="hover:bg-gray-200/50"
          >
            取消
          </Button>
          <Button
            disabled={!selectedTemplate}
            onClick={() => onOpenChange(false)}
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
          >
            创建
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 