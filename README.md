# TV-SHOWS APP MADE BY JOHANDER VAZQUEZ
App for a test developed with react, nodejs and mysql

## Restore Database
After download the code in a folder, find the database backup of the following folder with the name 'tv_shows'

```
bd/tvshows
```
The database user and password are

```
user: 'root'
password: ''
```

if you want to change the database configuration, you can find it in the following path
```
conf/connection.js
```

## Installing the app
First you must open a command terminal and execute the following commands

1) For install all the nodejs and react packages

```
npm install
```

2) For execute the app, writing the following command

* In a terminal

```
npm start
```

* In other terminal

```
npm run bundle
```

3) Open a browser and put the following url

```
http://localhost:3000/
```

4) For made to login, the user and passwork are the following

```
user: test@test.com
password: 123456
```

### Recommendations
This App has basic functionality like a simple login with a user and a dashboard. For this reason it is recommendable to develop more functionalities like a complete login system with register new user, recovering passwords, roles, permissions. And the tv show detail with more information about it, a search, a pager and a functionality like the tv shows more favorites and tv shows more recommened by gender.