import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { TutorialCard } from "./tutorial-card"
import { AssistantCard } from "./assistant-card"
import { getPlaceholderImage } from "@/utils/placeholder"

export function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 顶部横幅 */}
      <div className="relative h-[280px] bg-gradient-to-br from-primary to-primary/60 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/banner-pattern.svg')] opacity-10" />
        <div 
          className="absolute -right-24 -bottom-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)" }}
        />
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 max-w-2xl">
            在扣子，第一时间体验豆包・视觉理解模型
          </h1>
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-fit hover:bg-white hover:text-primary"
          >
            立即体验
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container -mt-16 pb-8 relative z-10 space-y-8">
        {/* 新手教程 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">新手教程</h2>
            <Button variant="ghost" className="text-primary">
              查看更多
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialCards.map((card) => (
              <TutorialCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        {/* 智能推荐 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">智能推荐</h2>
            <Button variant="ghost" className="text-primary">
              查看更多
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendCards.map((card) => (
              <AssistantCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

const tutorialCards = [
  { 
    title: '什么是扣子', 
    image: getPlaceholderImage(640, 360, '什么是扣子')
  },
  { 
    title: '快速开始', 
    image: getPlaceholderImage(640, 360, '快速开始')
  },
  { 
    title: '产品动态', 
    image: getPlaceholderImage(640, 360, '产品动态')
  },
]

const recommendCards = [
  {
    title: '圣诞帽头像生成器',
    description: '添加圣诞帽，添加圣诞氛围🎄',
    avatar: getPlaceholderImage(80, 80, 'AI1'),
    verified: true,
    stats: {
      views: 1204,
      likes: 89,
      comments: 12,
    },
  },
  {
    title: '单人剧本杰-鸡尾酒店',
    description: '新的探索游戏，每个选择都很重要，探寻...',
    avatar: getPlaceholderImage(80, 80, 'AI2'),
    stats: {
      views: 3056,
      likes: 245,
      comments: 41,
    },
  },
  {
    title: '圣诞家卡',
    description: '一个临时作品圣诞家卡片制作助手，可提供精美的圣诞贺卡...',
    avatar: getPlaceholderImage(80, 80, 'AI3'),
    verified: true,
    stats: {
      views: 892,
      likes: 67,
      comments: 8,
    },
  },
] 