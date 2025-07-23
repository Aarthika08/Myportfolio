import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  showAll = false;

  experiences = [
      {
      role: 'Software Developer',
      company: 'Accenture',
      type: 'Full Time',
      duration: 'Oct 2024 - Present · 9 mos',
      location: 'Coimbatore, Tamil Nadu, India · Remote',
      skills: 'SailpointIIQ, IAM and SailpointIDN',
      logo: 'assets/acc.jpg',
    },
      {
      role: 'Frontend Developer',
      company: 'Tech Quest Consultancy',
      type: 'Internship',
      duration: 'Apr 2023 - Apr 2023 · 1 mos',
      location: 'Chennai, Tamil Nadu, India · Remote',
      skills: 'Front-end development',
      logo: 'assets/tech_quest_consultancy_logo.jpg',
    },
    {
      role: 'Software Developer Internship',
      company: 'Chain-Sys Corporation',
      type: 'Internship',
      duration: 'Dec 2023 - Apr 2024 · 5 mos',
      location: 'Madurai, Tamil Nadu, India · Remote',
      skills: 'JavaScript, TypeScript and Angular',
      logo: 'assets/chsys.jpg',
    },
    {
      role: 'Quality Analyst',
      company: 'Ladder Media',
      type: 'Internship',
      duration: 'Aug 2022 - Sep 2022 · 2 mos',
      location: 'Bengaluru, Karnataka, India · Remote',
      skills: 'Bug Tracking, Leadership and Quality Analysis',
      logo: 'assets/qa.jpg',
    }
  ];

  get visibleExperiences() {
    return this.showAll ? this.experiences : this.experiences.slice(0, 1);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
