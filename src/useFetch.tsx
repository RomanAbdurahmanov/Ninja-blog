import { useEffect, useState } from 'react'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const abortCont = new AbortController()

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("couldn't fetch data from this resource")
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsLoading(false)
          setError(null)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsLoading(false)
            setError(err.message)
          }
        })
    }, 500)
    return () => abortCont.abort()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
