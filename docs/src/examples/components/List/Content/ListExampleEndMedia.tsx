import React from 'react'
import { List } from '@stardust-ui/react'

const ellipsis = <span>&hellip;</span>

const ListExample = () => (
  <List selection>
    <List.Item
      content="Program the sensor to the SAS alarm through the haptic SQL card!"
      endMedia={ellipsis}
      selection
    />
    <List.Item
      content="Use the online FTP application to input the multi-byte application!"
      endMedia={ellipsis}
      selection
    />
    <List.Item
      content="The GB pixel is down, navigate the virtual interface!"
      endMedia={ellipsis}
      selection
    />
  </List>
)

export default ListExample
