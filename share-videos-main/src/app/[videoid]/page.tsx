import { Metadata, ResolvingMetadata } from "next"
import Template from "../../components/template" 
import amplifyconfig from "../../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { getShareModel } from "../../graphql/queries";
import { generateClient } from "aws-amplify/api";
import { cache } from "react";

Amplify.configure(amplifyconfig);
const client = generateClient()


const getInfo = cache(async (videoid: string) => 
{
  const x = videoid.substring(0, 8)
  const y = videoid.substring(8, 12)
  const z = videoid.substring(12, 16)
  const k = videoid.substring(16, 20)
  const m = videoid.substring(20, 32)
  const lovfun = await client.graphql({
  query: getShareModel,
  variables: { id: `${x}-${y}-${z}-${k}-${m}` }
  })
  return lovfun;
}
)
export async function generateMetadata(
  { params }: { 
    params: { 
    videoid: string;
    }; 
  },
  parent: ResolvingMetadata
): Promise<Metadata> {

var nameS: string | null | undefined;
var idS: string | null | undefined;
var domain: string | null | undefined;

const response = await getInfo(params.videoid);

nameS=response.data.getShareModel?.name;
domain=response.data.getShareModel?.domain;
idS="https://image.mux.com/"+response.data.getShareModel?.videoId+"/thumbnail.jpg";
  
    
    return {
      title: "A video just for you, " + nameS,
      description: "Delivered with love from " + domain + ", this was made to brighten up your day",
      metadataBase: new URL("https://purepitchai.com"),
      openGraph: {
        url: "https://share.purepitchapp.com/"+params.videoid,
        images: [
          {
            url: idS, 
            width: 800,
            height: 600,
          }
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "A video just for you, " + nameS,
        description: "Delivered with love from " + domain + ", this was made to brighten up your day",
        images: [idS],
      },
    }
}
 


export default async function Home({ params }: { 
  params: { 
  videoid: string;
  }; 
}) {
  const response = await getInfo(params.videoid);
  return (
    <Template params={{
      videoid: params.videoid,
    }} response={response}></Template>
  );
}
