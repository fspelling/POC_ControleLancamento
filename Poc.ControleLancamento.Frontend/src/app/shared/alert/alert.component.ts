import { Component, Input, OnInit } from '@angular/core';
import { Alert, TypeAlert } from './alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() timeout = 3000;

  alertas: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.getAlert()
      .subscribe(alert => {
        if (!alert) {
          this.alertas = [];
          return;
        }

        this.alertas.push(alert);
        setTimeout(() => this.removeAlert(alert), this.timeout);
      });
  }

  removeAlert(alertRemoved: Alert) {
    const listAlert = this.alertas.filter(alertItem => alertItem != alertRemoved);
    this.alertas = listAlert;
  }

  getAlertClass(alert: Alert): string {
    if (!alert) return '';

    switch (alert.typeAlert) {
      case TypeAlert.SUCCESS:
        return 'alert alert-success';
      case TypeAlert.DANGER:
        return 'alert alert-danger';
      case TypeAlert.WARNING:
        return 'alert alert-warning';
      case TypeAlert.INFO:
        return 'alert alert-info';
    }
  }
}
