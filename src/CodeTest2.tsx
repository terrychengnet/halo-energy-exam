import React, {useState, useEffect} from "react";

const CodeTest2: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">
        Please write a custom hook to fetch products from{" "}
        <a
          className="text-blue-500 underline"
          href="https://dummyjson.com/products"
        >
          https://dummyjson.com/products
        </a>
      </h1>

      <div>
        API Documents:{" "}
        <a
          className="text-blue-500 underline"
          href="https://dummyjson.com/docs/products"
        >
          https://dummyjson.com/docs/products
        </a>
      </div>
      <div>
        <div>Requirements:</div>
        <ol className="list-decimal list-inside text-gray-600">
          <li>
            The hook should at least return loading state and the list of
            products
          </li>
          <li>
            Render a <strong>full</strong> list of products
          </li>
          <li>Add a input textbox to filter products</li>
          <li>Add pagination</li>
        </ol>
      </div>

      <hr />

      <ProductInspector />
    </div>
  );
};

const ProductInspector: React.FC = () => {

  // Custom Hook
  const useApi = (url: any) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json.products);
          setLoading(false);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    useEffect(() => {
      fetchData();
    }, []);

    return { loading, data }
  };

  const { loading, data } = useApi('https://dummyjson.com/products')
  const productList = data

  // Loading
  if(loading) return <h1 className="text-center uppercase font-bold text-xl p-5">Loading Products</h1>

  return (
    <div className="text-gray-400">
      <div className="productContainer">
        <ul className="flex flex-col max-w-3xl">
          { productList.map((product,i) => (
            <li className="p-5 flex flex-row bg-black rounded-md mb-5" key={i}>
                <h1 className="text-3xl text-white font-bold min-w-min" style={{width: "200px"}}>{product.title}</h1>
                <img className="block ml-5 object-scale-down" src={product.thumbnail} alt="" height={100} />
            </li>
            )
          ) }
        </ul>
      </div>
    </div>
  );
};

export default CodeTest2;
