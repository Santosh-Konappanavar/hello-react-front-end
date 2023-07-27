const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/messages/random_greeting');
    const data = await response.json();
    dispatch({ type: 'SET_GREETING', payload: data.greeting });
  } catch (error) {
    throw new Error('Error fetching random greeting:', error);
  }
};

export default fetchRandomGreeting;
