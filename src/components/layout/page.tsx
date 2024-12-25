import { cn } from "@/lib/utils"

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Page({ children, className, ...props }: PageProps) {
  return (
    <div className={cn("container py-6 space-y-6", className)} {...props}>
      {children}
    </div>
  )
}

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function PageHeader({ children, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)} {...props}>
      {children}
    </div>
  )
}

interface PageTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function PageTitle({ children, className, ...props }: PageTitleProps) {
  return (
    <h1 className={cn("text-3xl font-semibold", className)} {...props}>
      {children}
    </h1>
  )
}

interface PageDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function PageDescription({ children, className, ...props }: PageDescriptionProps) {
  return (
    <p className={cn("text-muted-foreground mt-1", className)} {...props}>
      {children}
    </p>
  )
} 