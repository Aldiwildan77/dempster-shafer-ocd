const fs = require("fs");
const path = require("path");

// Define your environment variables or replace with actual values
const GOOGLE_SERVICES_JSON = process.env.GOOGLE_SERVICES_JSON || "{}";
const GOOGLE_SERVICES_PLIST = process.env.GOOGLE_SERVICES_PLIST || "{}";

// Define the directory and file paths
// eslint-disable-next-line no-undef
const credentialsDir = path.join(__dirname, "credentials");
const googleServicesJsonPath = path.join(
  credentialsDir,
  "google-services.json"
);
const googleServicesPlistPath = path.join(
  credentialsDir,
  "GoogleService-Info.plist"
);

// Create the credentials directory if it doesn't exist
if (!fs.existsSync(credentialsDir)) {
  fs.mkdirSync(credentialsDir, { recursive: true });
}

// Write the Google services JSON and PLIST to their respective files
fs.writeFileSync(googleServicesJsonPath, GOOGLE_SERVICES_JSON);
fs.writeFileSync(googleServicesPlistPath, GOOGLE_SERVICES_PLIST);

console.log("Files have been written successfully.");
