import { createBrowserRouter, Outlet } from "react-router-dom"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { DashboardPage } from "@/components/pages/dashboard"
import { WorkspacePage } from "@/components/pages/workspace"
import { WorkspaceDetailPage } from "@/components/pages/workspace/detail"
import { WorkspaceChatPage } from "@/components/pages/workspace/chat"
import { WorkspaceMembersPage } from "@/components/pages/workspace/members"
import { WorkspaceKnowledgePage } from "@/components/pages/workspace/knowledge"
import { WorkspacePluginsPage } from "@/components/pages/workspace/plugins"
import { WorkspaceModelsPage } from "@/components/pages/workspace/models"
import { WorkspaceSettingsPage } from "@/components/pages/workspace/settings"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout><Outlet /></DashboardLayout>,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "workspaces",
        children: [
          {
            index: true,
            element: <WorkspacePage />,
          },
          {
            path: ":id",
            element: <WorkspaceDetailPage />,
            children: [
              {
                index: true,
                element: <WorkspaceChatPage />,
              },
              {
                path: "members",
                element: <WorkspaceMembersPage />,
              },
              {
                path: "knowledge",
                element: <WorkspaceKnowledgePage />,
              },
              {
                path: "plugins",
                element: <WorkspacePluginsPage />,
              },
              {
                path: "models",
                element: <WorkspaceModelsPage />,
              },
              {
                path: "settings",
                element: <WorkspaceSettingsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]) 