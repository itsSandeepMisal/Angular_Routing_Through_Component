import { Component, OnInit } from '@angular/core';
import { LoginServService } from '../login-serv.service';
import { Router } from '@angular/router';
import { Post } from '../Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[]
  // newPost: Post
  progressFlag: boolean
  // successFlag: boolean
  // errorFlag: boolean
  // addFlag: boolean
  // status: any

  constructor(public service:LoginServService, public router:Router, private http: HttpClient) {
    if(service.loginId!=1){
      router.navigateByUrl("/login")
    }
    this.progressFlag = true
    // this.addFlag = false
    // this.successFlag = false
    // this.errorFlag = false
    this.getAllPosts()
    // this.newPost = new Post()
   }

  ngOnInit() {
  }

  getAllPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .catch(err => {
        console.log(err)
      })
      .then(data => {
        this.posts = data;
        this.progressFlag = false
      })

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .then((json:any) => this.posts = json)

    // this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    //   .subscribe((res: any) => {
    //     res = res.json()
    //     this.posts = res
    //     this.progressFlag = false
    //   })
  }

  // addPost(postForm) {
  //   this.addFlag = true
  //   this.http.post('http://localhost:8090/posts/add', this.newPost)
  //     .subscribe((res: any) => {
  //       res = res.json()
  //       this.status = res
  //       if (this.status.queryStatus) {
  //         this.successFlag = true
  //         postForm.form.markAsPristine()
  //         this.newPost = new Post()
  //         setTimeout(() => {
  //           this.successFlag = false
  //         }, 2000);
  //       }
  //       else
  //         this.errorFlag = true

  //       this.addFlag = false
  //     })
  // }

//   deletePost(id,i) {
//     this.http.delete('http://localhost:8090/posts/delete/' + id)
//       .subscribe((res: any) => {
//         res = res.json()
//         if (res.queryStatus) {
//           this.posts.splice(i,1)
//         }
//       })
// }




}
