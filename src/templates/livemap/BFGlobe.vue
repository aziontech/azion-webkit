<template>
  <div id="globe" ref="globeDiv"></div>
</template>

<script setup>
import Globe from "globe.gl";
import { ref, onMounted, onUpdated } from "vue";
import * as d3 from "d3";
import rob_typeface from "./font/Roboto_Medium_Regular.json";

const props = defineProps({
  epoch: Number,
  globeView: String,
  platform: String,

  enableZoom: {
    type: Boolean,
    default: false
  },
  autoRotate: {
    type: Boolean,
    default: true
  },
  autoRotateSpeed: {
    type: Number,
    default: 0.2
  },
});

let myGlobe = Globe();
let currentGlobe = "sales";
const globeDiv = ref(null);
const defaultCamera = {
  lat: -20.71,
  lng: -60.603,
  altitude: window.innerWidth < 600 ? 3 : 1.65
};
const transitionCamera = {
  lat: -20.71,
  lng: -60.603,
  altitude: window.innerWidth < 600 ? 3 : 1.65
};

////////////
// EVENTS //
////////////

onMounted(() => {
  setupGlobe();
});
onUpdated(() => {
  redrawGlobe();
});
onresize = (event) => {
  myGlobe.width([globeDiv.value.offsetWidth]);
  myGlobe.height([event.target.innerHeight]);
};

/////////////
// METHODS //
/////////////

let currentEpochtime = 0;
async function dataFetch(type, epoch) {
  currentEpochtime = epoch;
  // let url = `${import.meta.env.VITE_GLOBE_API_URL}/${type}?timestamp=${epoch}`;
  let url = `https://o6y84w32t0.map.azionedge.net/${type}?timestamp=${epoch}`;

  let response = await fetch(url).catch((error) => {
    console.error(error);
  });
  let data = await response.json().catch((error) => {
    console.error(error);
  });

  return data;
}

async function setupGlobe() {
  myGlobe = Globe(globeDiv.value);

  myGlobe(globeDiv.value)
    .width([globeDiv.value.offsetWidth])
    .globeImageUrl('https://www.azion.com/assets/livemap/images/globe/earth-dark.jpg')
    .bumpImageUrl('https://www.azion.com/assets/livemap/images/globe/earth-topology.png')
    .backgroundColor('#ffffff00')
    .atmosphereColor('#171717')
    .enablePointerInteraction(false)
    .pointOfView(defaultCamera, 500);

  myGlobe.controls().enableZoom = props.enableZoom;
  myGlobe.controls().autoRotate = props.autoRotate;
  myGlobe.controls().autoRotateSpeed = props.autoRotateSpeed;

  redrawGlobe();

  myGlobe.controls().domElement.addEventListener("wheel", function (event) {
    myGlobe.pointOfView({
      altitude: myGlobe.pointOfView().altitude + event.deltaY / 5000,
    });
  });
}

async function redrawGlobe() {
  if (!props.epoch) {
    return;
  }
  if (currentGlobe !== props.globeView) {
    currentGlobe = props.globeView;
    loadGlobe.reset();
  };

  // disable interactions for performance
  myGlobe.enablePointerInteraction(false).pointOfView(transitionCamera, 500);

  if (typeof loadGlobe[props.globeView] !== 'function') {
    console.info(`loadGlobe[props.globeView] is not function :: `, props);
    return;
  }

  loadGlobe[props.globeView]();
  myGlobe.pointOfView(defaultCamera, 500);
}


