import { useRef } from "react"
//tempo entre uma chamada e outra
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