import { useState } from 'react'
import './assets/css/App.css'
import SlideMenu from './components/SlideMenu'
import Clock from './components/Clock'
import { IMenuProps } from './interfaces/IMenu';

function App() {
  const [isViewFocused, changeViewFocus] = useState(true);

  const menuProps: IMenuProps = {changeViewFocus};

  return (
    <>
      <div className='main'>
        <SlideMenu {...menuProps}/>
        {
          isViewFocused ? (
            <Clock />
          ) 
          : (
            <div></div>
          )
        }
      </div>
    </>
  )
}

export default App
