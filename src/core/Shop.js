import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import Footer from './Footer';
import { prices } from "./FixedPrices";
import Search from './Search';
//import Dropdown from 'react-bootstrap/Dropdown';

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(8);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="filterBtn mb-5">
                    Load more Products
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };

    return (
        <div className='container-fluid'>
            <Menu />
            <div className="separator mb-4 mt-5">Shop</div>
                <div className="">
                    <div className='shopDrop'>
                        <Dropdown className='noHover mb-5'>
                            <Dropdown.Toggle className='filterBtn' variant="none">
                                Filter by Medium
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Checkbox
                                    categories={categories}
                                    handleFilters={filters =>
                                        handleFilters(filters, "category")
                                    }
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='container'>
                        <div className="row shopCards">
                            {filteredResults.map((product, i) => (
                                <div key={i} className='mr-3 mb-3'>
                                    <Card product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='shopDrop'>
                        {loadMoreButton()}
                    </div>
                </div>
                <Footer />
        </div>
    );
};

export default Shop;


                {/* <div className="col-2">
                    <h4>Filter by Medium</h4>
                    <ul>
                        <Checkbox
                            categories={categories}
                            handleFilters={filters =>
                                handleFilters(filters, "category")
                            }
                        />
                    </ul>

                    {/* <h4>Filter by price</h4>
                    <div>
                        <RadioBox
                            prices={prices}
                            handleFilters={filters =>
                                handleFilters(filters, "price")
                            }
                        />
                    </div> */}
                {/* </div> */} 

