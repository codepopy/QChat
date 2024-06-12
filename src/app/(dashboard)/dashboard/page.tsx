'use client'

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { FC } from "react"

const Page = async () => {
    const session = await getServerSession(authOptions)
 return <div className="text-lg">{JSON.stringify(session)}</div>
}

export default Page