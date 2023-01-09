import * as React from "react";
import generateSchedule from "../helper/schedule";
import Layout from "../components/layout";
import "../assests/css/bootstrap.min.css";
import "../components/global.css";
import Table from "../components/Table/Table";
import Seo from "../components/Seo/Seo";

export default function Home() {
  const schedule = generateSchedule(60);
  return (
    <Layout>
      <Seo title="Home" />
      <div className="spad">
        <h2 className="text-center">ToolBox Schedule</h2>
        <Table schedule={schedule} />
      </div>
    </Layout>
  );
}
