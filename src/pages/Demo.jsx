import DemoView from "@/core/DemoView";
import Layout from "@/core/Layout";
import renderComponent from "@/utils";
import { useParams } from "react-router";

function Demo() {
    const params = useParams();

    return (
        <Layout>
            <DemoView renderView={renderComponent(params.id)} />
        </Layout>
    )
}

export default Demo;