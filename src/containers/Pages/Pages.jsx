import React, {Component} from 'react';
import './Pages.css'
import LinkButton from '../Button/LinkButton.jsx'
import range from 'lodash/range'
import PropTypes from 'prop-types'

class Pages extends Component {

  nearCount = 2;

  render() {
    if (this.props.pagesCount < 1) {
      return
    }
    return <div className="pages">
      <div className="pages-title">Перейти на страницу</div>
      <div className="pages-numbers">
        {this.renderFirstPageIfNeeded()}
        {this.renderCurrentPages()}
        {this.renderEndPagesIfNeeded()}
      </div>
    </div>
  }

  renderCurrentPages() {
    let minCount = this.props.currentPage - this.nearCount;
    if (minCount < 1) {
      minCount = 1;
    }
    let maxCount = this.props.currentPage + this.nearCount;
    if (maxCount > this.props.pagesCount) {
      maxCount = this.props.pagesCount;
    }
    return range(minCount, maxCount + 1).map((i) => {
      return <LinkButton
        key={i}
        caption={i}
        link={this.props.pageLink+(i-1)}
      />
    })
  }

  renderFirstPageIfNeeded() {
    if (this.props.pagesCount > this.nearCount && this.props.currentPage - this.nearCount > 1) {
      return <LinkButton
        key="first"
        caption="На первую страницу"
        link={this.props.pageLink+(1-1)}
      />
    }
  }

  renderEndPagesIfNeeded() {
    if (this.props.pagesCount > this.nearCount && this.props.currentPage + this.nearCount < this.props.pagesCount) {
      return <LinkButton
        key="end"
        caption="На последнюю страницу"
        link={this.props.pageLink+(this.props.pagesCount-1)}
      />
    }
  }
}

Pages.propTypes = {
  pageLink: PropTypes.string,
  currentPage : PropTypes.number,
  pagesCount: PropTypes.number
};

export default Pages
