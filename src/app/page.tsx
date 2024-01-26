'use client'
import { Select } from 'dts-issue-reproduction'

export default function Home() {
  const data = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
  ]

  return (
    <div>
      <Select
        data={data}
        id='test'
        value={{
          value: '1',
          label: '1',
        }}
      />
    </div>
  )
}
