import * as api from '../api';

//Action Creators
export const getPosts = () =>  async (dispatch) => {
    try {
        console.log('getp posts')
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL' , paylaod: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost= (post) => async (dispatch) => {
    try {
        console.log('create post')
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE' , payload: data});
    } catch (error) {
        console.log(error);
    }

}
