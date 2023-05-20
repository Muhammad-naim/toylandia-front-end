import { useEffect } from "react"

const useTitle = (title) => {
    
    useEffect(() => {
        document.title = `${title} - Toylandia`
    },[title])
}
export default useTitle;