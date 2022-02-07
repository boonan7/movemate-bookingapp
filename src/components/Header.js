import React from 'react';


const Header = ({hText}) => {
  return <div className='header'>
      <header> 
          <h1>
              {hText}
          </h1>
      </header>
  </div>;
};

export default Header;
