export const CATEGORIES = {
  'crypto-defi': 'Crypto & DeFi',
  'ai-agents': 'AI & Agents',
  'markets': 'Markets',
  'personal': 'Personal',
} as const

export type CategorySlug = keyof typeof CATEGORIES

export const CATEGORY_ORDER: CategorySlug[] = ['crypto-defi', 'ai-agents', 'markets', 'personal']

export function isCategorySlug(value: string | undefined): value is CategorySlug {
  return !!value && value in CATEGORIES
}
