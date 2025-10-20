export interface ClientLogo {
  logo: string
  alt?: string
}

export interface SectionClientsWithQuoteProps {
  clients?: ClientLogo[]
  quote?: string
  author?: string
  role?: string
  logo?: string
  logoAlt?: string
  id?: string
}

export { default } from './SectionClientsWithQuote.vue'
