# MoodMusicJournalApp

## Overview
This app allows users to keep a journal with mood-based music recommendations. Users can submit entries with their mood and thoughts, which are saved in a Django-powered backend. The mobile app is built with React Native and provides a simple user interface for viewing and submitting journal entries.

## Features
- **Mood-based music recommendations**
- **Journal entry submission with mood selector**
- **Viewing past journal entries**

## Getting Started
1. **Backend (Django)**: 
   - Install requirements: `pip install -r requirements.txt`
   - Migrate database: `python manage.py migrate`
   - Run server: `python manage.py runserver`

2. **Frontend (React Native)**:
   - Install dependencies: `npm install`
   - Start the app: `npx expo start`

## Tech Stack
- **Backend**: Django, Django REST Framework
- **Frontend**: React Native, Expo
- **Database**: SQLite (for development)
