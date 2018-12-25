import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import OnImagesLoaded from 'react-on-images-loaded';
import Data from '../Data';
import './PortfolioStuff.css';

var selectedFilter = '*';
class PortfolioStuff extends Component {
  render() {
    const links = Data.projects.map((project, index) => {
      const tag_classes = project.tags;
      for (var i = 0; i < tag_classes.length; i++) {
        tag_classes[i] = tag_classes[i].replace(' ', '-');
      }
      return (
        <OnImagesLoaded
          key={index}
          onLoaded={() => {
            this.onImageLoad(index);
          }}
          timeout={7000}
        >
          <article
            id={'item' + index}
            className={tag_classes.join(' ') + ' work-item'}
            style={{ display: 'none' }}
          >
            <a href={'#/project/' + index} id={index}>
              <div className="work-wrapper">
                <div className="work-thumbnail">
                  <img
                    src={process.env.PUBLIC_URL + '/' + project.thumbnail}
                    alt=""
                  />
                </div>
                <div className="work-caption">
                  <h3 className="work-title font-alt">{project.title}</h3>
                  <span className="work-category font-serif">
                    <a>{project.tags.join(', ')}</a>
                  </span>
                </div>
              </div>
            </a>
          </article>
        </OnImagesLoaded>
      );
    });

    return (
      <section id="portfolio" className="module-sm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <ul id="filters" className="filters font-alt">
                <li>
                  <a
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="*"
                    className={selectedFilter === '*' ? 'current' : ''}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="branding"
                    className={selectedFilter === 'branding' ? 'current' : ''}
                  >
                    Branding
                  </a>
                </li>
                <li>
                  <a
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="digital"
                    className={selectedFilter === 'digital' ? 'current' : ''}
                  >
                    Digital
                  </a>
                </li>
                <li>
                  <a
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="print"
                    className={selectedFilter === 'print' ? 'current' : ''}
                  >
                    Print
                  </a>
                </li>
                <li>
                  <a
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="illustration"
                    className={
                      selectedFilter === 'illustration' ? 'current' : ''
                    }
                  >
                    Illustration
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="works-grid-wrapper">
            <div className="works-grid works-grid-gutter" id="works-grid">
              {links}
            </div>
          </div>
        </div>
      </section>
    );
  }

  shouldComponentUpdate() {
    return false;
  }

  refreshLayout() {
    this.iso.arrange({
      filter: function(item) {
        if (selectedFilter === '*') {
          return true;
        }
        return item
          .querySelector('.work-category')
          .innerText.includes(selectedFilter);
      }
    });
  }

  onFilterClick(filter) {
    selectedFilter = filter.target.getAttribute('data-filter');
    document.body.querySelector('.current').classList.remove('current');
    filter.target.classList.add('current');
    this.refreshLayout();
  }

  onImageLoad(index) {
    document.body.querySelector('#item' + index).style.display = '';
    this.refreshLayout();
  }

  componentDidMount() {
    this.iso = new Isotope('#works-grid', {
      layoutMode: 'masonry',
      itemSelector: '.work-item',
      transitionDuration: '0.3s'
    });
  }
}

export default PortfolioStuff;
