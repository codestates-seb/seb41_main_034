import { useEffect, useState } from 'react';
import { ScrollToTopButton } from '../../styles/layoutStyle';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrowIcon.svg';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);

    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <>
      {showButton && (
        <ScrollToTopButton type="button" onClick={scrollToTop}>
          <ArrowIcon />
        </ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTop;
