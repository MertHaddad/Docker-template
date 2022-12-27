
# Docker Template
I used Docker compose tool to run more than one service from different
containers in just one command, and volumes to store data outside of the container or share data between containers. Stack : Nodejs-Express/Python-Flask
## Content:
- How to create nodejs/python Docker containers.
- How to store data outside of the container.
- How to define your application stack in a file using Docker Compose to help define multi-container applications.(ideal for microservice arch.)

## Requirements:
Have Docker installed on your machine. [get-docker](https://docs.docker.com/get-docker/)
## Useful commands:

#### Get the currently installed version of docker:
```http
  docker –version
```
#### Build a single container:
```http
  docker build -t name:version .
```
#### Run specific container with port forwarding:

```http
  docker run -p 3000:3001
```
#### Compose more than one container:
```http
  docker compose up
```
#### Check compose log:
```http
  docker compose logs -f
```
#### List all container including stopped container:
```http
  docker ps -a 
```



### [Visit Docker docs for more](https://docs.docker.com/)...
