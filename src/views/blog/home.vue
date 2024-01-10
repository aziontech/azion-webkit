<template>
  <Header
    :menuData="menudata"
    :menuSecondary="menuSecondary"
    :menuSecondaryMobile="menuSecondaryMobile"
    :bottomButtonsMobile="bottomButtonsMobile"
    algoliaAppId="PYJUZH6VNQ"
    algoliaApiKey="7c1795c333053265edd2aeb199745797"
    :algoliaIndex="['azion-site-en', 'azion-blog-en', 'azion-cases-en']" />

  <main>
    <div class="flex justify-center py-12 w-full">
      <div class="flex flex-col gap-11 px-container w-full">
        <FeaturedPost
          linkText="read more"
          linkTarget="_self"
          date="JUL, 13, 2020"
          readTime="10 minutes"
          :imgSrc="featuredPostData.imgSrc"
          :imgAlt="featuredPostData.imgAlt"
          :tagList="featuredPostData.tagList"
          :title="featuredPostData.title"
          :description="featuredPostData.description"
          :link="featuredPostData.link"
          :authors="featuredPostData.authors" />

        <NewsletterSingleLine
          :title="newsletterData.title"
          :buttonText="newsletterData.buttonText"
          :placeholderInput="newsletterData.placeholderInput"
          :onSubmit="newsletterData.onSubmit"
          :formData="{}" />

        <CardGridList
          :data="cardData"
          :categories="buttonBlockListData.dataList" />
      </div>
    </div>

    <NewsletterWide
      class="py-8"
      :overline="newsletterData.overline"
      :title="newsletterData.title"
      :buttonText="newsletterData.buttonText"
      :placeholderInput="newsletterData.placeholderInput"
      :formData="{}" />
  </main>

  <Footer
    lang="en"
    :listData="footerData.listData"
    :cta="footerData.cta"
    :copyright="footerData.copyright" />
</template>

<script setup>
//////////////////////////
// IMPORTING COMPONENTS //
//////////////////////////

import FeaturedPost from '../../templates/featured-post/index.vue';
import Header from '../../templates/header/index.vue';
import Footer from '../../templates/footer/index.vue';
import NewsletterSingleLine from '../../templates/newsletter/single-line/index.vue';
import NewsletterWide from '../../templates/newsletter/wide/index.vue';
import CardGridList from '../../templates/card-grid-list/withLoadMore.vue'

////////////////////////
// MOCKING PARAMETERS /
///////////////////////

import featuredPostData from '../../mock/featuredPost.js';
import buttonBlockListData from '../../mock/buttonBlockList.js';
import newsletterData from '../../mock/newsletterSingleLine.js';
import footerData from '../../mock/footer.js';
import cardData from '../../mock/cards.js';

let menudata = {
  active: 0,
  items: [
    {
      label: 'Products',
      ref: 'productsPanel',
      items: [
        {
          label: 'Build',
          icon: 'pi pi-box',
          items: [
            {
              icon: '',
              label: 'Edge Application',
              description: 'Here will be a small description',
              href: '#edgeapplication'
            }, {
              icon: '',
              label: 'Application Acceleration',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge Caching',
              description: '',
              href: ''
            }, {
              icon: '',
              label: 'Edge Functions',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Image Processor',
              description: '',
              href: ''
            }, {
              icon: '',
              label: 'Load Balancer',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge QV',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge SQL',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Object Storage',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Secure',
          icon: 'pi pi-shield',
          items: [
            {
              icon: '',
              label: 'Edge Firewall',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'DDoS Protection',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Network Layer Protection',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Web Application Firewall',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Web Application Firewall',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Deploy',
          icon: 'pi pi-code',
          items: [
            {
              icon: '',
              label: 'Edge Orchestrator',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Azion Edge Network',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Azion Live Map',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Roadmap',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Observe',
          icon: 'pi pi-chart-line',
          items: [
            {
              icon: '',
              label: 'Data Streaming',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge Pulse',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Real-Time Metrics',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Real-Time Events',
              description: '',
              href: ''
            }
          ]
        }
      ]
    },
    {
      label: 'Pricing',
      href: '#pricing',
      items: []
    },
    {
      label: 'About us',
      href: '#aboutus',
      items: []
    },
    {
      label: 'Resources',
      ref: 'resourcesPanel',
      items: [
        {
          label: 'Documentation',
          items: [
            {
              label: 'Getting started',
              href: ''
            },
            {
              label: 'Dev Tools',
              href: ''
            },
            {
              label: 'Guides',
              href: ''
            },
            {
              label: 'API',
              href: ''
            },
            {
              label: 'Agreements',
              href: ''
            },
            {
              label: 'Changelog',
              href: ''
            }
          ]
        }
      ]
    },
    {
      label: 'Marketplace',
      href: '#marketplace',
      items: []
    }
  ]
};

let menuSecondary = [
  {
    text: "Sign in",
    title: "Azion SSO Login",
    link: "https://sso.azion.com/login",
    destak: false,
  },
  {
    text: "Contact",
    title: "Contact Sales",
    link: "https://www.azion.com/en/contact-sales/",
    destak: false,
  },
  {
    text: "Free account",
    title: "Azion Free Account",
    link: "https://manager.azion.com/signup/",
    destak: true,
  }
];

let menuSecondaryMobile = [
  {
    // label: 'Documents',
    items: [
      {
        label: 'Carreers',
        // icon: 'pi pi-briefcase',
        tags: ['we\'re hiring!'],
        url: '#carreers'
      },
      {
        label: 'Success Stories',
        // icon: 'pi pi-dollar'
        url: '#successstories'
      },
      {
        label: 'Support',
        // icon: 'pi pi-question-circle'
        url: '#support'
      },
      {
        label: 'Privacy Police',
        // icon: 'pi pi-exclamation-triangle'
        url: '#privacypolice'
      }
    ]
  }
];

let bottomButtonsMobile = [];
</script>
