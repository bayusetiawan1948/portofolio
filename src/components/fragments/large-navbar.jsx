import {
  House,
  ChalkboardTeacher,
  Kanban,
  AddressBook,
} from '@phosphor-icons/react';
import { useState } from 'react';

export default function LargeNavbar(props) {
  const { iconWidth, isHidden } = props;
  const [isHover, setIsHover] = useState(true);
  const [isChildHover, setIsChildHover] = useState(false);
  const [changeStyle, setChangeStyle] = useState('');
  const [showTitle, setShowTitle] = useState('hidden');
  const handlingChildHover = () => setIsChildHover(!isChildHover);
  const handlingHover = () => {
    setIsHover(!isHover);
    if (isHover) {
      setChangeStyle(
        'w-96 bg-gradient-to-r from-primary from-10% to-transparent'
      );
      setShowTitle('');
    } else {
      setChangeStyle('');
      setShowTitle('hidden');
    }
  };
  const color = '#9BBEC8';
  return (
    <div
      className={`${isHidden} fixed top-0 left-0 h-screen ${changeStyle} flex justify-start ps-6`}
    >
      <div
        className={`relative flex flex-col justify-center items-start gap-4`}
        onMouseEnter={handlingHover}
        onMouseLeave={handlingHover}
      >
        <a href="#">
          <div className="my-2 flex justify-start items-center gap-2">
            <House size={iconWidth} color={color} />
            <p className={`${showTitle} text-third`}>Home</p>
          </div>
        </a>
        <a href="#">
          <div className="my-2 flex justify-start items-center gap-2">
            <ChalkboardTeacher size={iconWidth} color={color} />
            <p className={`${showTitle} text-third`}>About</p>
          </div>
        </a>
        <a href="#">
          <div className="my-2 flex justify-start items-center gap-2">
            <Kanban size={iconWidth} color={color} />
            <p className={`${showTitle} text-third`}>Portfolio</p>
          </div>
        </a>
        <a href="#">
          <div className="my-2 flex justify-start items-center gap-2">
            <AddressBook size={iconWidth} color={color} />
            <p className={`${showTitle} text-third`}>Contact</p>
          </div>
        </a>
      </div>
    </div>
  );
}
