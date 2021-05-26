# u10-business-idea-etsy-clone

# Kodstandard

Variable name: lowerCamelCase

Component name: PascalCase

Folder name: PascalCase

Indentering: Tabs

# Installation

## Backend

```bash
cd backend
composer install
```

1. To spin up server locally:

```bash
php artisan serve
```

Or to Use Docker to spin up server:

1. Install Sail - make sure to use pgsql when choosing installments (number 1 in choice panel)

```bash
composer require laravel/sail --dev
php artisan sail:install
./vendor/bin/sail composer install
```

2. Change the env variables in .env:
   DB_CONNECTION=pgsql
   DB_HOST=pgsql
   DB_PORT=5432

3. Start sail in Docker

```bash
./vendor/bin/sail up -d
```

## Frontend

cd frontend

npm install

npm start

Backend URL = 'https://u10-backend.herokuapp.com/'

## Dependencies

- Node 15

## To choose Node version

https://tecadmin.net/install-nvm-macos-with-homebrew/

## Todo

- change name of .env file in frontend
- add DS_Store to gitignore file
