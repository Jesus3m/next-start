import { useEffect } from 'react'

export const useTitle: (title: string)=>void = (title) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.title = title
    }
  }, [title])
}
