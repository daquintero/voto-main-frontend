export default (layoutMap, size, section, type) => ({
  xs: layoutMap[size].xs[section][type],
  sm: layoutMap[size].sm[section][type],
  md: layoutMap[size].md[section][type],
  lg: layoutMap[size].lg[section][type],
  xl: layoutMap[size].xl[section][type],
});
