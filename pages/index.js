import styles from '@/styles/Home.module.css';
import Default from '@/app/layouts/Default/Default';
import DeshboardPage from '@/app/templates/Deshboard/DeshboardPage';
import ThemeContext from '@/app/libs/Context/ThemeContext';
import { faMoon, faSun  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage-state';

export default function Home() {
  const [mode, setMode] = useState(faMoon)
  const [theme,setTheme] = useLocalStorage('theme'? 'dark' : 'light')

  const switchTheme = () =>{
    if(mode === faMoon){
      setMode(faSun);
      setTheme('dark');
    }else{
      setMode(faMoon);
      setTheme('light');
    }
  }

  return (
    <Default>
      <main className={`${styles.main}`} data-theme={theme} >
        <ThemeContext.Provider value={{ mode: mode, switchTheme: switchTheme }}>
          <DeshboardPage/>
        </ThemeContext.Provider>
      </main>
    </Default>
  )
}
