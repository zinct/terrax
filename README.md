## HOW TO RUN (Locally)

You will need:

- NodeJS 18.\* or higher https://nodejs.org/en/download/
- Internet Computer dfx CLI https://internetcomputer.org/docs/current/developer-docs/setup/install/

Install:

- clone this repository

```bash
  git clone https://github.com/zinct/terrax.git
```

- Open command terminal: Enter the commands to start dfx local server in background:

```bash
  cd terrax
  dfx start --clean --background
```

- Enter the commands to install dependencies, deploy canister and run Next.js dev server:

```bash
  npm install
  dfx deploy
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_IC_HOST`: You can obtain this value by running 'dfx start,' and it will appear as shown in the console for example "http://localhost:56691."

`NEXT_PUBLIC_TERRAX_CANISTER_ID`: You can obtain this after running 'dfx deploy', and it will appear as shown in the console for example: `be2us-64aaa-aaaaa-qaabq-cai`.

`NEXT_PUBLIC_INTERNET_IDENTITY_CANISTER_ID`: You can obtain this after running 'dfx deploy', and it will appear like the terrax example: `bd3sg-teaaa-aaaaa-qaaba-cai`.

`NEXT_PUBLIC_MAPS_API_KEY`: To obtain this, you can register on https://console.developers.google.com or use my API key for testing purposes only\
(Google Maps API key: `AIzaSyCdRzRUfbYXGhOLvo3f5KQLQOvupPY3FUA`).

## Access Your App

You can access the frontend via http://localhost:3000 for default port
