<template>
    <SplitButton @click="getPageMarkdown" :label="label" :model="items">
        <template #item="{ item }">
            <div class="flex flex-col gap-2">
                {{  item.label }}
            </div>
        </template>
    </SplitButton>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import SplitButton from 'primevue/splitbutton'

  const props = defineProps({
    pageUrl: {
      type: String,
      required: true
    },
    lang:{
        type: String,
        required: true,
        options: ['en', 'pt-br', 'es'],
        default: 'en'
    }
  })

  const label = computed(() => {
    return {
        en: 'Copy page',
        'pt-br': 'Copiar página',
        es: 'Copiar página'
    }[props.lang]
  })

    const pageMarkdown = ref(null)
  
    const getPageMarkdown = async () => {

        if (pageMarkdown.value) {
            copyToClipboard(pageMarkdown.value)
            return
        }

        try {
            console.log('Getting page markdown')
            const response = await fetch(`${props.pageUrl}.md`)
            const data = await response.json()
            console.log('Data', data)
            copyToClipboard(data.body)
            pageMarkdown.value = data.body

            return
        }
        catch (error) {
            console.error(error)
        }
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }

    const items = [
        {
            label: 'Update',
            command: () => {
                toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
            }
        },
        {
            label: 'Delete',
            command: () => {
                toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
            }
        },
        {
            label: 'Vue Website',
            command: () => {
                window.location.href = 'https://vuejs.org/';
            }
        },
        { label: 'Upload', to: '/fileupload' }
    ];
</script>