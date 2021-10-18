import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'

type TabContent = {
  label: string
  value: string
}

const TAB_CONTENTS: TabContent[] = [
  {
    label: 'Home',
    value: 'home',
  },
  {
    label: 'Portfolio',
    value: 'portfolio',
  },
  {
    label: 'Slide',
    value: 'slide',
  },
  {
    label: 'Links',
    value: 'links',
  },
]

export const PageTabs: React.VFC = () => {
  const [value, setValue] = useState<string>(TAB_CONTENTS[0].value)

  const handleChangeValue = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Tabs
      value={value}
      textColor="inherit"
      indicatorColor="secondary"
      onChange={handleChangeValue}
    >
      {TAB_CONTENTS.map(({ label, value }) => (
        <Tab key={label} label={label} value={value} />
      ))}
    </Tabs>
  )
}
