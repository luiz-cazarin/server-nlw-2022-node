# Back-end server NLW 2022 Esports
Project realized in nlw 2022, full project

## We use
* Node
* prisma

### Ad
* id
* game
* yearsPlaying
* discord
* weekDays
* hourStart
* hourEnd
* useVoiceChannel
* createAt




### first version - database

sqlite

### Use case
We can think how the routes
- Game list whith ads
- Create ads
- Ads list by game
- Search discord by ads id

### Http codes
- sucess
2
- redirect
3
- error
4
- exception
5

## Notes
whenever we work with hours or minutes data, we can store it in minutes, then change the values in the backend, example 1h = 60 minutes -> we save to the database in minutes

### Pagination request
localhost:3333/ads?page=2

### cors
we can use the library Cors to define what front-end address can use the backend
