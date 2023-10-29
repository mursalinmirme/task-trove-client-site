import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SeeWordsList = () => {
    const {data, isLoading, isFetching, refetch} = useQuery({
        queryKey: ['seeWordsList'],
        queryFn: async() => {
            const fetch = await axios.get('http://localhost:4400/words-list');
            try{
                return fetch.data;
            }catch(errr){
                console.log(errr);
            }
        }
    })
    console.log(data);
    if(isLoading){
        return <h1>Wait please the data is loading....</h1>
    }
    // if(isFetching){
    //     return <h1>Wait please the data is fetching....</h1>
    // }
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-start flex-col gap-5">
                {
                    data.map(word => {
                        return <div className="btn border w-96 h-14 text-xl shadow-lg text-gray-700" key={word._id}>
                            <p className="text-start">{word.englishWord}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SeeWordsList;