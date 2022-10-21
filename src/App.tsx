import { useState } from 'react'

const App = () => (
  <div className="App">
    <div>
      <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" placeholder='Choose a flavor'/>

      <datalist id="ice-cream-flavors">
          <option value="Chocolate" />
          <option value="Coconut" />
          <option value="Mint" />
          <option value="Strawberry" />
          <option value="Vanilla" />
      </datalist>
    </div>
  </div>
)

export default App
