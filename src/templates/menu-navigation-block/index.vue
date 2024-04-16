<template>
    <Menubar
        :model="items"
        class="px-container w-full border-none hidden lg:flex gap-2 customBreakpointHide"
        :pt="{
            root: {
                class: 'surface-200',
            },
            button: {
                class: 'hidden',
            }
        }"
    >
        <template #start>
            <Button text tabindex="1">
                <div>
                    <div class="text-lg font-medium">Learning Center</div>
                </div>
            </Button>
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <a class="flex align-items-center px-3.5" v-bind="props.action">
                <span>{{ item.label }}</span>
                <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </a>
        </template>
    </Menubar>
    <PanelMenu
        :model="teste"
        class="block lg:hidden"
        :pt="{
            root: {
                class: 'w-full surface-c',
            },
            headerContent: {
                class: 'w-full border-none px-2 flex items-center min-h-11 bg-[var(--surface-200)]',
            },
            menuContent: {
                class: 'border-none',
            }
        }"
    >
        <template #item="{ item }">
            <a class="flex align-items-center cursor-pointer text-color px-3 py-2 w-full" :href="item.url" :target="item.target">
                <span class="ml-2">{{ item.label }}</span>
                <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
            </a>
        </template>
    </PanelMenu>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import PanelMenu from 'primevue/panelmenu';

const customBreakpoint = "1024";

const items = [
    {
        label: 'Home',
    },
    {
        label: 'Features',
    },
    {
        label: 'Projects',
        items: [
            {
                label: 'Components',
            },
            {
                label: 'Blocks',
            },
            {
                label: 'UI Kit',
            },
            {
                label: 'Templates',
                items: [
                    {
                        label: 'Apollo',
                    },
                    {
                        label: 'Ultima',
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
    }
];
const teste = [
    {
        label: 'Highlighted',
        items: [
            {
                label: 'Styled',
                route: '/theming'
            },
            {
                label: 'Unstyled',
                route: '/unstyled'
            }
        ]
    }
];
</script>