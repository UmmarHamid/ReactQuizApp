import React from 'react';
import { useSelector } from 'react-redux';

function FetchButton(props) {
	// access the settings that will be used to construct the API query
  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)
  const questionType = useSelector(state => state.options.question_type)
  const questionAmount = useSelector(state => state.options.amount_of_questions)
  const questionIndex = useSelector(state => state.index)
	
  const dispatch = useDispatch()

  const setLoading = value => {
    dispatch({
      type: 'CHANGE_LOADING',
      loading: value
    })
  }

  const setQuestions = value => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value
    })
  }

  const handleQuery = async () => {
    setLoading(true);

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuestions(response.results)
        setLoading(false);
      });
  }
    
    
  const handleQuery = async () => {
		// we always need to specify the number of questions that we
		// want to be returned
    let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`;

		// only add the rest of the parameters if they aren't 'all'
    if (questionCategory.length) {
      apiUrl = apiUrl.concat(`&category=${questionCategory}`)
    }

    if (questionDifficulty.length) {
      apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`)
    }

    if (questionType.length) {
      apiUrl = apiUrl.concat(`&type=${questionType}`)
    }

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        // this is where we will set questions in the state using an action
      });
  }
	// we will resuse this component, so the button text will be passed as props
  return <button onClick={handleQuery}>{props.text}</button>;
}
export default FetchButton;
