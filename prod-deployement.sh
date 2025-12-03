#!/bin/bash

echo "Installing dependencies..."
npm i

if [ $? -ne 0 ]; then
  echo "Installing dependencies failed."
  exit 1
fi

echo "Building the project..."
npm run build

if [ $? -ne 0 ]; then
  echo "Build failed."
  exit 1
fi

echo "Copying public folder..."
mkdir .next/public && cp -r public/* .next/public

if [ $? -ne 0 ]; then
  echo "Build failed."
  exit 1
fi

echo "build completed successfully."


echo "Restarting the application with PM2..."
pm2 restart all