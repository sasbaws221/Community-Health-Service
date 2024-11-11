# Getting started

## Step 1: Configuration

Configuration for the client component can be provided through the use of environment variables. These can be passed to the application via the use of the `.env` file in the base directory 
| Variable             | Description                                      | Value                           |
| -------------------- | ------------------------------------------------ |  ------------------------------ |
| PORT                 | the port on which to run the client              | 3001                            |
| REACT_APP_SERVER_URL | the url on which the server component is running | http://localhost:[server-port]  |

 


## Scripts


```sh
# installation of the dependencies
$ npm install

# starts the application in development mode. username "admin" and password "admin"
$ npm run start

# builds the application in production mode - available under 'build'
$ npm run build

```
