export const Default = {
  title: 'Produto / Métrica',
  htmlTable: `<table>
    <thead>
      <tr>
        <th>Métrica</th>
        <th>Cloudflare R2 / Workers / CDN</th>
        <th>AWS S3 + CloudFront</th>
        <th>Akamai NetStorage / CDN</th>
        <th>Azion Edge Storage + Edge App</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Armazenamento (US / BR)</td>
        <td>$0.015/GB - sem egressos PUT/GET pagos</td>
        <td>$0.023~$0.024/GB - egressos $0.085/GB</td>
        <td>≥ $0.049/GB + ingestão e purga</td>
        <td>✅ $0.015/GB com integração edge - sem egressos</td>
      </tr>
      <tr>
        <td>Egressos / Tráfego CDN</td>
        <td>Incluso no plano (fair use)</td>
        <td>$0.085~$0.060/GB + $0.0075/10k reqs</td>
        <td>$0.049~$0.045/GB + custo variável</td>
        <td>✅ $0.110/GB (BR) - $0.085/GB (US/EU) - decrescente</td>
      </tr>
      <tr>
        <td>Requests (HTTPS / 10k)</td>
        <td>GET $3.60 - PUT $4.5</td>
        <td>~$0.75/10k</td>
        <td>Geralmente incluso ou variável</td>
        <td>✅ $0.009 (US/EU) - $0.029 (LATAM)</td>
      </tr>
      <tr>
        <td>Integração compute/serverless</td>
        <td>Billing separado entre Workers e R2</td>
        <td>Custo cumulativo entre Lambda e S3/CDN</td>
        <td>Contratos enterprise e customizados</td>
        <td>✅ Edge Functions nativo e sem egressos</td>
      </tr>
      <tr>
        <td>Diferenciais chave</td>
        <td>Sem egressos, mas operações caras</td>
        <td>Alta adoção, mas billing complexo</td>
        <td>Cobertura global com custo elevado</td>
        <td>✅ Preço previsível, billing unificado e alta performance</td>
      </tr>
    </tbody>
  </table>`
}
