export const ApiRoute = (): string => {
    //Get if this is in development or production
    const dev = process.env.NODE_ENV[0] !== "p";
    //Get the url of the api
    if (dev) {
        return "http://localhost:3000";
    } else {
        return "https://portfolio-dashboard-kappa.vercel.app";
    }
}