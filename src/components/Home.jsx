import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <ul className="flex flex-col items-center space-y-8 justify-center mt-32 font-kenit">
                <Link to={'/new-words-add'}>
                <li className="btn border w-96 text-center h-14 text-xl shadow-lg text-gray-700">Add a new word</li>
                </Link>
                <Link to={'/see-words-list'}>
                <li className="btn border w-96 text-center h-14 text-xl shadow-lg text-gray-700">See Your Saved Words</li>
                </Link>
                <Link to={'/new-sentence-add'}>
                <li className="btn border w-96 text-center h-14 text-xl shadow-lg text-gray-700">Add a new Sentence</li>
                </Link>
                <Link to={'/see-sentences-list'}>
                <li className="btn border w-96 text-center h-14 text-xl shadow-lg text-gray-700">See Your Saved Sentences</li>
                </Link>
            </ul>
        </div>
    );
};

export default Home;