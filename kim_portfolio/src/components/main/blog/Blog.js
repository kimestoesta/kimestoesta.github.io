import BlogData from '../BlogData';
import BlogPost from './BlogPost';
import React, { Component } from 'react';
import Footer from '../footer/Footer';
import styles from './Blog.module.css';

class Blog extends Component {
  render() {
    const blogs = BlogData.posts;
    return (
      <div>
        <div className={styles.blogContainer}>
          {blogs.map(post => <BlogPost post={post} />)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;

