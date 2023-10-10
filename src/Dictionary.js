import React, {useState} from "react";
import axios from "axios";
import './Dictionary.css';

export default function Dictionary() {
  // state to store the keyword for searching
  let [keyword, setKeyword] = useState("")

  // handle the response from the dictionary Api request
  function handleResponse(response) {
    console.log(response.data);
  }

  // documentation - https://www.shecodes.io/learn/apis/dictionary
  // function declaration for user to search the word
  function search(event) {
    event.preventDefault();
    alert(`Search for ${keyword} ... Please wait...`);

    const apiKey = "b7c4b4238a43dfodfa38ef20t0b7ac1c"
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    // console.log(apiUrl);

    // make an api request and handle the response
    axios.get(apiUrl).then(handleResponse)
  }

  // function to store the word - handles the change in the input field for the keyword
  const handleKeywordChange = (event) => {
    console.log(event.target.value);
    // update the keywaord state when the input value changes
    setKeyword(event.target.value);
  }

  // render the search form for the user
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}>
        </input>
      </form>
    </div>
  )
}
