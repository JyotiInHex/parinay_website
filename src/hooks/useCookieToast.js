"use client";
import { useEffect } from 'react'
import { useToast } from '@/context/ToastContext'
import { guardMessages, getRandomMessage } from '@/utils/validators'

export function useToastFromCookie() {
    const { ThrowToast } = useToast();
    let toastType;
    useEffect(() => {
        toastType = document.cookie
            .split("; ")
            .find((row) => row.startsWith("toastMsg="))
            ?.split("=")[1];
            
        const toastStates = {
            "302": "info",
            "400": "warning",
            "401": "warning",
            "403": "warning",
        };

        const toastState = toastStates[toastType] || "info";

        switch (toastType) {
            case "302":
            case "400":
            case "401":
            case "403":
            case "404":
                ThrowToast({
                    message: getRandomMessage(guardMessages[toastType]),
                    state: toastState,
                    timeOut: 5500,
                    direction: "center",
                    timeStampView: true,
                });
                break;
            default:
                break;
        }
        document.cookie = "toastMsg=; Max-Age=0; path=/";
    }, [toastType]);
}


