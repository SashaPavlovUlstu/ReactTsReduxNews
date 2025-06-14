import cs from "./HamburgerMenu.module.scss"
import { useDispatch} from 'react-redux';
import { setTheme } from '../../store/reducers/ThemeSLice.ts';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux.ts';

const HamburgerMenu = () => {

  const dispatch = useDispatch()
  const theme = useAppSelector(state => state.theme.current)
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  const changeTheme = () =>{
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme))
    console.log(newTheme)
  }
  return (
    <div className={cs.menu}>
      <ul>
      <li>
        <button onClick={changeTheme} >
          Theme
        </button>
      </li>
    </ul>
    </div>
  );
};

export default HamburgerMenu;