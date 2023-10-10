import React, {useState} from "react";
import axios from "axios";
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState("") /* state to store the keyword for searching*/

  // handle the response from the Api request
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  // function declaration for user to search the word
  function search(event) {
    event.preventDefault();
    alert(`Search for ${keyword} ... Please wait...`);

    const apiKey = "b7c4b4238a43dfodfa38ef20t0b7ac1c"
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse) /* make an api request and handle the response*/
  }

  // function to store the word
  const handleKeywordChange = (event) => {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }

  // form for user
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}>
        </input>
      </form>
    </div>
  )
}
