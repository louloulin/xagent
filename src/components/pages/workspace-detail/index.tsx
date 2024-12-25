import { useParams, Link, Outlet } from "react-router-dom"
import { Page, PageHeader, PageTitle } from "@/components/layout/page"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Users, BookOpen, Settings } from "lucide-react"

export function WorkspaceDetailPage() {
  const { id } = useParams()

  return (
    <Page>
      <PageHeader>
        <div>
          <PageTitle>工作空间详情</PageTitle>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link to={`/workspaces/${id}/members`}>
              <Users className="mr-2 h-4 w-4" />
              成员管理
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={`/workspaces/${id}/knowledge`}>
              <BookOpen className="mr-2 h-4 w-4" />
              知识库
            </Link>
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            设置
          </Button>
        </div>
      </PageHeader>
      <Separator className="my-4" />
      <Outlet />
    </Page>
  )
} 