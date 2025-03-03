<template>
  <Container>
    <SectionHorizontalNavigation run v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionHorizontalNavigation from './templates/sectionhorizontalnavigation'

  const MOCK = {
  overline: 'Compliance Expertise',
  title:
    'We are committed to ensuring that our global customers and partners can meet diverse compliance requirements.',
  description:
    'Security and Compliance are shared responsibilities between Azion and the customer. This shared model can help relieve the customer’s operational burden as Azion operates, manages and controls the components from the operating system and virtualization layer, including updates and security patches, down to the physical security of the facilities in which the service operates.',
  buttons: [
    {
      link: 'https://www.azion.com/en/documentation/shared-responsibility/',
      label: 'Visit Shared Responsibility Model'
    }
  ],
  leftSidebar: [
    {
      link: '#commercial-certifications',
      label: 'Global certifications'
    }
  ],
  cardContent: [
    {
      overline: 'Global Certifications',
      id: 'commercial-certifications',
      cards: [
        {
          title: 'SOC 2 Type 2 / SOC 3',
          text: 'Azion receives biannual SOC 2 Type 2 and SOC 3 reports, being evaluated on two different trust principles: Security and Availability. It demonstrates that the security controls are continuously audited audited over the course of the year. ',
          image: 'https://www.azion.com/assets/pages/compliance/AICPA.png',
          alt: 'AICPA Logo',
          links: [
            {
              label: 'Read documentation',
              link: 'https://www.azion.com/en/documentation/compliance/soc/ '
            }
          ]
        },
        {
          title: 'PCI DSS',
          text: "Azion annually renews its PCI DSS certification as a PCI DSS 4.0 Level 1 service provider, demonstrating the commitment to ensure that the transmission and processing of cardholder data are secure for both customers and those who interact with Azion's services.",
          image: 'https://www.azion.com/assets/pages/compliance/compliance-pci.png',
          alt: 'PCI DSS',
          links: [
            {
              label: 'Read documentation',
              link: 'https://www.azion.com/en/documentation/compliance/pci-dss-certification/ '
            }
          ]
        }
      ]
    }
  ]
}

</script>
