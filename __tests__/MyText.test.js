import { render } from "@testing-library/react-native";
import MyText from "../src/components/MyText";

test("renders correctly", () => {
  const { toJSON } = render(<MyText>Hello</MyText>);
  const tree = toJSON();
  console.log("TREE:", tree);
  expect(tree).toMatchSnapshot();
});
