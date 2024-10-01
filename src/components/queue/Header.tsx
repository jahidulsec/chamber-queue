import React from 'react'
import PageHeading from '../heading/PageHeading'
import { Rows3 } from 'lucide-react'

function Header() {
  return (
    <section>
        <PageHeading icon={<Rows3 className='size-4' />} title='Queue Management' />
    </section>
  )
}

export default Header