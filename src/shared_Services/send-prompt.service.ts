import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SendPromptService {
  response:string="";
  chats:{message:string,user:boolean}[]=[]
  baseUrl:string="http://localhost:3000"
  loading_response:boolean=false;
  formData:FormData=new FormData();

  constructor(private http:HttpClient) { 
    this.chats.push({message:"Welcome to DRACODA,your personal JavaScript assistant! Whether you need to generate code snippets or testing functions, I'm here to help you streamling your development process. Just tell me your requirements, and let's dive into the world of efficient coding together!",user:false})
  }
  sendprompt(formData:FormData){
    // const headers = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data'
    // });
    let response=this.http.post<{message:string}>(`http://localhost:3000/mainBackend`,formData)
    return response;
  }
}
