import React from 'react';
import ToyHeader from './ToyHeader.js'
import SearchBar from './SearchBar.js'
import ToysContainer from './ToysContainer.js'

export default function App() {
  return (
    <div className="Main">
      <ToyHeader />
      <SearchBar />
      <ToysContainer />

    </div>
  )
}