<template>
  <div class="w-full">
    <DataTable 
      :value="tableData" 
      scrollable 
      tableStyle="min-width: 100%" 
      :pt="{
        root: { class: 'border-transparent' },
        table: { class: 'border-separate border-spacing-0' },
        thead: { class: 'sticky top-0 z-10 bg-transparent' },
        tbody: { class: 'border-transparent' },
        bodyrow: { class: 'border-transparent hover:bg-surface-hover' }
      }"
    >
      <Column 
        field="" 
        header="" 
        :pt="{
          headerontent: { class: 'h-full bg-current' },
          headercell: { class: ' font-normal text-color sticky top-0 z-10  border-0 z-10 bg-transparent' },
          bodycell: { class: 'font-normal font-sm max-w-0 lg:max-w-full p-4 border-t border-b-0 border-surface-border z-10' },
          bodyrow: { class: 'z-10' }
        }"
      >
        <template #header>
          <Overline :label="title" class="pb-8 font-normal" />
        </template>
        <template #body="slotProps">
          <span class="font-normal" >{{ slotProps.data.row }}</span>
        </template>
      </Column>
      
      <Column 
        v-for="(column, index) in columns" 
        :key="column"
        :field="`col_${index}`"
        :header="column"
        :pt="{
          headercontent: { class: 'w-full flex justify-center self-end' },
          headercell: { class: 'bg-transparent font-normal text-color text-center sticky top-0 z-1 border-0' },
          bodycell: { class: 'bg-transparent z-1 text-center border-t border-b-0 border-surface-border text-color-secondary p-2 md:p-4 text-sm' },
          bodyrow: { class: 'z-1' }
        }"
      >
        <template #body="slotProps">
          <div 
            class="flex items-center justify-center"
          >
            <span v-html="formatCellContent(slotProps.data[`col_${index}`])"></span>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Overline from '../overline'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  columns: {
    type: Array,
    required: true,
    default: () => []
  },
  rows: {
    type: Array,
    required: true,
    default: () => []
  },
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})

const tableData = computed(() => {
  return props.rows.map((row, rowIndex) => {
    const rowData = { row: row }
    
    props.columns.forEach((_, colIndex) => {
      const cellValue = props.data[rowIndex] && props.data[rowIndex][colIndex] 
        ? props.data[rowIndex][colIndex] 
        : ''
      rowData[`col_${colIndex}`] = cellValue
    })
    
    return rowData
  })
})

const formatCellContent = (content) => {
  if (!content) return ''
  
  return String(content)
    .replace(/✅/g, '<span class="text-green-600">✅</span>')
    .replace(/❌/g, '<span class="text-red-600">❌</span>')
    .replace(/⭐/g, '<span class="text-yellow-500">⭐</span>')
}
</script>

