import { Component, OnInit } from '@angular/core';
import { Person } from '../../datatypes/person';
import { PersonserviceService } from '../../services/personservice.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  persons: Person[];
  currentPersons: Array<Person> = [];
  currentPerson: Person;
  firstNameFilter: String ='';
  lastNameFilter: String ='';

  constructor(private personserviceService: PersonserviceService) { }

  ngOnInit() {
    this.callWebServiceGetPersonList();
  }

  callWebServiceGetPersonList() {
    this.personserviceService.getPersonList()
      .subscribe(data => {
        this.persons = data;
      }, error => {
        console.log('Error', error);
      });
  }

  reset() {
    this.callWebServiceGetPersonList();
  }

  changeFirstName() {
    this.currentPersons=[];

    if (this.firstNameFilter.length > 1) {
      for(var i=0;i<this.persons.length;i++){
        this.currentPerson= this.persons[i];

        if(this.currentPerson.firstName==this.firstNameFilter){
          this.currentPersons.push(this.currentPerson);
        }
      }

      this.persons=this.currentPersons;
    }

  }

  changeLastName() {
    this.currentPersons=[];

    if (this.lastNameFilter.length > 1) {
      for(var i=0;i<this.persons.length;i++){
        this.currentPerson= this.persons[i];

        if(this.currentPerson.lastName==this.lastNameFilter){
          this.currentPersons.push(this.currentPerson);
        }
      }

      this.persons=this.currentPersons;
    }
  }
}
