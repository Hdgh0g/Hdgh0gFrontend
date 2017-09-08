import React, {Component} from 'react';
import TopText from '../../containers/TopText/TopText.jsx'

class MainPage extends Component{
  render() {

    const headerText = "Вы на главной странице. Поэтому поиграем.";
    const baseInfoText = "Я долго думал, что же должно находиться на первой странице сайта. " +
      "Новый контент - слишком банально. Красивая карусель - не придумал что туда положить. " +
      "Решил: пусть будет игрушка. Все, что все любят играть, и Вы тоже играйте. Успехов.";

    return (
      <div className="main-page">
        <TopText
          headerText={headerText}
          infoText={baseInfoText}
        />
      </div>
    );
  }
}

export default MainPage;
