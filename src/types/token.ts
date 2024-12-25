export interface Token {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  priceChange24h: number;
  volume24h: number;
  holders: number;
  marketCap: number;
  totalSupply: number;
  tradingVolume: number;
  timeLeft?: string;
} 