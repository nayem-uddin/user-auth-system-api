# User authentication backend server

This is the 2nd task of level 3 as an intern at Codveda Technologies

## Tech stack

### Language

- JavaScript

### Libraries and frameworks

- Node.js
- Express.js
- Sequelize: for database connection
- jsonwebtoken: for JWT generation
- dotenvx: for using environment variables
- cors: for Cross-Origin Resource Sharing

### DBMS

- postgres

### Platforms

- Render: for deployment
- cron-job: for preventing API from spinning down

## How to make requests

| Endpoint  | Request type | Request body                                                                                                  | Success Response                            | Failed Response               | Remarks                                                                                      |
| --------- | ------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| `/login`  | POST         | { </br> "email" : string, </br>"password" : string </br>}                                                     | {</br>"token" : string</br>}                | {</br> "error" : string</br>} | The "token" here is a JWT                                                                    |
| `/signup` | POST         | {</br> "firstName" : string, </br>"lastName" : string </br> "email" : string, </br>"password" : string </br>} | {</br>"message": "Registered successfully"} | {</br> "error" : string</br>} | -                                                                                            |
| `/:id`    | PUT          | {</br> "firstName" : string, </br>"lastName" : string </br> "email" : string, </br>}                          | {</br>"token" : string</br>}                | {</br> "error" : string</br>} | The token here is a new JWT containing the updated user details, and the "id" is the user ID |
