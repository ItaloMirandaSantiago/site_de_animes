import { useRef } from "react"

export default function useDebounce(fn, delay) {

    const time = useRef(null)

    function debounceFn(...args) {
        window.clearTimeout(time.current)
        time.current = setTimeout(()=>{
            fn(...args)
        }, delay)
    }
    return debounceFn
}