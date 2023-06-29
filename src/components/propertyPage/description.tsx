import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{children}</h1>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {children.map((item) => (
            <li key={item.key}>{item.props.children[0].props.children[0]}</li>
          ))}
        </ul>
      );
    },
  },
};
export default function Description({ Body }: any) {
  console.log(Body)
  return (documentToReactComponents(Body, options));
}
