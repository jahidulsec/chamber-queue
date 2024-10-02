import DisplayTable from '@/components/display/table/DisplayTable'
import DoctorInfo from '@/components/display/doctorInfo/DoctorInfo'
import React from 'react'

function DisplayPage() {
  return (
    <main className='flex min-w-lg bg-muted/50 min-h-screen'>
        <DoctorInfo />
        <DisplayTable />
    </main>
  )
}

export default DisplayPage