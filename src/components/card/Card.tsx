import { UserRoundCheck } from 'lucide-react'
import React from 'react'

type CardProps = {
    icon: React.ReactNode;
    title: string;
    statsNumber: number
}

function Card({icon, title, statsNumber}: CardProps) {
  return (
    <article className={`flex flex-col gap-5 bg-muted px-6 py-4 grow min-w-[15rem] lg:max-w-[20rem] rounded-3xl hover:bg-foreground hover:text-background transition-all duration-300`}>
        {/* top */}
        <div className="top flex justify-between items-center gap-3">
            {/* icon */}
            <span className="icon border p-2 rounded-full text-primary">
                {icon}
            </span>
            <h4 className='text-xs'>Today</h4>
        </div>

        {/* bottom */}
        <div className="bottom flex flex-col gap-2">
            <h3 className='text-sm text-muted-foreground'>{title}</h3>
            <h2 className='text-3xl font-semibold'>{statsNumber}</h2>
        </div>
    </article>
  )
}

export default Card