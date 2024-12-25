import { useParams } from "react-router-dom"
import { workspaces } from "@/components/workspace/data"
import { WorkspaceHeader } from "@/components/workspace/workspace-header"
import { WorkspaceNav } from "@/components/workspace/workspace-nav"
import { Page } from "@/components/layout/page"
import { Outlet } from "react-router-dom"

export function WorkspaceDetailPage() {
  const { id } = useParams()
  const workspace = workspaces.find(w => w.id === id)

  if (!workspace) {
    return (
      <Page>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">工作空间不存在</h1>
          <p className="text-muted-foreground mt-2">
            您访问的工作空间可能已被删除或移动
          </p>
        </div>
      </Page>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <WorkspaceHeader workspace={workspace} />
      <WorkspaceNav workspaceId={workspace.id} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
} 