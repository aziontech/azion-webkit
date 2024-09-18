import HeroArticle from '../../../templates/heroarticle';
import Breadcrumb from "primevue/breadcrumb";
import ReadableContent from "../../../templates/readablecontent";
import TableOfContents from "../../../templates/tableofcontents";
import Sharer from "../../../templates/sharerblock";

export default {
  title: 'Layout/Content',
  component: HeroArticle,
  tags: ['autodocs'],
  argTypes: {}
};


const MOCK = {
  breadcrumbItems: [
    {
      url: `/en/blog/`,
      target: "_self",
      label: "Blog",
    },
    {
      url: 'www.azion.com',
      target: "_self",
      label: 'This Article',
    },
  ],
  "date": "JUN 27, 2024 • 15 min read",
  "title": "Azion Edge SQL: enabling access and analysis of structured data at the edge",
  "authors": [
      {
          "avatar": "https://www.azion.com/assets/blog/images/uploads/img-prof.png",
          "title": "Mariana Bellorín Aguilera",
          "role": "Technical Writer"
      }
  ],
  "description": "Explore how Azion Edge SQL enhances database operations with edge computing for high scalability, low latency, and cost-effectiveness.",
  "headings": [
    {
      depth: 2,
      slug: "conceitos-basicos-do-azion-edge-sql",
      text: "Conceitos básicos do Azion Edge SQL"
    },
    {
      depth: 3,
      slug: "por-que-usar-edge-functions-para-o-edge-sql",
      text: "Por que usar Edge Functions para o Edge SQL?"
    },
    {
      depth: 3,
      slug: "como-a-replicacao-global-acontece",
      text: "Como a replicação global acontece?"
    },
    {
      depth: 3,
      slug: "sobre-os-modelos-de-consistencia",
      text: "Sobre os modelos de consistência"
    },
    {
      depth: 4,
      slug: "isolamento-de-snapshot-no-modo-wal",
      text: "Isolamento de snapshot no modo WAL"
    },
    {
      depth: 4,
      slug: "o-que-e-consistencia-global-eventual",
      text: "O que é consistência global eventual?"
    },
    {
      depth: 4,
      slug: "read-committed",
      text: "Read Committed"
    },
    {
      depth: 3,
      slug: "meus-dados-estao-seguros",
      text: "Meus dados estão seguros?"
    },
    {
      depth: 2,
      slug: "edge-sql-na-pratica",
      text: "Edge SQL na prática"
    }
  ],
  sharerButtons: [
    {
      link: `https://x.com/intent/tweet?url=`,
      icon: `ai ai-twitter`,
      title: "Twitter",
    },
    {
      link: `https://www.facebook.com/sharer/sharer.php`,
      icon: `pi pi-facebook`,
      title: "Facebook",
    },
  ]
}

