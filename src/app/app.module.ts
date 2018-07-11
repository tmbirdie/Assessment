import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { MyMaterialModule } from './my-material.module';
import { CustomErrorHandler } from './shared/error-handler';

import { AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MyMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [UserService, {
    provide: ErrorHandler,
    useClass: CustomErrorHandler
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
