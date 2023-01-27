import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { WriteComponent } from './write/write.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    WriteComponent,
    EmailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
