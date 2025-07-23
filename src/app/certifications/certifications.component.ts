import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  showAll = false;

  certifications = [
    {
      title: 'Developer and Technology Virtual Experience Programme',
      issuer: 'Accenture in India',
      date: 'Jun 2023',
      logo: 'assets/acc.jpg'
    },
    {
      title: 'Frontend Development',
      issuer: 'Tech Quest Consultancy',
      date: 'Jun 2023',
      logo: 'assets/tech_quest_consultancy_logo.jpg'
    },
    {
      title: 'EDX Verified Certificate on Python Basics for Data Science',
      issuer: 'edX',
      date: 'Apr 2023',
      logo: 'assets/edx_logo.jpg'
    },
    {
      title: 'Exploratory Data Analysis for Machine Learning',
      issuer: 'IBM',
      date: 'Feb 2023',
      logo: 'assets/ibm_logo.jpg'
    },
    {
      title: 'Agile Methodology Virtual Experience Programme',
      issuer: 'Cognizant',
      date: 'Nov 2022',
      logo: 'assets/cognizant_logo.jpg'
    },
    {
      title: 'Automation 360 RPA Essentials Student Prep',
      issuer: 'Automation Anywhere',
      date: 'Aug 2021',
      logo: 'assets/automation_anywhere_logo.jpg'
    }
  ];

  get visibleCerts() {
    return this.showAll ? this.certifications : this.certifications.slice(0, 2);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
