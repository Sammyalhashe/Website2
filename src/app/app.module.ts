// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Application imports: components/modules
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { ResumeModule } from './resume/resume.module';
import { SharedModule } from './shared/shared.module';

// Application imports: other
import { routes } from './app.routes';
import { environment } from '../environments/environment';

// external imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MainPageModule,
    ResumeModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
