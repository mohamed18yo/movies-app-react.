import{
  GET_MOVIES_START,GET_MOVIES_SUCCESS,GET_MOVIES_FAILED,
  GET_MOVIE_START,GET_MOVIE_SUCCESS,GET_MOVIE_FAILED
} from './moviesTypeConstent';
export const MoviesReducer = (
  initialState = {
    movies:['mm'],
    isLoading: false,
    error: "",
    theMovie:[]
  },
  action
) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return {
          ...initialState,
          isLoading: true,
      };
    case GET_MOVIES_SUCCESS:   
      return {
          ...initialState,
        movies: action.payload,
        isLoading: false,
      };
    case GET_MOVIES_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

      //Get Movie By id
    case GET_MOVIE_START:
      return {
          ...initialState,
          isLoading: true,
      };
    case GET_MOVIE_SUCCESS:   
      return {
          ...initialState,
        theMovie: action.payload,
        isLoading: false,
      };
    case GET_MOVIE_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        initialState,
      };
  }
};
