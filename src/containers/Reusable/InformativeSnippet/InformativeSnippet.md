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
