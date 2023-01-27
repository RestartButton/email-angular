import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
import { EmailService } from '../email.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent {
    @Input() email?: Email;

    constructor(
        private route: ActivatedRoute,
        private emailService: EmailService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getEmail();
    }

    getEmail(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.emailService.getEmail(id)
            .subscribe(mail => this.email = mail);
    }

    goBack():void {
        this.location.back();
    }
}
