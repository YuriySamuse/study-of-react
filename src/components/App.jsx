import React from 'react';
// import css from './App.module.css';
// import Section from './Section/Section.jsx';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
// import Notification from './Notification/Notification.jsx';
// import Statistics from './Statistics/Statistics.jsx';
import Counter from 'components/Counter/Counter';

const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>
      <Counter initialValue={10} />
    </>
  );
};

export default App;
