import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { allWatches, searchWatches } from "../../../apis/watches";
import { getAllBrand } from "../../../apis/brand";

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const navigate = useNavigate();
  const [searchElement, setSearchElement] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState([]);
  const [querySearch, setQuerySearch] = useState(window.location.search);
  const [selectProduct, setSelectProduct] = useState(null);
  const [brands, setBrands] = useState([])
  const [selectBrand, setSelectBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(querySearch.split("=")[1]);

  async function fetchData() {
    const { data: { data } } = await getAllBrand()
    data.unshift({ id: 0, name: 'All brand' })
    setBrands(data)
    const query = window.location.search;
    setQuerySearch(query);

    const response = await allWatches();
    setFilterData(response.data.data);

    if (querySearch !== "") {
      const response = await searchWatches(querySearch);
      setProducts(response.data.data);
    } else {
      const response = await allWatches();
      setProducts(response.data.data);
    }
  }


  useEffect(() => {
    fetchData();
  }, [querySearch, window.location.pathname]);

  // dropdown-search
  const handleFilter = (value) => {
    setSearchElement(value);
    const result = filterData.filter((model) =>
      model.modelName.toLowerCase().includes(value)
    );
    setSearch(result);
    if (value === "") {
      setSearch([]);
    }
  };

  // select-search
  const handleItemClick = (item) => {
    setSearch([]);
    setShowSearch(item.modelName);
    setSearchElement("");
    navigate(`/search?keyword=${item.modelName}`);
    setQuerySearch(window.location.search);
  };

  // option-product
  const handleSelectProduct = (e) => {
    setSelectProduct(e.target.value);
  };

  // option-brand
  const handleSelectBrand = (e) => {
    setSelectBrand(e.target.value);
  };

  // search-by-active-enter
  const handleEnterSearch = (value) => {
    setShowSearch(value);
    setSearchElement("");
    navigate(`/search?keyword=${value.toLowerCase()}`);
    setQuerySearch(window.location.search);
    setSearch([]);
  };

  // Reset-search (Menu Gallery)
  const handleResetQuerySearch = () => {
    setShowSearch("");
    setQuerySearch("");
  };
  return (
    <SearchContext.Provider
      value={{
        fetchData,
        searchElement,
        setSearchElement,
        showSearch,
        setShowSearch,
        search,
        setSearch,
        querySearch,
        brands,
        selectBrand,
        handleFilter,
        handleItemClick,
        selectProduct,
        products,
        handleSelectProduct,
        handleSelectBrand,
        handleEnterSearch,
        handleResetQuerySearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
