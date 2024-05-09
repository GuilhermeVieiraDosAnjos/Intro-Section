import { IoIosMenu, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropType from 'prop-types'


const Dropdown = ({label, isOpen, toggleDropdown, children }) => {
  return (
    <div className="relative">
        <a href="#"
        className="flex items-center gap-2 cursor-pointer hover:text-aBlack duration-300"
        onClick={toggleDropdown}>
          {label} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </a>
        {isOpen && (
          <ul className="absolute top-full left-0 bg-aWhite rounded-md shadow-lg shadow-mGray p-2 w-auto">
            {children}
          </ul>
        )}
    </div>
  );
};

Dropdown.propTypes = {
  label : PropType.string.isRequired,
  isOpen : PropType.bool.isRequired,
  toggleDropdown : PropType.func.isRequired,
  children : PropType.node.isRequired,
}

export default Dropdown
