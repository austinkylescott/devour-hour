import React from "react"
import Layout from "../components/styles/layout"
import LatestItem from "../components/LatestItem"

export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <LatestItem />
      </Layout>
    </React.Fragment>
  )
}
