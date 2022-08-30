import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Rating from '../Rating.vue'

let wrapper = null

beforeEach(() => {
    wrapper = shallowMount(Rating, {
       props: {
        maxStars: 5,
        activeStars: 2
       }
    })
})

describe('Rating', () => {
  it('should render five stars', () => {
    const stars = wrapper.findAll('.star')
    expect(stars.length).toBe(5)
  })

  it('should render the active stars', () => {
    const active = wrapper.findAll('.star.active')
    expect(active.length).toBe(2)
  })

  it('should render summary', () => {
    const summary = wrapper.find('.summary')
    expect(summary.text()).toBe('2 of 5')
  })
})