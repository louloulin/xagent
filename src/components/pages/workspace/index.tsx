import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { WorkspaceCard } from "@/components/workspace/workspace-card"
import { workspaces } from "@/components/workspace/data"
import { Page, PageHeader, PageTitle, PageDescription } from "@/components/layout/page"
import { WorkspaceCreateDialog } from "@/components/workspace/workspace-create-dialog"
import { useState } from "react"

export function WorkspacePage() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false)

  return (
    <Page>
      <PageHeader>
        <div>
          <PageTitle>工作空间</PageTitle>
          <PageDescription>管理和使用您的工作空间</PageDescription>
        </div>
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={() => setCreateDialogOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          新建
        </Button>
      </PageHeader>

      {/* 搜索和筛选 */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="搜索工作空间..." 
            className="pl-9"
          />
        </div>
        <Button variant="outline">全部</Button>
        <Button variant="outline">助手</Button>
        <Button variant="outline">开发</Button>
        <Button variant="outline">工具</Button>
      </div>

      {/* 工作空间列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>

      <WorkspaceCreateDialog 
        open={createDialogOpen} 
        onOpenChange={setCreateDialogOpen}
      />
    </Page>
  )
} 