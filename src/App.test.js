import { render, screen } from "@testing-library/react";
import StoreContextProvider from "./context/StoreContext";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";

test("shows only dishes from the selected category", () => {
  render(
    <StoreContextProvider>
      <FoodDisplay category='Cake' />
    </StoreContextProvider>
  );
  expect(screen.getByText("Our Signature dishes")).toBeInTheDocument();
  expect(screen.queryByText("Greek salad")).not.toBeInTheDocument();
});
