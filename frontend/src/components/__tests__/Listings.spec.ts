import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Listings from '../Listings.vue'

describe('Listings', () => {
  it('renders properly', () => {
    const wrapper = mount(Listings, { props: { listings: [] } })
    
    // simple test - expect an address heading
    expect(wrapper.text()).toContain('Address')
  })
  it('renders listings', () => {
    const data: Array<{
        address: string
        owner_name: string
        license?: string
        platform: string
        geometry: { type: string; coordinates: Array<Number> }
      }> = [{
        address: '123 Foo lane',
        owner_name: 'Nana Noodleman',
        license: 'STR123',
        platform: 'Airbnb',
        geometry: { type: 'Point', coordinates: [-122.4, 37.8] },
      }]
    const wrapper = mount(Listings, { props: { listings: data } })
    expect(wrapper.text()).toContain('123 Foo lane')
  })
})
