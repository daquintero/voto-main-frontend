export default (layoutMap, size) => ({
  xs: layoutMap[size].xs.outer.wrapper,
  sm: layoutMap[size].sm.outer.wrapper,
  md: layoutMap[size].md.outer.wrapper,
  lg: layoutMap[size].lg.outer.wrapper,
  xl: layoutMap[size].xl.outer.wrapper,
});
