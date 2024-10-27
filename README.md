# gizil-case-study

#Objective 
3D visualization and control of shapes added to a table by the user on a canvas element.

This Project inlcudes the case study from Gizil GMBH, which inlcudes the table which conatins the shapes and shape name created user.
It also gives the user user customize the shape dimensions and the axis of the shaes.

1. A table will appear on the page to display the created shapes. At the top of the table, 
there will be a button for creating a new shape record and for rendering the records on 
the canvas. Each table entry can be deleted.
2. When the Create button is pressed, a modal will open to allow the creation of a new 
record. Records will be stored in local storage, ensuring they are preserved when the 
browser is closed and reopened.
3. When the Render button is pressed, the table and action buttons will be hidden, and a 
canvas element will appear on the screen. Within this canvas element, all the shapes 
present in the table will be rendered side by side in 3D. 
4. When a shape is clicked, its name will be displayed at the top, its dimensions can be 
changed, and it can be moved along the x, y, and z axes. 
5. When the close button located at the top right is pressed, the canvas will be hidden, 
and the table and action buttons will become visible again. 
6. If the render button inside a table entry is clicked, only that specific table entry should 
be rendered on the canvas, and the actions in step 4 should be applicable.

#Technologies 
React, threejs, Material UI elements.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
