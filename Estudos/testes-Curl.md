## Teste os endpoints com cURL ou Postman

### 👉 Listar dispositivos:
```sh
curl -X GET http://127.0.0.1:8000/api/devices
```

### 👉 Criar um dispositivo:
```sh
curl -X POST http://127.0.0.1:8000/api/devices \
     -H "Content-Type: application/json" \
     -d '{"name": "Dispositivo A", "type": "Sensor"}'
```

### 👉 Ver um dispositivo específico (substituir {id} pelo ID real):
```sh
curl -X GET http://127.0.0.1:8000/api/devices/{id}
```

### 👉 Atualizar um dispositivo (substituir {id} pelo ID real):
```sh
curl -X PUT http://127.0.0.1:8000/api/devices/{id} \
     -H "Content-Type: application/json" \
     -d '{"name": "Novo Nome"}'
```

### 👉 Deletar um dispositivo (substituir {id} pelo ID real):
```sh
curl -X DELETE http://127.0.0.1:8000/api/devices/{id}
```

