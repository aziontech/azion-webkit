<template>
  <div class="flex flex-col gap-3 w-full">
    <div class="flex justify-end">
      <Button
        label=""
        size="small"
        :icon="icon"
        severity="secondary"
        outlined
        @click="copy"
      />
    </div>

    <div>
      <ul v-if="data" v-show="data" class="block rounded border surface-border">
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p>
            <strong class="text-nowrap">UUID:</strong> {{ data.uuid }}
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p>
            <strong class="text-nowrap">Client IP:</strong> {{ data.client.label }}
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p>
            <strong class="text-nowrap">Azion Edge IP:</strong> {{ data.azion.label }}
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p>
            <strong class="text-nowrap">Resolver IP:</strong> {{ data.azion.label }}
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p>
            <strong class="text-nowrap">User Agent:</strong> {{ data.userAgent }}
          </p>
        </li>
      </ul>
      <ul v-else class="block rounded border surface-border">
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p class="flex flex-row gap-2">
            <Skeleton width="4rem" height="25px" />: <Skeleton width="16rem" height="25px" />
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p class="flex flex-row gap-2">
            <Skeleton width="5rem" height="25px" />: <Skeleton width="12rem" height="25px" />
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p class="flex flex-row gap-2">
            <Skeleton width="6rem" height="25px" />: <Skeleton width="12rem" height="25px" />
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p class="flex flex-row gap-2">
            <Skeleton width="5rem" height="25px" />: <Skeleton width="12rem" height="25px" />
          </p>
        </li>
        <li class="flex flex-row gap-2 border-b surface-border p-2">
          <p class="flex flex-row gap-2">
            <Skeleton width="5rem" height="25px" />: <Skeleton width="20rem" height="25px" />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import Button from 'primevue/button'
  import Skeleton from 'primevue/skeleton'

  const service = 'https://netinfo.azion.com/json'
  const data = ref(null)
  const error = ref(null)
  const icon = ref('pi pi-copy')

  onMounted(() => {
    getData(service)
      .then(json => {
        if(json.msg) {
          error.value = json.msg
          return
        }

        console.log(json)
        data.value = parseData(json)
        console.log(data.value)
      })
  })

  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(data.value))
    icon.value = 'pi pi-check'

    setTimeout(() => {
      icon.value = 'pi pi-copy'
    }, 1500)
  }

  const getData = async (service) => {
    return fetch(service)
      .then(response => {
        if (!response.ok) {
          const errorData = {
            status: response.status,
            msg: '[!] Fetch ERRROR to API communication'
          }

          console.error(errorData)
          throw new Error(errorData)
        }

        return response.json()
      })
      .then(json => {
        return json
      })
      .catch(error => {
        const errorData = { msg: error.message || error }
        console.error(errorData)
        return { msg: errorData }
      })
  }

  const parseData = (data) => {
    return {
      uuid: data.uuid || '',
      userAgent: navigator.userAgent,
      client: {
        label: `${data.ipaddr} (${data.ipaddr_asn}, ${data.ipaddr_country})`,
        ip: data.ipaddr,
        asn: data.ipaddr_asn,
        asname: data.ipaddr_asname,
        region: data.ipaddr_region,
        city: data.ipaddr_city,
        country: data.ipaddr_country
      },
      azion: {
        label: `${data.x_real_ip} (${data.x_real_ip_asn}, ${data.x_real_ip_country})`,
        ip: data.x_real_ip,
        asn: data.x_real_ip_asn,
        asname: data.x_real_ip_asname,
        region: data.x_real_ip_region,
        city: data.x_real_ip_city,
        country: data.x_real_ip_country
      },
      resolver: {
        label: `${data.resolver_ip} (${data.resolver_ip_asn}, ${data.resolver_ip_country})`,
        ip: data.resolver_ip,
        asn: data.resolver_ip_asn,
        asname: data.resolver_ip_asname,
        region: data.resolver_ip_region,
        city: data.resolver_ip_city,
        country: data.resolver_ip_country
      }
    }
  }
</script>
