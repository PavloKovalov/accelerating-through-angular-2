import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'racing-app',
  template: '<h1>{{heading}}</h1>'
})
class AppComponent {
  heading = "Ultra Racing Schedule"
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic()
    .bootstrapModule(AppModule);
