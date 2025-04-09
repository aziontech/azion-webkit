<template>
  <Container>

    <SectionMapEdgeNetwork v-bind="MOCK">
      <template #content>
        <EdgeNetworkTabView :locations="MOCK.locations" />
      </template>
    </SectionMapEdgeNetwork>

  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionMapEdgeNetwork from './templates/sectionmapedgenetwork'
  import EdgeNetworkTabView from './templates/edgenetworktabview'

  const MOCK = {
    overline: 'NOSSA REDE',
    titleTag: 'h1',
    title: 'Uma região: Global',
    description:
      'Ajudamos sua empresa a crescer em larga escala desde qualquer lugar, com o poder da rede de edge computing mais confiável do planeta.',
    locations: [
      {
        title: 'América do Norte',
        points: [
          {
            country: 'Estados Unidos',
            cities: [
              {
                name: 'Ashburn'
              },
              {
                name: 'Atlanta'
              },
              {
                name: 'Chicago'
              },
              {
                name: 'Dallas'
              },
              {
                name: 'Denver'
              },
              {
                name: 'Los Angeles'
              },
              {
                name: 'Miami'
              },
              {
                name: 'Nova Iorque'
              },
              {
                name: 'Phoenix'
              },
              {
                name: 'São José'
              },
              {
                name: 'Seattle'
              }
            ]
          },
          {
            country: 'México',
            cities: [
              {
                name: 'Querétaro'
              }
            ]
          }
        ]
      },
      {
        title: 'América do Sul',
        points: [
          {
            country: 'Brasil',
            cities: [
              {
                name: 'Aracaju'
              },
              {
                name: 'Barueri'
              },
              {
                name: 'Belém'
              },
              {
                name: 'Belo Horizonte',
                number: '3'
              },
              {
                name: 'Brasília'
              },
              {
                name: 'Campinas'
              },
              {
                name: 'Campo Grande'
              },
              {
                name: 'Cuiabá',
                number: '2'
              },
              {
                name: 'Curitiba',
                number: '2'
              },
              {
                name: 'Florianópolis',
                number: '2'
              },
              {
                name: 'Fortaleza',
                number: '3'
              },
              {
                name: 'Franca'
              },
              {
                name: 'Goiânia'
              },
              {
                name: 'João Pessoa'
              },
              {
                name: 'Juazeiro do Norte'
              },
              {
                name: 'Linhares'
              },
              {
                name: 'Londrina'
              },
              {
                name: 'Macapá',
                number: '2'
              },
              {
                name: 'Maceió'
              },
              {
                name: 'Manaus',
                number: '3'
              },
              {
                name: 'Natal'
              },
              {
                name: 'Osasco'
              },
              {
                name: 'Porto Alegre',
                number: '3'
              },
              {
                name: 'Rio Branco'
              },
              {
                name: 'Recife',
                number: '3'
              },
              {
                name: 'Rio de Janeiro',
                number: '5'
              },
              {
                name: 'Salvador',
                number: '4'
              },
              {
                name: 'Santos'
              },
              {
                name: 'São Luís'
              },
              {
                name: 'São Paulo',
                number: '4'
              },
              {
                name: 'Sorocaba',
                number: '2'
              },
              {
                name: 'Vitória'
              }
            ]
          },
          {
            country: 'Argentina',
            cities: [
              {
                name: 'Buenos Aires',
                number: '2'
              }
            ]
          },
          {
            country: 'Chile',
            cities: [
              {
                name: 'Santiago'
              }
            ]
          },
          {
            country: 'Colômbia',
            cities: [
              {
                name: 'Bogotá'
              }
            ]
          },
          {
            country: 'Peru',
            cities: [
              {
                name: 'Lima'
              }
            ]
          }
        ]
      },
      {
        title: 'Europa, Oriente Médio e África',
        points: [
          {
            country: 'Alemanha',
            cities: [
              {
                name: 'Frankfurt'
              }
            ]
          },
          {
            country: 'Espanha',
            cities: [
              {
                name: 'Madri'
              }
            ]
          },
          {
            country: 'França',
            cities: [
              {
                name: 'Paris'
              }
            ]
          },
          {
            country: 'Reino Unido',
            cities: [
              {
                name: 'Londres'
              }
            ]
          },
          {
            country: 'Itália',
            cities: [
              {
                name: 'Milão'
              }
            ]
          },
          {
            country: 'Suécia',
            cities: [
              {
                name: 'Estocolmo'
              }
            ]
          },
          {
            country: 'África do Sul',
            cities: [
              {
                name: 'Johannesburgo'
              }
            ]
          }
        ]
      },
      {
        title: 'Ásia-Pacífico',
        points: [
          {
            country: 'Austrália',
            cities: [
              {
                name: 'Sydney'
              }
            ]
          },
          {
            country: 'China',
            cities: [
              {
                name: 'Hong Kong'
              }
            ]
          }
        ]
      }
    ],
    cities: {
      sydney: 'Sydney',
      madrid: 'Madri',
      paris: 'Paris',
      milao: 'Milão',
      london: 'Londres',
      johannesburg: 'Joanesburgo',
      ashburn: 'Ashburn',
      chicago: 'Chicago',
      miami: 'Miami',
      atlanta: 'Atlanta',
      houston: 'Houston',
      toronto: 'Toronto',
      detroit: 'Detroit',
      columbus: 'Columbus',
      indianapolis: 'Indianápolis',
      charlotte: 'Charlotte',
      panamaCity: 'Cidade do Panamá',
      montreal: 'Montreal',
      philadelphia: 'Filadélfia',
      dallas: 'Dallas',
      phoenix: 'Phoenix',
      denver: 'Denver',
      saltLakeCity: 'Salt Lake City',
      losAngeles: 'Los Angeles',
      sanJose: 'São José',
      seattle: 'Seattle',
      bogota: 'Bogotá',
      queretaro: 'Querétaro',
      belem: 'Belém',
      saoLuis: 'São Luís',
      fortaleza: 'Fortaleza',
      juazeiroDoNorte: 'Juazeiro do Norte',
      natal: 'Natal',
      joaoPessoa: 'João Pessoa',
      recife: 'Recife',
      maceio: 'Maceió',
      salvador: 'Salvador',
      melbourne: 'Melbourne',
      perth: 'Perth',
      auckland: 'Auckland',
      canberra: 'Canberra',
      cuiaba: 'Cuiabá',
      brasilia: 'Brasília',
      goiania: 'Goiânia',
      linhares: 'Linhares',
      rioDeJaneiro: 'Rio de Janeiro',
      saoPaulo: 'São Paulo',
      beloHorizonte: 'Belo Horizonte',
      franca: 'Franca',
      perdizes: 'Perdizes',
      florianopolis: 'Florianópolis',
      curitiba: 'Curitiba',
      londrina: 'Londrina',
      campoGrande: 'Campo Grande',
      portoAlegre: 'Porto Alegre',
      buenosAires: 'Buenos Aires',
      santiago: 'Santiago',
      lima: 'Lima',
      manaus: 'Manaus',
      medellin: 'Medellín',
      guatemalaCity: 'Cidade da Guatemala',
      mexicoCity: 'Cidade do México',
      valparaiso: 'Valparaíso',
      rosario: 'Rosário',
      cordoba: 'Córdoba',
      asuncion: 'Assunção',
      guayaquil: 'Guayaquil',
      quito: 'Quito',
      newYork: 'Nova York',
      boston: 'Boston',
      bangkok: 'Bangkok',
      hongKong: 'Hong Kong',
      hoChiMinhCity: 'Cidade de Ho Chi Minh',
      jakarta: 'Jacarta',
      kualaLumpur: 'Kuala Lumpur',
      manila: 'Manila',
      shanghai: 'Xangai',
      taipei: 'Taipei',
      hanoi: 'Hanói',
      chengdu: 'Chengdu',
      kuwait: 'Kuwait',
      doha: 'Doha',
      dubai: 'Dubai',
      muscat: 'Mascate',
      riyadh: 'Riade',
      telAviv: 'Tel Aviv',
      ramallah: 'Ramallah',
      lisbon: 'Lisboa',
      barcelona: 'Barcelona',
      marseille: 'Marselha',
      geneva: 'Genebra',
      frankfurt: 'Frankfurt',
      budapest: 'Budapeste',
      oslo: 'Oslo',
      copenhagen: 'Copenhague',
      stockholm: 'Estocolmo',
      helsinki: 'Helsinque',
      stPetersburg: 'São Petersburgo',
      riga: 'Riga',
      kyiv: 'Kiev',
      zurich: 'Zurique',
      prague: 'Praga',
      berlin: 'Berlim',
      athens: 'Atenas',
      istanbul: 'Istambul',
      bucharest: 'Bucareste',
      sofia: 'Sófia',
      belgrade: 'Belgrado',
      dublin: 'Dublin',
      brussels: 'Bruxelas',
      hyderabad: 'Hyderabad',
      newDelhi: 'Nova Deli',
      islamabad: 'Islamabad',
      chennai: 'Chennai',
      bengaluru: 'Bengaluru',
      osaka: 'Osaka',
      jinan: 'Jinan',
      seoul: 'Seul',
      beijing: 'Pequim',
      tokyo: 'Tóquio',
      honolulu: 'Honolulu',
      mumbai: 'Bombaim',
      novosibirsk: 'Novosibirsk',
      yekaterinburg: 'Ecaterimburgo',
      moscow: 'Moscou',
      krakow: 'Cracóvia',
      gothenburg: 'Gotemburgo',
      hamburg: 'Hamburgo',
      dusseldorf: 'Düsseldorf',
      manchester: 'Manchester',
      edinburgh: 'Edimburgo',
      naples: 'Nápoles',
      rome: 'Roma',
      valencia: 'Valência',
      capeTown: 'Cidade do Cabo',
      lagos: 'Lagos',
      nairobi: 'Nairóbi',
      cairo: 'Cairo',
      shenzhen: 'Shenzhen',
      singapore: 'Singapura',
      macapa: 'Macapá',
      rioBranco: 'Rio Branco',
      vitoria: 'Vitória'
    },
    tags: ['Current Cities', 'Planned Cities']
  }
</script>
