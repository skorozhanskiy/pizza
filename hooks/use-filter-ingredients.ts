import { Api } from '../services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  const [promotions, { toggle: togglePromotions }] = useSet(new Set<number>([]));
  const [selectIngredients, { toggle: toggleIngredients }] = useSet(new Set<number>([]));
  const [valueNumber, { toggle: togglevalueNumber }] = useSet(new Set<number>([]));

  return {
    ingredients,
    loading,
    promotions,
    togglePromotions,
    selectIngredients,
    toggleIngredients,
    valueNumber,
    togglevalueNumber,
  };
};
