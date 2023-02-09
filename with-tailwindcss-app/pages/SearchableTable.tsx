import { JSXElementConstructor, ReactElement, ReactFragment, useState } from "react";

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
type ProductsProps = {
  products: Product[];
};
export default function SearchableTable() {
  return <FilterableProductTable products={PRODUCTS} />;
}

function FilterableProductTable(productsProps: ProductsProps) {
  // function FilterableProductTable({ ...products }: Product[]) {
  const [filterText, setFilterText] = useState("fruit");
  const [isInStock, setIsInStock] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        isInStock={isInStock}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setIsInStock}
      />
      <ProductTable
        filterText={filterText}
        isInStock={isInStock}
        products={productsProps.products}
      />
    </div>
  );
}
type SearchBarProps = {
  filterText: string;
  isInStock: boolean;
  // onFilterTextChange:() =>{};
  // onInStockOnlyChange: () =>();
  onFilterTextChange: Function;
  onInStockOnlyChange: Function;
};
// function SearchBar(searchBarProps: SearchBarProps) {
function SearchBar({
  isInStock,
  filterText,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
          value={`${isInStock}`}
          onChange={(e) => onInStockOnlyChange(e.target.value)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
type ProductTableProps = {
  filterText: string;
  isInStock: boolean;
  products: Product[];
};
function ProductTable(productTableProps: ProductTableProps) {
  let rows: JSX.Element[] = [];
  let lastCategory: string;

  productTableProps.products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.name} />);
      // rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
type ProductCategoryRowProps = {
  category: string;
};
function ProductCategoryRow(productCategoryRowProps: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>{productCategoryRowProps.category}</th>
    </tr>
  );
}
type ProductRowProps = {
  product: Product;
};
function ProductRow(productRowProps: ProductRowProps) {
  const name = productRowProps.product.stocked ? (
    <span className="">{productRowProps.product.name}</span>
  ) : (
    <span className="text-red-600">{productRowProps.product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{productRowProps.product.price}</td>
    </tr>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
