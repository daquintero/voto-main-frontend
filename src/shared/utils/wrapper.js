export default ({ component, wrappers }) => wrappers.reduce((output, wrapper) => wrapper(output), component);
