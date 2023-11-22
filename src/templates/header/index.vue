<template>
  <header class="surface-section py-3">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <a href="/" title="Home | Azion Technologies" class="block mr-6">
            <AzionLogoDefault class="w-[90px]" />
          </a>

          <!-- Custom Nav -->
          <nav>
            <Button text label="Products" icon-pos="right" icon="pi pi-angle-down" @click="toggle"/>
            <OverlayPanel ref="op" class="top-12 z-50 absolute left-[18.5rem]">
              <div class="flex flex-row p-3 gap-4"> 
                <!-- OPÇÃO Menu -->
                <!-- <Menu :model="items[0].items" class="flex flex-col gap-2 border-none bg-transparent">
                  <template #item="{ item, props}">
                    <div class="p-2 flex justify-between w-full" @click="setActive(item, props.index)">
                      <div class="flex-row gap-2">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                      </div>
                      <div>
                        <i class="pi pi-angle-right"/>
                      </div>
                    </div>
                  </template>
                </Menu> -->
                <!-- OPÇÃO Buttons -->
                <div class="flex flex-col gap-2">
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 0" :class="{ '!text-color-secondary': active === 0 }">
                    <div class="flex gap-2 items-center"><i class="pi pi-box"/>Build</div><i class="pi pi-angle-right"/>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 1" :class="{ '!surface-hover': active === 1 }">
                    <div class="flex gap-2 items-center"><i class="pi pi-shield"/>Secure</div><i class="pi pi-angle-right"/>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 2" :class="{ '!surface-hover': active === 2 }">
                    <div class="flex gap-2 items-center"><i class="pi pi-code"/>Deploy</div><i class="pi pi-angle-right"/>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 3" :class="{ '!surface-hover': active === 3 }">
                    <div class="flex gap-2 items-center"><i class="pi pi-chart-line"/>Observe</div><i class="pi pi-angle-right"/>
                  </Button>
                </div>
                <!-- Content -->
                <div class="flex w-full max-w-[500px]">
                  <TabView
                    v-model:activeIndex="active"
                    :pt="{
                      navContainer: { class: 'hidden' },
                    }">
                  >
                    <TabPanel>
                        <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"/>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                          <img src="https://www.azion.com/static/images/uploads/thumbnailblogterraform440x343px-2.png">
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                          oii
                        </div>
                    </TabPanel>
                </TabView>
                </div>
              </div>
            </OverlayPanel>
            <Button text label="teste"/>
          </nav>

          <!-- MENUBAR Component -->
          <!-- <nav>
            <Menubar :model="items" class="border-0 surface-section">
              <template #item="{ item, props, hasSubmenu, root }">
                  <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <div class="flex p-40">
                      <span :class="item.icon" />
                      <span class="ml-2">
                        {{ item.label }}
                      </span>
                      <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                        {{ item.shortcut }}
                      </span>
                      <i v-if="hasSubmenu" :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                  </div>
                  </a>
              </template>
            </Menubar>
          </nav> -->
        </div>
        <div class="flex gap-2">
          <a href="" title="Signin | Azion Technologies" class="p-button p-button-secondary p-button-text">
            Sign in
          </a>
          <a href="" title="Contact | Azion Technologies" class="p-button p-button-secondary p-button-text">
            Contact
          </a>
          <a href="" title="Free account | Azion Technologies" class="p-button p-button-secondary p-button-outlined">
            Free account
          </a>

          <ToggleButton
            v-model="buttonThemeCheck"
            onLabel=""
            offLabel=""
            onIcon="pi pi-sun"
            offIcon="pi pi-moon"
            class="p-button p-button-secondary p-button-outlined p-[1.095rem]" />

          <Button outlined severity="secondary" @click="">
            <i class="pi pi-search"></i>
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import OverlayPanel from 'primevue/overlaypanel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import AzionLogoDefault from '../../assets/icons/azion-logo-default.vue';

const items = ref([
  {
    items: [
      { label: 'Build', icon: 'pi pi-box' },
      { label: 'Secure', icon: 'pi pi-shield' },
      { label: 'Deploy', icon: 'pi pi-code' },
      { label: 'Observe', icon: 'pi pi-chart-line' },
    ],
    active: 0,
  },
]);

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};

const active = ref(0);

const buttonThemeCheck = ref(false);
</script>
