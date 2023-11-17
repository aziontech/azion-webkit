<template>
   <div class="flex gap-4 overflow-x-auto py-1">
        <Button class="min-w-fit" :key="index" v-for="(btn, index) in props.dataList" outlined rounded>
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
