# cs422_web-mail-sender
Project for CS422 

**Create a new virtual environment:**
<br />
- From the root folder, run this command:
```
python -m venv venv / python3 -m venv venv
```
- Activate it (on windows):
```
venv\Scripts\activate.bat
```
- Activate it (on linux or mac):
```
source venv/bin/activate
```
<br />

**Run django web app:**
<br />
- install all dependencies:
```
pip install -r requirements.txt / pip3 install -r requirement.txt
```
- config database info in `cs300_webblog.config.local`:
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': <your database name>,
        'HOST': <your database host name>,
        'USER': <your database user name>,
        'PASSWORD': <your database password>,
    }
}
```
- run local web app _**(from root folder of the project)**_:
```
python manage.py runserver / python3 manage.py runserver
```
<br />
