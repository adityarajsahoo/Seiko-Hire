## About the project:

The project is about building a job matching application portal that users can use to select their job preferences from a list/form available and apply for them.

Frontend: React\
Database: MongoDB\
Library: Material UI\
API Platform : Postman (to connect to MongoDB Database and to send in raw data to MongoDB)

Support: npmjs.com, jwt.io\
Referred sites:

https://formik.org/docs/examples/with-material-ui \
https://www.npmjs.com/package/yup \
https://www.npmjs.com/package/react-pro-sidebar \
https://www.npmjs.com/package/moment \
https://legacy.reactjs.org/docs/higher-order-components.html \
https://mui.com/x/react-data-grid/ \
https://www.react-google-charts.com/

## Steps to Plug and Play

Clone the project

```bash
git clone https://github.com/adityarajsahoo/Seiko-Job-Portal-Application-Project-Backend.git 
````

```bash
git clone https://github.com/adityarajsahoo/Seiko-Job-Portal-Application-Project-Frontend.git
````

Go to the project directory:

```bash
cd backend
````

Building docker image for backend:

```bash
docker build -t backend:1.0 .
````

Go to the project directory:

```bash
cd Frontend
````

Building docker image for frontend:

```bash
docker build -t frontend:1.0 .
````

Start the application using Docker Compose:

```bash
docker-compose up
````

Navigate to http://localhost:3000 in your web browser to access the application.
