import React from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import bg3 from "../bg-3.png"
function MealPlanner() {
    const diets = ["Anything", "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo"]
    return (
        <div>

            <div style={{}}>
                <DietContainer>
                    <label>
                        Enter desired calorie:
                        <input name="firstName" />
                    </label>

                    <label>
                        Select desired diet :
                        <select name="diet">
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
                        <Link to={'/meal-planning'}>
                            Generate Meal Plan
                        </Link>
                    </TextContainer>
                </DietContainer>
                <SearchResults>
                    <div>
                        <p className='title'>Breakfast</p>
                        <RecipeCard
                            id={12}
                            title={"ABC"}
                            rimg={bg3}
                            vegetarian={true}
                            vegan={false}
                            veryHealthy={false}
                            readyInMinutes={23}
                            servings={8}
                            aggregateLikes={15}
                            cuisine={"Italian"}
                             borderradius={2}
                        />
                    </div>
                    <div>
                        <p className='title'>Lunch</p>
                        <RecipeCard
                            id={12}
                            title={"ABC"}
                            rimg={bg3}
                            vegetarian={true}
                            vegan={false}
                            veryHealthy={false}
                            readyInMinutes={23}
                            servings={8}
                            aggregateLikes={15}
                            cuisine={"Italian"}
                             borderradius={2}
                        />
                    </div>
                    <div>
                        <p className='title'>Dinner</p>
                        <RecipeCard
                            id={12}
                            title={"ABC"}
                            rimg={bg3}
                            vegetarian={true}
                            vegan={false}
                            veryHealthy={false}
                            readyInMinutes={23}
                            servings={8}
                            aggregateLikes={15}
                            cuisine={"Italian"}
                            borderradius={2}
                        />
                    </div>
                </SearchResults>
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
        justify-content: center; 
        .title{
            padding:12px;
            font-size: 1.4em;
            border-radius : 12px 12px 0px 0px;
            background-color: pink;
            margin : 0px;
            text-align:center;
        }
`
const DietContainer = styled.div`
        padding : 22px;
        border-radius: 30px;
        filter: drop-shadow(0 30px 20px rgba(206, 196, 196, 0.5));
        display : flex;
        background-color: white;
        
        align-items: center;
        justify-center : center;
        label{
            font-size: 1.5rem;
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
  cursor: pointer;
  background: linear-gradient(
    135deg,
    #f6c453 0%,
    #f1a722 100%
  );

  font-size: 1.5rem;
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
`;