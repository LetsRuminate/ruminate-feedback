### Installation

After cloning the repo, run the following to install all packages

```
npm install
```
<!-- Will need to update this run firebase emulator  -->
Ensure you have either Firebase emulator running locally, or have the firebase configuration details from previous development team.

<!-- The set up of firebase configuration using import.meta needs to be revisited with more secure options -->
Include the firebase configuration details in `.env` file

```
VITE_API_KEY="some value"
VITE_AUTH_DOMAIN="some value"
VITE_PROJECT_ID="some value"
VITE_STORAGE_BUCKET="some value"
VITE_MESSAGING_SENDER_ID="some value"
VITE_APP_ID="some value"
VITE_MEASUREMENT_ID="some value"
```

Now run the following to have the project running locally on `http://localhost:5173/`
```
npm run build
npm run dev
```