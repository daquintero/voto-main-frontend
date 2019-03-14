// Breakpoint values taken from https://getbootstrap.com/docs/4.0/layout/grid/#grid-options
const breakpointLogic = {
  xs: width => width < 576,
  sm: width => (width >= 576) && (width < 768),
  md: width => (width >= 768) && (width < 992),
  lg: width => (width >= 992) && (width < 1200),
  xl: width => (width > 1200),
};

// When provided a width value this function will
// return an object with the Bootstrap 4 breakpoints
// as keys and a boolean as a value. Only one of the
// values will be true: the current breakpoint.
export default width => ({
  xs: breakpointLogic.xs(width),
  sm: breakpointLogic.sm(width),
  md: breakpointLogic.md(width),
  lg: breakpointLogic.lg(width),
  xl: breakpointLogic.xl(width),
});
