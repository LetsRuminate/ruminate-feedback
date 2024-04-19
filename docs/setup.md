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

### Firebase emulator setup 

Download firebase cli and check your version
More information about the Firebase CLI [here](https://firebase.google.com/docs/cli?_gl=1*1qvu5fs*_up*MQ..*_ga*MTU0NjM0MTQwMS4xNzEzMzYzNzAx*_ga_CW55HF8NVT*MTcxMzM2MzcwMC4xLjAuMTcxMzM2MzcwMC4wLjAuMA..#macos)

```
npm install -g firebase-tools

firebase --version
```
Login to your firebase account set up on the Ruminate project using

```
firebase login
```

Then set up firebase to use the Ruminate project

```
firebase use ruminate-feedback
```
<!-- unsure if this step is needed  -->
And initialise firebase setup with 
```
firebase init
```
You will get several options during this step, pick the options for `Firestore` and `Emulators`.

<b> NOTE: Make sure to NOT override the existing firestore rules and indexes. </b>

Once initialised, you will need to pick the emulators you want to install and finish your set up.


#### To run your firebase emulators

```
firebase emulators:start --only firestore,storage,auth
```

you can access them at `http://127.0.0.1:4000`

