#!/bin/bash
git add .
message=$2
git commit -m message
branchName=$4
git push origin branchName