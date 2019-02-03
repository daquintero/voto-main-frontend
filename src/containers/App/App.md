# Voto Informado Frontend

## Overall Architecture Overview

The Voto Informado Frontend has to take
into account the dynamic-data models,
designed structural containers for each of the 
different sections, and has to be extremely scalable 
to any additional functionalities that we want. This
means that we could theoretically divide the frontend between
the design of each of the pages that will be publicly
shown and the dynamic-data reusable components like cards
that fill these pages according to the data sent from the
backend. 

The ideal way to structure the components in this application
in order to make it logical and intuitive where each data model
can be found also requires to minimize the amount of models needed.
It is also known that each of the main models will have a single 
descriptive page for each full `id`. As well, the other sort of
pages that will be shown are the interactive reactive ones like
the `HomePage`, `MyVotePage`, etc. that comprise of different 
information types. Rapid expansion of functionalities is also
an important requirement. Therefore, the ideal form of separating
the components is between `Reusable` and `Assembly` of 
different components into the public pages for the users to see.
Two main folders are created to describe this with the names above.

### Reusable Components Folder
The `Reusable` components folder follows a structure in parallel to
the data models of the Backend so that `Individual` would have an
`IndividualCard`, `IndividualProfile`, etc. that is used all through
the `Assembly Individual` page that is publicly shown. Paths can be
used to identify which Card refers to what and it is better to write 
cards for each component since the data that will be sent on the 
backend will be specific for each model.

### Assembly Components Folder
These are basically the components that use the `Reusable` components
in their different forms to create the pages the user will see.

### Router Architecture
Most of the RouterArchitecture should hold the `Assembly`
component pages that will be publicly shown. A `Scratch` file
is used to build the `Reusable` components. 
The way the router architecture will be structured
will be similar to EasyDev since it seems that it
scaled particularly well for a large amount of apps. 
The Router will be separated in the form of:

```
const GeneralSection = () => (
  <Switch>
    <Route path="/this/section/is/here/component1index" component={Component1} />
    <Route path="/this/section/is/here/component2index" component={Component2} />
    <Route path="/this/section/is/here/component3index" component={Component3} />
    ...
  </Switch>
);
```

All of these `GeneralSections` will be held within a `WrappedRoutes`
React function that then appends the outer layout like the TopBar
Navigation.


### Dynamic Data Architecture

Since we will have data coming from the backend, 
there are models that will reactively be created from 
the data that is sent. For example, any 
`InformativeSnippet` or `Individual` card components
will receive certain necessary types of data. 

The repository of these Dynamic Data Models is organized as

### Redux Architecture

The app is divided into several components, and each of these components
has its own redux folder containing the action creators, actions and 
reducers for each of the specific models. All of the reducers are
united in the `<section>-redux-index.js` file and then combined in the 
`store.js` that imports them. `redux-utils` in the main `App` directory
holds the async functions used by several components actions and 
reducers in their specific sections. 

The reducer architecture follows
the patterns developed in EasyDev
and in general redux adoption in
terms of naming and positioning the
store and state.
