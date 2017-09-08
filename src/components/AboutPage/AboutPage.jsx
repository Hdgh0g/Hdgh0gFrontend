import React, {Component} from 'react';
import Contact from '../../containers/Contact/Contact.jsx'
import Technology from '../../containers/Technology/Technology.jsx'
import Project from '../../containers/Project/Project.jsx'
import TopText from '../../containers/TopText/TopText.jsx'
import {getTechnologies} from '../../actions/technologies.js'
import {getContacts} from '../../actions/contacts.js'
import {getProjects} from '../../actions/projects.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import "./AboutPage.css"

class AboutPage extends Component {

  componentWillMount() {
    this.props.actions.getTechnologies();
    this.props.actions.getContacts();
    this.props.actions.getProjects();
  }

  render() {
    const headerText = "Привет, меня зовут Крылов Александр, я программист, и не только.";
    const baseInfoText = "Сейчас я пишу бэкенд в замечательной компании KupiVip. И в целом всякой программистской работой" +
      "я занимаюсь уже целых два года. " +
      "Иногда, когда у меня находится свободное время, я люблю путешествовать и делать оригинальные " +
      "(что абсолютно не значит, что хорошие) фотки. Это мой сайт, на котором я балуюсь с технологиями. Всем приятного времени. " +
      "Если вы вдруг хотите со мной пообщаться, выбирайте любую из ссылок и в путь!";

    return (
      <div className="about-page">
        <TopText
          headerText={headerText}
          infoText={baseInfoText}
        />
        <div className="about-row">
          <h2 className="about-technologies"> Технологии, которыми я пользуюсь </h2>
          <h2 className="about-contacts"> Меня можно найти по любой из этих ссылок </h2>
        </div>
        <div className="about-row">
          <div className="about-technologies">
            {this.renderTechnologies()}
          </div>
          <div className="about-contacts">
            {this.renderContacts()}
          </div>
        </div>
        <div className="about-projects">
          <h2> Я приложил свою руку к этим проектам </h2>
          {this.renderProjects()}
        </div>

      </div>
    );
  }

  renderTechnologies() {
    if (this.props.technologiesError) {
      return <div>Ошибка при загрузке технологий</div>
    }
    return this.props.technologiesList.map(technology =>
      <Technology
        key={technology.id}
        image={technology.image}
        caption={technology.caption}
      />)
  };

  renderContacts() {
    if (this.props.contactsError) {
      return <div>Ошибка при загрузке контактов</div>
    }
    return this.props.contactsList.map(contact =>
      <Contact
        key={contact.id}
        image={contact.image}
        title={contact.title}
        link={contact.url}
        text={contact.description}
      />)
  };

  renderProjects() {
    if (this.props.projectsError) {
      return <div>Ошибка при загрузке проектов</div>
    }
    return this.props.projectsList.map(function (project) {
      return <Project
        key={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
      />
    })
  }
}

export default connect(
  (state) => {
    return {
      contactsList: state.contacts.contactsList,
      contactsError: state.contacts.contactsError,
      technologiesList: state.technologies.technologiesList,
      technologiesError: state.technologies.technologiesError,
      projectsList: state.projects.projectsList,
      projectsError: state.projects.projectsError,
    };
  },
  (dispatch) => {
    return {
      actions: {
        getTechnologies: bindActionCreators(getTechnologies, dispatch),
        getContacts: bindActionCreators(getContacts, dispatch),
        getProjects: bindActionCreators(getProjects, dispatch),
      }
    }
  }
)(AboutPage);
