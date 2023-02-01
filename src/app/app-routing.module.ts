import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { InboxComponent } from './inbox/inbox.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
    { path: '', redirectTo: '/inbox', pathMatch: 'full' },
    { path: 'inbox', component: InboxComponent },
    { path: 'detail/:id', component: EmailDetailComponent },
    { path: 'draft', component: WriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
