# User Information Management System

## Overview

This is a learning project for building a system where fictional users enter personal information, and an administrator can view the submitted information in a list.

The purpose of this project is not real-world operation, but learning the basics of form input, data storage, and list display.

## Purpose

- Learn how to implement form input
- Learn how to store submitted data
- Learn how to display data in an admin page
- Understand the structure of a small web application

## Input Fields

| Field | Description |
|---|---|
| Name | User's name |
| Age | User's age |
| Email | User's email address |
| Phone Number | User's phone number |
| Address | User's address |
| Job | User's job |
| Note | Additional information |

## Page Structure

### User Page

- Form for entering personal information
- Submit button

### Admin Page

- List of submitted user information

## First Goal

Allow users to submit information through a form and allow the administrator to view the submitted information

## Implementation Plan

- [x] Create README
- [ ] Decide input fields
- [ ] Create user input form
- [ ] Create data saving process
- [ ] Create admin list page

## Technologies Used

| Category | Technology |
| --- | --- |
| Frontend | HTML / CSS / JavaScript |
| Backend | Node.js / Express / TypeScript |
| Database | SQLite |
| Version Control | Git / GitHub |

## Directory Structure

```text
user-info-management/
    README.md
    package.json
    tsconfig.json
    database.db
    src/
        server.ts
        db/
            database.ts
    public/
        index.html
        admin.html
        style.css
        script.js
