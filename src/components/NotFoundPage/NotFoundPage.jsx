import React, {Component} from "react";
import TopText from "../../containers/TopText/TopText";

class NotFoundPage extends Component {

  render() {

    const headerText = "Вы пытаетесь достучаться до несуществующей страницы.";
    const baseInfoText = "Это просто 404. Выбери что-нибудь другое. И продолжай!";

    return (
      <div>
        <TopText
          headerText={headerText}
          infoText={baseInfoText}
        />
      </div>
    )
  }
}

export default NotFoundPage;
