import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	numLike: number = 0;
	numComment: number = 0;
	newComment: boolean = true;
	comments = [];
	btnColor: string = '';

	constructor(public navCtrl: NavController) {}

	addLike() {
		this.numLike++;
		this.btnColor = 'red';
	}

	viewNewCommen() {
		this.newComment = false;
	}

	addComment(newComment: string) {
		this.numComment++;
		let otrocomment = 'Usuario' + this.numComment + ': ' + newComment;

		this.comments.push(otrocomment);
		this.newComment = true;
	}
}
