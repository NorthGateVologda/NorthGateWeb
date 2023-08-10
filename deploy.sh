#!/bin/bash

# Скрипт необходимо запустить через sudo

docker build -t northgate_frontend .
docker run --rm -d \
    --name northgate_frontend \
    --network northgatevologda \
    -p 3000:3000 \
    northgate_frontend

# Старайтесь всегда виксировать версию!
# Через месяц в latest могут внести такие изменения, которые погубят всё
# приложение и мы можем потратить очень много времени на поиск причины
