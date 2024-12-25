import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Bot, Code, FileText, Settings } from "lucide-react"

const modelOptions = [
  { icon: Bot, name: "GPT-4", description: "最新的AI模型" },
  { icon: Code, name: "Claude 2", description: "适合编程和分析" },
  { icon: FileText, name: "文心一言", description: "中文创作好帮手" },
]

export function WorkspaceSettings() {
  return (
    <div className="space-y-6">
      <div>
        <Label>名称</Label>
        <Input className="mt-1.5" defaultValue="股票数据分析助手" />
      </div>

      <div>
        <Label>描述</Label>
        <Input className="mt-1.5" defaultValue="基于大数据的股票市场分析工具" />
      </div>

      <Separator />

      <div>
        <Label className="mb-2 inline-block">选择模型</Label>
        <div className="space-y-2">
          {modelOptions.map((option) => (
            <Button
              key={option.name}
              variant="outline"
              className="w-full justify-start h-auto py-2.5"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <option.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{option.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {option.description}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <Label className="mb-2 inline-block">高级设置</Label>
        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">系统提示词</div>
                <div className="text-xs text-muted-foreground">
                  设置AI助手的行为和角色定位
                </div>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
} 