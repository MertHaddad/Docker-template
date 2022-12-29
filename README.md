
# Docker Template
I used Docker compose tool to run 4 services from different
containers in just one command, and volumes to store data outside the container or share data between containers. Stack : Nodejs-Express/Python-Flask/React/Vue
## Content:
- How to create nodejs/python/react/vue Docker containers.
- How to store data outside of the container.
- How to define your application stack in a file using Docker Compose to help define multi-container applications.(ideal for microservice arch.)

## Requirements:
Have Docker installed on your machine. [get-docker](https://docs.docker.com/get-docker/)
## Useful commands:

#### Pull Composed containers:
```http
  docker-compose pull
```
#### Run Composed containers :
```http
  docker-compose up
```
#### Check existing images :
```http
  docker images
```
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

#### Check compose log:
```http
  docker-compose logs -f
```
#### List all containers runnig/not runnig:
```http
  docker ps -a 
```



## How to run these 4 services on my machine at once?

Clone this repository then navigate into the directory:     
  **make sure you have Docker running on your system.*

```bash
    docker-compose pull
    docker-compose up
```
Then, you will be able to visit the projects using any browser through these ports:
http://localhost:3000 ,3001, 3002, 5000.
## Pull one or more images from Docker Hub

React Image

```bash
  docker pull merthaddad/reactjs_project
```

Nodejs Image

```bash
  docker pull merthaddad/nodejs_project
```

Vue Image

```bash
  docker pull merthaddad/vue_project
```

Python Image

```bash
  docker pull merthaddad/python_project
```


### [Visit Docker docs for more](https://docs.docker.com/)...
