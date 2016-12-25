# Gamigo Test - User login, registration, profile
# Technology - Angular 2, node js, rest api

Gamigo - Test User Registration, Login and profile 

Requirement -- Acceptance criteria:

1. A registration form is available, with fields for username, email address, birth date and
password.
2. A login form is available with fields for username and password.
3. After login the user is redirected to a page showing his account data (profile page).
4. The user can logout.
5. The profile page is not accessible after logout.
Your job is now to create an API based application using NodeJS that can be run locally by us.
We don’t expect a proper database setup so mocking the data is fine as well.

<b>Solution Front End:</b>

1- Download the zip source code into directory and unzip the source code

2- Go to directory using terminal

3- Although I have included node_modules folder.  However if any dependency missing please install it using "npm install" . Which will install all missing dependency

4-Type npm start. It will start the application in the browser. Default page will login page.
<b>[Acceptance Criteria #2]</b>

5- Clicking on Register link provided on login page will redirect the user to registration form. 
Below features can be reviewed on the registration form
http://localhost:3000/register

a)User can register for the app using this registration form.
b)Client side validation check on fields username, password, email, date of birth.
c)Email validation on email field
d)Date format validation ('YYYY-mm-dd') on field date of birth
<b>[Acceptance Criteria #1]</b>

6- After successfull registartion user is being redirected to login page with proper message dispalyed "Registration successful"

7-Now user can login to app using provided username and password. After successfull login user will be redirected to profile page. Which will display the logged in user information
<b>[Acceptance Criteria #4]</b>

8-Copy the profile url

9-Now Logout from the application using logout link provided on profile page
10-Paste the copied url in browser after logout. It will redirect the user to login message with proper message dispalyed "You must be logged in to view profile page"
<b>[Acceptance Criteria #5]</b>



<b>Solution Back End:</b>

1- For backend data storage I have used HTML local object.

2- For reviewing Rest pattern please review below file

_services=>user.service.ts

3-For Back end related work and viewing logic of  user object storage. Please review 

_helpers=fake-backend.ts

