<template>
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 list-none gap-10 xl:gap-20 m-0 p-0">
        <li v-for="(item, index) in props.dataList" :key="index">
            <a
                :href="item.link"
                :title="item.title"
                :target="item.linkTarget"
                class="block text-2xl font-bold text-color no-underline  group">

                <div class="flex gap-2 mb-2">
                    <Tag v-for="(tag, index) in item.tagList" :key="index" :value="tag" severity="info" />
                </div>
                <span class="group-hover:underline">
                  {{ item.title }}
                </span>
            </a>
        </li>
    </ul>
</template>

<script setup>
    import Tag from 'primevue/tag';

    // const props = defineProps([
    //     {
    //         taglist: {
    //             type: Array,
    //             required: false
    //         },
    //         title: {
    //             type: String,
    //             required: true
    //         },
    //         link: {
    //             type: String,
    //             required: true
    //         },
    //         linkTarget: {
    //             type: String,
    //             required: false,
    //             options: ['_blank', '_self'],
    //             default: '_self'
    //         }
    //     }
    // ]);

    const props = defineProps({
        dataList: {
            type: Array
        }
    });
</script>
