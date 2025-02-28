## Teste os endpoints com cURL ou Postman

### 👉 Listar dispositivos:
```sh
curl -X GET http://127.0.0.1:8000/api/devices
```

### 👉 Criar um dispositivo:
```sh
curl -X POST http://127.0.0.1:8000/api/devices \
     -H "Content-Type: application/json" \
     -d '{"name": "Dispositivo A", "location": "Escritório", "purchase_date": "2024-01-15", "in_use": true}'

```
### Este endpoint cria um novo dispositivo. Os campos obrigatórios são:

- name: Nome do dispositivo.
- location: Local onde o dispositivo está alocado.
- purchase_date: Data de compra do dispositivo (formato YYYY-MM-DD).
- in_use: Indica se o dispositivo está em uso (true ou false).

### 👉 Ver um dispositivo específico (substituir {id} pelo ID real):
```

curl -X GET http://127.0.0.1:8000/api/devices/{id}

```

Este endpoint retorna os detalhes de um dispositivo específico, substituindo {id} pelo ID do dispositivo.

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

