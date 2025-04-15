<template>
  <Container class="surface-ground">
    <HeroHsFormRight v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import HeroHsFormRight from './templates/herohsformright'

  const MOCK = {
    overline: 'WEB APPLICATION FIREWALL (WAF)',
    title: 'Web Application Firewall: a proteção avançada que especialistas de segurança confiam',
    description:
      'Com o WAF da Azion, você protege suas aplicações e APIs das ameaças OWASP Top 10 até os mais sofisticados ataques zero-day.',
    list: [
      {
        icon: 'pi pi-shield',
        title: 'Proteja',
        description:
          'Proteja suas aplicações e APIs contra SQL Injection, XSS, RFI e outras ameaças'
      },
      {
        icon: 'pi pi-check',
        title: 'Bloqueie',
        description: 'Bloqueie ameaças no edge, antes de chegarem a sua aplicação ou infraestrutura'
      },
      {
        icon: 'pi pi-dollar',
        title: 'Economize',
        description: 'Economize tempo com regras gerenciadas e passe mais tempo criando aplicações'
      }
    ],
    form: {
      title: 'Transforme a segurança da Azion em seu diferencial competitivo',
      id: '29df57c8-07c8-4c5b-9b2f-7a7154744287',
      action: 'test_action'
    }
  }
</script>
