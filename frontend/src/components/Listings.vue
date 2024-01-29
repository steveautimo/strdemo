<template>
  <div>
    <table class="table-auto shadow-sm border-collapse">
      <thead class="bg-gray-50 text-left">
        <tr>
          <th class="border px-4 py-2">Address</th>
          <th class="border px-4 py-2">Owner name</th>
          <th class="border px-4 py-2">Platform</th>
          <th class="border px-4 py-2">Business License</th>
          <th class="border px-4 py-2">Request Removal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="listing in props.listings">
          <td class="border px-4 py-2">{{ listing.address }}</td>
          <td class="border px-4 py-2">{{ listing.owner_name }}</td>
          <td class="border px-4 py-2">{{ listing.platform }}</td>
          <td class="border px-4 py-2">{{ listing.license }}</td>
          <td class="border px-6 py-2">
            <FlagIcon />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import FlagIcon from './FlagIcon.vue'

// receive listings from the parent component. This allows the parent component
// to also tell the map about listing data.
const props = defineProps<{
  listings: Array<{
    address: string
    owner_name: string
    license?: string
    platform: string
    geometry: { type: string; coordinates: Array<Number> }
  }>
}>()
</script>
