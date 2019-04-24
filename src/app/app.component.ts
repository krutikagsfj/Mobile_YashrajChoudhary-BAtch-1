import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Angular Mobile";
  showTable: boolean;
  mobileList ;
  deleteMessage: string;
  deleteModal: boolean;
  selectedItem: any;
  selectedItemName: any;
  sortByAsc: boolean = true;
  constructor(private AppSer: AppService) {}
  ngOnInit() {

    this.AppSer.getMobileList()
    .subscribe(res=>{
      this.mobileList=res;
      console.log(this.mobileList);
      
    });
  }
  
  deleteRow(row) {
   let ind=this.mobileList.indexOf(row);
    this.mobileList.splice(ind,1);
  }
    sortTable1() {
      this.mobileList.sort((a, b)=> {return a.mobId - b.mobId});
     }
    sortTable(parm) {
      if(this.sortByAsc == true) {
        this.sortByAsc = false;
        this.mobileList.sort((a, b) => {
         return a[parm].localeCompare(b[parm]);
        });
      } else {
        this.sortByAsc = true;
        this.mobileList.sort((a, b) => {
          return b[parm].localeCompare(a[parm]);
       });
     }
    }
    sortTable2()
    {
      this.mobileList.sort((a, b)=> {return a.mobPrice - b.mobPrice});
    }

  
}
