import React from 'react'
import AutoTrackingSystemTemplate from '@/src/components/templates/AutoTrackingSystem'
import { Providers } from 'providers'


const ATS = () => {
  return (
    <Providers>
      <title>Auto Tracking System Page</title>
      <AutoTrackingSystemTemplate />
    </Providers>
  )
}

export default ATS