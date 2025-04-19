import { useEffect, useState } from "react";
import { apiClient } from "../../../infrastructure";

export function UseFetchGetDetail<T>(endPoint: string) {
  const [data1, setData] = useState<T[] | null>(null)
  // const [loading, setLoading] = useState<boolean>(true)
  // const [error, setError] = useState<Error | null>(null)

  useEffect(() =>{
    const fetchData = async() => {
      // setLoading(true)
      // setError(null)
      try {
        const respuesta = await apiClient.get<T>(endPoint)

        setData(respuesta)
        console.log(respuesta.data)
      } catch (error) {
        // setError(error as Error)
        console.error('Error:', error)
      } finally {
        // setLoading(false)
      }
    };
    fetchData();
  }, [endPoint]);

  return { data1   }
}