# Short Term Rentals Demo Application

Unfinished demo of a conceptual Short Term Rentals listing management application.

## Try it out

Start the app stack using docker compose:

```sh
docker compose --profile all up
```

and navigate to http://localhost:8080 to use the web application. The API is accessible at http://localhost:8000.

## Technical Architecture

### Frontend

Users interact with the Short Term Rentals application using a frontend web app based on Vue.js.
Vue.js is a modern Javascript framework that has been succesfully used by agile teams
working with BC Gov at various ministries (examples include BC Registry Services and Groundwater
Wells and Aquifers).

The application is served by an nginx service running in OpenShift. The nginx service also acts
as a reverse proxy for backend API traffic. This allows the team to serve frontend and backend traffic
via a single subdomain.

### Backend 

The frontend application interfaces with a backend REST API developed with Python using the Django
web framework. Django is a highly popular framework used by platforms
such as Instagram, Eventbrite and Sentry, and has been used at BC Gov for the Transportation 
Fuels Reporting System, and the Groundwater Wells and Aquifers applications (FLNRO).

### Database

Application data is stored using a PostgreSQL database. PostgreSQL is widely used within BC Gov's
OpenShift platform, and patterns exist for high availability deployments and automated backups.
