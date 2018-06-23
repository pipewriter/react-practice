#!/bin/sh
clear
git add --all
if [ $# -eq 0 ]
  then
    git commit -m "checkpoint"
else
  git commit -m $1
fi
