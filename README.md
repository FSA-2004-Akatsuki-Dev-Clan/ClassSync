# ClassSync: An e-Learning Engagement Suite for Remote K-12 Classrooms
https://Classync.herokuapp.com 

Goal: To provide educators a web-based tool for tracking actionable data on students’ activity and habits during live classroom sessions and home assignments.

## Setup

git clone https://github.com/FSA-2004-Akatsuki-Dev-Clan/ClassSync

npm install

createdb class-sync: create postgres database

npm run start-dev: start developer environment with local server and webpack

Visit http://localhost:8080 to fire it up locally

If you want to run the server and/or webpack separately, you can also npm run start-server and npm run build-client.

# Customize: 

Create a file called secrets.js in the project root
This file is listed in .gitignore, and will only be required in your development environment
Its purpose is to attach the secret environment variables that you will use while developing
It's very important that you not push it to Github! This information is private! Someone else may use your API keys.
Example of secrets.js file:
process.env.GOOGLE_CLIENT_ID = 'Your Google Client ID here' process.env.GOOGLE_CLIENT_SECRET = 'Your Google Client Secret here' process.env.GOOGLE_CALLBACK = '/auth/google/callback'

# Authors
Barish Poole
Joel McGill
Charles Pan
Alex Bangiyev
