import React, { Component, createRef } from "react";


import { Clock } from '../../components';
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

      onSecond() {
        const strSeconds = this.refs.seconds.value;
        if(strSeconds.match(/[0-9]/)) {
          this.refs.seconds.value = '';
          this.handleCountdown(parseInt(strSeconds, 10));
        }else if(this.state.count !== 0){
          this.handleStart();
        }
      }
			
      render() {
        const {count} = this.state;
        return (
          <div className="lottery-container">
            <Clock className="counter-style" time={count}/>
            <input type="text" ref="seconds" placeholder="enter time in seconds"/>
            <Button label="start" onClickHandler={this.onSecond.bind(this)} color={'startTime'}/>
            <Button label="stop" onClickHandler={this.handleStop.bind(this)} color={'otherButton'}/>
            <Button label="reset" onClickHandler={this.handleReset.bind(this)} color={'otherButton'}/>
            <Dialog ref={this.dialog} />
          </div>
        )
      }
}