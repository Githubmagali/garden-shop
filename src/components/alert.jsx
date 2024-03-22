"use client"
import { useEffect } from "react"


export default function AlertPage({ alert, alertType, onClose }) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 5000);

        return(()=> clearTimeout(timeout))
    }, [onClose])
   

const alertColor = alertType === "success" ? "border rounded border-green-200 text-green-700" : "border rounded border-red-200 text-red-700";


return (
    <div className={`fixed mb-4 mr-4 ${alertColor} p-4 rounded-md`}>
            {alert}
          </div>
)
}