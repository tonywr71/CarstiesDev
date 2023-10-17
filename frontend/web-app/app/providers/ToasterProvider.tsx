"use client"

import React from 'react'
import { Toaster } from 'react-hot-toast'

export const metadata = {
    title: "Carsties",
    description: ""
}

function ToasterProvider() {
  return (
    <Toaster position="bottom-right"/>
  )
}

export default ToasterProvider
