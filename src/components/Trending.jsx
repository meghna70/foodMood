import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "usehooks-ts";
import RecipeCard from "./RecipeCard";
import bg7 from "../bg-7.png";

/* ---------- Splide Layout Logic ---------- */
const getSplideLayout = (matchesFirst, matches, matches_2) => {
  const gap = matchesFirst ? "0.5rem" : "0.6rem";
  // const hasGap = gap !== "0rem";

  const basePerPage = matchesFirst ? 4 : matches ? 3 : matches_2?  2: 1;
  const perPage = basePerPage;

  return { perPage, gap };
};

export default function Trending() {
  const matches = useMediaQuery("(min-width: 786px)");
  const matches_2 = useMediaQuery("(min-width: 500px)");
  const matchesFirst = useMediaQuery("(min-width: 1400px)");
  const [trending, setTrending] = useState([]);

  const { perPage, gap } = getSplideLayout(matchesFirst, matches, matches_2);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const cached = localStorage.getItem("trending");

    if (cached && cached !== "undefined") {
      setTrending(JSON.parse(cached));
      return;
    }

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await res.json();
      localStorage.setItem("trending", JSON.stringify(data.recipes));
      setTrending(data.recipes);
    } catch (err) {
      console.error("Failed to fetch trending recipes", err);
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />

      <BgWrap>
        <Img1 alt={"img1"} src={bg7} />
      </BgWrap>

      <h1>Trending</h1>

      <Splide
        options={{
          perPage,
          gap,
          arrows: true,
          pagination: false,
          drag: true,
        }}
      >
        {trending.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              rimg={recipe.image}
              vegetarian={recipe.vegetarian}
              vegan={recipe.vegan}
              veryHealthy={recipe.veryHealthy}
              readyInMinutes={recipe.readyInMinutes}
              servings={recipe.servings}
              aggregateLikes={recipe.aggregateLikes}
              cuisine={recipe.cuisines?.[0]}
            />
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

/* ---------- Styles ---------- */

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Fredoka', sans-serif;
  }
`;

const Wrapper = styled.div`
  margin: 20% 10%;

  h1 {
    margin-bottom: 1.5rem;
  }

  .splide__pagination {
    margin-top: 12px;
  }
`;

const BgWrap = styled.div`
  position: relative;
  width: 100%;
`;

const Img1 = styled.img`
  position: absolute;
  left: -18%;
  bottom: -40vh;
  z-index: -2;
  opacity: 0.6;
  transform: rotate(50deg);
  filter: drop-shadow(0 30px 20px rgba(206, 196, 196, 0.5));
   filter: blur(4px);
  @media (max-width: 800px) {
    width: 250px;
    left: -20%;
    bottom: 28%;
  }

  @media (max-width: 500px) {
    filter: blur(0.4px);
  }
`;
