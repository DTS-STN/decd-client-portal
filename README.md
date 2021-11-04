# DECD Client Portal POC

## Getting Started

This POC is based off of the vanilla Next.js template cloned from the DTS-STN organization which can be found [here](https://github.com/DTS-STN/next-template). In addition, their [sc-digital-centre repository](https://github.com/DTS-STN/sc-digital-centre) was used for reference/inspiration.

At a high level, TeamCity is the CI/CD configured and used to deploy to a Kubernetes cluster that is managed by Helm. The Kubernetes cluster is then hosted on Azure. The use of TeamCity and Helm allows for a Configuration as Code approach, which supports maintainability.

## Dependencies

|      |                |
| ---- | -------------- |
| Node | @LTS - 16.13.0 |

### Installation and Running the Application

1. After cloning the repository, run `npm i` to install all the package dependencies
   - If you run into any issues with this command try deleting the `package-lock.json` and run the command again
2. Build the application with `npm run build`
3. Start the application with `npm start` or a dev instance with `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contributing

In order to contribute please create a new PR off of a branch. It is required that commits are signed and atleast one other team member approves your PR before it can be merged.

Please review the [**Code Review**]() guidelines.

## Additional Useful Links

- [Next.js documentation](https://nextjs.org/docs/getting-started)
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [sc-digital-centre useful links](https://github.com/DTS-STN/sc-digital-centre#useful-links)
