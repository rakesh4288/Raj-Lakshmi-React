import { render, screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

test("CASE 1: Checking content available", () => {
    render(<PageNotFound />)
    const errorMsg = screen.getByTestId('not-found-message');
    expect(errorMsg).toBeInTheDocument();
})