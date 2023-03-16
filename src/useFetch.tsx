import React, { useEffect, useState } from 'react'

function useFetch(url: string) {
  const [data, setData] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
          setIsLoading(false)
          setError(err.message)
        })
    }, 500)
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
