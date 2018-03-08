# Node express hello-world app


Build and push image to registry

```

docker build https://github.com/JPLemelin/k8s-sample.git#helloworld-app-v1:helloworld-app -t helloworld-app:v1 -t jplemelin/helloworld-app:v1 

docker build https://github.com/JPLemelin/k8s-sample.git#helloworld-app-v2:helloworld-app -t helloworld-app:v2 -t jplemelin/helloworld-app:v2 -t jplemelin/helloworld-app:latest

docker push jplemelin/helloworld-app

```