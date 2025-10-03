@echo off
echo Removing old virtual environment...
if exist .venv rmdir /s /q .venv

echo Creating new virtual environment...
py -m venv .venv

echo Activating virtual environment...
call .venv\Scripts\activate

echo Upgrading pip...
py -m pip install --upgrade pip

echo Installing clean requirements...
pip install -r requirements.txt

echo Installation complete!
echo Run: .venv\Scripts\activate to activate the environment
