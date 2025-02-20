<template>
  <Container>
    <HeroHsFormRight
      overline="Overline"
      title="meu titulo"
      description="Com o WAF da Azion, você protege suas aplicações e APIs das ameaças OWASP Top 10 até os mais sofisticados ataques zero-day."
      :form="{
        id: '2cb5ef91-3c22-4d2d-b657-5bd102d2d737',
        title: 'Transforme a segurança da Azion em seu diferencial competitivo'
      }"
      :list="[
        {
          title: 'list title',
          description: 'list descrioption',
          icon: 'pi pi-tag'
        },
        {
          title: 'list title',
          description: 'list descrioption',
          icon: 'pi pi-tag'
        },
        {
          title: 'list title',
          description: 'list descrioption',
          icon: 'pi pi-tag'
        },
        {
          title: 'list title',
          description: 'list descrioption',
          icon: 'pi pi-tag'
        }
      ]"
    />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import HeroHsFormRight from './templates/heroshformright'
</script>
