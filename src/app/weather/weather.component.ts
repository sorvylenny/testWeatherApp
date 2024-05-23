import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../Service/weather.service';
import { Chart, registerables } from 'chart.js';
import { Period } from '../interface/weather-country';
Chart.register(...registerables);

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, AfterViewInit  {
  location: string | null = null;
  periods: Period[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.location = this.route.snapshot.paramMap.get('location');
  }

  ngAfterViewInit(): void {
    if (this.location) {
      this.weatherService.getForecast(this.location).subscribe(data => {
        this.periods = data.properties.periods;
        const temperatures = this.periods.map((period: Period) => period.temperature);
        const labels = this.periods.map((period: Period) => period.name);

        this.mostrarGrafico(labels, temperatures);
      });
    }
  }

  mostrarGrafico(labels: string[], data: number[]): void {
    const canvas = document.getElementById('chartLine') as HTMLCanvasElement;
    if (canvas) {
      new Chart(canvas, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: "The temperatures",
            data: data,
            borderColor: 'rgb(12, 69, 226, 1)',
            backgroundColor: 'rgb(90, 178, 255,0.2)',
            fill: true,
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            }
          }
        }
      });
    } else {
      console.error("Canvas element not found!");
    }
  }
  back(){
    this.router.navigate(['/']);
  }
}
