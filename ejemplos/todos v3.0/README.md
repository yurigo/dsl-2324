# TODOS

## Introducción

Servicio para hacer CRUD de todos.

- Ver todos los todos
- Añadir un todo.
- Eliminar un todo.
- Editar todo

Endpoints:

- /todos.

## frontend

Para probar el servicio se ha habilitado un frontal: https://dsl.yurigo.dev/todo donde se tiene que indicar la url del enpoint de los todos.  por ejemplo: http://localhost:3000/todos


## old
- /getAll
- /add
- /delete
- /update
- /do
- /undo

## new rest version 
- GET /todos  ---> getall()...
- GET /todos/id ---> get(id)...
- POST /todos ---> insert(todo) // add(todo)
- PUT /todos/id ---> update(id, todo)
- DELETE /todos/id ---> delete(id)

Cambios en la anatomía de un TODO:

```json
[
  {
    "id": 1,
    "text": "Limpiar la casa",
    "done": true
  },
  {
    "id": 2,
    "text": "Limpiar el lavabo",
    "done": false
  }
]
```


