
export const onCallHandler = (response: [{'title': string, 'id': number, 'image': string}], setRecipes: (arr: any) => void) => {

  const recipes: any[] = response.reduce((a: {}[], e: any) => {
    const { title, id, image, missedIngredients, unusedIngredients } = e;
    
    a.push({ title, id, image, missedIngredients, unusedIngredients });
    return a;
  }, []);
 setRecipes(recipes)
};
