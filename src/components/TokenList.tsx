import { useState } from 'react'
import { Star, StarOff } from 'lucide-react'
import type { Token } from '../types/token'

interface TokenListProps {
  tokens: Token[]
}

export function TokenList({ tokens }: TokenListProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="token-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>最新价</th>
            <th>涨跌幅(24h)</th>
            <th>24h成交量</th>
            <th>持仓人数</th>
            <th>流通市值</th>
            <th>总市值</th>
            <th>交易额</th>
            <th>剩余时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.id}>
              <td>
                <div className="token-info">
                  <button
                    onClick={() => toggleFavorite(token.id)}
                    className={`favorite-button ${favorites.has(token.id) ? 'active' : ''}`}
                  >
                    {favorites.has(token.id) ? (
                      <Star className="w-4 h-4 fill-yellow-500" />
                    ) : (
                      <StarOff className="w-4 h-4" />
                    )}
                  </button>
                  <img src={token.logo} alt={token.name} className="token-logo" />
                  <div>
                    <div className="token-name">{token.name}</div>
                    <div className="token-symbol">{token.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="number">${token.price.toFixed(6)}</td>
              <td>
                <div className={`price-change ${token.priceChange24h >= 0 ? 'positive' : 'negative'}`}>
                  {token.priceChange24h > 0 ? '+' : ''}{token.priceChange24h.toFixed(2)}%
                </div>
              </td>
              <td className="number">{formatNumber(token.volume24h)}</td>
              <td className="number">{formatNumber(token.holders)}</td>
              <td className="number">${formatNumber(token.marketCap)}</td>
              <td className="number">${formatNumber(token.totalSupply)}</td>
              <td className="number">${formatNumber(token.tradingVolume)}</td>
              <td className="text-right text-gray-300">{token.timeLeft || '-'}</td>
              <td className="text-center">
                <button className="trade-button">
                  交易
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function formatNumber(num: number): string {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B'
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M'
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K'
  }
  return num.toFixed(2)
} 