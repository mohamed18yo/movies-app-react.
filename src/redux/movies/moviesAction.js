



import{
    GET_MOVIES_START,GET_MOVIES_SUCCESS,GET_MOVIES_FAILED,
    GET_MOVIE_START,GET_MOVIE_SUCCESS,GET_MOVIE_FAILED
} from './moviesTypeConstent';
import axios from 'axios';



export const GetMovies=(page,lastState)=>{
    
    const url =`https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${page}`
    return async (dispatch,getState)=>{ 
        dispatch({
            type: GET_MOVIES_START
        })
           
        try {
            const res= await axios.get(url)
            const Data= [...lastState , ...res.data.results ]
            console.log('new state',Data)
            dispatch({
                type: GET_MOVIES_SUCCESS,
                payload: Data
            })
        } catch (e) {
            dispatch({
                type: GET_MOVIES_FAILED,
                payload: e?.res?.data?.message
            })
        }
    }
}

export const GetMovieById=(id)=>{
    return async (dispatch)=>{
        dispatch({
            type: GET_MOVIE_START
        })
           const url=`https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187`
        try {
            const res= await axios.get(url)
            console.log(res)
            dispatch({
                type: GET_MOVIE_SUCCESS,
                payload: res.data
            })
        } catch (e) {
            dispatch({
                type: GET_MOVIE_FAILED,
                payload: e?.res?.data?.message
            })
        }
    }
}