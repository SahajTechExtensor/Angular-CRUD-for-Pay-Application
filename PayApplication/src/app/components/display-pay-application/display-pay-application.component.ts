import { Component, OnInit, inject } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ApplicationModal } from "../../models/application.modal";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { Console } from "console";
import { map, tap } from "rxjs";
@Component({
  selector: 'app-display-pay-application',
  standalone: true,
  imports:[NgIf,NgFor,DatePipe],
  templateUrl: './display-pay-application.component.html',
  styleUrl: './display-pay-application.component.css'
})
export class DisplayPayApplicationComponent implements OnInit{
  readonly apiService:ApiService = inject(ApiService);
  applicationList!:ApplicationModal[];
  isDataAvailable:boolean = false;

  ngOnInit(): void {
    //   this.apiService.post().subscribe(data=>{
    //       console.log(data);
    //   })
      this.fetch();
  }

  private fetch(){
      this.apiService.get('')
      .pipe(
          map((data:any) => data.payApplicationList)
      )
      .subscribe(body=>{
          let tempList:ApplicationModal[] = [];
          body.forEach((element:any) => {
              tempList.push(new ApplicationModal(
                                                      element.applicationNumber,
                                                      element.applicationDate,
                                                      element.projectId,
                                                      element.periodFrom,
                                                      element.periodTo,
                                                      element.certificate,
                                                      element.retainage,
                                                      element.changeOrderSummary
                                                  ));
          });
          this.applicationList = tempList;
          this.isDataAvailable = true;
      });
  }

  onEditApplication(application:ApplicationModal){
      console.log(application)
  }
}