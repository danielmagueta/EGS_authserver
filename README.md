# EGS_egs2
PChincha Store

Deploy Authentication

		Inside egsauthserver folder:
		
			Deploy Authentication Backend

				- mvn clean install (to generate target folder)
				- docker build -t <path to registry>/egs2/authserver-deployment:<version> -f Dockerfile .
				- docker push <path to registry>/egs2/authserver-deployment:<version>
				- kubectl apply -f deployment.yaml

			Deploy Authentication Database
				- kubectl apply mongo-pvc.yaml
				- kubectl apply mongo-secrets.yaml
				- docker build -t <path to registry>/egs2/mongodbauth:<version> -f Dockerfile.db .
				- docker push <path to registry>/egs2/mongodbauth:<version>
				- kubectl apply -f mongo-deployment.yaml

  
Deploy WareHouse-PChincha

		Inside WareHouse_PChincha folder:

			Backend

				 - docker build -t ImagemDoBackend -f Dockerfile .
				 - docker push ImagemDoBackend
				 - kubectl apply -f deployment.yaml


			Mongodb

				 - kubectl apply mongo-pvc.yaml
				 - kubectl apply mongo-secrets.yaml
				 - docker build -t ImagemDaMongoDB -f Dockerfile.db .
				 - docker push ImagemDaMongoDB
				 - kubectl apply -f mongo-deployment.yaml

  
Deploy Transports

		Inside transports/backend folder:

			Backend

				 - docker build -t <path to registry>/egs2/<backend_image> -f Dockerfile .
				 - docker push <path to registry>/egs2/<backend_image>
				 - kubectl apply -f ../k8s/backend-deployment.yaml

		Inside transports/k8s folder:
		
			Mongodb

				 - kubectl apply mongo-pvc.yaml
				 - kubectl apply mongo-secrets.yaml
				 - docker build -t <path to registry>/egs2/<mongo_image> -f Dockerfile.db .
				 - docker push <path to registry>/egs2/<mongo_image>
				 - kubectl apply -f mongo-deployment.yaml

		Inside transports/frontend folder:
		
			Frontend

				 - docker build -t <path to registry>/egs2/<frontend_image> -f Dockerfile .
				 - docker push <path to registry>/egs2/<frontend_image>
				 - kubectl apply -f ../k8s/frontend-deployment.yaml

