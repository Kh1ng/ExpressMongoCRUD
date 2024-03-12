# Express, Vite and MongoDB full stack application

## Description

Just a crud app for educational purposes

## Installation

Clone the repo

```bash
git clone <repository>
cd <repository>
npm install

```

Start the DB

```bash
docker-compose -f docker-compose-dev.yml up
# optional: use mongosh to manage db
docker exec -it mongo-playground-web-db-1 mongosh
```

Start front and back end respectively

```bash
npm run dev #front
npm run start #back
```
