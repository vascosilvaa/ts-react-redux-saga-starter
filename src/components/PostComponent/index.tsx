import React from 'react';
import { Post } from '../../store/elements/posts/types';

interface Props {
  post: Post
}

const PostComponent = ({ post }: Props) => <li>{post.content}</li>;

export default PostComponent;
