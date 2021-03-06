import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Groups = () => (
  <ExampleSection title="Groups">
    <ComponentExample
      title="Group"
      description="Buttons can exist together as a group."
      examplePath="components/Button/Groups/ButtonGroupExample"
    />
    <ComponentExample
      title="Circular group"
      description="Buttons inside a group can be styled as circular."
      examplePath="components/Button/Groups/ButtonGroupCircularExample"
    />
  </ExampleSection>
)

export default Groups
