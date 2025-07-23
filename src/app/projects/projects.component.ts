import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  showAll = false;

  projects = [
    {
      title: 'Dynamic Stock Monitoring and Alert System',
      date: 'Dec 2023 - Apr 2024',
      organization: 'Chain-Sys Corporation',
      description: 'Monitoring stocks in inventory, masked encrypted password, slickgrid, and alert notifications.',
      tech: ['Angular', 'TypeScript', 'CouchDB', 'SCSS']
    },
    {
      title: 'Website for Kalam Charitable Trust',
      date: 'Oct 2021 - Apr 2022',
      organization: 'Lady Doak College',
      description: 'Monitoring donations, displaying awards, and sending head notifications.',
      tech: ['PHP', 'ASP.Net', 'MySQL']
    },
    {
      title: 'Case Study on Online Shopping Platform',
      date: 'Sep 2023',
      organization: '',
      description: 'How Flipkart improved its online platform to compete with Amazon.',
      tech: [],
      isCaseStudy: true
    },
    {
      title: 'Book Recommendation Engine using KNN',
      date: '',
      organization: '',
      description: 'Book recommendation engine using KNN.',
      tech: ['Machine Learning']
    },
    {
      title: 'Cat and Dog Image Classifier',
      date: '',
      organization: '',
      description: 'Image classifier for cats and dogs.',
      tech: ['Machine Learning']
    },
    {
      title: 'E-Readers Learning Platform',
      date: 'Sep 2023',
      organization: '',
      description: 'Helps users read books, with a MyNotepad feature.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS']
    }
  ];

  get visibleProjects() {
    return this.showAll ? this.projects : this.projects.slice(0, 2);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
