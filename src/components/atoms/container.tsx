import React from "react"

import { cn } from "@/lib/utils"

export const Container = ({
    children,
    className,
    id
}: {
    children: React.ReactNode
    className?: string
    id?: string
}) => {
    return (
        <div id={id} className={cn("container mx-auto", className)}
        >
            {children}
        </div>
    )
}