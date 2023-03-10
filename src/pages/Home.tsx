import RecipeTable from 'components/RecipeTable';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeApis } from 'service/api-service';
import { setRecipes } from 'redux/redux-slice';
import { RecipeRawType, StoreValue } from 'types/recipe';
import MainLayout from '../layouts/MainLayout';
import ApexCharts from 'components/ApexCharts';

/**
 * Display cooking recipes data in the materiable table
 * Pulling data from the mock server and dispatch data into the store
 */
const Home: React.FC = () => {

  const recipes = useSelector((state: StoreValue) => state.recipeReducer.recipes)
  const dispatch = useDispatch()

  useEffect(() => {
    const getRecipes = async (): Promise<void> => {
      try {
        const recipesRes: Array<RecipeRawType> = await RecipeApis.getRecipes()
        dispatch(setRecipes(recipesRes))
      } catch (e: any) {
        console.log('Get Recipes Error : ', e.response?.data?.message)
      }
    }
    if (recipes.length === 0) {
      getRecipes()
    }
  }, [dispatch, recipes.length])

  return (
    <MainLayout>
      {/* <RecipeTable isFavorite={false} /> */}
      <ApexCharts />
    </MainLayout>
  );
};

export default Home;