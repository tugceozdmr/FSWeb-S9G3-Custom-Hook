function LocalStorageKullan() {
    const setTheme = (theme, newTheme) => {
      localStorage.setItem(theme, newTheme);
    };
  
    const getTheme = (theme) => {
      return localStorage.getItem(theme);
    };
    return [setTheme, getTheme];
  }
  
  export default LocalStorageKullan;