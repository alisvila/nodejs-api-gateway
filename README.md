# nodejs-api-gateway
Simple api gateway

Curl Test Commands

```
curl "http://localhost:8001/ip"
```

```
curl "http://localhost:8001/get?foo1=aaa&foo2=bbb"
```

```
curl -d "freeform=a2s3" -X POST "http://localhost:8001/post"
```

```
curl -d "freeform=a2s3" -X PUT "http://localhost:8001/post"
```