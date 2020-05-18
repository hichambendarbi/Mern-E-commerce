import * as React from 'react';
import moment from 'moment';
import styled from 'styled-components';


export class Calendar extends React.Component<any> {
  constructor(props:any) {
    super(props);

    this.state = {
      date: moment(),
      startDate: moment().subtract(5, 'day'),
      endDate: moment().add(3, 'day')
    };
  }

  resetDate() {
    this.setState({
      date: moment()
    });
  }

  changeMonth(month:any) {
    const {date} : any = this.state;

    date.month(month);
    this.setState(
      date
    );
  }

  changeDate(date : any) {
    let {startDate, endDate} : any = this.state;

    if (startDate === null || date.isBefore(startDate, 'day') || ! startDate.isSame(endDate, 'day')) {
      startDate = moment(date);
      endDate = moment(date);
    } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
      startDate = null;
      endDate = null;
    } else if (date.isAfter(startDate, 'day')) {
      endDate = moment(date);
    }
    this.setState({
      startDate,
      endDate
    });
  }

  render() {
    const {date, startDate, endDate} : any = this.state;
    
    return (
      <CalendarStyled>
        <Heading date={date} changeMonth={(month : any) => this.changeMonth(month)} resetDate={() => this.resetDate()} dispatchDate={this.props.dispatchDate}/>

        <Days onClick={(date : any) => {this.changeDate(date)}} date={date} startDate={startDate} endDate={endDate} />
      </CalendarStyled>
    );
  }
}

const Heading = ({ date,  changeMonth, resetDate, dispatchDate }: any) => {
  return(
    <div className="nav">
        <a onClick={() => changeMonth(date.month() - 1)}>&#8249;</a>
        <h1 onClick={() => resetDate()}>{date.format('MMMM')} <small>{date.format('YYYY')}</small></h1>
        <a onClick={() => changeMonth(date.month() + 1)}>&#8250;</a>
    </div>
)};

const Day = ({currentDate, date, startDate, endDate, onClick} : any) => {
  let className = [];

  if (moment().isSame(date, 'day')) {
    className.push('active');
  }

  if (date.isSame(startDate, 'day')) {
    className.push('start');
  }

  if (date.isBetween(startDate, endDate, 'day')) {
    className.push('between');
  }

  if (date.isSame(endDate, 'day')) {
    className.push('end');
  }

  if (! date.isSame(currentDate, 'month')) {
    className.push('muted');
  }
  return (
    <span onClick={() => onClick(date)} className={className.join(' ')}>{date.date()}</span>
  )
};

const Days = ({date, startDate, endDate, onClick} : any) => {
  const thisDate = moment(date);
  const daysInMonth = moment(date).daysInMonth();
  const firstDayDate = moment(date).startOf('month');
  const previousMonth = moment(date).subtract(1, 'month');
  const previousMonthDays = previousMonth.daysInMonth();
  const nextsMonth = moment(date).add(1, 'month');
  let days = [];
  let labels = [];

  for (let i = 1; i <= 7; i++) {
    labels.push(<span className="label">{moment().day(i).format('ddd')}</span>);
  }

  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <Day key={moment(previousMonth).format('DD MM YYYY')} 
           onClick={(date:any) => onClick(date)} 
           currentDate={date} 
           date={moment(previousMonth)} 
           startDate={startDate} 
           endDate={endDate} 
      />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i);

    days.push(
      <Day key={moment(thisDate).format('DD MM YYYY')} 
           onClick={(date:any) => onClick(date)} 
           currentDate={date} date={moment(thisDate)} 
           startDate={startDate} endDate={endDate} />
    );
  }

  const daysCount = days.length;

  for (let i = 1; i <= (42 - daysCount); i++) {
    nextsMonth.date(i);
    days.push(
      <Day key={moment(nextsMonth).format('DD MM YYYY')} onClick={(date:any) => onClick(date)} currentDate={date} date={moment(nextsMonth)} startDate={startDate} endDate={endDate} />
    );
  }

  return (
    <nav className="days">
      {labels.concat()}
      {days.concat()}
    </nav>
  );
};

const CalendarStyled = styled('div')`
  position: inherit;
  top: 50%;
  left: 50%;
  margin-top: 50px;
  margin-left: 0px;
/*   width: 360px; */
  padding: 15px;
  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  overflow: hidden;
  .nav {
    margin: -15px -15px 15px;
    padding: 0 15px;
    background-color: #b670f4;
    color: #fff;
    height: 70px;
    position: relative;    
    a {
      position: absolute;
      cursor: pointer;
      left: 10px;
      font-size: 32px;
      line-height: 1;
      top: 16px;
      width: 30px;
      text-align: center;
      display: inline-block;
      color: rgba(255, 255, 255, 0.4);
      user-select: none;
      :hover {
        color: #fff;
      }

      :last-child {
        left: auto;
        right: 10px;
      }
    }
    h1 {
      margin: 0;
      position: absolute;
      left: 40px;
      right: 40px;
      text-align: center;
      cursor: pointer;
      font-weight: 400;
      font-size: 30px;
      line-height: 66px;
      user-select: none;
    }
    small {
      font-weight: 300;
      font-size: 60%;
    }
  }
  .days {
    font-size: 0;
    
    span {
      width: 14.28571%;
      display: inline-block;
      text-align: center;
      user-select: none;
      cursor: pointer;
      margin: 8px 0;
      line-height: 34px;
      position: relative;
      font-size: 16px;

      &.label {
        text-transform: uppercase;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.3);
        font-size: 14px;
        cursor: initial;
      }

      &.active {
        font-weight: 700;
        background-color: transparentize($primary, 0.95);
        border-radius: $radius;
      }

      &.muted {
        color: rgba(0, 0, 0, 0.3);
      }

      &.between {
        border-radius: 0;
      }

      &.start, &.between, &.end {
        background-color: #b670f4;
        color: #fff;
      }

      &.start {
        border-radius: $radius 0 0 $radius;
      }

      &.end {
        border-radius: 0 $radius $radius 0;
      }

      &.start.end {
        border-radius: $radius;
      }

      &.between:nth-child(7n):after, &.start:nth-child(7n):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 100%;
        background-color: #b670f4;
        width: 20px;
      }

      &.between:nth-child(7n + 1):after, &.end:nth-child(7n + 1):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        background-color: #b670f4;
        width: 20px;
      }

      &.start.end:after {
        display: none;
      }
    }
  }
`