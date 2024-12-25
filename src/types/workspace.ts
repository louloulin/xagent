import { LucideIcon } from "lucide-react"

export type WorkspaceType = "assistant" | "development" | "tool" | "other"
export type WorkspaceStatus = "online" | "offline"

export interface Workspace {
  id: string
  name: string
  description?: string
  icon: LucideIcon
  status?: WorkspaceStatus
  isVerified?: boolean
  type: WorkspaceType
  lastUpdated: string
} 