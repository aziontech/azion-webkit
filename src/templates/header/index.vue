<template>
  <header class="surface-section py-3">
    <div class="container mx-auto">
      <div class="flex items-center">
        <a href="/" title="Home | Azion Technologies" class="block">
          <AzionLogo class="w-[90px] mr-6" />
        </a>
        <MegaMenu :model="items" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import MegaMenu from 'primevue/megamenu';
import AzionLogo from '../../assets/icons/azion-logo-default.vue';

const items = ref([
  {
    label: 'Company',
    root: true,
    items: [
      [
        {
          items: [
            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
          ]
        }
      ],
      [
        {
          items: [
            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
          ]
        }
      ],
      [
        {
          items: [
            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
          ]
        }
      ],
      [
        {
          items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
        }
      ]
    ]
  },
  {
    label: 'Resources',
    root: true
  },
  {
    label: 'Contact',
    root: true
  }
]);
</script>
