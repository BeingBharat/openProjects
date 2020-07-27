import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  closeResult: string;
  modalOptions:NgbModalOptions;
  modalReference:any;
  name:"";
  dt=[];
city:"";
json:any;
  ngOnInit() {
   this.json= {
      "ok": true,
      "members": [{
          "id": "W012A3CDE",
          "real_name": "Egon Spengler",
          "tz": "America/Los_Angeles",
          "activity_periods": [{
              "start_time": "Feb 1 2020  1:33PM",
              "end_time": "Feb 1 2020 1:54PM"
            },
            {
              "start_time": "Mar 1 2020  11:11AM",
              "end_time": "Mar 1 2020 2:00PM"
            },
            {
              "start_time": "Mar 16 2020  5:33PM",
              "end_time": "Mar 16 2020 8:02PM"
            }
          ]
        },
        {
          "id": "W07QCRPA4",
          "real_name": "Glinda Southgood",
          "tz": "Asia/Kolkata",
          "activity_periods": [{
              "start_time": "Feb 1 2020  1:33PM",
              "end_time": "Feb 1 2020 1:54PM"
            },
            {
              "start_time": "Mar 1 2020  11:11AM",
              "end_time": "Mar 1 2020 2:00PM"
            },
            {
              "start_time": "Mar 16 2020  5:33PM",
              "end_time": "Mar 16 2020 8:02PM"
            }
          ]
        },
        {
          "id": "W07QCRPA4",
          "real_name": "Glinda Southgood",
          "tz": "Asia/Kolkata",
          "activity_periods": [{
              "start_time": "Feb 1 2020  1:33PM",
              "end_time": "Feb 1 2020 1:54PM"
            },
            {
              "start_time": "Mar 1 2020  11:11AM",
              "end_time": "Mar 1 2020 2:00PM"
            },
            {
              "start_time": "Mar 16 2020  5:33PM",
              "end_time": "Mar 16 2020 8:02PM"
            }
          ]
        },
        {
          "id": "W07QCRPA4",
          "real_name": "Glinda Southgood",
          "tz": "Asia/Kolkata",
          "activity_periods": [{
              "start_time": "Feb 1 2020  1:33PM",
              "end_time": "Feb 1 2020 1:54PM"
            },
            {
              "start_time": "Mar 1 2020  11:11AM",
              "end_time": "Mar 1 2020 2:00PM"
            },
            {
              "start_time": "Mar 16 2020  5:33PM",
              "end_time": "Mar 16 2020 8:02PM"
            },
            {
              "start_time": "Feb 1 2020  1:33PM",
              "end_time": "Feb 1 2020 1:54PM"
            },
            {
              "start_time": "Mar 1 2020  11:11AM",
              "end_time": "Mar 1 2020 2:00PM"
            },
            {
              "start_time": "Mar 16 2020  5:33PM",
              "end_time": "Mar 16 2020 8:02PM"
            }
          ]
        }
      ]
    }
  }

  open(j,content){

  
  
 
console.log(this.json.members[j].activity_periods.length);

  for(var i=0;i<this.json.members[j].activity_periods.length;i++){
  console.log(  this.json.members[j].activity_periods[i].start_time);
  this.dt[i]=this.json.members[j].activity_periods[i];

  }
  this.modalReference = this.modalService.open(content);

this.modalReference.result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
  
  }
  constructor(
    private modalService: NgbModal
  ){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  openModal(content) {
  this.modalReference = this.modalService.open(content);

this.modalReference.result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
  }
  close(content) {
    this.modalReference.close();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
