import React from 'react'
const categories =
    [{"id": 1, "name": "Mathematics"},{"id":2,"name": "Other(add other categories here)"}];
    

const Settings = () => {
    const [loading, setLoading] = React.useState(false);
    const [options, setOptions] = React.useState(categories);
    const [questionCategory, setQuestionCategory] = React.useState("");
    const handleCategoryChange = event => {
        setQuestionCategory(event.target.value)
    }
    if (!loading) {
        return (
            <div>
                <div>
                    <h2>Select Category:</h2>
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
            </div>
        );
    } else {
        <p>
            LOADING...
        </p>
    }
}

export default Settings;
