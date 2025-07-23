import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
 skills = [
    { name: 'Angular', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Machine Language', level: 'Beginner' },
    { name: 'CouchDB', level: 'Beginner' }
    // 'PHP', 'ASP.Net', 'MySQL'

  ];
}
