import { useEffect } from "react"


const useDocTitle = (title) => {
  useEffect(() => {
    document.title = title
  })
}

export default useDocTitle
