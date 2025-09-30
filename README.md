🚦 Rate Limiting in Node.js

A simple rate limiting middleware for Node.js/Express to control the number of requests a client can make within a given timeframe.

🔑 Why Rate Limiting?

Rate limiting helps:

Protect APIs from abuse and denial-of-service (DoS) attacks

Prevent brute-force login attempts

Ensure fair usage across users

Maintain application performance


🛠️ Features

Easy to integrate into an Express app

Configurable limits (e.g., 100 requests per minute)

Returns 429 Too Many Requests when limit is exceeded

Works with in-memory store or can be extended to Redis


📦 Installation

Clone this repo:

git clone https://github.com/henry78u/ratelimiting.git
cd ratelimiting
npm install

▶️ Usage

1. Start the server:



node index.js

2. Send multiple requests using Postman or curl:



curl http://localhost:3000/api

3. Once the limit is exceeded, you’ll get:



429 Too Many Requests

⚙️ Configuration

Inside the middleware, you can adjust:

Time window (e.g., 1 minute, 5 minutes)

Request limit per window


Example:

100 requests per 15 minutes

10 requests per minute


📂 Project Structure

ratelimiting/
│── index.js       # Entry point
│── limiter.js     # Rate limiting middleware
│── package.json   # Project dependencies
│── README.md      # Documentation

🚀 Future Improvements

Redis-based store for distributed systems

Sliding window algorithm for smoother request handling

Config via environment variables


🤝 Contributing

Pull requests are welcome! Feel free to fork this repo and improve it.

📄 License

This project is licensed under the MIT License.


---

👉 Repo link: https://github.com/henry78u/ratelimiting
