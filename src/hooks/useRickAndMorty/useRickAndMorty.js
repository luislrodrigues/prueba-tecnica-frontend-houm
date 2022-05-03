import axios from "axios";
import { useState } from "react";

const useRickAndMorty = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState(false);
    const [page, setPage] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");

    const ENDPOINT = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`;
    const getCharacters = async () => {
        try {
            const res = await axios.get(ENDPOINT);
            const data = res.data;
            setCharacters(data.results);
            setInfo(data.info);
        } catch (error) {
            console.error(error);
            setCharacters([]);
            setInfo(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setPage("");
        setName(e.target.search.value);
    };
    const updatePage = (e, value) => {
        setPage(value);
    };
    const handleChangeGender = (e) => {
        setPage("");
        setGender(e.target.value);
    };
    const handleChangeStatus = (e) => {
        setPage("");
        setStatus(e.target.value);
    };

    return {
        getCharacters,
        characters,
        name,
        status,
        gender,
        ENDPOINT,
        page,
        info,
        handleSearch,
        updatePage,
        handleChangeGender,
        handleChangeStatus,
    };
};

export default useRickAndMorty;
