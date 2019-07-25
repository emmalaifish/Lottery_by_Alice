import React, { Component, createRef } from "react";


import { Clock } from '../../components';
import { Input } from '../../components';
import { Button } from '../../components';

import { Dialog } from '../../portals';

export default class LotteryTimer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        running: false,
        name: '',
      }

      this.dialog = createRef();
    }
      
      componentDidUpdate(prevProps, prevState) {
        if(this.state.running !== prevState.running){
          switch(this.state.running) {
            case true:
              this.handleStart();
          }
        }
        if(this.state.name !== ''){
          const options = {
            message: 'Congratulations!!! '+this.state.name+' is the winner!!!',
            confirmBtnText: 'Ok'
          };
          this.dialog.current.showDialog(options);
        }
      }
      
      handleStart() {
        this.timer = setInterval(() => {
          const newCount = this.state.count - 1;
          this.setState(
            {count: newCount >= 0 ? newCount : 0}
          );
          if(newCount === 0){
            this.handleLottery();
            this.handleStop();
          } 
        }, 1000);
      }
      
      handleStop() {
        if(this.timer) {
          clearInterval(this.timer);
          this.setState(
            {running:false}
          );
        }
      }
      
      handleReset() {
        this.setState(
          {count: 0}
        );
      }
      
      handleCountdown(seconds) {
        this.setState({
          count: seconds,
          running: true
        })
      }

      handleLottery() {
        const { datas } = this.props;
        let random = Math.floor(Math.random() * datas.size)+1;
        datas.filter(data => {
          return data.get('id') === random;
        }).map((person) => {//filter出一筆人名與id後popup顯示中獎人
          this.setState({
            name: person.get('name'),
          })
        });
        this.setState({
          name: ''
        })
      }
      
      render() {
        const {count} = this.state;
        return (
          <div className="lottery-container">
            <Clock className="counter-style" time={count}/>
            <Input onSetCountdown={this.handleCountdown.bind(this)}/>
            <Button label="stop" onClickHandler={this.handleStop.bind(this)}/>
            <Button label="reset" onClickHandler={this.handleReset.bind(this)}/>
            <Dialog ref={this.dialog} />
          </div>
        )
      }
}