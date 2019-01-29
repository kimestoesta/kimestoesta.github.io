import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import OnImagesLoaded from 'react-on-images-loaded';
import Data from '../Data';
import filterStyles from './PortfolioFilters.module.scss';
import styles from './PortfolioStuff.module.scss';

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
            className={styles.workItem}
            style={{ display: 'none' }}
          >
            <a href={'#/project/' + index} id={index}>
              <div className={styles.workWrapper}>
                <div className={styles.workThumbnail}>
                  <img
                    src={process.env.PUBLIC_URL + '/' + project.thumbnail}
                    alt=""
                  />
                </div>
                <div className={styles.workCaption}>
                  <h3 className={styles.workTitle}>{project.title}</h3>
                  <span className={styles.workCategory}>
                    <button>{project.tags.join(', ')}</button>
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
              <ul id="filters" className={filterStyles.filters}>
                <li>
                  <button
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="*"
                    className={
                      selectedFilter === '*' ? filterStyles.current : ''
                    }
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="branding"
                    className={
                      selectedFilter === 'branding' ? filterStyles.current : ''
                    }
                  >
                    Branding
                  </button>
                </li>
                <li>
                  <button
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="digital"
                    className={
                      selectedFilter === 'digital' ? filterStyles.current : ''
                    }
                  >
                    Digital
                  </button>
                </li>
                <li>
                  <button
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="print"
                    className={
                      selectedFilter === 'print' ? filterStyles.current : ''
                    }
                  >
                    Print
                  </button>
                </li>
                <li>
                  <button
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="illustration"
                    className={
                      selectedFilter === 'illustration'
                        ? filterStyles.current
                        : ''
                    }
                  >
                    Illustration
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.worksGridWrapper + ' mx-auto'} id="works-grid">
            {links}
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
          .querySelector('.' + styles.workCategory)
          .innerText.includes(selectedFilter);
      }
    });
  }

  onFilterClick(filter) {
    selectedFilter = filter.target.getAttribute('data-filter');
    document.body
      .querySelector('.' + filterStyles.current)
      .classList.remove(filterStyles.current);
    filter.target.classList.add(filterStyles.current);
    this.refreshLayout();
  }

  onImageLoad(index) {
    document.body.querySelector('#item' + index).style.display = '';
    this.refreshLayout();
  }

  componentDidMount() {
    this.iso = new Isotope('#works-grid', {
      layoutMode: 'masonry',
      itemSelector: '.' + styles.workItem,
      transitionDuration: '0.3s'
    });
  }
}

export default PortfolioStuff;
