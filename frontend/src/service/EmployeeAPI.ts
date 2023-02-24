export const yearsSinceStart = (start: Date) => {
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // average number of milliseconds in a year, accounting for leap years
    return Math.floor(
        (Date.now() - new Date(start).valueOf()) / millisecondsPerYear
    );
};

