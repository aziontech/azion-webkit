<template>
  <Container>
    <AzionLogo
      href="https://www.azion.com/"
      hrefTitle="Azion Technologies"
      target="_self"
      version="min"
    />
    <div class="mt-6">
      <ClientsCard text="migrated off akamai">
        <!-- Mock SVGs -->
        <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="97" height="25" rx="4" fill="#E5E7EB" />
        </svg>
        <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="97" height="25" rx="4" fill="#D1D5DB" />
        </svg>
        <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="97" height="25" rx="4" fill="#9CA3AF" />
        </svg>
      </ClientsCard>
    </div>
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import AzionLogo from './templates/azionlogo'
  import ClientsCard from './components/ClientsCard/ClientsCard.vue'
</script>
