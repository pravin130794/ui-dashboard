// src/pages/Dashboard.jsx
import { SimpleGrid } from "@chakra-ui/react";
import {
  FaMoneyBillWave,
  FaUsers,
  FaUserPlus,
  FaChartLine,
} from "react-icons/fa";
import StatsCard from "../components/Cards/StatsCard";
import LineChart from "../components/Charts/LineChart";
import BarChart from "../components/Charts/BarChart";

export default function Dashboard() {
  return (
    <>
      {/* Top Stats Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing="6" mb="6">
        {/* <StatsCard
          title="Today's Money"
          amount="$53,897"
          growth="+3.48%"
          icon={FaMoneyBillWave}
        /> */}
        <StatsCard
          title="Active Orders"
          amount="2,300"
          growth="+5.20%"
          icon={FaUsers}
        />
        {/* <StatsCard
          title="New Clients"
          amount="364"
          growth="-2.48%"
          icon={FaUserPlus}
        />
        <StatsCard
          title="Total Sales"
          amount="$103,430"
          growth="+8.12%"
          icon={FaChartLine}
        /> */}
      </SimpleGrid>

      {/* Charts Section */}
      {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
        <LineChart />
        <BarChart />
      </SimpleGrid> */}
    </>
  );
}
