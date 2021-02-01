#!/bin/bash

curl \
	-X GET \
	-H "Content-Type: application/json" \
	-d '{ "login" : "vasya", "password" : "123321" }' \
	http://127.0.0.1:8888/api/login

echo ""
