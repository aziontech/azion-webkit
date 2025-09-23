<template>
  <template v-for="(content) in table" :key="content.title">
    <div :class="[
      'p-5 py-12 border-x border-y border-neutral-700',
      mobileTable ? 'col-span-2' : 'col-span-5'
    ]">
      <div class="text-xs text-neutral-300 uppercase tracking-wide font-proto-mono">{{ content.overline }}</div>
      <h3 class="text-xl font-medium font-sora mt-1">{{ content.title }}</h3>
      <p class="text-sm text-neutral-300 font-sora mt-1">{{ content.description }}</p>
    </div>

    <template v-for="(feature, featureIndex) in content.features" :key="feature.name">
      <div :class="[
        'p-5 border-l border-r border-neutral-700',
        featureIndex === content.features.length - 1 ? 'border-b' : ''
      ]">
        <span :class="[
          'font-medium font-sora',
          feature.nested ? 'text-neutral-300 text-sm font-normal pl-4' : 'text-white'
        ]">{{ feature.name }}</span>
      </div>

      <div 
        v-for="(value, planIndex) in feature.values" 
        :key="planIndex"
        :class="[
          'p-5 text-left flex items-center border-r border-neutral-700',
          featureIndex === content.features.length - 1 ? 'border-b' : '',
          planIndex === feature.values.length - 1 ? 'border-r' : ''
        ]"
      >
        <span v-if="value === true" class="pi pi-check text-orange-500 text-sm"></span>
        <span v-else-if="value === false" class="text-neutral-500 font-sora">—</span>
        <span v-else class="text-white font-sora">{{ value }}</span>
      </div>
    </template>
  </template>
</template>

<script setup>
defineProps({
  mobileTable: {
    type: Boolean,
    default: false
  },
  table: {
    type: Array,
    default: () => [
      {
        overline: 'AZION WEB PLATFORM',
        title: 'Platform',
        description: 'Ultra-fast, secure by default global application delivery',
        features: [
          {
            name: 'Workspaces',
            nested: true,
            values: ['1 Workspace', '1 Workspace', '1 Workspace', 'Custom']
          },
          {
            name: 'Workloads',
            nested: true, 
            values: ['10 Workloads', '100 Workloads', '200 Workloads', 'Custom']
          },
          {
            name: 'Users',
            values: ['50 seats included', '50 seats included', '50 seats included', 'Custom']
          },
          {
            name: 'Custom Domains',
            values: ['50 per workload', '50 per workload', '50 per workload', '50 per workload']
          },
          {
            name: 'Dev Tools (CLI, API, GraphQL API, Terraform)',
            values: [true, true, true, true]
          },
          {
            name: 'SAML Single Sign-on (SSO)',
            values: [false, false, false, true]
          },
          {
            name: 'Directory Sync (SCIM)',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Custom Network Map',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Mutual TLS',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          }
        ]
      },
      {
        overline: 'AZION WEB PLATFORM',
        title: 'Platform',
        description: 'Ultra-fast, secure by default global application delivery',
        features: [
          {
            name: 'Workspaces',
            nested: true,
            values: ['1 Workspace', '1 Workspace', '1 Workspace', 'Custom']
          },
          {
            name: 'Workloads',
            nested: true, 
            values: ['10 Workloads', '100 Workloads', '200 Workloads', 'Custom']
          },
          {
            name: 'Users',
            values: ['50 seats included', '50 seats included', '50 seats included', 'Custom']
          },
          {
            name: 'Custom Domains',
            values: ['50 per workload', '50 per workload', '50 per workload', '50 per workload']
          },
          {
            name: 'Dev Tools (CLI, API, GraphQL API, Terraform)',
            values: [true, true, true, true]
          },
          {
            name: 'SAML Single Sign-on (SSO)',
            values: [false, false, false, true]
          },
          {
            name: 'Directory Sync (SCIM)',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Custom Network Map',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Mutual TLS',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          }
        ]
      },
      
    ]
  }
})
</script>
