# EGS_authserver
Authserver MicroApplication

To deploy in Kubernets:

Deploy Authentication Backend

- mvn clean install (to generate target folder)
- docker build -t authserver-deployment:<version> -f Dockerfile .
- docker push authserver-deployment:<version>
- kubectl apply -f deployment.yaml

Deploy Authentication Database (Mongodb)

- kubectl apply mongo-pvc.yaml
- kubectl apply mongo-secrets.yaml
- docker build -t mongodbauth:<version> -f Dockerfile.db .
- docker push mongodbauth:<version>
- kubectl apply -f mongo-deployment.yaml