const template = `
<div class="surface-ground p-10">
  <div class="m-0 grid grid-cols-1 md:grid-cols-[1fr,240px] gap-10 xl:gap-20">
    <div class="m-0 grid grid-cols-1 xl:grid-cols-[240px,1fr] gap-10 xl:gap-20">
      <aside class="w-full row-span-2 order-2 xl:order-1">
        <Sharer
          :data="args.sharerButtons"
           tooltipText="Copyed"
           title="Share this article"
           sharedURL="https://www.azion.com"
        />
      </aside>
      <div class="xl:max-w-[clamp(19rem,_-44.875rem_+_99.805vw,_50.938rem)] order-1 xl:order-2">
        <HeroArticle v-bind="args">
          <template #breadcrumbs>
            <Breadcrumb :model="args.breadcrumbItems" class="-ml-1 lg:col-start-2" />
          </template>
        </HeroArticle>
      </div>
      <section class='xl:max-w-[clamp(19rem,_-44.875rem_+_99.805vw,_50.938rem)] order-3'>
        <ReadableContent>
          <p>O <strong>Edge SQL da Azion</strong> foi projetado pensando nos desafios do desenvolvimento de aplicações
            modernas nas quais os bancos de dados relacionais são um dos componentes-chave.</p>
          <p>Sim, sabemos disso! Consultar, processar e gerenciar dados sempre acessando a origem e sofrendo com problemas
            de
            performance causados por bancos de dados centralizados, alta latência e outros problemas relacionados.</p>
          <p>Por isso, esse novo produto precisava atender a alguns requisitos para ser o que estávamos planejando como
            uma
            solução ideal:</p>
          <ul>
            <li><strong>Ser fácil de aprender e usar</strong>, empregando ferramentas e linguagens com as quais os
              desenvolvedores estão familiarizados.</li>
            <li><strong>Facilitar a implantação de dados nas edge locations</strong>, aproveitando nossa arquitetura
              distribuída globalmente.</li>
            <li><strong>Oferecer resiliência</strong>, garantindo integridade e disponibilidade de dados.</li>
            <li><strong>Minimizar o tempo de transferência</strong> e assegurar baixa latência para respostas em tempo
              real.
            </li>
            <li><strong>Fornecer alta escalabilidade</strong> para diversos requisitos de armazenamento.</li>
            <li>E tudo isso com escalabilidade e uma replicação eficiente em recursos para <strong>garantir
                custo-efetividade</strong>.</li>
          </ul>
          <p>Após meses de trabalho árduo, codificação e testes, estamos entusiasmados em aprofundar e compartilhar com
            nossa
            comunidade as complexidades do desenvolvimento do Edge SQL.</p>
          <h2 id="conceitos-basicos-do-azion-edge-sql">Conceitos básicos do Azion Edge SQL<a aria-hidden="true"
              tabindex="-1" href="#conceitos-basicos-do-azion-edge-sql"><i class="ml-2 pi pi-link" data-icon=""></i></a>
          </h2>
          <p>O Edge SQL da Azion é uma solução SQL inovadora projetada para ambientes de edge computing. Ele opera
            diretamente
            no edge, aproveitando o poder dos recursos de edge computing para bancos de dados relacionais serverless. Essa
            abordagem permite que ele seja acessado de qualquer edge location, facilitando o processamento em tempo real e
            a
            análise de dados diretamente na rede distribuída da Azion. Consequentemente, não há necessidade de rotear
            consultas para um servidor centralizado, melhorando a performance e reduzindo a latência.</p>
          <p>Ao aproveitar o dialeto SQLite, o Edge SQL da Azion oferece um ambiente familiar para os desenvolvedores
            consultarem e manipularem dados sem esforço. Essa abordagem se integra com sistemas existentes, capacitando os
            desenvolvedores a aproveitar suas capacidades de maneira eficiente.</p>
          <p>Em nosso esforço para fornecer uma ótima experiência ao usuário, também priorizamos a criação de um fluxo de
            trabalho simplificado. Em um nível alto, o Edge SQL opera da seguinte maneira:</p>
          <p><img src="https://www.azion.com/assets/blog/images/uploads/azion-edge-sql-write-flow.png"
              alt="Azion Edge SQL Write Flow" loading="lazy" class="min-h-40" width="768" height="452"></p>
          <ol>
            <li>O cliente estabelece uma conexão por meio da Azion REST API.</li>
            <li>As operações são automaticamente direcionadas para a Main Instance.</li>
            <li>A Main Instance realiza as operações e são geradas alterações incrementais.</li>
            <li>A replicação assíncrona de dados acontece do banco de dados da Main Instance para os Edge SQL Nodes.</li>
            <li>A. As Réplicas salvam as alterações de dados. Isso mantém o banco de dados atualizado, garantindo a
              consistência eventual. B. Também é possível salvar dados para a réplica do banco de dados do Edge SQL usando
              as
              Edge Functions do Edge Firewall.</li>
          </ol>
          <p>Para entender melhor o processo, aqui está uma explicação de alguns termos chaves do Edge SQL:</p>
          <ul>
            <li><strong>Main Instance</strong>: esta é a instância primária do banco de dados implantada no núcleo da
              plataforma. Ela lida com operações DDL (Data Definition Language) e DML (Data Manipulation Language)
              executadas
              pelos clientes. As atualizações do banco de dados são transformadas em snapshots incrementais, capturando as
              alterações feitas nos dados. Esses snapshots são então enviados para as Réplicas, garantindo que todas as
              edge
              locations tenham acesso às últimas alterações de dados.</li>
            <li><strong>Edge SQL Replicas</strong>: cada edge location recebe esses snapshots incrementais e os salva em
              suas
              respectivas Edge SQL Réplicas.</li>
            <li><strong>Replicação global</strong>: replicar alterações em todas as edge locations com ordem e completude
              garantidas em escala global é um desafio significativo. O Edge SQL aborda isso utilizando o <a
                href="https://www.azion.com/pt-br/documentacao/produtos/deploy/edge-orchestrator/">Edge Orchestrator da
                Azion</a>, que gerencia e controla eficientemente a distribuição de conteúdo entre as edge locations.</li>
            <li><strong>Réplicas de leitura</strong>: nas edge locations, as alterações da Main Instance são salvas nas
              réplicas de leitura. Essas réplicas são disponibilizadas para leitura por meio do Cells Runtime e operam
              independentemente umas das outras, fornecendo um ambiente de alta disponibilidade para as aplicações. Essa
              independência garante que, mesmo que uma réplica encontre problemas ou fique inoperante, outras réplicas
              possam
              continuar servindo dados, minimizando interrupções.</li>
            <li>Além disso, essa arquitetura <strong>automatiza as tarefas de replicação</strong>, distribuindo
              eficientemente
              as atualizações e alterações de dados entre as réplicas, otimizando o uso de recursos, reduzindo o tempo de
              trabalho e, por fim, diminuindo os custos operacionais.</li>
          </ul>
          <p>Os clientes têm duas opções para interagir com bancos de dados no ambiente Edge SQL:</p>
          <ul>
            <li><strong>Edge SQL REST API</strong>: essa opção permite que os clientes executem queries DDL (Data
              Definition
              Language) y DML (Data Manipulation Language) diretamente em sua Main Instance. A REST API fornece uma
              maneira
              flexível e programática de interagir com o banco de dados, permitindo fácil integração em aplicações
              existentes.
            </li>
            <li><strong>Edge Functions</strong>: os clientes podem acessar o banco de dados das réplicas de leitura usando
              uma
              edge function. Esse acesso somente leitura é útil quando a recuperação de dados em tempo real é necessária.
              As
              edge functions fornecem uma maneira leve e eficiente de recuperar informações do banco de dados.</li>
          </ul>
          <p><img src="https://www.azion.com/assets/blog/images/uploads/edge-sql-read-flow.png"
              alt="Azion Edge SQL Read Flow" loading="lazy" class="min-h-40" width="768" height="452"></p>
          <p>Para operações de leitura:</p>
          <ol>
            <li>O Customer’s Storage Admin inicia uma operação de leitura na Main Instance através da REST API.</li>
            <li>A REST API consulta os dados do banco de dados da Main Instance e retorna o resultado ao Customer’s
              Storage
              Admin.</li>
            <li>O usuário, através de uma application, inicia uma operação de leitura no Edge Node usando as Edge
              Functions. O
              Edge Traffic Router recebe a resolução de DNS e indica o Edge Node mais adequado a ser consultado.</li>
            <li>A requisição é enviada para o Edge Node mais adequado.</li>
            <li>A. As Edge Functions de Edge Application, em cada Edge Node, são responsáveis por ler a Réplica. B. Também
              é
              possível ler a réplica do banco de dados no Edge SQL usando as Edge Functions de Edge Firewall.</li>
            <li>As Edge Functions entregam o resultado da operação de leitura de volta ao usuário.</li>
          </ol>
          <blockquote>
            <p>Leia mais sobre <a
                href="https://www.azion.com/pt-br/documentacao/produtos/guias/criar-tabelas-edge-sql/">como
                criar tabelas</a> e <a
                href="https://www.azion.com/pt-br/documentacao/produtos/guias/gerenciar-bancos-dados-edge-sql/">como
                gerenciar
                bancos de dados</a> com o Edge SQL.</p>
          </blockquote>
          <h3 id="por-que-usar-edge-functions-para-o-edge-sql">Por que usar Edge Functions para o Edge SQL?<a
              aria-hidden="true" tabindex="-1" href="#por-que-usar-edge-functions-para-o-edge-sql"><i
                class="ml-2 pi pi-link" data-icon=""></i></a>
          </h3>
          <p>O <a href="https://www.azion.com/en/documentation/runtime/overview/">Edge Runtime da Azion</a> fornece um
            conjunto de recursos para desenvolvimento em um contexto de edge, incluindo edge functions baseadas em
            JavaScript
            para implementar lógica de negócios. Então, tendo poderosas ferramentas em casa, decidimos usá-las e
            aproveitá-las
            ao máximo.</p>
          <p>No contexto do Edge SQL, as <a
              href="https://www.azion.com/pt-br/documentacao/produtos/guias/edge-functions/primeiros-passos/">Edge
              Functions
              da Azion</a> podem acessar as réplicas de leitura, promovendo uma maneira de recuperar dados sem latência de
            rede. Essa abordagem aprimora a performance para aplicações de usuário:</p>
          <ul>
            <li><strong>Maior throughput</strong>: ao distribuir a carga entre várias edge locations, as edge functions
              melhoram o throughput. Essa arquitetura distribuída garante que as solicitações por dados sejam tratadas de
              maneira eficiente, mesmo durante períodos de alta demanda.</li>
            <li><strong>Latência ultra baixa</strong>: como não há necessidade de acessar o banco de dados de origem para
              operações de leitura, a recuperação de dados por meio de edge functions experimenta latência ultra baixa. Os
              usuários se beneficiam de tempos de resposta mais rápidos, aprimorando a experiência geral do usuário e a
              performance da aplicação.</li>
          </ul>
          <p>Combinar o poder das Edge Functions com as réplicas de leitura oferece performance e capacidade de resposta
            ideais para suas aplicações, minimizando problemas de latência de rede.</p>
          <p>O Edge SQL oferece uma API JavaScript fácil de usar para acessar bancos de dados, facilitando o rápido
            desenvolvimento de aplicações. Com o EdgeSQL, não há necessidade de conexões com dispositivos de rede externos
            para buscar dados do usuário.</p>
          <p>Vamos explorar um exemplo de edge function para ilustrar isso:</p>
          <div class="expressive-code">
            <link rel="stylesheet" href="/_astro_site/ec.tz706.css">
            <script type="module" src="/_astro_site/ec.8zarh.js"></script>
            <figure class="frame">
              <figcaption class="header"></figcaption>
              <p>Este código configura uma edge function serverless para lidar com requisições HTTP para consultar um
                banco de
                dados usando Azion EdgeSQL.</p>
              <ul>
                <li>A edge function começa importando a classe de banco de dados necessária. A função
                  <code>execQuery</code> lida
                  com a conexão do banco de dados e executa a consulta SQL, gerenciando quaisquer erros potenciais.
                </li>
                <li>A função <code>handleRequest</code> processa as reuisições recebidas, valida-as, constrói a consulta
                  SQL
                  apropriada e usa <code>execQuery</code> para executar a consulta. Ela retorna os resultados em formato
                  JSON ou
                  um erro se a requisição for inválida.</li>
                <li>Finalmente, um <code>event listener for fetch events</code> aciona a função <code>handleRequest</code>
                  em
                  requisições HTTP.</li>
              </ul>
              <p>Em resumo, esta edge function lida eficientemente com requisições HTTP para executar consultas SQL em um
                banco de
                dados EdgeSQL.</p>
              <blockquote>
                <p>Você pode verificar a <a
                    href="https://www.azion.com/pt-br/documentacao/runtime/api-reference/edge-sql/">Edge
                    SQL API</a> para conhecer classes, métodos e atributos relacionados.</p>
                <p>Verifique como interagir com o Edge SQL por meio de <a
                    href="https://www.azion.com/pt-br/documentacao/produtos/guides/edge-sql/listando-dados-edge-functions-edge-sql/">Edge
                    Functions</a>, <a href="https://github.com/aziontech/edgesql-shell">Edge SQL Shell</a>e <a
                    href="https://www.azion.com/pt-br/documentacao/produtos/guias/criar-tabelas-edge-sql/">exemplos de
                    CURL</a>
                  para escrever e consultar dados.</p>
              </blockquote>
              <h3 id="como-a-replicacao-global-acontece">Como a replicação global acontece?<a aria-hidden="true"
                  tabindex="-1" href="#como-a-replicacao-global-acontece"><i class="ml-2 pi pi-link" data-icon=""></i></a>
              </h3>
              <p>Para garantir a disponibilidade e tolerância a falhas do Edge SQL, as réplicas são distribuídas dentro da
                <a href="https://www.azion.com/pt-br/produtos/nossa-rede/">Edge Network da Azion</a> para assegurar que
                todas as
                informações sejam replicadas e armazenadas em todos os nodes desejados. Essa estratégia abrangente de
                replicação
                garante que os dados estejam acessíveis e atualizados quando os usuários acessarem diretamente no edge,
                independentemente de sua localização.
              </p>
              <p>Para alcançar isso, as operações executadas na Main Instance do banco de dados são empacotadas em
                arquivos de
                Write-Ahead Logging (WAL). Esses arquivos WAL, juntamente com snapshots completos, são então distribuídos
                pela
                edge network para garantir a disponibilidade e consistência dos dados em todas as edge locations.</p>
              <ul>
                <li>Os arquivos WAL funcionam como logs para as operações executadas para modificar os dados. Cada novo
                  estado de
                  dados é enviado para as réplicas. Esse mecanismo garante durabilidade, atomicidade e disponibilidade. O
                  serviço
                  de distribuição entrega todos os incrementos e permite a recuperação do banco de dados em cada edge
                  location.
                </li>
                <li>Assim que os arquivos WAL estão disponíveis em cada edge location, o serviço de merging garante que os
                  incrementos sejam salvos na ordem correta, realizando a atualização de cada réplica.</li>
              </ul>
              <p>Nesse contexto, o Edge Orchestrator da Azion recebe os arquivos WAL e snapshots gerados a partir da Main
                Instance, executa uma replicação de leitura assíncrona e, em seguida, replica os dados nas edge locations.
              </p>
              <p>Como as atualizações são assíncronas, existe a possibilidade de que a réplica de leitura fique atrasada
                em
                relação ao estado atual da Main Instance. Esse atraso, conhecido como atraso de réplica (<em>replica
                  lag</em>),
                representa a diferença entre a instância principal e uma réplica de leitura. É importante notar que várias
                réplicas de leitura podem existir, cada uma potencialmente experimentando graus variados de atraso.</p>
              <p><img src="https://www.azion.com/assets/blog/images/uploads/edge-sql-replication-lag.png"
                  alt="Azion Edge SQL Replication Lag" loading="lazy" class="min-h-40" width="768" height="452"></p>
              <h3 id="sobre-os-modelos-de-consistencia">Sobre os modelos de consistência<a aria-hidden="true"
                  tabindex="-1" href="#sobre-os-modelos-de-consistencia"><i class="ml-2 pi pi-link" data-icon=""></i></a>
              </h3>
              <p>Quando uma transação é iniciada na Main Instance, a visão que a transação recebe é “congelada” no tempo.
                Quaisquer operações de escrita realizadas por uma transação são imediatamente visíveis para si mesma, mas
                completamente isoladas de quaisquer outras transações em andamento. Isso garante que o EdgeSQL forneça
                transações
                serializáveis, mantendo uma visão consistente e isolada do banco de dados para cada transação.</p>
              <h4 id="isolamento-de-snapshot-no-modo-wal">Isolamento de snapshot no modo WAL<a aria-hidden="true"
                  tabindex="-1" href="#isolamento-de-snapshot-no-modo-wal"><i class="ml-2 pi pi-link"
                    data-icon=""></i></a></h4>
              <p>Usando o isolamento de snapshot, as alterações são registradas nos arquivos WAL, enquanto as operações
                são
                implementadas na ordem em que foram executadas na Main Instance. Isso fornece uma visão consistente e
                previsível
                do banco de dados para cada transação, mesmo na presença de modificações simultâneas. Os snapshots são a
                base para
                propagar as alterações para réplicas de leitura e promover a consistência global eventual do banco de
                dados
                distribuído.</p>
              <h4 id="o-que-e-consistencia-global-eventual">O que é consistência global eventual?<a aria-hidden="true"
                  tabindex="-1" href="#o-que-e-consistencia-global-eventual"><i class="ml-2 pi pi-link"
                    data-icon=""></i></a></h4>
              <p>Os desenvolvedores e especialistas em dados estão familiarizados com o Teorema CAP. De acordo com o
                teorema, é
                impossível garantir simultaneamente consistência, disponibilidade e tolerância à partição em um sistema
                distribuído. Durante o desenvolvimento do Edge SQL, foi uma preocupação como lidar com essa situação.</p>
              <p>A disponibilidade e a tolerância à partição de dados são garantidas por meio da rede distribuída,
                replicação de
                leitura, orquestração e um mecanismo de failover. Precisamente, o uso de arquivos WAL e isolamento de
                snapshot nos
                ajuda nessa questão. Os arquivos WAL garantem a durabilidade registrando as alterações antes de serem
                aplicadas ao
                banco de dados, o que ajuda na recuperação de dados em caso de falhas, mantendo a consistência. Enquanto
                isso, o
                isolamento de snapshot garante que transações simultâneas não interfiram umas com as outras, preservando
                assim a
                consistência.</p>
              <p>Isso torna a consistência a candidata ao trade-off. No entanto, a <strong>consistência eventual</strong>
                foi a
                resposta para nós neste tópico, tendo os meios para garantir que os dados eventualmente se tornem
                consistentes em
                todos os locais.</p>
              <p>Usando a consistência eventual como abordagem, podemos garantir que as atualizações feitas na Main
                Instance sejam
                gradualmente replicadas nas edge locations, alcançando a consistência ao longo do tempo. Essa abordagem
                também
                reduz a latência nas operações de leitura, porque a leitura de dados não depende da sincronização entre
                réplicas.
              </p>
              <h4 id="read-committed">Read Committed<a aria-hidden="true" tabindex="-1" href="#read-committed"><i
                    class="ml-2 pi pi-link" data-icon=""></i></a></h4>
              <p>As réplicas de leitura recebem apenas dados confirmados, garantindo que os dados acessíveis por meio do
                ambiente
                de runtime sigam o modelo de leitura confirmada (<em>Read Committed</em>).</p>
              <h3 id="meus-dados-estao-seguros">Meus dados estão seguros?<a aria-hidden="true" tabindex="-1"
                  href="#meus-dados-estao-seguros"><i class="ml-2 pi pi-link" data-icon=""></i></a></h3>
              <p>Trabalhar com dados, especialmente dados confidenciais, exige os mais altos padrões e práticas para
                garantir a
                segurança dos dados. A maneira como o Edge SQL funciona e como foi concebido facilita essa tarefa.</p>
              <p>A distribuição global dos arquivos Write-Ahead Logging (WAL) usando o Edge Orchestrator garante o uso de
                técnicas
                modernas de gerenciamento de dados em ambientes distribuídos, como o Edge SQL. Para garantir a
                distribuição segura
                e a verificação de integridade dos dados, são empregadas técnicas sofisticadas. Essas técnicas incluem
                protocolos
                de criptografia, assinaturas digitais e checksums, entre outras, para proteger os dados durante a
                transmissão e
                armazenamento.</p>
              <p>Além disso, a garantia de entrega de dados é primordial, alcançada por meio de robustas estratégias de
                replicação
                de dados, arquiteturas tolerantes a falhas e mecanismos de monitoramento. Essas medidas, coletivamente,
                preservam
                a confiabilidade, consistência e disponibilidade dos dados em locais geograficamente dispersos.</p>
              <p>Ao fornecer isolamento de runtime, o ambiente de execução do banco de dados também é seguro, prevenindo
                acesso
                não autorizado e adulteração de dados confidenciais. O isolamento de runtime também garante o isolamento
                de
                recursos, evitando contenção de recursos e ataques de negação de serviço (DoS). Cada instância de banco de
                dados é
                executada em um ambiente isolado, garantindo que tenha recursos dedicados e não possa afetar adversamente
                outros
                processos no sistema.</p>
              <p>Além disso, ao usar a Plataforma de Edge da Azion, os dados são protegidos pelos <a
                  href="https://azion.com/en/documentation/products/secure/">produtos Secure da Azion</a>, incluindo <a
                  href="https://www.azion.com/pt-br/documentacao/produtos/secure/edge-firewall/ddos-protection/">DDoS
                  Protection</a> e <a
                  href="https://www.azion.com/pt-br/documentacao/produtos/secure/edge-firewall/web-application-firewall/">Web
                  Application Firewall</a>, para aumentar a segurança dos seus dados.</p>
              <h2 id="edge-sql-na-pratica">Edge SQL na prática<a aria-hidden="true" tabindex="-1"
                  href="#edge-sql-na-pratica"><i class="ml-2 pi pi-link" data-icon=""></i></a></h2>
              <p>Procurando inspiração sobre como usar o Edge SQL da Azion na prática? Em uma frase: este produto agiliza
                a
                consulta e as operações de banco de dados no edge. No entanto, já identificamos alguns casos de uso dos
                quais
                nossos clientes e a equipe estão se beneficiando, ou poderiam começar a implementar agora que está
                disponível:</p>
              <ul>
                <li><strong>Rastreamento de pedidos</strong>: rastreie pedidos, gerencie status de entrega e forneça
                  atualizações
                  em tempo real para os clientes.</li>
                <li><strong>Detecção de fraudes</strong>: detecte e previna atividades fraudulentas rapidamente analisando
                  dados
                  em tempo real com o Edge SQL.</li>
                <li><strong>Personalização</strong>: ofereça recomendações personalizadas com base no comportamento do
                  usuário.
                </li>
                <li><strong>Preços em tempo real</strong>: atualize os preços dos produtos em tempo real com base nas
                  condições do
                  mercado.</li>
                <li><strong>Resiliência</strong>: minimize o tempo de inatividade, previna perdas e garanta resiliência em
                  aplicações críticas com réplicas do banco de dados.</li>
                <li><strong>Simplificação de microsserviços</strong>: aproveite os microsserviços, garantindo consistência
                  e
                  simplificando a camada de dados em arquiteturas serverless.</li>
              </ul>
              <blockquote>
                <p>O Azion Edge SQL está disponível em <strong>Preview</strong>. Conheça mais sobre como começar a usá-lo
                  na <a href="https://www.azion.com/pt-br/documentacao/produtos/store/edge-sql/">documentação</a>.</p>
              </blockquote>
            </figure>
          </div>
        </ReadableContent>
      </section>
    </div>
    <aside class="hidden md:block">
      <div class="md:sticky md:top-20">
        <TableOfContents initialHeadingTitle="Overview" title="Nesta pagina" :headings="args.headings" />
      </div>
    </aside>
  </div>
</div>
`

const Template = (args) => ({
  components: { HeroArticle, Breadcrumb, ReadableContent, TableOfContents, Sharer },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: { source: { code: template } },
};
