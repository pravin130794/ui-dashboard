// src/pages/Dashboard.jsx
import { SimpleGrid } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";
import StatsCard from "../components/Cards/StatsCard";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext"; // Import context

export default function Dashboard() {
  const navigate = useNavigate();
  const { setSelectedOrder } = useOrder(); // if you want to optionally pre-select

  return (
    <>
      {/* Top Stats Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing="6" mb="6">
        <StatsCard
          title="Active Orders"
          amount="2,300"
          growth="+5.20%"
          icon={FaUsers}
          onClick={() => {
            setSelectedOrder(null); // optional: clear selected order
            navigate("/analysis"); // redirect to analysis page
          }}
        />
      </SimpleGrid>

      {/* Charts Section (optional, you commented it) */}
      {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
        <LineChart />
        <BarChart />
      </SimpleGrid> */}
    </>
  );
}
