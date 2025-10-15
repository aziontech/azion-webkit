import { DefineComponent } from 'vue'

export interface ClientCardData {
  text: string
  logos: Array<any>
  link?: string
}

export interface SectionMigratedClientsProps {
  firstCard: ClientCardData
  secondCard: ClientCardData
}

declare const SectionMigratedClients: DefineComponent<SectionMigratedClientsProps>

export default SectionMigratedClients
