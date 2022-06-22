# EGS_egs2
PCincha Store

Deploy Authentication Backend

Inside egsauthserver folder:
- mvn clean install (to generate target folder)
- docker build -t <path to registry>/egs2/authserver-deployment:<version> -f Dockerfile .
- docker push <path to registry>/egs2/authserver-deployment:<version>
- kubectl apply -f deployment.yaml

Deploy Authentication Backend

Inside egsauthserver folder:
- kubectl apply mongo-pvc.yaml
- kubectl apply mongo-secrets.yaml
- docker build -t <path to registry>/egs2/mongodbauth:<version> -f Dockerfile.db .
- docker push <path to registry>/egs2/mongodbauth:<version>
- kubectl apply -f mongo-deployment.yaml
  
  
  Deploy WareHouse-PCincha
  
      Deploy backend

    docker build -t ImagemDoBackend -f Dockerfile .
    docker push ImagemDoBackend
    kubectl apply -f deployment.yaml


    Deploy Mongodb

    -kubectl apply mongo-pvc.yaml
    -kubectl apply mongo-secrets.yaml
    -docker build -t ImagemDaMongoDB -f Dockerfile.db .
    -docker push ImagemDaMongoDB
    -kubectl apply -f mongo-deployment.yaml

