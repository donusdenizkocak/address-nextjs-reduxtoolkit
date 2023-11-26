'use client'

import { AppDispatch, RootState } from "@/store"
import { getCountry } from "@/store/apps/country"
import { useEffect } from "react"
import { useDispatch } from "react-redux"




export default function Page() {

    //?redux

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
      dispatch(getCountry())
    }, [dispatch])
    

    return (
        <>
            <h1>Hello Next.js</h1>
            <button>Ülkeleri Getir</button>
        </>
    )
}
