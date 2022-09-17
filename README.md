# Back-end
Project realized in nlw 2022, full project


### Ad
id
game
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createAt


### note
whenever I work with hours or minutes data, we can store it in minutes, then change values in the backend, example 1h = 60 minutes -> we save to database in minutes

### first version - database

sqlite

### Use case
We can think how the routes
- Game list whith ads
- Create ads
- Ads list by game
- Search discord by ads id

## Http codes

sucess
2...
redirect
3...
error
4...
exception
5...


### request page example
localhost:3333/ads?page=2

### prisma notes
We be using Prisma with SQLite
npx prisma migrate dev
> new migration

### cors
we can use the lib cors to define what front-end adress can use the backend