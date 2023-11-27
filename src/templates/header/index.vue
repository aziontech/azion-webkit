<template>
  <header class="surface-section py-3">
    <div class="px-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <a
            href="/"
            title="Home | Azion Technologies"
            class="block mr-6">

            <AzionLogoDefault class="w-[90px]" />
          </a>
          <nav>
            <ul class="flex gap-4">
              <li v-for="(menuitem) in menudata.items">
                <a
                  v-if="!menuitem.items || !menuitem.items.length"
                  :href="menuitem.href || ''"
                  class="p-button p-button-text p-button-secondary">

                  {{ menuitem.label }}
                </a>
                <div v-if="menuitem.items && menuitem.items.length">
                  <Button
                    text
                    severity="secondary"
                    :label="menuitem.label"
                    icon-pos="right"
                    icon="pi pi-angle-down"
                    @click="(event) => { toggle(event, menuitem.ref); menudata.active = 0; }" />

                  <OverlayPanel :ref="menuitem.ref" class="top-12 z-50 absolute left-[18.5rem]">
                    <div class="flex flex-row p-3 gap-4">
                      <div class="flex flex-col gap-2">
                        <Button
                          text
                          severity="secondary"
                          v-for="(subitem, index) in menuitem.items"
                          :class="{ '!text-color-secondary-overlay': menudata.active === index }"
                          class="flex gap-2 justify-between w-full items-center"
                          @click="menudata.active = index">

                          <span class="flex gap-2 items-center">
                            <i :class="subitem.icon"></i>
                            {{ subitem.label }}
                          </span>
                          <i class="pi pi-angle-right"></i>
                        </Button>
                      </div>
                      <div class="flex w-full max-w-[500px]">
                        <TabView v-model:activeIndex="menudata.active" :pt="{ navContainer: { class: 'hidden' } }">
                          <TabPanel v-for="subitem in menuitem.items">
                            <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                              <a
                                v-for="link in subitem.items"
                                class="flex gap-2 justify-between w-full items-center p-button p-button-secondary p-button-text">

                                <div class="flex flex-row gap-4 items-center">
                                  <i :class="link.icon"></i>
                                  <div class="flex flex-col items-start">
                                    <div class="flex gap-2 items-center">{{ link.label }}</div>
                                    <div class="text-xs text-color-secondary">{{ link.description }}</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </TabPanel>
                        </TabView>
                      </div>
                    </div>
                  </OverlayPanel>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex gap-2">
          <a
            target="_blank"
            href="https://sso.azion.com/login"
            title="Signin | Azion Technologies" class="p-button p-button-secondary p-button-text">

            Sign in
          </a>
          <a
            href=""
            title="Contact | Azion Technologies" class="p-button p-button-secondary p-button-text">

            Contact
          </a>
          <a
            target="_blank"
            href="https://manager.azion.com/signup"
            title="Free account | Azion Technologies" class="p-button p-button-secondary p-button-outlined">

            Free account
          </a>

          <ButtonThemeToggle />
          <Button outlined severity="secondary">
            <i class="pi pi-search"></i>
          </Button>
          <!-- <Button outlined severity="secondary">
            <i class="pi pi-bars"></i>
          </Button> -->
          <MobileSidebar />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import MobileSidebar from './mobile.vue';

import AzionLogoDefault from '../../assets/icons/azion-logo-default.vue';
import ButtonThemeToggle from '../button-toggle/theme/index.vue';

const productsPanel = ref(); // should pass like string name inside ref attr inside menudata
const resourcesPanel = ref(); // should pass like string name inside ref attr inside menudata
const menudata = ref({
  active: 0,
  items: [
    {
      label: 'Products',
      ref: 'productsPanel',
      items: [
        {
          label: 'Build',
          icon: 'pi pi-box',
          items: [
            {
              icon: '',
              label: 'Edge Application',
              description: 'Here will be a small description',
              href: '#edgeapplication'
            }, {
              icon: '',
              label: 'Application Acceleration',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge Caching',
              description: '',
              href: ''
            }, {
              icon: '',
              label: 'Edge Functions',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Image Processor',
              description: '',
              href: ''
            }, {
              icon: '',
              label: 'Load Balancer',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge QV',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge SQL',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Object Storage',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Secure',
          icon: 'pi pi-shield',
          items: [
            {
              icon: '',
              label: 'Edge Firewall',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'DDoS Protection',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Network Layer Protection',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Web Application Firewall',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Web Application Firewall',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Deploy',
          icon: 'pi pi-code',
          items: [
            {
              icon: '',
              label: 'Edge Orchestrator',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Azion Edge Network',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Azion Live Map',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Roadmap',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Observe',
          icon: 'pi pi-chart-line',
          items: [
            {
              icon: '',
              label: 'Data Streaming',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge Pulse',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Real-Time Metrics',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Real-Time Events',
              description: '',
              href: ''
            }
          ]
        }
      ]
    },
    {
      label: 'Pricing',
      href: '#pricing',
      items: []
    },
    {
      label: 'About us',
      href: '#aboutus',
      items: []
    },
    {
      label: 'Resources',
      ref: 'resourcesPanel',
      items: [
        {
          label: 'Documentation',
          items: [
            {
              label: 'Getting started',
              href: ''
            },
            {
              label: 'Dev Tools',
              href: ''
            },
            {
              label: 'Guides',
              href: ''
            },
            {
              label: 'API',
              href: ''
            },
            {
              label: 'Agreements',
              href: ''
            },
            {
              label: 'Changelog',
              href: ''
            }
          ]
        }
      ]
    },
    {
      label: 'Marketplace',
      href: '#marketplace',
      items: []
    }
  ]
});

const toggle = (event, refattr) => {
  try {
    if (refattr === 'productsPanel') productsPanel.value[0].toggle(event);
    if (refattr === 'resourcesPanel') resourcesPanel.value[0].toggle(event);
  } catch (error) {
    console.error('Error in toggle method:', error);
  }
};
</script>
e
