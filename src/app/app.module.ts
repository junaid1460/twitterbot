import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ProfileService} from './profile.service'
import { AppComponent } from './app.component';
import {Route,RouterModule} from '@angular/router';
import { HelpComponent } from './help/help.component';
import { RootComponent } from './root/root.component';
const routes:Route[] = [
  {path : '',component:AppComponent},
  {path:'help',component:HelpComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [RootComponent]
})
export class AppModule { }
