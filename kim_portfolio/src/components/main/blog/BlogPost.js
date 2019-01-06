import ImageLoader from 'react-load-image';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './BlogPost.module.scss';
import { ClipLoader } from 'react-spinners';

class BlogPost extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className={styles.blogPost}>
        <ImageLoader src={post.image} className={styles.blogImage}>
          <img alt="" />
          <div>Error!</div>
          <ClipLoader />
        </ImageLoader>
        <ReactMarkdown className={styles.blogText}>
          {post.markdown}
        </ReactMarkdown>
      </div>
    );
  }
}

export default BlogPost;
