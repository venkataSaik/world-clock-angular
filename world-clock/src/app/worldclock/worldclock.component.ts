import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateInfo } from '../date-info';

@Component({

  selector: 'app-worldclock',

  templateUrl: './worldclock.component.html',

  styleUrls: ['./worldclock.component.css'],

  encapsulation: ViewEncapsulation.Emulated

})

export class WorldclockComponent implements OnInit {

  private info: DateInfo;

  private city: string;

  private date: Date;

  private FullDate;

  private timeMillisec;

  private clockdata;

  private time;

  private cityname;

  private errorMessage;

  private change;

  private localTime;
   
  private count=0;
  private pattern = new RegExp("^[a-zA-Z\s]+$")
  private modify: boolean = false;


  constructor(private http: HttpClient) {

  }

  @Input() cityFromParent: String;
  @Output() getDate = new EventEmitter();
  ngOnInit() {
    this.date = new Date();
    this.cityname = "chennai"
    this.localTime = this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();

  }
private  getClockData() {
    this.errorMessage="";
  if (this.city == "" || this.city == null) {
   this.errorMessage = "enter any city name";
   this.modify=true;
   }else if(!this.pattern.test(this.city)){
     this.errorMessage=" please enter characters only"
     this.modify=true;
  }else {

      this.cityname = this.city;
      this.modify = false;
      this.http.get<DateInfo>('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&APPID=c10bb3bd22f90d636baa008b1529ee25').subscribe(data => {
        this.info = data;

        this.timeMillisec = this.info.dt;

        this.getData();

        this.date.getDay();
      },
        error => {

       this.errorMessage = "enter city not found"

        });

    }

  }

 private  getData() {

   this.timeMillisec = this.info.dt;
   this.date = new Date(this.timeMillisec * 1000)
   this.localTime = this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
   this.getday();
   this.FullDate = this.date.getDate() + " " + this.FullDate;
   this.getDate.emit(this.localTime);

  }
private  getday() {
  switch (this.date.getDay()) {
    case 1:
      this.FullDate = "Monday";

        break;

      case 2:

        this.FullDate = "Tuesday";

        break;

      case 3:

        this.FullDate = "Wednesday";

        break;

      case 4:

        this.FullDate = "Thursday";

        break;

      case 5:

        this.FullDate = "Friday";

        break;

      case 6:

        this.FullDate = "Saturday";

        break;

      case 7:

        this.FullDate = "Sunday";

        break;
      }
    }
 private local() {
   this.modify = true;

  }

}