export interface Logo {
  /** SVG or image source (can be HTML string for SVG) */
  src: string
  /** Alt text for the logo */
  alt: string
  /** Optional color class for the logo */
  color?: string
}

export interface ShowcaseCard {
  component: 'showcase'
  /** Card title */
  title: string
  /** Action text displayed at the bottom */
  action: string
  /** Link URL */
  href: string
  /** Logo as HTML string (SVG) */
  logo: string
  /** Card size - 2x2 spans 2 columns and 2 rows, 2x1 spans 2 columns and 1 row */
  size?: '2x2' | '2x1'
  /** Card type/theme */
  type?: 'lavander' | 'white' | 'image'
  /** Background image URL (used when type is 'image') */
  backgroundImage?: string
  /** Target for the link */
  target?: '_blank' | '_self'
}

export interface LogoCard {
  component: 'logo'
  /** Card type/theme - determines background color */
  type?: 'neutral' | 'orange' | 'white' | 'lavander'
  /** Logo as HTML string (SVG) - required */
  logo: string
}

export interface PersonaCard {
  component: 'persona'
  /** Profile title */
  title: string
  /** Background image URL */
  backgroundImage: string
}

export type Card = LogoCard | PersonaCard

export interface SectionGridClientsProps {
  /** Array of showcase cards to display - positioned at fixed layout positions */
  showcaseCards?: ShowcaseCard[]
  /** Array of cards (LogoCard or PersonaCard) - filled sequentially into remaining positions */
  cards: Card[]
  /** Bottom spacing class */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /** Section ID attribute */
  id?: string
}

export { default } from './SectionGridClients.vue'
