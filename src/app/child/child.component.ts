import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  receivedParentMessage: string = ""

  @Output()
  messageToEmit = new EventEmitter<string>()
  messageToSendChild: string = "hello parent"

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message)
  }

}
