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
          headercell: {
            class: ' font-normal text-color sticky top-0 z-10  border-0 z-10 bg-transparent'
          },
          bodycell: {
            class:
              'font-normal font-sm lg:max-w-full p-4 border-t border-b-0 border-surface-border z-10'
          },
          bodyrow: { class: 'z-10' }
        }"
      >
        <template #header>
          <Overline
            :label="props.title"
            class="pb-8 font-normal whitespace-nowrap"
          />
        </template>
        <template #body="slotProps">
          <span class="font-normal whitespace-normal">{{ slotProps.data.row }}</span>
        </template>
      </Column>

      <Column
        v-for="(column, index) in parsedTableData.columns"
        :key="column"
        :field="`col_${index}`"
        :header="column"
        :pt="{
          headercontent: { class: 'w-full flex justify-center self-end' },
          headercell: {
            class: 'bg-transparent font-normal text-color text-center sticky top-0 z-1 border-0'
          },
          bodycell: {
            class:
              'bg-transparent z-1 text-center border-t border-b-0 border-surface-border text-color-secondary p-2 md:p-4 text-sm'
          },
          bodyrow: { class: 'z-1' }
        }"
      >
        <template #body="slotProps">
          <div class="flex items-center justify-center">
            <span
              class="font-normal whitespace-normal"
              v-html="formatCellContent(slotProps.data[`col_${index}`])"
            ></span>
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
    htmlTable: {
      type: String,
      required: true
    }
  })

  const parsedTableData = computed(() => {
    return parseHTMLTable(props.htmlTable)
  })

  const tableData = computed(() => {
    const { rows, columns, data } = parsedTableData.value

    return rows.map((row, rowIndex) => {
      const rowData = { row: row }

      columns.forEach((_, colIndex) => {
        const cellValue = data[rowIndex] && data[rowIndex][colIndex] ? data[rowIndex][colIndex] : ''
        rowData[`col_${colIndex}`] = cellValue
      })

      return rowData
    })
  })

  const parseHTMLTable = (htmlString) => {
    if (!htmlString || typeof htmlString !== 'string') {
      console.warn('Invalid HTML table string provided')
      return { columns: [], rows: [], data: [] }
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')
    const table = doc.querySelector('table')

    if (!table) {
      console.warn('No table found in provided HTML')
      return { columns: [], rows: [], data: [] }
    }

    const headerRow = table.querySelector('thead tr') || table.querySelector('tr')

    if (!headerRow) {
      console.warn('No header row found in table')
      return { columns: [], rows: [], data: [] }
    }

    const headers = Array.from(headerRow.querySelectorAll('th, td')).map((cell) =>
      cell.textContent.trim()
    )

    const columns = headers.slice(1)

    let bodyRows
    const tbody = table.querySelector('tbody')
    if (tbody) {
      bodyRows = Array.from(tbody.querySelectorAll('tr'))
    } else {
      const allRows = Array.from(table.querySelectorAll('tr'))
      bodyRows = allRows.slice(1)
    }

    const rows = []
    const data = []

    bodyRows.forEach((row) => {
      const cells = Array.from(row.querySelectorAll('td, th'))

      if (cells.length > 0) {
        rows.push(cells[0].textContent.trim()) // First cell is row label
        const rowData = cells.slice(1).map((cell) => cell.innerHTML.trim()) // Rest are data
        data.push(rowData)
      }
    })

    return { columns, rows, data }
  }

  const formatCellContent = (content) => {
    if (!content) return ''

    return String(content)
      .replace(/✅/g, '<span class="text-green-600">✅</span>')
      .replace(/❌/g, '<span class="text-red-600">❌</span>')
      .replace(/⭐/g, '<span class="text-yellow-500">⭐</span>')
  }
</script>
