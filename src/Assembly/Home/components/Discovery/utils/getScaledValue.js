export default ({ f, layerData, layerFilters = {} } = {}) => {
  if (Object.keys(layerFilters).length !== 0 && f) {
    const { party, year } = layerFilters;

    const values = layerData[parseInt(year, 10)]
      .slice(1)
      .map(g => g[party]);

    const value = layerData[parseInt(year, 10)]
      .slice(1)
      .filter(g => g.GID === f.properties.CIRCUITO)[0][layerFilters.party];

    return Math.min(255, Math.floor(((255 * value) / Math.max(...values))));
  }
  return 0;
};
