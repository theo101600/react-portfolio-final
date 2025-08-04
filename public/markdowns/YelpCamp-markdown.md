# Yelp Camp

## Overview

A CRUD web application for camp sites. Users can browse, create, and review campgrounds.

![Yelp Camp Homepage ](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//YelpCamp-001.png)

## Features

- Authenticated users can create, view, edit, or delete campgrounds.
- Each listing includes title, images, description, pricing, and location.
- Users can add reviews on campgrounds and manage their own reviews.
- Campground owners can't delete reviews from others.
- Geolocation via Mapbox for handy location-based search.
- Campgrounds are displayed on a clustered map for easier browsing.
- User registration and login, implemented using Passport.js.
- Only logged-in users can create, edit, delete their own campgrounds or reviews.
- Other users’ content remains protected.

## Tech Stack

| **Category**             | **Technology / Package**                                | **Purpose / Functionality**                          |
| ------------------------ | ------------------------------------------------------- | ---------------------------------------------------- |
| **Backend Framework**    | `express`                                               | Web framework for Node.js                            |
| **Templating Engine**    | `ejs`, `ejs-mate`                                       | Render dynamic HTML pages with layouts               |
| **Database**             | `mongoose`, `connect-mongo`                             | ODM for MongoDB, and Mongo session store             |
| **Authentication**       | `passport`, `passport-local`, `passport-local-mongoose` | User authentication and session management           |
| **Session & Flash**      | `express-session`, `connect-flash`                      | Manage sessions and display flash messages           |
| **Security**             | `helmet`, `express-mongo-sanitize`, `sanitize-html`     | Secure HTTP headers, sanitize queries and HTML input |
| **Validation**           | `joi`                                                   | Schema-based input validation                        |
| **Logging**              | `morgan`                                                | HTTP request logger middleware                       |
| **Static File Upload**   | `multer`, `cloudinary`, `multer-storage-cloudinary`     | Handle and store uploaded images                     |
| **Geolocation**          | `@mapbox/mapbox-sdk`                                    | Mapbox geocoding and map API                         |
| **HTTP Method Override** | `method-override`                                       | Support PUT and DELETE methods in HTML forms         |

## Gallery

![Home page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//YelpCamp-001.png)
![Login page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//YelpCamp-002.png)
![Register page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//YelpCamp-003.png)
![All camp grounds](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//YelpCamp-004.png)
![View camp ground page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//YelpCamp-005.png)
![New camp ground page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//YelpCamp-006.png)
