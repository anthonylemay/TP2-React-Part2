import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import Categories from './meals/components/categories'
import Category from './meals/components/category'
import Meal from './meals/components/meal'
import FavoriteMeals from './favorites/components/favoriteMeals'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
          <Route index element={<Categories />} />
          <Route path="/category/:categoryName" element={<Category />}/>
          <Route path="/category/:categoryName/:mealId" element={<Meal />} />
          <Route path="/favorites" element={<FavoriteMeals />} />

      </Routes>

    </QueryClientProvider>
  );
}



export default App
