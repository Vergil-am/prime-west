import { BLOCKS} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="scroll-m-20 text-l font-semibold tracking-tight">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      return (
        <ol className="my-6 ml-6 list-disc [&>li]:mt-2">
          {children.map((item: any) => (
            <li key={item.key}>{item.props.children[0].props.children[0]}</li>
          ))}
        </ol>
      );
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {children.map((item: any) => (
            <li key={item.key}>{item.props.children[0].props.children[0]}</li>
          ))}
        </ul>
      );
    },
  },
};
export default function Description({ Body }: any) {
  console.log(Body);
  return documentToReactComponents(Body, options);
}
