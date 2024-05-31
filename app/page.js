'use client'

import React, {useState, useEffect, useRef} from 'react'
import MyTreasure from './components/windowComponents/MyTreasure'
import Resume from './components/windowComponents/Resume'
import Projects from './components/windowComponents/Projects'
import Readme from './components/windowComponents/Readme'
import Portfolio from './components/windowComponents/Portfolio'
import Trash from './components/windowComponents/Trash'
import Window from './components/Window'
import BottomBar from './components/desktopComponents/BottomBar'
import Navbar from './components/desktopComponents/Navbar'
import Desktop from './components/desktopComponents/Desktop'
import Nothing from './components/windowComponents/Nothing'

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [currentWindow, setCurrentWindow] = useState('readme')
  

  const updateWindowState = (state) => {
    setCurrentWindow(state)
  }

  const renderWindowContent = () => {
    switch (currentWindow) {
      case 'readme':
        return <Readme />;
      case 'resume':
        return <Resume />;
      case 'treasure':
        return <MyTreasure />;
      case 'projects':
        return <Projects />;
      case 'portfolio':
        return <Portfolio />;
      case 'trash':
        return <Trash />;
      default:
        return <Nothing />;
    }
  };



  
  return (
    <div>
      <Navbar />
      <Desktop updateWindow = {updateWindowState} />


      {
        isModalOpen && (
          <Window currentWindow={currentWindow}>
            {
              renderWindowContent()                
            }
          </Window>  
      )}

      <BottomBar />
    </div>
  )
}

export default Page
