import React, {Component} from 'react';
import Contact from '../../containers/Contact/Contact.jsx'
import Technology from '../../containers/Technology/Technology.jsx'
import Project from '../../containers/Project/Project.jsx'
import ProjectAddModal from '../../containers/ProjectAddModal/ProjectAddModal.jsx'
import ContactAddModal from '../../containers/ContactAddModal/ContactAddModal.jsx'
import TechnologyAddModal from '../../containers/TechnologyAddModal/TechnologyAddModal.jsx'
import TopText from '../../containers/TopText/TopText.jsx'
import {getTechnologies, removeTechnology} from '../../actions/technologies.js'
import {getContacts, postContact, removeContact} from '../../actions/contacts.js'
import {getProjects} from '../../actions/projects.js'
import {clearImage, uploadImage} from '../../actions/image.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import "./AboutPage.css"
import Button from "../../containers/Button/Button";

class AboutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isContactAddModalActive: false,
      isTechnologyAddModalActive: false,
      isProjectAddModalActive: false,
      isActive: false,
    };
  }

  componentWillMount() {
    this.props.actions.getTechnologies();
    this.props.actions.getContacts();
    this.props.actions.getProjects();
  }

  render() {
    const headerText = "Привет, меня зовут Крылов Александр, я программист, и не только.";
    const baseInfoText = "Сейчас я пишу бэкенд в замечательной компании KupiVip. И в целом всякой программистской работой " +
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
        <ContactAddModal
          isOpen={this.state.isContactAddModalActive}
          onRequestClose={() => this.closeContactAddModal()}
          clearImage={this.props.actions.clearImage}
          uploadImage={this.props.actions.uploadImage}
          image={this.props.image}
          imageError={this.props.imageError}
          contactUploadError={this.props.contactUploadError}
          postContact={this.props.actions.postContact}
        />
        <TechnologyAddModal
          isOpen={this.state.isTechnologyAddModalActive}
          onRequestClose={() => this.closeTechnologyAddModal()}
        />
        <ProjectAddModal
          isOpen={this.state.isProjectAddModalActive}
          onRequestClose={() => this.closeProjectAddModal()}
        />
      </div>
    );
  }

  renderTechnologies() {
    if (this.props.technologiesError) {
      return <div>Ошибка при загрузке технологий</div>
    }
    let technologies = this.props.technologiesList.map(technology =>
      <Technology
        key={technology.id}
        id={technology.id}
        image={technology.image}
        caption={technology.caption}
        removeTechnology={this.props.actions.removeTechnology}
        loggedIn={this.props.loggedIn}
      />);
    if (this.props.loggedIn) {
      technologies.push(<Button
        key="button"
        caption="Добавить технологию"
        onClick={() => this.showTechnologyAddModal()}/>);
    }
    return technologies;
  };

  renderContacts() {
    if (this.props.contactsError) {
      return <div>Ошибка при загрузке контактов</div>
    }
    let contacts = this.props.contactsList.map(contact =>
      <Contact
        key={contact.id}
        id={contact.id}
        image={contact.image}
        title={contact.title}
        link={contact.url}
        text={contact.description}
        removeContact={this.props.actions.removeContact}
        loggedIn={this.props.loggedIn}
      />);
    if (this.props.loggedIn) {
      contacts.push(<Button
        key="button"
        caption="Добавить контакт"
        onClick={() => this.showContactAddModal()}/>);
    }
    return contacts;
  };

  renderProjects() {
    if (this.props.projectsError) {
      return <div>Ошибка при загрузке проектов</div>
    }
    let projects = this.props.projectsList.map(function (project) {
      return <Project
        key={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
      />
    });
    if (this.props.loggedIn) {
      projects.push(<Button
        key="button"
        caption="Добавить проект"
        onClick={() => this.showProjectAddModal()}/>);
    }
    return projects;
  }

  showProjectAddModal() {
    if (!this.state.isContactAddModalActive && !this.state.isTechnologyAddModalActive) {
      this.setState({
        isProjectAddModalActive: true
      });
    }
  };

  showContactAddModal() {
    if (!this.state.isProjectAddModalActive && !this.state.isTechnologyAddModalActive) {
      this.setState({
        isContactAddModalActive: true
      });
    }
  }

  showTechnologyAddModal() {
    if (!this.state.isContactAddModalActive && !this.state.isProjectAddModalActive) {
      this.setState({
        isTechnologyAddModalActive: true
      });
    }
  }

  closeProjectAddModal() {
    this.setState({
      isProjectAddModalActive: false
    });
  };

  closeContactAddModal() {
    this.setState({
      isContactAddModalActive: false
    });
  }

  closeTechnologyAddModal() {
    this.setState({
      isTechnologyAddModalActive: false
    });
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
      loggedIn: state.admin.loggedIn,
      image: state.image.image,
      imageError : state.image.error,
      contactUploadError : state.contacts.uploadError,
    };
  },
  (dispatch) => {
    return {
      actions: {
        getTechnologies: bindActionCreators(getTechnologies, dispatch),
        getContacts: bindActionCreators(getContacts, dispatch),
        getProjects: bindActionCreators(getProjects, dispatch),
        uploadImage: bindActionCreators(uploadImage, dispatch),
        clearImage: bindActionCreators(clearImage, dispatch),
        postContact: bindActionCreators(postContact, dispatch),
        removeContact: bindActionCreators(removeContact, dispatch),
        removeTechnology: bindActionCreators(removeTechnology, dispatch),
      }
    }
  }
)(AboutPage);
