import React from 'react'

const BottomBar = () => {
  const dropDownAction = (toOpen, itemName) => {
    if (toOpen) {
      document.getElementById(itemName).classList.remove('hidden')
      document.getElementById(itemName).classList.add('flex')
    } else {
      document.getElementById(itemName).classList.remove('flex')

      document.getElementById(itemName).classList.add('hidden')
    }
  } 

  return (
    <div>
      <div className='fixed w-[98vw] bottom-2 left-2/4 -translate-x-2/4 bg-[#010180] text-white retrogaming text-lg flex items-center justify-between'>
      <ul className='flex w-5/12 items-center justify-start gap-20 ml-20'>
        <li>
          <img src='assets/icons/computer_explorer.png' alt='computer_explorer' width={35}/>
        </li>
        <li 
            onMouseEnter={() => {
              dropDownAction(true, "work")
            }}
            onMouseLeave={() => {
              dropDownAction(false, "work")
            }}
            className='relative dropDownHeader py-3 px-6'
        >WORK
          <ul
            id='work'
            className='hidden dropdown w-max flex-col absolute top-full left-0 bg-[#c0c0c0] text-black'>
            <li>Personal</li>
            <li>ISTE</li>
          </ul>
        </li>
        <li 
            onMouseEnter={() => {
              dropDownAction(true, "social")
            }}
            onMouseLeave={() => {
              dropDownAction(false, "social")
            }}        

            className='relative dropDownHeader py-3 px-6'
        >
          SOCIAL
          <ul
            id='social'
            className='hidden dropdown w-max flex-col absolute top-full left-0 bg-[#c0c0c0] text-black'>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>            
        </li>
        <li 
            onMouseEnter={() => {
              dropDownAction(true, "fav")
            }}
            onMouseLeave={() => {
              dropDownAction(false, "fav")
            }}        
            className='relative dropDownHeader py-3 px-7'
        >
          FAVOURITES
          <ul
            id='fav'
            className='hidden dropdown w-max flex-col absolute top-full left-0 bg-[#c0c0c0] text-black'>
            <li>Youtubers</li>
            <li>Tech</li>
            <li>College Moments</li>
            <li>People</li>
          </ul>        
        </li>
      </ul>
      <p className='mr-10'>
        &copy; Mehul&apos;s PC
      </p>
    </div>
    </div>
  )
}

export default BottomBar
