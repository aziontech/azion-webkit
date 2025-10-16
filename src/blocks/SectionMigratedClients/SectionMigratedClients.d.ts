import { DefineComponent } from 'vue'

export interface Logo {
  imageSrc: string
  alt?: string
  title?: string
}

export interface ClientCardData {
  text: string
  logos: Logo[]
  link?: string
}

export interface SectionMigratedClientsProps {
  firstCard: ClientCardData
  secondCard: ClientCardData
}

declare const SectionMigratedClients: DefineComponent<SectionMigratedClientsProps>

export default SectionMigratedClients
