'use client'


import { AppDispatch, RootState } from "@/store"
import { getCountry } from "@/store/apps/country"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const inter =Inter({subsets :['latin']})


export default function Page() {

    //?redux

    const dispatch = useDispatch<AppDispatch>()

    const loading: boolean = useSelector((state: RootState) => state.country.loading)
    const data: never[] = useSelector((state: RootState) => state.country.data)

    useEffect(() => {
        dispatch(getCountry())
    }, [dispatch])


    return (
        <>
            {
                loading ?
                    (<h1>Yükleniyor</h1>)
                    :
                    (<>
                        <h1>Hello World</h1>
                        <div>{data.length >0 && data[0].city.map((k:any) =>{
                            return <div>{k.name}</div>
                        })}</div>
                    </>)
            }
        </>

    )
}
