export const Default = {
  title: 'Produto / Métrica',
  columns: ['Cloudflare R2 / Workers / CDN', 'AWS S3 + CloudFront', 'Akamai NetStorage / CDN', 'Azion Edge Storage + Edge App'],
  rows: [
    'Armazenamento (US / BR)',
    'Egressos / Tráfego CDN',
    'Requests (HTTPS / 10k)',
    'Integração compute/serverless',
    'Diferenciais chave'
  ],
  data: [
    [
      '$0.015/GB - sem egressos PUT/GET pagos',
      '$0.023~$0.024/GB - egressos $0.085/GB',
      '≥ $0.049/GB + ingestão e purga',
      '✅ $0.015/GB com integração edge - sem egressos'
    ],
    [
      'Incluso no plano (fair use)',
      '$0.085~$0.060/GB + $0.0075/10k reqs',
      '$0.049~$0.045/GB + custo variável',
      '✅ $0.110/GB (BR) - $0.085/GB (US/EU) - decrescente'
    ],
    [
      'GET $3.60 - PUT $4.5',
      '~$0.75/10k',
      'Geralmente incluso ou variável',
      '✅ $0.009 (US/EU) - $0.029 (LATAM)'
    ],
    [
      'Billing separado entre Workers e R2',
      'Custo cumulativo entre Lambda e S3/CDN',
      'Contratos enterprise e customizados',
      '✅ Edge Functions nativo e sem egressos'
    ],
    [
      'Sem egressos, mas operações caras',
      'Alta adoção, mas billing complexo',
      'Cobertura global com custo elevado',
      '✅ Preço previsível, billing unificado e alta performance'
    ]
  ]
}
  