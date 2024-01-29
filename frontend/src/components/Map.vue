<template>
  <ol-map class="map-container" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true">
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <!-- set up a vector layer consisting of points representing locations
    of short term rentals.-->
    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature v-for="listing in props.listings">
          <ol-geom-point :coordinates="listing.geometry.coordinates"></ol-geom-point>
          <ol-style>
            <ol-style-circle radius="9">
              <ol-style-fill :color="listingColor(listing.license).fill"></ol-style-fill>
              <ol-style-stroke :color="listingColor(listing.license).outline" width="2"></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// roughly center map over BC
const center = ref([-13835849, 7290459])
const projection = ref('EPSG:3857')
const zoom = ref(5)
const rotation = ref(0)

// colors representing licensed and unlicensed listings.
const listingUnlicensed = '#f87171'
const listingUnlicensedOutline = '#ea580c'
const listingLicensed = '#86efac'
const listingLicensedOutline = '#0d9488'

// listings are provided by the component that loads the map (parent component).
const props = defineProps<{
  listings: Array<{
    address: string
    owner_name: string
    license?: string
    platform: string
    geometry: { type: string; coordinates: Array<Number> }
  }>
}>()

// pick a color based on whether the license field is populated
const listingColor = (license?: string) => {
  if (license === undefined || license == '') {
    return { fill: listingUnlicensed, outline: listingUnlicensedOutline }
  }
  return { fill: listingLicensed, outline: listingLicensedOutline }
}
</script>

<style lang="css">
.map-container {
  height: 100%;
}
</style>
