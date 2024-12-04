// Commit date: December 1, 2021

const fs = require("fs");
/** The sonar sweep report. */
const sonarSweepReport = fs.readFileSync("input.txt").toString("utf-8").split("\n").map(Number);
/** The amount of times the depth measurement increases. */
let depthMeasurementIncreaseAmount = 0;
/** The depth measurement of the previous loop. */
let depthMeasurementBefore = sonarSweepReport[0];
for (let i = 0; i < sonarSweepReport.length; i++) {
    /** The depth measurement of the current loop. */
    const depthMeasurementNow = sonarSweepReport[i];
    if(depthMeasurementNow > depthMeasurementBefore) {
        depthMeasurementIncreaseAmount += 1; // If the depth measurement now is higher than it was before, increase!
    }
    depthMeasurementBefore = depthMeasurementNow; // Update the previous loop measurement.
}
console.log(`Done! The answer is... ${depthMeasurementIncreaseAmount}`);