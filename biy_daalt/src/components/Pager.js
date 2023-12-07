import React, { useState, useEffect } from "react";
import Article from "./Article";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 10;

    useEffect(() => {
        const getCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.error(error);
            }
        };
        getCountries();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset page to 1 when search query changes
    };

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination logic
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = filteredCountries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Generate an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredCountries.length / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <section className="container mx-auto p-8">
                <div>
                    <input
                        type="text"
                        placeholder="Search countries..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="p-2 mb-4 border border-gray-300 rounded"
                    />
                </div>
                <div className="row-auto hover:bg-grey-100">                    {currentCountries.map((country) => (
                        <Article key={country.name.common} {...country}></Article>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                    >
                        Previous
                    </button>
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                                currentPage === number ? "bg-blue-700" : ""
                            }`}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={indexOfLastCountry >= filteredCountries.length}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    );
}