const changeColorMode = (mode: string): void => {
  document.documentElement.classList.add(mode);
};

const setColorModeOnInit = (): void => {
  const mode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  changeColorMode(mode);
};

const toggleColorMode = (): void => {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  changeColorMode(isCurrentlyDark ? 'light' : 'dark');
};

export { changeColorMode, setColorModeOnInit, toggleColorMode };
