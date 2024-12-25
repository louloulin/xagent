import { Bot, Code, FileText, Settings } from "lucide-react"
import type { Workspace } from "@/types/workspace"

export const workspaces: Workspace[] = [
  {
    id: "1",
    name: "股票数据分析助手",
    description: "基于大数据的股票市场分析工具，提供实时市场洞察和投资建议。支持技术分析、基本面分析和市场情绪分析。",
    icon: Bot,
    status: "online",
    isVerified: true,
    type: "assistant",
    lastUpdated: "最近更新 12:06 22:49"
  },
  {
    id: "2",
    name: "论文助手",
    description: "智能论文写作助手，支持多种学术格式，提供写作建议、文献引用和格式化功能。",
    icon: FileText,
    status: "online",
    isVerified: true,
    type: "assistant",
    lastUpdated: "最近更新 12:06 22:48"
  },
  {
    id: "3",
    name: "AI PPT助手",
    description: "智能PPT生成工具，自动生成精美的演示文稿，支持多种主题和模板。",
    icon: Bot,
    status: "online",
    type: "tool",
    lastUpdated: "最近更新 12:06 22:47"
  },
  {
    id: "4",
    name: "代码生成器",
    description: "基于AI的代码生成工具，支持多种编程语言，提供代码补全和优化建议。",
    icon: Code,
    status: "online",
    type: "development",
    lastUpdated: "最近更新 12:06 22:46"
  },
  {
    id: "5",
    name: "系统配置助手",
    description: "帮助用户快速配置和优化系统设置，提供个性化建议。",
    icon: Settings,
    type: "tool",
    lastUpdated: "最近更新 12:06 22:45"
  }
]

export const categories = [
  {
    id: "all",
    name: "全部",
  },
  {
    id: "assistant",
    name: "助手",
  },
  {
    id: "development",
    name: "开发",
  },
  {
    id: "tool",
    name: "工具",
  }
] 