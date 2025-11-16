export interface Logo {
  /** SVG or image source (can be HTML string for SVG) */
  src: string
  /** Alt text for the logo */
  alt: string
  /** Optional color class for the logo */
  color?: string
}

export interface ShowcaseCard {
  /** Card title */
  title: string
  /** Action text displayed at the bottom */
  action: string
  /** Link URL */
  href: string
  /** Logo object with src, alt, and optional color */
  logo: Logo
  /** Card size */
  size?: 'default' | 'small'
  /** Card type/theme */
  type?: 'default' | 'white' | 'image'
  /** Background image URL (used when type is 'image') */
  backgroundImage?: string
}

export interface LogoCard {
  /** Card type/theme */
  type?: 'default' | 'orange' | 'white' | 'lavander'
  /** Optional title */
  title?: string
  /** Optional action text */
  action?: string
  /** Optional link URL */
  href?: string
  /** Logo object with src and alt */
  logo: Logo
}

export interface PersonaCard {
  /** Profile title */
  title: string
  /** Background image URL */
  backgroundImage: string
}

export interface SectionGridClientsProps {
  /** Array of showcase cards to display */
  showcaseCards?: ShowcaseCard[]
  /** Array of company logo cards to display */
  logoCards?: LogoCard[]
  /** Array of persona/profile cards to display */
  personaCards?: PersonaCard[]
  /** Bottom spacing class */
  bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  /** Section ID attribute */
  id?: string
}

export { default } from './SectionGridClients.vue'

