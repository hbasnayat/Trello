import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-board',
    templateUrl: './board.html',
    styleUrls: []
})
export class BoardComponent {
    data;
    checkswim = true;
    checkcard = true;
    public targetItem: any = null;
    a; b;



    ngOnInit() {
        this.getalldata()
    }
    getalldata() {
        this.http.get('/user/getone/' + this.activeRoute.snapshot.params['id']).subscribe((res: any) => {
            if (res.success) {
                this.data = res.boards;
                if (this.data.swimlane.length == 0) {
                    this.checkswim = false;
                }
                if (this.data.swimlane == null) {
                    this.checkcard = false;
                }
            }
        })
    }
    constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
        this.http.get('/user/getone/' + this.activeRoute.snapshot.params['id']).subscribe((res: any) => {
            if (res.success) {
                this.data = res.boards;
                if (this.data.swimlane.length == 0) {
                    this.checkswim = false;
                }
                if (this.data.swimlane == null) {
                    this.checkcard = false;
                }
            }
        })
    }

    id = this.activeRoute.snapshot.params['id'];

    swimsub(form) {
        this.http.post('/user/swimlane', {
            id: this.id,
            name: form.name
        }).subscribe((res: any) => {
            if (res.success) {
                console.log(res.message)
                this.getalldata()
            }
        })
    }

    cardsub(form, swimid) {
        this.http.post('/user/card', {
            id: this.id,
            name: form.name,
            swimid: swimid
        }).subscribe((res: any) => {
            if (res.success) {
                console.log(res.message)
                this.getalldata()
            }
        })
    }

    // delform(form, swimid) {
    //     this.http.post('/user/card', {
    //         id: this.id,
    //         name: form.name,
    //         swimid: swimid
    //     }).subscribe((res: any) => {
    //         if (res.success) {
    //             console.log(res.message)
    //             this.getalldata()
    //         }
    //     })
    // }

    onItemDrop(e: any, swimid, cardid) {

        this.http.post('/user/card', {
            id: this.id,
            name: e.dragData.name,
            swimid: swimid
        }).subscribe((res: any) => {
            if (res.success) {
                console.log('Card dropped')
                this.getalldata()
            }
        })
    }
    onItemDrag(swimid, cardid) {
        this.http.post('/user/card/delete', {
            id: this.id,
            cardid: cardid,
            swimid: swimid
        }).subscribe((res: any) => {
            if (res.success) {

                this.getalldata()
            }
        })

    }

    editcard(form, cardid, swimid) {
        this.http.post('/user/card/edit', {
            id: this.id,
            cardid: cardid,
            swimid: swimid,
            name: form.name
        }).subscribe((res: any) => {
            if (res.success) {
                console.log(res.message)
                this.getalldata()
            }
        })
    }

    delcard(cardid, swimid) {
        this.http.post('/user/card/delete', {
            id: this.id,
            cardid: cardid,
            swimid: swimid
        }).subscribe((res: any) => {
            if (res.success) {
                console.log(res.message)
                this.getalldata()
            }
        })
    }





}
