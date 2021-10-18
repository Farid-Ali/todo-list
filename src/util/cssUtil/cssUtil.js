const cssUtil = (() => {
  const toggleVisibility = (element) => {
    element.classList.toggle('display-none');
  };

  return {
    toggleVisibility,
  };
})();

export default cssUtil;
