FROM python:3.10.4

RUN mkdir -p /server

WORKDIR /server

COPY requirements.txt /server

RUN pip install -r requirements.txt
RUN pip3 install requests

COPY . /server/backend

EXPOSE 8000 

WORKDIR /server/backend
#CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
CMD ["uvicorn", "main:app", "--host=0.0.0.0", "--reload"] 
