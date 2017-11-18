import React, {Component} from 'react';
import TopText from '../../containers/TopText/TopText.jsx'
import Pages from '../../containers/Pages/Pages.jsx'
import PhotoWrap from '../../containers/PhotoWrap/PhotoWrap.jsx'
import './PhotoPage.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPhotos} from '../../actions/photos.js'
import Button from "../../containers/Button/Button";
import {setPhotoAddModalVisible} from "../../actions/modal";
import PhotoAddModal from "../../containers/PhotoAddModal/PhotoAddModal";
import {clearImage, uploadImageWithCaption} from "../../actions/image";
import {setPhotoAddModalCaption} from "../../actions/modal"

class PhotoPage extends Component {

  componentWillMount() {
    this.props.actions.getPhotos(this.props.page);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.page !== newProps.page) {
      this.props.actions.getPhotos(newProps.page);
    }
  }

  onPhotoClick(id) {
    console.log(id);
  };

  render() {
    const headerText = "В моих снах, это супер-пупер фотогаллерея.";
    const baseInfoText = "На самом деле, нет. Но тут есть много фоточек. " +
      "Скорее всего я посчитал их выдающимися в какой-то момент. " +
      "В целом, я просто хотел верить, что не просто так трачу деньги на фотик.";

    return (
      <div className="photo-page">
        {
          this.props.loggedIn ?
            <Button caption="Добавить фотографию"
                    onClick={() => this.props.actions.setPhotoAddModalVisible(true)}
            /> : null
        }
        <TopText
          headerText={headerText}
          infoText={baseInfoText}
        />
        <div className="photo-gallery">
          {this.renderPhotos()}
        </div>
        {this.renderPages()}
        <PhotoAddModal
          isOpen={this.props.modal.photoAdd.active}
          onRequestClose={() => this.props.actions.setPhotoAddModalVisible(false)}
          clearImage={this.props.actions.clearImage}
          uploadImageWithCaption={this.props.actions.uploadImageWithCaption}
          image={this.props.image}
          imageError={this.props.imageError}
          caption={this.props.modal.photoAdd.caption}
          setPhotoAddModalCaption={this.props.actions.setPhotoAddModalCaption}
        />
      </div>
    );
  }

  renderPages() {
    if (this.props.pageInfo && !this.props.photosError) {
      return <Pages
        pagesCount={this.props.pageInfo.totalPages}
        currentPage={this.props.pageInfo.number + 1}
        pageLink="/photo?page="
      />
    }
  }

  renderPhotos() {
    return this.props.photosList.map(photo =>
      <PhotoWrap
        key={photo.id}
        caption={photo.caption}
        image={photo.image}
        onPhotoClick={this.onPhotoClick}
      />)
  }
}

PhotoPage.PropTypes = {
  pageInfo: PropTypes.object
};

export default connect(
  (state, ownProps) => {
    return {
      photosList: state.photos.photosList,
      photosError: state.photos.photosError,
      pageInfo: state.photos.pageInfo,
      page: ownProps.location.query.page,
      loggedIn: state.admin.loggedIn,
      modal: state.modal,
      imageError: state.image.error,
    }
  },
  (dispatch) => {
    return {
      actions: {
        getPhotos: bindActionCreators(getPhotos, dispatch),
        setPhotoAddModalVisible: bindActionCreators(setPhotoAddModalVisible, dispatch),
        uploadImageWithCaption: bindActionCreators(uploadImageWithCaption, dispatch),
        clearImage: bindActionCreators(clearImage, dispatch),
        setPhotoAddModalCaption: bindActionCreators(setPhotoAddModalCaption, dispatch),
      }
    }
  }
)(PhotoPage);
