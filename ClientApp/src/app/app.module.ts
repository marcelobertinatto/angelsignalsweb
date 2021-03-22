import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { TalkToUsComponent } from './Talk-To-Us/Talk-To-Us.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { VideoAulasComponent } from './video-aulas/video-aulas.component';

@NgModule({
  declarations: [							
    AppComponent,
    NavMenuComponent,
    HomeComponent,
      HomeBannerComponent,
      TalkToUsComponent,
      FooterComponent,
      LandingPageComponent,
      VideoAulasComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent, pathMatch: 'full' }, 
      { path: 'landing-page', component: LandingPageComponent, pathMatch: 'full' },
      { path: 'video-aulas', component: VideoAulasComponent, pathMatch: 'full' }, 
      { path: 'acesso', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
