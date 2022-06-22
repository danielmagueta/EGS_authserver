# EGS_egs2
PCincha Store

	Deploy Authentication Backend

		Inside egsauthserver folder:
			Deploy Authentication Backend

				- mvn clean install (to generate target folder)
				- docker build -t path_to_registry/egs2/authserver-deployment:version -f Dockerfile .
				- docker push path_to_registry/egs2/authserver-deployment:version
				- kubectl apply -f deployment.yaml

			Deploy Authentication Database
				- kubectl apply mongo-pvc.yaml
				- kubectl apply mongo-secrets.yaml
				- docker build -t path_to_registry/egs2/mongodbauth:version -f Dockerfile.db .
				- docker push path_to_registry/egs2/mongodbauth:version
				- kubectl apply -f mongo-deployment.yaml

  
	Deploy WareHouse-PCincha

		Inside WareHouse_PChincha folder:

			Backend

				 -docker build -t ImagemDoBackend -f Dockerfile .
				 -docker push ImagemDoBackend
				 -kubectl apply -f deployment.yaml


			Mongodb

				 -kubectl apply mongo-pvc.yaml
				 -kubectl apply mongo-secrets.yaml
				 -docker build -t ImagemDaMongoDB -f Dockerfile.db .
				 -docker push ImagemDaMongoDB
				 -kubectl apply -f mongo-deployment.yaml

