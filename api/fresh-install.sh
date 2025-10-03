#!/bin/bash
echo "Removing old virtual environment..."
rm -rf .venv

echo "Creating new virtual environment..."
py -m venv .venv

echo "Activating virtual environment..."
source .venv/bin/activate

echo "Upgrading pip..."
py -m pip install --upgrade pip

echo "Installing clean requirements..."
pip install -r requirements.txt

echo "Installation complete!"
echo "Run: source .venv/bin/activate to activate the environment"
