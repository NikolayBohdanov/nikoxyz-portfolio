export const CATEGORIES = {
  'ai-agents': 'AI & Agents',
  'crypto-defi': 'Crypto & DeFi',
  'personal': 'Personal',
} as const

export type CategorySlug = keyof typeof CATEGORIES

export const CATEGORY_ORDER: CategorySlug[] = ['ai-agents', 'crypto-defi', 'personal']

export function isCategorySlug(value: string | undefined): value is CategorySlug {
  return !!value && value in CATEGORIES
}
