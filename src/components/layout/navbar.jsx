import { useState } from 'react';
import LargeNavbar from '../fragments/large-navbar';
import SmallNavbar from '../fragments/small-navbar';

function Navbar() {
  const { innerWidth } = window;

  const getWidthIcon = (windowWidth) => {
    if (windowWidth >= 425) {
      return 32;
    } else {
      return 28;
    }
  };
  const [isHidden, setIsHidden] = useState(true);
  let iconWidth = getWidthIcon(innerWidth);
  const styles = isHidden ? ` ` : `fixed bottom-5 right-5`;
  return (
    <div className={`z-50 ${styles}`}>
      <SmallNavbar iconWidth={iconWidth} isHidden={isHidden ? 'hidden' : ''} />
      <LargeNavbar iconWidth={iconWidth} isHidden={!isHidden ? 'hidden' : ''} />
    </div>
  );
}

export default Navbar;
