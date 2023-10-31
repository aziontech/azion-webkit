<template>
   <div class="flex gap-4 overflow-x-auto3">
        <Button
            class="min-w-fit"
            @click="onClick"
            :key="index"
            v-for="(btn, index) in props.dataList">
            
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
        },
        onClick: {
            type: Function,
            required: false,
            default: (e) => { console.log(e); }
        }
    });
</script>
