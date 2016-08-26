# Laravel + Angularjs + Elixir + Nodejs


## Components 
* Laravel 5.2 
* Angular 1.5
* Nodejs (socket.io)
* Mysql 


## Features
* Standard RESTful API. 
* Standard Angular feature and guide style Angular Team.
* Chat realtime by socket.io. 

## Installation
* `git clone` reponsity 

1. Developent: 
    * Go to root forder
        * `cd ~/laravel`
    
    * Config database `.env` file

    * Create database
        * `php artisan migrate`
        
    * Open the terminal:
        * `node server.js` : run chat server 
        * Nodejs run at `port` 9000. If you change this port, you have change config to connect `socket.io` on `ChatService`.
        * Angular source code located in folder `angular`.
        
    * Open other terminal and run command:
        *  `gulp watch`
    
    * Open your browers at `http://localhost:3000`.

2. Production 
    * Follow step 1-4  on development evironment

    * Run command 
        *  `gulp --production`
    * Open your browers at `http://homestead.production`.





