state = {
  openPage: {
    parentInstance: {
      id: 1,
      title: '',
    },
    relatedInstances: {
      individuals: [
        {
          id: 1,
          title: '',
        },
      ],
    },
  },
};


// Detail
connect(state => ({
  instance: state.parentInstance,
}))()


// Individuals Component
connect(state => ({
  instances: state.relatedInstances.relatedIndividuals,
}))()

