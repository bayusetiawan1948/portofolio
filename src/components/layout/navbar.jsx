import { useState } from 'react';
import LargeNavbar from '../fragments/large-navbar';
import SmallNavbar from '../fragments/small-navbar';

function Navbar(props) {
  const { iconWidth, isHidden } = props;
  const styles = isHidden ? ` ` : `fixed bottom-5 right-5`;
  return (
    <div className={`z-50 ${styles}`}>
      <SmallNavbar iconWidth={iconWidth} isHidden={isHidden ? 'hidden' : ''} />
      <LargeNavbar iconWidth={iconWidth} isHidden={!isHidden ? 'hidden' : ''} />
    </div>
  );
}

export default Navbar;
