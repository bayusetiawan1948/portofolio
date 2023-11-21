import {
  House,
  ChalkboardTeacher,
  Kanban,
  AddressBook,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LargeNavbar(props) {
  const { iconWidth, isHidden } = props;
  const primaryColor = '#9BBEC8';
  const secondaryColor = '#EFEFEF';
  const [highlightedIcon, setHighlightedIcon] = useState(null);
  const [lightedText, setLightedText] = useState(primaryColor);
  const [isHover, setIsHover] = useState(true);
  const [changeStyle, setChangeStyle] = useState('');
  const [showTitle, setShowTitle] = useState('hidden');
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
  const handleIconHover = (id) => {
    setHighlightedIcon(id);
  };

  return (
    <motion.div
      className={`${isHidden} fixed top-0 left-0 h-screen ${changeStyle} flex justify-start items-center ps-4 `}
    >
      <div
        className={`relative flex flex-col justify-center items-start gap-4 h-max`}
        onMouseEnter={handlingHover}
        onMouseLeave={handlingHover}
      >
        <motion.a
          href="#"
          key={0}
          onMouseEnter={() => handleIconHover(0)}
          onMouseLeave={() => handleIconHover(9)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="my-2 flex justify-start items-center gap-2">
            <House
              size={iconWidth}
              color={highlightedIcon == 0 ? secondaryColor : primaryColor}
            />
            <p
              className={`${showTitle} text-third ${
                highlightedIcon == 0 ? 'text-white' : 'text-third'
              }`}
            >
              Home
            </p>
          </div>
        </motion.a>
        <motion.a
          href="#"
          key={1}
          onMouseEnter={() => handleIconHover(1)}
          onMouseLeave={() => handleIconHover(9)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="my-2 flex justify-start items-center gap-2">
            <ChalkboardTeacher
              size={iconWidth}
              color={highlightedIcon == 1 ? secondaryColor : primaryColor}
            />
            <p
              className={`${showTitle} text-third ${
                highlightedIcon == 1 ? 'text-white' : 'text-third'
              }`}
            >
              About
            </p>
          </div>
        </motion.a>
        <motion.a
          href="#"
          key={2}
          onMouseEnter={() => handleIconHover(2)}
          onMouseLeave={() => handleIconHover(9)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="my-2 flex justify-start items-center gap-2">
            <Kanban
              size={iconWidth}
              color={highlightedIcon == 2 ? secondaryColor : primaryColor}
            />
            <p
              className={`${showTitle} text-third ${
                highlightedIcon == 2 ? 'text-white' : 'text-third'
              }`}
            >
              Portfolio
            </p>
          </div>
        </motion.a>
        <motion.a
          href="#"
          key={3}
          onMouseEnter={() => handleIconHover(3)}
          onMouseLeave={() => handleIconHover(9)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="my-2 flex justify-start items-center gap-2">
            <AddressBook
              size={iconWidth}
              color={highlightedIcon == 3 ? secondaryColor : primaryColor}
            />
            <p
              className={`${showTitle} text-third ${
                highlightedIcon == 3 ? 'text-white' : 'text-third'
              }`}
            >
              Contact
            </p>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}
