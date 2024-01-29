import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'

describe('Navbar', () => {
  it('renders properly', () => {
    const wrapper = mount(Navbar, { props: { title: 'Foo' } })
    expect(wrapper.text()).toContain('Foo')
  })
})
