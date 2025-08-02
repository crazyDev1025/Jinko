import React, { useState, useEffect } from 'react';

const GoTop = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', function () {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div role="presentation" className='go-top active' onClick={scrollToTop}>
          <i className='bx bx-chevron-up' />
        </div>
      )}
    </>
  );
};

export default GoTop;
