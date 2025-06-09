#!/bin/bash
cd /home/kavia/workspace/code-generation/travelgenie-69-11984143/travelgenie
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

