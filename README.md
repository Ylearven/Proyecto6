# Proyecto6

## Medallero Español desde el 2000 hasta ahora

Proyecto6 es una base de datos en el que se pueden encontrar la cantidad de medallas y diplomas olímpicos obtenidos por los deportitas en los Juegos olímpicos desde Sidney 2000 hasta el presenta año París 2024.

# Tech

Node JS
MongoDB

# Installation

1. Clonar el repositorio
   github.com/ylearven/proyecto6.git
2. Instala las dependecias
   nodemon - express - mongoose - cors - dotenv

# EndPoints Medallero

1. Obtener todos
   GET /api/v1/medallero
2. Obtener por ID
   GET /api/v1/medallero/:id
3. Obtener por medallas o diplima
   GET /api/v1/medallero/oro/:oro
4. Crear un nuevo medallero
   POST /api/v1/medallero
5. Actualizar uno existente
   PUT /api/v1/medallero/:id
6. Eliminar medallero
   DELETE /api/v1/medallero/:id

# EndPoints JJOO

1. Obtener todos
   GET /api/v1/jjoo
2. Obtener por ID
   GET /api/v1/jjoo/:id
3. Obtener por número de atletas
   GET /api/v1/jjoo/N_Atletas/:N_Atletas
4. Crear un nuevo medallero
   POST /api/v1/jjoo
5. Actualizar uno existente
   PUT /api/v1/jjoo/:id
6. Eliminar medallero
   DELETE /api/v1/jjoo/:id

# Modelo - JJOO

Nombre: String - Nombre del Pais oficiador
Imagen:String - URL logo de los JJOO
N_atletas: Number - Número de atletas de la delegación española en los jjoo
Oro: Number - Número de medallas de oro en los jjoo
Plata: Number - Número de medallas de plata en los jjoo
Bronce: Number- Número de medallas de bronce en los jjoo
Diploma: Number- Número de diplomas en los jjoo
