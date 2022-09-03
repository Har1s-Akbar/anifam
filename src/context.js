import React ,{useState, useEffect, useContext} from "react";
import axios from 'axios'

const AppContext = React.createContext();

export const ContextProvider = ({children}) => {
    const [episodes, setEpisodes] = useState([])
    let [pageCount, setPageCount] = useState(1)
    

    const options = {
        method: 'GET',
        url: 'https://gogoanime2.p.rapidapi.com/recent-release',
        params: {type: '1', page: `${pageCount}`},
        headers: {
          'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
          'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
        }
      };
      
      useEffect(()=> {
      axios.request(options).then(function (response) {
        setEpisodes(response)
    }).catch(function (error) {
        console.error(error);
    });
      },[pageCount])

    const [loading, setLoading] = useState(false)
    return <AppContext.Provider value={{loading, episodes, setPageCount, pageCount}}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}