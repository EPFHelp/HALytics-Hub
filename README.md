# HALytics-Hub

**HALytics-Hub** is the central web server and visualization platform for the HALytics (Hook and Line Analytics Monitoring System) project. It receives real-time telemetry data from HALytics, which consists of an ESP32 microcontroller equipped with force and pressure sensors, simulating mechanical forces during landmine neutralization procedures.

The server exposes an API endpoint for the ESP32 to post sensor data, and hosts a live web dashboard for users to monitor incoming readings, view trends, and analyze safety-critical metrics in real time. This system is designed to support field testing, research, and safety evaluation of the HAL procedure through reliable and accessible telemetry.


Install the dependencies
```
npm install
```

Start the server:
```
node index.js
```


To make it accessble from anywhere, you can then set up an [ngrok tunnel](https://ngrok.com/our-product/secure-tunnels) to your localhost:
```
ngrok http 8080
```

++ Or with a [static domain](https://ngrok.com/blog-post/free-static-domains-ngrok-users) (remains the same) that you can get from your [ngrok dashboard](https://dashboard.ngrok.com/domains):
```
ngrok http --domain=<static-domain-from-ngrok> 8080
```

Retrieve the ngrok root cert
```
echo | openssl s_client -showcerts -connect <static-domain-from-ngrok>:443
```

This the ssl root cert will then be used by your esp32 (cf HALytics) to connect to the server.
