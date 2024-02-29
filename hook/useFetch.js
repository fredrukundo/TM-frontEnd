import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchData = async () =>{
        setIsLoading(true)

        try {
            const response = await axios.get('http://localhost:8000/api/trips/')
            setData(response.data)
            setIsLoading(false)
            // console.log(response.data);
        } catch (error) {
            // console.log(error)
            setError(error)
        }finally{
            setIsLoading(false)
        }
    }
    

    useEffect(() =>{
        fetchData()
    }, []);

    const refetch = () =>{
        setIsLoading(true)
        fetchData();
    }

  return {data, isLoading, error, refetch}
}

export default useFetch