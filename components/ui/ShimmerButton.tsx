import React from 'react'

export const ShimmerButton = (
    {
        title,icon,position,handleClick,otherClasses
    }:{
        title:string,icon:React.ReactNode,position:string,handleClick?:()=>void,otherClasses?:string
    }
) => {
    return (
        <button className={`inline-flex h-12 animate-shimmer items-center justify-start rounded-lg border border-slate-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-normal text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-100 ${otherClasses} gap-3 `}>
            {position == 'left' && icon }
                                {title}
            {position == 'right' && icon }
        </button>
    )
}
