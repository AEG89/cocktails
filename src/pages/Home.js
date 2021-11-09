import React from 'react'
import SearchForm from '../componants/SearchForm'
import CocktailList from '../componants/CocktailList'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home