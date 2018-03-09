import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  baseUrl = environment.baseUrl;

  constructor(private _http:Http, private router:Router){}

  createWidget(pageId:string, widget:string){
    const createwidget = {
      pageId:pageId,
      widget:widget
    };
    return this._http.post(this.baseUrl+'/api/page/'+pageId+'/widget', createwidget)
      .map(
        (res:Response)=>{
          const data = res.json();
          return data;
        }
      );
  }

  findAllWidgetForPage(pageId:string){
    return this._http.get(this.baseUrl+'/api/page/'+pageId+'/widget')
      .map(
        (res:Response)=>{
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetById(widgetId:string){
    return this._http.get(this.baseUrl+'/api/widget/'+widgetId)
      .map(
        (res:Response)=>{
          const data = res.json();
          return data;
        }
      );

  }

  updateWidget(widgetId:string, widget:string){
    return this._http.put(this.baseUrl+'/api/widget/'+widgetId, widgetId, widget)
      .map(
        (res:Response)=>{
          const data = res.json();
          return 'updated'
        }
      );

  }

  deleteWidget(widgetId:string){
    return this._http.delete(this.baseUrl+'/api/widget/'+widgetId)
      .map(
        (res:Response)=>{
          const data = res;
        }
      )

  }



}
