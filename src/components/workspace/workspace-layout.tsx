import { Outlet, useParams } from "react-router-dom"
import { WorkspaceNav } from "./workspace-nav"
import { workspaces } from "./data"
import { WorkspaceHeader } from "./workspace-header"

export function WorkspaceLayout() {
  const { id } = useParams()
  const workspace = workspaces.find(w => w.id === id)

  if (!workspace) {
    return (
      <div className="container py-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">工作空间不存在</h1>
          <p className="text-muted-foreground mt-2">
            您访问的工作空间可能已被删除或移动
          </p>
        </div>
      </div>
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