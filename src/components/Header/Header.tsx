import Container from '../Сontainer/Container.tsx';
import cs from "./Header.module.scss"
import { FaSearch } from 'react-icons/fa';
import Input from '../UI/Input.tsx';
import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.tsx';

interface HeaderProps {
  searchValue?:string;
  onChange?:(value:string) => void;
  showInputWrapper?: boolean;
}
const Header:FC<HeaderProps> = ({searchValue,onChange,showInputWrapper = true}) => {
  const [showInput,setShowInput] = useState<boolean>(false);
  const [isMenuOpen,setIsMenuOpen]= useState<boolean>(false);
  const showHandleClick = () =>{
    setShowInput(!showInput)
    if (onChange) {
      onChange('tesla');
    }
  }
  const setTheme = () =>{
    setIsMenuOpen(prev => !prev)
  }
  return (
    <Container className={"marginTop30"}>
      <header className={cs.header}>
        <Link to="/" className={cs.logoWrapper}>
          <div className={cs.logoRectangle}>News</div>
          <span className={cs.logoSpan}>Portal</span>
        </Link>
        <div className={cs.rightSection}>
          {showInputWrapper && <div className={cs.inputWrapper}>{
            showInput && <Input value={searchValue} onChange={onChange} type={'text'} placeholder={"Поиск"}/>
          }

            <FaSearch onClick={showHandleClick}
                      className={cs.searchIcon}
            />
          </div>}

          <div onClick={setTheme} className={`${cs.hamburger} ${isMenuOpen ? cs.open : ''}`}>
            <div className={cs.bar}></div>
            <div className={cs.bar}></div>
            <div className={cs.bar}></div>
          </div>
          {
            isMenuOpen && <HamburgerMenu/>
          }
        </div>

      </header>
    </Container>

  );
};

export default Header;