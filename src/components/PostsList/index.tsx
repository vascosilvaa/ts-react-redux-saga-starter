import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Post } from '../../store/elements/posts/types';
import * as PostsActions from '../../store/elements/posts/actions';
import PostComponent from '../PostComponent';

interface StateProps {
  posts: Post[],
  loading?: boolean,
  error?: boolean
}

interface DispatchProps {
  loadRequest(): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

const PostsLists = (props: Props) => {
  useEffect(() => {
    props.loadRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { posts, loading, error } = props;

  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  return <ul>{posts.map((post: Post) => <PostComponent key={post.id} post={post} />)}</ul>;
};

const mapStateToProps = (state: ApplicationState) => ({
  posts: state.posts.data,
  loading: state.posts.loading,
  error: state.posts.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(PostsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsLists);
