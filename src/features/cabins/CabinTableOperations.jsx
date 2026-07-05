import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sory by name (A-Z)" },
          { value: "name-desc", label: "Sory by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sory by price (Low to High)" },
          { value: "regularPrice-desc", label: "Sory by price (High to Low)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (Low to High)" },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (High to Low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
