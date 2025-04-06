import Autocomplete from "@/components/Autocomplete";
import DemoView from "@/core/DemoView";
import Layout from "@/core/Layout";

function Demo() {
    return (
        <Layout>
            <DemoView renderView={<Autocomplete />} />
        </Layout>
    )
}

export default Demo;