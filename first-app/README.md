

# Pod creation

Create pod

```
kubectl create -f firstapp-pod.yml
```

List pods
```
kubectl get pods
```

Get description of pod
```
kubectl describe pods firstapp-pod
```


Execute something in the container of pod
```
kubectl exec firstapp-pod -- ls -l --color /opt/app
```


Get the logs of the container in a pod
```
kubectl logs firstapp-pod
```


Attach to the console of the container in a pod
```
kubectl attach firstapp-pod
```

# Service

To be able to reach pod from outside of cluster, we need to expose it as a new Kubernetes Service.

![](https://github.com/JPLemelin/k8s-sample/raw/master/first-app/firstapp-pod-nodeport.png)

The will allocate port 30001 (default: 30000-32767), and each Node will proxy that port (the same port number on every Node) into the `firstapp-pod`. The pods seletions is done by the a selector who match labels, in this case `app=firstapp`.

```
kubectl create -f firstapp-nodeport-service.yml
```

List services
```
kubectl get services
```

Get info of services
```
kubectl describe services firstapp-service
```

Get url of service from minikube
```
minikube service firstapp-service --url
```

Go to url and you should see: "`Hello World! (v1)`"


Change the image of container of pod
```
kubectl set image pods firstapp-pod helloworld-app=jplemelin/helloworld-app:v2
```

The app will be down during the restarting time.

Go to url and you should see: "`Hello World! (v2)`"

# Remove pods and services

Delete service
```
kubectl delete services firstapp-service
```

Delete pod
```
kubectl delete pods firstapp-pod
```