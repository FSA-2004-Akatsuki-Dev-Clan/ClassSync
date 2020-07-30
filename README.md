# ClassSync 
*A Real-Time Engagement Monitoring Web App for Remote K-12 Classrooms*

Goal: To provide educators an easy-to-use browser-based tool for tracking actionable data on students’ activity during live remote classroom sessions.

This was a group capstone project at Fullstack Academy in NYC!

Creators: Alex Bangiyev, Barish Poole, Charles Pan, Joel McGill

Video Demo: https://www.youtube.com/watch?v=Kg7UTfmFRIo

Latest Production Link: https://classsync.herokuapp.com

Default teacher login to try out live sessions and examine past data: 
- kylalara1@gmail.com, password: 123

Student logins:  
- pierreparkes1@gmail.com, pw 123
- omarmartin1@gmail.com, pw 123
- mindycain1@gmail.com, pw 123

You can simulate a session locally by logging in as the teacher in one tab and a student in another incognito window. Or hold fully remote sessions with multiple students logged in on separate machines.

At this time the app is optimized for and most functional on Google Chrome. We plan to continue testing and expand compatibility to all major browsers as we build out this project.

## Tech Stack/Core Dependencies

- React + Redux, Node.js, Express, PostgreSQL, Sequelize
- [Socket.io](https://socket.io/)
- [Chart.js](https://www.chartjs.org/)
- [Web Speech API](https://wicg.github.io/speech-api/)
- [face-api.js](https://github.com/justadudewhohacks/face-api.js/)
- [Material-UI](https://material-ui.com/)
- [react-modal](http://reactcommunity.org/react-modal/)

## Local Setup
```
git clone https://github.com/FSA-2004-Akatsuki-Dev-Clan/ClassSync
```
```
npm install
```
Create PostgreSQL database:
```
createdb class-sync
```
Start developer environment with local server and webpack:
```
npm run start-dev
```
Seed database with default teacher, students, and dummy past session data:
```
npm run seed
```
If you want to run the server and/or webpack separately, you can also npm run start-server and npm run build-client.

Visit http://localhost:8080 to start trying out live sessions! Default logins and passwords same as listed above under the production link 

## Authors

Barish Poole | Joel McGill | Charles Pan | Alex Bangiyev

Copyright (c) July 2020
