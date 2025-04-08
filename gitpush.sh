#!/bin/bash
git add .
message=$2
echo $message
git commit -m message
# git push origin $4