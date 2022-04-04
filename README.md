# Hello-Foods

Live Site Link : [hello-foods](https://hello-foods.netlify.app/).

## How I create this website

1. At first I create a react app
2. Then I install all packages which are need for this app
   1. Install React Router
   2. Install React Font-awesome
   3. Install Rechart
3. After install packages then, I create a component folder and wrap all components in that folder.
4. Create a hooks folder to wrap all custom hooks.
5. Then I use router in react which was install first.
6. Then I create some fake data for questions and reviews.
   1. Question->(questions.json)->Location->public folder.
   2. Reviews->(reviews.json)->Location->public folder.
7. After creating fake data then, I fetch data using useEffect hook and store it in a state variable using useState hook. Then use map for excess all elements of an array. Because when I call my fake data it will return an array.
