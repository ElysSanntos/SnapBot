## 📤 Testando no Postman

### 1️⃣ Criar um novo dispositivo

**Método:** POST  
**URL:** `http://127.0.0.1:8000/api/devices`  
**Body (JSON):**  

```json
{
  "name": "Smartphone",
  "brand": "Samsung",
  "model": "Galaxy S21"
}
```

---

### 2️⃣ Listar todos os dispositivos

**Método:** GET  
**URL:** `http://127.0.0.1:8000/api/devices`  

---

### 3️⃣ Buscar um dispositivo específico

**Método:** GET  
**URL:** `http://127.0.0.1:8000/api/devices/1`  

---

### 4️⃣ Atualizar um dispositivo

**Método:** PUT  
**URL:** `http://127.0.0.1:8000/api/devices/1`  
**Body (JSON):**  

```json
{
  "name": "Smartphone",
  "brand": "Apple",
  "model": "iPhone 15"
}
```

---

### 5️⃣ Deletar um dispositivo

**Método:** DELETE  
**URL:** `http://127.0.0.1:8000/api/devices/1`  

---

## 🖥 Testando via cURL (Terminal ou CMD)
Se preferir testar sem Postman, pode usar **cURL**:

```sh
curl -X GET http://127.0.0.1:8000/api/devices
```

