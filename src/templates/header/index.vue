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
            <Button text label="Products" icon-pos="right" icon="pi pi-angle-down" @click="toggle" />
            <OverlayPanel ref="op" class="top-12 z-50 absolute left-[18.5rem]">
              <div class="flex flex-row p-3 gap-4">
                <div class="flex flex-col gap-2">
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 0" :class="{ '!text-color-secondary-overlay': active === 0 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-code"></i>
                      Build
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 1" :class="{ '!surface-hover': active === 1 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-code"></i>
                      Secure
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 2" :class="{ '!surface-hover': active === 2 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-code"></i>
                      Deploy
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 3" :class="{ '!surface-hover': active === 3 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-code"></i>
                      Observe
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                </div>
                <!-- Content -->
                <div class="flex w-full max-w-[500px]">
                  <TabView v-model:activeIndex="active" :pt="{ navContainer: { class: 'hidden' } }">
                    <TabPanel>
                        <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
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
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-shield"></i>
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
            <a href="" title="Signin | Azion Technologies" class="p-button p-button-secondary p-button-text">
              Pricing
            </a>
            <a href="" title="About us | Azion Technologies" class="p-button p-button-secondary p-button-text">
              About us
            </a>
            <Button text label="Resources" icon-pos="right" icon="pi pi-angle-down" @click="toggle"/>
            <OverlayPanel ref="op" class="top-12 z-50 absolute left-[18.5rem]">
              <div class="flex flex-row p-3 gap-4">
                <div class="flex flex-col gap-2">
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 0" :class="{ '!text-color-secondary': active === 0 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-box"></i>
                      Build
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 1" :class="{ '!surface-hover': active === 1 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-shield"></i>
                      Secure
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 2" :class="{ '!surface-hover': active === 2 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-code"></i>
                      Deploy
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                  <Button text class="flex gap-2 justify-between w-full items-center" @click="active = 3" :class="{ '!surface-hover': active === 3 }">
                    <span class="flex gap-2 items-center">
                      <i class="pi pi-chart-line"></i>
                      Observe
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                </div>
                <!-- Content -->
                <div class="flex w-full max-w-[500px]">
                  <TabView v-model:activeIndex="active" :pt="{ navContainer: { class: 'hidden' }}">
                    <TabPanel>
                        <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Application</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
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
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
                              <div class="flex flex-col items-start">
                                <div class="flex gap-2 items-center">Edge Firewall</div>
                                <div class="text-xs text-color-secondary">Description</div>
                              </div>
                            </div>
                          </Button>
                          <Button text class="flex gap-2 justify-between w-full items-center">
                            <div class="flex flex-row gap-4 items-center">
                              <i class="pi pi-box"></i>
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
            <a href="" title="Signin | Azion Technologies" class="p-button p-button-secondary p-button-text">
              Marketplace
            </a>
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

const active = ref(0);
const items = ref([
  {
    items: [
      { label: 'Build', icon: 'pi pi-box' },
      { label: 'Secure', icon: 'pi pi-shield' },
      { label: 'Deploy', icon: 'pi pi-code' },
      { label: 'Observe', icon: 'pi pi-chart-line' },
    ],
    active: 0
  },
]);

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const buttonThemeCheck = ref(false);
</script>
