import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
    
    emails: Email[] = [];

    constructor(private emailService: EmailService) { }

    ngOnInit(): void {
        this.getEmails();
    }

    getEmails(): void {
        this.emailService.getEmails()
            .subscribe(emails => this.emails = emails);
    }
}
