# Web Portfolio - React Frontend

This is the React frontend for my web app portfolio website. It showcases my projects, my skills, and my recent blog posts. The backend is built in Ruby using Rack. For the backend, see the repo here: https://github.com/Meganmccarty/web-portfolio-ruby

You can visit the live website here: https://meganmccarty-web-portfolio.netlify.app/

You can also watch a [short walkthrough video](https://drive.google.com/file/d/1MFJLXoZNq_bhpao85qXjQo-mvAzqa93L/view?usp=sharing) of the project.

## Get your own copy
To create your own copy of this project:
1. Fork this repo
2. Click the green 'Code' button at the top right and copy the link
3. In your terminal, navigate to the directory in which to clone the repo
4. Type `git clone <copied-link>` and hit enter
5. Type `cd web-portfolio-react` and hit enter
6. Run `npm install`
7. Run `npm start`

The website should open up in a new browser tab at `http://localhost:3000`

### Configure the backend (optional)
If you want to use a blank, local database, please see the README for the backend repo: https://github.com/Meganmccarty/web-portfolio-ruby

## Features
* Displays projects in Semantic UI cards with info, tech-stacks, and links to live websites
* Displays skill icons from database
* Displays blog posts from Medium; if the post starts with an image, the image caption is removed from the description
* Contains contact form that posts to database
* Smooth scrolling when clicking the navbar links

## Resources Used
* Built with React JS
* Used [Bootstrap 4](https://getbootstrap.com/) for styling the navbar
* Used Semantic UI for the project and blog post cards, as well as the contact form
