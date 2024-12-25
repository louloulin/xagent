import { Page } from "@/components/layout/page"
import { WorkspaceChat } from "@/components/workspace/workspace-chat"

export function WorkspaceChatPage() {
  return (
    <Page>
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">对话</h2>
        <WorkspaceChat />
      </div>
    </Page>
  )
} 