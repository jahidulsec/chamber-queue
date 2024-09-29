import { ClipboardPen } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <section className='flex flex-col gap-2 justify-center items-center'>
        {/* logo */}
        <div className="logo text-primary">
            <ClipboardPen className='size-10' />
        </div>
        <h2 className='text-2xl font-semibold'>Sign in to your account</h2>
    </section>
  )
}

export default Header