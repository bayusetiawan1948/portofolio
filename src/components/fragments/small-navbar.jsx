import { useState } from 'react';
import {
  List,
  House,
  ChalkboardTeacher,
  Kanban,
  AddressBook,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function SmallNavbar(props) {
  const { iconWidth, isHidden } = props;
  const [removeAnimation, setRemoveAnimation] = useState('hidden');
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (nav) {
      setTimeout(() => {
        setRemoveAnimation('hidden');
      }, 1200);
    } else {
      setRemoveAnimation('');
    }
  };

  const navbarVariants = {
    open: {
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['100%', '50%', '50%', '20%', '100%'],
      transition: { duration: 1.5 },
    },
    closed: {
      rotate: [0, 270, 270, 0, 0],
      borderRadius: ['100%', '50%', '50%', '20%', '100%'],
      transition: { duration: 1.5 },
    },
  };

  const containerNav = {
    open: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const navUp = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className={isHidden}>
      <motion.div
        className={`relative bottom-1 ${removeAnimation}`}
        animate={!nav ? 'closed' : 'open'}
        variants={containerNav}
      >
        <motion.a href="#" variants={navUp}>
          <div className="bg-third rounded-full p-3 my-2">
            <House size={iconWidth} color="#205F81" />
          </div>
        </motion.a>
        <motion.a href="#" variants={navUp}>
          <div className="bg-third rounded-full p-3 my-2">
            <ChalkboardTeacher size={iconWidth} color="#205F81" />
          </div>
        </motion.a>
        <motion.a href="#" variants={navUp}>
          <div className="bg-third rounded-full p-3 my-2">
            <Kanban size={iconWidth} color="#205F81" />
          </div>
        </motion.a>
        <motion.a href="#" variants={navUp}>
          <div className="bg-third rounded-full p-3 my-2">
            <AddressBook size={iconWidth} color="#205F81" />
          </div>
        </motion.a>
      </motion.div>
      <motion.div
        className={`bg-third rounded-full p-3 ${isHidden}`}
        animate={!nav ? 'closed' : 'open'}
        variants={navbarVariants}
        onClick={handleNav}
      >
        <List size={iconWidth} color="#205F81" />
      </motion.div>
    </div>
  );
}
