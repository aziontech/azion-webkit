<template>
   <div class="flex gap-4 overflow-x-auto justify-center">
        <Button
            class="min-w-fit"
            @click="onClick"
            :key="index"
            v-for="(btn, index) in btnList">
            {{ btn.name }}
        </Button>
   </div>
</template>
<script setup>
    import Button from 'primevue/button';

    let btnList = [
        { name: 'Newst' },
        { name: 'Serveless' },
        { name: 'Security' },
        { name: 'Routing' },
        { name: 'Orchestration' },
        { name: 'Observability' },
        { name: 'Market Trends' },
        { name: 'Company News' },
        { name: 'Developers' }
    ];

    function onClick(e) {
        console.log(e);
    }

    // TODO
    // implement props to receive I18N
</script>
