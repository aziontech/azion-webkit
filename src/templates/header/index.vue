<template>
  <header class="surface-section py-3">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <a href="/" title="Home | Azion Technologies" class="block mr-6">
            <AzionLogoDefault class="w-[90px]" />
          </a>
          <!-- Custom Nav -->
          <nav class="flex gap-2">
            <Button text label="Products" icon-pos="right" icon="pi pi-angle-down" @click="toggleProducts"/>
            <OverlayPanel ref="products">
              <div class="flex flex-row p-3 gap-4"> 
                <!-- Menu -->
                <div class="flex flex-col gap-2">
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 0" :class="{ '!text-color-secondary-overlay': active === 0 }">
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
            <Button text label="Products" icon-pos="right"/>
            <Button text label="Products" icon-pos="right"/>
            <Button text label="Products" icon-pos="right" icon="pi pi-angle-down" @click="toggleResources"/>
            <OverlayPanel ref="resources">
              <div class="flex flex-row p-3 gap-4"> 
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
                  </TabView>
                </div>
              </div>
            </OverlayPanel>
          </nav>
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
import OverlayPanel from 'primevue/overlaypanel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ToggleButton from 'primevue/togglebutton';
import AzionLogoDefault from '../../assets/icons/azion-logo-default.vue';

const products = ref();
const resources = ref();

const toggleProducts = (event) => {
  products.value.toggle(event);
};
const toggleResources = (event) => {;
  resources.value.toggle(event);
};

const active = ref(0);

const buttonThemeCheck = ref(false);
</script>
