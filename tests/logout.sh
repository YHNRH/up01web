#!/bin/bash

curl \
	-X GET \
	-H "Content-Type: application/json" \
	-d "{ \"token\" : \"$1\" }" \
	http://127.0.0.1:8888/api/logout

echo ""