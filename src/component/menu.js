
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import SearchLogo from '../Image/search-icon.jpg'
import NetflixLogo from '../static/image/anime-logo-958x575.png'
function Menu({ history }){
    const searchInput = React.useRef(null)
    const [userInput, setUserInput] = useState('')
    useEffect(() => {
        if (
          document.activeElement === searchInput.current &&
          userInput.length === 0
        ) {
          history.push('/browse')
        }
        if (userInput.length > 0) history.push(`/search?q=${userInput}`)
      }, [userInput, searchInput])
      const onLogoClick = () => {
        setUserInput('')
      }
      const [isActive, setActive] = useState(true);
      const toggleClass = () => {
        setActive(!isActive);
        console.log(1)
      };
    return(
        <nav className='navigation '>
        <ul className='navigation__container'>

                    <img
                        className='navigation__container--logo'
                        src={NetflixLogo}
                        alt=''
                />
          <div className='navigation__container-link pseudo-link'>Home</div>
          <div className='navigation__container-link pseudo-link'>TV Shows</div>
          <div className='navigation__container-link pseudo-link'>Movies</div>
          <div className='navigation__container-link pseudo-link'>
            Recently Added
          </div>
          <div className='navigation__container-link pseudo-link'>My List</div>
  
          <div className='navigation__container--left'>
          <img src={SearchLogo} className='logo' onClick={toggleClass} />
            <input
              ref={searchInput}
              value={userInput}
              className={isActive ? 'navigation__container--left__input': null}
              type='text'
              placeholder='Title, genres, people'
            />
          </div>
          <div className='navigation__container-link pseudo-link'>KIDS</div>
          <div className='navigation__container-link pseudo-link'>DVD</div>
        </ul>
      </nav>

    )
}
export default Menu;