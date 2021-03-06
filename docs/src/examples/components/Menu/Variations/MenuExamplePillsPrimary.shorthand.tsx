import React from 'react'
import { Menu } from '@stardust-ui/react'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

const MenuExamplePillsPrimary = () => (
  <Menu defaultActiveIndex={0} items={items} pills type="primary" />
)

export default MenuExamplePillsPrimary
