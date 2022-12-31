require('dotenv').config('../../.')


const{
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} = process.env


module.exports = {
  "development": {
    "username": 'xxxx'|| DB_USERNAME,
    "password": 'xxxxx' || DB_PASSWORD,
    "database": 'todo4' || DB_NAME,
    "host": '172.17.0.1' || DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": 'xxxx'|| DB_USERNAME,
    "password": 'xxxxx' || DB_PASSWORD,
    "database": 'todo4' || DB_NAME,
    "host": 'todo4' || DB_NAME,
    "dialect": "mysql"
  },
  "production": {
    "username": 'xxxx'|| DB_USERNAME,
    "password": 'xxxxx' || DB_PASSWORD,
    "database": 'todo4' || DB_NAME,
    "host": 'todo4' || DB_NAME,
    "dialect": "mysql"
  }
}
