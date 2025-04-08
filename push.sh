#!/bin/bash
files=$2
git add $files
commitMessage=$4
git commit -m "$commitMessage"
branchName=$6
git push origin $branchName