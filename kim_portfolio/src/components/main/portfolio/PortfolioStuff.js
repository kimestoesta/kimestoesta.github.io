import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import OnImagesLoaded from 'react-on-images-loaded';
import Data from '../Data';
import filterStyles from './PortfolioFilters.module.scss';
import styles from './PortfolioStuff.module.scss';

var selectedFilter = '*';
class PortfolioStuff extends Component {
  projectEntry(project, index) {
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
          className={styles.workItem + ' ' + (project.doubleWidth ? styles.workItemDouble : '')}
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
                  <button>{project.tags.map(x => x.replace(/\-/g, " ")).join(', ')}</button>
                </span>
              </div>
            </div>
          </a>
        </article>
      </OnImagesLoaded>
    );
  } 

  render() {
    let links = [];
    for (var key in Data.projects) {
      links.push(this.projectEntry(Data.projects[key], key));
    }

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
                    data-filter="web"
                    className={
                      selectedFilter === 'web' ? filterStyles.current : ''
                    }
                  >
                    Web
                  </button>
                </li>
                <li>
                  <button
                    onClick={this.onFilterClick.bind(this)}
                    data-filter="motion graphics"
                    className={
                      selectedFilter === 'motion graphics' ? filterStyles.current : ''
                    }
                  >
                    Motion Graphics
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
            <div className={styles.gridSizer} />
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
      itemSelector: '.' + styles.workItem,
      transitionDuration: '0.3s',
      masonry: {
        // set to the element
        columnWidth: '.' + styles.gridSizer,
      }
    });
  }
}

export default PortfolioStuff;
