import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Products from "@/components/Products";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "@/components/Cart";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCart, setActiveCart] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://dvishal485.github.io/flipkart-scraper-api/sample-search.json"
      )
      .then((res) => {
        console.log(res.data.result);
        setProducts(res.data.result);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>E-commerce</title>
      </Head>
      <Header
        setActiveCart={setActiveCart}
        cart={cart}
        search={search}
        setSearch={setSearch}
      />
      {!activeCart && (
        <Products
          cart={cart}
          products={products}
          setCart={setCart}
          search={search}
        />
      )}
      {activeCart && <Cart setActiveCart={setActiveCart} cart={cart} />}
    </div>
  );
}
