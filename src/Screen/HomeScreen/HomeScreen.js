import { FlexColumn, InnerSection ,SpinnerContainer} from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetMovies } from "../../redux/movies/moviesAction";

function HomeScreen(props) {
  const[page,setPage]= useState(1)
  const dispatch= useDispatch()
  const state= useSelector((state)=>state)
  let mov=[]
  useEffect(()=>{
    dispatch(GetMovies(page,mov))
  },[dispatch])

  const Movies= state.Movies.movies
 
  console.log(Movies)
  return (
    <FlexColumn>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg"}
      >
        <InnerHeroSection>
          <Title>Title</Title>
          <Description>
            This is just a film description to get from the api
          </Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
          {state.Movies?.isLoading?( <SpinnerContainer/>):(
              <CardsContainer>
                { Movies?.map((item)=><Card
                    to={'/movie/'+item.id+"/"+ item.title}
                    key={item.id}
                    id={item.id}
                    name={"img"}
                    img={
                      `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    }
                  />
                  )}
              </CardsContainer>
        )}

        
        <LoadMore onClick={()=>{
          setPage(page+1);
         dispatch(GetMovies(page,Movies))}}
         isLoading={state.Movies?.isLoading}>Load more...</LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;


