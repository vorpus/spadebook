export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_MORE_POSTS = "RECEIVE_MORE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";

import * as APIUtil from '../util/api_util';

export const fetchPosts = (userId) => {
  return (dispatch) => {
    dispatch(requestPosts());
    return APIUtil.getPosts(userId).then(
      (success) => dispatch(receivePosts(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const fetchMorePosts = (userId, page) => {
  return (dispatch) => {
    return APIUtil.getPosts(userId, page).then(
      (success) => dispatch(receiveMorePosts(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const fetchPost = (postId) => {

  return (dispatch) => {
    return APIUtil.fetchPost(postId).then(
      (success) => dispatch(receivePost(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const createPost = (post, tagged_id) => {
  return (dispatch) => {
    return APIUtil.createPost(post, tagged_id).then(
      (success) => dispatch(receivePost(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return APIUtil.deletePost(postId).then(
      (success) => dispatch(receivePost(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const editPost = (postId, data) => {
  return (dispatch) => {
    return APIUtil.editPost(postId, data).then(
      (success) => dispatch(receivePost(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

// edit post

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  };
}

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
  });

export const receiveMorePosts = (posts) => ({
    type: RECEIVE_MORE_POSTS,
    posts
  });

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS,
  };
}