let loadGlobe = {
  sales: () => {
    const weightColor = d3
      .scaleSequentialSqrt(d3.interpolateYlOrRd)
      .range(["#ffffff", "#f3652b"])
      .domain([0, 1e2])
      .clamp(true);

    myGlobe
      .pointOfView(defaultCamera, 500)
      .hexBinPointWeight("pop")
      .hexAltitude((d) => d.sumWeight * 6e-6 + 0.001)
      .hexBinResolution(5)
      .hexTopColor((d) => weightColor(d.sumWeight))
      .hexSideColor((d) => weightColor(d.sumWeight))
      .hexBinMerge(true);

    dataFetch("venda", props.epoch).then((info) => {
      if (!info) return;
      let data = [];
      let platform = props.platform;
      info[1].forEach((item) => {
        let blockNumber = item[4];
        if (!blockNumber) {
          data.push({
            lat: item[0],
            lng: item[1],
            pop: (platform === 'desktop' || platform === 'mobile') ? (platform === 'mobile' ? item[2] : item[3]) : (item[2] + item[3]),
          });
        }
      });

      myGlobe.hexBinPointsData(data);
    }).catch((error) => {
      console.error(error);
    });
  },

  traffic: () => {
    const OPACITY = 0.5;

    dataFetch("trafego", props.epoch).then((info) => {
      if (!info) return;
      let data = [];
      let platform = props.platform;
      info[1].forEach((item) => {
        let blockNumber = (platform === 'desktop' || platform === 'mobile') ? (platform === 'mobile' ? item[6] : item[7]) : (item[6] + item[7]);
        let trafficNumber = (platform === 'desktop' || platform === 'mobile') ? (platform === 'mobile' ? item[4] : item[5]) : (item[4] + item[5]);
        if (!blockNumber && trafficNumber > 600) {
          data.push({
            lat: item[0],
            lng: item[1],
            edge_lat: item[2],
            edge_lng: item[3],
          });
        }
      });
      myGlobe
        .arcsData(data)
        .arcStartLat((d) => +d.lat)
        .arcStartLng((d) => +d.lng)
        .arcEndLat((d) => +d.edge_lat)
        .arcEndLng((d) => +d.edge_lng)
        .arcDashLength(0.5)
        .arcDashGap(1)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(3000)
        .arcColor((d) => [
          `rgba(100, 100, 100, ${OPACITY})`,
          `rgba(243, 101, 43, ${OPACITY})`,
        ])
        .arcsTransitionDuration(0)
        .enablePointerInteraction(false);
    }).catch((error) => {
      console.error(error);
    });
  },

  attacks: () => {
    const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
      .range(["#ffffff", "#f3652b"])
      .domain([0, 1e1])
      .clamp(true);
    myGlobe
      .pointOfView(defaultCamera, 500)
      .hexBinPointWeight("pop")
      .hexAltitude((d) => d.sumWeight * 6e-6 + 0.001)
      .hexBinResolution(5)
      .hexTopColor((d) => weightColor(d.sumWeight))
      .hexSideColor((d) => weightColor(d.sumWeight))
      .hexBinMerge(true);

    dataFetch("venda", props.epoch).then((info) => {
      if (!info) return;

      let data = [];
      let platform = props.platform;

      info[1].forEach((item) => {
        let blockNumber = (platform === 'desktop' || platform === 'mobile') ? (platform === 'mobile' ? item[4] : item[5]) : (item[4] + item[5]);
        if (blockNumber > 0) {
          data.push({
            lat: item[0],
            lng: item[1],
            pop: blockNumber,
          });
        }
      });

      myGlobe.hexBinPointsData(data);
    }).catch((error) => {
      console.error(error);
    });
  },

  edges: () => {
    let places = [{ "city": "Buenos Aires", "region": "Buenos Aires F.D.", "country": "AR", "lat": -34.613, "lon": -58.388, "count": 2 }, { "city": "Aracaju", "region": "Sergipe", "country": "BR", "lat": -10.974, "lon": -37.099, "count": 2 }, { "city": "Amsterdam", "region": "North Holland", "country": "NL", "lat": 52.368, "lon": 4.891, "count": 1 }, { "city": "Stockholm", "region": "Stockholm County", "country": "SE", "lat": 59.325, "lon": 18.069, "count": 1 }, { "city": "Atlanta", "region": "Georgia", "country": "US", "lat": 33.818, "lon": -84.4, "count": 1 }, { "city": "Belém", "region": "Para", "country": "BR", "lat": -1.351, "lon": -48.427, "count": 1 }, { "city": "Bogotá", "region": "Bogota D.C.", "country": "CO", "lat": 4.628, "lon": -74.088, "count": 2 }, { "city": "Brasília", "region": "Federal District", "country": "BR", "lat": -15.78, "lon": -47.934, "count": 1 }, { "city": "Paris", "region": "Île-de-France", "country": "FR", "lat": 48.832, "lon": 2.406, "count": 1 }, { "city": "Cuiabá", "region": "Mato Grosso", "country": "BR", "lat": -15.596, "lon": -56.095, "count": 2 }, { "city": "Osasco", "region": "Sao Paulo", "country": "BR", "lat": -23.522, "lon": -46.79, "count": 12 }, { "city": "São Paulo", "region": "Sao Paulo", "country": "BR", "lat": -23.617, "lon": -46.64, "count": 7 }, { "city": "Barueri", "region": "Sao Paulo", "country": "BR", "lat": -23.498, "lon": -46.866, "count": 12 }, { "city": "Campo Grande", "region": "Mato Grosso do Sul", "country": "BR", "lat": -20.442, "lon": -54.646, "count": 1 }, { "city": "Curitiba", "region": "Parana", "country": "BR", "lat": -25.496, "lon": -49.289, "count": 3 }, { "city": "Dallas", "region": "Texas", "country": "US", "lat": 32.829, "lon": -96.798, "count": 1 }, { "city": "Denver", "region": "Colorado", "country": "US", "lat": 39.74, "lon": -104.978, "count": 1 }, { "city": "New York", "region": "New York", "country": "US", "lat": 40.754, "lon": -73.982, "count": 1 }, { "city": "Florianópolis", "region": "Santa Catarina", "country": "BR", "lat": -27.614, "lon": -48.5, "count": 2 }, { "city": "Fortaleza", "region": "Ceara", "country": "BR", "lat": -3.716, "lon": -38.53, "count": 4 }, { "city": "Frankfurt", "region": "Hesse", "country": "DE", "lat": 50.118, "lon": 8.678, "count": 1 }, { "city": "Franca", "region": "Sao Paulo", "country": "BR", "lat": -20.568, "lon": -47.335, "count": 1 }, { "city": "Rio de Janeiro", "region": "Rio de Janeiro", "country": "BR", "lat": -22.918, "lon": -43.094, "count": 14 }, { "city": "Goiânia", "region": "Goias", "country": "BR", "lat": -16.641, "lon": -49.262, "count": 1 }, { "city": "Central and Western District", "region": "Central and Western District", "country": "HK", "lat": 22.29, "lon": 114.15, "count": 1 }, { "city": "Ashburn", "region": "Virginia", "country": "US", "lat": 39.04, "lon": -77.501, "count": 8 }, { "city": "Juazeiro do Norte", "region": "Ceara", "country": "BR", "lat": -7.156, "lon": -39.257, "count": 2 }, { "city": "João Pessoa", "region": "Paraíba", "country": "BR", "lat": -7.167, "lon": -34.861, "count": 1 }, { "city": "Luanda", "region": "Luanda Province", "country": "AO", "lat": -8.838, "lon": 13.235, "count": 1 }, { "city": "Los Angeles", "region": "California", "country": "US", "lat": 34.043, "lon": -118.301, "count": 2 }, { "city": "Londrina", "region": "Parana", "country": "BR", "lat": -23.313, "lon": -51.159, "count": 1 }, { "city": "Lima", "region": "Lima", "country": "PE", "lat": -12.046, "lon": -77.042, "count": 3 }, { "city": "London", "region": "England", "country": "GB", "lat": 51.513, "lon": -0.12, "count": 2 }, { "city": "Madrid", "region": "Madrid", "country": "ES", "lat": 40.416, "lon": -3.693, "count": 1 }, { "city": "Manaus", "region": "Amazonas", "country": "BR", "lat": -3.102, "lon": -60.028, "count": 2 }, { "city": "Macapa", "region": "Amapa", "country": "BR", "lat": 0.598, "lon": -50.768, "count": 1 }, { "city": "Maceió", "region": "Alagoas", "country": "BR", "lat": -9.579, "lon": -35.691, "count": 1 }, { "city": "Chicago", "region": "Illinois", "country": "US", "lat": 41.882, "lon": -87.674, "count": 1 }, { "city": "McAllen", "region": "Texas", "country": "US", "lat": 26.226, "lon": -98.231, "count": 3 }, { "city": "Miami", "region": "Florida", "country": "US", "lat": 25.788, "lon": -80.262, "count": 8 }, { "city": "Milan", "region": "Lombardy", "country": "IT", "lat": 45.472, "lon": 9.191, "count": 1 }, { "city": "Natal", "region": "Rio Grande do Norte", "country": "BR", "lat": -5.81, "lon": -35.222, "count": 1 }, { "city": "Phoenix", "region": "Arizona", "country": "US", "lat": 33.516, "lon": -112.076, "count": 1 }, { "city": "Belo Horizonte", "region": "Minas Gerais", "country": "BR", "lat": -19.903, "lon": -43.956, "count": 5 }, { "city": "Porto Alegre", "region": "Rio Grande do Sul", "country": "BR", "lat": -30.107, "lon": -51.262, "count": 3 }, { "city": "Querétaro", "region": "Querétaro", "country": "MX", "lat": 20.805, "lon": -99.94, "count": 1 }, { "city": "Rio Branco", "region": "Acre", "country": "BR", "lat": -9.975, "lon": -67.816, "count": 1 }, { "city": "Recife", "region": "Pernambuco", "country": "BR", "lat": -8.003, "lon": -34.87, "count": 3 }, { "city": "Santiago", "region": "Santiago Metropolitan", "country": "CL", "lat": -33.451, "lon": -70.665, "count": 1 }, { "city": "Seattle", "region": "Washington", "country": "US", "lat": 47.608, "lon": -122.327, "count": 1 }, { "city": "Santa Clara", "region": "California", "country": "US", "lat": 37.364, "lon": -121.962, "count": 2 }, { "city": "São Luís", "region": "Maranhao", "country": "BR", "lat": -2.637, "lon": -44.304, "count": 1 }, { "city": "Cerquilho", "region": "Sao Paulo", "country": "BR", "lat": -23.187, "lon": -47.769, "count": 1 }, { "city": "Sorocaba", "region": "Sao Paulo", "country": "BR", "lat": -23.474, "lon": -47.442, "count": 1 }, { "city": "Salvador", "region": "Bahia", "country": "BR", "lat": -12.874, "lon": -38.483, "count": 6 }, { "city": "Santos", "region": "Sao Paulo", "country": "BR", "lat": -23.962, "lon": -46.238, "count": 1 }, { "city": "Sydney", "region": "New South Wales", "country": "AU", "lat": -33.87, "lon": 151.196, "count": 1 }, { "city": "Tampa", "region": "Florida", "country": "US", "lat": 28.004, "lon": -82.477, "count": 1 }, { "city": "Campinas", "region": "Sao Paulo", "country": "BR", "lat": -22.896, "lon": -47.045, "count": 1 }, { "city": "Linhares", "region": "Espirito Santo", "country": "BR", "lat": -19.36, "lon": -40.148, "count": 1 }, { "city": "Vitória", "region": "Espirito Santo", "country": "BR", "lat": -20.297, "lon": -40.297, "count": 1 }];
    myGlobe
      .labelsData(places)
      .labelLat((d) => d.lat)
      .labelLng((d) => d.lon)
      .labelText((d) => `${d.city}`)
      .labelColor(() => "rgba(255, 255, 255, .8)")
      .labelTypeFace(rob_typeface)
      .labelResolution(8)
      .onLabelClick((label) => {
        console.log('Globe onLabelClick event :: ', label)
      })
      .labelResolution(1)
      .enablePointerInteraction(true);
  },

  reset: () => {
    myGlobe
      .arcsData([])
      .hexBinPointsData([])
      .hexPolygonsData([])
      .tilesData([])
      .labelsData([])
      .pointsData([])
      .labelColor(() => "rgba(0, 0, 0, 0)");
  }
};
</script>
