const reducer = (state = { memes: [] }, action) => {
  switch (action.type) {
    case 'ADD_MEME':
      return { ...state, memes: [...state.memes, action.payload] };
    case 'REMOVE_MEME':
      const id = action.payload.id;
      return { ...state, memes: state.memes.filter(meme => meme.id !== id) };
    default:
      return state;
  }
}

export default reducer;