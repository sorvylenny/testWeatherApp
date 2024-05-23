# Test Weather App - Angular Application

This Weather Forecast application is an Angular-based project designed to fetch weather data from an API and visualize it using Chart.js. The application displays a line chart representing temperature forecasts for specific locations.

## Objective

Create an Angular app that fetches data from an API and visualizes it using Chart.js. The app should display a line chart representing the data.

## Requirements

- **Home Screen**: The home screen displays a list of weather forecasting options:
  - District of Columbia Forecast (LWX)
  - Kansas Forecast (TOP)
- **Navigation**: Each option redirects to `/weather` with the corresponding identifier. Example: `/weather/LWX`, `/weather/TOP`
- **API Fetching**: Fetch data from an API endpoint using an HTTP request in an Angular service and retrieve the forecasted temperatures from the response.
  - Kansas: `https://api.weather.gov/gridpoints/TOP/31,80/forecast`
  - Columbia: `https://api.weather.gov/gridpoints/LWX/31,80/forecast`
- **Data Parsing**: Parse the JSON response and extract the necessary data for the chart.
- **Chart Implementation**: Implement a component that renders a line chart using the Chart.js library.
- **Chart Display**: Display the chart in a visually appealing manner.
- **Chart Customization**: Customize the appearance of the chart.

### Dependencies

This project uses the following dependencies:

- [Angular](https://angular.io/): Platform for building scalable and dynamic web applications.
  - [@angular/animations](https://angular.io/api/animations) (^16.2.0)
  - [@angular/common](https://angular.io/api/common) (^16.2.0)
  - [@angular/compiler](https://angular.io/api/compiler) (^16.2.0)
  - [@angular/core](https://angular.io/api/core) (^16.2.0)
  - [@angular/forms](https://angular.io/api/forms) (^16.2.0)
  - [@angular/platform-browser](https://angular.io/api/platform-browser) (^16.2.0)
  - [@angular/platform-browser-dynamic](https://angular.io/api/platform-browser-dynamic) (^16.2.0)
  - [@angular/router](https://angular.io/api/router) (^16.2.0)
- [Chart.js](https://www.chartjs.org/): Library for creating charts (^4.4.3)
- [RxJS](https://rxjs.dev/): Library for reactive programming (~7.8.0)
- [TypeScript](https://www.typescriptlang.org/): Language for application-scale JavaScript (^5.1.3)

### Development Tools

- `@angular/cli`: Command-line interface tool for Angular development.
- `@angular-devkit/build-angular`: Angular CLI build tools.

## How to Start

To run this project locally, follow these steps:

1. Ensure you have Node.js and Angular CLI installed [Node.js](https://nodejs.org/) y [Angular CLI](https://github.com/angular/angular-cli).
2. Clone this repository to your local machine: (`https://github.com/sorvylenny/`)
3. Navigate to the project folder and run npm install to install the dependencies. `npm install`
4. Once the installation is complete, run  `ng serve` to start the development server.
5. Open your browser and visit  `http://localhost:4200/`  to view the application.
6. Deployed at the URL (`https://testweatherforescats.netlify.app/`)

### Project Structure

test-weather-app/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.component.html
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.css
│   │   ├── weather/
│   │   │   ├── weather.component.html
│   │   │   ├── weather.component.ts
│   │   │   ├── weather.component.css
│   │   ├── services/
│   │   │   ├── weather.service.ts
│   │   ├── interfaces/
│   │   │   ├── weather-country.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
└── README.md

## Build and Deployment

Run `ng build` to compile the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Author

Developed by Katherine Flores. For more information or suggestions, you can contact me at <floresmKatherine@gmail.com>.
