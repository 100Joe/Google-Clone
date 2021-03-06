import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
// import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // Live API call
  const { data } = useGoogleSearch(term);
  // Mock API
  // const data = response;

  console.log(data)

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            className='searchPage__logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt=''
          />
        </Link>
        <div className='searchPage__headerBody'>
          <Search hideButtons />
          <div className='searchPage__optionsLeft'>
            <div className="searchPage__option">
              <SearchIcon />
              <Link to='/all'>All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to='/news'>News</Link>
            </div>
            <div className="searchPageoption">
              <ImageIcon />
              <Link to='/images'>Images</Link>
            </div>
            <div className="searchPageoption">
              <LocalOfferIcon />
              <Link to='/all'>All</Link>
            </div>
            <div className="searchPageoption">
              <RoomIcon />
              <Link to='/all'>All</Link>
            </div>
            <div className="searchPageoption">
              <MoreVertIcon />
              <Link to='/all'>All</Link>
            </div>
          </div>
          <div className='searchPage__optionsRight'>

          </div>
        </div>
      </div>
      <div className='searchPage__results'>

      </div>
    </div>
  )
}

export default SearchPage
