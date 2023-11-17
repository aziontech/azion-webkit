<template>
   <div class="flex gap-4 overflow-x-auto py-1">
        <Button class="min-w-fit" @click="onClick" :key="index" v-for="(btn, index) in props.dataList" :size="size ? size : null" outlined rounded>
            {{ btn }}
        </Button>
   </div>
</template>
<script setup>
    import Button from 'primevue/button';

    const props = defineProps({
        dataList: {
            type: Array,
            required: true
        }
    });
</script>
