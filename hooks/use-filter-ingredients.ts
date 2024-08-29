import { Api } from '../services/api-client';
import { Ingredient, SpecialOffers } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';

export const useIngredients = () => {
  const [loading, setLoading] = React.useState(true);

  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
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

  const [promotions, setPromotions] = React.useState<SpecialOffers[]>([]);
  React.useEffect(() => {
    async function fetchPromotions() {
      try {
        setLoading(true);
        const promotions = await Api.promotions.getAll();
        setPromotions(promotions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPromotions();
  }, []);

  const [promotionsValue, { toggle: togglePromotions }] = useSet(new Set<number>([]));
  const [selectIngredients, { toggle: toggleIngredients }] = useSet(new Set<number>([]));
  const [valueNumber, { toggle: togglevalueNumber }] = useSet(new Set<number>([]));

  return {
    ingredients,
    loading,
    promotions,
    promotionsValue,
    togglePromotions,
    selectIngredients,
    toggleIngredients,
    valueNumber,
    togglevalueNumber,
  };
};
