## Reusable

Note that this has all the reusable components 
used in the full pages. 

Bootstrap allows immense quick customizations
of cards designs. However, a more holistic
thought approach must be considered for our
application. The structure chosen is
to build all the individual card-types to
maintain uniformity, whilst the card-group
classes will be used in the assembly 
components. The designs of both are 
important to consider in a general sense.

Card columns will be used in the `Assembly`
sections, however then we also have to briefly
see the limits let's say of having 3 or more
columns for mainly horizontal cards and the 
deformities that implies. Limits onto grids
per each of the cards is decided beforehand 
by the type of card used. However, I assume
Bootstrap does this automatically. 


#### API Data Validation
Note that data is passed as pure
functions into each of the 
components, so data validation
has to be done on the first point
of arrival of API data so that 
the system works correctly.
