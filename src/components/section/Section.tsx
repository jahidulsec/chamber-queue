import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

function Section({className, ...props}: ComponentProps<'section'>) {
  return (
    <section {...props} className={cn('my-6', className)} />
  )
}

export default Section