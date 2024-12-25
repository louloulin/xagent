import { Page } from "@/components/layout/page"
import { WorkspaceSettings } from "@/components/workspace/workspace-settings"

export function WorkspaceSettingsPage() {
  return (
    <Page>
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">设置</h2>
        <WorkspaceSettings />
      </div>
    </Page>
  )
} 