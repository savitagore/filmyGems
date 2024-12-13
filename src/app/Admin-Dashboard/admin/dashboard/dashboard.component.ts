import { Component } from '@angular/core';
import { ChangeDetectorRef, effect, inject, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ChartModule } from 'primeng/chart';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, ButtonModule, IconFieldModule, InputIconModule, ButtonModule, ChartModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // searchValue: string | undefined;
  sidebarVisible: boolean = false;

  isSidebarVisible: boolean = true;
  searchValue: string = '';

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  data: any; // Data for the chart
  options: any; // Configuration options for the chart
  labels: { name: string; color: string }[] = []; // For countries and revenue legend
  // xAxisLabels: { name: string; color: string }[] = []; // Country labels with colors

  ngOnInit() {
    this.data = {
      labels: ['India', 'USA', 'UK', 'NZ', 'Australia', 'Canada', 'Norway', 'Dubai'],
      datasets: [
        {
          label: 'Revenue',
          data: [8000000, 10000000, 5000000, 3000000, 4000000, 3500000, 3800000, 7000000],
          backgroundColor: '#FFC107',
          borderColor: '#FFC107',
          borderWidth: 1
        }
      ]
    };

    this.labels = [
      { name: 'Countries', color: '#FF4081' },
      { name: 'Revenue', color: '#FFC107' }
    ];

    //  Define colors for each country
    //  const colors = ['#FF4081'];
    //  this.xAxisLabels = this.data.labels.map((label: string, index: number) => ({
    //   name: label,
    //   color: colors[index]
    // }));

    this.initChart();

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        // legend: {
        //   labels: {
        //     color: '#ffffff' // White text for legend
        //   }
        // },
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              return `₹ ${tooltipItem.raw.toLocaleString()}`;
            }
          }
        }
      },
      scales: {

        // x: {

        //   ticks: {
        //     color: '#ffffff', // White text for labels
            // callback: (value: any, index: number, values: any): string => {
            //   return `\u25CF ${this.data.labels[index]}`;
            // }
        //   }
        // },
        y: {
          ticks: {
            color: '#ffffff' // White text for y-axis labels
          },
          grid: {
            color: 'white', // Light white grid lines
            lineDash: [0, 0]
          }
        }
      }
    };
  }

  // 2nd polar

  basicData: any;

    basicOptions: any;

    platformId = inject(PLATFORM_ID);

    // configService = inject(AppConfigService);

    constructor(private cd: ChangeDetectorRef) {}

    // themeEffect = effect(() => {
    //     if (this.configService.transitionComplete()) {
    //         if (this.designerService.preset()) {
    //             this.initChart();
    //         }
    //     }
    // });

    // ngOnInit() {
    //     this.initChart();
    // }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.basicData = {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'By Film Advertisement',
                        data: [540, 325, 702, 620],
                        backgroundColor: [
                            'rgba(249, 115, 22, 0.2)',
                            'rgba(6, 182, 212, 0.2)',
                            'rgb(107, 114, 128, 0.2)',
                            'rgba(139, 92, 246, 0.2)',
                        ],
                        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                        borderWidth: 1,
                    },
                ],
            };

            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                },
            };
            this.cd.markForCheck()
        }
    }
}



