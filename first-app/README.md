

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

Create service to expose pod to be reachable from outside of cluster.
```
kubectl create -f firstapp-nodeport-service.yml
```


List services
```
kubectl get services
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

Delete service
```
kubectl delete services firstapp-service
```

Delete pod
```
kubectl delete pods firstapp-pod
```