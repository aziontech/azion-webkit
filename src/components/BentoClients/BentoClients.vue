  <template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 gap-3">
      <template v-for="(item, index) in layoutTypes" :key="index">
        <template v-if="item.type === 'empty'">
          <div class="hidden xl:block"></div>
        </template>
        <template v-else>
          <component 
            :is="componentsMapping[item.type]" 
            v-bind="resolvedCards[index] || {}" 
            :class="item.class" class="min-h-52"
          />
        </template>
      </template>
    </div>
  </template>

<script setup>
 import { computed } from 'vue'
 import CardShowCase from './CardShowCase.vue'
 import CardCompanyLogo from './CardCompanyLogo.vue'
 import ClientProfile from './ClientProfile.vue'

 const propsDef = defineProps({
   showcaseCards: {
     type: Array,
     default: () => []
   },
   logoCards: {
     type: Array,
     default: () => []
   },
   personaCards: {
     type: Array,
     default: () => []
   }
 })

const layoutTypes = [
  { type: 'showcase', class: '' },
  { type: 'profile', class: 'hidden lg:flex' },
  { type: 'logo', class: 'hidden xl:flex' },
  { type: 'logo', class: 'hidden lg:flex' },
  { type: 'showcase', class: 'hidden xl:flex' },
  { type: 'profile', class: '' },
  { type: 'showcase', class: '' },
  { type: 'empty', class: 'hidden xl:flex' },
  { type: 'logo', class: '' },
  { type: 'logo', class: 'hidden md:flex' },
  { type: 'logo', class: 'hidden md:flex' }
]

const componentsMapping = {
  showcase: CardShowCase,
  logo: CardCompanyLogo,
  profile: ClientProfile
}

 const resolvedCards = computed(() => {
   let showcaseIndex = 0
   let personaIndex = 0
   let logoIndex = 0
   return layoutTypes.map((item) => {
     if (item.type === 'showcase') {
       const card = propsDef.showcaseCards[showcaseIndex] || {}
       showcaseIndex += 1
       return card
     }
     if (item.type === 'profile') {
       const card = propsDef.personaCards[personaIndex] || {}
       personaIndex += 1
       return card
     }
     if (item.type === 'logo') {
       const card = propsDef.logoCards[logoIndex] || {}
       logoIndex += 1
       return card
     }
     return {}
   })
 })
</script>
