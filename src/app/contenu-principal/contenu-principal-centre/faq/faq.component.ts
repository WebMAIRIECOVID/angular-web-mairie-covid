import { Component, OnInit } from '@angular/core';
import { ApiChatService } from '../../../api-chat.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private apiChatService: ApiChatService) {
  }

  items:any;
  p: number = 1;


  ngOnInit() {
    
    this.apiChatService.getChat().subscribe((response) => {
      console.log(response);
      this.items = response["annonces"];
    }, (error) => {
      alert('Erreur API get annonces');
    });
    
  }

}