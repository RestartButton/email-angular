import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
    { path: '', redirectTo: '/inbox', pathMatch: 'full' },
    { path: 'inbox', component: InboxComponent },
    { path: 'detail/:id', component: EmailDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
