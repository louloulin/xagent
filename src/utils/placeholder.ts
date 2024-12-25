// 生成占位图片URL的工具函数
export function getPlaceholderImage(width: number, height: number, text: string) {
  // 使用更柔和的蓝色
  const bgColor = "1E40AF"
  const textColor = "FFFFFF"
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}/png?text=${encodeURIComponent(text)}`
} 