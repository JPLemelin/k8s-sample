
# Creation

Create configmap named `ngnix-conifg` with the config of ngnix

```
kubectl create configmap nginx-config --from-file=reverseproxy.conf
```

Let's see the configmap

```
kubectl get configmap
kubectl get configmap nginx-config -o yaml
```

Create a Pod

```
kubectl create -f nginx.yml
```

Create a Service to expose port 80 of Pod

```
kubectl create -f nginx-service.yml
```

Get url of service (with minikube)

```
minikube service helloworld-nginx-service --url
```

You can validate the response will come from nginx server
```
λ curl http://192.168.2.87:30218 -vvvvv
* Rebuilt URL to: http://192.168.2.87:30218/
*   Trying 192.168.2.87...
* TCP_NODELAY set
* Connected to 192.168.2.87 (192.168.2.87) port 30218 (#0)
> GET / HTTP/1.1
> Host: 192.168.2.87:30218
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: nginx/1.13.9
< Date: Mon, 12 Mar 2018 20:17:11 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 17
< Connection: keep-alive
< X-Powered-By: Express
< ETag: W/"11-lQyZfaOwDGE00qUDup8TvaMfKt0"
<
Hello World! (v1)* Connection #0 to host 192.168.2.87 left intact
```

# Manipulate configmap

To see the current config in the container
```
kubectl exec helloworld-nginx -c nginx -- cat /etc/nginx/conf.d/reverseproxy.conf
```

We can modified `configmap` and the file in container of pod will be updated.
```
kubectl edit configmap nginx-config
```

Let time to rollout, then:
```
kubectl exec helloworld-nginx -c nginx -- cat /etc/nginx/conf.d/reverseproxy.conf
```

# Delete

Delete Service, Pod and configmap
```
kubectl delete services helloworld-nginx-service
kubectl delete pods helloworld-nginx
kubectl delete configmap nginx-config
```