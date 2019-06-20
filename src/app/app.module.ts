import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

import { MusicModule } from './modules/music/music.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MarkdownModule.forRoot(),
    BrowserModule, BrowserAnimationsModule, FormsModule, MusicModule, CoreModule
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
