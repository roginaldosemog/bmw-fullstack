# BMW Fullstack Challenge

For this challenge, a full-stack web application was developed to simulate the management of a specific BMW car rental store.

Users can manage customer registrations and rental orders for available cars.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and it connects to a mongo database that can be started with Docker.

## How to run

**System Requirements**

- Docker
- Node.js 16.14 or later.

**Steps**

First, run mongo server with docker compose:

```bash
docker compose up --build
```

Install npm:

```bash
npm install
```

Than run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To stop docker container you can run:

```bash
docker compose down
```

**Tests**

To run available tests you can use:

```bash
npm run test
```
