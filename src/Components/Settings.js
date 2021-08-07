import React from 'react'
const categories =
    [{"id": 1, "name": "Mathematics"},{"id":2,"name": "Other(add other categories here)"}];
    

const Settings = () => {
    const [loading, setLoading] = React.useState(false);
    const [options, setOptions] = React.useState(categories);
    const [questionCategory, setQuestionCategory] = React.useState("");
    const [questionType, setQuestionType] = React.useState("");
	const [numberOfQuestions, setNumberOfQuestions] = React.useState(20);
    const handleCategoryChange = event => {
        setQuestionCategory(event.target.value)
    }
    const handleTypeChange = event => {
        setQuestionType(event.target.value)
    }
    const handleAmountChange = event => {
        setNumberOfQuestions(event.target.value)
    }
    
    if (!loading) {
        return (
            <div>
                <div>
                    <h2>Select Category Now:</h2>
                    <select value={questionCategory} onChange={handleCategoryChange}>
                        <option>Select Category</option>
                        {options &&
                            options.map((option) => (
                                <option value={option.id} key={option.id}>
                                    {option.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div>
                    <h2>Select Question Type:</h2>
                    <select value={questionType} onChange={handleTypeChange}>
                        <option value="" key="type-0">All</option>
                        <option value="multiple" key="type-1">Multiple Choice</option>
                        <option value="boolean" key="type-2">True/False</option>
                    </select>
                </div>
                <div>
                    <h2>Amount of Questions:</h2>
                    <input value={numberOfQuestions} onChange={handleAmountChange} />
                </div>
            </div>
            
        );
    } else {
        <p>
            LOADING...
        </p>
    }
}

export default Settings;
