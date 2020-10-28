Example project for read config map and secret

### How to run  

First start kubernetes using minikube

```
minikube start --driver=virtualbox
```

After minikube started, run this command to flag minikube to get images from local machine:

```
eval $(minikube docker-env)
```

Now build images:

```
cd services/
docker build -t svc_rcs:v1.0.1 -f Dockerfile . 
```

Now we apply example override config from config-map.yml

```
kubectl apply -f config-map.yml
```

and last we apply the service:

```
kubectl apply -f rcs.yml
```

To view the running service:

```
minikube service rcs-app --url
```
