import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { MisterxComponent } from './misterx/misterx.component';
import { VipComponent } from './vip/vip.component';
import { CursoComponent } from './curso/curso.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { VipOfertaComponent } from './vip-oferta/vip-oferta.component';
import { NavMenuOfertaComponent } from './nav-menu-oferta/nav-menu-oferta.component';
import { CursoOfertaComponent } from './curso-oferta/curso-oferta.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MisterxOfertaComponent } from './misterx-oferta/misterx-oferta.component';

@NgModule({
  declarations: [														
    AppComponent,
    NavMenuComponent,
    HomeComponent,
      HomeBannerComponent,
      TalkToUsComponent,
      FooterComponent,
      LandingPageComponent,
      VideoAulasComponent,
      MisterxComponent,
      VipComponent,
      CursoComponent,
      VipOfertaComponent,
      NavMenuOfertaComponent,
      CursoOfertaComponent,
      MisterxOfertaComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollModule,
    NgxSpinnerModule,
    RxReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '**', redirectTo: 'acesso' },
      { path: '', component: HomeComponent, pathMatch: 'full' }, 
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'video-aulas', component: VideoAulasComponent }, 
      { path: 'acesso', component: HomeComponent },
      { path: 'misterx', component: MisterxComponent },
      { path: 'vip', component: VipComponent },
      { path: 'curso', component: CursoComponent },
      { path: 'vip-oferta', component: VipOfertaComponent },
      { path: 'curso-oferta', component: CursoOfertaComponent },
      { path: 'misterx-oferta', component: MisterxOfertaComponent }
    ])
  ],
  providers: [NgxSpinnerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
