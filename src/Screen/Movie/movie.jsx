import { FlexColumn, InnerSection, SpinnerContainer} from "../../Global.Styles";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  NavigatorSpan,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./movie.style";
import ActorCard from "../../Components/ActorCard/ActorCard";
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetMovieById } from "../../redux/movies/moviesAction";
import {  useParams } from "react-router";

function MovieScreen(props) {
  const dispatch= useDispatch()
  const params = useParams();
  const state= useSelector(state=>state)
  useEffect(()=>{
    dispatch(GetMovieById(params.id))
  },[dispatch, params.id])
  const Movie= state.Movies.theMovie
  console.log(Movie)
  return ( state.Movies.isLoading?(
<SpinnerContainer/>
  ):(
    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <NavigatorSpan>Back</NavigatorSpan>
          <NavigatorSpan>/{Movie?.title}</NavigatorSpan>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection
        img={`https://image.tmdb.org/t/p/w500${Movie?.poster_path}`}
      >
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={
                `https://image.tmdb.org/t/p/w500${Movie?.poster_path}`
              }
              alt={Movie?.title}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                {Movie?.title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                Polt
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {Movie?.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={Movie?.vote_average*10} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                {Movie?.vote_average}
                </InfoText>
              </ProgressBarContainer>{" "}
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                DIRECTOR
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                Enrico Casarosa
              </InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Actors</MoviesTitle>
        <CardsContainer>
          {Movie?.production_companies.map((item)=><ActorCard
                    key={item.id}
                    id={""}
                    name={item.name}
                    img={
                      `https://image.tmdb.org/t/p/w500${item.logo_path}`
                    }
                  />
          )}
         
        </CardsContainer>
      </InnerSection>
    </FlexColumn>
    )
  );
}

export default MovieScreen;