<h1 align="center">
  <a href="">
    <img src="/src/assets/survey.svg" alt="Project Banner Image">
  </a>
</h1>

# Survey Project

This project makes use of different form fields to get some practice with React State. I decided to make a little story from the user response.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

This project takes in responses from the user using a variety of form fields. These form fields are connected to the state.

In implementing this project, I tried to make the components stateless as much as possible which made them reusable. The data that I pass into these components I keep in a constants file. We can easily change a lot of the data used by the app just by changing the contents of our constants.

I also have some validation on the text inputs. Only letters and spaces are allowed and you can't have the same name for yourself and your pet.

All the intermediate and advanced stretch goals have been implemented. The app is also responsive. There are some elements and functionality that only show up in the mobile version, to make the app more user-friendly on a smaller screen.

### View it live

You can view the project here:
[https://kai-story.netlify.app/](https://kai-story.netlify.app/)
