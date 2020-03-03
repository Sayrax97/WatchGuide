write-host "Dropping Database"
write-host "--------------------------------------------------------------------------------"
npx sequelize db:drop
write-host "Create Database"
write-host "--------------------------------------------------------------------------------"
npx sequelize db:create
write-host "Initating migrations"
write-host "--------------------------------------------------------------------------------"
npx sequelize db:migrate
write-host "Seeding Database"
write-host "--------------------------------------------------------------------------------"
npx sequelize db:seed:all
"--------------------------------------------------------------------------------"
"-----COMPLETED-----"
