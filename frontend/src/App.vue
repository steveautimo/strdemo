<template>
  <header>
    <Navbar title="Short Term Rentals" />
  </header>

  <main>
    <div class="md:flex">
      <div class="responsive-map order-1 md:order-2 w-full md:w-1/2 2xl:w-7/12">
        <Map :listings="listings" />
      </div>
      <div class="responsive-panel w-full order-2 md:order-1 md:w-1/2 2xl:w-5/12">
        <Listings :listings="listings" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Map from './components/Map.vue'
import Listings from './components/Listings.vue'
import { onMounted, ref } from 'vue'

// variable holding listing data
// note: in a larger app, this would typically be found in a state store, not in App.vue.
// since this is a small demo / proof of concept with only a handful of components,
// this is a good place to keep listing data such that a table component (Listings.vue)
// and our map (Map.vue) can have visibility into a single set of listings.
const listings = ref<
  Array<{
    address: string
    owner_name: string
    license?: string
    platform: string
    geometry: { type: string; coordinates: Array<Number> }
  }>
>([])

// populate listing data when component loads
onMounted(() => {
  listings.value = [
    {
      address: '50 Main St, Parksville',
      owner_name: 'Johnny',
      platform: 'Airbnb',
      license: 'STR999421',
      geometry: {
        coordinates: [-13838126, 6329827],
        type: 'Point'
      }
    },
    {
      address: '3454 Martin St, Penticton',
      owner_name: 'Rosita',
      platform: 'Airbnb',
      license: 'STR12155',
      geometry: {
        coordinates: [-13313199, 6360183],
        type: 'Point'
      }
    },
    {
      address: '3454 Martin St, Penticton',
      owner_name: 'Rosita',
      platform: 'Vrbo',
      license: 'STR12155',
      geometry: {
        coordinates: [-13313199, 6360183],
        type: 'Point'
      }
    },
    {
      address: '74 Power St, Penticton',
      owner_name: 'Gunther',
      platform: 'Vrbo',
      geometry: {
        coordinates: [-13314140, 6359292],
        type: 'Point'
      }
    },
    {
      address: '335 112 Ave, Fort St. John',
      owner_name: 'Ash',
      platform: 'Airbnb',
      license: 'STR555123',
      geometry: {
        coordinates: [-13449488, 7609649],
        type: 'Point'
      }
    },
  ]
})
</script>

<style scoped></style>
