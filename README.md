Contents:

-How to create nodejs/python Docker container. -How to store data outside of the
container.  
-How to run multi services at the same time as one container.(ideal for
microservice arch.)

I used Docker compose tool to run more than one service from different
containers.(Nodejs-Express/Python-Flask) useful commits :  
 -build a single container:  
 docker build -t <name:version> .

-run specific container with port forwarding:  
 docker run -p 3000:3001 <container ID>

-compose more than one container:  
 docker compose up

-check compose log:  
docker compose logs -f

The best place to learn will always be the docs:  
 https://docs.docker.com/
