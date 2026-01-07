import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import bg3 from "../bg-3.png"
import MealCard from '../components/MealCard'
function MealPlanner() {
    const diets = ["Anything", "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo"];

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [calorie, setCalorie] = useState(null);
    const [diet, setDiet] = useState("");

    const getLocalRecipe = async () => {
        const cached = await localStorage.getItem("mealPlan");
        if (cached && cached !== "undefined") {
            console.log("Loaded from cache ✅");
            const parsed = JSON.parse(cached);
            setBreakfast(parsed.breakfast);
            setLunch(parsed.lunch);
            setDinner(parsed.dinner);
            return;
        } else {
            setBreakfast([]);
            setLunch([]);
            setDinner([]);
        }
    }
    //https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa
    const getRecipe = async (calorie, diet) => {


        // Calories split (future-proof)
        const bf_cal = calorie * 0.25;
        const l_cal = calorie * 0.4;
        const d_cal = calorie * 0.35;

        try {
            //  API calls
            const [api_b, api_l, api_d] = await Promise.all([
                fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?maxCalories=${bf_cal}&number=1&sort=random&addRecipeNutrition=true&diet=${diet}&type=breakfast&apiKey=${process.env.REACT_APP_API_KEY}`
                ),
                fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?maxCalories=${l_cal}&number=1&sort=random&addRecipeNutrition=true&diet=${diet}&type=lunch&apiKey=${process.env.REACT_APP_API_KEY}`
                ),
                fetch(
                   `https://api.spoonacular.com/recipes/complexSearch?maxCalories=${d_cal}&number=1&sort=random&addRecipeNutrition=true&diet=${diet}&type=dinner&apiKey=${process.env.REACT_APP_API_KEY}`
                )
            ]);

            const data_b = await api_b.json();
            const data_l = await api_l.json();
            const data_d = await api_d.json();

         
            setBreakfast(data_b.results);
            setLunch(data_l.results);
            setDinner(data_d.results);

            localStorage.setItem(
                "mealPlan",
                JSON.stringify({
                    breakfast: data_b.results,
                    lunch: data_l.results,
                    dinner: data_d.results,
                    timestamp: Date.now()
                })
            );

            console.log("Saved to cache 💾");
        } catch (error) {
            console.error("Meal plan fetch failed:", error);
        }
    };

    console.log("brekkieL", breakfast)
    console.log("lunchh:", lunch)

    useEffect(() => {
        getLocalRecipe();
    }, [])

    return (
        <div>

            <div style={{ fontFamily: "Raleway" }}>
                <DietContainer>
                    <label>
                        Enter desired calorie:
                        <input
                            name="calorie"
                            value={calorie}
                            type="number"
                            // min="0"
                            onChange={(e) => setCalorie(Number(e.target.value))}
                        />
                    </label>

                    <label>
                        Select desired diet :
                        <select
                            name="diet"
                            value={diet}
                            onChange={(e) => setDiet(e.target.value)}
                        >
                            {
                                diets?.map((item, index) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <TextContainer >
                        <button onClick={() => getRecipe(calorie, diet)}>
                            Generate Meal Plan
                        </button>
                    </TextContainer>
                </DietContainer>
                {breakfast && lunch && dinner && breakfast?.length > 0 && lunch?.length > 0 && dinner?.length > 0 &&
                    <SearchResults>
                        <div style={{ width: "100%" }}>
                            <p className='title breakfast'>Breakfast</p>
                            <MealCard
                                id={breakfast[0]?.id}
                                title={breakfast[0]?.title}
                                calorie={breakfast[0].nutrition.nutrients[0].amount}
                                protein={breakfast[0].nutrition.nutrients[10].amount}
                                fat={breakfast[0].nutrition.nutrients[1].amount}
                                carbohydrate={breakfast[0].nutrition.nutrients[3].amount}
                                rimg={breakfast[0].image}
                                vegetarian={breakfast[0].vegetarian}
                                vegan={breakfast[0].vegan}
                                veryHealthy={breakfast[0].veryHealthy}
                                readyInMinutes={breakfast[0].readyInMinutes}
                                servings={breakfast[0].servings}
                                aggregateLikes={breakfast[0].aggregateLikes}
                                cuisine={breakfast[0]?.cuisine ? breakfast[0]?.cuisine[0] : ""}
                                borderradius={2}
                            />
                        </div>
                        <div style={{ width: "100%" }}>
                            <p className='title lunch'>Lunch</p>
                            <MealCard
                                id={lunch[0]?.id}
                                calorie={lunch[0].nutrition.nutrients[0].amount}
                                protein={lunch[0].nutrition.nutrients[10].amount}
                                fat={lunch[0].nutrition.nutrients[1].amount}
                                carbohydrate={lunch[0].nutrition.nutrients[3].amount}
                                title={lunch[0]?.title}
                                rimg={lunch[0]?.image}
                                vegetarian={lunch[0]?.vegetarian}
                                vegan={lunch[0]?.vegan}
                                veryHealthy={lunch[0]?.veryHealthy}
                                readyInMinutes={lunch[0]?.readyInMinutes}
                                servings={lunch[0]?.servings}
                                aggregateLikes={lunch[0]?.aggregateLikes}
                                cuisine={lunch[0]?.cuisine ? lunch[0]?.cuisine[0] : ""}
                                borderradius={2}

                            />
                        </div>
                        <div style={{ width: "100%" }}>
                            <p className='title dinner'>Dinner</p>
                            <MealCard
                                id={dinner[0]?.id}
                                title={dinner[0]?.title}
                                calorie={dinner[0].nutrition.nutrients[0].amount}
                                protein={dinner[0].nutrition.nutrients[10].amount}
                                fat={dinner[0].nutrition.nutrients[1].amount}
                                carbohydrate={dinner[0].nutrition.nutrients[3].amount}
                                rimg={dinner[0].image}
                                vegetarian={dinner[0].vegetarian}
                                vegan={dinner[0].vegan}
                                veryHealthy={dinner[0].veryHealthy}
                                readyInMinutes={dinner[0].readyInMinutes}
                                servings={dinner[0].servings}
                                aggregateLikes={dinner[0].aggregateLikes}
                                cuisine={dinner[0]?.cuisine ? dinner[0]?.cuisine[0] : ""}
                                borderradius={2}
                            />
                        </div>
                    </SearchResults>

                }
            </div>
        </div>
    )
}

export default MealPlanner

const SearchResults = styled.div`
        margin: 44px 0px;
        display : flex; 
        flex-direction : row; 
        flex-wrap: wrap;
        gap: 23px;
        width:100%;
        align-items:center;
        // background-color: yellow;
        justify-content: center; 
        .title{
            padding:0.5em;
            width:10%;
            font-size: 1em;
            border-radius : 12px 12px 0px 0px;
            background-color: pink;
            margin : 0px;
            text-align:center;
            color: white;
        }
        .breakfast {
            background: #FFE000;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #799F0C, #FFE000);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #799F0C, #FFE000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        .lunch{
            background: #FDC830;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }
        .dinner{
            background: #667db6;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }
`
const DietContainer = styled.div`
        padding : 22px;
        border-radius: 30px;
        filter: drop-shadow(0 30px 20px rgba(243, 240, 240, 0.5));
        display : flex;
        background-color: white;
        
        align-items: center;
        justify-center : center;
        label{
            font-size: 1rem;
            padding:12px;
            select{
                margin: 0px 12px;
            }
            input {
                margin: 0px 12px;
            }
        }
`

const TextContainer = styled.div`
  button{
  cursor: pointer;
  background: linear-gradient(
    135deg,
    #f6c453 0%,
    #f1a722 100%
  );

  font-size: 1rem;
  border-radius: 12px;
  border-radius: 14px;
  padding: 14px 28px;
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;

   box-shadow:
    0 10px 25px rgba(241, 167, 34, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);

    transition: all 0.25s ease;

  a {
        text-decoration: none;
        color: #f8f7f7ff;
        display: inline-block;
    }

  :hover {
        transform: translateY(-2px);
        box-shadow:
        0 14px 32px rgba(241, 167, 34, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }
    :active {
        transform: translateY(0);
        box-shadow:
        0 6px 16px rgba(241, 167, 34, 0.35),
        inset 0 2px 4px rgba(0, 0, 0, 0.15);
    }
}
`;