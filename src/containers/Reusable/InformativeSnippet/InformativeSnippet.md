## Informative Snippet

The informative snippet
reusable section is separated
in the components that are used
on the main page though in 
different forms.

The first component is the 
InformativeSnippetCard that takes
position and info (server data)
into it. The position serves for
the higher level components that 
use the Card such as 
InformativeSnippetCardGrid.

`CardGrid` basically works as the
wrapper component of lower level
`Card` Components so that the 
props of `CardGrid` input arrays 
of `InformationalSnippet` 
model data, whilst it can handle
pagination in the `CardGrid`
component by itself. 


Note that thge `date` are the
submission dates.


### Redux Actions
Related Informative Snippets takes
in the parent container and label
and returns the required informative
snippets.

### Card Grid
The card grid takes in as props an array
of objects of informative snippets and
returns a collection of objects in a 
grid-like manner that is specifically
custom for each of the mobile responsive
approaches. Basically, it
controls the layout approach in an a 
imperative functional approach from 
props. 

The `LayoutMap` controls the positining
of the objects via server requests and 
data. Each `LayoutMap.jsx` is in the `styling`
folder. It controls the numerical values of the 
Bootstrap Columns and varys them accordingly to
any defined pattern. The defined patterns are 
`full` and `half` for `InformativeSnippetCards`.
