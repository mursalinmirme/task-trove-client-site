
const AddNewWord = () => {
    const handleAddWords = (e) => {
        e.preventDefault();
        const englishWord = e.target.englishWord.value;
        const banglaWord = e.target.banglaWord.value;
        const newWords = {englishWord, banglaWord};
        console.log(newWords);
        fetch('http://localhost:4400/words-list', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newWords),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  return (
    <div>
      <h2 className="text-center mt-7 text-2xl font-kenit text-gray-600">
        Save Your New Word
      </h2>
      <form onSubmit={handleAddWords}
        className="flex flex-col justify-center items-center mt-12"
        action=""
      >
        <div className="flex flex-col">
          <label
            className="text-md font-semibold text-gray-500 mb-3"
            htmlFor=""
          >
            English Word
          </label>
          <input
            className="w-96 text-lg border font-medium outline-none shadow px-3 py-3"
            type="text"
            name="englishWord"
            id=""
          />
        </div>
        <div className="flex flex-col mt-8">
          <label
            className="text-md font-semibold text-gray-500 mb-2"
            htmlFor=""
          >
            Bangla Word (optional)
          </label>
          <input
            className="w-96 text-lg font-medium border outline-none shadow px-3 py-3"
            type="text"
            name="banglaWord"
            id=""
          />
        </div>
        <input
          className="border w-96 text-lg font-semibold mt-9 h-14 btn shadow-md"
          type="submit"
          value="Add Word"
        />
      </form>
    </div>
  );
};

export default AddNewWord;