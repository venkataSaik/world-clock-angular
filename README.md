# World Clock Using Angular
Worldclock is a simple component designed using angular.

We can display  time and date of a specific city by using this component.

<p><img src="\demo-image\demoimage.PNG"></p>

**To preview demo of to do list project:** [Click here](https://stackblitz.com/edit/angular-nl8w5v-gjedaw?embed=1&file=src/app/world-clock/worldclock.component.ts&hideNavigation=1&view=preview)

## Using the complete angular project
Download the world-clock folder into your project and run the application.
### Installing

```
> npm install
```

### Run server

```
> ng serve

```
## Working Process
- when user enters a city name it will display the time,date and location 

- when user is not entering any city name, it will display error message.

- when user enters a wrong city name, it will display error message.

- For getting output after giving a city name click on submit button.

DateInfo interface is used to convert json data to interface type.

## DateInfo Interface
```
export interface DateInfo{
  
  dt:number;
  
}
```
### Input Decorator
@input is used to provide user with required input.

 @Input() cityFromParent: String;
 
 cityFromParent is the variable which will hold user input.


### Output Decorator 

<app-worldclock [cityName]="cityFromParent" [getWeatherReport]="getDataJson($event)"></app-worldclock>

getWeatherReport is the variable I have used to emit output to user.
```
getDataJson(event){
console.log("parent")
console.log(event);
}
```

This will give user with full information on entered city name.

