# Splunk SVP Team Take Home

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
and is designed as a step whilst interviewing for the SVP Team at Splunk.

## How do I use this?

1. Clone/fork this repo locally
2. Start this app by running `docker-compose up` (install Docker if needed)
3. Create the app specified in `spec.pdf` and from the "What do I do?" section below
4. When finished, open a pull request with your changes

### What do I do?

- Create a simple 1-page app using this repo that renders sample logs from a hypothetical service.
- Spend no more than 1 hour completing the project.
- Open `spec.pdf` for a wireframe mock of what you should build, along with notes and how it should work.
- `logs.json` should be used to substitute an external API call, and represents mock Splunk logs.

## Available Scripts

In the project directory, you can run:

### `docker-compose build && docker-compose up`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

From within the docker container `docker-compose exec app`, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).