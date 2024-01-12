"use client";

import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitcher = () => {
 
  const {systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger= () => {
 
    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <MdOutlineWbSunny className="w-6 h-6 text-yellow-500 " role="button" onClick={() => 
          setTheme('light')} />
      )
    }

    else {
      return (
        <FaRegMoon className="w-6 h-6 text-gray-900 " role="button" onClick={() => 
          setTheme('dark')} />
      )
    }
 };

  return (
    <>
    {renderThemeChanger()}
    </>
  );
};

export default ThemeSwitcher;