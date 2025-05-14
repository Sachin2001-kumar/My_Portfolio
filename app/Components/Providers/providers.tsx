"use client"

import ActiveSectionContextProvider from "@/app/lib/Active"

import React from "react"

type props={
  children:React.ReactNode;
}
const Providers=({children}:props)=>{
  return(<ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>)
}

export default Providers