<template>
    <div class="container mx-auto block lg:flex items-center">
        <picture
            v-if="props.imgSrc"
            class="block p-0 m-0 mb-82 lg:mb-0 lg:mr-10 min-w-fit">
            
            <img
                class="h-auto w-full"
                width="622"
                height="468"
                :alt="props.imgAlt"
                :src="props.imgSrc" />
        </picture>
        <div class="content-center">
            <div class="flex gap-2">
                <Tag v-for="(tag, index) in props.tagList" :key="index" :value="tag" />
            </div>
            <h1 class="text-5xl my-8">
                {{ props.title }}
            </h1>
            <p class="my-8">
                {{ props.description }}
            </p>
            
            <a
                :href="props.link"
                :title="props.linkText"
                :target="props.linkTarget">
                
                <Button>
                    {{ props.linkText }}
                </Button>
            </a>
        </div>
    </div>
</template>

<script setup>
    import Button from 'primevue/button';
    import Tag from 'primevue/tag';

    const props = defineProps({
        imgSrc: {
            type: String,
            required: false

        },
        imgAlt: {
            type: String,
            required: false
        },
        tagList: {
            type: Array,
            required: false
        },
        title: {
            type: String,
            required: true

        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        linkText: {
            type: String,
            required: true
        },
        linkTarget: {   
            type: String,
            required: false,
            options: ['_blank', '_self'],
            default: '_self'
        }
    });
</script>
